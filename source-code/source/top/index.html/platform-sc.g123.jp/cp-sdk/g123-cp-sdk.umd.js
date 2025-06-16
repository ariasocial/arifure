(function(_, w) {
    typeof exports == "object" && typeof module < "u" ? module.exports = w() : typeof define == "function" && define.amd ? define(w) : (_ = typeof globalThis < "u" ? globalThis : _ || self,
    _.CpSdk = w())
}
)(this, function() {
    "use strict";
    const _ = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, globalThis.DOMException, globalThis.AssertionError, globalThis.SystemError].filter(Boolean).map(e => [e.name, e])
      , F = new Map(_)
      , G = [{
        property: "name",
        enumerable: !1
    }, {
        property: "message",
        enumerable: !1
    }, {
        property: "stack",
        enumerable: !1
    }, {
        property: "code",
        enumerable: !0
    }, {
        property: "cause",
        enumerable: !1
    }]
      , R = new WeakSet
      , z = e => {
        R.add(e);
        const r = e.toJSON();
        return R.delete(e),
        r
    }
      , V = e => F.get(e) ?? Error
      , k = ({from: e, seen: r, to: t, forceEnumerable: n, maxDepth: o, depth: i, useToJSON: s, serialize: u}) => {
        if (!t)
            if (Array.isArray(e))
                t = [];
            else if (!u && I(e)) {
                const c = V(e.name);
                t = new c
            } else
                t = {};
        if (r.push(e),
        i >= o)
            return t;
        if (s && typeof e.toJSON == "function" && !R.has(e))
            return z(e);
        const f = c => k({
            from: c,
            seen: [...r],
            forceEnumerable: n,
            maxDepth: o,
            depth: i,
            useToJSON: s,
            serialize: u
        });
        for (const [c,a] of Object.entries(e)) {
            if (a && a instanceof Uint8Array && a.constructor.name === "Buffer") {
                t[c] = "[object Buffer]";
                continue
            }
            if (a !== null && typeof a == "object" && typeof a.pipe == "function") {
                t[c] = "[object Stream]";
                continue
            }
            if (typeof a != "function") {
                if (!a || typeof a != "object") {
                    try {
                        t[c] = a
                    } catch {}
                    continue
                }
                if (!r.includes(e[c])) {
                    i++,
                    t[c] = f(e[c]);
                    continue
                }
                t[c] = "[Circular]"
            }
        }
        for (const {property: c, enumerable: a} of G)
            typeof e[c] < "u" && e[c] !== null && Object.defineProperty(t, c, {
                value: I(e[c]) ? f(e[c]) : e[c],
                enumerable: n ? !0 : a,
                configurable: !0,
                writable: !0
            });
        return t
    }
    ;
    function W(e, r={}) {
        const {maxDepth: t=Number.POSITIVE_INFINITY, useToJSON: n=!0} = r;
        return typeof e == "object" && e !== null ? k({
            from: e,
            seen: [],
            forceEnumerable: !0,
            maxDepth: t,
            depth: 0,
            useToJSON: n,
            serialize: !0
        }) : typeof e == "function" ? `[Function: ${e.name || "anonymous"}]` : e
    }
    function I(e) {
        return !!e && typeof e == "object" && "name"in e && "message"in e && "stack"in e
    }
    let v = null;
    function B() {
        v = window.onerror;
        const e = function(t, n, o, i, s) {
            return setTimeout( () => {
                var u;
                (u = window.top) == null || u.postMessage({
                    action: "cp_game_error_tracking",
                    data: {
                        column: i,
                        error: W(s),
                        line: o,
                        msg: t,
                        url: n
                    }
                }, "*")
            }
            ),
            v ? v.apply(this, arguments) : !1
        };
        window.onerror = e
    }
    function K() {
        B()
    }
    const N = (e => (r, t) => {
        var o;
        const n = Date.now();
        if (e.x === r && e.y === t && Math.abs(e.timestamp - n) < 100) {
            e.x = r,
            e.y = t,
            e.timestamp = n;
            return
        }
        (o = window.top) == null || o.postMessage({
            action: "cp_game_click_tracking",
            data: {
                x: r,
                y: t,
                view_width: window.innerWidth,
                view_height: window.innerHeight,
                timestamp: n
            }
        }, "*")
    }
    )({
        x: 0,
        y: 0,
        timestamp: 0
    });
    function Q(e) {
        const {pageX: r, pageY: t} = e.touches[0];
        N(r, t)
    }
    function X(e) {
        const {x: r, y: t} = e;
        N(r, t)
    }
    function Y() {
        window.addEventListener("touchstart", Q, {
            capture: !0,
            passive: !0
        }),
        window.addEventListener("click", X, {
            capture: !0,
            passive: !0
        })
    }
    let O = !1;
    try {
        localStorage.setItem("G123_TEST_VALUE", "1"),
        localStorage.removeItem("G123_TEST_VALUE")
    } catch {
        O = !0
    }
    function Z() {
        var e;
        (e = window.top) == null || e.postMessage({
            action: "cookie_disabled_check",
            data: {
                disabled: O
            }
        }, "*")
    }
    const M = {
        ChannelRpcRequest: "@channel-rpc/REQUEST",
        ChannelRpcResponse: "@channel-rpc/RESPONSE"
    };
    function ee(e) {
        return e && e.type === M.ChannelRpcResponse
    }
    function te(e) {
        return e && e.jsonrpc === "2.0" && "result"in e
    }
    function re(e) {
        return e && e.jsonrpc === "2.0" && "error"in e
    }
    function ne() {
        return typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function" ? crypto.randomUUID() : new Array(4).fill(0).map( () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-")
    }
    let L = !1;
    try {
        L = !!localStorage.getItem("channel-rpc-debug")
    } catch {}
    function y(...e) {
        L && console.log(...e)
    }
    const A = "timeout"
      , U = {
        InvalidRequest: {
            code: -32600,
            message: "Invalid Request"
        },
        MethodNotFound: {
            code: -32601,
            message: "Method not found"
        },
        InternalError: {
            code: -32603,
            message: "Internal error"
        },
        Timeout: {
            code: -32e3,
            message: "Timeout"
        }
    };
    function oe(e, r) {
        return {
            jsonrpc: "2.0",
            error: {
                code: e.code,
                message: e.message
            },
            id: r
        }
    }
    function ie(e) {
        const r = {
            resolve: t => {}
            ,
            reject: t => {}
            ,
            promise: void 0
        };
        return r.promise = new Promise( (t, n) => {
            const o = e ? setTimeout( () => {
                n(new Error(A))
            }
            , e) : void 0;
            r.resolve = i => (clearTimeout(o),
            t(i)),
            r.reject = i => (clearTimeout(o),
            n(i))
        }
        ),
        r
    }
    class se {
        constructor(r) {
            const {target: t, channelId: n, timeout: o} = r;
            if (!t)
                throw new Error("target is required");
            if (!n)
                throw new Error("channelId is required");
            this.target = t,
            this.channelId = n,
            this._deferreds = {},
            this._timeout = o || 1e3,
            this.stub = new Proxy({},{
                get: (s, u) => (...f) => (y(`[CHANNEL_RPC_CLIENT][channel=${n}] INVOKE`, u, f),
                this._sendRequest(String(u), f))
            }),
            (typeof globalThis == "object" ? globalThis : window).addEventListener("message", s => {
                !ee(s.data) || s.data.channelId !== n || (y(`[CHANNEL_RPC_CLIENT][channel=${this.channelId}] HANDLE_RESPONSE`, s.data),
                this._handleRpcResponse(s.data.payload))
            }
            )
        }
        async _sendRequest(r, t) {
            const n = ne()
              , o = ie(this._timeout)
              , i = o.promise.then(f => (delete this._deferreds[n],
            f)).catch(f => {
                throw delete this._deferreds[n],
                f.message === A ? oe(U.Timeout, n).error : f
            }
            );
            this._deferreds[n] = o;
            const s = {
                jsonrpc: "2.0",
                method: r,
                params: t,
                id: n
            };
            y("[CHANNEL_RPC_CLIENT] SEND_REQUEST", s);
            const u = {
                type: M.ChannelRpcRequest,
                channelId: this.channelId,
                payload: s
            };
            return this.target.postMessage(u, "*"),
            i
        }
        _handleRpcResponse(r) {
            var t, n;
            if (y("[CHANNEL_RPC_CLIENT] HANDLE_RESPONSE_RPC", r),
            te(r)) {
                const {id: o, result: i} = r;
                (t = this._deferreds[o]) == null || t.resolve(i)
            } else if (re(r)) {
                const {id: o, error: i} = r;
                if (!o)
                    throw i;
                (n = this._deferreds[o]) == null || n.reject(i)
            } else {
                const o = new Error(`[CHANNEL_RPC_CLIENT][channel=${this.channelId}] UNKNOWN_RESPONSE: ${JSON.stringify(r)}`);
                throw y("[CHANNEL_RPC_CLIENT] HANDLE_RESPONSE_RPC, ERROR", o),
                o
            }
        }
    }
    function ae(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var $ = {};
    function l(e, r) {
        typeof r == "boolean" && (r = {
            forever: r
        }),
        this._originalTimeouts = JSON.parse(JSON.stringify(e)),
        this._timeouts = e,
        this._options = r || {},
        this._maxRetryTime = r && r.maxRetryTime || 1 / 0,
        this._fn = null,
        this._errors = [],
        this._attempts = 1,
        this._operationTimeout = null,
        this._operationTimeoutCb = null,
        this._timeout = null,
        this._operationStart = null,
        this._timer = null,
        this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
    }
    var ce = l;
    l.prototype.reset = function() {
        this._attempts = 1,
        this._timeouts = this._originalTimeouts.slice(0)
    }
    ,
    l.prototype.stop = function() {
        this._timeout && clearTimeout(this._timeout),
        this._timer && clearTimeout(this._timer),
        this._timeouts = [],
        this._cachedTimeouts = null
    }
    ,
    l.prototype.retry = function(e) {
        if (this._timeout && clearTimeout(this._timeout),
        !e)
            return !1;
        var r = new Date().getTime();
        if (e && r - this._operationStart >= this._maxRetryTime)
            return this._errors.push(e),
            this._errors.unshift(new Error("RetryOperation timeout occurred")),
            !1;
        this._errors.push(e);
        var t = this._timeouts.shift();
        if (t === void 0)
            if (this._cachedTimeouts)
                this._errors.splice(0, this._errors.length - 1),
                t = this._cachedTimeouts.slice(-1);
            else
                return !1;
        var n = this;
        return this._timer = setTimeout(function() {
            n._attempts++,
            n._operationTimeoutCb && (n._timeout = setTimeout(function() {
                n._operationTimeoutCb(n._attempts)
            }, n._operationTimeout),
            n._options.unref && n._timeout.unref()),
            n._fn(n._attempts)
        }, t),
        this._options.unref && this._timer.unref(),
        !0
    }
    ,
    l.prototype.attempt = function(e, r) {
        this._fn = e,
        r && (r.timeout && (this._operationTimeout = r.timeout),
        r.cb && (this._operationTimeoutCb = r.cb));
        var t = this;
        this._operationTimeoutCb && (this._timeout = setTimeout(function() {
            t._operationTimeoutCb()
        }, t._operationTimeout)),
        this._operationStart = new Date().getTime(),
        this._fn(this._attempts)
    }
    ,
    l.prototype.try = function(e) {
        console.log("Using RetryOperation.try() is deprecated"),
        this.attempt(e)
    }
    ,
    l.prototype.start = function(e) {
        console.log("Using RetryOperation.start() is deprecated"),
        this.attempt(e)
    }
    ,
    l.prototype.start = l.prototype.try,
    l.prototype.errors = function() {
        return this._errors
    }
    ,
    l.prototype.attempts = function() {
        return this._attempts
    }
    ,
    l.prototype.mainError = function() {
        if (this._errors.length === 0)
            return null;
        for (var e = {}, r = null, t = 0, n = 0; n < this._errors.length; n++) {
            var o = this._errors[n]
              , i = o.message
              , s = (e[i] || 0) + 1;
            e[i] = s,
            s >= t && (r = o,
            t = s)
        }
        return r
    }
    ,
    function(e) {
        var r = ce;
        e.operation = function(t) {
            var n = e.timeouts(t);
            return new r(n,{
                forever: t && (t.forever || t.retries === 1 / 0),
                unref: t && t.unref,
                maxRetryTime: t && t.maxRetryTime
            })
        }
        ,
        e.timeouts = function(t) {
            if (t instanceof Array)
                return [].concat(t);
            var n = {
                retries: 10,
                factor: 2,
                minTimeout: 1 * 1e3,
                maxTimeout: 1 / 0,
                randomize: !1
            };
            for (var o in t)
                n[o] = t[o];
            if (n.minTimeout > n.maxTimeout)
                throw new Error("minTimeout is greater than maxTimeout");
            for (var i = [], s = 0; s < n.retries; s++)
                i.push(this.createTimeout(s, n));
            return t && t.forever && !i.length && i.push(this.createTimeout(s, n)),
            i.sort(function(u, f) {
                return u - f
            }),
            i
        }
        ,
        e.createTimeout = function(t, n) {
            var o = n.randomize ? Math.random() + 1 : 1
              , i = Math.round(o * Math.max(n.minTimeout, 1) * Math.pow(n.factor, t));
            return i = Math.min(i, n.maxTimeout),
            i
        }
        ,
        e.wrap = function(t, n, o) {
            if (n instanceof Array && (o = n,
            n = null),
            !o) {
                o = [];
                for (var i in t)
                    typeof t[i] == "function" && o.push(i)
            }
            for (var s = 0; s < o.length; s++) {
                var u = o[s]
                  , f = t[u];
                t[u] = (function(a) {
                    var h = e.operation(n)
                      , p = Array.prototype.slice.call(arguments, 1)
                      , S = p.pop();
                    p.push(function(J) {
                        h.retry(J) || (J && (arguments[0] = h.mainError()),
                        S.apply(this, arguments))
                    }),
                    h.attempt(function() {
                        a.apply(t, p)
                    })
                }
                ).bind(t, f),
                t[u].options = n
            }
        }
    }($);
    var ue = $
      , fe = ue;
    function le(e, r) {
        function t(n, o) {
            var i = r || {}, s;
            "randomize"in i || (i.randomize = !0),
            s = fe.operation(i);
            function u(a) {
                o(a || new Error("Aborted"))
            }
            function f(a, h) {
                if (a.bail) {
                    u(a);
                    return
                }
                s.retry(a) ? i.onRetry && i.onRetry(a, h) : o(s.mainError())
            }
            function c(a) {
                var h;
                try {
                    h = e(u, a)
                } catch (p) {
                    f(p, a);
                    return
                }
                Promise.resolve(h).then(n).catch(function(S) {
                    f(S, a)
                })
            }
            s.attempt(c)
        }
        return new Promise(t)
    }
    var de = le;
    const me = ae(de);
    let b;
    function T(e) {
        if (!b) {
            if (!window.top || window.top === window) {
                if (e)
                    throw new Error("not in iframe, cannot create client");
                console.warn(new Error("not in iframe, cannot create client"));
                return
            }
            b = new se({
                target: window.top,
                channelId: "cp-channel",
                timeout: 5e3
            })
        }
        return b
    }
    let E = "0";
    function he(e) {
        if (!e.searchParams.has("code")) {
            E = "2";
            return
        }
        const r = e.searchParams.get("sdk_mode");
        switch (r || (E = "0"),
        r) {
        case "0":
        case "1":
        case "2":
            E = r;
            break;
        default:
            E = "0"
        }
    }
    function D() {
        return E
    }
    function j(e) {
        const r = document.createElement("img");
        return r.height = 1,
        r.width = 1,
        r.src = e,
        r
    }
    const C = "production";
    function pe(e) {
        if (e.env && C !== e.env && (e.env === "production" || C === "production"))
            throw new Error(`ERROR: Game loaded in ${C} but SDK is ${e.env}`)
    }
    async function g(e, r) {
        if (!e)
            return;
        const t = new URL(window.location.href);
        if (r === "api") {
            for (const i of Object.keys(e.params))
                t.searchParams.set(i, e.params[i]);
            t.searchParams.set("code", e.code)
        }
        const o = `https://h5.g123.jp/stats?k=game&t=session&d=${encodeURIComponent(t.href)},${window === window.top},${r}&v=20250411-250a459&img=1`;
        j(o)
    }
    function x(e) {
        const {code: r, env: t, sdk_mode: n, ...o} = Object.fromEntries(e.searchParams.entries());
        if (r)
            return {
                code: r,
                env: t,
                params: o
            }
    }
    async function P() {
        const e = T(!1);
        if (e)
            return me(async r => {
                try {
                    return await e.stub.getPlatformParams()
                } catch (t) {
                    if (t && t.code && t.code !== U.Timeout.code) {
                        r(t);
                        return
                    }
                    throw t
                }
            }
            , {
                retries: 3
            })
    }
    let d;
    async function H(e) {
        if (d)
            return d;
        const r = D();
        return d = (async () => {
            let t;
            if (r === "2" ? (t = await P(),
            g(t, "api")) : r === "1" ? (t = await P(),
            g(t, "api"),
            t || (t = x(e),
            g(t, "url"))) : (t = x(e),
            g(t, "url"),
            t || (t = await P(),
            g(t, "api"))),
            t && pe(t),
            !t)
                throw new Error("iframe");
            return t
        }
        )(),
        d.catch(t => {
            throw d = void 0,
            t
        }
        ),
        d
    }
    async function _e() {
        return d || (d = H(new URL(window.location.href))),
        d
    }
    async function q(e) {
        var o;
        const r = D()
          , t = `https://psp.g123.jp/api/app/orders/${e.orderNo}/invoke?sdkMode=${r}&img=1`;
        if (j(t),
        r === "0") {
            (o = window.top) == null || o.postMessage({
                type: "PspCommand",
                action: "EnterPayment",
                orderNo: e.orderNo,
                token: e.token
            }, "*");
            return
        }
        return T(!0).stub.sendPayment(e)
    }
    function ye(e) {
        console.log("SendPayment() is deprecated. Please use sendPayment() instead."),
        q(e)
    }
    async function Ee(e) {
        return T(!0).stub.saveData(e)
    }
    async function ge() {
        return T(!0).stub.restoreData()
    }
    const m = {};
    function we(e, r) {
        if (typeof r != "function") {
            console.error("callback must be a function");
            return
        }
        m[e] || (m[e] = []),
        m[e].push(r)
    }
    function Te(e, r) {
        if (!m[e])
            return;
        if (!r) {
            delete m[e];
            return
        }
        const t = m[e]
          , n = t.indexOf(r);
        n !== -1 && t.splice(n, 1),
        t.length === 0 && delete m[e]
    }
    function Re(e, ...r) {
        if (!m[e])
            return;
        const t = m[e];
        for (const n of t)
            try {
                n(...r)
            } catch (o) {
                console.error(`callback ${e} throw error:`, o)
            }
    }
    function ve() {
        K();
        const e = new URL(window.location.href);
        he(e),
        H(e),
        Y(),
        Z()
    }
    return ve(),
    {
        SendPayment: ye,
        sendPayment: q,
        getPlatformParams: _e,
        saveData: Ee,
        restoreData: ge,
        on: we,
        off: Te,
        emit: Re,
        sdkVersion: "20250411-250a459"
    }
});
