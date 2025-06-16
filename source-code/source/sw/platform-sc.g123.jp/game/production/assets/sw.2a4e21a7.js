( () => {
    try {
        self["workbox:core:7.2.0"] && _()
    } catch {}
    var Ne = (e, ...t) => {
        let a = e;
        return t.length > 0 && (a += ` :: ${JSON.stringify(t)}`),
        a
    }
      , Le = Ne
      , d = class extends Error {
        constructor(e, t) {
            let a = Le(e, t);
            super(a),
            this.name = e,
            this.details = t
        }
    }
      , Te = e => new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`), "");
    try {
        self["workbox:cacheable-response:7.2.0"] && _()
    } catch {}
    var Ue = class {
        constructor(e={}) {
            this._statuses = e.statuses,
            this._headers = e.headers
        }
        isResponseCacheable(e) {
            let t = !0;
            return this._statuses && (t = this._statuses.includes(e.status)),
            this._headers && t && (t = Object.keys(this._headers).some(a => e.headers.get(a) === this._headers[a])),
            t
        }
    }
      , N = class {
        constructor(e) {
            this.cacheWillUpdate = async ({response: t}) => this._cacheableResponse.isResponseCacheable(t) ? t : null,
            this._cacheableResponse = new Ue(e)
        }
    }
      , Y = new Set;
    function Pe(e) {
        Y.add(e)
    }
    var m = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: typeof registration < "u" ? registration.scope : ""
    }
      , O = e => [m.prefix, e, m.suffix].filter(t => t && t.length > 0).join("-")
      , Ie = e => {
        for (let t of Object.keys(m))
            e(t)
    }
      , f = {
        updateDetails: e => {
            Ie(t => {
                typeof e[t] == "string" && (m[t] = e[t])
            }
            )
        }
        ,
        getGoogleAnalyticsName: e => e || O(m.googleAnalytics),
        getPrecacheName: e => e || O(m.precache),
        getPrefix: () => m.prefix,
        getRuntimeName: e => e || O(m.runtime),
        getSuffix: () => m.suffix
    };
    function Z(e, t) {
        let a = new URL(e);
        for (let s of t)
            a.searchParams.delete(s);
        return a.href
    }
    async function Oe(e, t, a, s) {
        let r = Z(t.url, a);
        if (t.url === r)
            return e.match(t, s);
        let n = Object.assign(Object.assign({}, s), {
            ignoreSearch: !0
        })
          , i = await e.keys(t, n);
        for (let o of i) {
            let c = Z(o.url, a);
            if (r === c)
                return e.match(o, s)
        }
    }
    var x;
    function Ae() {
        if (x === void 0) {
            let e = new Response("");
            if ("body"in e)
                try {
                    new Response(e.body),
                    x = !0
                } catch {
                    x = !1
                }
            x = !1
        }
        return x
    }
    function ee(e) {
        e.then( () => {}
        )
    }
    var je = class {
        constructor() {
            this.promise = new Promise( (e, t) => {
                this.resolve = e,
                this.reject = t
            }
            )
        }
    }
    ;
    async function Me() {
        for (let e of Y)
            await e()
    }
    function te(e) {
        return new Promise(t => setTimeout(t, e))
    }
    function ae(e, t) {
        let a = t();
        return e.waitUntil(a),
        a
    }
    var L = {
        get googleAnalytics() {
            return f.getGoogleAnalyticsName()
        },
        get precache() {
            return f.getPrecacheName()
        },
        get prefix() {
            return f.getPrefix()
        },
        get runtime() {
            return f.getRuntimeName()
        },
        get suffix() {
            return f.getSuffix()
        }
    };
    async function Ke(e, t) {
        let a = null;
        if (e.url && (a = new URL(e.url).origin),
        a !== self.location.origin)
            throw new d("cross-origin-copy-response",{
                origin: a
            });
        let s = e.clone()
          , r = {
            headers: new Headers(s.headers),
            status: s.status,
            statusText: s.statusText
        }
          , n = t ? t(r) : r
          , i = Ae() ? s.body : await s.blob();
        return new Response(i,n)
    }
    function Be(e) {
        f.updateDetails(e)
    }
    var Fe = (e, t) => t.some(a => e instanceof a), se, re;
    function We() {
        return se || (se = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
    }
    function He() {
        return re || (re = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
    }
    var ne = new WeakMap
      , A = new WeakMap
      , ie = new WeakMap
      , j = new WeakMap
      , M = new WeakMap;
    function $e(e) {
        let t = new Promise( (a, s) => {
            let r = () => {
                e.removeEventListener("success", n),
                e.removeEventListener("error", i)
            }
              , n = () => {
                a(y(e.result)),
                r()
            }
              , i = () => {
                s(e.error),
                r()
            }
            ;
            e.addEventListener("success", n),
            e.addEventListener("error", i)
        }
        );
        return t.then(a => {
            a instanceof IDBCursor && ne.set(a, e)
        }
        ).catch( () => {}
        ),
        M.set(t, e),
        t
    }
    function Qe(e) {
        if (A.has(e))
            return;
        let t = new Promise( (a, s) => {
            let r = () => {
                e.removeEventListener("complete", n),
                e.removeEventListener("error", i),
                e.removeEventListener("abort", i)
            }
              , n = () => {
                a(),
                r()
            }
              , i = () => {
                s(e.error || new DOMException("AbortError","AbortError")),
                r()
            }
            ;
            e.addEventListener("complete", n),
            e.addEventListener("error", i),
            e.addEventListener("abort", i)
        }
        );
        A.set(e, t)
    }
    var K = {
        get(e, t, a) {
            if (e instanceof IDBTransaction) {
                if (t === "done")
                    return A.get(e);
                if (t === "objectStoreNames")
                    return e.objectStoreNames || ie.get(e);
                if (t === "store")
                    return a.objectStoreNames[1] ? void 0 : a.objectStore(a.objectStoreNames[0])
            }
            return y(e[t])
        },
        set(e, t, a) {
            return e[t] = a,
            !0
        },
        has(e, t) {
            return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
        }
    };
    function Ve(e) {
        K = e(K)
    }
    function Ge(e) {
        return e === IDBDatabase.prototype.transaction && !("objectStoreNames"in IDBTransaction.prototype) ? function(t, ...a) {
            let s = e.call(B(this), t, ...a);
            return ie.set(s, t.sort ? t.sort() : [t]),
            y(s)
        }
        : He().includes(e) ? function(...t) {
            return e.apply(B(this), t),
            y(ne.get(this))
        }
        : function(...t) {
            return y(e.apply(B(this), t))
        }
    }
    function ze(e) {
        return typeof e == "function" ? Ge(e) : (e instanceof IDBTransaction && Qe(e),
        Fe(e, We()) ? new Proxy(e,K) : e)
    }
    function y(e) {
        if (e instanceof IDBRequest)
            return $e(e);
        if (j.has(e))
            return j.get(e);
        let t = ze(e);
        return t !== e && (j.set(e, t),
        M.set(t, e)),
        t
    }
    var B = e => M.get(e);
    function oe(e, t, {blocked: a, upgrade: s, blocking: r, terminated: n}={}) {
        let i = indexedDB.open(e, t)
          , o = y(i);
        return s && i.addEventListener("upgradeneeded", c => {
            s(y(i.result), c.oldVersion, c.newVersion, y(i.transaction), c)
        }
        ),
        a && i.addEventListener("blocked", c => a(c.oldVersion, c.newVersion, c)),
        o.then(c => {
            n && c.addEventListener("close", () => n()),
            r && c.addEventListener("versionchange", l => r(l.oldVersion, l.newVersion, l))
        }
        ).catch( () => {}
        ),
        o
    }
    function Je(e, {blocked: t}={}) {
        let a = indexedDB.deleteDatabase(e);
        return t && a.addEventListener("blocked", s => t(s.oldVersion, s)),
        y(a).then( () => {}
        )
    }
    var Xe = ["get", "getKey", "getAll", "getAllKeys", "count"]
      , Ye = ["put", "add", "delete", "clear"]
      , F = new Map;
    function ce(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
            return;
        if (F.get(t))
            return F.get(t);
        let a = t.replace(/FromIndex$/, "")
          , s = t !== a
          , r = Ye.includes(a);
        if (!(a in (s ? IDBIndex : IDBObjectStore).prototype) || !(r || Xe.includes(a)))
            return;
        let n = async function(i, ...o) {
            let c = this.transaction(i, r ? "readwrite" : "readonly")
              , l = c.store;
            return s && (l = l.index(o.shift())),
            (await Promise.all([l[a](...o), r && c.done]))[0]
        };
        return F.set(t, n),
        n
    }
    Ve(e => ({
        ...e,
        get: (t, a, s) => ce(t, a) || e.get(t, a, s),
        has: (t, a) => !!ce(t, a) || e.has(t, a)
    }));
    try {
        self["workbox:expiration:7.2.0"] && _()
    } catch {}
    var Ze = "workbox-expiration"
      , E = "cache-entries"
      , le = e => {
        let t = new URL(e,location.href);
        return t.hash = "",
        t.href
    }
      , et = class {
        constructor(e) {
            this._db = null,
            this._cacheName = e
        }
        _upgradeDb(e) {
            let t = e.createObjectStore(E, {
                keyPath: "id"
            });
            t.createIndex("cacheName", "cacheName", {
                unique: !1
            }),
            t.createIndex("timestamp", "timestamp", {
                unique: !1
            })
        }
        _upgradeDbAndDeleteOldDbs(e) {
            this._upgradeDb(e),
            this._cacheName && Je(this._cacheName)
        }
        async setTimestamp(e, t) {
            e = le(e);
            let a = {
                url: e,
                timestamp: t,
                cacheName: this._cacheName,
                id: this._getId(e)
            }
              , s = (await this.getDb()).transaction(E, "readwrite", {
                durability: "relaxed"
            });
            await s.store.put(a),
            await s.done
        }
        async getTimestamp(e) {
            return (await (await this.getDb()).get(E, this._getId(e)))?.timestamp
        }
        async expireEntries(e, t) {
            let a = await this.getDb()
              , s = await a.transaction(E).store.index("timestamp").openCursor(null, "prev")
              , r = []
              , n = 0;
            for (; s; ) {
                let o = s.value;
                o.cacheName === this._cacheName && (e && o.timestamp < e || t && n >= t ? r.push(s.value) : n++),
                s = await s.continue()
            }
            let i = [];
            for (let o of r)
                await a.delete(E, o.id),
                i.push(o.url);
            return i
        }
        _getId(e) {
            return this._cacheName + "|" + le(e)
        }
        async getDb() {
            return this._db || (this._db = await oe(Ze, 1, {
                upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
            })),
            this._db
        }
    }
      , tt = class {
        constructor(e, t={}) {
            this._isRunning = !1,
            this._rerunRequested = !1,
            this._maxEntries = t.maxEntries,
            this._maxAgeSeconds = t.maxAgeSeconds,
            this._matchOptions = t.matchOptions,
            this._cacheName = e,
            this._timestampModel = new et(e)
        }
        async expireEntries() {
            if (this._isRunning) {
                this._rerunRequested = !0;
                return
            }
            this._isRunning = !0;
            let e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0
              , t = await this._timestampModel.expireEntries(e, this._maxEntries)
              , a = await self.caches.open(this._cacheName);
            for (let s of t)
                await a.delete(s, this._matchOptions);
            this._isRunning = !1,
            this._rerunRequested && (this._rerunRequested = !1,
            ee(this.expireEntries()))
        }
        async updateTimestamp(e) {
            await this._timestampModel.setTimestamp(e, Date.now())
        }
        async isURLExpired(e) {
            if (this._maxAgeSeconds) {
                let t = await this._timestampModel.getTimestamp(e)
                  , a = Date.now() - this._maxAgeSeconds * 1e3;
                return t !== void 0 ? t < a : !0
            } else
                return !1
        }
        async delete() {
            this._rerunRequested = !1,
            await this._timestampModel.expireEntries(1 / 0)
        }
    }
      , ue = class {
        constructor(e={}) {
            this.cachedResponseWillBeUsed = async ({event: t, request: a, cacheName: s, cachedResponse: r}) => {
                if (!r)
                    return null;
                let n = this._isResponseDateFresh(r)
                  , i = this._getCacheExpiration(s);
                ee(i.expireEntries());
                let o = i.updateTimestamp(a.url);
                if (t)
                    try {
                        t.waitUntil(o)
                    } catch {}
                return n ? r : null
            }
            ,
            this.cacheDidUpdate = async ({cacheName: t, request: a}) => {
                let s = this._getCacheExpiration(t);
                await s.updateTimestamp(a.url),
                await s.expireEntries()
            }
            ,
            this._config = e,
            this._maxAgeSeconds = e.maxAgeSeconds,
            this._cacheExpirations = new Map,
            e.purgeOnQuotaError && Pe( () => this.deleteCacheAndMetadata())
        }
        _getCacheExpiration(e) {
            if (e === f.getRuntimeName())
                throw new d("expire-custom-caches-only");
            let t = this._cacheExpirations.get(e);
            return t || (t = new tt(e,this._config),
            this._cacheExpirations.set(e, t)),
            t
        }
        _isResponseDateFresh(e) {
            if (!this._maxAgeSeconds)
                return !0;
            let t = this._getDateHeaderTimestamp(e);
            if (t === null)
                return !0;
            let a = Date.now();
            return t >= a - this._maxAgeSeconds * 1e3
        }
        _getDateHeaderTimestamp(e) {
            if (!e.headers.has("date"))
                return null;
            let t = e.headers.get("date")
              , a = new Date(t).getTime();
            return isNaN(a) ? null : a
        }
        async deleteCacheAndMetadata() {
            for (let[e,t] of this._cacheExpirations)
                await self.caches.delete(e),
                await t.delete();
            this._cacheExpirations = new Map
        }
    }
    ;
    try {
        self["workbox:background-sync:7.2.0"] && _()
    } catch {}
    var he = 3
      , at = "workbox-background-sync"
      , w = "requests"
      , k = "queueName"
      , st = class {
        constructor() {
            this._db = null
        }
        async addEntry(e) {
            let t = (await this.getDb()).transaction(w, "readwrite", {
                durability: "relaxed"
            });
            await t.store.add(e),
            await t.done
        }
        async getFirstEntryId() {
            return (await (await this.getDb()).transaction(w).store.openCursor())?.value.id
        }
        async getAllEntriesByQueueName(e) {
            return await (await this.getDb()).getAllFromIndex(w, k, IDBKeyRange.only(e)) || new Array
        }
        async getEntryCountByQueueName(e) {
            return (await this.getDb()).countFromIndex(w, k, IDBKeyRange.only(e))
        }
        async deleteEntry(e) {
            await (await this.getDb()).delete(w, e)
        }
        async getFirstEntryByQueueName(e) {
            return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "next")
        }
        async getLastEntryByQueueName(e) {
            return await this.getEndEntryFromIndex(IDBKeyRange.only(e), "prev")
        }
        async getEndEntryFromIndex(e, t) {
            return (await (await this.getDb()).transaction(w).store.index(k).openCursor(e, t))?.value
        }
        async getDb() {
            return this._db || (this._db = await oe(at, he, {
                upgrade: this._upgradeDb
            })),
            this._db
        }
        _upgradeDb(e, t) {
            t > 0 && t < he && e.objectStoreNames.contains(w) && e.deleteObjectStore(w),
            e.createObjectStore(w, {
                autoIncrement: !0,
                keyPath: "id"
            }).createIndex(k, k, {
                unique: !1
            })
        }
    }
      , rt = class {
        constructor(e) {
            this._queueName = e,
            this._queueDb = new st
        }
        async pushEntry(e) {
            delete e.id,
            e.queueName = this._queueName,
            await this._queueDb.addEntry(e)
        }
        async unshiftEntry(e) {
            let t = await this._queueDb.getFirstEntryId();
            t ? e.id = t - 1 : delete e.id,
            e.queueName = this._queueName,
            await this._queueDb.addEntry(e)
        }
        async popEntry() {
            return this._removeEntry(await this._queueDb.getLastEntryByQueueName(this._queueName))
        }
        async shiftEntry() {
            return this._removeEntry(await this._queueDb.getFirstEntryByQueueName(this._queueName))
        }
        async getAll() {
            return await this._queueDb.getAllEntriesByQueueName(this._queueName)
        }
        async size() {
            return await this._queueDb.getEntryCountByQueueName(this._queueName)
        }
        async deleteEntry(e) {
            await this._queueDb.deleteEntry(e)
        }
        async _removeEntry(e) {
            return e && await this.deleteEntry(e.id),
            e
        }
    }
      , nt = ["method", "referrer", "referrerPolicy", "mode", "credentials", "cache", "redirect", "integrity", "keepalive"]
      , T = class {
        static async fromRequest(e) {
            let t = {
                url: e.url,
                headers: {}
            };
            e.method !== "GET" && (t.body = await e.clone().arrayBuffer());
            for (let[a,s] of e.headers.entries())
                t.headers[a] = s;
            for (let a of nt)
                e[a] !== void 0 && (t[a] = e[a]);
            return new T(t)
        }
        constructor(e) {
            e.mode === "navigate" && (e.mode = "same-origin"),
            this._requestData = e
        }
        toObject() {
            let e = Object.assign({}, this._requestData);
            return e.headers = Object.assign({}, this._requestData.headers),
            e.body && (e.body = e.body.slice(0)),
            e
        }
        toRequest() {
            return new Request(this._requestData.url,this._requestData)
        }
        clone() {
            return new T(this.toObject())
        }
    }
      , de = "workbox-background-sync"
      , it = 60 * 24 * 7
      , W = new Set
      , fe = e => {
        let t = {
            request: new T(e.requestData).toRequest(),
            timestamp: e.timestamp
        };
        return e.metadata && (t.metadata = e.metadata),
        t
    }
      , ot = class {
        constructor(e, {forceSyncFallback: t, onSync: a, maxRetentionTime: s}={}) {
            if (this._syncInProgress = !1,
            this._requestsAddedDuringSync = !1,
            W.has(e))
                throw new d("duplicate-queue-name",{
                    name: e
                });
            W.add(e),
            this._name = e,
            this._onSync = a || this.replayRequests,
            this._maxRetentionTime = s || it,
            this._forceSyncFallback = !!t,
            this._queueStore = new rt(this._name),
            this._addSyncListener()
        }
        get name() {
            return this._name
        }
        async pushRequest(e) {
            await this._addRequest(e, "push")
        }
        async unshiftRequest(e) {
            await this._addRequest(e, "unshift")
        }
        async popRequest() {
            return this._removeRequest("pop")
        }
        async shiftRequest() {
            return this._removeRequest("shift")
        }
        async getAll() {
            let e = await this._queueStore.getAll()
              , t = Date.now()
              , a = [];
            for (let s of e) {
                let r = this._maxRetentionTime * 60 * 1e3;
                t - s.timestamp > r ? await this._queueStore.deleteEntry(s.id) : a.push(fe(s))
            }
            return a
        }
        async size() {
            return await this._queueStore.size()
        }
        async _addRequest({request: e, metadata: t, timestamp: a=Date.now()}, s) {
            let r = {
                requestData: (await T.fromRequest(e.clone())).toObject(),
                timestamp: a
            };
            switch (t && (r.metadata = t),
            s) {
            case "push":
                await this._queueStore.pushEntry(r);
                break;
            case "unshift":
                await this._queueStore.unshiftEntry(r);
                break
            }
            this._syncInProgress ? this._requestsAddedDuringSync = !0 : await this.registerSync()
        }
        async _removeRequest(e) {
            let t = Date.now(), a;
            switch (e) {
            case "pop":
                a = await this._queueStore.popEntry();
                break;
            case "shift":
                a = await this._queueStore.shiftEntry();
                break
            }
            if (a) {
                let s = this._maxRetentionTime * 60 * 1e3;
                return t - a.timestamp > s ? this._removeRequest(e) : fe(a)
            } else
                return
        }
        async replayRequests() {
            let e;
            for (; e = await this.shiftRequest(); )
                try {
                    await fetch(e.request.clone())
                } catch {
                    throw await this.unshiftRequest(e),
                    new d("queue-replay-failed",{
                        name: this._name
                    })
                }
        }
        async registerSync() {
            if ("sync"in self.registration && !this._forceSyncFallback)
                try {
                    await self.registration.sync.register(`${de}:${this._name}`)
                } catch {}
        }
        _addSyncListener() {
            "sync"in self.registration && !this._forceSyncFallback ? self.addEventListener("sync", e => {
                if (e.tag === `${de}:${this._name}`) {
                    let t = async () => {
                        this._syncInProgress = !0;
                        let a;
                        try {
                            await this._onSync({
                                queue: this
                            })
                        } catch (s) {
                            if (s instanceof Error)
                                throw a = s,
                                a
                        } finally {
                            this._requestsAddedDuringSync && !(a && !e.lastChance) && await this.registerSync(),
                            this._syncInProgress = !1,
                            this._requestsAddedDuringSync = !1
                        }
                    }
                    ;
                    e.waitUntil(t())
                }
            }
            ) : this._onSync({
                queue: this
            })
        }
        static get _queueNames() {
            return W
        }
    }
      , ct = class {
        constructor(e, t) {
            this.fetchDidFail = async ({request: a}) => {
                await this._queue.pushRequest({
                    request: a
                })
            }
            ,
            this._queue = new ot(e,t)
        }
    }
    ;
    try {
        self["workbox:routing:7.2.0"] && _()
    } catch {}
    var pe = "GET"
      , U = e => e && typeof e == "object" ? e : {
        handle: e
    }
      , p = class {
        constructor(e, t, a=pe) {
            this.handler = U(t),
            this.match = e,
            this.method = a
        }
        setCatchHandler(e) {
            this.catchHandler = U(e)
        }
    }
      , me = class {
        constructor() {
            this._routes = new Map,
            this._defaultHandlerMap = new Map
        }
        get routes() {
            return this._routes
        }
        addFetchListener() {
            self.addEventListener("fetch", e => {
                let {request: t} = e
                  , a = this.handleRequest({
                    request: t,
                    event: e
                });
                a && e.respondWith(a)
            }
            )
        }
        addCacheListener() {
            self.addEventListener("message", e => {
                if (e.data && e.data.type === "CACHE_URLS") {
                    let {payload: t} = e.data
                      , a = Promise.all(t.urlsToCache.map(s => {
                        typeof s == "string" && (s = [s]);
                        let r = new Request(...s);
                        return this.handleRequest({
                            request: r,
                            event: e
                        })
                    }
                    ));
                    e.waitUntil(a),
                    e.ports && e.ports[0] && a.then( () => e.ports[0].postMessage(!0))
                }
            }
            )
        }
        handleRequest({request: e, event: t}) {
            let a = new URL(e.url,location.href);
            if (!a.protocol.startsWith("http"))
                return;
            let s = a.origin === location.origin
              , {params: r, route: n} = this.findMatchingRoute({
                event: t,
                request: e,
                sameOrigin: s,
                url: a
            })
              , i = n && n.handler
              , o = []
              , c = e.method;
            if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)),
            !i)
                return;
            let l;
            try {
                l = i.handle({
                    url: a,
                    request: e,
                    event: t,
                    params: r
                })
            } catch (u) {
                l = Promise.reject(u)
            }
            let h = n && n.catchHandler;
            return l instanceof Promise && (this._catchHandler || h) && (l = l.catch(async u => {
                if (h)
                    try {
                        return await h.handle({
                            url: a,
                            request: e,
                            event: t,
                            params: r
                        })
                    } catch (R) {
                        R instanceof Error && (u = R)
                    }
                if (this._catchHandler)
                    return this._catchHandler.handle({
                        url: a,
                        request: e,
                        event: t
                    });
                throw u
            }
            )),
            l
        }
        findMatchingRoute({url: e, sameOrigin: t, request: a, event: s}) {
            let r = this._routes.get(a.method) || [];
            for (let n of r) {
                let i, o = n.match({
                    url: e,
                    sameOrigin: t,
                    request: a,
                    event: s
                });
                if (o)
                    return i = o,
                    (Array.isArray(i) && i.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o == "boolean") && (i = void 0),
                    {
                        route: n,
                        params: i
                    }
            }
            return {}
        }
        setDefaultHandler(e, t=pe) {
            this._defaultHandlerMap.set(t, U(e))
        }
        setCatchHandler(e) {
            this._catchHandler = U(e)
        }
        registerRoute(e) {
            this._routes.has(e.method) || this._routes.set(e.method, []),
            this._routes.get(e.method).push(e)
        }
        unregisterRoute(e) {
            if (!this._routes.has(e.method))
                throw new d("unregister-route-but-not-found-with-method",{
                    method: e.method
                });
            let t = this._routes.get(e.method).indexOf(e);
            if (t > -1)
                this._routes.get(e.method).splice(t, 1);
            else
                throw new d("unregister-route-route-not-registered")
        }
    }
    ;
    try {
        self["workbox:strategies:7.2.0"] && _()
    } catch {}
    var ye = {
        cacheWillUpdate: async ({response: e}) => e.status === 200 || e.status === 0 ? e : null
    };
    function P(e) {
        return typeof e == "string" ? new Request(e) : e
    }
    var lt = class {
        constructor(e, t) {
            this._cacheKeys = {},
            Object.assign(this, t),
            this.event = t.event,
            this._strategy = e,
            this._handlerDeferred = new je,
            this._extendLifetimePromises = [],
            this._plugins = [...e.plugins],
            this._pluginStateMap = new Map;
            for (let a of this._plugins)
                this._pluginStateMap.set(a, {});
            this.event.waitUntil(this._handlerDeferred.promise)
        }
        async fetch(e) {
            let {event: t} = this
              , a = P(e);
            if (a.mode === "navigate" && t instanceof FetchEvent && t.preloadResponse) {
                let n = await t.preloadResponse;
                if (n)
                    return n
            }
            let s = this.hasCallback("fetchDidFail") ? a.clone() : null;
            try {
                for (let n of this.iterateCallbacks("requestWillFetch"))
                    a = await n({
                        request: a.clone(),
                        event: t
                    })
            } catch (n) {
                if (n instanceof Error)
                    throw new d("plugin-error-request-will-fetch",{
                        thrownErrorMessage: n.message
                    })
            }
            let r = a.clone();
            try {
                let n;
                n = await fetch(a, a.mode === "navigate" ? void 0 : this._strategy.fetchOptions);
                for (let i of this.iterateCallbacks("fetchDidSucceed"))
                    n = await i({
                        event: t,
                        request: r,
                        response: n
                    });
                return n
            } catch (n) {
                throw s && await this.runCallbacks("fetchDidFail", {
                    error: n,
                    event: t,
                    originalRequest: s.clone(),
                    request: r.clone()
                }),
                n
            }
        }
        async fetchAndCachePut(e) {
            let t = await this.fetch(e)
              , a = t.clone();
            return this.waitUntil(this.cachePut(e, a)),
            t
        }
        async cacheMatch(e) {
            let t = P(e), a, {cacheName: s, matchOptions: r} = this._strategy, n = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, r), {
                cacheName: s
            });
            a = await caches.match(n, i);
            for (let o of this.iterateCallbacks("cachedResponseWillBeUsed"))
                a = await o({
                    cacheName: s,
                    matchOptions: r,
                    cachedResponse: a,
                    request: n,
                    event: this.event
                }) || void 0;
            return a
        }
        async cachePut(e, t) {
            let a = P(e);
            await te(0);
            let s = await this.getCacheKey(a, "write");
            if (!t)
                throw new d("cache-put-with-no-response",{
                    url: Te(s.url)
                });
            let r = await this._ensureResponseSafeToCache(t);
            if (!r)
                return !1;
            let {cacheName: n, matchOptions: i} = this._strategy
              , o = await self.caches.open(n)
              , c = this.hasCallback("cacheDidUpdate")
              , l = c ? await Oe(o, s.clone(), ["__WB_REVISION__"], i) : null;
            try {
                await o.put(s, c ? r.clone() : r)
            } catch (h) {
                if (h instanceof Error)
                    throw h.name === "QuotaExceededError" && await Me(),
                    h
            }
            for (let h of this.iterateCallbacks("cacheDidUpdate"))
                await h({
                    cacheName: n,
                    oldResponse: l,
                    newResponse: r.clone(),
                    request: s,
                    event: this.event
                });
            return !0
        }
        async getCacheKey(e, t) {
            let a = `${e.url} | ${t}`;
            if (!this._cacheKeys[a]) {
                let s = e;
                for (let r of this.iterateCallbacks("cacheKeyWillBeUsed"))
                    s = P(await r({
                        mode: t,
                        request: s,
                        event: this.event,
                        params: this.params
                    }));
                this._cacheKeys[a] = s
            }
            return this._cacheKeys[a]
        }
        hasCallback(e) {
            for (let t of this._strategy.plugins)
                if (e in t)
                    return !0;
            return !1
        }
        async runCallbacks(e, t) {
            for (let a of this.iterateCallbacks(e))
                await a(t)
        }
        *iterateCallbacks(e) {
            for (let t of this._strategy.plugins)
                if (typeof t[e] == "function") {
                    let a = this._pluginStateMap.get(t);
                    yield s => {
                        let r = Object.assign(Object.assign({}, s), {
                            state: a
                        });
                        return t[e](r)
                    }
                }
        }
        waitUntil(e) {
            return this._extendLifetimePromises.push(e),
            e
        }
        async doneWaiting() {
            let e;
            for (; e = this._extendLifetimePromises.shift(); )
                await e
        }
        destroy() {
            this._handlerDeferred.resolve(null)
        }
        async _ensureResponseSafeToCache(e) {
            let t = e
              , a = !1;
            for (let s of this.iterateCallbacks("cacheWillUpdate"))
                if (t = await s({
                    request: this.request,
                    response: t,
                    event: this.event
                }) || void 0,
                a = !0,
                !t)
                    break;
            return a || t && t.status !== 200 && (t = void 0),
            t
        }
    }
      , D = class {
        constructor(e={}) {
            this.cacheName = f.getRuntimeName(e.cacheName),
            this.plugins = e.plugins || [],
            this.fetchOptions = e.fetchOptions,
            this.matchOptions = e.matchOptions
        }
        handle(e) {
            let[t] = this.handleAll(e);
            return t
        }
        handleAll(e) {
            e instanceof FetchEvent && (e = {
                event: e,
                request: e.request
            });
            let t = e.event
              , a = typeof e.request == "string" ? new Request(e.request) : e.request
              , s = "params"in e ? e.params : void 0
              , r = new lt(this,{
                event: t,
                request: a,
                params: s
            })
              , n = this._getResponse(r, a, t)
              , i = this._awaitComplete(n, r, a, t);
            return [n, i]
        }
        async _getResponse(e, t, a) {
            await e.runCallbacks("handlerWillStart", {
                event: a,
                request: t
            });
            let s;
            try {
                if (s = await this._handle(t, e),
                !s || s.type === "error")
                    throw new d("no-response",{
                        url: t.url
                    })
            } catch (r) {
                if (r instanceof Error) {
                    for (let n of e.iterateCallbacks("handlerDidError"))
                        if (s = await n({
                            error: r,
                            event: a,
                            request: t
                        }),
                        s)
                            break
                }
                if (!s)
                    throw r
            }
            for (let r of e.iterateCallbacks("handlerWillRespond"))
                s = await r({
                    event: a,
                    request: t,
                    response: s
                });
            return s
        }
        async _awaitComplete(e, t, a, s) {
            let r, n;
            try {
                r = await e
            } catch {}
            try {
                await t.runCallbacks("handlerDidRespond", {
                    event: s,
                    request: a,
                    response: r
                }),
                await t.doneWaiting()
            } catch (i) {
                i instanceof Error && (n = i)
            }
            if (await t.runCallbacks("handlerDidComplete", {
                event: s,
                request: a,
                response: r,
                error: n
            }),
            t.destroy(),
            n)
                throw n
        }
    }
      , I = class extends D {
        constructor(e={}) {
            super(e),
            this.plugins.some(t => "cacheWillUpdate"in t) || this.plugins.unshift(ye),
            this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
        }
        async _handle(e, t) {
            let a = [], s = [], r;
            if (this._networkTimeoutSeconds) {
                let {id: o, promise: c} = this._getTimeoutPromise({
                    request: e,
                    logs: a,
                    handler: t
                });
                r = o,
                s.push(c)
            }
            let n = this._getNetworkPromise({
                timeoutId: r,
                request: e,
                logs: a,
                handler: t
            });
            s.push(n);
            let i = await t.waitUntil((async () => await t.waitUntil(Promise.race(s)) || await n)());
            if (!i)
                throw new d("no-response",{
                    url: e.url
                });
            return i
        }
        _getTimeoutPromise({request: e, logs: t, handler: a}) {
            let s;
            return {
                promise: new Promise(r => {
                    s = setTimeout(async () => {
                        r(await a.cacheMatch(e))
                    }
                    , this._networkTimeoutSeconds * 1e3)
                }
                ),
                id: s
            }
        }
        async _getNetworkPromise({timeoutId: e, request: t, logs: a, handler: s}) {
            let r, n;
            try {
                n = await s.fetchAndCachePut(t)
            } catch (i) {
                i instanceof Error && (r = i)
            }
            return e && clearTimeout(e),
            (r || !n) && (n = await s.cacheMatch(t)),
            n
        }
    }
      , ut = class extends D {
        constructor(e={}) {
            super(e),
            this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0
        }
        async _handle(e, t) {
            let a, s;
            try {
                let r = [t.fetch(e)];
                if (this._networkTimeoutSeconds) {
                    let n = te(this._networkTimeoutSeconds * 1e3);
                    r.push(n)
                }
                if (s = await Promise.race(r),
                !s)
                    throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)
            } catch (r) {
                r instanceof Error && (a = r)
            }
            if (!s)
                throw new d("no-response",{
                    url: e.url,
                    error: a
                });
            return s
        }
    }
    ;
    try {
        self["workbox:google-analytics:7.2.0"] && _()
    } catch {}
    var ht = "workbox-google-analytics"
      , dt = 60 * 48
      , we = "www.google-analytics.com"
      , ge = "www.googletagmanager.com"
      , ft = "/analytics.js"
      , pt = "/gtag/js"
      , mt = "/gtm.js"
      , yt = /^\/(\w+\/)?collect/
      , wt = e => async ({queue: t}) => {
        let a;
        for (; a = await t.shiftRequest(); ) {
            let {request: s, timestamp: r} = a
              , n = new URL(s.url);
            try {
                let i = s.method === "POST" ? new URLSearchParams(await s.clone().text()) : n.searchParams
                  , o = r - (Number(i.get("qt")) || 0)
                  , c = Date.now() - o;
                if (i.set("qt", String(c)),
                e.parameterOverrides)
                    for (let l of Object.keys(e.parameterOverrides)) {
                        let h = e.parameterOverrides[l];
                        i.set(l, h)
                    }
                typeof e.hitFilter == "function" && e.hitFilter.call(null, i),
                await fetch(new Request(n.origin + n.pathname,{
                    body: i.toString(),
                    method: "POST",
                    mode: "cors",
                    credentials: "omit",
                    headers: {
                        "Content-Type": "text/plain"
                    }
                }))
            } catch (i) {
                throw await t.unshiftRequest(a),
                i
            }
        }
    }
      , gt = e => {
        let t = ({url: s}) => s.hostname === we && yt.test(s.pathname)
          , a = new ut({
            plugins: [e]
        });
        return [new p(t,a,"GET"), new p(t,a,"POST")]
    }
      , _t = e => {
        let t = ({url: s}) => s.hostname === we && s.pathname === ft
          , a = new I({
            cacheName: e
        });
        return new p(t,a,"GET")
    }
      , vt = e => {
        let t = ({url: s}) => s.hostname === ge && s.pathname === pt
          , a = new I({
            cacheName: e
        });
        return new p(t,a,"GET")
    }
      , bt = e => {
        let t = ({url: s}) => s.hostname === ge && s.pathname === mt
          , a = new I({
            cacheName: e
        });
        return new p(t,a,"GET")
    }
      , qt = (e={}) => {
        let t = f.getGoogleAnalyticsName(e.cacheName)
          , a = new ct(ht,{
            maxRetentionTime: dt,
            onSync: wt(e)
        })
          , s = [bt(t), _t(t), vt(t), ...gt(a)]
          , r = new me;
        for (let n of s)
            r.registerRoute(n);
        r.addFetchListener()
    }
    ;
    try {
        self["workbox:precaching:7.2.0"] && _()
    } catch {}
    var Rt = "__WB_REVISION__";
    function xt(e) {
        if (!e)
            throw new d("add-to-cache-list-unexpected-type",{
                entry: e
            });
        if (typeof e == "string") {
            let n = new URL(e,location.href);
            return {
                cacheKey: n.href,
                url: n.href
            }
        }
        let {revision: t, url: a} = e;
        if (!a)
            throw new d("add-to-cache-list-unexpected-type",{
                entry: e
            });
        if (!t) {
            let n = new URL(a,location.href);
            return {
                cacheKey: n.href,
                url: n.href
            }
        }
        let s = new URL(a,location.href)
          , r = new URL(a,location.href);
        return s.searchParams.set(Rt, t),
        {
            cacheKey: s.href,
            url: r.href
        }
    }
    var Et = class {
        constructor() {
            this.updatedURLs = [],
            this.notUpdatedURLs = [],
            this.handlerWillStart = async ({request: e, state: t}) => {
                t && (t.originalRequest = e)
            }
            ,
            this.cachedResponseWillBeUsed = async ({event: e, state: t, cachedResponse: a}) => {
                if (e.type === "install" && t && t.originalRequest && t.originalRequest instanceof Request) {
                    let s = t.originalRequest.url;
                    a ? this.notUpdatedURLs.push(s) : this.updatedURLs.push(s)
                }
                return a
            }
        }
    }
      , kt = class {
        constructor({precacheController: e}) {
            this.cacheKeyWillBeUsed = async ({request: t, params: a}) => {
                let s = a?.cacheKey || this._precacheController.getCacheKeyForURL(t.url);
                return s ? new Request(s,{
                    headers: t.headers
                }) : t
            }
            ,
            this._precacheController = e
        }
    }
      , v = class extends D {
        constructor(e={}) {
            e.cacheName = f.getPrecacheName(e.cacheName),
            super(e),
            this._fallbackToNetwork = e.fallbackToNetwork !== !1,
            this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)
        }
        async _handle(e, t) {
            return await t.cacheMatch(e) || (t.event && t.event.type === "install" ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
        }
        async _handleFetch(e, t) {
            let a, s = t.params || {};
            if (this._fallbackToNetwork) {
                let r = s.integrity
                  , n = e.integrity
                  , i = !n || n === r;
                if (a = await t.fetch(new Request(e,{
                    integrity: e.mode !== "no-cors" ? n || r : void 0
                })),
                r && i && e.mode !== "no-cors") {
                    this._useDefaultCacheabilityPluginIfNeeded();
                    let o = await t.cachePut(e, a.clone())
                }
            } else
                throw new d("missing-precache-entry",{
                    cacheName: this.cacheName,
                    url: e.url
                });
            return a
        }
        async _handleInstall(e, t) {
            this._useDefaultCacheabilityPluginIfNeeded();
            let a = await t.fetch(e);
            if (!await t.cachePut(e, a.clone()))
                throw new d("bad-precaching-response",{
                    url: e.url,
                    status: a.status
                });
            return a
        }
        _useDefaultCacheabilityPluginIfNeeded() {
            let e = null
              , t = 0;
            for (let[a,s] of this.plugins.entries())
                s !== v.copyRedirectedCacheableResponsesPlugin && (s === v.defaultPrecacheCacheabilityPlugin && (e = a),
                s.cacheWillUpdate && t++);
            t === 0 ? this.plugins.push(v.defaultPrecacheCacheabilityPlugin) : t > 1 && e !== null && this.plugins.splice(e, 1)
        }
    }
    ;
    v.defaultPrecacheCacheabilityPlugin = {
        async cacheWillUpdate({response: e}) {
            return !e || e.status >= 400 ? null : e
        }
    },
    v.copyRedirectedCacheableResponsesPlugin = {
        async cacheWillUpdate({response: e}) {
            return e.redirected ? await Ke(e) : e
        }
    };
    var Dt = class {
        constructor({cacheName: e, plugins: t=[], fallbackToNetwork: a=!0}={}) {
            this._urlsToCacheKeys = new Map,
            this._urlsToCacheModes = new Map,
            this._cacheKeysToIntegrities = new Map,
            this._strategy = new v({
                cacheName: f.getPrecacheName(e),
                plugins: [...t, new kt({
                    precacheController: this
                })],
                fallbackToNetwork: a
            }),
            this.install = this.install.bind(this),
            this.activate = this.activate.bind(this)
        }
        get strategy() {
            return this._strategy
        }
        precache(e) {
            this.addToCacheList(e),
            this._installAndActiveListenersAdded || (self.addEventListener("install", this.install),
            self.addEventListener("activate", this.activate),
            this._installAndActiveListenersAdded = !0)
        }
        addToCacheList(e) {
            let t = [];
            for (let a of e) {
                typeof a == "string" ? t.push(a) : a && a.revision === void 0 && t.push(a.url);
                let {cacheKey: s, url: r} = xt(a)
                  , n = typeof a != "string" && a.revision ? "reload" : "default";
                if (this._urlsToCacheKeys.has(r) && this._urlsToCacheKeys.get(r) !== s)
                    throw new d("add-to-cache-list-conflicting-entries",{
                        firstEntry: this._urlsToCacheKeys.get(r),
                        secondEntry: s
                    });
                if (typeof a != "string" && a.integrity) {
                    if (this._cacheKeysToIntegrities.has(s) && this._cacheKeysToIntegrities.get(s) !== a.integrity)
                        throw new d("add-to-cache-list-conflicting-integrities",{
                            url: r
                        });
                    this._cacheKeysToIntegrities.set(s, a.integrity)
                }
                if (this._urlsToCacheKeys.set(r, s),
                this._urlsToCacheModes.set(r, n),
                t.length > 0) {
                    let i = `Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;
                    console.warn(i)
                }
            }
        }
        install(e) {
            return ae(e, async () => {
                let t = new Et;
                this.strategy.plugins.push(t);
                for (let[r,n] of this._urlsToCacheKeys) {
                    let i = this._cacheKeysToIntegrities.get(n)
                      , o = this._urlsToCacheModes.get(r)
                      , c = new Request(r,{
                        integrity: i,
                        cache: o,
                        credentials: "same-origin"
                    });
                    await Promise.all(this.strategy.handleAll({
                        params: {
                            cacheKey: n
                        },
                        request: c,
                        event: e
                    }))
                }
                let {updatedURLs: a, notUpdatedURLs: s} = t;
                return {
                    updatedURLs: a,
                    notUpdatedURLs: s
                }
            }
            )
        }
        activate(e) {
            return ae(e, async () => {
                let t = await self.caches.open(this.strategy.cacheName)
                  , a = await t.keys()
                  , s = new Set(this._urlsToCacheKeys.values())
                  , r = [];
                for (let n of a)
                    s.has(n.url) || (await t.delete(n),
                    r.push(n.url));
                return {
                    deletedURLs: r
                }
            }
            )
        }
        getURLsToCacheKeys() {
            return this._urlsToCacheKeys
        }
        getCachedURLs() {
            return [...this._urlsToCacheKeys.keys()]
        }
        getCacheKeyForURL(e) {
            let t = new URL(e,location.href);
            return this._urlsToCacheKeys.get(t.href)
        }
        getIntegrityForCacheKey(e) {
            return this._cacheKeysToIntegrities.get(e)
        }
        async matchPrecache(e) {
            let t = e instanceof Request ? e.url : e
              , a = this.getCacheKeyForURL(t);
            if (a)
                return (await self.caches.open(this.strategy.cacheName)).match(a)
        }
        createHandlerBoundToURL(e) {
            let t = this.getCacheKeyForURL(e);
            if (!t)
                throw new d("non-precached-url",{
                    url: e
                });
            return a => (a.request = new Request(e),
            a.params = Object.assign({
                cacheKey: t
            }, a.params),
            this.strategy.handle(a))
        }
    }
    , H, _e = () => (H || (H = new Dt),
    H), Ct = class extends p {
        constructor(e, t, a) {
            let s = ({url: r}) => {
                let n = e.exec(r.href);
                if (n && !(r.origin !== location.origin && n.index !== 0))
                    return n.slice(1)
            }
            ;
            super(s, t, a)
        }
    }
    , C, St = () => (C || (C = new me,
    C.addFetchListener(),
    C.addCacheListener()),
    C);
    function S(e, t, a) {
        let s;
        if (typeof e == "string") {
            let r = new URL(e,location.href)
              , n = ({url: i}) => i.href === r.href;
            s = new p(n,t,a)
        } else if (e instanceof RegExp)
            s = new Ct(e,t,a);
        else if (typeof e == "function")
            s = new p(e,t,a);
        else if (e instanceof p)
            s = e;
        else
            throw new d("unsupported-route-type",{
                moduleName: "workbox-routing",
                funcName: "registerRoute",
                paramName: "capture"
            });
        return St().registerRoute(s),
        s
    }
    function Nt(e, t=[]) {
        for (let a of [...e.searchParams.keys()])
            t.some(s => s.test(a)) && e.searchParams.delete(a);
        return e
    }
    function *Lt(e, {ignoreURLParametersMatching: t=[/^utm_/, /^fbclid$/], directoryIndex: a="index.html", cleanURLs: s=!0, urlManipulation: r}={}) {
        let n = new URL(e,location.href);
        n.hash = "",
        yield n.href;
        let i = Nt(n, t);
        if (yield i.href,
        a && i.pathname.endsWith("/")) {
            let o = new URL(i.href);
            o.pathname += a,
            yield o.href
        }
        if (s) {
            let o = new URL(i.href);
            o.pathname += ".html",
            yield o.href
        }
        if (r) {
            let o = r({
                url: n
            });
            for (let c of o)
                yield c.href
        }
    }
    var Tt = class extends p {
        constructor(e, t) {
            let a = ({request: s}) => {
                let r = e.getURLsToCacheKeys();
                for (let n of Lt(s.url, t)) {
                    let i = r.get(n);
                    if (i) {
                        let o = e.getIntegrityForCacheKey(i);
                        return {
                            cacheKey: i,
                            integrity: o
                        }
                    }
                }
            }
            ;
            super(a, e.strategy)
        }
    }
    ;
    function Ut(e) {
        let t = _e()
          , a = new Tt(t,e);
        S(a)
    }
    function Pt(e) {
        _e().precache(e)
    }
    function It(e, t) {
        Pt(e),
        Ut(t)
    }
    var Ot = class extends D {
        async _handle(e, t) {
            let a = [], s = await t.cacheMatch(e), r;
            if (!s)
                try {
                    s = await t.fetchAndCachePut(e)
                } catch (n) {
                    n instanceof Error && (r = n)
                }
            if (!s)
                throw new d("no-response",{
                    url: e.url,
                    error: r
                });
            return s
        }
    }
      , ve = class extends D {
        constructor(e={}) {
            super(e),
            this.plugins.some(t => "cacheWillUpdate"in t) || this.plugins.unshift(ye)
        }
        async _handle(e, t) {
            let a = []
              , s = t.fetchAndCachePut(e).catch( () => {}
            );
            t.waitUntil(s);
            let r = await t.cacheMatch(e), n;
            if (!r)
                try {
                    r = await s
                } catch (i) {
                    i instanceof Error && (n = i)
                }
            if (!r)
                throw new d("no-response",{
                    url: e.url,
                    error: n
                });
            return r
        }
    }
      , be = function e(t) {
        function a(r, n, i) {
            var o, c = {};
            if (Array.isArray(r))
                return r.concat(n);
            for (o in r)
                c[i ? o.toLowerCase() : o] = r[o];
            for (o in n) {
                var l = i ? o.toLowerCase() : o
                  , h = n[o];
                c[l] = l in c && typeof h == "object" ? a(c[l], h, l == "headers") : h
            }
            return c
        }
        function s(r, n, i, o, c) {
            var l = typeof r != "string" ? (n = r).url : r
              , h = {
                config: n
            }
              , u = a(t, n)
              , R = {};
            o = o || u.data,
            (u.transformRequest || []).map(function(g) {
                o = g(o, u.headers) || o
            }),
            u.auth && (R.authorization = u.auth),
            o && typeof o == "object" && typeof o.append != "function" && typeof o.text != "function" && (o = JSON.stringify(o),
            R["content-type"] = "application/json");
            try {
                R[u.xsrfHeaderName] = decodeURIComponent(document.cookie.match(RegExp("(^|; )" + u.xsrfCookieName + "=([^;]*)"))[2])
            } catch {}
            return u.baseURL && (l = l.replace(/^(?!.*\/\/)\/?/, u.baseURL + "/")),
            u.params && (l += (~l.indexOf("?") ? "&" : "?") + (u.paramsSerializer ? u.paramsSerializer(u.params) : new URLSearchParams(u.params))),
            (u.fetch || fetch)(l, {
                method: (i || u.method || "get").toUpperCase(),
                body: o,
                headers: a(u.headers, R, !0),
                credentials: u.withCredentials ? "include" : c
            }).then(function(g) {
                for (var X in g)
                    typeof g[X] != "function" && (h[X] = g[X]);
                return u.responseType == "stream" ? (h.data = g.body,
                h) : g[u.responseType || "text"]().then(function(Se) {
                    h.data = Se,
                    h.data = JSON.parse(Se)
                }).catch(Object).then(function() {
                    return (u.validateStatus ? u.validateStatus(g.status) : g.ok) ? h : Promise.reject(h)
                })
            })
        }
        return t = t || {},
        s.request = s,
        s.get = function(r, n) {
            return s(r, n, "get")
        }
        ,
        s.delete = function(r, n) {
            return s(r, n, "delete")
        }
        ,
        s.head = function(r, n) {
            return s(r, n, "head")
        }
        ,
        s.options = function(r, n) {
            return s(r, n, "options")
        }
        ,
        s.post = function(r, n, i) {
            return s(r, i, "post", n)
        }
        ,
        s.put = function(r, n, i) {
            return s(r, i, "put", n)
        }
        ,
        s.patch = function(r, n, i) {
            return s(r, i, "patch", n)
        }
        ,
        s.all = Promise.all.bind(Promise),
        s.spread = function(r) {
            return r.apply.bind(r, r)
        }
        ,
        s.CancelToken = typeof AbortController == "function" ? AbortController : Object,
        s.defaults = t,
        s.create = e,
        s
    }()
      , At = e => {
        let t, a = e;
        return (...s) => (a && (t = a(...s),
        a = void 0),
        t)
    }
    ;
    function qe() {
        if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
            return crypto.randomUUID();
        let e = "", t, a;
        for (t = 0; t < 32; t += 1)
            a = Math.random() * 16 | 0,
            (t === 8 || t === 12 || t === 16 || t === 20) && (e += "-"),
            e += (t === 12 ? 4 : t === 16 ? a & 3 | 8 : a).toString(16);
        return e
    }
    var b = {};
    self.crashMonitorStore = b;
    var jt = qe();
    async function Mt(e, t) {
        let a = qe()
          , {custom: s, reportParams: r} = t;
        if (!r)
            return;
        let n = {
            type: "p_crash",
            uuid: a,
            ctwid: r.ctwid,
            appid: r.appid,
            time: `${Date.now()}`,
            page: r.page,
            payload: {
                sessionId: e,
                sessionDuration: Math.round(Date.now() / 1e3 - s.issuedAt)
            }
        };
        be.post("/reports", n)
    }
    async function Kt(e, t) {
        console.info(`SW[${jt}] checkCrash SendReport`, e, t),
        be.post("/api/crash", {
            sessionId: e,
            custom: t.custom
        }),
        t.reportParams && Mt(e, t)
    }
    function Bt(e, t, a) {
        let s = b[e] || {};
        b[e] = {
            lastSeen: Date.now(),
            custom: s.custom,
            reportParams: a || b[e].reportParams
        },
        t && (b[e].custom = t)
    }
    function Re(e) {
        delete b[e]
    }
    function Ft() {
        let e = Object.entries(b)
          , t = Date.now();
        for (let[a,s] of e)
            t - s.lastSeen > 2e3 && (Kt(a, s),
            Re(a))
    }
    async function xe() {
        let e = await self.clients.matchAll()
          , t = {
            type: "sw/heartbeat",
            kind: "ping"
        };
        for (let a of e)
            a.postMessage(t)
    }
    function Wt(e) {
        return !!e && e.type === "sw/heartbeat"
    }
    var Ht = At( () => {
        self.addEventListener("message", e => {
            if (!(e != null && e.data) || !e.source || !Wt(e.data))
                return;
            let {data: t} = e;
            if (t.action.kind === "mount")
                Bt(t.action.sessionId, t.action.custom, t.action.reportParams);
            else if (t.action.kind === "unmount")
                Re(t.action.sessionId);
            else
                throw new Error(`Unknown action.kind ${t.action}`)
        }
        ),
        self.addEventListener("activate", () => {
            xe()
        }
        )
    }
    ), $, Q;
    function $t() {
        $ && clearInterval($),
        $ = setInterval(Ft, 3e3),
        Q && clearInterval(Q),
        Q = setInterval(xe, 1e3),
        Ht()
    }
    function V(e) {
        return new Promise(function(t, a) {
            e.oncomplete = e.onsuccess = function() {
                return t(e.result)
            }
            ,
            e.onabort = e.onerror = function() {
                return a(e.error)
            }
        }
        )
    }
    function Qt(e, t) {
        var a = indexedDB.open(e);
        a.onupgradeneeded = function() {
            return a.result.createObjectStore(t)
        }
        ;
        var s = V(a);
        return function(r, n) {
            return s.then(function(i) {
                return n(i.transaction(t, r).objectStore(t))
            })
        }
    }
    var G;
    function Ee() {
        return G || (G = Qt("keyval-store", "keyval")),
        G
    }
    function Vt(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ee();
        return t("readonly", function(a) {
            return V(a.get(e))
        })
    }
    function Gt(e, t) {
        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ee();
        return a("readwrite", function(s) {
            return s.put(t, e),
            V(s.transaction)
        })
    }
    var ke = (e=21) => crypto.getRandomValues(new Uint8Array(e)).reduce( (t, a) => (a &= 63,
    a < 36 ? t += a.toString(36) : a < 62 ? t += (a - 26).toString(36).toUpperCase() : a > 62 ? t += "-" : t += "_",
    t), ""), q;
    async function De() {
        console.log("[service-worker-sw] initsw");
        try {
            q = await Vt("swid"),
            q || (q = `swid_${ke()}`,
            await Gt("swid", q))
        } catch (e) {
            q = ke(),
            console.error(`[service-worker-sw] initsw error: ${e}`)
        }
        return q
    }
    async function zt() {
        return q || De()
    }
    Be({
        prefix: "g123",
        suffix: "v1",
        precache: "precache",
        runtime: "runtime",
        googleAnalytics: "google-analytics"
    });
    var Ce = e => [L.prefix, e, L.suffix].filter(t => t && t.length > 0).join("-")
      , Jt = Ce("page")
      , Xt = Ce("thirdparty");
    async function Yt() {
        let e = (await caches.keys()).filter(t => !t.startsWith(L.prefix) || !t.endsWith(L.suffix));
        await Promise.all(e.map(t => (console.info("[service-worker-sw] Remove cache", t),
        caches.delete(t))))
    }
    qt(),
    It(precacheAssets || [], {
        ignoreURLParametersMatching: [/.*/]
    }),
    RUN_ENV !== "staging" && S(e => e.url.pathname === `/game/${appCode}`, new I({
        cacheName: Jt,
        networkTimeoutSeconds: 3,
        matchOptions: {
            ignoreSearch: !1
        },
        fetchOptions: {
            credentials: "include"
        },
        plugins: [new ue({
            maxEntries: 100,
            purgeOnQuotaError: !0,
            matchOptions: {
                ignoreSearch: !1
            }
        }), new N({
            statuses: [0, 200]
        })]
    })),
    S(/\/static\/.+$/, new ve({
        plugins: [new N({
            statuses: [0, 200]
        })]
    }));
    function z(e) {
        return S(e, new ve({
            plugins: [new N({
                statuses: [0, 200]
            })]
        }))
    }
    z(/^https:\/\/cdn-new.*\.g123\.jp/),
    z(/^https:\/\/platform-sc.*\.g123\.jp/),
    z(/^https:\/\/platform-ik.*\.g123\.jp/);
    function J(e) {
        return S(e, new Ot({
            cacheName: Xt,
            plugins: [new ue({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                purgeOnQuotaError: !0
            }), new N({
                statuses: [0, 200]
            })]
        }))
    }
    J(/^https:\/\/browser\.sentry-cdn\.com\/.*\/bundle.min.js$/),
    J(/^https:\/\/www\.gstatic\.com/),
    J(/^https:\/\/ajax\.googleapis\.com/),
    self.addEventListener("install", e => {
        console.info("[service-worker-sw] install event"),
        e.waitUntil(self.skipWaiting().then( () => De()))
    }
    ),
    self.addEventListener("fetch", e => {
        new URL(e.request.url).pathname === "/api/v1/session" && e.respondWith((async () => {
            try {
                let t = new Headers;
                e.request.headers.forEach( (r, n) => {
                    t.append(n, r)
                }
                );
                let a = await zt();
                t.append("x-request-swid", a);
                let s = new Request(e.request.url,{
                    method: e.request.method,
                    headers: t,
                    mode: e.request.mode,
                    credentials: e.request.credentials,
                    cache: e.request.cache,
                    redirect: e.request.redirect,
                    referrer: e.request.referrer,
                    integrity: e.request.integrity
                });
                return fetch(s)
            } catch (t) {
                return console.error(t),
                new Response("Service unavailable",{
                    status: 503
                })
            }
        }
        )())
    }
    ),
    self.addEventListener("activate", e => {
        console.info("[service-worker-sw] active event");
        let t = async () => {
            try {
                await Yt()
            } catch (a) {
                console.error(a)
            }
            await self.clients.claim(),
            $t()
        }
        ;
        e.waitUntil(t())
    }
    )
}
)();
