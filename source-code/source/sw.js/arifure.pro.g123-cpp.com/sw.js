var V = Object.defineProperty;
var P = (s, e, t) => e in s ? V(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t;
var u = (s, e, t) => P(s, typeof e != "symbol" ? e + "" : e, t);
const o = {
    appId: "",
    appKey: "",
    origin: self.origin,
    authToken: "",
    cacheEnabled: !1,
    maxStorage: 1073741824,
    enabledFeatures: [],
    commands: []
};
async function j(s) {
    const e = {};
    s.headers.forEach( (r, c) => {
        e[c] = r
    }
    );
    const t = JSON.stringify(e)
      , a = await s.arrayBuffer();
    return {
        headers: t,
        body: a
    }
}
async function J(s) {
    return new Response(s.body,{
        headers: JSON.parse(s.headers)
    })
}
const M = (s, e=null) => {
    try {
        return JSON.parse(s)
    } catch {
        return e
    }
}
;
async function K() {
    try {
        return (await navigator.storage.estimate()).usage
    } catch {
        return 0
    }
}
let k = "info";
const i = {
    setLogLevel(s) {
        k = s
    },
    info: (...s) => {
        console.log("[FlashSdk]", ...s)
    }
    ,
    debug: (...s) => {
        k === "debug" && console.log("[FlashSdk]", ...s)
    }
};
function N() {
    return typeof self.crypto.randomUUID == "function" ? self.crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, s => (Number(s) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(s) / 4).toString(16))
}
class G {
    constructor() {
        u(this, "clients");
        u(this, "clientId");
        u(this, "errors", new Set);
        u(this, "enabled", !0);
        u(this, "cacheManager")
    }
    updateClientId(e) {
        this.clientId = e,
        this.postMessage()
    }
    setClients(e) {
        this.clients = e
    }
    setEnabled(e) {
        this.enabled = e,
        this.postMessage()
    }
    setCacheManager(e) {
        this.cacheManager = e
    }
    async send(e, t) {
        if (!t || !t.message || !this.enabled)
            return;
        const a = {
            message: `${e}: ${String(t.message)}`,
            stack: String(t.stack),
            name: `[Service Worker]: ${String(t.name)}`
        };
        this.errors.add(a),
        this.postMessage()
    }
    async postMessage() {
        var t, a;
        if (!this.enabled || !this.clientId)
            return;
        const e = await ((t = this.clients) == null ? void 0 : t.get(this.clientId));
        if (e && this.errors.size > 0) {
            const r = Array.from(this.errors);
            this.errors.clear();
            const c = await ((a = this.cacheManager) == null ? void 0 : a.syncCacheSize());
            e.postMessage({
                type: "reportError",
                data: {
                    errors: r,
                    usage: c
                }
            })
        }
    }
}
const f = new G
  , A = 2e3
  , U = 2e3
  , B = 100
  , X = 400
  , x = "flash_launch_localInfo";
