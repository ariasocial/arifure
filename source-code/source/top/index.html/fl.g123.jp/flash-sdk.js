var G123FlashSdk = function() {
    "use strict";
    var oe = Object.defineProperty;
    var ae = (w, g, I) => g in w ? oe(w, g, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: I
    }) : w[g] = I;
    var c = (w, g, I) => ae(w, typeof g != "symbol" ? g + "" : g, I);
    class w {
        constructor(e) {
            c(this, "_entries");
            this._entries = e
        }
        getEntries() {
            return this._entries
        }
        getEntriesByType(e) {
            return this._entries.filter(t => t.entryType === e)
        }
        getEntriesByName(e, t) {
            return this._entries.filter(s => s.name === e).filter(s => t ? s.entryType === t : !0)
        }
    }
    class g {
        constructor({registeredObservers: e=new Set, processedEntries: t=new Set, interval: s=100, context: n=self}={}) {
            c(this, "registeredObservers");
            c(this, "processedEntries");
            c(this, "interval");
            c(this, "intervalId");
            c(this, "context");
            this.registeredObservers = e,
            this.processedEntries = t,
            this.interval = s,
            this.context = n,
            this.intervalId = null
        }
        getNewEntries() {
            return typeof this.context.performance.getEntries != "function" ? [] : this.context.performance.getEntries().filter(t => !this.processedEntries.has(t))
        }
        getObserversForType(e, t) {
            return Array.from(e).filter(s => s.entryTypes.some(n => n === t))
        }
        processBuffer(e) {
            const t = Array.from(e.buffer)
              , s = new w(t);
            e.buffer.clear(),
            t.length && e.callback && e.callback.call(void 0, s, e)
        }
        processEntries() {
            this.getNewEntries().forEach(s => {
                const {entryType: n} = s;
                this.getObserversForType(this.registeredObservers, n).forEach(a => {
                    a.buffer.add(s)
                }
                ),
                this.processedEntries.add(s)
            }
            );
            const t = () => this.registeredObservers.forEach(this.processBuffer);
            "requestAnimationFrame"in this.context ? this.context.requestAnimationFrame(t) : this.context.setTimeout(t, 0)
        }
        add(e) {
            this.registeredObservers.add(e),
            this.registeredObservers.size === 1 && this.observe()
        }
        remove(e) {
            this.registeredObservers.delete(e),
            this.registeredObservers.size || this.disconnect()
        }
        observe() {
            this.intervalId = this.context.setInterval(this.processEntries.bind(this), this.interval)
        }
        disconnect() {
            this.intervalId = this.context.clearInterval(this.intervalId)
        }
    }
    const I = ["mark", "measure", "navigation", "resource"]
      , T = {
        "no-entry-types": "Failed to execute 'observe' on 'PerformanceObserver': either an 'entryTypes' or 'type' member must be present.",
        "both-entry-types": "Failed to execute 'observe' on 'PerformanceObserver': either an 'entryTypes' or 'type' member must be present, not both."
    }
      , D = {
        "no-valid-entry-types": "Aborting 'observe' on 'PerformanceObserver': no valid entry types present in either 'entryTypes' or 'type' member.",
        "entry-types-removed": "Invalid or unsupported entry types provided to 'observe' on 'PerformanceObserver'."
    }
      , $ = r => I.some(e => r === e)
      , z = new g;
    class H {
        constructor(e, t=z) {
            c(this, "callback");
            c(this, "buffer");
            c(this, "entryTypes", []);
            c(this, "taskQueue");
            this.callback = e,
            this.buffer = new Set,
            this.taskQueue = t
        }
        observe(e) {
            if (!e)
                throw new Error(T["no-entry-types"]);
            if (e.entryTypes && e.type)
                throw new Error(T["both-entry-types"]);
            let t;
            if (e.entryTypes)
                t = e.entryTypes;
            else if (e.type)
                t = [e.type];
            else
                throw new Error(T["no-entry-types"]);
            const s = t.filter($);
            if (s.length > 0 && s.length !== t.length && console.warn(D["entry-types-removed"]),
            !s.length) {
                console.warn(D["no-valid-entry-types"]);
                return
            }
            this.entryTypes = s,
            this.taskQueue.add(this)
        }
        disconnect() {
            this.taskQueue.remove(this)
        }
        takeRecords() {
            return Array.from(this.buffer)
        }
    }
    const q = "PerformanceObserver"in self && typeof PerformanceObserver == "function" ? PerformanceObserver : H;
    let W = "info";
    const u = {
        setLogLevel(r) {
            W = r
        },
        info: (...r) => {
            console.log("[FlashSdk]", ...r)
        }
        ,
        debug: (...r) => {
            W === "debug" && console.log("[FlashSdk]", ...r)
        }
    };
    function G() {
        return typeof self.crypto.randomUUID == "function" ? self.crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, r => (Number(r) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(r) / 4).toString(16))
    }
    function B() {
        const {performance: r} = self
          , e = Date.now();
        if (!r || !r.now)
            return e;
        const t = 60 * 60 * 1e3
          , s = r.now()
          , n = r.timeOrigin ? Math.abs(r.timeOrigin + s - e) : t
          , i = n < t
          , a = r.timing && r.timing.navigationStart
          , f = typeof a == "number" ? Math.abs(a + s - e) : t
          , d = f < t;
        return i || d ? n <= f ? r.timeOrigin : a : e
    }
    const Q = "cp_game_error_tracking"
      , X = 1
      , j = 5 * 1e3
      , C = 50;
    class K {
        constructor() {
            c(this, "inited", !1);
            c(this, "origin", "");
            c(this, "initParams", {
                metadata: {},
                failed_reason: "",
                isInstalled: !1,
                sdkVersion: "",
                currentUsage: void 0,
                serviceWorkerVersion: "",
                installedAt: "",
                deviceUuid: "",
                deviceUuidStatus: "",
                serviceWorkerId: "",
                serviceWorkerRecords: {}
            });
            c(this, "enableReportError", !1);
            c(this, "fetches", new Map);
            c(this, "caches", new Set);
            c(this, "errors", new Map);
            c(this, "requests", new Set);
            c(this, "reportErrors", new Set);
            c(this, "pageViewId", G());
            c(this, "timeOrigin", B());
            c(this, "isReporting", !1);
            c(this, "storageUsage")
        }
        init({origin: e}) {
            this.inited || (this.inited = !0,
            this.origin = e,
            this.observe(),
            this.addEventListeners())
        }
        observe() {
            new q(t => {
                t.getEntries().forEach(s => {
                    this.requests.add(s)
                }
                ),
                performance.clearResourceTimings()
            }
            ).observe({
                type: "resource",
                buffered: !0
            })
        }
        startPolling() {
            const e = () => {
                this.requests.size >= X && this.reportTrace(),
                this.postErrorMessage(),
                setTimeout(e, j)
            }
            ;
            e()
        }
        addEventListeners() {
            document.addEventListener("visibilitychange", () => {
                const e = {
                    visible: "misc_flashlaunch_pageshow",
                    hidden: "misc_flashlaunch_pagehide"
                };
                this.report(e[document.visibilityState], {
                    pageViewId: this.pageViewId,
                    triggeredAt: Date.now()
                }),
                document.visibilityState === "hidden" && this.reportTrace()
            }
            ),
            self.addEventListener("beforeunload", () => {
                this.reportTrace()
            }
            )
        }
        report(e, t) {
            var n;
            const s = {
                version: "v2",
                service: "flashlaunch",
                action: e,
                data: t
            };
            u.debug("report", s),
            (n = self.top) == null || n.postMessage(JSON.stringify(s), "*")
        }
        async reportInit() {
            var m;
            if (!this.inited && !this.initParams.failed_reason)
                return;
            let e = {
                quota: 0,
                usage: 0
            };
            const {isInstalled: t, metadata: s, failed_reason: n, currentUsage: i, serviceWorkerVersion: a, sdkVersion: h, installedAt: f, deviceUuid: d, deviceUuidStatus: p, serviceWorkerId: k, serviceWorkerRecords: E} = this.initParams;
            try {
                e = await navigator.storage.estimate()
            } catch {}
            i != null && i.size && (e.usage = i.size),
            this.report("misc_flashlaunch_init", {
                triggeredAt: Date.now(),
                quota: {
                    storage: Math.min(e.quota || 0, Number.MAX_SAFE_INTEGER)
                },
                usage: {
                    storage: Math.min(e.usage || 0, Number.MAX_SAFE_INTEGER)
                },
                caculatedSize: {
                    storage: (i == null ? void 0 : i.caculatedSize) || 0
                },
                maxStorage: {
                    storage: (i == null ? void 0 : i.maxStorage) || 0
                },
                serviceWorkerVersion: a,
                sdkVersion: h,
                isInstalled: t,
                metadata: s,
                failed_reason: n,
                pageViewId: this.pageViewId,
                network: ((m = self.navigator.connection) == null ? void 0 : m.effectiveType) || "unknown",
                installedAt: f,
                deviceUuid: d,
                deviceUuidStatus: p,
                serviceWorkerId: k,
                serviceWorkerRecords: E
            })
        }
        async reportTrace() {
            if (!this.inited || !this.requests.size || this.isReporting)
                return;
            this.isReporting = !0;
            const e = Array.from(this.requests);
            this.requests.clear();
            const t = s => this.report("misc_flashlaunch_trace", {
                data: s.map( ({nextHopProtocol: n, name: i, encodedBodySize: a, decodedBodySize: h, transferSize: f, deliveryType: d, startTime: p, fetchStart: k, responseEnd: E, responseStatus: m}) => {
                    const o = this.fetches.get(i)
                      , y = this.errors.get(i)
                      , R = new URL(i);
                    return o && this.fetches.delete(i),
                    o && u.debug("[Tracker] swFetchTiming", i, d, h, f, o),
                    {
                        name: i || "",
                        timeOrigin: String(this.timeOrigin) || "",
                        pageViewId: this.pageViewId,
                        startTime: k || p || 0,
                        responseEnd: E || 0,
                        failedReason: y ? `${y.status}:${y.statusText}` : "",
                        crossOrigin: R.origin !== this.origin,
                        triggeredAt: Date.now(),
                        serviceWorkerRequestInfo: {
                            useOpfs: this.caches.has(i),
                            deliveryType: (o == null ? void 0 : o.deliveryType) ?? null,
                            nextHopProtocol: (o == null ? void 0 : o.nextHopProtocol) ?? null,
                            encodedBodySize: (o == null ? void 0 : o.encodedBodySize) ?? null,
                            decodedBodySize: (o == null ? void 0 : o.decodedBodySize) ?? null,
                            transferSize: (o == null ? void 0 : o.transferSize) ?? null,
                            responseStatus: (o == null ? void 0 : o.responseStatus) ?? null
                        },
                        mainRequestInfo: {
                            deliveryType: d ?? null,
                            nextHopProtocol: n ?? null,
                            encodedBodySize: a ?? null,
                            decodedBodySize: h ?? null,
                            transferSize: f ?? null,
                            responseStatus: m ?? null
                        }
                    }
                }
                )
            });
            for (let s = 0; s < e.length; s += C) {
                const n = e.slice(s, s + C);
                t(n),
                await new Promise(i => setTimeout(i, 1e3))
            }
            this.isReporting = !1
        }
        setFetchResource(e) {
            for (const t of e)
                this.fetches.set(t.name, t)
        }
        setCacheHit(e) {
            this.caches.add(e.url)
        }
        setInitParam(e, t) {
            this.initParams[e] = t
        }
        setFetchError(e) {
            this.errors.set(e.url, {
                status: e.status,
                statusText: e.statusText
            })
        }
        setEnableReportError(e) {
            this.enableReportError = e,
            this.postErrorMessage()
        }
        reportError({data: e, url: t}) {
            const {errors: s, usage: n} = e;
            if (s != null && s.length) {
                this.storageUsage = n;
                for (const i of s) {
                    const a = {
                        action: Q,
                        data: {
                            column: 1,
                            error: {
                                message: i.message,
                                stack: i.stack,
                                name: `[FlashLaunch] ${i.name}`
                            },
                            line: 1,
                            msg: "Error",
                            url: t
                        }
                    };
                    this.reportErrors.add(a)
                }
            }
        }
        postErrorMessage() {
            var t;
            if (!this.enableReportError)
                return;
            const e = Array.from(this.reportErrors);
            if (this.reportErrors.clear(),
            !!e.length) {
                this.report("misc_flashlaunch_error", {
                    pageViewId: this.pageViewId,
                    triggeredAt: Date.now(),
                    data: e.map( ({data: s}) => s.error),
                    errorCount: e.length,
                    storageUsage: this.storageUsage
                });
                for (const s of e)
                    (t = window.top) == null || t.postMessage(s, "*")
            }
        }
    }
    const P = "https://fl-api.g123.jp";
    function _(r, e={}, t=6e3) {
        if (typeof AbortController > "u")
            return fetch(r, e);
        const s = new AbortController
          , {signal: n} = s
          , i = setTimeout( () => s.abort(), t);
        return fetch(r, {
            ...e,
            signal: n
        }).finally( () => clearTimeout(i)).catch(a => {
            throw a.name === "AbortError" ? new Error("Fetch request timed out") : a
        }
        )
    }
    const J = {
        async fetchMetadata(r, e, t, s) {
            return _(`${P}/api/v1/app/${r}?user_id=${s}&ts=${Date.now()}`, {
                headers: {
                    "x-app-key": e,
                    Authorization: `Bearer ${t}`
                },
                cache: "no-store"
            }).then(n => {
                if (!n.ok)
                    throw new Error("Failed to fetch metadata");
                return n.json()
            }
            )
        },
        async fetchResources(r, e, t, s) {
            return _(`${P}/api/v1/app/${r}/resources?version=${s}&ts=${Date.now()}`, {
                headers: {
                    "x-app-key": e,
                    Authorization: `Bearer ${t}`
                },
                cache: "no-store"
            }).then(n => {
                if (!n.ok)
                    throw new Error("Failed to fetch resources");
                return n.json()
            }
            )
        },
        async fetchLeadResources(r, e, t, s) {
            return _(`${P}/api/v1/lead/app/${r}/resources?lastSyncedAt=${s}&ts=${Date.now()}`, {
                headers: {
                    "x-app-key": e,
                    Authorization: `Bearer ${t}`
                },
                cache: "no-store"
            }).then(n => {
                if (!n.ok)
                    throw new Error("Failed to fetch lead resources");
                return n.json()
            }
            )
        }
    };
    var S = (r => (r.CACHE = "cache",
    r.LEAD_CACHE = "lead_cache",
    r.TRACING = "tracing",
    r.DEBUG = "debug",
    r.REPORT_ERROR = "report_error",
    r))(S || {})
      , v = (r => (r.IOS = "ios",
    r.MAC = "mac",
    r.ANDROID = "android",
    r.WINDOWS = "windows",
    r.OTHERS = "others",
    r))(v || {})
      , b = (r => (r.CHROME = "chrome",
    r.EDGE = "edge",
    r.FIREFOX = "firefox",
    r.SAFARI = "safari",
    r.OTHERS = "others",
    r))(b || {});
    function Y(r) {
        let e = v.OTHERS;
        /iphone|ipad|ipod/i.test(r) ? e = v.IOS : /macintosh|mac os x/i.test(r) ? e = v.MAC : /android/i.test(r) ? e = v.ANDROID : /windows|win32|win64/i.test(r) && (e = v.WINDOWS);
        let t = b.OTHERS;
        return r.includes("edge") || r.includes("edg") ? t = b.EDGE : r.includes("chrome") || r.includes("chromium") || r.includes("crios") ? t = b.CHROME : r.includes("firefox") ? t = b.FIREFOX : r.includes("safari") && !r.includes("chrome") && (t = b.SAFARI),
        {
            browser: t,
            os: e
        }
    }
    const L = "0.2.3"
      , M = 1e4;
    let x = null;
    const l = new K;
    async function F(r) {
        return new Promise(e => setTimeout(e, r))
    }
    async function Z() {
        try {
            await (await navigator.storage.getDirectory()).getDirectoryHandle("cache", {
                create: !0
            })
        } catch {
            return !1
        }
        return !0
    }
    async function ee(r) {
        if (!("serviceWorker"in navigator))
            return [!1, "service-worker-not-supported"];
        const e = navigator.userAgent.toLowerCase()
          , {os: t, browser: s} = Y(e)
          , n = r[t] || [];
        return !(t === v.MAC && s === b.SAFARI || t === v.IOS) && !await Z() ? [!1, "opfs-not-supported"] : n.includes(s) ? [!0, "supported"] : [!1, `${t}-${s}-not-supported`]
    }
    async function re() {
        return navigator.serviceWorker.register("/sw.js").then(r => (u.info("Service Worker registered", r.scope),
        r))
    }
    async function te() {
        return navigator.serviceWorker.getRegistration("/")
    }
    async function se() {
        const r = performance.now();
        async function e() {
            return await F(2e3),
            ""
        }
        async function t() {
            for (; !window.CpSdk; )
                await F(100);
            const s = performance.now();
            return u.info(`getPlatformParams took ${s - r}ms`),
            (await window.CpSdk.getPlatformParams()).code
        }
        return await Promise.race([e(), t()])
    }
    async function N(r, e, t, s, n) {
        if (u.info("waitForServiceWorker"),
        !navigator.serviceWorker.controller)
            return;
        x = navigator.serviceWorker.controller;
        const i = new Promise( (a, h) => {
            const f = setTimeout( () => {
                navigator.serviceWorker.removeEventListener("message", d),
                h(new Error("service-worker-timeout"))
            }
            , M)
              , d = async p => {
                if (p.data.type === "serviceWorkerInitDone") {
                    navigator.serviceWorker.removeEventListener("message", d),
                    clearTimeout(f);
                    const {currentUsage: k, version: E, deviceUuid: m, installedAt: o, localInfoType: y, serviceWorkerId: R, serviceWorkerRecords: A} = p.data.data;
                    a({
                        currentUsage: k,
                        serviceWorkerVersion: E,
                        deviceUuid: m,
                        installedAt: o,
                        localInfoType: y,
                        serviceWorkerId: R,
                        serviceWorkerRecords: A
                    })
                }
            }
            ;
            navigator.serviceWorker.addEventListener("message", d)
        }
        );
        return u.info("post init message at:", new Date().toLocaleString(), +new Date),
        x.postMessage({
            type: "init",
            data: {
                appId: r,
                appKey: e,
                origin: t,
                authToken: s,
                metadata: n
            }
        }),
        u.info("service worker found"),
        i
    }
    function ie(r) {
        try {
            return JSON.parse(atob(r.split(".")[1])).sub
        } catch {
            return ""
        }
    }
    "serviceWorker"in navigator && navigator.serviceWorker.addEventListener("message", function(r) {
        const {type: e, data: t} = r.data;
        switch (u.debug("message from service worker", e, t),
        e) {
        case "cacheHit":
            l.setCacheHit(t);
            break;
        case "fetchResource":
            l.setFetchResource(t);
            break;
        case "fetchError":
            l.setFetchError(t);
            break;
        case "reportError":
            const s = navigator.serviceWorker.controller;
            l.reportError({
                data: t,
                url: s == null ? void 0 : s.scriptURL
            });
            break;
        default:
            u.debug("unknown message", r)
        }
    });
    async function ne(r, e, t, s, n, i) {
        return new Promise(async (a, h) => {
            const f = await re();
            f.addEventListener("updatefound", () => {
                u.info("Service Worker update found");
                const d = f.installing;
                d == null || d.addEventListener("statechange", async () => {
                    const p = d == null ? void 0 : d.state;
                    u.info("Service Worker state changed", p),
                    p === "activated" && a(await N(e, t, s, n, i).catch(h))
                }
                )
            }
            ),
            r ? a(await N(e, t, s, n, i).catch(h)) : setTimeout( () => {
                h(new Error("service-worker-timeout"))
            }
            , M)
        }
        )
    }
    const U = {
        init: async function({appId: r, appKey: e, origin: t}) {
            try {
                u.info("SDK version:", L, ", init method called at:", new Date().toLocaleString(), +new Date);
                const s = await se()
                  , n = ie(s)
                  , i = await J.fetchMetadata(r, e, s, n);
                u.info("metadata", i),
                i.enable_features.includes(S.TRACING) && l.init({
                    origin: t
                }),
                i.enable_features.includes(S.REPORT_ERROR) && l.setEnableReportError(!0),
                i.enable_features.includes(S.DEBUG) && (u.setLogLevel("debug"),
                u.debug("debug mode enabled")),
                l.setInitParam("metadata", i);
                const a = await te();
                u.info("service worker registration", a);
                const [h,f] = await ee(i.enforced_compatibility)
                  , d = i.enable_features.includes(S.CACHE) || i.enable_features.includes(S.LEAD_CACHE);
                if (a && (!h || !d))
                    throw await a.unregister(),
                    new Error("service-worker-unregistered");
                if (!h)
                    throw u.info("Flash launch not supported", f),
                    new Error(f);
                if (!d)
                    throw new Error("service-worker-not-opened");
                const p = await ne(a, r, e, t, s, i)
                  , {currentUsage: k, serviceWorkerVersion: E, deviceUuid: m, installedAt: o, localInfoType: y, serviceWorkerId: R, serviceWorkerRecords: A} = p || {};
                l.setInitParam("currentUsage", k),
                l.setInitParam("serviceWorkerVersion", E),
                l.setInitParam("deviceUuid", m || ""),
                l.setInitParam("installedAt", o || ""),
                l.setInitParam("serviceWorkerId", R || ""),
                l.setInitParam("serviceWorkerRecords", A || {});
                let O;
                y === "create" ? a ? O = "lost" : O = "new" : y === "cache" ? O = "normal" : O = "",
                l.setInitParam("deviceUuidStatus", O),
                l.setInitParam("isInstalled", !0)
            } catch (s) {
                l.setInitParam("failed_reason", s.message)
            }
            try {
                l.setInitParam("sdkVersion", L),
                await l.reportInit(),
                l.startPolling()
            } catch {}
        }
    }
      , V = document.getElementById("flashlaunch-script");
    if (V) {
        const {appid: r, appkey: e} = V.dataset;
        r && e && U.init({
            appId: r,
            appKey: e,
            origin: window.location.origin
        })
    }
    return U
}();