class Y {
    constructor(e) {
        u(this, "cache");
        u(this, "priorityResources", {});
        u(this, "resourcesMapping", {});
        u(this, "cacheUsedMap", {});
        u(this, "saveCacheUsedMapTimer", null);
        u(this, "saveResourceMappingTimer", null);
        u(this, "cacheWriteQueue", []);
        u(this, "cacheWriteQueueTimer", null);
        u(this, "isEvicting", !1);
        u(this, "totalCacheSize", 0);
        u(this, "maxStorage", 0);
        this.cache = e.cache
    }
    async init() {
        this.resourcesMapping = await this.getResourceMapping(),
        this.cacheUsedMap = await this.getCacheUsedMap(),
        this.priorityResources = await this.getPriorityResources(),
        await this.syncCacheSize()
    }
    async clearAll() {
        await this.cache.clearAll(),
        this.resourcesMapping = {},
        await this.saveResourceMapping(),
        this.cacheUsedMap = {},
        await this.saveCacheUsedMap(),
        await this.setPriorityResources([]),
        this.totalCacheSize = 0
    }
    async syncCacheSize() {
        const {size: e, fileCount: t} = await this.cache.getCurrentUsage()
          , a = Object.values(this.cacheUsedMap).reduce( (c, {size: n}) => c + (Number(n) || 0), 0);
        i.info(`[CacheManager] syncCacheSize: currentUsage: ${e / 1024 / 1024}MB, fileCount: ${t}, caculatedSize: ${a}`),
        this.totalCacheSize = e;
        const r = await this.loadLocalMaxStorage();
        return r && (i.info(`[CacheManager] syncCacheSize: localMaxStorage: ${r / 1024 / 1024}MB`),
        this.maxStorage = r),
        {
            size: e,
            fileCount: t,
            caculatedSize: a,
            maxStorage: this.maxStorage
        }
    }
    async evictCache() {
        if (await this.syncCacheSize(),
        this.totalCacheSize < this.maxStorage * .85 || this.isEvicting)
            return;
        this.isEvicting = !0;
        const e = this.maxStorage * .8
          , t = [];
        try {
            const r = Object.entries(this.cacheUsedMap).sort( ([n,d], [p,h]) => d.usedAt === 0 && h.usedAt === 0 ? h.writeAt - d.writeAt : d.usedAt === 0 ? -1 : h.usedAt === 0 ? 1 : d.usedAt - h.usedAt);
            i.debug("start cleaning cache", r);
            const c = Date.now();
            for (; this.totalCacheSize > e && r.length > 0 && !(Date.now() - c > 2e3); ) {
                const [d,p] = r.shift() || [];
                if (d) {
                    const h = await this.cache.removeFromCache(d);
                    p != null && p.size ? this.totalCacheSize -= p.size : this.totalCacheSize -= h,
                    t.push(d)
                }
            }
            r.length === 0 && await this.cache.clearCache()
        } catch (r) {
            f.send("evictCache", r),
            i.info("evict cache error", r)
        }
        i.info(`evictCache done, total:${this.totalCacheSize}, max:${this.maxStorage}, used: ${Math.floor(this.totalCacheSize * 100 / this.maxStorage)}%`),
        t.forEach(r => {
            delete this.cacheUsedMap[r]
        }
        ),
        t.length > 0 && await this.saveCacheUsedMap();
        const a = {};
        for (const r in this.resourcesMapping)
            a[this.resourcesMapping[r]] = r;
        t.forEach(r => {
            a[r] && delete this.resourcesMapping[a[r]]
        }
        ),
        await this.saveResourceMapping(),
        this.isEvicting = !1
    }
    async getResourceVersion() {
        const e = await this.cache.read(this.cache.configDir, "resourceVersion");
        return e ? new TextDecoder().decode(e) : ""
    }
    async setResourceVersion(e) {
        return await this.cache.write(this.cache.configDir, "resourceVersion", e)
    }
    async getLeadResourceLastSyncedAt() {
        const e = await this.cache.read(this.cache.configDir, "leadResourceLastSyncedAt");
        return e ? new TextDecoder().decode(e) : ""
    }
    async setLeadResourceLastSyncedAt(e) {
        return await this.cache.write(this.cache.configDir, "leadResourceLastSyncedAt", e)
    }
    async getResourceMapping() {
        const e = await this.cache.read(this.cache.configDir, "resourceMapping")
          , t = e ? new TextDecoder().decode(e) : "{}"
          , a = M(t, {});
        return typeof a != "object" ? {} : a
    }
    async saveResourceMapping(e=!1) {
        if (e)
            return await this.cache.write(this.cache.configDir, "resourceMapping", JSON.stringify(this.resourcesMapping));
        this.saveResourceMappingTimer || (this.saveResourceMappingTimer = setTimeout(async () => {
            await this.cache.write(this.cache.configDir, "resourceMapping", JSON.stringify(this.resourcesMapping)),
            this.saveResourceMappingTimer = null
        }
        , A))
    }
    setMaxStorage(e) {
        this.maxStorage = e
    }
    async loadLocalMaxStorage() {
        const e = await this.cache.read(this.cache.configDir, "maxStorage")
          , t = e ? new TextDecoder().decode(e) : "{}"
          , a = M(t, {});
        return typeof a != "object" ? 0 : Number(a.storage) || 0
    }
    async saveMaxStorage() {
        return await this.cache.write(this.cache.configDir, "maxStorage", JSON.stringify({
            storage: this.maxStorage
        }))
    }
    async addResource(e) {
        this.resourcesMapping[e.name] = e.hash_id,
        this.saveResourceMapping()
    }
    async replaceResources(e) {
        if (Array.isArray(e))
            return Object.keys(this.resourcesMapping).length >= 5e4 && (this.resourcesMapping = {}),
            e.forEach(t => {
                this.resourcesMapping[t.name] = t.hash_id
            }
            ),
            this.saveResourceMapping(!0)
    }
    async getCacheUsedMap() {
        const e = await this.cache.read(this.cache.configDir, "cacheUsedMap")
          , t = e ? new TextDecoder().decode(e) : "{}"
          , a = M(t, {});
        return typeof a != "object" ? {} : a
    }
    async saveCacheUsedMap() {
        this.saveCacheUsedMapTimer || (this.saveCacheUsedMapTimer = setTimeout(async () => {
            await this.cache.write(this.cache.configDir, "cacheUsedMap", JSON.stringify(this.cacheUsedMap)),
            this.saveCacheUsedMapTimer = null
        }
        , A))
    }
    async getPriorityResources() {
        const e = await this.cache.read(this.cache.configDir, "priorityResources")
          , t = e ? new TextDecoder().decode(e) : "{}"
          , a = M(t, {});
        return typeof a != "object" ? {} : a
    }
    async setPriorityResources(e) {
        return this.priorityResources = {},
        e.forEach(t => {
            this.priorityResources[t.name] = {
                level: t.level || 1
            }
        }
        ),
        await this.cache.write(this.cache.configDir, "priorityResources", JSON.stringify(this.priorityResources))
    }
    async updateCacheUsedMap(e, t) {
        (!this.cacheUsedMap[e] || typeof this.cacheUsedMap[e] != "object") && (this.cacheUsedMap[e] = {
            usedAt: 0,
            writeAt: 0,
            size: 0
        }),
        t.usedAt !== void 0 && (this.cacheUsedMap[e].usedAt = t.usedAt),
        t.writeAt !== void 0 && (this.cacheUsedMap[e].writeAt = t.writeAt),
        t.size !== void 0 && (this.cacheUsedMap[e].size = t.size),
        this.saveCacheUsedMap()
    }
    async readResponse(e) {
        const t = new URL(e).pathname
          , a = this.resourcesMapping[t];
        if (!a)
            return;
        const r = await this.cache.readResponse(a);
        if (r) {
            const c = this.cacheUsedMap[a];
            let n = (c == null ? void 0 : c.size) || r.size;
            n || (n = await this.cache.readResponseSize(a)),
            this.updateCacheUsedMap(a, {
                usedAt: Date.now(),
                size: n
            })
        } else
            i.debug("[CacheManager] readResponse cache MISS", e, a);
        return r == null ? void 0 : r.response
    }
    async processCacheWriteQueue() {
        if (this.cacheWriteQueue.length === 0)
            return;
        let e = 0;
        for (; this.cacheWriteQueue.length > 0 && e < B; ) {
            const {url: t, hash: a, response: r} = this.cacheWriteQueue.shift()
              , {success: c, size: n} = await this.cache.writeResponse(a, r);
            if (c)
                i.debug("[CacheManager] writeResponse success", t, a, n),
                this.addResource({
                    hash_id: a,
                    name: new URL(t).pathname
                }),
                this.updateCacheUsedMap(a, {
                    writeAt: Date.now(),
                    size: n
                });
            else {
                i.info("[CacheManager] writeResponse failed, clear cache write queue", t, a),
                this.cacheWriteQueue = [],
                this.setMaxStorage(this.totalCacheSize),
                await this.evictCache(),
                await this.saveMaxStorage();
                break
            }
            e++
        }
        i.info("[FlashSdk][OpfsCache] write cache entries:", e),
        this.cacheWriteQueueTimer = null,
        this.cacheWriteQueue.length > 0 && (this.cacheWriteQueueTimer = setTimeout( () => {
            this.processCacheWriteQueue()
        }
        , U))
    }
    async writeResponse(e, t) {
        var r;
        let a = t.headers.get("etag");
        if (!a) {
            i.debug("[CacheManager] no etag", e);
            return
        }
        if (a = ((r = a.match(/"([^"]*)"/)) == null ? void 0 : r[1]) || a,
        !(this.cacheWriteQueue.length >= X) && (this.cacheWriteQueue.push({
            url: e,
            hash: a,
            response: t
        }),
        !this.cacheWriteQueueTimer)) {
            if (this.isEvicting)
                return;
            this.cacheWriteQueueTimer = setTimeout( () => {
                this.processCacheWriteQueue()
            }
            , U)
        }
    }
    async writeResourceMapping(e) {
        this.resourcesMapping = e
    }
    async getLocalInfo() {
        try {
            const e = await this.cache.read(this.cache.configDir, x);
            if (e) {
                const t = JSON.parse(new TextDecoder().decode(e));
                if (t != null && t.deviceUuid && (t != null && t.installedAt))
                    return i.debug("[CacheManager] getLocalInfo from cache", t),
                    {
                        ...t,
                        type: "cache"
                    };
                throw new Error("no deviceUuid or installedAt")
            }
            throw new Error("no local info")
        } catch (e) {
            i.debug("[CacheManager] getLocalInfo error", e);
            const t = {
                installedAt: String(Date.now()),
                deviceUuid: N()
            };
            return await this.cache.write(this.cache.configDir, x, JSON.stringify(t)),
            i.debug("[CacheManager] getLocalInfo generate new LocalInfo", t),
            {
                ...t,
                type: "create"
            }
        }
    }
}
class Z {
    constructor() {
        u(this, "cacheDir");
        u(this, "configDir");
        this.cacheDir = null,
        this.configDir = null
    }
    async init() {
        try {
            const e = await navigator.storage.getDirectory();
            return this.cacheDir = await e.getDirectoryHandle("cache", {
                create: !0
            }),
            this.configDir = await e.getDirectoryHandle("config", {
                create: !0
            }),
            !0
        } catch (e) {
            return f.send("OpfsCache init", e),
            i.info("init opfs cache error", e),
            !1
        }
    }
    async removeFromCache(e) {
        if (!e || !this.cacheDir)
            return 0;
        const t = await this.readResponseSize(e);
        return await this.removeResponse(e),
        i.debug("removeFromCache", e, t),
        t
    }
    async clearCache() {
        if (this.cacheDir)
            for await(const e of this.cacheDir.keys())
                await this.cacheDir.removeEntry(e)
    }
    async clearAll() {
        if (await this.clearCache(),
        this.configDir)
            for await(const e of this.configDir.keys())
                await this.configDir.removeEntry(e)
    }
    async getDirStatus(e) {
        let t = 0
          , a = 0;
        for await(const r of e.values())
            if (r.kind === "file") {
                a++;
                try {
                    const c = await e.getFileHandle(r.name);
                    if (!c)
                        continue;
                    if (c.getSize) {
                        const n = await c.getSize();
                        t += n
                    } else {
                        const n = await c.getFile();
                        t += n.size
                    }
                } catch (c) {
                    f.send("getDirStatus", c),
                    a--
                }
            }
        return {
            size: t,
            fileCount: a
        }
    }
    async getCurrentUsage() {
        if (!this.cacheDir || !this.configDir)
            return {
                size: 0,
                fileCount: 0
            };
        const e = await K();
        if (e)
            return {
                size: e,
                fileCount: -1
            };
        const t = await this.getDirStatus(this.cacheDir)
          , a = await this.getDirStatus(this.configDir);
        return {
            size: t.size + a.size,
            fileCount: t.fileCount + a.fileCount
        }
    }
    async removeResponse(e) {
        try {
            return await this.remove(this.cacheDir, `${e}:::headers`),
            await this.remove(this.cacheDir, `${e}:::body`),
            !0
        } catch {
            return !1
        }
    }
    async writeResponse(e, t) {
        var h;
        const a = await j(t)
          , r = `${e}:::headers`
          , c = `${e}:::body`
          , n = await this.write(this.cacheDir, r, a.headers)
          , d = await this.write(this.cacheDir, c, a.body)
          , p = n && d;
        return p || await this.removeResponse(e),
        {
            success: p,
            size: a.body.byteLength + (((h = a.headers) == null ? void 0 : h.length) || 0)
        }
    }
    async readResponse(e) {
        try {
            const t = await this.read(this.cacheDir, `${e}:::headers`);
            if (!t || t.byteLength === 0)
                return null;
            let a = await this.readFile(this.cacheDir, `${e}:::body`);
            if (!a || a.size === 0)
                return null;
            const r = t ? new TextDecoder().decode(t) : "{}";
            return {
                response: await J({
                    body: a,
                    headers: r
                }),
                size: a.size + ((t == null ? void 0 : t.byteLength) || 0)
            }
        } catch (t) {
            return i.info("[FlashSdk][OpfsCache] readResponse error", t),
            this.removeResponse(e),
            null
        }
    }
    async readResponseSize(e) {
        const t = await this.read(this.cacheDir, `${e}:::headers`);
        let a = await this.read(this.cacheDir, `${e}:::body`);
        return a ? a.byteLength + ((t == null ? void 0 : t.byteLength) || 0) : 0
    }
    normalizeKey(e) {
        return e.replace(/[^\w]/g, "_")
    }
    async remove(e, t) {
        if (!e)
            return;
        const a = this.normalizeKey(t);
        await e.removeEntry(a)
    }
    async readFile(e, t) {
        if (!e)
            return null;
        const a = this.normalizeKey(t);
        try {
            return await (await e.getFileHandle(a)).getFile()
        } catch {
            return null
        }
    }
    async read(e, t) {
        const a = await this.readFile(e, t);
        return a ? a.arrayBuffer() : null
    }
    async write(e, t, a) {
        if (!e)
            return !1;
        const r = this.normalizeKey(t);
        try {
            const n = await (await e.getFileHandle(r, {
                create: !0
            })).createWritable();
            return await n.write(a),
            await n.close(),
            !0
        } catch (c) {
            return i.info("[FlashSdk][OpfsCache] write opfs cache error", c),
            f.send("write", c),
            !1
        }
    }
}
const z = "https://fl-api.g123.jp";
function _(s, e={}, t=6e3) {
    if (typeof AbortController > "u")
        return fetch(s, e);
    const a = new AbortController
      , {signal: r} = a
      , c = setTimeout( () => a.abort(), t);
    return fetch(s, {
        ...e,
        signal: r
    }).finally( () => clearTimeout(c)).catch(n => {
        throw n.name === "AbortError" ? new Error("Fetch request timed out") : n
    }
    )
}
const I = {
    async fetchMetadata(s, e, t, a) {
        return _(`${z}/api/v1/app/${s}?user_id=${a}&ts=${Date.now()}`, {
            headers: {
                "x-app-key": e,
                Authorization: `Bearer ${t}`
            },
            cache: "no-store"
        }).then(r => {
            if (!r.ok)
                throw new Error("Failed to fetch metadata");
            return r.json()
        }
        )
    },
    async fetchResources(s, e, t, a) {
        return _(`${z}/api/v1/app/${s}/resources?version=${a}&ts=${Date.now()}`, {
            headers: {
                "x-app-key": e,
                Authorization: `Bearer ${t}`
            },
            cache: "no-store"
        }).then(r => {
            if (!r.ok)
                throw new Error("Failed to fetch resources");
            return r.json()
        }
        )
    },
    async fetchLeadResources(s, e, t, a) {
        return _(`${z}/api/v1/lead/app/${s}/resources?lastSyncedAt=${a}&ts=${Date.now()}`, {
            headers: {
                "x-app-key": e,
                Authorization: `Bearer ${t}`
            },
            cache: "no-store"
        }).then(r => {
            if (!r.ok)
                throw new Error("Failed to fetch lead resources");
            return r.json()
        }
        )
    }
};
var C = (s => (s.CACHE = "cache",
s.LEAD_CACHE = "lead_cache",
s.TRACING = "tracing",
s.DEBUG = "debug",
s.REPORT_ERROR = "report_error",
s))(C || {})
  , Q = (s => (s.CLEAR = "clear",
s))(Q || {})
  , y = (s => (s.IOS = "ios",
s.MAC = "mac",
s.ANDROID = "android",
s.WINDOWS = "windows",
s.OTHERS = "others",
s))(y || {})
  , m = (s => (s.CHROME = "chrome",
s.EDGE = "edge",
s.FIREFOX = "firefox",
s.SAFARI = "safari",
s.OTHERS = "others",
s))(m || {});
function ee(s) {
    let e = y.OTHERS;
    /iphone|ipad|ipod/i.test(s) ? e = y.IOS : /macintosh|mac os x/i.test(s) ? e = y.MAC : /android/i.test(s) ? e = y.ANDROID : /windows|win32|win64/i.test(s) && (e = y.WINDOWS);
    let t = m.OTHERS;
    return s.includes("edge") || s.includes("edg") ? t = m.EDGE : s.includes("chrome") || s.includes("chromium") || s.includes("crios") ? t = m.CHROME : s.includes("firefox") ? t = m.FIREFOX : s.includes("safari") && !s.includes("chrome") && (t = m.SAFARI),
    {
        browser: t,
        os: e
    }
}
const L = "/flashlaunch";
class te {
    constructor() {
        u(this, "configDir");
        u(this, "cacheDir");
        this.configDir = null,
        this.cacheDir = null
    }
    async init() {
        try {
            return this.cacheDir = await caches.open("flash-launch"),
            this.configDir = await caches.open("config-flash-launch"),
            !0
        } catch (e) {
            return i.info("init cache error", e),
            f.send("SafariCache init", e),
            !1
        }
    }
    async removeFromCache(e) {
        if (!e || !this.cacheDir)
            return 0;
        const t = await this.readResponseSize(e);
        return await this.removeResponse(e),
        i.debug("removeFromCache", e, t),
        t
    }
    async clearCache() {
        if (this.cacheDir) {
            const e = await this.cacheDir.keys();
            for (const t of e)
                await this.cacheDir.delete(t)
        }
    }
    async clearAll() {
        if (await this.clearCache(),
        this.configDir) {
            const e = await this.configDir.keys();
            for (const t of e)
                await this.configDir.delete(t)
        }
    }
    async getDirStatus(e) {
        let t = 0;
        const a = await e.keys();
        let r = a.length;
        for (const c of a) {
            const n = await e.match(c)
              , d = await (n == null ? void 0 : n.blob());
            t += (d == null ? void 0 : d.size) || 0
        }
        return {
            size: t,
            fileCount: r
        }
    }
    async getCurrentUsage() {
        if (!this.cacheDir || !this.configDir)
            return {
                size: 0,
                fileCount: 0
            };
        const e = await K();
        if (e)
            return {
                size: e,
                fileCount: -1
            };
        const t = await this.getDirStatus(this.cacheDir)
          , a = await this.getDirStatus(this.configDir);
        return {
            size: t.size + a.size,
            fileCount: t.fileCount + a.fileCount
        }
    }
    async removeResponse(e) {
        await this.remove(this.cacheDir, e)
    }
    async writeResponse(e, t) {
        var a;
        try {
            return await ((a = this.cacheDir) == null ? void 0 : a.put(this.normalizeKey(e), t.clone())),
            {
                success: !0,
                size: (await t.blob()).size
            }
        } catch (r) {
            return f.send("writeResponse", r),
            {
                success: !1,
                size: 0
            }
        }
    }
    async readResponse(e) {
        var t;
        try {
            const a = await ((t = this.cacheDir) == null ? void 0 : t.match(this.normalizeKey(e)));
            return i.debug("readResponse", a),
            {
                response: a,
                size: 0
            }
        } catch (a) {
            return f.send("readResponse", a),
            null
        }
    }
    async readResponseSize(e) {
        var r;
        const t = await ((r = this.cacheDir) == null ? void 0 : r.match(this.normalizeKey(e)))
          , a = await (t == null ? void 0 : t.blob());
        return (a == null ? void 0 : a.size) || 0
    }
    normalizeKey(e) {
        return e.indexOf(L) === 0 ? e : `${L}/${e.replace(/[^\w]/g, "_")}`
    }
    async remove(e, t) {
        if (!e)
            return;
        const a = this.normalizeKey(t);
        try {
            if (!await e.delete(a, {
                ignoreSearch: !0,
                ignoreMethod: !0,
                ignoreVary: !0
            }))
                throw new Error(`remove cache failed: ${a}`)
        } catch (r) {
            f.send("remove", r),
            i.debug("[FlashSdk][SafariCache] delete cache error", r)
        }
    }
    async read(e, t) {
        if (!e)
            return null;
        const a = this.normalizeKey(t);
        try {
            const r = await e.match(a);
            return await (r == null ? void 0 : r.arrayBuffer())
        } catch (r) {
            return i.debug("[FlashSdk][SafariCache] read cache error", r),
            null
        }
    }
    async write(e, t, a) {
        if (!e)
            return !1;
        const r = this.normalizeKey(t);
        try {
            return await e.put(r, new Response(a)),
            !0
        } catch (c) {
            return f.send("write", c),
            i.info("[FlashSdk][SafariCache] write cache error", c),
            !1
        }
    }
}
class ae {
    constructor({clients: e}) {
        u(this, "clients");
        u(this, "resources", new Map);
        this.clients = e,
        new PerformanceObserver(a => this.handler(a)).observe({
            type: "resource",
            buffered: !0
        })
    }
    handler(e) {
        const t = new Map;
        e.getEntries().sort( (a, r) => a.startTime - r.startTime).forEach(a => {
            const {name: r, nextHopProtocol: c, encodedBodySize: n, decodedBodySize: d, transferSize: p, responseStatus: h, deliveryType: w} = a
              , v = this.resources.get(r);
            if (!v)
                return;
            const g = v.shift();
            if (!g)
                return;
            const R = t.get(g)
              , W = {
                name: r,
                deliveryType: w,
                nextHopProtocol: c,
                encodedBodySize: n,
                decodedBodySize: d,
                transferSize: p,
                responseStatus: h
            };
            R ? R.push(W) : t.set(g, [W]),
            v.length || this.resources.delete(r)
        }
        ),
        performance.clearResourceTimings();
        for (const a of t.keys()) {
            const r = t.get(a);
            i.debug("[Service Worker] [PerformanceObserver] handler", a, r),
            this.postToClient(a, {
                type: "fetchResource",
                data: r
            })
        }
    }
    add(e, t) {
        const a = this.resources.get(t);
        a ? a.push(e) : this.resources.set(t, [e])
    }
    async postToClient(e, t) {
        var r;
        const a = await ((r = this.clients) == null ? void 0 : r.get(e));
        if (!a) {
            i.info("[Service Worker] [PerformanceObserver] postMessageToMainThread client not found", e);
            return
        }
        a.postMessage(t)
    }
}
const D = "0.2.3"
  , se = 1e4
  , O = N()
  , T = {};
function S(s) {
    T[s] = Date.now()
}
const {os: F, browser: re} = ee(navigator.userAgent.toLowerCase())
  , $ = F === y.MAC && re === m.SAFARI || F === y.IOS;
self.addEventListener("install", () => {
    S("sw_install"),
    i.info("[Service Worker] install event")
}
);
self.addEventListener("activate", () => {
    S("sw_activate"),
    i.info("[Service Worker] activate event")
}
);
S("sw_start");
i.info("[Service Worker] initialize, version:", D);
let l, E = null, q = !1, b = {};
const ie = new ae({
    clients: self.clients
});
f.setClients(self.clients);
async function ce() {
    i.info("[Service Worker] version:", D, ", start init with", $ ? "SafariCache" : "OpfsCache"),
    S("sw_init_start");
    try {
        const s = $ ? new te : new Z
          , e = await s.init();
        if (S("sw_init_cache_done"),
        !e)
            throw new Error("opfs cache init failed");
        l = new Y({
            cache: s
        }),
        await l.init(),
        S("sw_init_cache_manager_done"),
        f.setCacheManager(l)
    } catch (s) {
        i.info("[Service Worker] opfs cache init failed, disable cache"),
        f.send("sw init", s),
        S("sw_init_cache_error")
    } finally {
        q = !0,
        i.info("[Service Worker] init done"),
        S("sw_init_done")
    }
}
self.addEventListener("message", he);
self.addEventListener("fetch", ue);
async function ne() {
    i.debug("[Service Worker] store:", JSON.stringify(o, null, 2));
    const s = await l.syncCacheSize();
    i.info(`[Service Worker] current usage, files:${s.fileCount},  total:${s.size}, max:${o.maxStorage}, used: ${Math.floor(s.size * 100 / o.maxStorage)}%`),
    i.info("[Service Worker] cacheManager.getResourceVersion()", await l.getResourceVersion()),
    i.info("[Service Worker] cacheManager.getLeadResourceLastSyncedAt()", await l.getLeadResourceLastSyncedAt())
}
self.skipWaiting();
self.addEventListener("activate", s => {
    s.waitUntil(self.clients.claim())
}
);
async function H(s, e) {
    const t = await self.clients.get(s);
    if (!t) {
        i.info("[Service Worker] postMessageToMainThread client not found", s);
        return
    }
    t.postMessage(e)
}
async function oe() {
    return new Promise(s => {
        function e() {
            if (q)
                return s(null);
            setTimeout(e, 200)
        }
        e()
    }
    )
}
async function he(s) {
    var a;
    await oe();
    const e = s.source && "id"in s.source ? s.source.id : void 0
      , t = s.data;
    if (i.info("[Service Worker] id:", O, ", version:", D, ", received message", e, s),
    i.info("[Service Worker] serviceWorkerRecords", JSON.stringify(T)),
    !!e)
        switch (f.updateClientId(e),
        t.type) {
        case "init":
            let r = {};
            await de(e, t, w => {
                r[w] = Date.now()
            }
            );
            const n = await l.syncCacheSize()
              , {deviceUuid: d, installedAt: p, type: h} = await l.getLocalInfo();
            (a = s.source) == null || a.postMessage({
                type: "serviceWorkerInitDone",
                data: {
                    version: D,
                    serviceWorkerId: O,
                    serviceWorkerRecords: {
                        ...T,
                        ...r
                    },
                    currentUsage: n,
                    deviceUuid: d,
                    installedAt: p,
                    localInfoType: h
                }
            });
            break
        }
}
function ue(s) {
    if (f.updateClientId(s.clientId),
    fe(s.request)) {
        i.debug("[Service Worker][handleFetchEvent] ignore", s.request.url);
        return
    }
    if (!o.cacheEnabled || !l) {
        i.debug("[Service Worker][handleFetchEvent] cache is not enabled", s.request.url);
        return
    }
    s.respondWith(ge(s))
}
async function le() {
    try {
        return (await navigator.storage.estimate()).quota
    } catch (s) {
        return f.send("getDeviceStorageQuota", s),
        i.debug("[Service Worker] getDeviceStorageQuota error", s),
        null
    }
}
async function de(s, e, t) {
    var c, n, d, p;
    if (i.info("[Service Worker] handleClientInit"),
    t("client_init_start"),
    ((c = b[s]) == null ? void 0 : c.status) === "ready") {
        i.info("[Service Worker] page already ready, skip init"),
        t("client_init_ready");
        return
    }
    o.appId = e.data.appId,
    o.appKey = e.data.appKey,
    o.authToken = e.data.authToken,
    o.enabledFeatures = e.data.metadata.enable_features,
    o.commands = e.data.metadata.commands;
    const a = (n = e.data.metadata.quota) == null ? void 0 : n.storage_limit;
    a && (o.maxStorage = a * 1024 * 1024,
    l.setMaxStorage(o.maxStorage)),
    f.setEnabled(o.enabledFeatures.includes(C.REPORT_ERROR)),
    t("client_init_get_quota");
    const r = await le();
    if (r && r < o.maxStorage && (i.info("[Service Worker] hard storage quota is less than max storage", r),
    o.maxStorage = Math.floor(r * .8),
    l.setMaxStorage(o.maxStorage)),
    t("client_init_get_resource_version"),
    o.enabledFeatures.includes(C.DEBUG) ? (i.setLogLevel("debug"),
    i.debug("[Service Worker] debug mode enabled")) : i.setLogLevel("info"),
    (d = o.commands) != null && d.length)
        try {
            for (const {action: h} of o.commands)
                switch (h) {
                case Q.CLEAR:
                    await l.clearAll();
                    break;
                default:
                    break
                }
        } catch (h) {
            f.send("handleClientInit", h),
            i.info("[Service Worker] command error ", h)
        }
    if (o.cacheEnabled = !1,
    o.enabledFeatures.includes(C.CACHE)) {
        const h = await l.getResourceVersion()
          , w = e.data.metadata.version;
        if (h !== w)
            try {
                t("client_init_fetch_resources");
                const g = await I.fetchResources(o.appId, o.appKey, o.authToken, h);
                if (i.info("[Service Worker] fetchResources", g),
                t("client_init_fetch_resource_done"),
                !await l.replaceResources(g))
                    throw new Error("replaceResources failed");
                t("client_init_set_resource"),
                await l.setResourceVersion(w),
                o.cacheEnabled = !0
            } catch (g) {
                i.info("[Service Worker] fetchResources error", g),
                f.send("fetchResources", g)
            }
        else
            o.cacheEnabled = !0
    } else if (o.enabledFeatures.includes(C.LEAD_CACHE)) {
        const h = await l.getLeadResourceLastSyncedAt()
          , w = e.data.metadata.last_changed_at || 0;
        if (!h || Number(h) < w)
            try {
                t("client_init_fetch_resources");
                const g = await I.fetchLeadResources(o.appId, o.appKey, o.authToken, h);
                i.info("[Service Worker] fetchLeadResources", g),
                t("client_init_fetch_resource_done");
                const R = await l.replaceResources(g.changed_resources || []);
                if (t("client_init_set_resource"),
                !R)
                    throw new Error("replaceResources failed");
                await l.setLeadResourceLastSyncedAt(w.toString()),
                await l.setPriorityResources(g.priority_resources || []),
                o.cacheEnabled = !0
            } catch (g) {
                i.info("[Service Worker] fetchLeadResources error", g),
                f.send("fetchLeadResources", g)
            }
        else
            o.cacheEnabled = !0
    }
    (p = b[s]) != null && p.pendingResolves.length && b[s].pendingResolves.forEach(h => h()),
    i.info("[Service Worker] page ready", s),
    b[s] = {
        status: "ready",
        lastUpdate: new Date().getTime(),
        pendingResolves: []
    },
    ne(),
    l.evictCache(),
    t("client_init_done")
}
function fe(s) {
    const e = s.url;
    return !e.startsWith(o.origin) || e.includes(".html") || e.includes("flash-sdk.js") || s.destination === "document" || s.method !== "GET"
}
async function ge(s) {
    const {request: e, clientId: t} = s
      , a = e.url;
    i.debug("[Service Worker][handleRequest] handle", a);
    const r = await l.readResponse(a);
    if (r)
        return i.debug("[Service Worker][handleRequest] Cache HIT", a),
        H(t, {
            type: "cacheHit",
            data: {
                url: a
            }
        }),
        r;
    ie.add(t, a);
    const c = await fetch(e, {
        mode: "cors",
        credentials: "omit"
    });
    return c.status === 200 ? l.writeResponse(a, c.clone()) : c.status >= 400 && (i.debug("[Service Worker][handleRequest] Network Error", c.status, a),
    H(t, {
        type: "fetchError",
        data: {
            url: a,
            status: c.status,
            statusText: c.statusText
        }
    })),
    E || (E = setTimeout(async () => {
        await l.evictCache(),
        E = null
    }
    , se)),
    c
}
ce();
