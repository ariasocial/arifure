const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/game-d1c71da1-DcAnL4hN.js", "assets/game-03165520-C9c3cPxP.js", "assets/game-beb9f26b--5uYc-_c.js", "assets/contextTrackingHelper-nB-OPn1T.css", "assets/game-d8b296a6-D6-XlEtG.js", "assets/game-ded8115c-BzjqZ_Ug.js", "assets/game-6f09ab72-CE2_ieOF.js", "assets/game-74aa2de1-C7AhQnKw.js"]))) => i.map(i => d[i]);
import {_ as _o, a as ff, i as df} from "./game-beb9f26b--5uYc-_c.js";
import {aL as Se, aM as Ya, aN as pf, f as W, aO as mf, aP as Pt, X as ut, j as he, h as Tr, aQ as ic, aR as sc, p as uc, I as ni, S as $a, l as Cr, n as Za, G as hf, aS as vf, s as ai, aT as gf, aU as yf, aV as wf, aW as oi, aX as bf, aY as Sf, aZ as cc, a_ as Ef, a$ as _f, b0 as Pf, b1 as Po, b2 as lc, b3 as Tt, b4 as To, b5 as Tf, b6 as Co, Y as Cf, b7 as Af, Z as ct, b8 as Rf, b9 as fc, ba as Ar, bb as Xt, bc as dc, bd as Lf, be as pc, bf as mc, bg as If, bh as hc, bi as xf, bj as Ao, _ as Ro, b as Ze, bk as vc, bl as Mf, W as Ct, V as At, bm as gc, bn as Of, bo as kf, bp as Lo, bq as Io, br as yc, bs as Gf, bt as Df, bu as Ff, bv as Nf, bw as z, bx as jr, a1 as wc, by as jf, bz as Vf, bA as Wf, a7 as Xa, bB as xo, bC as Re, J as ot, ap as Hf, i as bc, bD as Sc, bE as Ec, bF as kt, bG as Gt, ab as qf, m as Bf, bH as Uf, bI as Yf, L as $f, bJ as Zf, bK as Xf, a6 as ii, bL as Jf, M as si, bM as zf, bN as Kf, E as Qf, bO as ui, bP as ci, bQ as ed} from "./game-03165520-C9c3cPxP.js";
import {g as Te} from "./game-d8b296a6-D6-XlEtG.js";
const td = e => {}
;
function Rr(e, t) {
    if (t.length < e)
        throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}
function Ja(e) {
    Rr(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || Se(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),
    console.warn(new Error().stack)),
    new Date(NaN))
}
function li(e) {
    var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return t.setUTCFullYear(e.getFullYear()),
    e.getTime() - t.getTime()
}
function fi(e) {
    Rr(1, arguments);
    var t = Ja(e);
    return t.setHours(0, 0, 0, 0),
    t
}
var rd = 864e5;
function nd(e, t) {
    Rr(2, arguments);
    var r = fi(e)
      , n = fi(t)
      , a = r.getTime() - li(r)
      , o = n.getTime() - li(n);
    return Math.round((a - o) / rd)
}
function di(e, t) {
    var r = e.getFullYear() - t.getFullYear() || e.getMonth() - t.getMonth() || e.getDate() - t.getDate() || e.getHours() - t.getHours() || e.getMinutes() - t.getMinutes() || e.getSeconds() - t.getSeconds() || e.getMilliseconds() - t.getMilliseconds();
    return r < 0 ? -1 : r > 0 ? 1 : r
}
function ad(e, t) {
    Rr(2, arguments);
    var r = Ja(e)
      , n = Ja(t)
      , a = di(r, n)
      , o = Math.abs(nd(r, n));
    r.setDate(r.getDate() - a * o);
    var i = +(di(r, n) === -a)
      , s = a * (o - i);
    return s === 0 ? 0 : s
}
function Mo() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Mo = function() {
        return !!e
    }
    )()
}
function od(e) {
    var t = Mo();
    return function() {
        var r, n = Ya(e);
        if (t) {
            var a = Ya(this).constructor;
            r = Reflect.construct(n, arguments, a)
        } else
            r = n.apply(this, arguments);
        return pf(this, r)
    }
}
function id(e) {
    W.dispatch(mf.actions.setCookieEnabled({
        cookieEnabled: e
    }))
}
function Jt(e) {
    const t = document.createElement("img");
    return t.height = 1,
    t.width = 1,
    t.src = e,
    t
}
const sd = Pt( (e, t, r, n) => {
    if (e !== "g_register" && e !== "g_login" && e !== "g_createrole") {
        console.error(new Error(`Invalid event type: ${e}`));
        return
    }
    if (!t) {
        console.error(new Error(`Invalid appId: ${t}`));
        return
    }
    Jt(`/stats?k=g_event&t=${e}&a=${t}&img=1`),
    ut.post("/api/v1/session_log", {
        kind: "succeed",
        gameServerId: n.gameServerId,
        gameUserId: n.gameUserId,
        roleId: n.roleId,
        roleName: n.roleName
    }, {
        headers: {
            Authorization: `Bearer ${r}`
        }
    })
}
)
  , ud = ["g_init", "g_register", "g_login", "g_createrole", "g_tutorial", "g_logout", "g_obtain", "g_consumption", "g_transaction", "g_comsumption", "g_view", "g_heartbeat", "g_active", "g_click", "g_levelup", "g_payrequest", "g_payend", "g_milestone", "misc_flashlaunch_*"]
  , _c = {
    ChannelRpcRequest: "@channel-rpc/REQUEST",
    ChannelRpcResponse: "@channel-rpc/RESPONSE"
};
function cd(e) {
    return e && e.type === _c.ChannelRpcRequest
}
function ld(e) {
    return e && e.jsonrpc === "2.0" && typeof e.method == "string"
}
let Pc = !1;
try {
    Pc = !!localStorage.getItem("channel-rpc-debug")
} catch {}
function qe(...e) {
    Pc && console.log(...e)
}
const Vr = {
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
    }
};
function Wr(e, t) {
    return {
        jsonrpc: "2.0",
        error: {
            code: e.code,
            message: e.message
        },
        id: t
    }
}
class fd {
    constructor(t) {
        this._unlisten = void 0,
        this._handleMessage = i => {
            if (!(!cd(i.data) || i.data.channelId !== this.channelId)) {
                if (this.allowOrigins.length > 0 && this.allowOrigins.indexOf(i.origin) === -1)
                    throw new Error(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] Invalid origin: ${i.origin}`);
                if (!i.source) {
                    qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] event.source is null`, i);
                    return
                }
                qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] RECEIVE_REQUEST`, i.data),
                this._handleRpcRequest(i.source, i.data.payload)
            }
        }
        ;
        const {allowOrigins: r, channelId: n, handler: a} = t;
        if (!n)
            throw new Error("id is required");
        this.channelId = n,
        this.allowOrigins = r && r.indexOf("*") === -1 ? r : [],
        this._handlers = {};
        const o = a || {};
        Object.keys(o).forEach(i => {
            const s = o[i];
            typeof s == "function" && (this._handlers[i] = s.bind(o))
        }
        )
    }
    start() {
        if (this._unlisten)
            return;
        const t = typeof globalThis == "object" ? globalThis : window;
        t.addEventListener("message", this._handleMessage),
        this._unlisten = () => {
            t.removeEventListener("message", this._handleMessage)
        }
    }
    stop() {
        this._unlisten && (this._unlisten(),
        this._unlisten = void 0)
    }
    async _sendResponse(t, r) {
        const n = {
            type: _c.ChannelRpcResponse,
            channelId: this.channelId,
            payload: r
        };
        t.postMessage(n, {
            targetOrigin: "*"
        })
    }
    async _handleRpcRequest(t, r) {
        if (qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] HANDLE_REQUEST_RPC`, r),
        !ld(r)) {
            const a = Wr(Vr.InvalidRequest, r.id || null);
            qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] reply`, a),
            this._sendResponse(t, a);
            return
        }
        qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] HANDLE_REQUEST_RPC method[${r.method}]`, this._handlers, r);
        const n = this._handlers[r.method];
        if (!n) {
            const a = Wr(Vr.MethodNotFound, r.id || null);
            qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] SEND_RESPONSE`, a),
            this._sendResponse(t, a);
            return
        }
        try {
            const o = {
                jsonrpc: "2.0",
                result: await n(...r.params || []),
                id: r.id
            };
            qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] SEND_RESPONSE`, o),
            this._sendResponse(t, o)
        } catch {
            const o = Wr(Vr.InternalError, r.id || null);
            qe(`[CHANNEL_RPC_SERVER][channel=${this.channelId}] SEND_RESPONSE`, o),
            this._sendResponse(t, o)
        }
    }
}
const qt = typeof Date.now == "function" ? Date.now : () => new Date().getTime();
class dd extends Error {
    constructor(t) {
        super(t.statusText),
        this.name = "HTTPError",
        this.response = t
    }
}
function Tc(e) {
    if (!e.ok)
        throw new dd(e);
    return e
}
async function Oy(e) {
    return (await fetch(`${he.SHD_G123_GAME_URL}/api/share`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(e),
        credentials: "include",
        mode: "same-origin"
    }).then(Tc)).text()
}
async function pd(e) {
    try {
        return await (await fetch(`${he.SHD_G123_GAME_URL}/api/share?code=${e}`).then(Tc)).json()
    } catch (t) {
        return console.error(t),
        null
    }
}
const Oo = "iframe-game"
  , md = ["platform", "bid", "ver", "ctw_share_id", "ctw_share_extra", "app", "utm_medium", "utm_campaign", "game_mode"]
  , hd = "sdk_mode"
  , Cc = {
    CHANNEL_ONLY: "2"
};
let ce = document.getElementById(Oo)
  , fr = "0";
function vd(e) {
    const t = e.searchParams.get(hd);
    if (t && ["0", "1", "2"].indexOf(t) !== -1) {
        fr = t;
        return
    }
    const {sdkMode: r} = window.option;
    if (r && ["0", "1", "2"].indexOf(r) !== -1) {
        fr = r;
        return
    }
    fr = "0"
}
function Ac() {
    return fr
}
let za = "";
function pi() {
    return za
}
function gd(e) {
    if (za || !e)
        return;
    za = new URL(e).origin
}
let Hr;
function Rc(e=!1) {
    return (!Hr || e) && (Hr = new URL(window.location.href)),
    Hr
}
async function yd() {
    const t = await Tr().currentSession();
    if (!t)
        throw new Error("Session is unavailable");
    const {code: r} = t;
    if (!r)
        throw new Error("Code is unavailable");
    const n = {
        platform: "ctw"
    }
      , a = Rc()
      , o = a.searchParams;
    a.searchParams.forEach( (c, l) => {
        const f = l.toLowerCase();
        md.includes(f) && (n[f] = c)
    }
    );
    const i = o.get("ctw_share_code");
    if (i)
        try {
            const c = await pd(i);
            c && (c.ctw_share_id && (n.ctw_share_id = c.ctw_share_id),
            c.ctw_share_extra && (n.ctw_share_extra = c.ctw_share_extra))
        } catch (c) {
            console.error(c)
        }
    const s = await Cr()
      , u = {
        region: s.region ? s.region.toLowerCase() : "ja",
        country: s.country,
        lang: s.lang
    };
    return {
        gameParams: {
            code: r,
            params: {
                ...n,
                lang: u.lang || "ja"
            },
            env: window.option.runEnv
        },
        entryParams: {
            __gp_region: u.region,
            sdk_mode: Ac()
        }
    }
}
let Mt;
async function Lc() {
    return Mt || (Mt = yd(),
    Mt.catch( () => {
        Mt = void 0
    }
    )),
    Mt
}
async function wd(e) {
    const {entryParams: t, gameParams: r} = await Lc()
      , n = new URL(e);
    return t.sdk_mode === Cc.CHANNEL_ONLY ? (Object.entries(t).forEach( ([o,i]) => {
        n.searchParams.set(o, i)
    }
    ),
    n.searchParams.sort(),
    n.href) : (n.searchParams.set("code", r.code),
    Object.entries({
        ...r.params,
        ...t
    }).forEach( ([o,i]) => {
        n.searchParams.set(o, i)
    }
    ),
    n.searchParams.sort(),
    n.href)
}
const bd = Pt( () => {
    !window.perf.start || !window.perf.app_start || !window.perf.game_loading || (Jt(`/stats?k=perf&t=game_loading&a=${window.option.appId}&d=${window.perf.game_loading - window.perf.app_start}&img=1`),
    console.info("[Perf] Loading", window.perf.game_loading - window.perf.start))
}
)
  , Sd = Pt( () => {
    !window.perf.game_loaded || !window.perf.game_loading || (Jt(`/stats?k=perf&t=game_loaded&a=${window.option.appId}&d=${window.perf.game_loaded - window.perf.game_loading}&img=1`),
    console.info("[Perf] Loaded", window.perf.game_loaded - window.perf.game_loading))
}
)
  , mi = Pt(e => {
    const t = e || Za();
    Jt(`/stats?k=pwa&t=pwa_first_launch&a=${window.option.appId}&d=${t}&img=1`)
}
);
async function qr(e=!1) {
    const t = await Tr().currentSession();
    if (!t)
        throw new Error("currentSession is unavailable");
    const {idCallback: r} = window.option
      , {code: n, gameMode: a, webClient: o} = t;
    if (!r)
        throw new Error(`Invalid idCallback[${r}] or code [${n}]`);
    if (n === ic) {
        console.error(new Error(`user: ${n} has been blocked!`));
        return
    }
    const i = !ce;
    i && (ce = document.createElement("iframe"),
    ce.id = Oo,
    ce.allow = "autoplay; screen-wake-lock");
    const s = e && window.perf && window.perf.app_start;
    s && (window.perf.game_loading = window.perf.game_loading || qt(),
    setTimeout(bd));
    let u = await wd(r);
    if (a === "cloud" && o) {
        const l = new URL(o.url,u);
        for (const [f,d] of Object.entries(o.query || {}))
            l.searchParams.set(f, d);
        l.searchParams.set("app_id", window.option.appId),
        l.searchParams.set("lang", window.option.lang || "ja"),
        l.searchParams.set("game_url", u),
        l.searchParams.set("page_view_id", window.__cloud_game_page_view_id__ || ""),
        l.searchParams.set("ts", (window.__platform_init_time__ || Date.now()).toString()),
        u = l.toString()
    }
    if (!ce)
        throw new Error(`gameIframe is ${ce}`);
    if (ce.src === u)
        return;
    const c = sc();
    ce.onload = function() {
        c.resolve()
    }
    ,
    ce.onerror = (l, f, d, h, m) => {
        console.error("gameIframe.onerror", l, f, d, h, m),
        m && m instanceof Error && c.reject(m)
    }
    ,
    gd(u),
    ce.src = u,
    i && ce && document.body.insertBefore(ce, document.getElementById("float-icon")),
    await c.promise.then( () => {
        window.perf.game_loaded = window.perf.game_loaded || qt(),
        s && setTimeout(Sd),
        uc({
            action: "p_game_loaded",
            data: {
                display_name: window.option.userId,
                providers: window.option.providers
            }
        })
    }
    )
}
function Ic(e) {
    ce = document.getElementById(Oo),
    ce?.contentWindow?.postMessage(e, "*")
}
let Br;
async function Ed(e) {
    if (Br)
        throw new Error("ChannelServer has been started");
    const t = `${$a.gameStoragePrefix}:${e}`
      , r = {
        sendPayment: n => {
            window.postMessage({
                type: "PspCommand",
                action: "EnterPayment",
                ...n
            })
        }
        ,
        saveData: n => {
            ni().setItem(t, n)
        }
        ,
        restoreData: () => ni().getItem(t) || "",
        getPlatformParams: async () => (await Lc()).gameParams
    };
    Br = new fd({
        channelId: "cp-channel",
        handler: r
    }),
    Br.start()
}
function _d({data: e}) {
    if (!e) {
        console.error("Empty in-game account", e);
        return
    }
    W.dispatch(cc.actions.updateByInformEvent(e))
}
function Pd({data: e, action: t}) {
    if (bf(e) || Sf(e))
        W.dispatch(cc.actions.updateByGEvent(e));
    else {
        if (t === "g_init")
            return;
        const r = new Error(`INVALID_GEVENT[${JSON.stringify({
            data: e,
            action: t
        })}]`);
        throw window.Sentry?.captureException(r),
        r
    }
}
function Td(e) {
    id(!e.data.disabled)
}
function Cd(e) {
    setTimeout( () => {
        yf()
    }
    )
}
function Ad(e) {
    if (!wf(e)) {
        const r = new Error("Invalid PSP Monitor Event");
        throw console.error(r, JSON.stringify(e)),
        r
    }
    const {payload: t} = e;
    t.type === "sdk" ? W.dispatch(oi.actions.updateSdkStatus(t)) : W.dispatch(oi.actions.updateAppStatus(t))
}
function Rd(e) {
    let t;
    if (e.data) {
        if (typeof e.data == "object" && (t = e.data),
        !t && typeof e.data == "string")
            try {
                t = JSON.parse(e.data)
            } catch {}
        if (t) {
            if (t.event === "CreateRole") {
                Cd();
                return
            }
            if (t.event === "PaymentSdkMonitor") {
                Ad(t);
                return
            }
            switch (t.action) {
            case "inform":
                _d(t);
                break;
            case "cookie_disabled_check":
                Td(t);
                break;
            case "EnterPayment":
                W.dispatch(gf(t.orderNo)),
                ai({
                    version: "v2",
                    action: "g_payinit",
                    data: {
                        custom: {
                            type: t.type,
                            order_no: t.orderNo
                        }
                    }
                });
                break;
            default:
                if (t.action?.startsWith("g_") && Pd(t),
                (t.action === "g_createrole" || t.action === "g_login") && hf().start(),
                (t.action === "g_register" || t.action === "g_login" || t.action === "g_createrole") && (W.dispatch(vf({
                    gameLoginOrRegisterAt: Date.now()
                })),
                _o( () => import("./game-d1c71da1-DcAnL4hN.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
                sd(t.action, window.option.appId, window.option.code, {
                    gameServerId: `${t.data?.game_server_id || ""}`,
                    gameUserId: `${t.data?.game_user_id || ""}`,
                    roleId: `${t.data?.role?.id || t.data?.role_id || ""}`,
                    roleName: `${t.data?.role?.name || t.data?.role_name || ""}`
                }),
                window.option.gameServerId = t.data?.game_server_id,
                window.option.gameUserId = t.data?.game_user_id),
                ud.findIndex(r => {
                    const n = t.action || "";
                    return !!(r === n || r.endsWith("*") && n.startsWith(r.slice(0, -1)))
                }
                ) !== -1)
                    if (pi() !== e.origin && window.option.appId !== "seirei" && window.option.appId !== "got") {
                        const r = new Error(`Game origin mismatch, gameOrigin: ${pi()}, eventOrigin: ${e.origin}`);
                        window.Sentry?.captureException(r)
                    } else
                        ai(t);
                break
            }
        }
    }
}
let hi = !1;
function Ld() {
    hi || (hi = !0,
    window.addEventListener("message", Rd, !1))
}
const Id = "#000000";
function xd() {
    const e = document.head.querySelector('[name="theme-color"]');
    e && e.setAttribute("content", Id)
}
function vi(e, t, r, n, a, o, i) {
    try {
        var s = e[o](i)
          , u = s.value
    } catch (c) {
        return void r(c)
    }
    s.done ? t(u) : Promise.resolve(u).then(n, a)
}
function q(e) {
    return function() {
        var t = this
          , r = arguments;
        return new Promise(function(n, a) {
            var o = e.apply(t, r);
            function i(u) {
                vi(o, n, a, i, s, "next", u)
            }
            function s(u) {
                vi(o, n, a, i, s, "throw", u)
            }
            i(void 0)
        }
        )
    }
}
var Ur, gi;
function Md() {
    if (gi)
        return Ur;
    gi = 1;
    function e() {}
    return Ur = e,
    Ur
}
var Od = Md();
const gr = Te(Od);
function kd(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var n in e)
        if ({}.hasOwnProperty.call(e, n)) {
            if (t.indexOf(n) !== -1)
                continue;
            r[n] = e[n]
        }
    return r
}
function Gd(e, t) {
    if (e == null)
        return {};
    var r, n, a = kd(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
            r = o[n],
            t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
}
function Dd(e) {
    if (Array.isArray(e))
        return Ef(e)
}
function Fd() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Je(e) {
    return Dd(e) || _f(e) || Pf(e) || Fd()
}
var Yr = {
    exports: {}
}, $r = {
    exports: {}
}, yi;
function Nd() {
    return yi || (yi = 1,
    function(e) {
        function t(r) {
            "@babel/helpers - typeof";
            return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
                return typeof n
            }
            : function(n) {
                return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports,
            t(r)
        }
        e.exports = t,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }($r)),
    $r.exports
}
var wi;
function jd() {
    return wi || (wi = 1,
    function(e) {
        var t = Nd().default;
        function r() {
            e.exports = r = function() {
                return a
            }
            ,
            e.exports.__esModule = !0,
            e.exports.default = e.exports;
            var n, a = {}, o = Object.prototype, i = o.hasOwnProperty, s = Object.defineProperty || function(P, b, E) {
                P[b] = E.value
            }
            , u = typeof Symbol == "function" ? Symbol : {}, c = u.iterator || "@@iterator", l = u.asyncIterator || "@@asyncIterator", f = u.toStringTag || "@@toStringTag";
            function d(P, b, E) {
                return Object.defineProperty(P, b, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                P[b]
            }
            try {
                d({}, "")
            } catch {
                d = function(E, I, O) {
                    return E[I] = O
                }
            }
            function h(P, b, E, I) {
                var O = b && b.prototype instanceof A ? b : A
                  , M = Object.create(O.prototype)
                  , N = new se(I || []);
                return s(M, "_invoke", {
                    value: te(P, E, N)
                }),
                M
            }
            function m(P, b, E) {
                try {
                    return {
                        type: "normal",
                        arg: P.call(b, E)
                    }
                } catch (I) {
                    return {
                        type: "throw",
                        arg: I
                    }
                }
            }
            a.wrap = h;
            var g = "suspendedStart"
              , p = "suspendedYield"
              , v = "executing"
              , y = "completed"
              , T = {};
            function A() {}
            function R() {}
            function w() {}
            var L = {};
            d(L, c, function() {
                return this
            });
            var S = Object.getPrototypeOf
              , C = S && S(S(oe([])));
            C && C !== o && i.call(C, c) && (L = C);
            var k = w.prototype = A.prototype = Object.create(L);
            function B(P) {
                ["next", "throw", "return"].forEach(function(b) {
                    d(P, b, function(E) {
                        return this._invoke(b, E)
                    })
                })
            }
            function F(P, b) {
                function E(O, M, N, Y) {
                    var J = m(P[O], P, M);
                    if (J.type !== "throw") {
                        var ue = J.arg
                          , re = ue.value;
                        return re && t(re) == "object" && i.call(re, "__await") ? b.resolve(re.__await).then(function(ve) {
                            E("next", ve, N, Y)
                        }, function(ve) {
                            E("throw", ve, N, Y)
                        }) : b.resolve(re).then(function(ve) {
                            ue.value = ve,
                            N(ue)
                        }, function(ve) {
                            return E("throw", ve, N, Y)
                        })
                    }
                    Y(J.arg)
                }
                var I;
                s(this, "_invoke", {
                    value: function(M, N) {
                        function Y() {
                            return new b(function(J, ue) {
                                E(M, N, J, ue)
                            }
                            )
                        }
                        return I = I ? I.then(Y, Y) : Y()
                    }
                })
            }
            function te(P, b, E) {
                var I = g;
                return function(O, M) {
                    if (I === v)
                        throw Error("Generator is already running");
                    if (I === y) {
                        if (O === "throw")
                            throw M;
                        return {
                            value: n,
                            done: !0
                        }
                    }
                    for (E.method = O,
                    E.arg = M; ; ) {
                        var N = E.delegate;
                        if (N) {
                            var Y = U(N, E);
                            if (Y) {
                                if (Y === T)
                                    continue;
                                return Y
                            }
                        }
                        if (E.method === "next")
                            E.sent = E._sent = E.arg;
                        else if (E.method === "throw") {
                            if (I === g)
                                throw I = y,
                                E.arg;
                            E.dispatchException(E.arg)
                        } else
                            E.method === "return" && E.abrupt("return", E.arg);
                        I = v;
                        var J = m(P, b, E);
                        if (J.type === "normal") {
                            if (I = E.done ? y : p,
                            J.arg === T)
                                continue;
                            return {
                                value: J.arg,
                                done: E.done
                            }
                        }
                        J.type === "throw" && (I = y,
                        E.method = "throw",
                        E.arg = J.arg)
                    }
                }
            }
            function U(P, b) {
                var E = b.method
                  , I = P.iterator[E];
                if (I === n)
                    return b.delegate = null,
                    E === "throw" && P.iterator.return && (b.method = "return",
                    b.arg = n,
                    U(P, b),
                    b.method === "throw") || E !== "return" && (b.method = "throw",
                    b.arg = new TypeError("The iterator does not provide a '" + E + "' method")),
                    T;
                var O = m(I, P.iterator, b.arg);
                if (O.type === "throw")
                    return b.method = "throw",
                    b.arg = O.arg,
                    b.delegate = null,
                    T;
                var M = O.arg;
                return M ? M.done ? (b[P.resultName] = M.value,
                b.next = P.nextLoc,
                b.method !== "return" && (b.method = "next",
                b.arg = n),
                b.delegate = null,
                T) : M : (b.method = "throw",
                b.arg = new TypeError("iterator result is not an object"),
                b.delegate = null,
                T)
            }
            function fe(P) {
                var b = {
                    tryLoc: P[0]
                };
                1 in P && (b.catchLoc = P[1]),
                2 in P && (b.finallyLoc = P[2],
                b.afterLoc = P[3]),
                this.tryEntries.push(b)
            }
            function ee(P) {
                var b = P.completion || {};
                b.type = "normal",
                delete b.arg,
                P.completion = b
            }
            function se(P) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                P.forEach(fe, this),
                this.reset(!0)
            }
            function oe(P) {
                if (P || P === "") {
                    var b = P[c];
                    if (b)
                        return b.call(P);
                    if (typeof P.next == "function")
                        return P;
                    if (!isNaN(P.length)) {
                        var E = -1
                          , I = function O() {
                            for (; ++E < P.length; )
                                if (i.call(P, E))
                                    return O.value = P[E],
                                    O.done = !1,
                                    O;
                            return O.value = n,
                            O.done = !0,
                            O
                        };
                        return I.next = I
                    }
                }
                throw new TypeError(t(P) + " is not iterable")
            }
            return R.prototype = w,
            s(k, "constructor", {
                value: w,
                configurable: !0
            }),
            s(w, "constructor", {
                value: R,
                configurable: !0
            }),
            R.displayName = d(w, f, "GeneratorFunction"),
            a.isGeneratorFunction = function(P) {
                var b = typeof P == "function" && P.constructor;
                return !!b && (b === R || (b.displayName || b.name) === "GeneratorFunction")
            }
            ,
            a.mark = function(P) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(P, w) : (P.__proto__ = w,
                d(P, f, "GeneratorFunction")),
                P.prototype = Object.create(k),
                P
            }
            ,
            a.awrap = function(P) {
                return {
                    __await: P
                }
            }
            ,
            B(F.prototype),
            d(F.prototype, l, function() {
                return this
            }),
            a.AsyncIterator = F,
            a.async = function(P, b, E, I, O) {
                O === void 0 && (O = Promise);
                var M = new F(h(P, b, E, I),O);
                return a.isGeneratorFunction(b) ? M : M.next().then(function(N) {
                    return N.done ? N.value : M.next()
                })
            }
            ,
            B(k),
            d(k, f, "Generator"),
            d(k, c, function() {
                return this
            }),
            d(k, "toString", function() {
                return "[object Generator]"
            }),
            a.keys = function(P) {
                var b = Object(P)
                  , E = [];
                for (var I in b)
                    E.push(I);
                return E.reverse(),
                function O() {
                    for (; E.length; ) {
                        var M = E.pop();
                        if (M in b)
                            return O.value = M,
                            O.done = !1,
                            O
                    }
                    return O.done = !0,
                    O
                }
            }
            ,
            a.values = oe,
            se.prototype = {
                constructor: se,
                reset: function(b) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = n,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = n,
                    this.tryEntries.forEach(ee),
                    !b)
                        for (var E in this)
                            E.charAt(0) === "t" && i.call(this, E) && !isNaN(+E.slice(1)) && (this[E] = n)
                },
                stop: function() {
                    this.done = !0;
                    var b = this.tryEntries[0].completion;
                    if (b.type === "throw")
                        throw b.arg;
                    return this.rval
                },
                dispatchException: function(b) {
                    if (this.done)
                        throw b;
                    var E = this;
                    function I(ue, re) {
                        return N.type = "throw",
                        N.arg = b,
                        E.next = ue,
                        re && (E.method = "next",
                        E.arg = n),
                        !!re
                    }
                    for (var O = this.tryEntries.length - 1; O >= 0; --O) {
                        var M = this.tryEntries[O]
                          , N = M.completion;
                        if (M.tryLoc === "root")
                            return I("end");
                        if (M.tryLoc <= this.prev) {
                            var Y = i.call(M, "catchLoc")
                              , J = i.call(M, "finallyLoc");
                            if (Y && J) {
                                if (this.prev < M.catchLoc)
                                    return I(M.catchLoc, !0);
                                if (this.prev < M.finallyLoc)
                                    return I(M.finallyLoc)
                            } else if (Y) {
                                if (this.prev < M.catchLoc)
                                    return I(M.catchLoc, !0)
                            } else {
                                if (!J)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < M.finallyLoc)
                                    return I(M.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(b, E) {
                    for (var I = this.tryEntries.length - 1; I >= 0; --I) {
                        var O = this.tryEntries[I];
                        if (O.tryLoc <= this.prev && i.call(O, "finallyLoc") && this.prev < O.finallyLoc) {
                            var M = O;
                            break
                        }
                    }
                    M && (b === "break" || b === "continue") && M.tryLoc <= E && E <= M.finallyLoc && (M = null);
                    var N = M ? M.completion : {};
                    return N.type = b,
                    N.arg = E,
                    M ? (this.method = "next",
                    this.next = M.finallyLoc,
                    T) : this.complete(N)
                },
                complete: function(b, E) {
                    if (b.type === "throw")
                        throw b.arg;
                    return b.type === "break" || b.type === "continue" ? this.next = b.arg : b.type === "return" ? (this.rval = this.arg = b.arg,
                    this.method = "return",
                    this.next = "end") : b.type === "normal" && E && (this.next = E),
                    T
                },
                finish: function(b) {
                    for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                        var I = this.tryEntries[E];
                        if (I.finallyLoc === b)
                            return this.complete(I.completion, I.afterLoc),
                            ee(I),
                            T
                    }
                },
                catch: function(b) {
                    for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                        var I = this.tryEntries[E];
                        if (I.tryLoc === b) {
                            var O = I.completion;
                            if (O.type === "throw") {
                                var M = O.arg;
                                ee(I)
                            }
                            return M
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(b, E, I) {
                    return this.delegate = {
                        iterator: oe(b),
                        resultName: E,
                        nextLoc: I
                    },
                    this.method === "next" && (this.arg = n),
                    T
                }
            },
            a
        }
        e.exports = r,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }(Yr)),
    Yr.exports
}
var Zr, bi;
function Vd() {
    if (bi)
        return Zr;
    bi = 1;
    var e = jd()();
    Zr = e;
    try {
        regeneratorRuntime = e
    } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
    }
    return Zr
}
var Wd = Vd();
const x = Te(Wd);
var Hd = Object.freeze({
    __proto__: null,
    get start() {
        return Jc
    },
    get ensureJQuerySupport() {
        return Wc
    },
    get setBootstrapMaxTime() {
        return Xd
    },
    get setMountMaxTime() {
        return Jd
    },
    get setUnmountMaxTime() {
        return zd
    },
    get setUnloadMaxTime() {
        return Kd
    },
    get registerApplication() {
        return np
    },
    get unregisterApplication() {
        return $c
    },
    get getMountedApps() {
        return qc
    },
    get getAppStatus() {
        return Uc
    },
    get unloadApplication() {
        return Zc
    },
    get checkActivityFunctions() {
        return Yc
    },
    get getAppNames() {
        return Bc
    },
    get pathToActiveWhen() {
        return Xc
    },
    get navigateToUrl() {
        return Go
    },
    get triggerAppChange() {
        return ap
    },
    get addErrorHandler() {
        return qd
    },
    get removeErrorHandler() {
        return Bd
    },
    get mountRootParcel() {
        return Dc
    },
    get NOT_LOADED() {
        return Fe
    },
    get LOADING_SOURCE_CODE() {
        return Lr
    },
    get NOT_BOOTSTRAPPED() {
        return bt
    },
    get BOOTSTRAPPING() {
        return xc
    },
    get NOT_MOUNTED() {
        return Ne
    },
    get MOUNTING() {
        return Ud
    },
    get UPDATING() {
        return Mc
    },
    get LOAD_ERROR() {
        return St
    },
    get MOUNTED() {
        return Ee
    },
    get UNLOADING() {
        return Ka
    },
    get UNMOUNTING() {
        return Oc
    },
    get SKIP_BECAUSE_BROKEN() {
        return ne
    }
});
function Ae(e) {
    return (Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(e)
}
function or(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
var Si = (typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}).CustomEvent
  , Ue = function() {
    try {
        var e = new Si("cat",{
            detail: {
                foo: "bar"
            }
        });
        return e.type === "cat" && e.detail.foo === "bar"
    } catch {}
    return !1
}() ? Si : typeof document < "u" && typeof document.createEvent == "function" ? function(e, t) {
    var r = document.createEvent("CustomEvent");
    return t ? r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) : r.initCustomEvent(e, !1, !1, void 0),
    r
}
: function(e, t) {
    var r = document.createEventObject();
    return r.type = e,
    t ? (r.bubbles = !!t.bubbles,
    r.cancelable = !!t.cancelable,
    r.detail = t.detail) : (r.bubbles = !1,
    r.cancelable = !1,
    r.detail = void 0),
    r
}
  , Bt = [];
function ze(e, t, r) {
    var n = wt(e, t, r);
    Bt.length ? Bt.forEach(function(a) {
        return a(n)
    }) : setTimeout(function() {
        throw n
    })
}
function qd(e) {
    if (typeof e != "function")
        throw Error(G(28, !1));
    Bt.push(e)
}
function Bd(e) {
    if (typeof e != "function")
        throw Error(G(29, !1));
    var t = !1;
    return Bt = Bt.filter(function(r) {
        var n = r === e;
        return t = t || n,
        !n
    }),
    t
}
function G(e, t) {
    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
        n[a - 2] = arguments[a];
    return "single-spa minified message #".concat(e, ": ").concat("", "See https://single-spa.js.org/error/?code=").concat(e).concat(n.length ? "&arg=".concat(n.join("&arg=")) : "")
}
function wt(e, t, r) {
    var n, a = "".concat(Ir(t), " '").concat($(t), "' died in status ").concat(t.status, ": ");
    if (e instanceof Error) {
        try {
            e.message = a + e.message
        } catch {}
        n = e
    } else {
        console.warn(G(30, !1, t.status, $(t)));
        try {
            n = Error(a + JSON.stringify(e))
        } catch {
            n = e
        }
    }
    return n.appOrParcelName = $(t),
    t.status = r,
    n
}
var Fe = "NOT_LOADED"
  , Lr = "LOADING_SOURCE_CODE"
  , bt = "NOT_BOOTSTRAPPED"
  , xc = "BOOTSTRAPPING"
  , Ne = "NOT_MOUNTED"
  , Ud = "MOUNTING"
  , Ee = "MOUNTED"
  , Mc = "UPDATING"
  , Oc = "UNMOUNTING"
  , Ka = "UNLOADING"
  , St = "LOAD_ERROR"
  , ne = "SKIP_BECAUSE_BROKEN";
function Yd(e) {
    return e.status === Ee
}
function Qa(e) {
    try {
        return e.activeWhen(window.location)
    } catch (t) {
        return ze(t, e, ne),
        !1
    }
}
function $(e) {
    return e.name
}
function kc(e) {
    return !!e.unmountThisParcel
}
function Ir(e) {
    return kc(e) ? "parcel" : "application"
}
function zt() {
    for (var e = arguments.length - 1; e > 0; e--)
        for (var t in arguments[e])
            t !== "__proto__" && (arguments[e - 1][t] = arguments[e][t]);
    return arguments[0]
}
function xr(e, t) {
    for (var r = 0; r < e.length; r++)
        if (t(e[r]))
            return e[r];
    return null
}
function nt(e) {
    return e && (typeof e == "function" || (t = e,
    Array.isArray(t) && !xr(t, function(r) {
        return typeof r != "function"
    })));
    var t
}
function Ye(e, t) {
    var r = e[t] || [];
    (r = Array.isArray(r) ? r : [r]).length === 0 && (r = [function() {
        return Promise.resolve()
    }
    ]);
    var n = Ir(e)
      , a = $(e);
    return function(o) {
        return r.reduce(function(i, s, u) {
            return i.then(function() {
                var c = s(o);
                return Gc(c) ? c : Promise.reject(G(15, !1, n, a, t, u))
            })
        }, Promise.resolve())
    }
}
function Gc(e) {
    return e && typeof e.then == "function" && typeof e.catch == "function"
}
function ko(e, t) {
    return Promise.resolve().then(function() {
        return e.status !== bt ? e : (e.status = xc,
        e.bootstrap ? Kt(e, "bootstrap").then(r).catch(function(n) {
            if (t)
                throw wt(n, e, ne);
            return ze(n, e, ne),
            e
        }) : Promise.resolve().then(r))
    });
    function r() {
        return e.status = Ne,
        e
    }
}
function Mr(e, t) {
    return Promise.resolve().then(function() {
        if (e.status !== Ee)
            return e;
        e.status = Oc;
        var r = Object.keys(e.parcels).map(function(a) {
            return e.parcels[a].unmountThisParcel()
        });
        return Promise.all(r).then(n, function(a) {
            return n().then(function() {
                var o = Error(a.message);
                if (t)
                    throw wt(o, e, ne);
                ze(o, e, ne)
            })
        }).then(function() {
            return e
        });
        function n() {
            return Kt(e, "unmount").then(function() {
                e.status = Ne
            }).catch(function(a) {
                if (t)
                    throw wt(a, e, ne);
                ze(a, e, ne)
            })
        }
    })
}
var Ei = !1
  , _i = !1;
function eo(e, t) {
    return Promise.resolve().then(function() {
        return e.status !== Ne ? e : (Ei || (window.dispatchEvent(new Ue("single-spa:before-first-mount")),
        Ei = !0),
        Kt(e, "mount").then(function() {
            return e.status = Ee,
            _i || (window.dispatchEvent(new Ue("single-spa:first-mount")),
            _i = !0),
            e
        }).catch(function(r) {
            return e.status = Ee,
            Mr(e, !0).then(n, n);
            function n() {
                if (t)
                    throw wt(r, e, ne);
                return ze(r, e, ne),
                e
            }
        }))
    })
}
var $d = 0
  , Zd = {
    parcels: {}
};
function Dc() {
    return Fc.apply(Zd, arguments)
}
function Fc(e, t) {
    var r = this;
    if (!e || Ae(e) !== "object" && typeof e != "function")
        throw Error(G(2, !1));
    if (e.name && typeof e.name != "string")
        throw Error(G(3, !1, Ae(e.name)));
    if (Ae(t) !== "object")
        throw Error(G(4, !1, name, Ae(t)));
    if (!t.domElement)
        throw Error(G(5, !1, name));
    var n, a = $d++, o = typeof e == "function", i = o ? e : function() {
        return Promise.resolve(e)
    }
    , s = {
        id: a,
        parcels: {},
        status: o ? Lr : bt,
        customProps: t,
        parentName: $(r),
        unmountThisParcel: function() {
            return d.then(function() {
                if (s.status !== Ee)
                    throw Error(G(6, !1, name, s.status));
                return Mr(s, !0)
            }).then(function(m) {
                return s.parentName && delete r.parcels[s.id],
                m
            }).then(function(m) {
                return c(m),
                m
            }).catch(function(m) {
                throw s.status = ne,
                l(m),
                m
            })
        }
    };
    r.parcels[a] = s;
    var u = i();
    if (!u || typeof u.then != "function")
        throw Error(G(7, !1));
    var c, l, f = (u = u.then(function(m) {
        if (!m)
            throw Error(G(8, !1));
        var g = m.name || "parcel-".concat(a);
        if (Object.prototype.hasOwnProperty.call(m, "bootstrap") && !nt(m.bootstrap))
            throw Error(G(9, !1, g));
        if (!nt(m.mount))
            throw Error(G(10, !1, g));
        if (!nt(m.unmount))
            throw Error(G(11, !1, g));
        if (m.update && !nt(m.update))
            throw Error(G(12, !1, g));
        var p = Ye(m, "bootstrap")
          , v = Ye(m, "mount")
          , y = Ye(m, "unmount");
        s.status = bt,
        s.name = g,
        s.bootstrap = p,
        s.mount = v,
        s.unmount = y,
        s.timeouts = jc(m.timeouts),
        m.update && (s.update = Ye(m, "update"),
        n.update = function(T) {
            return s.customProps = T,
            et(function(A) {
                return Promise.resolve().then(function() {
                    if (A.status !== Ee)
                        throw Error(G(32, !1, $(A)));
                    return A.status = Mc,
                    Kt(A, "update").then(function() {
                        return A.status = Ee,
                        A
                    }).catch(function(R) {
                        throw wt(R, A, ne)
                    })
                })
            }(s))
        }
        )
    })).then(function() {
        return ko(s, !0)
    }), d = f.then(function() {
        return eo(s, !0)
    }), h = new Promise(function(m, g) {
        c = m,
        l = g
    }
    );
    return n = {
        mount: function() {
            return et(Promise.resolve().then(function() {
                if (s.status !== Ne)
                    throw Error(G(13, !1, name, s.status));
                return r.parcels[a] = s,
                eo(s)
            }))
        },
        unmount: function() {
            return et(s.unmountThisParcel())
        },
        getStatus: function() {
            return s.status
        },
        loadPromise: et(u),
        bootstrapPromise: et(f),
        mountPromise: et(d),
        unmountPromise: et(h)
    }
}
function et(e) {
    return e.then(function() {
        return null
    })
}
function Nc(e) {
    var t = $(e)
      , r = typeof e.customProps == "function" ? e.customProps(t, window.location) : e.customProps;
    (Ae(r) !== "object" || r === null || Array.isArray(r)) && (r = {},
    console.warn(G(40, !1), t, r));
    var n = zt({}, r, {
        name: t,
        mountParcel: Fc.bind(e),
        singleSpa: Hd
    });
    return kc(e) && (n.unmountSelf = e.unmountThisParcel),
    n
}
var Et = {
    bootstrap: {
        millis: 4e3,
        dieOnTimeout: !1,
        warningMillis: 1e3
    },
    mount: {
        millis: 3e3,
        dieOnTimeout: !1,
        warningMillis: 1e3
    },
    unmount: {
        millis: 3e3,
        dieOnTimeout: !1,
        warningMillis: 1e3
    },
    unload: {
        millis: 3e3,
        dieOnTimeout: !1,
        warningMillis: 1e3
    },
    update: {
        millis: 3e3,
        dieOnTimeout: !1,
        warningMillis: 1e3
    }
};
function Xd(e, t, r) {
    if (typeof e != "number" || e <= 0)
        throw Error(G(16, !1));
    Et.bootstrap = {
        millis: e,
        dieOnTimeout: t,
        warningMillis: r || 1e3
    }
}
function Jd(e, t, r) {
    if (typeof e != "number" || e <= 0)
        throw Error(G(17, !1));
    Et.mount = {
        millis: e,
        dieOnTimeout: t,
        warningMillis: r || 1e3
    }
}
function zd(e, t, r) {
    if (typeof e != "number" || e <= 0)
        throw Error(G(18, !1));
    Et.unmount = {
        millis: e,
        dieOnTimeout: t,
        warningMillis: r || 1e3
    }
}
function Kd(e, t, r) {
    if (typeof e != "number" || e <= 0)
        throw Error(G(19, !1));
    Et.unload = {
        millis: e,
        dieOnTimeout: t,
        warningMillis: r || 1e3
    }
}
function Kt(e, t) {
    var r = e.timeouts[t]
      , n = r.warningMillis
      , a = Ir(e);
    return new Promise(function(o, i) {
        var s = !1
          , u = !1;
        e[t](Nc(e)).then(function(f) {
            s = !0,
            o(f)
        }).catch(function(f) {
            s = !0,
            i(f)
        }),
        setTimeout(function() {
            return l(1)
        }, n),
        setTimeout(function() {
            return l(!0)
        }, r.millis);
        var c = G(31, !1, t, a, $(e), r.millis);
        function l(f) {
            if (!s) {
                if (f === !0)
                    u = !0,
                    r.dieOnTimeout ? i(Error(c)) : console.error(c);
                else if (!u) {
                    var d = f
                      , h = d * n;
                    console.warn(c),
                    h + n < r.millis && setTimeout(function() {
                        return l(d + 1)
                    }, n)
                }
            }
        }
    }
    )
}
function jc(e) {
    var t = {};
    for (var r in Et)
        t[r] = zt({}, Et[r], e && e[r] || {});
    return t
}
function to(e) {
    return Promise.resolve().then(function() {
        return e.loadPromise ? e.loadPromise : e.status !== Fe && e.status !== St ? e : (e.status = Lr,
        e.loadPromise = Promise.resolve().then(function() {
            var n = e.loadApp(Nc(e));
            if (!Gc(n))
                throw r = !0,
                Error(G(33, !1, $(e)));
            return n.then(function(a) {
                var o;
                e.loadErrorTime = null,
                Ae(t = a) !== "object" && (o = 34),
                Object.prototype.hasOwnProperty.call(t, "bootstrap") && !nt(t.bootstrap) && (o = 35),
                nt(t.mount) || (o = 36),
                nt(t.unmount) || (o = 37);
                var i = Ir(t);
                if (o) {
                    var s;
                    try {
                        s = JSON.stringify(t)
                    } catch {}
                    return console.error(G(o, !1, i, $(e), s), t),
                    ze(void 0, e, ne),
                    e
                }
                return t.devtools && t.devtools.overlays && (e.devtools.overlays = zt({}, e.devtools.overlays, t.devtools.overlays)),
                e.status = bt,
                e.bootstrap = Ye(t, "bootstrap"),
                e.mount = Ye(t, "mount"),
                e.unmount = Ye(t, "unmount"),
                e.unload = Ye(t, "unload"),
                e.timeouts = jc(t.timeouts),
                delete e.loadPromise,
                e
            })
        }).catch(function(n) {
            var a;
            return delete e.loadPromise,
            r ? a = ne : (a = St,
            e.loadErrorTime = new Date().getTime()),
            ze(n, e, a),
            e
        }));
        var t, r
    })
}
var Vc, Rt = typeof window < "u", Dt = {
    hashchange: [],
    popstate: []
}, yr = ["hashchange", "popstate"];
function Go(e) {
    var t;
    if (typeof e == "string")
        t = e;
    else if (this && this.href)
        t = this.href;
    else {
        if (!(e && e.currentTarget && e.currentTarget.href && e.preventDefault))
            throw Error(G(14, !1));
        t = e.currentTarget.href,
        e.preventDefault()
    }
    var r = Ai(window.location.href)
      , n = Ai(t);
    t.indexOf("#") === 0 ? window.location.hash = n.hash : r.host !== n.host && n.host ? window.location.href = t : n.pathname === r.pathname && n.search === r.search ? window.location.hash = n.hash : window.history.pushState(null, null, t)
}
function Pi(e) {
    var t = this;
    if (e) {
        var r = e[0].type;
        yr.indexOf(r) >= 0 && Dt[r].forEach(function(n) {
            try {
                n.apply(t, e)
            } catch (a) {
                setTimeout(function() {
                    throw a
                })
            }
        })
    }
}
function Ti() {
    Ke([], arguments)
}
function Ci(e, t) {
    return function() {
        var r = window.location.href
          , n = e.apply(this, arguments)
          , a = window.location.href;
        return Vc && r === a || (zc() ? window.dispatchEvent(Qd(window.history.state, t)) : Ke([])),
        n
    }
}
function Qd(e, t) {
    var r;
    try {
        r = new PopStateEvent("popstate",{
            state: e
        })
    } catch {
        (r = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, e)
    }
    return r.singleSpa = !0,
    r.singleSpaTrigger = t,
    r
}
if (Rt) {
    window.addEventListener("hashchange", Ti),
    window.addEventListener("popstate", Ti);
    var ep = window.addEventListener
      , tp = window.removeEventListener;
    window.addEventListener = function(e, t) {
        if (!(typeof t == "function" && yr.indexOf(e) >= 0) || xr(Dt[e], function(r) {
            return r === t
        }))
            return ep.apply(this, arguments);
        Dt[e].push(t)
    }
    ,
    window.removeEventListener = function(e, t) {
        if (!(typeof t == "function" && yr.indexOf(e) >= 0))
            return tp.apply(this, arguments);
        Dt[e] = Dt[e].filter(function(r) {
            return r !== t
        })
    }
    ,
    window.history.pushState = Ci(window.history.pushState, "pushState"),
    window.history.replaceState = Ci(window.history.replaceState, "replaceState"),
    window.singleSpaNavigate ? console.warn(G(41, !1)) : window.singleSpaNavigate = Go
}
function Ai(e) {
    var t = document.createElement("a");
    return t.href = e,
    t
}
var Ri = !1;
function Wc() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.jQuery;
    if (e || window.$ && window.$.fn && window.$.fn.jquery && (e = window.$),
    e && !Ri) {
        var t = e.fn.on
          , r = e.fn.off;
        e.fn.on = function(n, a) {
            return Li.call(this, t, window.addEventListener, n, a, arguments)
        }
        ,
        e.fn.off = function(n, a) {
            return Li.call(this, r, window.removeEventListener, n, a, arguments)
        }
        ,
        Ri = !0
    }
}
function Li(e, t, r, n, a) {
    return typeof r != "string" ? e.apply(this, a) : (r.split(/\s+/).forEach(function(o) {
        yr.indexOf(o) >= 0 && (t(o, n),
        r = r.replace(o, ""))
    }),
    r.trim() === "" ? this : e.apply(this, a))
}
var _t = {};
function ro(e) {
    return Promise.resolve().then(function() {
        var t = _t[$(e)];
        if (!t)
            return e;
        if (e.status === Fe)
            return Ii(e, t),
            e;
        if (e.status === Ka)
            return t.promise.then(function() {
                return e
            });
        if (e.status !== Ne && e.status !== St)
            return e;
        var r = e.status === St ? Promise.resolve() : Kt(e, "unload");
        return e.status = Ka,
        r.then(function() {
            return Ii(e, t),
            e
        }).catch(function(n) {
            return function(a, o, i) {
                delete _t[$(a)],
                delete a.bootstrap,
                delete a.mount,
                delete a.unmount,
                delete a.unload,
                ze(i, a, ne),
                o.reject(i)
            }(e, t, n),
            e
        })
    })
}
function Ii(e, t) {
    delete _t[$(e)],
    delete e.bootstrap,
    delete e.mount,
    delete e.unmount,
    delete e.unload,
    e.status = Fe,
    t.resolve()
}
function xi(e, t, r, n) {
    _t[$(e)] = {
        app: e,
        resolve: r,
        reject: n
    },
    Object.defineProperty(_t[$(e)], "promise", {
        get: t
    })
}
function Hc(e) {
    return _t[e]
}
var _e = [];
function rp() {
    var e = []
      , t = []
      , r = []
      , n = []
      , a = new Date().getTime();
    return _e.forEach(function(o) {
        var i = o.status !== ne && Qa(o);
        switch (o.status) {
        case St:
            i && a - o.loadErrorTime >= 200 && r.push(o);
            break;
        case Fe:
        case Lr:
            i && r.push(o);
            break;
        case bt:
        case Ne:
            !i && Hc($(o)) ? e.push(o) : i && n.push(o);
            break;
        case Ee:
            i || t.push(o)
        }
    }),
    {
        appsToUnload: e,
        appsToUnmount: t,
        appsToLoad: r,
        appsToMount: n
    }
}
function qc() {
    return _e.filter(Yd).map($)
}
function Bc() {
    return _e.map($)
}
function Uc(e) {
    var t = xr(_e, function(r) {
        return $(r) === e
    });
    return t ? t.status : null
}
function np(e, t, r, n) {
    var a = function(o, i, s, u) {
        var c, l = {
            name: null,
            loadApp: null,
            activeWhen: null,
            customProps: null
        };
        return Ae(o) === "object" ? (function(f) {
            if (Array.isArray(f) || f === null)
                throw Error(G(39, !1));
            var d = ["name", "app", "activeWhen", "customProps"]
              , h = Object.keys(f).reduce(function(g, p) {
                return d.indexOf(p) >= 0 ? g : g.concat(p)
            }, []);
            if (h.length !== 0)
                throw Error(G(38, !1, d.join(", "), h.join(", ")));
            if (typeof f.name != "string" || f.name.length === 0 || Ae(f.app) !== "object" && typeof f.app != "function")
                throw Error(G(20, !1));
            var m = function(g) {
                return typeof g == "string" || typeof g == "function"
            };
            if (!(m(f.activeWhen) || Array.isArray(f.activeWhen) && f.activeWhen.every(m)))
                throw Error(G(24, !1));
            if (!Oi(f.customProps))
                throw Error(G(22, !1))
        }(o),
        l.name = o.name,
        l.loadApp = o.app,
        l.activeWhen = o.activeWhen,
        l.customProps = o.customProps) : (function(f, d, h, m) {
            if (typeof f != "string" || f.length === 0)
                throw Error(G(20, !1));
            if (!d)
                throw Error(G(23, !1));
            if (typeof h != "function")
                throw Error(G(24, !1));
            if (!Oi(m))
                throw Error(G(22, !1))
        }(o, i, s, u),
        l.name = o,
        l.loadApp = i,
        l.activeWhen = s,
        l.customProps = u),
        l.loadApp = typeof (c = l.loadApp) != "function" ? function() {
            return Promise.resolve(c)
        }
        : c,
        l.customProps = function(f) {
            return f || {}
        }(l.customProps),
        l.activeWhen = function(f) {
            var d = Array.isArray(f) ? f : [f];
            return d = d.map(function(h) {
                return typeof h == "function" ? h : Xc(h)
            }),
            function(h) {
                return d.some(function(m) {
                    return m(h)
                })
            }
        }(l.activeWhen),
        l
    }(e, t, r, n);
    if (Bc().indexOf(a.name) !== -1)
        throw Error(G(21, !1, a.name));
    _e.push(zt({
        loadErrorTime: null,
        status: Fe,
        parcels: {},
        devtools: {
            overlays: {
                options: {},
                selectors: []
            }
        }
    }, a)),
    Rt && (Wc(),
    Ke())
}
function Yc() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.location;
    return _e.filter(function(t) {
        return t.activeWhen(e)
    }).map($)
}
function $c(e) {
    if (_e.filter(function(t) {
        return $(t) === e
    }).length === 0)
        throw Error(G(25, !1, e));
    return Zc(e).then(function() {
        var t = _e.map($).indexOf(e);
        _e.splice(t, 1)
    })
}
function Zc(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        waitForUnmount: !1
    };
    if (typeof e != "string")
        throw Error(G(26, !1));
    var r = xr(_e, function(i) {
        return $(i) === e
    });
    if (!r)
        throw Error(G(27, !1, e));
    var n, a = Hc($(r));
    if (t && t.waitForUnmount) {
        if (a)
            return a.promise;
        var o = new Promise(function(i, s) {
            xi(r, function() {
                return o
            }, i, s)
        }
        );
        return o
    }
    return a ? (n = a.promise,
    Mi(r, a.resolve, a.reject)) : n = new Promise(function(i, s) {
        xi(r, function() {
            return n
        }, i, s),
        Mi(r, i, s)
    }
    ),
    n
}
function Mi(e, t, r) {
    Mr(e).then(ro).then(function() {
        t(),
        setTimeout(function() {
            Ke()
        })
    }).catch(r)
}
function Oi(e) {
    return !e || typeof e == "function" || Ae(e) === "object" && e !== null && !Array.isArray(e)
}
function Xc(e, t) {
    var r = function(n, a) {
        var o = 0
          , i = !1
          , s = "^";
        n[0] !== "/" && (n = "/" + n);
        for (var u = 0; u < n.length; u++) {
            var c = n[u];
            (!i && c === ":" || i && c === "/") && l(u)
        }
        return l(n.length),
        new RegExp(s,"i");
        function l(f) {
            var d = n.slice(o, f).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
            if (s += i ? "[^/]+/?" : d,
            f === n.length)
                if (i)
                    a && (s += "$");
                else {
                    var h = a ? "" : ".*";
                    s = s.charAt(s.length - 1) === "/" ? "".concat(s).concat(h, "$") : "".concat(s, "(/").concat(h, ")?(#.*)?$")
                }
            i = !i,
            o = f
        }
    }(e, t);
    return function(n) {
        var a = n.origin;
        a || (a = "".concat(n.protocol, "//").concat(n.host));
        var o = n.href.replace(a, "").replace(n.search, "").split("?")[0];
        return r.test(o)
    }
}
var Xr = !1
  , ir = []
  , ki = Rt && window.location.href;
function ap() {
    return Ke()
}
function Ke() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
      , t = arguments.length > 1 ? arguments[1] : void 0;
    if (Xr)
        return new Promise(function(v, y) {
            ir.push({
                resolve: v,
                reject: y,
                eventArguments: t
            })
        }
        );
    var r, n = rp(), a = n.appsToUnload, o = n.appsToUnmount, i = n.appsToLoad, s = n.appsToMount, u = !1, c = ki, l = ki = window.location.href;
    return zc() ? (Xr = !0,
    r = a.concat(i, o, s),
    h()) : (r = i,
    d());
    function f() {
        u = !0
    }
    function d() {
        return Promise.resolve().then(function() {
            var v = i.map(to);
            return Promise.all(v).then(g).then(function() {
                return []
            }).catch(function(y) {
                throw g(),
                y
            })
        })
    }
    function h() {
        return Promise.resolve().then(function() {
            if (window.dispatchEvent(new Ue(r.length === 0 ? "single-spa:before-no-app-change" : "single-spa:before-app-change",p(!0))),
            window.dispatchEvent(new Ue("single-spa:before-routing-event",p(!0, {
                cancelNavigation: f
            }))),
            u)
                return window.dispatchEvent(new Ue("single-spa:before-mount-routing-event",p(!0))),
                m(),
                void Go(c);
            var v = a.map(ro)
              , y = o.map(Mr).map(function(w) {
                return w.then(ro)
            }).concat(v)
              , T = Promise.all(y);
            T.then(function() {
                window.dispatchEvent(new Ue("single-spa:before-mount-routing-event",p(!0)))
            });
            var A = i.map(function(w) {
                return to(w).then(function(L) {
                    return Gi(L, T)
                })
            })
              , R = s.filter(function(w) {
                return i.indexOf(w) < 0
            }).map(function(w) {
                return Gi(w, T)
            });
            return T.catch(function(w) {
                throw g(),
                w
            }).then(function() {
                return g(),
                Promise.all(A.concat(R)).catch(function(w) {
                    throw e.forEach(function(L) {
                        return L.reject(w)
                    }),
                    w
                }).then(m)
            })
        })
    }
    function m() {
        var v = qc();
        e.forEach(function(A) {
            return A.resolve(v)
        });
        try {
            var y = r.length === 0 ? "single-spa:no-app-change" : "single-spa:app-change";
            window.dispatchEvent(new Ue(y,p())),
            window.dispatchEvent(new Ue("single-spa:routing-event",p()))
        } catch (A) {
            setTimeout(function() {
                throw A
            })
        }
        if (Xr = !1,
        ir.length > 0) {
            var T = ir;
            ir = [],
            Ke(T)
        }
        return v
    }
    function g() {
        e.forEach(function(v) {
            Pi(v.eventArguments)
        }),
        Pi(t)
    }
    function p() {
        var v, y = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], T = arguments.length > 1 ? arguments[1] : void 0, A = {}, R = (or(v = {}, Ee, []),
        or(v, Ne, []),
        or(v, Fe, []),
        or(v, ne, []),
        v);
        y ? (i.concat(s).forEach(function(S, C) {
            L(S, Ee)
        }),
        a.forEach(function(S) {
            L(S, Fe)
        }),
        o.forEach(function(S) {
            L(S, Ne)
        })) : r.forEach(function(S) {
            L(S)
        });
        var w = {
            detail: {
                newAppStatuses: A,
                appsByNewStatus: R,
                totalAppChanges: r.length,
                originalEvent: t?.[0],
                oldUrl: c,
                newUrl: l,
                navigationIsCanceled: u
            }
        };
        return T && zt(w.detail, T),
        w;
        function L(S, C) {
            var k = $(S);
            C = C || Uc(k),
            A[k] = C,
            (R[C] = R[C] || []).push(k)
        }
    }
}
function Gi(e, t) {
    return Qa(e) ? ko(e).then(function(r) {
        return t.then(function() {
            return Qa(r) ? eo(r) : r
        })
    }) : t.then(function() {
        return e
    })
}
var Do = !1;
function Jc(e) {
    var t;
    Do = !0,
    e && e.urlRerouteOnly && (t = e.urlRerouteOnly,
    Vc = t),
    Rt && Ke()
}
function zc() {
    return Do
}
Rt && setTimeout(function() {
    Do || console.warn(G(1, !1))
}, 5e3);
var op = {
    getRawAppData: function() {
        return [].concat(_e)
    },
    reroute: Ke,
    NOT_LOADED: Fe,
    toLoadPromise: to,
    toBootstrapPromise: ko,
    unregisterApplication: $c
};
Rt && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = op);
var Jr, Di;
function ip() {
    if (Di)
        return Jr;
    Di = 1;
    var e = Po()
      , t = lc()
      , r = Tt()
      , n = e ? e.isConcatSpreadable : void 0;
    function a(o) {
        return r(o) || t(o) || !!(n && o && o[n])
    }
    return Jr = a,
    Jr
}
var zr, Fi;
function sp() {
    if (Fi)
        return zr;
    Fi = 1;
    var e = To()
      , t = ip();
    function r(n, a, o, i, s) {
        var u = -1
          , c = n.length;
        for (o || (o = t),
        s || (s = []); ++u < c; ) {
            var l = n[u];
            a > 0 && o(l) ? a > 1 ? r(l, a - 1, o, i, s) : e(s, l) : i || (s[s.length] = l)
        }
        return s
    }
    return zr = r,
    zr
}
var Kr, Ni;
function Fo() {
    if (Ni)
        return Kr;
    Ni = 1;
    function e(t, r) {
        var n = -1
          , a = t.length;
        for (r || (r = Array(a)); ++n < a; )
            r[n] = t[n];
        return r
    }
    return Kr = e,
    Kr
}
var Qr, ji;
function up() {
    if (ji)
        return Qr;
    ji = 1;
    var e = To()
      , t = sp()
      , r = Fo()
      , n = Tt();
    function a() {
        var o = arguments.length;
        if (!o)
            return [];
        for (var i = Array(o - 1), s = arguments[0], u = o; u--; )
            i[u - 1] = arguments[u];
        return e(n(s) ? r(s) : [s], t(i, 1))
    }
    return Qr = a,
    Qr
}
var cp = up();
const Kc = Te(cp);
var en, Vi;
function Qc() {
    if (Vi)
        return en;
    Vi = 1;
    var e = Tf()
      , t = function() {
        try {
            var r = e(Object, "defineProperty");
            return r({}, "", {}),
            r
        } catch {}
    }();
    return en = t,
    en
}
var tn, Wi;
function No() {
    if (Wi)
        return tn;
    Wi = 1;
    var e = Qc();
    function t(r, n, a) {
        n == "__proto__" && e ? e(r, n, {
            configurable: !0,
            enumerable: !0,
            value: a,
            writable: !0
        }) : r[n] = a
    }
    return tn = t,
    tn
}
var rn, Hi;
function el() {
    if (Hi)
        return rn;
    Hi = 1;
    var e = No()
      , t = Co();
    function r(n, a, o) {
        (o !== void 0 && !t(n[a], o) || o === void 0 && !(a in n)) && e(n, a, o)
    }
    return rn = r,
    rn
}
var nn, qi;
function lp() {
    if (qi)
        return nn;
    qi = 1;
    function e(t) {
        return function(r, n, a) {
            for (var o = -1, i = Object(r), s = a(r), u = s.length; u--; ) {
                var c = s[t ? u : ++o];
                if (n(i[c], c, i) === !1)
                    break
            }
            return r
        }
    }
    return nn = e,
    nn
}
var an, Bi;
function tl() {
    if (Bi)
        return an;
    Bi = 1;
    var e = lp()
      , t = e();
    return an = t,
    an
}
var Ft = {
    exports: {}
};
Ft.exports;
var Ui;
function rl() {
    return Ui || (Ui = 1,
    function(e, t) {
        var r = Cf()
          , n = t && !t.nodeType && t
          , a = n && !0 && e && !e.nodeType && e
          , o = a && a.exports === n
          , i = o ? r.Buffer : void 0
          , s = i ? i.allocUnsafe : void 0;
        function u(c, l) {
            if (l)
                return c.slice();
            var f = c.length
              , d = s ? s(f) : new c.constructor(f);
            return c.copy(d),
            d
        }
        e.exports = u
    }(Ft, Ft.exports)),
    Ft.exports
}
var on, Yi;
function jo() {
    if (Yi)
        return on;
    Yi = 1;
    var e = Af();
    function t(r) {
        var n = new r.constructor(r.byteLength);
        return new e(n).set(new e(r)),
        n
    }
    return on = t,
    on
}
var sn, $i;
function nl() {
    if ($i)
        return sn;
    $i = 1;
    var e = jo();
    function t(r, n) {
        var a = n ? e(r.buffer) : r.buffer;
        return new r.constructor(a,r.byteOffset,r.length)
    }
    return sn = t,
    sn
}
var un, Zi;
function fp() {
    if (Zi)
        return un;
    Zi = 1;
    var e = ct()
      , t = Object.create
      , r = function() {
        function n() {}
        return function(a) {
            if (!e(a))
                return {};
            if (t)
                return t(a);
            n.prototype = a;
            var o = new n;
            return n.prototype = void 0,
            o
        }
    }();
    return un = r,
    un
}
var cn, Xi;
function Vo() {
    if (Xi)
        return cn;
    Xi = 1;
    var e = Rf()
      , t = e(Object.getPrototypeOf, Object);
    return cn = t,
    cn
}
var ln, Ji;
function al() {
    if (Ji)
        return ln;
    Ji = 1;
    var e = fp()
      , t = Vo()
      , r = fc();
    function n(a) {
        return typeof a.constructor == "function" && !r(a) ? e(t(a)) : {}
    }
    return ln = n,
    ln
}
var fn, zi;
function ol() {
    if (zi)
        return fn;
    zi = 1;
    var e = Ar()
      , t = Xt();
    function r(n) {
        return t(n) && e(n)
    }
    return fn = r,
    fn
}
var dn, Ki;
function dp() {
    if (Ki)
        return dn;
    Ki = 1;
    var e = dc()
      , t = Vo()
      , r = Xt()
      , n = "[object Object]"
      , a = Function.prototype
      , o = Object.prototype
      , i = a.toString
      , s = o.hasOwnProperty
      , u = i.call(Object);
    function c(l) {
        if (!r(l) || e(l) != n)
            return !1;
        var f = t(l);
        if (f === null)
            return !0;
        var d = s.call(f, "constructor") && f.constructor;
        return typeof d == "function" && d instanceof d && i.call(d) == u
    }
    return dn = c,
    dn
}
var pn, Qi;
function il() {
    if (Qi)
        return pn;
    Qi = 1;
    function e(t, r) {
        if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
            return t[r]
    }
    return pn = e,
    pn
}
var mn, es;
function sl() {
    if (es)
        return mn;
    es = 1;
    var e = No()
      , t = Co()
      , r = Object.prototype
      , n = r.hasOwnProperty;
    function a(o, i, s) {
        var u = o[i];
        (!(n.call(o, i) && t(u, s)) || s === void 0 && !(i in o)) && e(o, i, s)
    }
    return mn = a,
    mn
}
var hn, ts;
function Qt() {
    if (ts)
        return hn;
    ts = 1;
    var e = sl()
      , t = No();
    function r(n, a, o, i) {
        var s = !o;
        o || (o = {});
        for (var u = -1, c = a.length; ++u < c; ) {
            var l = a[u]
              , f = i ? i(o[l], n[l], l, o, n) : void 0;
            f === void 0 && (f = n[l]),
            s ? t(o, l, f) : e(o, l, f)
        }
        return o
    }
    return hn = r,
    hn
}
var vn, rs;
function pp() {
    if (rs)
        return vn;
    rs = 1;
    function e(t) {
        var r = [];
        if (t != null)
            for (var n in Object(t))
                r.push(n);
        return r
    }
    return vn = e,
    vn
}
var gn, ns;
function mp() {
    if (ns)
        return gn;
    ns = 1;
    var e = ct()
      , t = fc()
      , r = pp()
      , n = Object.prototype
      , a = n.hasOwnProperty;
    function o(i) {
        if (!e(i))
            return r(i);
        var s = t(i)
          , u = [];
        for (var c in i)
            c == "constructor" && (s || !a.call(i, c)) || u.push(c);
        return u
    }
    return gn = o,
    gn
}
var yn, as;
function er() {
    if (as)
        return yn;
    as = 1;
    var e = Lf()
      , t = mp()
      , r = Ar();
    function n(a) {
        return r(a) ? e(a, !0) : t(a)
    }
    return yn = n,
    yn
}
var wn, os;
function hp() {
    if (os)
        return wn;
    os = 1;
    var e = Qt()
      , t = er();
    function r(n) {
        return e(n, t(n))
    }
    return wn = r,
    wn
}
var bn, is;
function vp() {
    if (is)
        return bn;
    is = 1;
    var e = el()
      , t = rl()
      , r = nl()
      , n = Fo()
      , a = al()
      , o = lc()
      , i = Tt()
      , s = ol()
      , u = pc()
      , c = mc()
      , l = ct()
      , f = dp()
      , d = If()
      , h = il()
      , m = hp();
    function g(p, v, y, T, A, R, w) {
        var L = h(p, y)
          , S = h(v, y)
          , C = w.get(S);
        if (C) {
            e(p, y, C);
            return
        }
        var k = R ? R(L, S, y + "", p, v, w) : void 0
          , B = k === void 0;
        if (B) {
            var F = i(S)
              , te = !F && u(S)
              , U = !F && !te && d(S);
            k = S,
            F || te || U ? i(L) ? k = L : s(L) ? k = n(L) : te ? (B = !1,
            k = t(S, !0)) : U ? (B = !1,
            k = r(S, !0)) : k = [] : f(S) || o(S) ? (k = L,
            o(L) ? k = m(L) : (!l(L) || c(L)) && (k = a(S))) : B = !1
        }
        B && (w.set(S, k),
        A(k, S, T, R, w),
        w.delete(S)),
        e(p, y, k)
    }
    return bn = g,
    bn
}
var Sn, ss;
function gp() {
    if (ss)
        return Sn;
    ss = 1;
    var e = hc()
      , t = el()
      , r = tl()
      , n = vp()
      , a = ct()
      , o = er()
      , i = il();
    function s(u, c, l, f, d) {
        u !== c && r(c, function(h, m) {
            if (d || (d = new e),
            a(h))
                n(u, c, m, l, s, f, d);
            else {
                var g = f ? f(i(u, m), h, m + "", u, c, d) : void 0;
                g === void 0 && (g = h),
                t(u, m, g)
            }
        }, o)
    }
    return Sn = s,
    Sn
}
var En, us;
function Wo() {
    if (us)
        return En;
    us = 1;
    function e(t) {
        return t
    }
    return En = e,
    En
}
var _n, cs;
function yp() {
    if (cs)
        return _n;
    cs = 1;
    function e(t, r, n) {
        switch (n.length) {
        case 0:
            return t.call(r);
        case 1:
            return t.call(r, n[0]);
        case 2:
            return t.call(r, n[0], n[1]);
        case 3:
            return t.call(r, n[0], n[1], n[2])
        }
        return t.apply(r, n)
    }
    return _n = e,
    _n
}
var Pn, ls;
function wp() {
    if (ls)
        return Pn;
    ls = 1;
    var e = yp()
      , t = Math.max;
    function r(n, a, o) {
        return a = t(a === void 0 ? n.length - 1 : a, 0),
        function() {
            for (var i = arguments, s = -1, u = t(i.length - a, 0), c = Array(u); ++s < u; )
                c[s] = i[a + s];
            s = -1;
            for (var l = Array(a + 1); ++s < a; )
                l[s] = i[s];
            return l[a] = o(c),
            e(n, this, l)
        }
    }
    return Pn = r,
    Pn
}
var Tn, fs;
function bp() {
    if (fs)
        return Tn;
    fs = 1;
    function e(t) {
        return function() {
            return t
        }
    }
    return Tn = e,
    Tn
}
var Cn, ds;
function Sp() {
    if (ds)
        return Cn;
    ds = 1;
    var e = bp()
      , t = Qc()
      , r = Wo()
      , n = t ? function(a, o) {
        return t(a, "toString", {
            configurable: !0,
            enumerable: !1,
            value: e(o),
            writable: !0
        })
    }
    : r;
    return Cn = n,
    Cn
}
var An, ps;
function Ep() {
    if (ps)
        return An;
    ps = 1;
    var e = 800
      , t = 16
      , r = Date.now;
    function n(a) {
        var o = 0
          , i = 0;
        return function() {
            var s = r()
              , u = t - (s - i);
            if (i = s,
            u > 0) {
                if (++o >= e)
                    return arguments[0]
            } else
                o = 0;
            return a.apply(void 0, arguments)
        }
    }
    return An = n,
    An
}
var Rn, ms;
function _p() {
    if (ms)
        return Rn;
    ms = 1;
    var e = Sp()
      , t = Ep()
      , r = t(e);
    return Rn = r,
    Rn
}
var Ln, hs;
function ul() {
    if (hs)
        return Ln;
    hs = 1;
    var e = Wo()
      , t = wp()
      , r = _p();
    function n(a, o) {
        return r(t(a, o, e), a + "")
    }
    return Ln = n,
    Ln
}
var In, vs;
function Pp() {
    if (vs)
        return In;
    vs = 1;
    var e = Co()
      , t = Ar()
      , r = xf()
      , n = ct();
    function a(o, i, s) {
        if (!n(s))
            return !1;
        var u = typeof i;
        return (u == "number" ? t(s) && r(i, s.length) : u == "string" && i in s) ? e(s[i], o) : !1
    }
    return In = a,
    In
}
var xn, gs;
function Tp() {
    if (gs)
        return xn;
    gs = 1;
    var e = ul()
      , t = Pp();
    function r(n) {
        return e(function(a, o) {
            var i = -1
              , s = o.length
              , u = s > 1 ? o[s - 1] : void 0
              , c = s > 2 ? o[2] : void 0;
            for (u = n.length > 3 && typeof u == "function" ? (s--,
            u) : void 0,
            c && t(o[0], o[1], c) && (u = s < 3 ? void 0 : u,
            s = 1),
            a = Object(a); ++i < s; ) {
                var l = o[i];
                l && n(a, l, i, u)
            }
            return a
        })
    }
    return xn = r,
    xn
}
var Mn, ys;
function Cp() {
    if (ys)
        return Mn;
    ys = 1;
    var e = gp()
      , t = Tp()
      , r = t(function(n, a, o, i) {
        e(n, a, o, i)
    });
    return Mn = r,
    Mn
}
var Ap = Cp();
const cl = Te(Ap);
var On, ws;
function ll() {
    if (ws)
        return On;
    ws = 1;
    function e(t, r) {
        for (var n = -1, a = t == null ? 0 : t.length; ++n < a && r(t[n], n, t) !== !1; )
            ;
        return t
    }
    return On = e,
    On
}
var kn, bs;
function Rp() {
    if (bs)
        return kn;
    bs = 1;
    var e = tl()
      , t = Ao();
    function r(n, a) {
        return n && e(n, a, t)
    }
    return kn = r,
    kn
}
var Gn, Ss;
function Lp() {
    if (Ss)
        return Gn;
    Ss = 1;
    var e = Ar();
    function t(r, n) {
        return function(a, o) {
            if (a == null)
                return a;
            if (!e(a))
                return r(a, o);
            for (var i = a.length, s = n ? i : -1, u = Object(a); (n ? s-- : ++s < i) && o(u[s], s, u) !== !1; )
                ;
            return a
        }
    }
    return Gn = t,
    Gn
}
var Dn, Es;
function Ip() {
    if (Es)
        return Dn;
    Es = 1;
    var e = Rp()
      , t = Lp()
      , r = t(e);
    return Dn = r,
    Dn
}
var Fn, _s;
function xp() {
    if (_s)
        return Fn;
    _s = 1;
    var e = Wo();
    function t(r) {
        return typeof r == "function" ? r : e
    }
    return Fn = t,
    Fn
}
var Nn, Ps;
function Mp() {
    if (Ps)
        return Nn;
    Ps = 1;
    var e = ll()
      , t = Ip()
      , r = xp()
      , n = Tt();
    function a(o, i) {
        var s = n(o) ? e : t;
        return s(o, r(i))
    }
    return Nn = a,
    Nn
}
var Op = Mp();
const kp = Te(Op);
function fl(e, t) {
    return Promise.all(e.map(function(r, n) {
        return r.then(function(a) {
            return {
                status: "fulfilled",
                value: a
            }
        }).catch(function(a) {
            if (t != null && t(n))
                throw a;
            return {
                status: "rejected",
                reason: a
            }
        })
    }))
}
var Gp = typeof navigator < "u" && navigator.userAgent.indexOf("Trident") !== -1;
function dl(e, t) {
    if (!e.hasOwnProperty(t) || !isNaN(t) && t < e.length)
        return !0;
    if (Gp)
        try {
            return e[t] && typeof window < "u" && e[t].parent === window
        } catch {
            return !0
        }
    else
        return !1
}
var dr, pr, no;
function Dp(e) {
    var t = 0, r, n = !1;
    for (var a in e)
        if (!dl(e, a)) {
            for (var o = 0; o < window.frames.length && !n; o++) {
                var i = window.frames[o];
                if (i === e[a]) {
                    n = !0;
                    break
                }
            }
            if (!n && (t === 0 && a !== dr || t === 1 && a !== pr))
                return a;
            t++,
            r = a
        }
    if (r !== no)
        return r
}
function Fp(e) {
    dr = pr = void 0;
    for (var t in e)
        dl(e, t) || (dr ? pr || (pr = t) : dr = t,
        no = t);
    return no
}
function Ho(e) {
    var t = e.indexOf(">") + 1
      , r = e.lastIndexOf("<");
    return e.substring(t, r)
}
function ao(e) {
    if (Se(e) === "object")
        return "/";
    try {
        var t = new URL(e,location.href)
          , r = t.origin
          , n = t.pathname
          , a = n.split("/");
        return a.pop(),
        "".concat(r).concat(a.join("/"), "/")
    } catch (o) {
        return console.warn(o),
        ""
    }
}
function Np() {
    var e = document.createElement("script");
    return "noModule"in e
}
var jp = window.requestIdleCallback || function(t) {
    var r = Date.now();
    return setTimeout(function() {
        t({
            didTimeout: !1,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - r))
            }
        })
    }, 1)
}
;
function Vp(e, t) {
    if (!t || !e.headers)
        return e.text();
    var r = e.headers.get("Content-Type");
    if (!r)
        return e.text();
    var n = "utf-8"
      , a = r.split(";");
    if (a.length === 2) {
        var o = a[1].split("=")
          , i = Ro(o, 2)
          , s = i[1]
          , u = s && s.trim();
        u && (n = u)
    }
    return n.toUpperCase() === "UTF-8" ? e.text() : e.blob().then(function(c) {
        return new Promise(function(l, f) {
            var d = new window.FileReader;
            d.onload = function() {
                l(d.result)
            }
            ,
            d.onerror = f,
            d.readAsText(c, n)
        }
        )
    })
}
var jn = {};
function Wp(e, t) {
    var r = e;
    if (!jn[r]) {
        var n = "(function(){".concat(t, "})");
        jn[r] = (0,
        eval)(n)
    }
    var a = jn[r];
    a.call(window)
}
function Ts(e) {
    var t = new DOMParser
      , r = '<script src="'.concat(e, '"><\/script>')
      , n = t.parseFromString(r, "text/html");
    return n.scripts[0].src
}
var Hp = /(<script[\s\S]*?>)[\s\S]*?<\/script>/gi
  , qp = /<(script)\s+((?!type=('|")text\/ng\x2Dtemplate\3)[\s\S])*?>[\s\S]*?<\/\1>/i
  , Cs = /.*\ssrc=('|")?([^>'"\s]+)/
  , Bp = /.*\stype=('|")?([^>'"\s]+)/
  , Up = /.*\sentry\s*.*/
  , Yp = /.*\sasync\s*.*/
  , $p = /.*\scrossorigin=('|")?use-credentials\1/
  , Zp = /.*\snomodule\s*.*/
  , Xp = /.*\stype=('|")?module('|")?\s*.*/
  , Jp = /<(link)\s+[\s\S]*?>/ig
  , zp = /\srel=('|")?(preload|prefetch)\1/
  , As = /.*\shref=('|")?([^>'"\s]+)/
  , Kp = /.*\sas=('|")?font\1.*/
  , Qp = /<style[^>]*>[\s\S]*?<\/style>/gi
  , em = /\s+rel=('|")?stylesheet\1.*/
  , tm = /.*\shref=('|")?([^>'"\s]+)/
  , rm = /<!--([\s\S]*?)-->/g
  , nm = /<link(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i
  , am = /<style(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i
  , om = /<script(\s+|\s+[\s\S]+\s+)ignore(\s*|\s+[\s\S]*|=[\s\S]*)>/i;
function Rs(e) {
    return e.startsWith("http://") || e.startsWith("https://")
}
function Ls(e, t) {
    return new URL(e,t).toString()
}
function im(e) {
    var t = ["text/javascript", "module", "application/javascript", "text/ecmascript", "application/ecmascript"];
    return !e || t.indexOf(e) !== -1
}
var wr = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return "<!-- ".concat(r ? "prefetch/preload" : "", " link ").concat(t, " replaced by import-html-entry -->")
}
  , pl = function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
      , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    return "<!-- ".concat(n ? "cors" : "", " ").concat(r ? "async" : "", " script ").concat(t, " replaced by import-html-entry -->")
}
  , sm = "<!-- inline scripts replaced by import-html-entry -->"
  , sr = function(t) {
    return "<!-- ignore asset ".concat(t || "file", " replaced by import-html-entry -->")
}
  , Is = function(t, r) {
    return "<!-- ".concat(r ? "nomodule" : "module", " script ").concat(t, " ignored by import-html-entry -->")
};
function um(e, t, r) {
    var n = []
      , a = []
      , o = null
      , i = Np()
      , s = e.replace(rm, "").replace(Jp, function(c) {
        var l = !!c.match(em);
        if (l) {
            var f = c.match(tm)
              , d = c.match(nm);
            if (f) {
                var h = f && f[2]
                  , m = h;
                return h && !Rs(h) && (m = Ls(h, t)),
                d ? sr(m) : (m = Ts(m),
                a.push(m),
                wr(m))
            }
        }
        var g = c.match(zp) && c.match(As) && !c.match(Kp);
        if (g) {
            var p = c.match(As)
              , v = Ro(p, 3)
              , y = v[2];
            return wr(y, !0)
        }
        return c
    }).replace(Qp, function(c) {
        return am.test(c) ? sr("style file") : c
    }).replace(Hp, function(c, l) {
        var f = l.match(om)
          , d = i && !!l.match(Zp) || !i && !!l.match(Xp)
          , h = l.match(Bp)
          , m = h && h[2];
        if (!im(m))
            return c;
        if (qp.test(c) && l.match(Cs)) {
            var g = l.match(Up)
              , p = l.match(Cs)
              , v = p && p[2];
            if (o && g)
                throw new SyntaxError("You should not set multiply entry script!");
            if (v && (Rs(v) || (v = Ls(v, t)),
            v = Ts(v)),
            o = o || g && v,
            f)
                return sr(v || "js file");
            if (d)
                return Is(v || "js file", i);
            if (v) {
                var y = !!l.match(Yp)
                  , T = !!l.match($p);
                return n.push(y || T ? {
                    async: y,
                    src: v,
                    crossOrigin: T
                } : v),
                pl(v, y, T)
            }
            return c
        } else {
            if (f)
                return sr("js file");
            if (d)
                return Is("js file", i);
            var A = Ho(c)
              , R = A.split(/[\r\n]+/).every(function(w) {
                return !w.trim() || w.trim().startsWith("//")
            });
            return R || n.push(c),
            sm
        }
    });
    n = n.filter(function(c) {
        return !!c
    });
    var u = {
        template: s,
        scripts: n,
        styles: a,
        entry: o || n[n.length - 1]
    };
    return typeof r == "function" && (u = r(u)),
    u
}
function xs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function ml(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? xs(Object(r), !0).forEach(function(n) {
            Ze(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xs(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
var Ms = {}
  , Os = {}
  , ks = {};
if (!window.fetch)
    throw new Error('[import-html-entry] Here is no "fetch" on the window env, you need to polyfill it');
var it = window.fetch.bind(window);
function oo(e) {
    return e
}
function hl(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , n = r.fetch
      , a = n === void 0 ? it : n
      , o = e;
    return qo(t, a).then(function(i) {
        return o = i.reduce(function(s, u) {
            var c = u.src
              , l = u.value;
            return s = s.replace(wr(c), Or(c) ? "".concat(c) : "<style>/* ".concat(c, " */").concat(l, "</style>")),
            s
        }, o),
        o
    })
}
var Or = function(t) {
    return t.startsWith("<")
};
function cm(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , n = r.proxy
      , a = r.strictGlobal
      , o = r.scopedGlobalVariables
      , i = o === void 0 ? [] : o
      , s = Or(e) ? "" : "//# sourceURL=".concat(e, `
`)
      , u = i.length ? "const {".concat(i.join(","), "}=this;") : ""
      , c = (0,
    eval)("window");
    return c.proxy = n,
    a ? u ? ";(function(){with(this){".concat(u).concat(t, `
`).concat(s, "}}).bind(window.proxy)();") : ";(function(window, self, globalThis){with(window){;".concat(t, `
`).concat(s, "}}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);") : ";(function(window, self, globalThis){;".concat(t, `
`).concat(s, "}).bind(window.proxy)(window.proxy, window.proxy, window.proxy);")
}
function qo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it;
    return fl(e.map(function() {
        var r = q(x.mark(function n(a) {
            return x.wrap(function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        if (!Or(a)) {
                            i.next = 4;
                            break
                        }
                        return i.abrupt("return", Ho(a));
                    case 4:
                        return i.abrupt("return", Ms[a] || (Ms[a] = t(a).then(function(s) {
                            if (s.status >= 400)
                                throw new Error("".concat(a, " load failed with status ").concat(s.status));
                            return s.text()
                        }).catch(function(s) {
                            try {
                                s.message.indexOf(a) === -1 && (s.message = "".concat(a, " ").concat(s.message))
                            } catch {}
                            throw s
                        })));
                    case 5:
                    case "end":
                        return i.stop()
                    }
            }, n)
        }));
        return function(n) {
            return r.apply(this, arguments)
        }
    }())).then(function(r) {
        return r.map(function(n, a) {
            return n.status === "fulfilled" && (n.value = {
                src: e[a],
                value: n.value
            }),
            n
        }).filter(function(n) {
            return n.status === "rejected" && Promise.reject(n.reason),
            n.status === "fulfilled"
        }).map(function(n) {
            return n.value
        })
    })
}
function Bo(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it
      , r = arguments.length > 2 ? arguments[2] : void 0
      , n = function(i, s) {
        return Os[i] || (Os[i] = t(i, s).then(function(u) {
            if (u.status >= 400)
                throw new Error("".concat(i, " load failed with status ").concat(u.status));
            return u.text()
        }).catch(function(u) {
            try {
                u.message.indexOf(i) === -1 && (u.message = "".concat(i, " ").concat(u.message))
            } catch {}
            throw u
        }))
    }
      , a = function(i) {
        return e[i] === r
    };
    return fl(e.map(function() {
        var o = q(x.mark(function i(s) {
            var u, c, l, f;
            return x.wrap(function(h) {
                for (; ; )
                    switch (h.prev = h.next) {
                    case 0:
                        if (typeof s != "string") {
                            h.next = 8;
                            break
                        }
                        if (!Or(s)) {
                            h.next = 5;
                            break
                        }
                        return h.abrupt("return", Ho(s));
                    case 5:
                        return h.abrupt("return", n(s));
                    case 6:
                        h.next = 13;
                        break;
                    case 8:
                        if (u = s.src,
                        c = s.async,
                        l = s.crossOrigin,
                        f = l ? {
                            credentials: "include"
                        } : {},
                        !c) {
                            h.next = 12;
                            break
                        }
                        return h.abrupt("return", {
                            src: u,
                            async: !0,
                            content: new Promise(function(m, g) {
                                return jp(function() {
                                    return n(u, f).then(m, g)
                                })
                            }
                            )
                        });
                    case 12:
                        return h.abrupt("return", n(u, f));
                    case 13:
                    case "end":
                        return h.stop()
                    }
            }, i)
        }));
        return function(i) {
            return o.apply(this, arguments)
        }
    }()), a).then(function(o) {
        return o.map(function(i, s) {
            return i.status === "fulfilled" && (i.value = {
                src: e[s],
                value: i.value
            }),
            i
        }).filter(function(i) {
            return i.status === "rejected" && Promise.reject(i.reason),
            i.status === "fulfilled"
        }).map(function(i) {
            return i.value
        })
    })
}
function Gs(e, t) {
    setTimeout(function() {
        throw console.error(t),
        e
    })
}
function br(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window
      , n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
      , a = n.fetch
      , o = a === void 0 ? it : a
      , i = n.strictGlobal
      , s = i === void 0 ? !1 : i
      , u = n.success
      , c = n.error
      , l = c === void 0 ? function() {}
    : c
      , f = n.beforeExec
      , d = f === void 0 ? function() {}
    : f
      , h = n.afterExec
      , m = h === void 0 ? function() {}
    : h
      , g = n.scopedGlobalVariables
      , p = g === void 0 ? [] : g;
    return Bo(t, o, e).then(function(v) {
        var y = function(w, L) {
            var S = d(L, w) || L
              , C = cm(w, S, {
                proxy: r,
                strictGlobal: s,
                scopedGlobalVariables: p
            });
            Wp(w, C),
            m(L, w)
        };
        function T(R, w, L) {
            if (R === e) {
                Fp(s ? r : window);
                try {
                    y(R, w);
                    var S = r[Dp(s ? r : window)] || {};
                    L(S)
                } catch (C) {
                    throw console.error("[import-html-entry]: error occurs while executing entry script ".concat(R)),
                    C
                }
            } else if (typeof w == "string")
                try {
                    R != null && R.src ? y(R.src, w) : y(R, w)
                } catch (C) {
                    Gs(C, "[import-html-entry]: error occurs while executing normal script ".concat(R))
                }
            else
                w.async && w?.content.then(function(C) {
                    return y(w.src, C)
                }).catch(function(C) {
                    Gs(C, "[import-html-entry]: error occurs while executing async script ".concat(w.src))
                })
        }
        function A(R, w) {
            if (R < v.length) {
                var L = v[R]
                  , S = L.src
                  , C = L.value;
                T(S, C, w),
                !e && R === v.length - 1 ? w() : A(R + 1, w)
            }
        }
        return new Promise(function(R) {
            return A(0, u || R)
        }
        )
    }).catch(function(v) {
        throw l(),
        v
    })
}
function lm(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = it
      , n = !1
      , a = ao
      , o = oo
      , i = t.postProcessTemplate;
    return typeof t == "function" ? r = t : (t.fetch && (typeof t.fetch == "function" ? r = t.fetch : (r = t.fetch.fn || it,
    n = !!t.fetch.autoDecodeResponse)),
    a = t.getPublicPath || t.getDomain || ao,
    o = t.getTemplate || oo),
    ks[e] || (ks[e] = r(e).then(function(s) {
        return Vp(s, n)
    }).then(function(s) {
        var u = a(e)
          , c = um(o(s), u, i)
          , l = c.template
          , f = c.scripts
          , d = c.entry
          , h = c.styles;
        return hl(l, h, {
            fetch: r
        }).then(function(m) {
            return {
                template: m,
                assetPublicPath: u,
                getExternalScripts: function() {
                    return Bo(f, r)
                },
                getExternalStyleSheets: function() {
                    return qo(h, r)
                },
                execScripts: function(p, v) {
                    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    return f.length ? br(d, f, p, ml({
                        fetch: r,
                        strictGlobal: v
                    }, y)) : Promise.resolve()
                }
            }
        })
    }))
}
function fm(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = t.fetch
      , n = r === void 0 ? it : r
      , a = t.getTemplate
      , o = a === void 0 ? oo : a
      , i = t.postProcessTemplate
      , s = t.getPublicPath || t.getDomain || ao;
    if (!e)
        throw new SyntaxError("entry should not be empty!");
    if (typeof e == "string")
        return lm(e, {
            fetch: n,
            getPublicPath: s,
            getTemplate: o,
            postProcessTemplate: i
        });
    if (Array.isArray(e.scripts) || Array.isArray(e.styles)) {
        var u = e.scripts
          , c = u === void 0 ? [] : u
          , l = e.styles
          , f = l === void 0 ? [] : l
          , d = e.html
          , h = d === void 0 ? "" : d
          , m = function(v) {
            return f.reduceRight(function(y, T) {
                return "".concat(wr(T)).concat(y)
            }, v)
        }
          , g = function(v) {
            return c.reduce(function(y, T) {
                return "".concat(y).concat(pl(T))
            }, v)
        };
        return hl(o(g(m(h))), f, {
            fetch: n
        }).then(function(p) {
            return {
                template: p,
                assetPublicPath: s(e),
                getExternalScripts: function() {
                    return Bo(c, n)
                },
                getExternalStyleSheets: function() {
                    return qo(f, n)
                },
                execScripts: function(y, T) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                    return c.length ? br(c[c.length - 1], c, y, ml({
                        fetch: n,
                        strictGlobal: T
                    }, A)) : Promise.resolve()
                }
            }
        })
    } else
        throw new SyntaxError("entry scripts or styles should be array!")
}
function dm(e) {
    return {
        beforeLoad: function() {
            return q(x.mark(function r() {
                return x.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            e.__POWERED_BY_QIANKUN__ = !0;
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, r)
            }))()
        },
        beforeMount: function() {
            return q(x.mark(function r() {
                return x.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            e.__POWERED_BY_QIANKUN__ = !0;
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, r)
            }))()
        },
        beforeUnmount: function() {
            return q(x.mark(function r() {
                return x.wrap(function(a) {
                    for (; ; )
                        switch (a.prev = a.next) {
                        case 0:
                            delete e.__POWERED_BY_QIANKUN__;
                        case 1:
                        case "end":
                            return a.stop()
                        }
                }, r)
            }))()
        }
    }
}
var Ds = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
function pm(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "/"
      , r = !1;
    return {
        beforeLoad: function() {
            return q(x.mark(function a() {
                return x.wrap(function(i) {
                    for (; ; )
                        switch (i.prev = i.next) {
                        case 0:
                            e.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = t;
                        case 1:
                        case "end":
                            return i.stop()
                        }
                }, a)
            }))()
        },
        beforeMount: function() {
            return q(x.mark(function a() {
                return x.wrap(function(i) {
                    for (; ; )
                        switch (i.prev = i.next) {
                        case 0:
                            r && (e.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = t);
                        case 1:
                        case "end":
                            return i.stop()
                        }
                }, a)
            }))()
        },
        beforeUnmount: function() {
            return q(x.mark(function a() {
                return x.wrap(function(i) {
                    for (; ; )
                        switch (i.prev = i.next) {
                        case 0:
                            Ds === void 0 ? delete e.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ : e.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = Ds,
                            r = !0;
                        case 2:
                        case "end":
                            return i.stop()
                        }
                }, a)
            }))()
        }
    }
}
function mm(e, t) {
    return cl({}, dm(e), pm(e, t), function(r, n) {
        return Kc(r ?? [], n ?? [])
    })
}
function hm(e) {
    try {
        return Function.toString.call(e).indexOf("[native code]") !== -1
    } catch {
        return typeof e == "function"
    }
}
function vm(e, t, r) {
    if (Mo())
        return Reflect.construct.apply(null, arguments);
    var n = [null];
    n.push.apply(n, t);
    var a = new (e.bind.apply(e, n));
    return r && vc(a, r.prototype),
    a
}
function io(e) {
    var t = typeof Map == "function" ? new Map : void 0;
    return io = function(n) {
        if (n === null || !hm(n))
            return n;
        if (typeof n != "function")
            throw new TypeError("Super expression must either be null or a function");
        if (t !== void 0) {
            if (t.has(n))
                return t.get(n);
            t.set(n, a)
        }
        function a() {
            return vm(n, arguments, Ya(this).constructor)
        }
        return a.prototype = Object.create(n.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        vc(a, n)
    }
    ,
    io(e)
}
var Ut = function(e) {
    Mf(r, e);
    var t = od(r);
    function r(n) {
        return Ct(this, r),
        t.call(this, "[qiankun]: ".concat(n))
    }
    return At(r)
}(io(Error)), Vn, Fs;
function gm() {
    if (Fs)
        return Vn;
    Fs = 1;
    var e = Qt()
      , t = Ao();
    function r(n, a) {
        return n && e(a, t(a), n)
    }
    return Vn = r,
    Vn
}
var Wn, Ns;
function ym() {
    if (Ns)
        return Wn;
    Ns = 1;
    var e = Qt()
      , t = er();
    function r(n, a) {
        return n && e(a, t(a), n)
    }
    return Wn = r,
    Wn
}
var Hn, js;
function wm() {
    if (js)
        return Hn;
    js = 1;
    var e = Qt()
      , t = gc();
    function r(n, a) {
        return e(n, t(n), a)
    }
    return Hn = r,
    Hn
}
var qn, Vs;
function vl() {
    if (Vs)
        return qn;
    Vs = 1;
    var e = To()
      , t = Vo()
      , r = gc()
      , n = Of()
      , a = Object.getOwnPropertySymbols
      , o = a ? function(i) {
        for (var s = []; i; )
            e(s, r(i)),
            i = t(i);
        return s
    }
    : n;
    return qn = o,
    qn
}
var Bn, Ws;
function bm() {
    if (Ws)
        return Bn;
    Ws = 1;
    var e = Qt()
      , t = vl();
    function r(n, a) {
        return e(n, t(n), a)
    }
    return Bn = r,
    Bn
}
var Un, Hs;
function Sm() {
    if (Hs)
        return Un;
    Hs = 1;
    var e = kf()
      , t = vl()
      , r = er();
    function n(a) {
        return e(a, r, t)
    }
    return Un = n,
    Un
}
var Yn, qs;
function Em() {
    if (qs)
        return Yn;
    qs = 1;
    var e = Object.prototype
      , t = e.hasOwnProperty;
    function r(n) {
        var a = n.length
          , o = new n.constructor(a);
        return a && typeof n[0] == "string" && t.call(n, "index") && (o.index = n.index,
        o.input = n.input),
        o
    }
    return Yn = r,
    Yn
}
var $n, Bs;
function _m() {
    if (Bs)
        return $n;
    Bs = 1;
    var e = jo();
    function t(r, n) {
        var a = n ? e(r.buffer) : r.buffer;
        return new r.constructor(a,r.byteOffset,r.byteLength)
    }
    return $n = t,
    $n
}
var Zn, Us;
function Pm() {
    if (Us)
        return Zn;
    Us = 1;
    var e = /\w*$/;
    function t(r) {
        var n = new r.constructor(r.source,e.exec(r));
        return n.lastIndex = r.lastIndex,
        n
    }
    return Zn = t,
    Zn
}
var Xn, Ys;
function Tm() {
    if (Ys)
        return Xn;
    Ys = 1;
    var e = Po()
      , t = e ? e.prototype : void 0
      , r = t ? t.valueOf : void 0;
    function n(a) {
        return r ? Object(r.call(a)) : {}
    }
    return Xn = n,
    Xn
}
var Jn, $s;
function Cm() {
    if ($s)
        return Jn;
    $s = 1;
    var e = jo()
      , t = _m()
      , r = Pm()
      , n = Tm()
      , a = nl()
      , o = "[object Boolean]"
      , i = "[object Date]"
      , s = "[object Map]"
      , u = "[object Number]"
      , c = "[object RegExp]"
      , l = "[object Set]"
      , f = "[object String]"
      , d = "[object Symbol]"
      , h = "[object ArrayBuffer]"
      , m = "[object DataView]"
      , g = "[object Float32Array]"
      , p = "[object Float64Array]"
      , v = "[object Int8Array]"
      , y = "[object Int16Array]"
      , T = "[object Int32Array]"
      , A = "[object Uint8Array]"
      , R = "[object Uint8ClampedArray]"
      , w = "[object Uint16Array]"
      , L = "[object Uint32Array]";
    function S(C, k, B) {
        var F = C.constructor;
        switch (k) {
        case h:
            return e(C);
        case o:
        case i:
            return new F(+C);
        case m:
            return t(C, B);
        case g:
        case p:
        case v:
        case y:
        case T:
        case A:
        case R:
        case w:
        case L:
            return a(C, B);
        case s:
            return new F;
        case u:
        case f:
            return new F(C);
        case c:
            return r(C);
        case l:
            return new F;
        case d:
            return n(C)
        }
    }
    return Jn = S,
    Jn
}
var zn, Zs;
function Am() {
    if (Zs)
        return zn;
    Zs = 1;
    var e = Lo()
      , t = Xt()
      , r = "[object Map]";
    function n(a) {
        return t(a) && e(a) == r
    }
    return zn = n,
    zn
}
var Kn, Xs;
function Rm() {
    if (Xs)
        return Kn;
    Xs = 1;
    var e = Am()
      , t = Io()
      , r = yc()
      , n = r && r.isMap
      , a = n ? t(n) : e;
    return Kn = a,
    Kn
}
var Qn, Js;
function Lm() {
    if (Js)
        return Qn;
    Js = 1;
    var e = Lo()
      , t = Xt()
      , r = "[object Set]";
    function n(a) {
        return t(a) && e(a) == r
    }
    return Qn = n,
    Qn
}
var ea, zs;
function Im() {
    if (zs)
        return ea;
    zs = 1;
    var e = Lm()
      , t = Io()
      , r = yc()
      , n = r && r.isSet
      , a = n ? t(n) : e;
    return ea = a,
    ea
}
var ta, Ks;
function xm() {
    if (Ks)
        return ta;
    Ks = 1;
    var e = hc()
      , t = ll()
      , r = sl()
      , n = gm()
      , a = ym()
      , o = rl()
      , i = Fo()
      , s = wm()
      , u = bm()
      , c = Gf()
      , l = Sm()
      , f = Lo()
      , d = Em()
      , h = Cm()
      , m = al()
      , g = Tt()
      , p = pc()
      , v = Rm()
      , y = ct()
      , T = Im()
      , A = Ao()
      , R = er()
      , w = 1
      , L = 2
      , S = 4
      , C = "[object Arguments]"
      , k = "[object Array]"
      , B = "[object Boolean]"
      , F = "[object Date]"
      , te = "[object Error]"
      , U = "[object Function]"
      , fe = "[object GeneratorFunction]"
      , ee = "[object Map]"
      , se = "[object Number]"
      , oe = "[object Object]"
      , P = "[object RegExp]"
      , b = "[object Set]"
      , E = "[object String]"
      , I = "[object Symbol]"
      , O = "[object WeakMap]"
      , M = "[object ArrayBuffer]"
      , N = "[object DataView]"
      , Y = "[object Float32Array]"
      , J = "[object Float64Array]"
      , ue = "[object Int8Array]"
      , re = "[object Int16Array]"
      , ve = "[object Int32Array]"
      , tr = "[object Uint8Array]"
      , Qe = "[object Uint8ClampedArray]"
      , rr = "[object Uint16Array]"
      , nr = "[object Uint32Array]"
      , H = {};
    H[C] = H[k] = H[M] = H[N] = H[B] = H[F] = H[Y] = H[J] = H[ue] = H[re] = H[ve] = H[ee] = H[se] = H[oe] = H[P] = H[b] = H[E] = H[I] = H[tr] = H[Qe] = H[rr] = H[nr] = !0,
    H[te] = H[U] = H[O] = !1;
    function We(D, Le, Ie, ar, He, we) {
        var K, It = Le & w, Q = Le & L, xe = Le & S;
        if (Ie && (K = He ? Ie(D, ar, He, we) : Ie(D)),
        K !== void 0)
            return K;
        if (!y(D))
            return D;
        var de = g(D);
        if (de) {
            if (K = d(D),
            !It)
                return i(D, K)
        } else {
            var ae = f(D)
              , lt = ae == U || ae == fe;
            if (p(D))
                return o(D, It);
            if (ae == oe || ae == C || lt && !He) {
                if (K = Q || lt ? {} : m(D),
                !It)
                    return Q ? u(D, a(K, D)) : s(D, n(K, D))
            } else {
                if (!H[ae])
                    return He ? D : {};
                K = h(D, ae, It)
            }
        }
        we || (we = new e);
        var xt = we.get(D);
        if (xt)
            return xt;
        we.set(D, K),
        T(D) ? D.forEach(function(_) {
            K.add(We(_, Le, Ie, _, D, we))
        }) : v(D) && D.forEach(function(_, pe) {
            K.set(pe, We(_, Le, Ie, pe, D, we))
        });
        var j = xe ? Q ? l : c : Q ? R : A
          , X = de ? void 0 : j(D);
        return t(X || D, function(_, pe) {
            X && (pe = _,
            _ = D[pe]),
            r(K, pe, We(_, Le, Ie, pe, D, we))
        }),
        K
    }
    return ta = We,
    ta
}
var ra, Qs;
function Mm() {
    if (Qs)
        return ra;
    Qs = 1;
    var e = xm()
      , t = 1
      , r = 4;
    function n(a) {
        return e(a, t | r)
    }
    return ra = n,
    ra
}
var Om = Mm();
const jt = Te(Om);
var ft = {}
  , yt = {};
function km(e, t) {
    Object.keys(yt).forEach(function(r) {
        yt[r]instanceof Function && yt[r](jt(e), jt(t))
    })
}
function Gm(e, t) {
    return {
        onGlobalStateChange: function(n, a) {
            if (!(n instanceof Function)) {
                console.error("[qiankun] callback must be function!");
                return
            }
            if (yt[e] && console.warn("[qiankun] '".concat(e, "' global listener already exists before this, new listener will overwrite it.")),
            yt[e] = n,
            a) {
                var o = jt(ft);
                n(o, o)
            }
        },
        setGlobalState: function() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (n === ft)
                return console.warn("[qiankun] state has not changed！"),
                !1;
            var a = []
              , o = jt(ft);
            return ft = jt(Object.keys(n).reduce(function(i, s) {
                return i.hasOwnProperty(s) ? (a.push(s),
                Object.assign(i, Ze({}, s, n[s]))) : (console.warn("[qiankun] '".concat(s, "' not declared when init state！")),
                i)
            }, ft)),
            a.length === 0 ? (console.warn("[qiankun] state has not changed！"),
            !1) : (km(ft, o),
            !0)
        },
        offGlobalStateChange: function() {
            return delete yt[e],
            !0
        }
    }
}
var Pe;
(function(e) {
    e.Proxy = "Proxy",
    e.Snapshot = "Snapshot",
    e.LegacyProxy = "LegacyProxy"
}
)(Pe || (Pe = {}));
var Dm = mc();
const at = Te(Dm);
var na, eu;
function Fm() {
    if (eu)
        return na;
    eu = 1;
    var e = /\s/;
    function t(r) {
        for (var n = r.length; n-- && e.test(r.charAt(n)); )
            ;
        return n
    }
    return na = t,
    na
}
var aa, tu;
function Nm() {
    if (tu)
        return aa;
    tu = 1;
    var e = Fm()
      , t = /^\s+/;
    function r(n) {
        return n && n.slice(0, e(n) + 1).replace(t, "")
    }
    return aa = r,
    aa
}
var oa, ru;
function gl() {
    if (ru)
        return oa;
    ru = 1;
    var e = dc()
      , t = Xt()
      , r = "[object Symbol]";
    function n(a) {
        return typeof a == "symbol" || t(a) && e(a) == r
    }
    return oa = n,
    oa
}
var ia, nu;
function jm() {
    if (nu)
        return ia;
    nu = 1;
    var e = Nm()
      , t = ct()
      , r = gl()
      , n = NaN
      , a = /^[-+]0x[0-9a-f]+$/i
      , o = /^0b[01]+$/i
      , i = /^0o[0-7]+$/i
      , s = parseInt;
    function u(c) {
        if (typeof c == "number")
            return c;
        if (r(c))
            return n;
        if (t(c)) {
            var l = typeof c.valueOf == "function" ? c.valueOf() : c;
            c = t(l) ? l + "" : l
        }
        if (typeof c != "string")
            return c === 0 ? c : +c;
        c = e(c);
        var f = o.test(c);
        return f || i.test(c) ? s(c.slice(2), f ? 2 : 8) : a.test(c) ? n : +c
    }
    return ia = u,
    ia
}
var sa, au;
function Vm() {
    if (au)
        return sa;
    au = 1;
    var e = jm()
      , t = 1 / 0
      , r = 17976931348623157e292;
    function n(a) {
        if (!a)
            return a === 0 ? a : 0;
        if (a = e(a),
        a === t || a === -1 / 0) {
            var o = a < 0 ? -1 : 1;
            return o * r
        }
        return a === a ? a : 0
    }
    return sa = n,
    sa
}
var ua, ou;
function Wm() {
    if (ou)
        return ua;
    ou = 1;
    var e = Vm();
    function t(r) {
        var n = e(r)
          , a = n % 1;
        return n === n ? a ? n - a : n : 0
    }
    return ua = t,
    ua
}
var ca, iu;
function Hm() {
    if (iu)
        return ca;
    iu = 1;
    var e = Wm()
      , t = "Expected a function";
    function r(n, a) {
        var o;
        if (typeof a != "function")
            throw new TypeError(t);
        return n = e(n),
        function() {
            return --n > 0 && (o = a.apply(this, arguments)),
            n <= 1 && (a = void 0),
            o
        }
    }
    return ca = r,
    ca
}
var la, su;
function qm() {
    if (su)
        return la;
    su = 1;
    var e = Hm();
    function t(r) {
        return e(2, r)
    }
    return la = t,
    la
}
var Bm = qm();
const Um = Te(Bm);
var fa, uu;
function Ym() {
    if (uu)
        return fa;
    uu = 1;
    function e(t, r, n, a) {
        var o = -1
          , i = t == null ? 0 : t.length;
        for (a && i && (n = t[++o]); ++o < i; )
            n = r(n, t[o], o, t);
        return n
    }
    return fa = e,
    fa
}
var da, cu;
function $m() {
    if (cu)
        return da;
    cu = 1;
    function e(t) {
        return function(r) {
            return t?.[r]
        }
    }
    return da = e,
    da
}
var pa, lu;
function Zm() {
    if (lu)
        return pa;
    lu = 1;
    var e = $m()
      , t = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
    }
      , r = e(t);
    return pa = r,
    pa
}
var ma, fu;
function yl() {
    if (fu)
        return ma;
    fu = 1;
    function e(t, r) {
        for (var n = -1, a = t == null ? 0 : t.length, o = Array(a); ++n < a; )
            o[n] = r(t[n], n, t);
        return o
    }
    return ma = e,
    ma
}
var ha, du;
function Xm() {
    if (du)
        return ha;
    du = 1;
    var e = Po()
      , t = yl()
      , r = Tt()
      , n = gl()
      , a = e ? e.prototype : void 0
      , o = a ? a.toString : void 0;
    function i(s) {
        if (typeof s == "string")
            return s;
        if (r(s))
            return t(s, i) + "";
        if (n(s))
            return o ? o.call(s) : "";
        var u = s + "";
        return u == "0" && 1 / s == -1 / 0 ? "-0" : u
    }
    return ha = i,
    ha
}
var va, pu;
function wl() {
    if (pu)
        return va;
    pu = 1;
    var e = Xm();
    function t(r) {
        return r == null ? "" : e(r)
    }
    return va = t,
    va
}
var ga, mu;
function Jm() {
    if (mu)
        return ga;
    mu = 1;
    var e = Zm()
      , t = wl()
      , r = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
      , n = "\\u0300-\\u036f"
      , a = "\\ufe20-\\ufe2f"
      , o = "\\u20d0-\\u20ff"
      , i = n + a + o
      , s = "[" + i + "]"
      , u = RegExp(s, "g");
    function c(l) {
        return l = t(l),
        l && l.replace(r, e).replace(u, "")
    }
    return ga = c,
    ga
}
var ya, hu;
function zm() {
    if (hu)
        return ya;
    hu = 1;
    var e = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function t(r) {
        return r.match(e) || []
    }
    return ya = t,
    ya
}
var wa, vu;
function Km() {
    if (vu)
        return wa;
    vu = 1;
    var e = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    function t(r) {
        return e.test(r)
    }
    return wa = t,
    wa
}
var ba, gu;
function Qm() {
    if (gu)
        return ba;
    gu = 1;
    var e = "\\ud800-\\udfff"
      , t = "\\u0300-\\u036f"
      , r = "\\ufe20-\\ufe2f"
      , n = "\\u20d0-\\u20ff"
      , a = t + r + n
      , o = "\\u2700-\\u27bf"
      , i = "a-z\\xdf-\\xf6\\xf8-\\xff"
      , s = "\\xac\\xb1\\xd7\\xf7"
      , u = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"
      , c = "\\u2000-\\u206f"
      , l = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"
      , f = "A-Z\\xc0-\\xd6\\xd8-\\xde"
      , d = "\\ufe0e\\ufe0f"
      , h = s + u + c + l
      , m = "['’]"
      , g = "[" + h + "]"
      , p = "[" + a + "]"
      , v = "\\d+"
      , y = "[" + o + "]"
      , T = "[" + i + "]"
      , A = "[^" + e + h + v + o + i + f + "]"
      , R = "\\ud83c[\\udffb-\\udfff]"
      , w = "(?:" + p + "|" + R + ")"
      , L = "[^" + e + "]"
      , S = "(?:\\ud83c[\\udde6-\\uddff]){2}"
      , C = "[\\ud800-\\udbff][\\udc00-\\udfff]"
      , k = "[" + f + "]"
      , B = "\\u200d"
      , F = "(?:" + T + "|" + A + ")"
      , te = "(?:" + k + "|" + A + ")"
      , U = "(?:" + m + "(?:d|ll|m|re|s|t|ve))?"
      , fe = "(?:" + m + "(?:D|LL|M|RE|S|T|VE))?"
      , ee = w + "?"
      , se = "[" + d + "]?"
      , oe = "(?:" + B + "(?:" + [L, S, C].join("|") + ")" + se + ee + ")*"
      , P = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])"
      , b = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])"
      , E = se + ee + oe
      , I = "(?:" + [y, S, C].join("|") + ")" + E
      , O = RegExp([k + "?" + T + "+" + U + "(?=" + [g, k, "$"].join("|") + ")", te + "+" + fe + "(?=" + [g, k + F, "$"].join("|") + ")", k + "?" + F + "+" + U, k + "+" + fe, b, P, v, I].join("|"), "g");
    function M(N) {
        return N.match(O) || []
    }
    return ba = M,
    ba
}
var Sa, yu;
function eh() {
    if (yu)
        return Sa;
    yu = 1;
    var e = zm()
      , t = Km()
      , r = wl()
      , n = Qm();
    function a(o, i, s) {
        return o = r(o),
        i = s ? void 0 : i,
        i === void 0 ? t(o) ? n(o) : e(o) : o.match(i) || []
    }
    return Sa = a,
    Sa
}
var Ea, wu;
function th() {
    if (wu)
        return Ea;
    wu = 1;
    var e = Ym()
      , t = Jm()
      , r = eh()
      , n = "['’]"
      , a = RegExp(n, "g");
    function o(i) {
        return function(s) {
            return e(r(t(s).replace(a, "")), i, "")
        }
    }
    return Ea = o,
    Ea
}
var _a, bu;
function rh() {
    if (bu)
        return _a;
    bu = 1;
    var e = th()
      , t = e(function(r, n, a) {
        return r + (a ? "_" : "") + n.toLowerCase()
    });
    return _a = t,
    _a
}
var nh = rh();
const ah = Te(nh);
var oh = "2.10.16";
function ht(e) {
    return Array.isArray(e) ? e : [e]
}
var ih = typeof window.__zone_symbol__setTimeout == "function" ? window.__zone_symbol__setTimeout : function(e) {
    return Promise.resolve().then(e)
}
  , Pa = !1;
function sh(e) {
    Pa || (Pa = !0,
    ih(function() {
        e(),
        Pa = !1
    }))
}
var Ta = new WeakMap;
function uh(e) {
    var t = e.prototype && e.prototype.constructor === e && Object.getOwnPropertyNames(e.prototype).length > 1;
    if (t)
        return !0;
    if (Ta.has(e))
        return Ta.get(e);
    var r = t;
    if (!r) {
        var n = e.toString()
          , a = /^function\b\s[A-Z].*/
          , o = /^class\b/;
        r = a.test(n) || o.test(n)
    }
    return Ta.set(e, r),
    r
}
var Su = new WeakMap;
function bl(e) {
    if (Su.has(e))
        return !0;
    var t = typeof e == "function" && e instanceof Function;
    return t && Su.set(e, t),
    t
}
var Eu = new WeakMap;
function ch(e, t) {
    if (!e || !t)
        return !1;
    var r = Eu.get(e) || {};
    if (r[t])
        return r[t];
    var n = Object.getOwnPropertyDescriptor(e, t)
      , a = !!(n && n.configurable === !1 && (n.writable === !1 || n.get && !n.set));
    return r[t] = a,
    Eu.set(e, r),
    a
}
var Ca = new WeakMap;
function Sl(e) {
    if (Ca.has(e))
        return Ca.get(e);
    var t = e.name.indexOf("bound ") === 0 && !e.hasOwnProperty("prototype");
    return Ca.set(e, t),
    t
}
var lh = Df(function() {
    try {
        return new Function("const { a } = { a: 1 }")(),
        !0
    } catch {
        return !1
    }
})
  , Nt = "qiankun-head";
function fh(e, t) {
    return function(r) {
        var n;
        return r.indexOf("<head>") !== -1 ? n = r.replace("<head>", "<".concat(Nt, ">")).replace("</head>", "</".concat(Nt, ">")) : n = "<".concat(Nt, "></").concat(Nt, ">").concat(r),
        '<div id="'.concat(El(e), '" data-name="').concat(e, '" data-version="').concat(oh, '" data-sandbox-cfg=').concat(JSON.stringify(t), ">").concat(n, "</div>")
    }
}
function El(e) {
    return "__qiankun_microapp_wrapper_for_".concat(ah(e), "__")
}
var le = new Function("return this")()
  , _u = new Function("return document")()
  , dh = Um(function() {
    return le.hasOwnProperty("__app_instance_name_map__") || Object.defineProperty(le, "__app_instance_name_map__", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: {}
    }),
    le.__app_instance_name_map__
})
  , ph = function(t) {
    var r = dh();
    return t in r ? (r[t]++,
    "".concat(t, "_").concat(r[t])) : (le.__app_instance_name_map__[t] = 0,
    t)
};
function Aa(e) {
    var t = e ?? {}
      , r = t.bootstrap
      , n = t.mount
      , a = t.unmount;
    return at(r) && at(n) && at(a)
}
var _l = At(function e() {
    var t = this;
    Ct(this, e),
    this.promise = void 0,
    this.resolve = void 0,
    this.reject = void 0,
    this.promise = new Promise(function(r, n) {
        t.resolve = r,
        t.reject = n
    }
    )
});
function mh(e) {
    return Se(e) !== "object" || e.strictStyleIsolation ? !1 : !!e.experimentalStyleIsolation
}
function hh(e, t) {
    if (t.body.contains(e)) {
        for (var r = "", n, a, o = e; o !== t.documentElement; ) {
            for (n = 0,
            a = o; a; )
                a.nodeType === 1 && a.nodeName === o.nodeName && (n += 1),
                a = a.previousSibling;
            r = "*[name()='".concat(o.nodeName, "'][").concat(n, "]/").concat(r),
            o = o.parentNode
        }
        return r = "/*[name()='".concat(t.documentElement.nodeName, "']/").concat(r),
        r = r.replace(/\/$/, ""),
        r
    }
}
function Pl(e) {
    return typeof e == "string" ? document.querySelector(e) : e
}
function vh(e) {
    if (e) {
        var t = Pl(e);
        if (t)
            return hh(t, document)
    }
}
var Uo = null;
function so() {
    return Uo
}
function gh(e) {
    Uo = e
}
function yh() {
    Uo = null
}
var Pu = new WeakMap;
function Tl(e, t) {
    if (bl(t) && !Sl(t) && !uh(t)) {
        var r = Pu.get(t);
        if (r)
            return r;
        var n = Function.prototype.bind.call(t, e);
        if (Object.getOwnPropertyNames(t).forEach(function(s) {
            n.hasOwnProperty(s) || Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(t, s))
        }),
        t.hasOwnProperty("prototype") && !n.hasOwnProperty("prototype") && Object.defineProperty(n, "prototype", {
            value: t.prototype,
            enumerable: !1,
            writable: !0
        }),
        typeof t.toString == "function") {
            var a = t.hasOwnProperty("toString") && !n.hasOwnProperty("toString")
              , o = n.toString === Function.prototype.toString;
            if (a || o) {
                var i = Object.getOwnPropertyDescriptor(a ? t : Function.prototype, "toString");
                Object.defineProperty(n, "toString", Object.assign({}, i, i?.get ? null : {
                    value: function() {
                        return t.toString()
                    }
                }))
            }
        }
        return Pu.set(t, n),
        n
    }
    return t
}
function wh(e, t) {
    var r = Object.getOwnPropertyDescriptor(e, t);
    return r ? r.configurable : !0
}
var bh = function() {
    function e(t) {
        var r = this
          , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window;
        Ct(this, e),
        this.addedPropsMapInSandbox = new Map,
        this.modifiedPropsOriginalValueMapInSandbox = new Map,
        this.currentUpdatedPropsValueMap = new Map,
        this.name = void 0,
        this.proxy = void 0,
        this.globalContext = void 0,
        this.type = void 0,
        this.sandboxRunning = !0,
        this.latestSetProp = null,
        this.name = t,
        this.globalContext = n,
        this.type = Pe.LegacyProxy;
        var a = this.addedPropsMapInSandbox
          , o = this.modifiedPropsOriginalValueMapInSandbox
          , i = this.currentUpdatedPropsValueMap
          , s = n
          , u = Object.create(null)
          , c = function(d, h, m) {
            var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
            return r.sandboxRunning && (s.hasOwnProperty(d) ? o.has(d) || o.set(d, m) : a.set(d, h),
            i.set(d, h),
            g && (s[d] = h),
            r.latestSetProp = d),
            !0
        }
          , l = new Proxy(u,{
            set: function(d, h, m) {
                var g = s[h];
                return c(h, m, g, !0)
            },
            get: function(d, h) {
                if (h === "top" || h === "parent" || h === "window" || h === "self")
                    return l;
                var m = s[h];
                return Tl(s, m)
            },
            has: function(d, h) {
                return h in s
            },
            getOwnPropertyDescriptor: function(d, h) {
                var m = Object.getOwnPropertyDescriptor(s, h);
                return m && !m.configurable && (m.configurable = !0),
                m
            },
            defineProperty: function(d, h, m) {
                var g = s[h]
                  , p = Reflect.defineProperty(s, h, m)
                  , v = s[h];
                return c(h, v, g, !1),
                p
            }
        });
        this.proxy = l
    }
    return At(e, [{
        key: "setWindowProp",
        value: function(r, n, a) {
            n === void 0 && a ? delete this.globalContext[r] : wh(this.globalContext, r) && Se(r) !== "symbol" && (Object.defineProperty(this.globalContext, r, {
                writable: !0,
                configurable: !0
            }),
            this.globalContext[r] = n)
        }
    }, {
        key: "active",
        value: function() {
            var r = this;
            this.sandboxRunning || this.currentUpdatedPropsValueMap.forEach(function(n, a) {
                return r.setWindowProp(a, n)
            }),
            this.sandboxRunning = !0
        }
    }, {
        key: "inactive",
        value: function() {
            var r = this;
            this.modifiedPropsOriginalValueMapInSandbox.forEach(function(n, a) {
                return r.setWindowProp(a, n)
            }),
            this.addedPropsMapInSandbox.forEach(function(n, a) {
                return r.setWindowProp(a, void 0, !0)
            }),
            this.sandboxRunning = !1
        }
    }, {
        key: "patchDocument",
        value: function() {}
    }]),
    e
}(), Vt;
(function(e) {
    e[e.STYLE = 1] = "STYLE",
    e[e.MEDIA = 4] = "MEDIA",
    e[e.SUPPORTS = 12] = "SUPPORTS",
    e[e.IMPORT = 3] = "IMPORT",
    e[e.FONT_FACE = 5] = "FONT_FACE",
    e[e.PAGE = 6] = "PAGE",
    e[e.KEYFRAMES = 7] = "KEYFRAMES",
    e[e.KEYFRAME = 8] = "KEYFRAME"
}
)(Vt || (Vt = {}));
var ur = function(t) {
    return [].slice.call(t, 0)
}
  , Sh = HTMLBodyElement.prototype.appendChild
  , Cl = function() {
    function e() {
        Ct(this, e),
        this.sheet = void 0,
        this.swapNode = void 0;
        var t = document.createElement("style");
        Sh.call(document.body, t),
        this.swapNode = t,
        this.sheet = t.sheet,
        this.sheet.disabled = !0
    }
    return At(e, [{
        key: "process",
        value: function(r) {
            var n = this
              , a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            if (!(e.ModifiedTag in r)) {
                if (r.textContent !== "") {
                    var o, i = document.createTextNode(r.textContent || "");
                    this.swapNode.appendChild(i);
                    var s = this.swapNode.sheet
                      , u = ur((o = s?.cssRules) !== null && o !== void 0 ? o : [])
                      , c = this.rewrite(u, a);
                    r.textContent = c,
                    this.swapNode.removeChild(i),
                    r[e.ModifiedTag] = !0;
                    return
                }
                var l = new MutationObserver(function(f) {
                    for (var d = 0; d < f.length; d += 1) {
                        var h = f[d];
                        if (e.ModifiedTag in r)
                            return;
                        if (h.type === "childList") {
                            var m, g = r.sheet, p = ur((m = g?.cssRules) !== null && m !== void 0 ? m : []), v = n.rewrite(p, a);
                            r.textContent = v,
                            r[e.ModifiedTag] = !0
                        }
                    }
                }
                );
                l.observe(r, {
                    childList: !0
                })
            }
        }
    }, {
        key: "rewrite",
        value: function(r) {
            var n = this
              , a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
              , o = "";
            return r.forEach(function(i) {
                switch (i.type) {
                case Vt.STYLE:
                    o += n.ruleStyle(i, a);
                    break;
                case Vt.MEDIA:
                    o += n.ruleMedia(i, a);
                    break;
                case Vt.SUPPORTS:
                    o += n.ruleSupport(i, a);
                    break;
                default:
                    typeof i.cssText == "string" && (o += "".concat(i.cssText));
                    break
                }
            }),
            o
        }
    }, {
        key: "ruleStyle",
        value: function(r, n) {
            var a = /((?:[^\w\-.#]|^)(body|html|:root))/gm
              , o = /(html[^\w{[]+)/gm
              , i = r.selectorText.trim()
              , s = "";
            if (typeof r.cssText == "string" && (s = r.cssText),
            i === "html" || i === "body" || i === ":root")
                return s.replace(a, n);
            if (o.test(r.selectorText)) {
                var u = /(html[^\w{]+)(\+|~)/gm;
                u.test(r.selectorText) || (s = s.replace(o, ""))
            }
            return s = s.replace(/^[\s\S]+{/, function(c) {
                return c.replace(/(^|,\n?)([^,]+)/g, function(l, f, d) {
                    return a.test(l) ? l.replace(a, function(h) {
                        var m = [",", "("];
                        return h && m.includes(h[0]) ? "".concat(h[0]).concat(n) : n
                    }) : "".concat(f).concat(n, " ").concat(d.replace(/^ */, ""))
                })
            }),
            s
        }
    }, {
        key: "ruleMedia",
        value: function(r, n) {
            var a = this.rewrite(ur(r.cssRules), n);
            return "@media ".concat(r.conditionText || r.media.mediaText, " {").concat(a, "}")
        }
    }, {
        key: "ruleSupport",
        value: function(r, n) {
            var a = this.rewrite(ur(r.cssRules), n);
            return "@supports ".concat(r.conditionText || r.cssText.split("{")[0], " {").concat(a, "}")
        }
    }]),
    e
}();
Cl.ModifiedTag = "Symbol(style-modified-qiankun)";
var Ra, uo = "data-qiankun", co = function(t, r, n) {
    Ra || (Ra = new Cl),
    r.tagName === "LINK" && console.warn("Feature: sandbox.experimentalStyleIsolation is not support for link element yet.");
    var a = t;
    if (a) {
        var o = (a.tagName || "").toLowerCase();
        if (o && r.tagName === "STYLE") {
            var i = "".concat(o, "[").concat(uo, '="').concat(n, '"]');
            Ra.process(r, i)
        }
    }
}, La, Tu;
function Eh() {
    if (Tu)
        return La;
    Tu = 1;
    function e(t, r, n, a) {
        for (var o = t.length, i = n + (a ? 1 : -1); a ? i-- : ++i < o; )
            if (r(t[i], i, t))
                return i;
        return -1
    }
    return La = e,
    La
}
var Ia, Cu;
function _h() {
    if (Cu)
        return Ia;
    Cu = 1;
    function e(t) {
        return t !== t
    }
    return Ia = e,
    Ia
}
var xa, Au;
function Ph() {
    if (Au)
        return xa;
    Au = 1;
    function e(t, r, n) {
        for (var a = n - 1, o = t.length; ++a < o; )
            if (t[a] === r)
                return a;
        return -1
    }
    return xa = e,
    xa
}
var Ma, Ru;
function Th() {
    if (Ru)
        return Ma;
    Ru = 1;
    var e = Eh()
      , t = _h()
      , r = Ph();
    function n(a, o, i) {
        return o === o ? r(a, o, i) : e(a, t, i)
    }
    return Ma = n,
    Ma
}
var Oa, Lu;
function Ch() {
    if (Lu)
        return Oa;
    Lu = 1;
    var e = Th();
    function t(r, n) {
        var a = r == null ? 0 : r.length;
        return !!a && e(r, n, 0) > -1
    }
    return Oa = t,
    Oa
}
var ka, Iu;
function Ah() {
    if (Iu)
        return ka;
    Iu = 1;
    function e(t, r, n) {
        for (var a = -1, o = t == null ? 0 : t.length; ++a < o; )
            if (n(r, t[a]))
                return !0;
        return !1
    }
    return ka = e,
    ka
}
var Ga, xu;
function Rh() {
    if (xu)
        return Ga;
    xu = 1;
    var e = Ff()
      , t = Ch()
      , r = Ah()
      , n = yl()
      , a = Io()
      , o = Nf()
      , i = 200;
    function s(u, c, l, f) {
        var d = -1
          , h = t
          , m = !0
          , g = u.length
          , p = []
          , v = c.length;
        if (!g)
            return p;
        l && (c = n(c, a(l))),
        f ? (h = r,
        m = !1) : c.length >= i && (h = o,
        m = !1,
        c = new e(c));
        e: for (; ++d < g; ) {
            var y = u[d]
              , T = l == null ? y : l(y);
            if (y = f || y !== 0 ? y : 0,
            m && T === T) {
                for (var A = v; A--; )
                    if (c[A] === T)
                        continue e;
                p.push(y)
            } else
                h(c, T, f) || p.push(y)
        }
        return p
    }
    return Ga = s,
    Ga
}
var Da, Mu;
function Lh() {
    if (Mu)
        return Da;
    Mu = 1;
    var e = Rh()
      , t = ul()
      , r = ol()
      , n = t(function(a, o) {
        return r(a) ? e(a, o) : []
    });
    return Da = n,
    Da
}
var Ih = Lh();
const Al = Te(Ih);
var xh = window.Proxy ? ["Array", "ArrayBuffer", "Boolean", "constructor", "DataView", "Date", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "Error", "escape", "eval", "EvalError", "Float32Array", "Float64Array", "Function", "hasOwnProperty", "Infinity", "Int16Array", "Int32Array", "Int8Array", "isFinite", "isNaN", "isPrototypeOf", "JSON", "Map", "Math", "NaN", "Number", "Object", "parseFloat", "parseInt", "Promise", "propertyIsEnumerable", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "String", "Symbol", "SyntaxError", "toLocaleString", "toString", "TypeError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URIError", "valueOf", "WeakMap", "WeakSet"].filter(function(e) {
    return e in window
}) : []
  , Mh = ["AbortController", "AbortSignal", "addEventListener", "alert", "AnalyserNode", "Animation", "AnimationEffectReadOnly", "AnimationEffectTiming", "AnimationEffectTimingReadOnly", "AnimationEvent", "AnimationPlaybackEvent", "AnimationTimeline", "applicationCache", "ApplicationCache", "ApplicationCacheErrorEvent", "atob", "Attr", "Audio", "AudioBuffer", "AudioBufferSourceNode", "AudioContext", "AudioDestinationNode", "AudioListener", "AudioNode", "AudioParam", "AudioProcessingEvent", "AudioScheduledSourceNode", "AudioWorkletGlobalScope", "AudioWorkletNode", "AudioWorkletProcessor", "BarProp", "BaseAudioContext", "BatteryManager", "BeforeUnloadEvent", "BiquadFilterNode", "Blob", "BlobEvent", "blur", "BroadcastChannel", "btoa", "BudgetService", "ByteLengthQueuingStrategy", "Cache", "caches", "CacheStorage", "cancelAnimationFrame", "cancelIdleCallback", "CanvasCaptureMediaStreamTrack", "CanvasGradient", "CanvasPattern", "CanvasRenderingContext2D", "ChannelMergerNode", "ChannelSplitterNode", "CharacterData", "clearInterval", "clearTimeout", "clientInformation", "ClipboardEvent", "ClipboardItem", "close", "closed", "CloseEvent", "Comment", "CompositionEvent", "CompressionStream", "confirm", "console", "ConstantSourceNode", "ConvolverNode", "CountQueuingStrategy", "createImageBitmap", "Credential", "CredentialsContainer", "crypto", "Crypto", "CryptoKey", "CSS", "CSSConditionRule", "CSSFontFaceRule", "CSSGroupingRule", "CSSImportRule", "CSSKeyframeRule", "CSSKeyframesRule", "CSSMatrixComponent", "CSSMediaRule", "CSSNamespaceRule", "CSSPageRule", "CSSPerspective", "CSSRotate", "CSSRule", "CSSRuleList", "CSSScale", "CSSSkew", "CSSSkewX", "CSSSkewY", "CSSStyleDeclaration", "CSSStyleRule", "CSSStyleSheet", "CSSSupportsRule", "CSSTransformValue", "CSSTranslate", "CustomElementRegistry", "customElements", "CustomEvent", "DataTransfer", "DataTransferItem", "DataTransferItemList", "DecompressionStream", "defaultstatus", "defaultStatus", "DelayNode", "DeviceMotionEvent", "DeviceOrientationEvent", "devicePixelRatio", "dispatchEvent", "document", "Document", "DocumentFragment", "DocumentType", "DOMError", "DOMException", "DOMImplementation", "DOMMatrix", "DOMMatrixReadOnly", "DOMParser", "DOMPoint", "DOMPointReadOnly", "DOMQuad", "DOMRect", "DOMRectList", "DOMRectReadOnly", "DOMStringList", "DOMStringMap", "DOMTokenList", "DragEvent", "DynamicsCompressorNode", "Element", "ErrorEvent", "event", "Event", "EventSource", "EventTarget", "external", "fetch", "File", "FileList", "FileReader", "find", "focus", "FocusEvent", "FontFace", "FontFaceSetLoadEvent", "FormData", "FormDataEvent", "frameElement", "frames", "GainNode", "Gamepad", "GamepadButton", "GamepadEvent", "getComputedStyle", "getSelection", "HashChangeEvent", "Headers", "history", "History", "HTMLAllCollection", "HTMLAnchorElement", "HTMLAreaElement", "HTMLAudioElement", "HTMLBaseElement", "HTMLBodyElement", "HTMLBRElement", "HTMLButtonElement", "HTMLCanvasElement", "HTMLCollection", "HTMLContentElement", "HTMLDataElement", "HTMLDataListElement", "HTMLDetailsElement", "HTMLDialogElement", "HTMLDirectoryElement", "HTMLDivElement", "HTMLDListElement", "HTMLDocument", "HTMLElement", "HTMLEmbedElement", "HTMLFieldSetElement", "HTMLFontElement", "HTMLFormControlsCollection", "HTMLFormElement", "HTMLFrameElement", "HTMLFrameSetElement", "HTMLHeadElement", "HTMLHeadingElement", "HTMLHRElement", "HTMLHtmlElement", "HTMLIFrameElement", "HTMLImageElement", "HTMLInputElement", "HTMLLabelElement", "HTMLLegendElement", "HTMLLIElement", "HTMLLinkElement", "HTMLMapElement", "HTMLMarqueeElement", "HTMLMediaElement", "HTMLMenuElement", "HTMLMetaElement", "HTMLMeterElement", "HTMLModElement", "HTMLObjectElement", "HTMLOListElement", "HTMLOptGroupElement", "HTMLOptionElement", "HTMLOptionsCollection", "HTMLOutputElement", "HTMLParagraphElement", "HTMLParamElement", "HTMLPictureElement", "HTMLPreElement", "HTMLProgressElement", "HTMLQuoteElement", "HTMLScriptElement", "HTMLSelectElement", "HTMLShadowElement", "HTMLSlotElement", "HTMLSourceElement", "HTMLSpanElement", "HTMLStyleElement", "HTMLTableCaptionElement", "HTMLTableCellElement", "HTMLTableColElement", "HTMLTableElement", "HTMLTableRowElement", "HTMLTableSectionElement", "HTMLTemplateElement", "HTMLTextAreaElement", "HTMLTimeElement", "HTMLTitleElement", "HTMLTrackElement", "HTMLUListElement", "HTMLUnknownElement", "HTMLVideoElement", "IDBCursor", "IDBCursorWithValue", "IDBDatabase", "IDBFactory", "IDBIndex", "IDBKeyRange", "IDBObjectStore", "IDBOpenDBRequest", "IDBRequest", "IDBTransaction", "IDBVersionChangeEvent", "IdleDeadline", "IIRFilterNode", "Image", "ImageBitmap", "ImageBitmapRenderingContext", "ImageCapture", "ImageData", "indexedDB", "innerHeight", "innerWidth", "InputEvent", "IntersectionObserver", "IntersectionObserverEntry", "Intl", "isSecureContext", "KeyboardEvent", "KeyframeEffect", "KeyframeEffectReadOnly", "length", "localStorage", "location", "Location", "locationbar", "matchMedia", "MediaDeviceInfo", "MediaDevices", "MediaElementAudioSourceNode", "MediaEncryptedEvent", "MediaError", "MediaKeyMessageEvent", "MediaKeySession", "MediaKeyStatusMap", "MediaKeySystemAccess", "MediaList", "MediaMetadata", "MediaQueryList", "MediaQueryListEvent", "MediaRecorder", "MediaSettingsRange", "MediaSource", "MediaStream", "MediaStreamAudioDestinationNode", "MediaStreamAudioSourceNode", "MediaStreamConstraints", "MediaStreamEvent", "MediaStreamTrack", "MediaStreamTrackEvent", "menubar", "MessageChannel", "MessageEvent", "MessagePort", "MIDIAccess", "MIDIConnectionEvent", "MIDIInput", "MIDIInputMap", "MIDIMessageEvent", "MIDIOutput", "MIDIOutputMap", "MIDIPort", "MimeType", "MimeTypeArray", "MouseEvent", "moveBy", "moveTo", "MutationEvent", "MutationObserver", "MutationRecord", "name", "NamedNodeMap", "NavigationPreloadManager", "navigator", "Navigator", "NavigatorUAData", "NetworkInformation", "Node", "NodeFilter", "NodeIterator", "NodeList", "Notification", "OfflineAudioCompletionEvent", "OfflineAudioContext", "offscreenBuffering", "OffscreenCanvas", "OffscreenCanvasRenderingContext2D", "onabort", "onafterprint", "onanimationend", "onanimationiteration", "onanimationstart", "onappinstalled", "onauxclick", "onbeforeinstallprompt", "onbeforeprint", "onbeforeunload", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "ongotpointercapture", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onlostpointercapture", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onoffline", "ononline", "onpagehide", "onpageshow", "onpause", "onplay", "onplaying", "onpointercancel", "onpointerdown", "onpointerenter", "onpointerleave", "onpointermove", "onpointerout", "onpointerover", "onpointerup", "onpopstate", "onprogress", "onratechange", "onrejectionhandled", "onreset", "onresize", "onscroll", "onsearch", "onseeked", "onseeking", "onselect", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "ontransitionend", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel", "open", "openDatabase", "opener", "Option", "origin", "OscillatorNode", "outerHeight", "outerWidth", "OverconstrainedError", "PageTransitionEvent", "pageXOffset", "pageYOffset", "PannerNode", "parent", "Path2D", "PaymentAddress", "PaymentRequest", "PaymentRequestUpdateEvent", "PaymentResponse", "performance", "Performance", "PerformanceEntry", "PerformanceLongTaskTiming", "PerformanceMark", "PerformanceMeasure", "PerformanceNavigation", "PerformanceNavigationTiming", "PerformanceObserver", "PerformanceObserverEntryList", "PerformancePaintTiming", "PerformanceResourceTiming", "PerformanceTiming", "PeriodicWave", "Permissions", "PermissionStatus", "personalbar", "PhotoCapabilities", "Plugin", "PluginArray", "PointerEvent", "PopStateEvent", "postMessage", "Presentation", "PresentationAvailability", "PresentationConnection", "PresentationConnectionAvailableEvent", "PresentationConnectionCloseEvent", "PresentationConnectionList", "PresentationReceiver", "PresentationRequest", "print", "ProcessingInstruction", "ProgressEvent", "PromiseRejectionEvent", "prompt", "PushManager", "PushSubscription", "PushSubscriptionOptions", "queueMicrotask", "RadioNodeList", "Range", "ReadableByteStreamController", "ReadableStream", "ReadableStreamBYOBReader", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "ReadableStreamDefaultReader", "registerProcessor", "RemotePlayback", "removeEventListener", "reportError", "Request", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "ResizeObserver", "ResizeObserverEntry", "resizeTo", "Response", "RTCCertificate", "RTCDataChannel", "RTCDataChannelEvent", "RTCDtlsTransport", "RTCIceCandidate", "RTCIceGatherer", "RTCIceTransport", "RTCPeerConnection", "RTCPeerConnectionIceEvent", "RTCRtpContributingSource", "RTCRtpReceiver", "RTCRtpSender", "RTCSctpTransport", "RTCSessionDescription", "RTCStatsReport", "RTCTrackEvent", "screen", "Screen", "screenLeft", "ScreenOrientation", "screenTop", "screenX", "screenY", "ScriptProcessorNode", "scroll", "scrollbars", "scrollBy", "scrollTo", "scrollX", "scrollY", "SecurityPolicyViolationEvent", "Selection", "self", "ServiceWorker", "ServiceWorkerContainer", "ServiceWorkerRegistration", "sessionStorage", "setInterval", "setTimeout", "ShadowRoot", "SharedWorker", "SourceBuffer", "SourceBufferList", "speechSynthesis", "SpeechSynthesisEvent", "SpeechSynthesisUtterance", "StaticRange", "status", "statusbar", "StereoPannerNode", "stop", "Storage", "StorageEvent", "StorageManager", "structuredClone", "styleMedia", "StyleSheet", "StyleSheetList", "SubmitEvent", "SubtleCrypto", "SVGAElement", "SVGAngle", "SVGAnimatedAngle", "SVGAnimatedBoolean", "SVGAnimatedEnumeration", "SVGAnimatedInteger", "SVGAnimatedLength", "SVGAnimatedLengthList", "SVGAnimatedNumber", "SVGAnimatedNumberList", "SVGAnimatedPreserveAspectRatio", "SVGAnimatedRect", "SVGAnimatedString", "SVGAnimatedTransformList", "SVGAnimateElement", "SVGAnimateMotionElement", "SVGAnimateTransformElement", "SVGAnimationElement", "SVGCircleElement", "SVGClipPathElement", "SVGComponentTransferFunctionElement", "SVGDefsElement", "SVGDescElement", "SVGDiscardElement", "SVGElement", "SVGEllipseElement", "SVGFEBlendElement", "SVGFEColorMatrixElement", "SVGFEComponentTransferElement", "SVGFECompositeElement", "SVGFEConvolveMatrixElement", "SVGFEDiffuseLightingElement", "SVGFEDisplacementMapElement", "SVGFEDistantLightElement", "SVGFEDropShadowElement", "SVGFEFloodElement", "SVGFEFuncAElement", "SVGFEFuncBElement", "SVGFEFuncGElement", "SVGFEFuncRElement", "SVGFEGaussianBlurElement", "SVGFEImageElement", "SVGFEMergeElement", "SVGFEMergeNodeElement", "SVGFEMorphologyElement", "SVGFEOffsetElement", "SVGFEPointLightElement", "SVGFESpecularLightingElement", "SVGFESpotLightElement", "SVGFETileElement", "SVGFETurbulenceElement", "SVGFilterElement", "SVGForeignObjectElement", "SVGGElement", "SVGGeometryElement", "SVGGradientElement", "SVGGraphicsElement", "SVGImageElement", "SVGLength", "SVGLengthList", "SVGLinearGradientElement", "SVGLineElement", "SVGMarkerElement", "SVGMaskElement", "SVGMatrix", "SVGMetadataElement", "SVGMPathElement", "SVGNumber", "SVGNumberList", "SVGPathElement", "SVGPatternElement", "SVGPoint", "SVGPointList", "SVGPolygonElement", "SVGPolylineElement", "SVGPreserveAspectRatio", "SVGRadialGradientElement", "SVGRect", "SVGRectElement", "SVGScriptElement", "SVGSetElement", "SVGStopElement", "SVGStringList", "SVGStyleElement", "SVGSVGElement", "SVGSwitchElement", "SVGSymbolElement", "SVGTextContentElement", "SVGTextElement", "SVGTextPathElement", "SVGTextPositioningElement", "SVGTitleElement", "SVGTransform", "SVGTransformList", "SVGTSpanElement", "SVGUnitTypes", "SVGUseElement", "SVGViewElement", "TaskAttributionTiming", "Text", "TextDecoder", "TextDecoderStream", "TextEncoder", "TextEncoderStream", "TextEvent", "TextMetrics", "TextTrack", "TextTrackCue", "TextTrackCueList", "TextTrackList", "TimeRanges", "ToggleEvent", "toolbar", "top", "Touch", "TouchEvent", "TouchList", "TrackEvent", "TransformStream", "TransformStreamDefaultController", "TransitionEvent", "TreeWalker", "UIEvent", "URL", "URLSearchParams", "ValidityState", "visualViewport", "VisualViewport", "VTTCue", "WaveShaperNode", "WebAssembly", "WebGL2RenderingContext", "WebGLActiveInfo", "WebGLBuffer", "WebGLContextEvent", "WebGLFramebuffer", "WebGLProgram", "WebGLQuery", "WebGLRenderbuffer", "WebGLRenderingContext", "WebGLSampler", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLSync", "WebGLTexture", "WebGLTransformFeedback", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebSocket", "WheelEvent", "window", "Window", "Worker", "WritableStream", "WritableStreamDefaultController", "WritableStreamDefaultWriter", "XMLDocument", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload", "XMLSerializer", "XPathEvaluator", "XPathExpression", "XPathResult", "XSLTProcessor"];
function Oh(e) {
    return e.filter(function(r) {
        return r in this ? !1 : this[r] = !0
    }, Object.create(null))
}
function Yo(e) {
    return e.reduce(function(t, r) {
        return t[r] = !0,
        t
    }, Object.create(null))
}
var kh = Yo(Mh.concat([]));
function Gh(e) {
    return e in kh
}
var Dh = Object.defineProperty
  , Fh = window.__QIANKUN_DEVELOPMENT__ ? ["__REACT_ERROR_OVERLAY_GLOBAL_HOOK__", "event"] : []
  , Ou = ["System", "__cjsWrapper"].concat(Fh)
  , lo = !1
  , Rl = ["document", "top", "parent", "eval"]
  , Ll = ["window", "self", "globalThis", "hasOwnProperty"].concat([])
  , kr = Array.from(new Set(Al.apply(void 0, [xh.concat(Ll).concat("requestAnimationFrame")].concat(Rl))))
  , Nh = Yo(kr)
  , jh = Yo(Al.apply(void 0, [kr].concat(Je(Rl.concat(Ll)))))
  , ku = new Map([["fetch", !0], ["mockDomAPIInBlackList", !1]]);
function Vh(e, t) {
    var r = new Map
      , n = {};
    return Object.getOwnPropertyNames(e).filter(function(a) {
        var o = Object.getOwnPropertyDescriptor(e, a);
        return !o?.configurable
    }).forEach(function(a) {
        var o = Object.getOwnPropertyDescriptor(e, a);
        if (o) {
            var i = Object.prototype.hasOwnProperty.call(o, "get");
            (a === "top" || a === "parent" || a === "self" || a === "window" || a === "document" && t || lo) && (o.configurable = !0,
            i || (o.writable = !0)),
            i && r.set(a, !0),
            Dh(n, a, Object.freeze(o))
        }
    }),
    {
        fakeWindow: n,
        propertiesWithGetter: r
    }
}
var Fa = 0
  , Wh = function() {
    function e(t) {
        var r = this
          , n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window
          , a = arguments.length > 2 ? arguments[2] : void 0;
        Ct(this, e),
        this.updatedValueSet = new Set,
        this.document = document,
        this.name = void 0,
        this.type = void 0,
        this.proxy = void 0,
        this.sandboxRunning = !0,
        this.latestSetProp = null,
        this.globalWhitelistPrevDescriptor = {},
        this.globalContext = void 0,
        this.name = t,
        this.globalContext = n,
        this.type = Pe.Proxy;
        var o = this.updatedValueSet
          , i = a || {}
          , s = i.speedy
          , u = Vh(n, !!s)
          , c = u.fakeWindow
          , l = u.propertiesWithGetter
          , f = new Map
          , d = new Proxy(c,{
            set: function(g, p, v) {
                if (r.sandboxRunning) {
                    if (r.registerRunningApp(t, d),
                    typeof p == "string" && Ou.indexOf(p) !== -1)
                        r.globalWhitelistPrevDescriptor[p] = Object.getOwnPropertyDescriptor(n, p),
                        n[p] = v;
                    else if (!g.hasOwnProperty(p) && n.hasOwnProperty(p)) {
                        var y = Object.getOwnPropertyDescriptor(n, p)
                          , T = y.writable
                          , A = y.configurable
                          , R = y.enumerable
                          , w = y.set;
                        (T || w) && Object.defineProperty(g, p, {
                            configurable: A,
                            enumerable: R,
                            writable: !0,
                            value: v
                        })
                    } else
                        g[p] = v;
                    return o.add(p),
                    r.latestSetProp = p,
                    !0
                }
                return !0
            },
            get: function(g, p) {
                if (r.registerRunningApp(t, d),
                p === Symbol.unscopables)
                    return jh;
                if (p === "window" || p === "self" || p === "globalThis" || lo)
                    return d;
                if (p === "top" || p === "parent" || lo)
                    return n === n.parent ? d : n[p];
                if (p === "hasOwnProperty")
                    return h;
                if (p === "document")
                    return r.document;
                if (p === "eval")
                    return eval;
                if (p === "string" && Ou.indexOf(p) !== -1)
                    return n[p];
                var v = l.has(p) ? n : p in g ? g : n
                  , y = v[p];
                if (ch(v, p) || !Gh(p) && !ku.has(p))
                    return y;
                var T = ku.get(p) ? le : n;
                return Tl(T, y)
            },
            has: function(g, p) {
                return p in Nh || p in g || p in n
            },
            getOwnPropertyDescriptor: function(g, p) {
                if (g.hasOwnProperty(p)) {
                    var v = Object.getOwnPropertyDescriptor(g, p);
                    return f.set(p, "target"),
                    v
                }
                if (n.hasOwnProperty(p)) {
                    var y = Object.getOwnPropertyDescriptor(n, p);
                    return f.set(p, "globalContext"),
                    y && !y.configurable && (y.configurable = !0),
                    y
                }
            },
            ownKeys: function(g) {
                return Oh(Reflect.ownKeys(n).concat(Reflect.ownKeys(g)))
            },
            defineProperty: function(g, p, v) {
                var y = f.get(p);
                switch (y) {
                case "globalContext":
                    return Reflect.defineProperty(n, p, v);
                default:
                    return Reflect.defineProperty(g, p, v)
                }
            },
            deleteProperty: function(g, p) {
                return r.registerRunningApp(t, d),
                g.hasOwnProperty(p) && (delete g[p],
                o.delete(p)),
                !0
            },
            getPrototypeOf: function() {
                return Reflect.getPrototypeOf(n)
            }
        });
        this.proxy = d,
        Fa++;
        function h(m) {
            return this !== d && this !== null && Se(this) === "object" ? Object.prototype.hasOwnProperty.call(this, m) : c.hasOwnProperty(m) || n.hasOwnProperty(m)
        }
    }
    return At(e, [{
        key: "active",
        value: function() {
            this.sandboxRunning || Fa++,
            this.sandboxRunning = !0
        }
    }, {
        key: "inactive",
        value: function() {
            var r = this;
            --Fa === 0 && Object.keys(this.globalWhitelistPrevDescriptor).forEach(function(n) {
                var a = r.globalWhitelistPrevDescriptor[n];
                a ? Object.defineProperty(r.globalContext, n, a) : delete r.globalContext[n]
            }),
            this.sandboxRunning = !1
        }
    }, {
        key: "patchDocument",
        value: function(r) {
            this.document = r
        }
    }, {
        key: "registerRunningApp",
        value: function(r, n) {
            if (this.sandboxRunning) {
                var a = so();
                (!a || a.name !== r) && gh({
                    name: r,
                    window: n
                }),
                sh(yh)
            }
        }
    }]),
    e
}()
  , $o = "SCRIPT"
  , Sr = "LINK"
  , Zo = "STYLE"
  , Il = Symbol("target")
  , xl = Symbol("refNodeNo")
  , rt = Symbol("qiankun-overwritten")
  , Yt = function(t) {
    return t.querySelector(Nt)
};
function Hh(e) {
    return !e.type || ["text/javascript", "module", "application/javascript", "text/ecmascript", "application/ecmascript"].indexOf(e.type) !== -1
}
function Xo(e) {
    return e?.toUpperCase() === Sr || e?.toUpperCase() === Zo || e?.toUpperCase() === $o
}
function Ml(e) {
    var t, r;
    return !e.textContent && (((t = e.sheet) === null || t === void 0 ? void 0 : t.cssRules.length) || ((r = Vl(e)) === null || r === void 0 ? void 0 : r.length))
}
var fo = new Map;
function $e(e, t, r) {
    var n = fo.get(e) || {
        bootstrappingPatchCount: 0,
        mountingPatchCount: 0
    };
    switch (t) {
    case "increase":
        n["".concat(r, "PatchCount")] += 1;
        break;
    case "decrease":
        n["".concat(r, "PatchCount")] > 0 && (n["".concat(r, "PatchCount")] -= 1);
        break
    }
    fo.set(e, n)
}
function Ol() {
    return Array.from(fo.entries()).every(function(e) {
        var t = Ro(e, 2)
          , r = t[1]
          , n = r.bootstrappingPatchCount
          , a = r.mountingPatchCount;
        return n === 0 && a === 0
    })
}
function kl(e, t) {
    return Object.defineProperties(e, {
        srcElement: {
            get: t
        },
        target: {
            get: t
        }
    }),
    e
}
function Gl(e) {
    var t = new CustomEvent("load")
      , r = kl(t, function() {
        return e
    });
    at(e.onload) ? e.onload(r) : e.dispatchEvent(r)
}
function Dl(e) {
    var t = new CustomEvent("error")
      , r = kl(t, function() {
        return e
    });
    at(e.onerror) ? e.onerror(r) : e.dispatchEvent(r)
}
function qh(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fetch
      , n = document.createElement("style")
      , a = e.href;
    return n.dataset.qiankunHref = a,
    r(a).then(function(o) {
        return o.text()
    }).then(function(o) {
        n.appendChild(document.createTextNode(o)),
        t(n),
        Gl(e)
    }).catch(function() {
        return Dl(e)
    }),
    n
}
var Gu = function(t, r, n) {
    Object.defineProperty(t, r, {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: n
    })
}
  , Fl = new WeakMap
  , po = new WeakMap
  , Nl = new WeakMap;
function jl(e) {
    e.forEach(function(t) {
        t instanceof HTMLStyleElement && Ml(t) && t.sheet && Fl.set(t, t.sheet.cssRules)
    })
}
function Vl(e) {
    return Fl.get(e)
}
function Na(e) {
    function t(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
          , a = r
          , o = e.rawDOMAppendOrInsertBefore
          , i = e.isInvokedByMicroApp
          , s = e.containerConfigGetter
          , u = e.target
          , c = u === void 0 ? "body" : u;
        if (!Xo(a.tagName) || !i(a))
            return o.call(this, a, n);
        if (a.tagName) {
            var l = s(a)
              , f = l.appName
              , d = l.appWrapperGetter
              , h = l.proxy
              , m = l.strictGlobal
              , g = l.speedySandbox
              , p = l.dynamicStyleSheetElements
              , v = l.scopedCSS
              , y = l.excludeAssetFilter;
            switch (a.tagName) {
            case Sr:
            case Zo:
                {
                    var T = r
                      , A = T
                      , R = A.href;
                    if (y && R && y(R))
                        return o.call(this, a, n);
                    Gu(T, Il, c);
                    var w = d();
                    if (v) {
                        var L, S = ((L = a.tagName) === null || L === void 0 ? void 0 : L.toUpperCase()) === Sr && a.rel === "stylesheet" && a.href;
                        if (S) {
                            var C, k = typeof vt.fetch == "function" ? vt.fetch : (C = vt.fetch) === null || C === void 0 ? void 0 : C.fn;
                            T = qh(a, function(Y) {
                                return co(w, Y, f)
                            }, k),
                            Nl.set(a, T)
                        } else
                            co(w, T, f)
                    }
                    var B = c === "head" ? Yt(w) : w, F = B.contains(n) ? n : null, te;
                    F && (te = Array.from(B.childNodes).indexOf(F));
                    var U = o.call(B, T, F);
                    return typeof te == "number" && te !== -1 && Gu(T, xl, te),
                    p.push(T),
                    U
                }
            case $o:
                {
                    var fe = a
                      , ee = fe.src
                      , se = fe.text;
                    if (y && ee && y(ee) || !Hh(a))
                        return o.call(this, a, n);
                    var oe = d()
                      , P = c === "head" ? Yt(oe) : oe
                      , b = vt.fetch
                      , E = P.contains(n) ? n : null
                      , I = g ? kr : [];
                    if (ee) {
                        var O = !1;
                        br(null, [ee], h, {
                            fetch: b,
                            strictGlobal: m,
                            scopedGlobalVariables: I,
                            beforeExec: function() {
                                var J = function() {
                                    var re = Object.getOwnPropertyDescriptor(document, "currentScript");
                                    return !re || re.configurable
                                };
                                J() && (Object.defineProperty(document, "currentScript", {
                                    get: function() {
                                        return a
                                    },
                                    configurable: !0
                                }),
                                O = !0)
                            },
                            success: function() {
                                Gl(a),
                                O && delete document.currentScript,
                                a = null
                            },
                            error: function() {
                                Dl(a),
                                O && delete document.currentScript,
                                a = null
                            }
                        });
                        var M = document.createComment("dynamic script ".concat(ee, " replaced by qiankun"));
                        return po.set(a, M),
                        o.call(P, M, E)
                    }
                    br(null, ["<script>".concat(se, "<\/script>")], h, {
                        strictGlobal: m,
                        scopedGlobalVariables: I
                    });
                    var N = document.createComment("dynamic inline script replaced by qiankun");
                    return po.set(a, N),
                    o.call(P, N, E)
                }
            }
        }
        return o.call(this, a, n)
    }
    return t[rt] = !0,
    t
}
function Du(e, t, r, n) {
    function a(o) {
        var i = o.tagName;
        if (!Xo(i) || !n(o))
            return e.call(this, o);
        try {
            var s, u = t(o), c = u.appWrapperGetter, l = u.dynamicStyleSheetElements;
            switch (i) {
            case Zo:
            case Sr:
                {
                    s = Nl.get(o) || o;
                    var f = l.indexOf(s);
                    f !== -1 && l.splice(f, 1);
                    break
                }
            case $o:
                {
                    s = po.get(o) || o;
                    break
                }
            default:
                s = o
            }
            var d = c()
              , h = r === "head" ? Yt(d) : d;
            if (h.contains(s))
                return e.call(s.parentNode, s)
        } catch (m) {
            console.warn(m)
        }
        return e.call(this, o)
    }
    return a[rt] = !0,
    a
}
function Wl(e, t) {
    var r = HTMLHeadElement.prototype.appendChild
      , n = HTMLBodyElement.prototype.appendChild
      , a = HTMLHeadElement.prototype.insertBefore;
    r[rt] !== !0 && n[rt] !== !0 && a[rt] !== !0 && (HTMLHeadElement.prototype.appendChild = Na({
        rawDOMAppendOrInsertBefore: r,
        containerConfigGetter: t,
        isInvokedByMicroApp: e,
        target: "head"
    }),
    HTMLBodyElement.prototype.appendChild = Na({
        rawDOMAppendOrInsertBefore: n,
        containerConfigGetter: t,
        isInvokedByMicroApp: e,
        target: "body"
    }),
    HTMLHeadElement.prototype.insertBefore = Na({
        rawDOMAppendOrInsertBefore: a,
        containerConfigGetter: t,
        isInvokedByMicroApp: e,
        target: "head"
    }));
    var o = HTMLHeadElement.prototype.removeChild
      , i = HTMLBodyElement.prototype.removeChild;
    return o[rt] !== !0 && i[rt] !== !0 && (HTMLHeadElement.prototype.removeChild = Du(o, t, "head", e),
    HTMLBodyElement.prototype.removeChild = Du(i, t, "body", e)),
    function() {
        HTMLHeadElement.prototype.appendChild = r,
        HTMLHeadElement.prototype.removeChild = o,
        HTMLBodyElement.prototype.appendChild = n,
        HTMLBodyElement.prototype.removeChild = i,
        HTMLHeadElement.prototype.insertBefore = a
    }
}
function Hl(e, t) {
    e.forEach(function(r) {
        var n = t(r);
        if (n && r instanceof HTMLStyleElement && Ml(r)) {
            var a = Vl(r);
            if (a)
                for (var o = 0; o < a.length; o++) {
                    var i = a[o]
                      , s = r.sheet;
                    s.insertRule(i.cssText, s.cssRules.length)
                }
        }
    })
}
function Er(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0
      , a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
      , o = arguments.length > 5 ? arguments[5] : void 0
      , i = r.proxy
      , s = []
      , u = Wl(function() {
        return Yc(window.location).some(function(c) {
            return c === e
        })
    }, function() {
        return {
            appName: e,
            appWrapperGetter: t,
            proxy: i,
            strictGlobal: !1,
            speedySandbox: !1,
            scopedCSS: a,
            dynamicStyleSheetElements: s,
            excludeAssetFilter: o
        }
    });
    return n || $e(e, "increase", "bootstrapping"),
    n && $e(e, "increase", "mounting"),
    function() {
        return n || $e(e, "decrease", "bootstrapping"),
        n && $e(e, "decrease", "mounting"),
        Ol() && u(),
        jl(s),
        function() {
            Hl(s, function(f) {
                var d = t();
                return d.contains(f) ? !1 : (document.head.appendChild.call(d, f),
                !0)
            }),
            n && (s = [])
        }
    }
}
Object.defineProperty(le, "__proxyAttachContainerConfigMap__", {
    enumerable: !1,
    writable: !0
});
Object.defineProperty(le, "__currentLockingSandbox__", {
    enumerable: !1,
    writable: !0,
    configurable: !0
});
var Bh = HTMLHeadElement.prototype.appendChild
  , Uh = HTMLHeadElement.prototype.insertBefore;
le.__proxyAttachContainerConfigMap__ = le.__proxyAttachContainerConfigMap__ || new WeakMap;
var _r = le.__proxyAttachContainerConfigMap__
  , mo = new WeakMap
  , Fu = new WeakMap
  , Oe = new WeakMap;
function Yh(e) {
    var t = e.sandbox
      , r = e.speedy
      , n = function(p, v) {
        var y = _r.get(v);
        y && mo.set(p, y)
    };
    if (r) {
        var a = {}
          , o = new Proxy(document,{
            set: function(p, v, y) {
                switch (v) {
                case "createElement":
                    {
                        a.createElement = y;
                        break
                    }
                case "querySelector":
                    {
                        a.querySelector = y;
                        break
                    }
                default:
                    p[v] = y;
                    break
                }
                return !0
            },
            get: function(p, v, y) {
                switch (v) {
                case "createElement":
                    {
                        var T = a.createElement || p.createElement;
                        return function() {
                            le.__currentLockingSandbox__ || (le.__currentLockingSandbox__ = t.name);
                            for (var L = arguments.length, S = new Array(L), C = 0; C < L; C++)
                                S[C] = arguments[C];
                            var k = T.call.apply(T, [p].concat(S));
                            return le.__currentLockingSandbox__ === t.name && (n(k, t.proxy),
                            delete le.__currentLockingSandbox__),
                            k
                        }
                    }
                case "querySelector":
                    {
                        var A = a.querySelector || p.querySelector;
                        return function() {
                            for (var L = arguments.length, S = new Array(L), C = 0; C < L; C++)
                                S[C] = arguments[C];
                            var k = S[0];
                            switch (k) {
                            case "head":
                                {
                                    var B = _r.get(t.proxy);
                                    if (B) {
                                        var F = Yt(B.appWrapperGetter());
                                        return F.appendChild = HTMLHeadElement.prototype.appendChild,
                                        F.insertBefore = HTMLHeadElement.prototype.insertBefore,
                                        F.removeChild = HTMLHeadElement.prototype.removeChild,
                                        F
                                    }
                                    break
                                }
                            }
                            return A.call.apply(A, [p].concat(S))
                        }
                    }
                }
                var R = p[v];
                return bl(R) && !Sl(R) ? function() {
                    for (var L = arguments.length, S = new Array(L), C = 0; C < L; C++)
                        S[C] = arguments[C];
                    return R.call.apply(R, [p].concat(Je(S.map(function(k) {
                        return k === y ? p : k
                    }))))
                }
                : R
            }
        });
        t.patchDocument(o);
        var i = MutationObserver.prototype.observe;
        if (!Oe.has(i)) {
            var s = function(p, v) {
                var y = p instanceof Document ? _u : p;
                return i.call(this, y, v)
            };
            MutationObserver.prototype.observe = s,
            Oe.set(i, s)
        }
        var u = Node.prototype.compareDocumentPosition;
        Oe.has(u) || (Node.prototype.compareDocumentPosition = function(p) {
            var v = p instanceof Document ? _u : p;
            return u.call(this, v)
        }
        ,
        Oe.set(u, Node.prototype.compareDocumentPosition));
        var c = Object.getOwnPropertyDescriptor(Node.prototype, "parentNode");
        if (c && !Oe.has(c)) {
            var l = c.get
              , f = c.configurable;
            if (l && f) {
                var d = z(z({}, c), {}, {
                    get: function() {
                        var p = l.call(this);
                        if (p instanceof Document) {
                            var v, y = (v = so()) === null || v === void 0 ? void 0 : v.window;
                            if (y)
                                return y.document
                        }
                        return p
                    }
                });
                Object.defineProperty(Node.prototype, "parentNode", d),
                Oe.set(c, d)
            }
        }
        return function() {
            MutationObserver.prototype.observe = i,
            Oe.delete(i),
            Node.prototype.compareDocumentPosition = u,
            Oe.delete(u),
            c && (Object.defineProperty(Node.prototype, "parentNode", c),
            Oe.delete(c))
        }
    }
    var h = Fu.get(document.createElement);
    if (!h) {
        var m = document.createElement;
        Document.prototype.createElement = function(p, v) {
            var y = m.call(this, p, v);
            if (Xo(p)) {
                var T = so() || {}
                  , A = T.window;
                A && n(y, A)
            }
            return y
        }
        ,
        document.hasOwnProperty("createElement") && (document.createElement = Document.prototype.createElement),
        Fu.set(Document.prototype.createElement, m)
    }
    return function() {
        h && (Document.prototype.createElement = h,
        document.createElement = h)
    }
}
function ql(e, t, r) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0
      , a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
      , o = arguments.length > 5 ? arguments[5] : void 0
      , i = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : !1
      , s = r.proxy
      , u = _r.get(s);
    u || (u = {
        appName: e,
        proxy: s,
        appWrapperGetter: t,
        dynamicStyleSheetElements: [],
        strictGlobal: !0,
        speedySandbox: i,
        excludeAssetFilter: o,
        scopedCSS: a
    },
    _r.set(s, u));
    var c = u
      , l = c.dynamicStyleSheetElements
      , f = Wl(function(h) {
        return mo.has(h)
    }, function(h) {
        return mo.get(h)
    })
      , d = Yh({
        sandbox: r,
        speedy: i
    });
    return n || $e(e, "increase", "bootstrapping"),
    n && $e(e, "increase", "mounting"),
    function() {
        return n || $e(e, "decrease", "bootstrapping"),
        n && $e(e, "decrease", "mounting"),
        Ol() && (f(),
        d()),
        jl(l),
        function() {
            Hl(l, function(g) {
                var p = t();
                if (!p.contains(g)) {
                    var v = g[Il] === "head" ? Yt(p) : p
                      , y = g[xl];
                    if (typeof y == "number" && y !== -1) {
                        var T = v.childNodes[y] || null;
                        return Uh.call(v, g, T),
                        !0
                    } else
                        return Bh.call(v, g),
                        !0
                }
                return !1
            })
        }
    }
}
function $h() {
    var e = function(a) {
        return gr
    }
      , t = []
      , r = [];
    return window.g_history && at(window.g_history.listen) && (e = window.g_history.listen.bind(window.g_history),
    window.g_history.listen = function(n) {
        t.push(n);
        var a = e(n);
        return r.push(a),
        function() {
            a(),
            r.splice(r.indexOf(a), 1),
            t.splice(t.indexOf(n), 1)
        }
    }
    ),
    function() {
        var a = gr;
        return t.length && (a = function() {
            t.forEach(function(i) {
                return window.g_history.listen(i)
            })
        }
        ),
        r.forEach(function(o) {
            return o()
        }),
        window.g_history && at(window.g_history.listen) && (window.g_history.listen = e),
        a
    }
}
var Nu = window.setInterval
  , ju = window.clearInterval;
function Zh(e) {
    var t = [];
    return e.clearInterval = function(r) {
        return t = t.filter(function(n) {
            return n !== r
        }),
        ju.call(window, r)
    }
    ,
    e.setInterval = function(r, n) {
        for (var a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++)
            o[i - 2] = arguments[i];
        var s = Nu.apply(void 0, [r, n].concat(o));
        return t = [].concat(Je(t), [s]),
        s
    }
    ,
    function() {
        return t.forEach(function(n) {
            return e.clearInterval(n)
        }),
        e.setInterval = Nu,
        e.clearInterval = ju,
        gr
    }
}
var Vu = window.addEventListener
  , Wu = window.removeEventListener;
function Xh(e) {
    var t = new Map;
    return e.addEventListener = function(r, n, a) {
        var o = t.get(r) || [];
        return t.set(r, [].concat(Je(o), [n])),
        Vu.call(window, r, n, a)
    }
    ,
    e.removeEventListener = function(r, n, a) {
        var o = t.get(r);
        return o && o.length && o.indexOf(n) !== -1 && o.splice(o.indexOf(n), 1),
        Wu.call(window, r, n, a)
    }
    ,
    function() {
        return t.forEach(function(n, a) {
            return Je(n).forEach(function(o) {
                return e.removeEventListener(a, o)
            })
        }),
        e.addEventListener = Vu,
        e.removeEventListener = Wu,
        gr
    }
}
function Jh(e, t, r, n, a, o) {
    var i, s = [function() {
        return Zh(r.proxy)
    }
    , function() {
        return Xh(r.proxy)
    }
    , function() {
        return $h()
    }
    ], u = Ze(Ze(Ze({}, Pe.LegacyProxy, [].concat(s, [function() {
        return Er(e, t, r, !0, n, a)
    }
    ])), Pe.Proxy, [].concat(s, [function() {
        return ql(e, t, r, !0, n, a, o)
    }
    ])), Pe.Snapshot, [].concat(s, [function() {
        return Er(e, t, r, !0, n, a)
    }
    ]));
    return (i = u[r.type]) === null || i === void 0 ? void 0 : i.map(function(c) {
        return c()
    })
}
function zh(e, t, r, n, a, o) {
    var i, s = Ze(Ze(Ze({}, Pe.LegacyProxy, [function() {
        return Er(e, t, r, !1, n, a)
    }
    ]), Pe.Proxy, [function() {
        return ql(e, t, r, !1, n, a, o)
    }
    ]), Pe.Snapshot, [function() {
        return Er(e, t, r, !1, n, a)
    }
    ]);
    return (i = s[r.type]) === null || i === void 0 ? void 0 : i.map(function(u) {
        return u()
    })
}
function Hu(e, t) {
    for (var r in e)
        (e.hasOwnProperty(r) || r === "clearInterval") && t(r)
}
var Kh = function() {
    function e(t) {
        Ct(this, e),
        this.proxy = void 0,
        this.name = void 0,
        this.type = void 0,
        this.sandboxRunning = !0,
        this.windowSnapshot = void 0,
        this.modifyPropsMap = {},
        this.name = t,
        this.proxy = window,
        this.type = Pe.Snapshot
    }
    return At(e, [{
        key: "active",
        value: function() {
            var r = this;
            this.windowSnapshot = {},
            Hu(window, function(n) {
                r.windowSnapshot[n] = window[n]
            }),
            Object.keys(this.modifyPropsMap).forEach(function(n) {
                window[n] = r.modifyPropsMap[n]
            }),
            this.sandboxRunning = !0
        }
    }, {
        key: "inactive",
        value: function() {
            var r = this;
            this.modifyPropsMap = {},
            Hu(window, function(n) {
                window[n] !== r.windowSnapshot[n] && (r.modifyPropsMap[n] = window[n],
                window[n] = r.windowSnapshot[n])
            }),
            this.sandboxRunning = !1
        }
    }, {
        key: "patchDocument",
        value: function() {}
    }]),
    e
}();
function Qh(e, t, r, n, a, o, i) {
    var s;
    window.Proxy ? s = n ? new bh(e,o) : new Wh(e,o,{
        speedy: !!i
    }) : s = new Kh(e);
    var u = zh(e, t, s, r, a, i)
      , c = []
      , l = [];
    return {
        instance: s,
        mount: function() {
            return q(x.mark(function d() {
                var h, m;
                return x.wrap(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            s.active(),
                            h = l.slice(0, u.length),
                            m = l.slice(u.length),
                            h.length && h.forEach(function(v) {
                                return v()
                            }),
                            c = Jh(e, t, s, r, a, i),
                            m.length && m.forEach(function(v) {
                                return v()
                            }),
                            l = [];
                        case 7:
                        case "end":
                            return p.stop()
                        }
                }, d)
            }))()
        },
        unmount: function() {
            return q(x.mark(function d() {
                return x.wrap(function(m) {
                    for (; ; )
                        switch (m.prev = m.next) {
                        case 0:
                            l = [].concat(Je(u), Je(c)).map(function(g) {
                                return g()
                            }),
                            s.inactive();
                        case 2:
                        case "end":
                            return m.stop()
                        }
                }, d)
            }))()
        }
    }
}
var ev = ["singular", "sandbox", "excludeAssetFilter", "globalContext"];
function ho(e, t) {
    if (!e)
        throw t ? new Ut(t) : new Ut("element not existed!")
}
function Ot(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window;
    return e.length ? e.reduce(function(n, a) {
        return n.then(function() {
            return a(t, r)
        })
    }, Promise.resolve()) : Promise.resolve()
}
function cr(e, t) {
    return vo.apply(this, arguments)
}
function vo() {
    return vo = q(x.mark(function e(t, r) {
        return x.wrap(function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    return a.abrupt("return", typeof t == "function" ? t(r) : !!t);
                case 1:
                case "end":
                    return a.stop()
                }
        }, e)
    })),
    vo.apply(this, arguments)
}
var Bl = !!document.head.attachShadow || !!document.head.createShadowRoot;
function qu(e, t, r, n) {
    var a = document.createElement("div");
    a.innerHTML = e;
    var o = a.firstChild;
    if (t)
        if (!Bl)
            console.warn("[qiankun]: As current browser not support shadow dom, your strictStyleIsolation configuration will be ignored!");
        else {
            var i = o.innerHTML;
            o.innerHTML = "";
            var s;
            o.attachShadow ? s = o.attachShadow({
                mode: "open"
            }) : s = o.createShadowRoot(),
            s.innerHTML = i
        }
    if (r) {
        var u = o.getAttribute(uo);
        u || o.setAttribute(uo, n);
        var c = o.querySelectorAll("style") || [];
        kp(c, function(l) {
            co(o, l, n)
        })
    }
    return o
}
function Bu(e, t, r, n, a) {
    return function() {
        if (t) {
            if (r)
                throw new Ut("strictStyleIsolation can not be used with legacy render!");
            if (n)
                throw new Ut("experimentalStyleIsolation can not be used with legacy render!");
            var o = document.getElementById(El(e));
            return ho(o, "Wrapper element for ".concat(e, " is not existed!")),
            o
        }
        var i = a();
        return ho(i, "Wrapper element for ".concat(e, " is not existed!")),
        r && Bl ? i.shadowRoot : i
    }
}
var tv = HTMLElement.prototype.appendChild
  , rv = HTMLElement.prototype.removeChild;
function nv(e, t, r) {
    var n = function(o, i) {
        var s = o.element
          , u = o.loading
          , c = o.container;
        if (r)
            return r({
                loading: u,
                appContent: s ? t : ""
            });
        var l = Pl(c);
        if (i !== "unmounted") {
            var f = function() {
                switch (i) {
                case "loading":
                case "mounting":
                    return "Target container with ".concat(c, " not existed while ").concat(e, " ").concat(i, "!");
                case "mounted":
                    return "Target container with ".concat(c, " not existed after ").concat(e, " ").concat(i, "!");
                default:
                    return "Target container with ".concat(c, " not existed while ").concat(e, " rendering!")
                }
            }();
            ho(l, f)
        }
        if (l && !l.contains(s)) {
            for (; l.firstChild; )
                rv.call(l, l.firstChild);
            s && tv.call(l, s)
        }
    };
    return n
}
function av(e, t, r, n) {
    if (Aa(e))
        return e;
    if (n) {
        var a = r[n];
        if (Aa(a))
            return a
    }
    var o = r[t];
    if (Aa(o))
        return o;
    throw new Ut("You need to export lifecycle functions in ".concat(t, " entry"))
}
var tt;
function ov(e) {
    return go.apply(this, arguments)
}
function go() {
    return go = q(x.mark(function e(t) {
        var r, n, a, o, i, s, u, c, l, f, d, h, m, g, p, v, y, T, A, R, w, L, S, C, k, B, F, te, U, fe, ee, se, oe, P, b, E, I, O, M, N, Y, J, ue, re, ve, tr, Qe, rr, nr, H, We, D, Le, Ie, ar, He, we, K = arguments;
        return x.wrap(function(Q) {
            for (; ; )
                switch (Q.prev = Q.next) {
                case 0:
                    return a = K.length > 1 && K[1] !== void 0 ? K[1] : {},
                    o = K.length > 2 ? K[2] : void 0,
                    i = t.entry,
                    s = t.name,
                    u = ph(s),
                    c = a.singular,
                    l = c === void 0 ? !1 : c,
                    f = a.sandbox,
                    d = f === void 0 ? !0 : f,
                    h = a.excludeAssetFilter,
                    m = a.globalContext,
                    g = m === void 0 ? window : m,
                    p = Gd(a, ev),
                    Q.next = 9,
                    fm(i, p);
                case 9:
                    return v = Q.sent,
                    y = v.template,
                    T = v.execScripts,
                    A = v.assetPublicPath,
                    R = v.getExternalScripts,
                    Q.next = 16,
                    R();
                case 16:
                    return Q.next = 18,
                    cr(l, t);
                case 18:
                    if (!Q.sent) {
                        Q.next = 21;
                        break
                    }
                    return Q.next = 21,
                    tt && tt.promise;
                case 21:
                    return w = fh(u, d)(y),
                    L = Se(d) === "object" && !!d.strictStyleIsolation,
                    S = mh(d),
                    C = qu(w, L, S, u),
                    k = "container"in t ? t.container : void 0,
                    B = "render"in t ? t.render : void 0,
                    F = nv(u, w, B),
                    F({
                        element: C,
                        loading: !0,
                        container: k
                    }, "loading"),
                    te = Bu(u, !!B, L, S, function() {
                        return C
                    }),
                    U = g,
                    fe = function() {
                        return Promise.resolve()
                    }
                    ,
                    ee = function() {
                        return Promise.resolve()
                    }
                    ,
                    se = Se(d) === "object" && !!d.loose,
                    oe = Se(d) === "object" ? d.speedy !== !1 : !0,
                    d && (P = Qh(u, te, S, se, h, U, oe),
                    U = P.instance.proxy,
                    fe = P.mount,
                    ee = P.unmount),
                    b = cl({}, mm(U, A), o, function(xe, de) {
                        return Kc(xe ?? [], de ?? [])
                    }),
                    E = b.beforeUnmount,
                    I = E === void 0 ? [] : E,
                    O = b.afterUnmount,
                    M = O === void 0 ? [] : O,
                    N = b.afterMount,
                    Y = N === void 0 ? [] : N,
                    J = b.beforeMount,
                    ue = J === void 0 ? [] : J,
                    re = b.beforeLoad,
                    ve = re === void 0 ? [] : re,
                    Q.next = 40,
                    Ot(ht(ve), t, U);
                case 40:
                    return Q.next = 42,
                    T(U, d && !se, {
                        scopedGlobalVariables: oe ? kr : []
                    });
                case 42:
                    return tr = Q.sent,
                    Qe = av(tr, s, U, (r = P) === null || r === void 0 || (n = r.instance) === null || n === void 0 ? void 0 : n.latestSetProp),
                    rr = Qe.bootstrap,
                    nr = Qe.mount,
                    H = Qe.unmount,
                    We = Qe.update,
                    D = Gm(u),
                    Le = D.onGlobalStateChange,
                    Ie = D.setGlobalState,
                    ar = D.offGlobalStateChange,
                    He = function(de) {
                        return C = de
                    }
                    ,
                    we = function() {
                        var de = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k, ae, lt, xt = {
                            name: u,
                            bootstrap: rr,
                            mount: [q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.next = 2,
                                            cr(l, t);
                                        case 2:
                                            if (_.t0 = _.sent,
                                            !_.t0) {
                                                _.next = 5;
                                                break
                                            }
                                            _.t0 = tt;
                                        case 5:
                                            if (!_.t0) {
                                                _.next = 7;
                                                break
                                            }
                                            return _.abrupt("return", tt.promise);
                                        case 7:
                                            return _.abrupt("return", void 0);
                                        case 8:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            ae = C,
                                            lt = Bu(u, !!B, L, S, function() {
                                                return ae
                                            });
                                        case 2:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                var X;
                                return x.wrap(function(pe) {
                                    for (; ; )
                                        switch (pe.prev = pe.next) {
                                        case 0:
                                            X = de !== k,
                                            (X || !ae) && (ae = qu(w, L, S, u),
                                            He(ae)),
                                            F({
                                                element: ae,
                                                loading: !0,
                                                container: de
                                            }, "mounting");
                                        case 3:
                                        case "end":
                                            return pe.stop()
                                        }
                                }, j)
                            })), fe, q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.abrupt("return", Ot(ht(ue), t, U));
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), function() {
                                var j = q(x.mark(function X(_) {
                                    return x.wrap(function(Me) {
                                        for (; ; )
                                            switch (Me.prev = Me.next) {
                                            case 0:
                                                return Me.abrupt("return", nr(z(z({}, _), {}, {
                                                    container: lt(),
                                                    setGlobalState: Ie,
                                                    onGlobalStateChange: Le
                                                })));
                                            case 1:
                                            case "end":
                                                return Me.stop()
                                            }
                                    }, X)
                                }));
                                return function(X) {
                                    return j.apply(this, arguments)
                                }
                            }(), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.abrupt("return", F({
                                                element: ae,
                                                loading: !1,
                                                container: de
                                            }, "mounted"));
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.abrupt("return", Ot(ht(Y), t, U));
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.next = 2,
                                            cr(l, t);
                                        case 2:
                                            if (!_.sent) {
                                                _.next = 4;
                                                break
                                            }
                                            tt = new _l;
                                        case 4:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            }))],
                            unmount: [q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.abrupt("return", Ot(ht(I), t, U));
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), function() {
                                var j = q(x.mark(function X(_) {
                                    return x.wrap(function(Me) {
                                        for (; ; )
                                            switch (Me.prev = Me.next) {
                                            case 0:
                                                return Me.abrupt("return", H(z(z({}, _), {}, {
                                                    container: lt()
                                                })));
                                            case 1:
                                            case "end":
                                                return Me.stop()
                                            }
                                    }, X)
                                }));
                                return function(X) {
                                    return j.apply(this, arguments)
                                }
                            }(), ee, q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.abrupt("return", Ot(ht(M), t, U));
                                        case 1:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            F({
                                                element: null,
                                                loading: !1,
                                                container: de
                                            }, "unmounted"),
                                            ar(u),
                                            ae = null,
                                            He(ae);
                                        case 4:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            })), q(x.mark(function j() {
                                return x.wrap(function(_) {
                                    for (; ; )
                                        switch (_.prev = _.next) {
                                        case 0:
                                            return _.next = 2,
                                            cr(l, t);
                                        case 2:
                                            if (_.t0 = _.sent,
                                            !_.t0) {
                                                _.next = 5;
                                                break
                                            }
                                            _.t0 = tt;
                                        case 5:
                                            if (!_.t0) {
                                                _.next = 7;
                                                break
                                            }
                                            tt.resolve();
                                        case 7:
                                        case "end":
                                            return _.stop()
                                        }
                                }, j)
                            }))]
                        };
                        return typeof We == "function" && (xt.update = We),
                        xt
                    }
                    ,
                    Q.abrupt("return", we);
                case 48:
                case "end":
                    return Q.stop()
                }
        }, e)
    })),
    go.apply(this, arguments)
}
var vt = {}
  , iv = !0;
new _l;
var sv = function(t) {
    var r = t.sandbox
      , n = r === void 0 ? !0 : r
      , a = t.singular;
    if (n) {
        if (!window.Proxy)
            return console.warn("[qiankun] Missing window.Proxy, proxySandbox will degenerate into snapshotSandbox"),
            a === !1 && console.warn("[qiankun] Setting singular as false may cause unexpected behavior while your browser not support window.Proxy"),
            z(z({}, t), {}, {
                sandbox: Se(n) === "object" ? z(z({}, n), {}, {
                    loose: !0
                }) : {
                    loose: !0
                }
            });
        if (!lh() && (n === !0 || Se(n) === "object" && n.speedy !== !1))
            return console.warn("[qiankun] Speedy mode will turn off as const destruct assignment not supported in current browser!"),
            z(z({}, t), {}, {
                sandbox: Se(n) === "object" ? z(z({}, n), {}, {
                    speedy: !1
                }) : {
                    speedy: !1
                }
            })
    }
    return t
}
  , lr = new Map
  , ja = new Map;
function uv(e, t, r) {
    var n = e.props, a = e.name, o = "container"in e ? e.container : void 0, i = vh(o), s = "".concat(a, "-").concat(i), u, c = function(g) {
        var p = g;
        if (o && i) {
            var v = ja.get(s);
            if (v?.length) {
                var y = [q(x.mark(function T() {
                    var A, R;
                    return x.wrap(function(L) {
                        for (; ; )
                            switch (L.prev = L.next) {
                            case 0:
                                return A = v.slice(0, v.indexOf(u)),
                                R = A.filter(function(S) {
                                    return S.getStatus() !== "LOAD_ERROR" && S.getStatus() !== "SKIP_BECAUSE_BROKEN"
                                }),
                                L.next = 4,
                                Promise.all(R.map(function(S) {
                                    return S.unmountPromise
                                }));
                            case 4:
                            case "end":
                                return L.stop()
                            }
                    }, T)
                }))].concat(Je(ht(p.mount)));
                p = z(z({}, g), {}, {
                    mount: y
                })
            }
        }
        return z(z({}, p), {}, {
            bootstrap: function() {
                return Promise.resolve()
            }
        })
    }, l = function() {
        var m = q(x.mark(function g() {
            var p, v, y, T, A;
            return x.wrap(function(w) {
                for (; ; )
                    switch (w.prev = w.next) {
                    case 0:
                        if (p = sv(t ?? z(z({}, vt), {}, {
                            singular: !1
                        })),
                        v = p.$$cacheLifecycleByAppName,
                        !o) {
                            w.next = 21;
                            break
                        }
                        if (!v) {
                            w.next = 12;
                            break
                        }
                        if (y = lr.get(a),
                        !y) {
                            w.next = 12;
                            break
                        }
                        return w.t0 = c,
                        w.next = 9,
                        y;
                    case 9:
                        return w.t1 = w.sent,
                        w.t2 = (0,
                        w.t1)(o),
                        w.abrupt("return", (0,
                        w.t0)(w.t2));
                    case 12:
                        if (!i) {
                            w.next = 21;
                            break
                        }
                        if (T = lr.get(s),
                        !T) {
                            w.next = 21;
                            break
                        }
                        return w.t3 = c,
                        w.next = 18,
                        T;
                    case 18:
                        return w.t4 = w.sent,
                        w.t5 = (0,
                        w.t4)(o),
                        w.abrupt("return", (0,
                        w.t3)(w.t5));
                    case 21:
                        return A = ov(e, p, r),
                        o && (v ? lr.set(a, A) : i && lr.set(s, A)),
                        w.next = 25,
                        A;
                    case 25:
                        return w.t6 = w.sent,
                        w.abrupt("return", (0,
                        w.t6)(o));
                    case 27:
                    case "end":
                        return w.stop()
                    }
            }, g)
        }));
        return function() {
            return m.apply(this, arguments)
        }
    }();
    if (t?.autoStart !== !1) {
        var f;
        Jc({
            urlRerouteOnly: (f = vt.urlRerouteOnly) !== null && f !== void 0 ? f : iv
        })
    }
    if (u = Dc(l, z({
        domElement: document.createElement("div")
    }, n)),
    o && i) {
        var d = ja.get(s) || [];
        d.push(u),
        ja.set(s, d);
        var h = function() {
            var g = d.indexOf(u);
            d.splice(g, 1),
            u = null
        };
        u.unmountPromise.then(h).catch(h)
    }
    return u
}
const yo = "friday-app"
  , cv = he.SHD_G123_CUSTOMER_SVC
  , Ul = "customer-service-close";
let gt, Ge, Yl;
async function lv() {
    const e = Dr();
    if (e !== "MOUNTED") {
        if (e === "LOADING_SOURCE_CODE" || e === "BOOTSTRAPPING" || e === "MOUNTING") {
            Gr();
            return
        }
        try {
            gt = uv({
                name: "g123-friday",
                entry: cv,
                container: `#${yo}`,
                props: Yl
            }, {
                sandbox: {
                    experimentalStyleIsolation: !0
                }
            }),
            Ge.style.display = "block",
            await jr(gt.loadPromise),
            console.log("[CS_APP]: fridayapp loaded successfully."),
            await jr(gt.bootstrapPromise),
            console.log("[CS_APP]: fridayapp bootstrapped successfully."),
            await jr(gt.mountPromise),
            console.log("[CS_APP]: fridayapp mounted successfully.")
        } catch (t) {
            gv("[CS_APP]: failed to load or mount fridayapp", t)
        }
    }
}
const fv = e => {
    e.addEventListener("click", t => {
        t.stopPropagation(),
        t.target === e.querySelector("#jarvis") && Gr()
    }
    )
}
;
function dv() {
    document.getElementById(yo)?.remove(),
    Ge = document.createElement("div"),
    Ge.setAttribute("id", yo),
    Ge.setAttribute("class", "CustomerSupportBox"),
    Ge.style.display = "none",
    document.body.append(Ge),
    fv(Ge)
}
const Gr = () => {
    Ge && (Ge.style.display = "none",
    gt?.unmount())
}
  , pv = e => {
    if (!e) {
        console.error("[CS_APP]: csPropsData is empty");
        return
    }
    Yl = e,
    lv()
}
;
function mv(e) {
    return typeof e == "object" && e?.data?.type === Ul
}
function hv(e) {
    if (!mv(e))
        return;
    const {data: t} = e;
    t.type === Ul && Gr()
}
const vv = Pt(async () => {
    console.log("[CS_APP]: init fridayapp"),
    dv(),
    window.addEventListener("message", hv, !1)
}
)
  , Dr = () => gt?.getStatus();
function gv(e, t) {
    Gr(),
    console.error(e, t),
    window.Sentry?.captureException(t)
}
const ky = Object.freeze(Object.defineProperty({
    __proto__: null,
    getFridayAppStatus: Dr,
    initFridayApp: vv,
    showFridayApp: pv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , yv = async () => {
    const t = await Tr().currentSession();
    if (!t)
        throw new Error("Session is unavailable");
    const {code: r} = t
      , n = new URLSearchParams({
        appid: window.option.appId,
        code: r
    }).toString();
    return `${he.SHD_G123_WEB_SOCKET_ENDPOINT}?${n}`
}
  , ke = {
    socket: null,
    interval: void 0,
    currConnId: ""
};
function wv(e) {
    return typeof e == "object" && e !== null && "message_type"in e
}
const Xe = {
    lastConfirmedAt: Date.now(),
    interval: void 0
};
function Jo(e, t) {
    const r = Date.now();
    (t || r - Xe.lastConfirmedAt >= 60 * 1e3) && (Xe.lastConfirmedAt = r,
    W.dispatch(jf(e)))
}
function bv() {
    Xe.interval || (Xe.interval = setInterval( () => {
        Jo("websocket_disconnected", !1)
    }
    , 10 * 1e3))
}
function Sv() {
    Xe.interval && (clearInterval(Xe.interval),
    Xe.interval = void 0)
}
const $l = async () => {
    const e = await yv();
    ke.socket && (ke.socket.close(),
    ke.socket = null),
    ke.socket = new WebSocket(e);
    const {socket: t} = ke;
    t && (t.addEventListener("open", () => {
        console.log("websocket open"),
        Sv()
    }
    ),
    t.addEventListener("close", () => {
        console.log("websocket close"),
        bv(),
        window.setTimeout( () => {
            $l()
        }
        , 10 * 1e3)
    }
    ),
    t.addEventListener("error", () => {
        console.log("websocket error"),
        t.close()
    }
    ),
    t.addEventListener("message", r => {
        if (r.data === "+h") {
            Xe.lastConfirmedAt = Date.now();
            return
        }
        console.log("websocket message: ", r.data);
        try {
            const n = JSON.parse(r.data);
            if (n === null || !wv(n)) {
                console.error("[websocket] message is not a CourierEvent", r.data);
                return
            }
            if (n.message_type === "CONN_INFO") {
                const {conn_id: a, timeout: o} = n.data;
                ke.currConnId = a,
                ke.interval && window.clearInterval(ke.interval),
                ke.interval = window.setInterval( () => {
                    t.send("h")
                }
                , o * 1e3),
                Jo("websocket_connected", !1);
                return
            }
            if (n.message_type === "INMAIL")
                return;
            if (n.message_type === "CS_REPLIED") {
                if (Dr() === "MOUNTED")
                    return;
                W.dispatch(wc({
                    isUnread: !0
                }));
                return
            }
            if (n.message_type === "AUTH_EVENT") {
                const a = JSON.parse(n.data);
                if (!a || typeof a != "object") {
                    console.error("[websocket] Invalid message", n);
                    return
                }
                if (a.targetAppCode && a.targetAppCode !== window.option.appId)
                    return;
                window.postMessage(a, window.location.origin);
                return
            }
            if (n.message_type === "AUXIN") {
                const a = {
                    type: "auxin_ws_msg",
                    data: n.data
                };
                window.postMessage(a, window.location.origin);
                return
            }
            if (n.message_type === "PUBLISHER_EVENT") {
                const a = JSON.parse(n.data);
                if (!a || typeof a != "object") {
                    console.error("[websocket] Invalid message", n);
                    return
                }
                window.postMessage(a, window.location.origin);
                return
            }
        } catch (n) {
            console.log("websocket message error: ", n)
        }
    }
    ))
}
  , Ev = async () => {
    try {
        await $l()
    } catch (e) {
        console.error("[websocket] init failed", e)
    }
    setTimeout( () => {
        Jo("force_check", !0)
    }
    )
}
;
window.addCSMessage = () => {
    Dr() !== "MOUNTED" && W.dispatch(wc({
        isUnread: !0
    }))
}
;
const Zl = {
    platform: !0,
    pwa: !0,
    psp: !0,
    auxin: !0,
    gameErrorTrace: !0,
    cs: !0,
    jobConsole: !0,
    vconsole: !0,
    mainApp: !0,
    gtm: !0,
    websocket: !0,
    favorite: !0
}
  , _v = "platform";
function Pv(e) {
    const t = {};
    try {
        const n = (new URL(e).searchParams.get("disableFeatures") || "").split(",").map(a => a.trim()).filter(Boolean);
        if (n.length < 1)
            return t;
        if (n.indexOf(_v) !== -1)
            for (const a of Object.keys(Zl))
                t[a] = !1;
        else
            for (const a of n)
                t[a] = !1
    } catch (r) {
        console.log("getStorage error", r)
    }
    return t
}
const Tv = typeof window < "u" && window.location ? Pv(window.location.href) : {}
  , mr = {
    ...Zl,
    ...Tv
};
var wo = function() {
    return wo = Object.assign || function(t) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
            r = arguments[n];
            for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
    }
    ,
    wo.apply(this, arguments)
};
function je(e, t, r, n) {
    function a(o) {
        return o instanceof r ? o : new r(function(i) {
            i(o)
        }
        )
    }
    return new (r || (r = Promise))(function(o, i) {
        function s(l) {
            try {
                c(n.next(l))
            } catch (f) {
                i(f)
            }
        }
        function u(l) {
            try {
                c(n.throw(l))
            } catch (f) {
                i(f)
            }
        }
        function c(l) {
            l.done ? o(l.value) : a(l.value).then(s, u)
        }
        c((n = n.apply(e, t || [])).next())
    }
    )
}
function Ve(e, t) {
    var r = {
        label: 0,
        sent: function() {
            if (o[0] & 1)
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    }, n, a, o, i = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
    return i.next = s(0),
    i.throw = s(1),
    i.return = s(2),
    typeof Symbol == "function" && (i[Symbol.iterator] = function() {
        return this
    }
    ),
    i;
    function s(c) {
        return function(l) {
            return u([c, l])
        }
    }
    function u(c) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; i && (i = 0,
        c[0] && (r = 0)),
        r; )
            try {
                if (n = 1,
                a && (o = c[0] & 2 ? a.return : c[0] ? a.throw || ((o = a.return) && o.call(a),
                0) : a.next) && !(o = o.call(a, c[1])).done)
                    return o;
                switch (a = 0,
                o && (c = [c[0] & 2, o.value]),
                c[0]) {
                case 0:
                case 1:
                    o = c;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    a = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (o = r.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
                        r.label = c[1];
                        break
                    }
                    if (c[0] === 6 && r.label < o[1]) {
                        r.label = o[1],
                        o = c;
                        break
                    }
                    if (o && r.label < o[2]) {
                        r.label = o[2],
                        r.ops.push(c);
                        break
                    }
                    o[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                c = t.call(e, r)
            } catch (l) {
                c = [6, l],
                a = 0
            } finally {
                n = o = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
function Xl(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, a = t.length, o; n < a; n++)
            (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)),
            o[n] = t[n]);
    return e.concat(o || Array.prototype.slice.call(t))
}
var Jl = "3.4.2";
function $t(e, t) {
    return new Promise(function(r) {
        return setTimeout(r, e, t)
    }
    )
}
function Cv(e, t) {
    t === void 0 && (t = 1 / 0);
    var r = window.requestIdleCallback;
    return r ? new Promise(function(n) {
        return r.call(window, function() {
            return n()
        }, {
            timeout: t
        })
    }
    ) : $t(Math.min(e, t))
}
function zl(e) {
    return !!e && typeof e.then == "function"
}
function Uu(e, t) {
    try {
        var r = e();
        zl(r) ? r.then(function(n) {
            return t(!0, n)
        }, function(n) {
            return t(!1, n)
        }) : t(!0, r)
    } catch (n) {
        t(!1, n)
    }
}
function Yu(e, t, r) {
    return r === void 0 && (r = 16),
    je(this, void 0, void 0, function() {
        var n, a, o, i;
        return Ve(this, function(s) {
            switch (s.label) {
            case 0:
                n = Array(e.length),
                a = Date.now(),
                o = 0,
                s.label = 1;
            case 1:
                return o < e.length ? (n[o] = t(e[o], o),
                i = Date.now(),
                i >= a + r ? (a = i,
                [4, $t(0)]) : [3, 3]) : [3, 4];
            case 2:
                s.sent(),
                s.label = 3;
            case 3:
                return ++o,
                [3, 1];
            case 4:
                return [2, n]
            }
        })
    })
}
function Zt(e) {
    e.then(void 0, function() {})
}
function Be(e, t) {
    e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535],
    t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
    var r = [0, 0, 0, 0];
    return r[3] += e[3] + t[3],
    r[2] += r[3] >>> 16,
    r[3] &= 65535,
    r[2] += e[2] + t[2],
    r[1] += r[2] >>> 16,
    r[2] &= 65535,
    r[1] += e[1] + t[1],
    r[0] += r[1] >>> 16,
    r[1] &= 65535,
    r[0] += e[0] + t[0],
    r[0] &= 65535,
    [r[0] << 16 | r[1], r[2] << 16 | r[3]]
}
function ge(e, t) {
    e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535],
    t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
    var r = [0, 0, 0, 0];
    return r[3] += e[3] * t[3],
    r[2] += r[3] >>> 16,
    r[3] &= 65535,
    r[2] += e[2] * t[3],
    r[1] += r[2] >>> 16,
    r[2] &= 65535,
    r[2] += e[3] * t[2],
    r[1] += r[2] >>> 16,
    r[2] &= 65535,
    r[1] += e[1] * t[3],
    r[0] += r[1] >>> 16,
    r[1] &= 65535,
    r[1] += e[2] * t[2],
    r[0] += r[1] >>> 16,
    r[1] &= 65535,
    r[1] += e[3] * t[1],
    r[0] += r[1] >>> 16,
    r[1] &= 65535,
    r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
    r[0] &= 65535,
    [r[0] << 16 | r[1], r[2] << 16 | r[3]]
}
function dt(e, t) {
    return t %= 64,
    t === 32 ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
    [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
}
function me(e, t) {
    return t %= 64,
    t === 0 ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
}
function Z(e, t) {
    return [e[0] ^ t[0], e[1] ^ t[1]]
}
function $u(e) {
    return e = Z(e, [0, e[0] >>> 1]),
    e = ge(e, [4283543511, 3981806797]),
    e = Z(e, [0, e[0] >>> 1]),
    e = ge(e, [3301882366, 444984403]),
    e = Z(e, [0, e[0] >>> 1]),
    e
}
function Av(e, t) {
    e = e || "",
    t = t || 0;
    var r = e.length % 16, n = e.length - r, a = [0, t], o = [0, t], i = [0, 0], s = [0, 0], u = [2277735313, 289559509], c = [1291169091, 658871167], l;
    for (l = 0; l < n; l = l + 16)
        i = [e.charCodeAt(l + 4) & 255 | (e.charCodeAt(l + 5) & 255) << 8 | (e.charCodeAt(l + 6) & 255) << 16 | (e.charCodeAt(l + 7) & 255) << 24, e.charCodeAt(l) & 255 | (e.charCodeAt(l + 1) & 255) << 8 | (e.charCodeAt(l + 2) & 255) << 16 | (e.charCodeAt(l + 3) & 255) << 24],
        s = [e.charCodeAt(l + 12) & 255 | (e.charCodeAt(l + 13) & 255) << 8 | (e.charCodeAt(l + 14) & 255) << 16 | (e.charCodeAt(l + 15) & 255) << 24, e.charCodeAt(l + 8) & 255 | (e.charCodeAt(l + 9) & 255) << 8 | (e.charCodeAt(l + 10) & 255) << 16 | (e.charCodeAt(l + 11) & 255) << 24],
        i = ge(i, u),
        i = dt(i, 31),
        i = ge(i, c),
        a = Z(a, i),
        a = dt(a, 27),
        a = Be(a, o),
        a = Be(ge(a, [0, 5]), [0, 1390208809]),
        s = ge(s, c),
        s = dt(s, 33),
        s = ge(s, u),
        o = Z(o, s),
        o = dt(o, 31),
        o = Be(o, a),
        o = Be(ge(o, [0, 5]), [0, 944331445]);
    switch (i = [0, 0],
    s = [0, 0],
    r) {
    case 15:
        s = Z(s, me([0, e.charCodeAt(l + 14)], 48));
    case 14:
        s = Z(s, me([0, e.charCodeAt(l + 13)], 40));
    case 13:
        s = Z(s, me([0, e.charCodeAt(l + 12)], 32));
    case 12:
        s = Z(s, me([0, e.charCodeAt(l + 11)], 24));
    case 11:
        s = Z(s, me([0, e.charCodeAt(l + 10)], 16));
    case 10:
        s = Z(s, me([0, e.charCodeAt(l + 9)], 8));
    case 9:
        s = Z(s, [0, e.charCodeAt(l + 8)]),
        s = ge(s, c),
        s = dt(s, 33),
        s = ge(s, u),
        o = Z(o, s);
    case 8:
        i = Z(i, me([0, e.charCodeAt(l + 7)], 56));
    case 7:
        i = Z(i, me([0, e.charCodeAt(l + 6)], 48));
    case 6:
        i = Z(i, me([0, e.charCodeAt(l + 5)], 40));
    case 5:
        i = Z(i, me([0, e.charCodeAt(l + 4)], 32));
    case 4:
        i = Z(i, me([0, e.charCodeAt(l + 3)], 24));
    case 3:
        i = Z(i, me([0, e.charCodeAt(l + 2)], 16));
    case 2:
        i = Z(i, me([0, e.charCodeAt(l + 1)], 8));
    case 1:
        i = Z(i, [0, e.charCodeAt(l)]),
        i = ge(i, u),
        i = dt(i, 31),
        i = ge(i, c),
        a = Z(a, i)
    }
    return a = Z(a, [0, e.length]),
    o = Z(o, [0, e.length]),
    a = Be(a, o),
    o = Be(o, a),
    a = $u(a),
    o = $u(o),
    a = Be(a, o),
    o = Be(o, a),
    ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (o[1] >>> 0).toString(16)).slice(-8)
}
function Rv(e) {
    var t;
    return wo({
        name: e.name,
        message: e.message,
        stack: (t = e.stack) === null || t === void 0 ? void 0 : t.split(`
`)
    }, e)
}
function Lv(e, t) {
    for (var r = 0, n = e.length; r < n; ++r)
        if (e[r] === t)
            return !0;
    return !1
}
function Iv(e, t) {
    return !Lv(e, t)
}
function zo(e) {
    return parseInt(e)
}
function be(e) {
    return parseFloat(e)
}
function De(e, t) {
    return typeof e == "number" && isNaN(e) ? t : e
}
function Ce(e) {
    return e.reduce(function(t, r) {
        return t + (r ? 1 : 0)
    }, 0)
}
function Kl(e, t) {
    if (t === void 0 && (t = 1),
    Math.abs(t) >= 1)
        return Math.round(e / t) * t;
    var r = 1 / t;
    return Math.round(e * r) / r
}
function xv(e) {
    for (var t, r, n = "Unexpected syntax '".concat(e, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(e), o = a[1] || void 0, i = {}, s = /([.:#][\w-]+|\[.+?\])/gi, u = function(d, h) {
        i[d] = i[d] || [],
        i[d].push(h)
    }; ; ) {
        var c = s.exec(a[2]);
        if (!c)
            break;
        var l = c[0];
        switch (l[0]) {
        case ".":
            u("class", l.slice(1));
            break;
        case "#":
            u("id", l.slice(1));
            break;
        case "[":
            {
                var f = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                if (f)
                    u(f[1], (r = (t = f[4]) !== null && t !== void 0 ? t : f[5]) !== null && r !== void 0 ? r : "");
                else
                    throw new Error(n);
                break
            }
        default:
            throw new Error(n)
        }
    }
    return [o, i]
}
function Zu(e) {
    return e && typeof e == "object" && "message"in e ? e : {
        message: e
    }
}
function Mv(e) {
    return typeof e != "function"
}
function Ov(e, t) {
    var r = new Promise(function(n) {
        var a = Date.now();
        Uu(e.bind(null, t), function() {
            for (var o = [], i = 0; i < arguments.length; i++)
                o[i] = arguments[i];
            var s = Date.now() - a;
            if (!o[0])
                return n(function() {
                    return {
                        error: Zu(o[1]),
                        duration: s
                    }
                });
            var u = o[1];
            if (Mv(u))
                return n(function() {
                    return {
                        value: u,
                        duration: s
                    }
                });
            n(function() {
                return new Promise(function(c) {
                    var l = Date.now();
                    Uu(u, function() {
                        for (var f = [], d = 0; d < arguments.length; d++)
                            f[d] = arguments[d];
                        var h = s + Date.now() - l;
                        if (!f[0])
                            return c({
                                error: Zu(f[1]),
                                duration: h
                            });
                        c({
                            value: f[1],
                            duration: h
                        })
                    })
                }
                )
            })
        })
    }
    );
    return Zt(r),
    function() {
        return r.then(function(a) {
            return a()
        })
    }
}
function Ql(e, t, r) {
    var n = Object.keys(e).filter(function(o) {
        return Iv(r, o)
    })
      , a = Yu(n, function(o) {
        return Ov(e[o], t)
    });
    return Zt(a),
    function() {
        return je(this, void 0, void 0, function() {
            var i, s, u, c, l;
            return Ve(this, function(f) {
                switch (f.label) {
                case 0:
                    return [4, a];
                case 1:
                    return i = f.sent(),
                    [4, Yu(i, function(d) {
                        var h = d();
                        return Zt(h),
                        h
                    })];
                case 2:
                    return s = f.sent(),
                    [4, Promise.all(s)];
                case 3:
                    for (u = f.sent(),
                    c = {},
                    l = 0; l < n.length; ++l)
                        c[n[l]] = u[l];
                    return [2, c]
                }
            })
        })
    }
}
function Ko() {
    var e = window
      , t = navigator;
    return Ce(["MSCSSMatrix"in e, "msSetImmediate"in e, "msIndexedDB"in e, "msMaxTouchPoints"in t, "msPointerEnabled"in t]) >= 4
}
function ef() {
    var e = window
      , t = navigator;
    return Ce(["msWriteProfilerMark"in e, "MSStream"in e, "msLaunchUri"in t, "msSaveBlob"in t]) >= 3 && !Ko()
}
function Fr() {
    var e = window
      , t = navigator;
    return Ce(["webkitPersistentStorage"in t, "webkitTemporaryStorage"in t, t.vendor.indexOf("Google") === 0, "webkitResolveLocalFileSystemURL"in e, "BatteryManager"in e, "webkitMediaStream"in e, "webkitSpeechGrammar"in e]) >= 5
}
function Lt() {
    var e = window
      , t = navigator;
    return Ce(["ApplePayError"in e, "CSSPrimitiveValue"in e, "Counter"in e, t.vendor.indexOf("Apple") === 0, "getStorageUpdates"in t, "WebKitMediaKeys"in e]) >= 4
}
function Nr() {
    var e = window;
    return Ce(["safari"in e, !("DeviceMotionEvent"in e), !("ongestureend"in e), !("standalone"in navigator)]) >= 3
}
function tf() {
    var e, t, r = window;
    return Ce(["buildID"in navigator, "MozAppearance"in ((t = (e = document.documentElement) === null || e === void 0 ? void 0 : e.style) !== null && t !== void 0 ? t : {}), "onmozfullscreenchange"in r, "mozInnerScreenX"in r, "CSSMozDocumentRule"in r, "CanvasCaptureMediaStream"in r]) >= 4
}
function kv() {
    var e = window;
    return Ce([!("MediaSettingsRange"in e), "RTCEncodedAudioFrame"in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
}
function Gv() {
    var e = window;
    return Ce(["DOMRectList"in e, "RTCPeerConnectionIceEvent"in e, "SVGGeometryElement"in e, "ontransitioncancel"in e]) >= 3
}
function Dv() {
    if (navigator.platform === "iPad")
        return !0;
    var e = screen
      , t = e.width / e.height;
    return Ce(["MediaSource"in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
}
function rf() {
    var e = document;
    return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
}
function Fv() {
    var e = document;
    return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)
}
function Qo() {
    var e = Fr()
      , t = tf();
    if (!e && !t)
        return !1;
    var r = window;
    return Ce(["onorientationchange"in r, "orientation"in r, e && !("SharedWorker"in r), t && /android/i.test(navigator.appVersion)]) >= 2
}
function Nv() {
    var e = window
      , t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
    if (!t)
        return -2;
    if (jv())
        return -1;
    var r = 4500
      , n = 5e3
      , a = new t(1,n,44100)
      , o = a.createOscillator();
    o.type = "triangle",
    o.frequency.value = 1e4;
    var i = a.createDynamicsCompressor();
    i.threshold.value = -50,
    i.knee.value = 40,
    i.ratio.value = 12,
    i.attack.value = 0,
    i.release.value = .25,
    o.connect(i),
    i.connect(a.destination),
    o.start(0);
    var s = Vv(a)
      , u = s[0]
      , c = s[1]
      , l = u.then(function(f) {
        return Wv(f.getChannelData(0).subarray(r))
    }, function(f) {
        if (f.name === "timeout" || f.name === "suspended")
            return -3;
        throw f
    });
    return Zt(l),
    function() {
        return c(),
        l
    }
}
function jv() {
    return Lt() && !Nr() && !Gv()
}
function Vv(e) {
    var t = 3
      , r = 500
      , n = 500
      , a = 5e3
      , o = function() {}
      , i = new Promise(function(s, u) {
        var c = !1
          , l = 0
          , f = 0;
        e.oncomplete = function(m) {
            return s(m.renderedBuffer)
        }
        ;
        var d = function() {
            setTimeout(function() {
                return u(Xu("timeout"))
            }, Math.min(n, f + a - Date.now()))
        }
          , h = function() {
            try {
                var m = e.startRendering();
                switch (zl(m) && Zt(m),
                e.state) {
                case "running":
                    f = Date.now(),
                    c && d();
                    break;
                case "suspended":
                    document.hidden || l++,
                    c && l >= t ? u(Xu("suspended")) : setTimeout(h, r);
                    break
                }
            } catch (g) {
                u(g)
            }
        };
        h(),
        o = function() {
            c || (c = !0,
            f > 0 && d())
        }
    }
    );
    return [i, o]
}
function Wv(e) {
    for (var t = 0, r = 0; r < e.length; ++r)
        t += Math.abs(e[r]);
    return t
}
function Xu(e) {
    var t = new Error(e);
    return t.name = e,
    t
}
function ei(e, t, r) {
    var n, a, o;
    return r === void 0 && (r = 50),
    je(this, void 0, void 0, function() {
        var i, s;
        return Ve(this, function(u) {
            switch (u.label) {
            case 0:
                i = document,
                u.label = 1;
            case 1:
                return i.body ? [3, 3] : [4, $t(r)];
            case 2:
                return u.sent(),
                [3, 1];
            case 3:
                s = i.createElement("iframe"),
                u.label = 4;
            case 4:
                return u.trys.push([4, , 10, 11]),
                [4, new Promise(function(c, l) {
                    var f = !1
                      , d = function() {
                        f = !0,
                        c()
                    }
                      , h = function(p) {
                        f = !0,
                        l(p)
                    };
                    s.onload = d,
                    s.onerror = h;
                    var m = s.style;
                    m.setProperty("display", "block", "important"),
                    m.position = "absolute",
                    m.top = "0",
                    m.left = "0",
                    m.visibility = "hidden",
                    t && "srcdoc"in s ? s.srcdoc = t : s.src = "about:blank",
                    i.body.appendChild(s);
                    var g = function() {
                        var p, v;
                        f || (((v = (p = s.contentWindow) === null || p === void 0 ? void 0 : p.document) === null || v === void 0 ? void 0 : v.readyState) === "complete" ? d() : setTimeout(g, 10))
                    };
                    g()
                }
                )];
            case 5:
                u.sent(),
                u.label = 6;
            case 6:
                return !((a = (n = s.contentWindow) === null || n === void 0 ? void 0 : n.document) === null || a === void 0) && a.body ? [3, 8] : [4, $t(r)];
            case 7:
                return u.sent(),
                [3, 6];
            case 8:
                return [4, e(s, s.contentWindow)];
            case 9:
                return [2, u.sent()];
            case 10:
                return (o = s.parentNode) === null || o === void 0 || o.removeChild(s),
                [7];
            case 11:
                return [2]
            }
        })
    })
}
function Hv(e) {
    for (var t = xv(e), r = t[0], n = t[1], a = document.createElement(r ?? "div"), o = 0, i = Object.keys(n); o < i.length; o++) {
        var s = i[o]
          , u = n[s].join(" ");
        s === "style" ? qv(a.style, u) : a.setAttribute(s, u)
    }
    return a
}
function qv(e, t) {
    for (var r = 0, n = t.split(";"); r < n.length; r++) {
        var a = n[r]
          , o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
        if (o) {
            var i = o[1]
              , s = o[2]
              , u = o[4];
            e.setProperty(i, s, u || "")
        }
    }
}
var Bv = "mmMwWLliI0O&1"
  , Uv = "48px"
  , pt = ["monospace", "sans-serif", "serif"]
  , Ju = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];
function Yv() {
    return ei(function(e, t) {
        var r = t.document
          , n = r.body;
        n.style.fontSize = Uv;
        var a = r.createElement("div")
          , o = {}
          , i = {}
          , s = function(g) {
            var p = r.createElement("span")
              , v = p.style;
            return v.position = "absolute",
            v.top = "0",
            v.left = "0",
            v.fontFamily = g,
            p.textContent = Bv,
            a.appendChild(p),
            p
        }
          , u = function(g, p) {
            return s("'".concat(g, "',").concat(p))
        }
          , c = function() {
            return pt.map(s)
        }
          , l = function() {
            for (var g = {}, p = function(A) {
                g[A] = pt.map(function(R) {
                    return u(A, R)
                })
            }, v = 0, y = Ju; v < y.length; v++) {
                var T = y[v];
                p(T)
            }
            return g
        }
          , f = function(g) {
            return pt.some(function(p, v) {
                return g[v].offsetWidth !== o[p] || g[v].offsetHeight !== i[p]
            })
        }
          , d = c()
          , h = l();
        n.appendChild(a);
        for (var m = 0; m < pt.length; m++)
            o[pt[m]] = d[m].offsetWidth,
            i[pt[m]] = d[m].offsetHeight;
        return Ju.filter(function(g) {
            return f(h[g])
        })
    })
}
function $v() {
    var e = navigator.plugins;
    if (e) {
        for (var t = [], r = 0; r < e.length; ++r) {
            var n = e[r];
            if (n) {
                for (var a = [], o = 0; o < n.length; ++o) {
                    var i = n[o];
                    a.push({
                        type: i.type,
                        suffixes: i.suffixes
                    })
                }
                t.push({
                    name: n.name,
                    description: n.description,
                    mimeTypes: a
                })
            }
        }
        return t
    }
}
function Zv() {
    var e = !1, t, r, n = Xv(), a = n[0], o = n[1];
    if (!Jv(a, o))
        t = r = "";
    else {
        e = zv(o),
        Kv(a, o);
        var i = Va(a)
          , s = Va(a);
        i !== s ? t = r = "unstable" : (r = i,
        Qv(a, o),
        t = Va(a))
    }
    return {
        winding: e,
        geometry: t,
        text: r
    }
}
function Xv() {
    var e = document.createElement("canvas");
    return e.width = 1,
    e.height = 1,
    [e, e.getContext("2d")]
}
function Jv(e, t) {
    return !!(t && e.toDataURL)
}
function zv(e) {
    return e.rect(0, 0, 10, 10),
    e.rect(2, 2, 6, 6),
    !e.isPointInPath(5, 5, "evenodd")
}
function Kv(e, t) {
    e.width = 240,
    e.height = 60,
    t.textBaseline = "alphabetic",
    t.fillStyle = "#f60",
    t.fillRect(100, 1, 62, 20),
    t.fillStyle = "#069",
    t.font = '11pt "Times New Roman"';
    var r = "Cwm fjordbank gly ".concat("😃");
    t.fillText(r, 2, 15),
    t.fillStyle = "rgba(102, 204, 0, 0.2)",
    t.font = "18pt Arial",
    t.fillText(r, 4, 45)
}
function Qv(e, t) {
    e.width = 122,
    e.height = 110,
    t.globalCompositeOperation = "multiply";
    for (var r = 0, n = [["#f2f", 40, 40], ["#2ff", 80, 40], ["#ff2", 60, 80]]; r < n.length; r++) {
        var a = n[r]
          , o = a[0]
          , i = a[1]
          , s = a[2];
        t.fillStyle = o,
        t.beginPath(),
        t.arc(i, s, 40, 0, Math.PI * 2, !0),
        t.closePath(),
        t.fill()
    }
    t.fillStyle = "#f9c",
    t.arc(60, 60, 60, 0, Math.PI * 2, !0),
    t.arc(60, 60, 20, 0, Math.PI * 2, !0),
    t.fill("evenodd")
}
function Va(e) {
    return e.toDataURL()
}
function eg() {
    var e = navigator, t = 0, r;
    e.maxTouchPoints !== void 0 ? t = zo(e.maxTouchPoints) : e.msMaxTouchPoints !== void 0 && (t = e.msMaxTouchPoints);
    try {
        document.createEvent("TouchEvent"),
        r = !0
    } catch {
        r = !1
    }
    var n = "ontouchstart"in window;
    return {
        maxTouchPoints: t,
        touchEvent: r,
        touchStart: n
    }
}
function tg() {
    return navigator.oscpu
}
function rg() {
    var e = navigator
      , t = []
      , r = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
    if (r !== void 0 && t.push([r]),
    Array.isArray(e.languages))
        Fr() && kv() || t.push(e.languages);
    else if (typeof e.languages == "string") {
        var n = e.languages;
        n && t.push(n.split(","))
    }
    return t
}
function ng() {
    return window.screen.colorDepth
}
function ag() {
    return De(be(navigator.deviceMemory), void 0)
}
function og() {
    var e = screen
      , t = function(n) {
        return De(zo(n), null)
    }
      , r = [t(e.width), t(e.height)];
    return r.sort().reverse(),
    r
}
var ig = 2500, sg = 10, hr, Wa;
function ug() {
    if (Wa === void 0) {
        var e = function() {
            var t = bo();
            So(t) ? Wa = setTimeout(e, ig) : (hr = t,
            Wa = void 0)
        };
        e()
    }
}
function nf() {
    var e = this;
    return ug(),
    function() {
        return je(e, void 0, void 0, function() {
            var t;
            return Ve(this, function(r) {
                switch (r.label) {
                case 0:
                    return t = bo(),
                    So(t) ? hr ? [2, Xl([], hr, !0)] : rf() ? [4, Fv()] : [3, 2] : [3, 2];
                case 1:
                    r.sent(),
                    t = bo(),
                    r.label = 2;
                case 2:
                    return So(t) || (hr = t),
                    [2, t]
                }
            })
        })
    }
}
function cg() {
    var e = this
      , t = nf();
    return function() {
        return je(e, void 0, void 0, function() {
            var r, n;
            return Ve(this, function(a) {
                switch (a.label) {
                case 0:
                    return [4, t()];
                case 1:
                    return r = a.sent(),
                    n = function(o) {
                        return o === null ? null : Kl(o, sg)
                    }
                    ,
                    [2, [n(r[0]), n(r[1]), n(r[2]), n(r[3])]]
                }
            })
        })
    }
}
function bo() {
    var e = screen;
    return [De(be(e.availTop), null), De(be(e.width) - be(e.availWidth) - De(be(e.availLeft), 0), null), De(be(e.height) - be(e.availHeight) - De(be(e.availTop), 0), null), De(be(e.availLeft), null)]
}
function So(e) {
    for (var t = 0; t < 4; ++t)
        if (e[t])
            return !1;
    return !0
}
function lg() {
    return De(zo(navigator.hardwareConcurrency), void 0)
}
function fg() {
    var e, t = (e = window.Intl) === null || e === void 0 ? void 0 : e.DateTimeFormat;
    if (t) {
        var r = new t().resolvedOptions().timeZone;
        if (r)
            return r
    }
    var n = -dg();
    return "UTC".concat(n >= 0 ? "+" : "").concat(Math.abs(n))
}
function dg() {
    var e = new Date().getFullYear();
    return Math.max(be(new Date(e,0,1).getTimezoneOffset()), be(new Date(e,6,1).getTimezoneOffset()))
}
function pg() {
    try {
        return !!window.sessionStorage
    } catch {
        return !0
    }
}
function mg() {
    try {
        return !!window.localStorage
    } catch {
        return !0
    }
}
function hg() {
    if (!(Ko() || ef()))
        try {
            return !!window.indexedDB
        } catch {
            return !0
        }
}
function vg() {
    return !!window.openDatabase
}
function gg() {
    return navigator.cpuClass
}
function yg() {
    var e = navigator.platform;
    return e === "MacIntel" && Lt() && !Nr() ? Dv() ? "iPad" : "iPhone" : e
}
function wg() {
    return navigator.vendor || ""
}
function bg() {
    for (var e = [], t = 0, r = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < r.length; t++) {
        var n = r[t]
          , a = window[n];
        a && typeof a == "object" && e.push(n)
    }
    return e.sort()
}
function Sg() {
    var e = document;
    try {
        e.cookie = "cookietest=1; SameSite=Strict;";
        var t = e.cookie.indexOf("cookietest=") !== -1;
        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",
        t
    } catch {
        return !1
    }
}
function Eg() {
    var e = atob;
    return {
        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', e("I0JveC1CYW5uZXItYWRz")],
        abpvn: [".quangcao", "#mobileCatfish", e("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
        adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
        adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2NhbXBhaWduLWJhbm5lcg=="), e("I0FkLUNvbnRlbnQ=")],
        adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
        adGuardFrench: ["#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", e("LmFkc19iYW4=")],
        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
        adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("Ll9faXNib29zdFJldHVybkFk")],
        adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
        adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
        adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
        adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
        adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
        bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
        easyList: [".yb-floorad", e("LndpZGdldF9wb19hZHNfd2lkZ2V0"), e("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", e("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
        easyListChina: [e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", e("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
        easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
        easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
        easyListGermany: ["#SSpotIMPopSlider", e("LnNwb25zb3JsaW5rZ3J1ZW4="), e("I3dlcmJ1bmdza3k="), e("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), e("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
        easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
        easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
        estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
        frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
        greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
        icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
        latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
        listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
        listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
        listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
        officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
        ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
        ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
        thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
    }
}
function _g(e) {
    var t = e === void 0 ? {} : e
      , r = t.debug;
    return je(this, void 0, void 0, function() {
        var n, a, o, i, s, u;
        return Ve(this, function(c) {
            switch (c.label) {
            case 0:
                return Pg() ? (n = Eg(),
                a = Object.keys(n),
                o = (u = []).concat.apply(u, a.map(function(l) {
                    return n[l]
                })),
                [4, Tg(o)]) : [2, void 0];
            case 1:
                return i = c.sent(),
                r && Cg(n, i),
                s = a.filter(function(l) {
                    var f = n[l]
                      , d = Ce(f.map(function(h) {
                        return i[h]
                    }));
                    return d > f.length * .6
                }),
                s.sort(),
                [2, s]
            }
        })
    })
}
function Pg() {
    return Lt() || Qo()
}
function Tg(e) {
    var t;
    return je(this, void 0, void 0, function() {
        var r, n, a, o, u, i, s, u;
        return Ve(this, function(c) {
            switch (c.label) {
            case 0:
                for (r = document,
                n = r.createElement("div"),
                a = new Array(e.length),
                o = {},
                zu(n),
                u = 0; u < e.length; ++u)
                    i = Hv(e[u]),
                    i.tagName === "DIALOG" && i.show(),
                    s = r.createElement("div"),
                    zu(s),
                    s.appendChild(i),
                    n.appendChild(s),
                    a[u] = i;
                c.label = 1;
            case 1:
                return r.body ? [3, 3] : [4, $t(50)];
            case 2:
                return c.sent(),
                [3, 1];
            case 3:
                r.body.appendChild(n);
                try {
                    for (u = 0; u < e.length; ++u)
                        a[u].offsetParent || (o[e[u]] = !0)
                } finally {
                    (t = n.parentNode) === null || t === void 0 || t.removeChild(n)
                }
                return [2, o]
            }
        })
    })
}
function zu(e) {
    e.style.setProperty("display", "block", "important")
}
function Cg(e, t) {
    for (var r = "DOM blockers debug:\n```", n = 0, a = Object.keys(e); n < a.length; n++) {
        var o = a[n];
        r += `
`.concat(o, ":");
        for (var i = 0, s = e[o]; i < s.length; i++) {
            var u = s[i];
            r += `
  `.concat(t[u] ? "🚫" : "➡️", " ").concat(u)
        }
    }
    console.log("".concat(r, "\n```"))
}
function Ag() {
    for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
        var r = t[e];
        if (matchMedia("(color-gamut: ".concat(r, ")")).matches)
            return r
    }
}
function Rg() {
    if (Ku("inverted"))
        return !0;
    if (Ku("none"))
        return !1
}
function Ku(e) {
    return matchMedia("(inverted-colors: ".concat(e, ")")).matches
}
function Lg() {
    if (Qu("active"))
        return !0;
    if (Qu("none"))
        return !1
}
function Qu(e) {
    return matchMedia("(forced-colors: ".concat(e, ")")).matches
}
var Ig = 100;
function xg() {
    if (matchMedia("(min-monochrome: 0)").matches) {
        for (var e = 0; e <= Ig; ++e)
            if (matchMedia("(max-monochrome: ".concat(e, ")")).matches)
                return e;
        throw new Error("Too high value")
    }
}
function Mg() {
    if (mt("no-preference"))
        return 0;
    if (mt("high") || mt("more"))
        return 1;
    if (mt("low") || mt("less"))
        return -1;
    if (mt("forced"))
        return 10
}
function mt(e) {
    return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
}
function Og() {
    if (ec("reduce"))
        return !0;
    if (ec("no-preference"))
        return !1
}
function ec(e) {
    return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
}
function kg() {
    if (tc("high"))
        return !0;
    if (tc("standard"))
        return !1
}
function tc(e) {
    return matchMedia("(dynamic-range: ".concat(e, ")")).matches
}
var V = Math
  , ie = function() {
    return 0
};
function Gg() {
    var e = V.acos || ie
      , t = V.acosh || ie
      , r = V.asin || ie
      , n = V.asinh || ie
      , a = V.atanh || ie
      , o = V.atan || ie
      , i = V.sin || ie
      , s = V.sinh || ie
      , u = V.cos || ie
      , c = V.cosh || ie
      , l = V.tan || ie
      , f = V.tanh || ie
      , d = V.exp || ie
      , h = V.expm1 || ie
      , m = V.log1p || ie
      , g = function(S) {
        return V.pow(V.PI, S)
    }
      , p = function(S) {
        return V.log(S + V.sqrt(S * S - 1))
    }
      , v = function(S) {
        return V.log(S + V.sqrt(S * S + 1))
    }
      , y = function(S) {
        return V.log((1 + S) / (1 - S)) / 2
    }
      , T = function(S) {
        return V.exp(S) - 1 / V.exp(S) / 2
    }
      , A = function(S) {
        return (V.exp(S) + 1 / V.exp(S)) / 2
    }
      , R = function(S) {
        return V.exp(S) - 1
    }
      , w = function(S) {
        return (V.exp(2 * S) - 1) / (V.exp(2 * S) + 1)
    }
      , L = function(S) {
        return V.log(1 + S)
    };
    return {
        acos: e(.12312423423423424),
        acosh: t(1e308),
        acoshPf: p(1e154),
        asin: r(.12312423423423424),
        asinh: n(1),
        asinhPf: v(1),
        atanh: a(.5),
        atanhPf: y(.5),
        atan: o(.5),
        sin: i(-1e300),
        sinh: s(1),
        sinhPf: T(1),
        cos: u(10.000000000123),
        cosh: c(1),
        coshPf: A(1),
        tan: l(-1e300),
        tanh: f(1),
        tanhPf: w(1),
        exp: d(1),
        expm1: h(1),
        expm1Pf: R(1),
        log1p: m(10),
        log1pPf: L(10),
        powPI: g(-100)
    }
}
var Dg = "mmMwWLliI0fiflO&1"
  , Ha = {
    default: [],
    apple: [{
        font: "-apple-system-body"
    }],
    serif: [{
        fontFamily: "serif"
    }],
    sans: [{
        fontFamily: "sans-serif"
    }],
    mono: [{
        fontFamily: "monospace"
    }],
    min: [{
        fontSize: "1px"
    }],
    system: [{
        fontFamily: "system-ui"
    }]
};
function Fg() {
    return Ng(function(e, t) {
        for (var r = {}, n = {}, a = 0, o = Object.keys(Ha); a < o.length; a++) {
            var i = o[a]
              , s = Ha[i]
              , u = s[0]
              , c = u === void 0 ? {} : u
              , l = s[1]
              , f = l === void 0 ? Dg : l
              , d = e.createElement("span");
            d.textContent = f,
            d.style.whiteSpace = "nowrap";
            for (var h = 0, m = Object.keys(c); h < m.length; h++) {
                var g = m[h]
                  , p = c[g];
                p !== void 0 && (d.style[g] = p)
            }
            r[i] = d,
            t.appendChild(e.createElement("br")),
            t.appendChild(d)
        }
        for (var v = 0, y = Object.keys(Ha); v < y.length; v++) {
            var i = y[v];
            n[i] = r[i].getBoundingClientRect().width
        }
        return n
    })
}
function Ng(e, t) {
    return t === void 0 && (t = 4e3),
    ei(function(r, n) {
        var a = n.document
          , o = a.body
          , i = o.style;
        i.width = "".concat(t, "px"),
        i.webkitTextSizeAdjust = i.textSizeAdjust = "none",
        Fr() ? o.style.zoom = "".concat(1 / n.devicePixelRatio) : Lt() && (o.style.zoom = "reset");
        var s = a.createElement("div");
        return s.textContent = Xl([], Array(t / 20 << 0), !0).map(function() {
            return "word"
        }).join(" "),
        o.appendChild(s),
        e(a, o)
    }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
}
function jg() {
    var e, t = document.createElement("canvas"), r = (e = t.getContext("webgl")) !== null && e !== void 0 ? e : t.getContext("experimental-webgl");
    if (r && "getExtension"in r) {
        var n = r.getExtension("WEBGL_debug_renderer_info");
        if (n)
            return {
                vendor: (r.getParameter(n.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (r.getParameter(n.UNMASKED_RENDERER_WEBGL) || "").toString()
            }
    }
}
function Vg() {
    return navigator.pdfViewerEnabled
}
function Wg() {
    var e = new Float32Array(1)
      , t = new Uint8Array(e.buffer);
    return e[0] = 1 / 0,
    e[0] = e[0] - e[0],
    t[3]
}
var af = {
    fonts: Yv,
    domBlockers: _g,
    fontPreferences: Fg,
    audio: Nv,
    screenFrame: cg,
    osCpu: tg,
    languages: rg,
    colorDepth: ng,
    deviceMemory: ag,
    screenResolution: og,
    hardwareConcurrency: lg,
    timezone: fg,
    sessionStorage: pg,
    localStorage: mg,
    indexedDB: hg,
    openDatabase: vg,
    cpuClass: gg,
    platform: yg,
    plugins: $v,
    canvas: Zv,
    touchSupport: eg,
    vendor: wg,
    vendorFlavors: bg,
    cookiesEnabled: Sg,
    colorGamut: Ag,
    invertedColors: Rg,
    forcedColors: Lg,
    monochrome: xg,
    contrast: Mg,
    reducedMotion: Og,
    hdr: kg,
    math: Gg,
    videoCard: jg,
    pdfViewerEnabled: Vg,
    architecture: Wg
};
function Hg(e) {
    return Ql(af, e, [])
}
var qg = "$ if upgrade to Pro: https://fpjs.dev/pro";
function Bg(e) {
    var t = Ug(e)
      , r = Yg(t);
    return {
        score: t,
        comment: qg.replace(/\$/g, "".concat(r))
    }
}
function Ug(e) {
    if (Qo())
        return .4;
    if (Lt())
        return Nr() ? .5 : .3;
    var t = e.platform.value || "";
    return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
}
function Yg(e) {
    return Kl(.99 + .01 * e, 1e-4)
}
function $g(e) {
    for (var t = "", r = 0, n = Object.keys(e).sort(); r < n.length; r++) {
        var a = n[r]
          , o = e[a]
          , i = o.error ? "error" : JSON.stringify(o.value);
        t += "".concat(t ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
    }
    return t
}
function ti(e) {
    return JSON.stringify(e, function(t, r) {
        return r instanceof Error ? Rv(r) : r
    }, 2)
}
function ri(e) {
    return Av($g(e))
}
function Zg(e) {
    var t, r = Bg(e);
    return {
        get visitorId() {
            return t === void 0 && (t = ri(this.components)),
            t
        },
        set visitorId(n) {
            t = n
        },
        confidence: r,
        components: e,
        version: Jl
    }
}
function of(e) {
    return e === void 0 && (e = 50),
    Cv(e, e * 2)
}
function Xg(e, t) {
    var r = Date.now();
    return {
        get: function(n) {
            return je(this, void 0, void 0, function() {
                var a, o, i;
                return Ve(this, function(s) {
                    switch (s.label) {
                    case 0:
                        return a = Date.now(),
                        [4, e()];
                    case 1:
                        return o = s.sent(),
                        i = Zg(o),
                        (t || n?.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(i.version, `
userAgent: `).concat(navigator.userAgent, `
timeBetweenLoadAndGet: `).concat(a - r, `
visitorId: `).concat(i.visitorId, `
components: `).concat(ti(o), "\n```")),
                        [2, i]
                    }
                })
            })
        }
    }
}
function Jg() {
    if (!(window.__fpjs_d_m || Math.random() >= .001))
        try {
            var e = new XMLHttpRequest;
            e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(Jl, "/npm-monitoring"), !0),
            e.send()
        } catch (t) {
            console.error(t)
        }
}
function sf(e) {
    var t = e === void 0 ? {} : e
      , r = t.delayFallback
      , n = t.debug
      , a = t.monitoring
      , o = a === void 0 ? !0 : a;
    return je(this, void 0, void 0, function() {
        var i;
        return Ve(this, function(s) {
            switch (s.label) {
            case 0:
                return o && Jg(),
                [4, of(r)];
            case 1:
                return s.sent(),
                i = Hg({
                    debug: n
                }),
                [2, Xg(i, n)]
            }
        })
    })
}
var uf = {
    load: sf,
    hashComponents: ri,
    componentsToDebugString: ti
};
const Gy = Object.freeze(Object.defineProperty({
    __proto__: null,
    componentsToDebugString: ti,
    default: uf,
    getFullscreenElement: rf,
    getScreenFrame: nf,
    hashComponents: ri,
    isAndroid: Qo,
    isChromium: Fr,
    isDesktopSafari: Nr,
    isEdgeHTML: ef,
    isGecko: tf,
    isTrident: Ko,
    isWebKit: Lt,
    load: sf,
    loadSources: Ql,
    prepareForSources: of,
    sources: af,
    withIframe: ei
}, Symbol.toStringTag, {
    value: "Module"
}));
function zg(e) {
    const t = () => {
        if (!window.navigator.sendBeacon("/reports", JSON.stringify(e)))
            throw new Error("sendBeacon failed")
    }
      , r = () => {
        xo( () => fetch("/reports", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        }), {
            retries: 3
        })
    }
    ;
    if (typeof navigator < "u" && typeof navigator.sendBeacon == "function")
        try {
            t()
        } catch (n) {
            console.error(n),
            r()
        }
    else
        r()
}
async function Kg() {
    const e = ff()
      , r = await (await uf.load()).get();
    return {
        uuid: e,
        time: `${Date.now()}`,
        ctwid: "G0000000",
        appid: window.option.appId,
        page: {
            referer: document.referrer || "",
            network_connection: Wf(window, "navigator.network.connection.effectiveType", ""),
            url: window.location.href,
            fp: r.visitorId || "",
            country: "",
            region: "",
            lang: window.option.lang || "",
            userAgent: window.navigator.userAgent,
            userAgentData: await Vf(),
            isStandalone: Xa() ? 1 : 0
        }
    }
}
async function Qg({action: e, service: t, payload: r}) {
    const a = {
        ...await Kg(),
        version: "v2",
        type: e,
        service: t,
        payload: r
    };
    zg(a)
}
const ey = e => new Promise(t => setTimeout(t, e))
  , ty = (e, t) => {
    let r;
    if (typeof AbortSignal == "function" && typeof AbortSignal.timeout == "function")
        r = AbortSignal.timeout(t);
    else if (typeof AbortController == "function") {
        const n = new AbortController;
        r = n.signal,
        setTimeout( () => n.abort(), t)
    } else
        r = void 0;
    return Promise.race([fetch(e, {
        cache: "no-store",
        signal: r
    }).catch( () => null), ey(t).then( () => null)])
}
;
async function ry() {
    let t = !1;
    try {
        const r = l => Math.round(l * 100) / 100
          , n = Date.now()
          , a = new URL(window.option.idCallback);
        a.pathname = "/cloud-game-web-client/ping.json",
        a.searchParams.set("t", n.toString());
        const o = await ty(a.toString(), 600);
        o && (await o.text(),
        t = !0);
        const i = Date.now()
          , u = performance.getEntriesByType("resource").find(l => l.name.endsWith(a.toString()))
          , c = {
            dnsLookup: null,
            tcpHandshake: null,
            sslHandshake: null,
            ttfb: null,
            contentDownload: null,
            totalTime: null,
            fetchTotalTime: i - n,
            waitTime: null
        };
        return u && u instanceof PerformanceResourceTiming ? (c.dnsLookup = r(u.domainLookupEnd - u.domainLookupStart),
        c.tcpHandshake = r(u.connectEnd - u.connectStart),
        c.sslHandshake = r(u.secureConnectionStart > 0 ? u.connectEnd - u.secureConnectionStart : 0),
        c.ttfb = r(u.responseStart - u.requestStart),
        c.contentDownload = r(u.responseEnd - u.responseStart),
        c.totalTime = r(u.responseEnd - u.fetchStart),
        c.waitTime = r(u.requestStart - u.startTime),
        console.log("[CloudGameWeb] speedTest results:", c)) : console.log("[CloudGameWeb] speedTest: ping.json performance entry not found."),
        {
            dns_lookup: c.dnsLookup,
            tcp_handshake: c.tcpHandshake,
            ssl_handshake: c.sslHandshake,
            ttfb: c.ttfb,
            content_download: c.contentDownload,
            total_time: c.totalTime,
            wait_time: c.waitTime,
            fetch_total_time: c.fetchTotalTime,
            isSuccess: t
        }
    } catch (r) {
        return console.log("[CloudGameWeb] speedTest error:", r),
        null
    }
}
function rc(e) {
    const t = new URL(window.location.href);
    try {
        const r = t.searchParams.get("enable_flashlaunch");
        r ? document.cookie = `gp_flashlaunch=${r}; path=/; Secure` : e ? document.cookie = `gp_flashlaunch=${e}; path=/; Secure` : document.cookie = "gp_flashlaunch=; path=/; Secure; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    } catch (r) {
        console.error("CLOUD_GAME_ENABLE_ERROR", r)
    }
}
async function ny() {
    const e = await ry();
    if (e?.isSuccess) {
        const {isSuccess: t, ...r} = e;
        Qg({
            action: "misc_flashlaunch_cloud_game_speedtest",
            service: "flashlaunch",
            payload: {
                page_view_id: window.__cloud_game_page_view_id__,
                ...r
            }
        }),
        rc()
    } else
        rc("0")
}
function vr(e, t) {
    window.postMessage({
        type: "gp_global_actions/show_toast",
        payload: {
            type: e,
            content: t
        }
    })
}
function ay() {
    window.postMessage({
        type: "gp_global_actions/dismiss_toast"
    })
}
function oy() {
    window.postMessage({
        type: "gp_global_actions/reload_cshelp"
    })
}
const cf = W.getState();
window.option.inGameAccount = cf.inGameAccount;
W.subscribe( () => {
    const e = W.getState();
    cf.inGameAccount !== e.inGameAccount && (window.option.inGameAccount = e.inGameAccount,
    oy())
}
);
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var qa, nc;
function iy() {
    if (nc)
        return qa;
    nc = 1,
    qa = n;
    function e() {
        return new DOMException("The request is not allowed","NotAllowedError")
    }
    async function t(a) {
        if (!navigator.clipboard)
            throw e();
        return navigator.clipboard.writeText(a)
    }
    async function r(a) {
        const o = document.createElement("span");
        o.textContent = a,
        o.style.whiteSpace = "pre",
        o.style.webkitUserSelect = "auto",
        o.style.userSelect = "all",
        document.body.appendChild(o);
        const i = window.getSelection()
          , s = window.document.createRange();
        i.removeAllRanges(),
        s.selectNode(o),
        i.addRange(s);
        let u = !1;
        try {
            u = window.document.execCommand("copy")
        } finally {
            i.removeAllRanges(),
            window.document.body.removeChild(o)
        }
        if (!u)
            throw e()
    }
    async function n(a) {
        try {
            await t(a)
        } catch (o) {
            try {
                await r(a)
            } catch (i) {
                throw i || o || e()
            }
        }
    }
    return qa
}
var sy = iy();
const uy = Te(sy);
function cy(e) {
    W.dispatch(Re.actions.toggleMainPopup({
        isOpen: e
    })),
    !e && W.getState().blockedUser.blocked && W.dispatch(bc.actions.showDialog())
}
function ly(e) {
    W.dispatch(Re.actions.switchMainPopupRoute({
        tab: e
    }))
}
function Dy() {
    cy(!1),
    ly(Hf.Recommends),
    ay()
}
function Fy(e=!0) {
    W.dispatch(Re.actions.setIsGuestClicked({
        clicked: e
    }))
}
async function Ny(e) {
    const t = await Cr()
      , r = await ut.get(`${he.SHD_G123_WEB_URL}/api/v2/game/${e}`, {
        params: {
            lang: ot.language,
            region: t.region
        }
    });
    return W.dispatch(Re.actions.updateCurrentAppInfo({
        appInfo: r.data
    })),
    r.data
}
async function jy() {
    try {
        const e = await Cr()
          , {data: {games: t}} = await ut.get(`${he.SHD_G123_GAME_URL}/api/recommends`, {
            params: {
                lang: ot.language,
                region: e.region,
                appCode: e.aud
            }
        })
          , r = await dy(e)
          , n = fy(t, r, e.aud);
        return W.dispatch(Re.actions.updateRecommendGames({
            recommendGames: n
        })),
        n
    } catch (e) {
        return console.error("Failed to fetch recommendations:", e),
        window?.Sentry?.captureException(e),
        []
    }
}
function fy(e, t, r) {
    const n = e.filter(i => i.appId !== r)
      , a = t?.length > 3 ? n.filter(i => t.includes(i.appId)).sort( (i, s) => {
        const u = t.indexOf(i.appId)
          , c = t.indexOf(s.appId);
        return u - c
    }
    ) : n;
    return Sc() ? a.filter(i => !Ec(i.appId)) : a
}
async function dy(e) {
    if (!(ot.language && e.sub && e.aud)) {
        const r = new Error("Language, ctwid, or appid is null or empty. Skipping axios post request.");
        return console.warn(r.message),
        window?.Sentry?.captureException(r),
        []
    }
    try {
        const {data: {appid_list: r}} = await ut.post(`${he.SHD_G123_GC3A_URL}/v1/recommendation/g-button/rank`, {
            metadata: {
                labels: "string",
                name: "gbutton"
            },
            payload: {
                abtest: !1,
                language: ot.language,
                ctwid: e.sub,
                appid: e.aud
            }
        });
        return r
    } catch (r) {
        return console.error("Failed to fetch personalized recommendations:", r),
        window?.Sentry?.captureException(r),
        []
    }
}
async function lf(e, t) {
    try {
        const r = await ut.get(`${he.SHD_G123_WEB_URL}/api/v2/game_tag/${e}/game_codes`, {
            params: {
                lang: ot.language
            }
        });
        return t(r.data.content),
        r.data.content
    } catch (r) {
        return console.error(`Failed to fetch ${e} game codes:`, r),
        window?.Sentry?.captureException(r),
        []
    }
}
async function Vy() {
    return lf("hotgames", e => W.dispatch(Re.actions.updateHotGameCodes({
        hotGameCodes: e
    })))
}
async function Wy() {
    return lf("newgames", e => W.dispatch(Re.actions.updateNewGameCodes({
        newGameCodes: e
    })))
}
async function Hy() {
    const e = await ut.get(`${he.SHD_G123_WEB_URL}/api/v2/game_tag/pre-registration/games`, {
        params: {
            lang: ot.language,
            offset: 0,
            limit: 100
        }
    });
    return W.dispatch(Re.actions.updatePreregists({
        preregists: e.data.content
    })),
    e.data.content
}
async function ac(e) {
    W.dispatch(Re.actions.updateAuthProviders({
        authProviders: e
    }))
}
function qy() {
    uy(window.option.userId),
    vr("success", ot.t("common.actions.copy.success"))
}
async function By() {
    const e = await ut.get(`${he.SHD_G123_GAME_URL}/api/v1/user_ranking/${window.option.userId}`);
    return W.dispatch(Re.actions.updateVipRank({
        vipRank: e?.data?.ranking || 0
    })),
    e?.data?.ranking || 0
}
function py(e) {
    if (!he.SHD_PARTNER_TTD_ENDPOINT)
        return;
    const t = new URL(he.SHD_PARTNER_TTD_ENDPOINT);
    t.searchParams.set("ttd_puid", e),
    t.searchParams.set("ttd_pid", he.SHD_PARTNER_TTD_PID),
    t.searchParams.set("ttd_tpi", "1"),
    t.searchParams.set("gdpr", "0");
    const r = new Image;
    r.src = t.href
}
class my {
    constructor(t, r) {
        this.deferredPrompt = sc(),
        this.isFirstLaunch = !1,
        this.trackerProps = t,
        this.storage = r || this.createDefaultStorage();
        const n = new URLSearchParams(window.location.search);
        this.iid = n.get("_iid") || "",
        this.itm = n.get("_itm") || "",
        Xa() ? this.promptType = n.get("_pt") || Za() : this.promptType = Za(),
        this.checkFirstLaunch(),
        this.initInstallPrompt()
    }
    createDefaultStorage() {
        return {
            setItem: (t, r) => {
                try {
                    return localStorage.setItem(t, r),
                    !0
                } catch (n) {
                    return console.error("Storage error:", n),
                    !1
                }
            }
            ,
            getItem: t => {
                try {
                    return localStorage.getItem(t)
                } catch (r) {
                    return console.error("Storage error:", r),
                    null
                }
            }
        }
    }
    initInstallPrompt() {
        const t = () => {
            setTimeout( () => {
                this.deferredPrompt.resolve(null)
            }
            , 1e3)
        }
        ;
        window.addEventListener("beforeinstallprompt", r => {
            console.log("beforeinstallprompt event:", r),
            this.trackInstallPrompt(r),
            this.deferredPrompt.resolve(r)
        }
        , {
            once: !0
        }),
        document.readyState === "complete" ? t() : window.addEventListener("load", t, {
            once: !0
        }),
        window.addEventListener("appinstalled", r => {
            console.log("appinstalled event:", r),
            this.trackInstallSuccess(r)
        }
        )
    }
    checkFirstLaunch() {
        if ("storage"in navigator && "estimate"in navigator.storage && (window.matchMedia("(display-mode: standalone)").matches || window.matchMedia("(display-mode: fullscreen)").matches || "standalone"in window.navigator && window.navigator.standalone === !0)) {
            const r = this.getFirstLaunchStorageKey();
            this.storage.getItem(r) || (this.isFirstLaunch = !0,
            this.trackFirstLaunch(),
            this.storage.setItem(r, Date.now().toString()))
        }
    }
    getFirstLaunchStorageKey() {
        return `pwa_first_launch:${this.iid || "default"}`
    }
    trackInstallPrompt(t) {
        this.trackerProps.onEvent({
            event: "pwa_install_prompt",
            platform: this.getPlatform(),
            promptType: this.promptType,
            originEvent: t
        })
    }
    trackInstallSuccess(t) {
        this.trackerProps.onEvent({
            event: "pwa_install_success",
            platform: this.getPlatform(),
            promptType: this.promptType,
            originEvent: t
        })
    }
    trackFirstLaunch() {
        this.trackerProps.onEvent({
            event: "pwa_first_launch",
            platform: this.getPlatform(),
            promptType: this.promptType,
            iid: this.iid,
            itm: this.itm
        })
    }
    getPlatform() {
        return kt() ? "iOS" : Gt() ? "Android" : "Desktop"
    }
    async getTrackerStatus() {
        return {
            isInstalled: Xa(),
            isFirstLaunch: this.isFirstLaunch,
            isPwaPromptSupported: Bf(),
            isPwaNativePromptSupported: qf(),
            beforeInstallPromptEvent: await this.deferredPrompt.promise,
            platform: this.getPlatform(),
            trackerProps: this.trackerProps
        }
    }
}
function hy(e) {
    window.pwaTracker || (window.pwaTracker = new my(e))
}
const Ba = 500
  , vy = 1e3
  , oc = 1e3;
let Wt, Ht, Pr, ye;
function gy() {
    Wt || Ht || Pr || ye || (Wt = document.getElementById("splash") || void 0,
    Ht = document.getElementById("iframe-game") || void 0,
    Pr = document.getElementById("splash-progress-container") || void 0,
    ye = document.getElementById("splash-progress")?.querySelector("span") || void 0)
}
function yy() {
    Wt && (Wt.style.opacity = "0",
    Wt.style.transition = `opacity ${Ba}ms ease-out`),
    Ht && (Ht.style.opacity = "1",
    Ht.style.transition = `opacity ${Ba}ms ease-in ${Ba * 1.5}ms`)
}
function wy() {
    ye && (ye.style.display = "none"),
    Pr && (Pr.style.display = "none")
}
function by() {
    return ye ? ye.style.display === "block" : !1
}
function Sy() {
    return ye ? Number.parseInt(ye.style.width) : 0
}
function Ey(e) {
    if (ye) {
        if (e < Sy())
            return;
        ye.style.width = `${e}%`
    }
}
function _y() {
    ye && (ye.style.transition = `width ${oc / 2}ms ease-in`,
    Ey(100)),
    setTimeout(wy, oc * 2)
}
function Py() {
    gy(),
    window.SPLASH_TIMER && (clearTimeout(window.SPLASH_TIMER),
    window.SPLASH_TIMER = void 0),
    by() && _y(),
    setTimeout(yy, vy)
}
Ld();
const st = window.option.appId;
Ec(st) && Sc() && W.dispatch(Uf(!1));
const Ty = () => /line/i.test(navigator.userAgent);
function Cy() {
    if (!/iPad|iPhone|iPod/.test(navigator.userAgent))
        return;
    const e = t => {
        const r = t.originalEvent || t;
        "scale"in r && r.scale !== 1 && (r.preventDefault(),
        document.body.style.transform = "scale(1)")
    }
    ;
    document.addEventListener("touchmove", e, {
        passive: !1
    }),
    document.addEventListener("gesturestart", e, {
        passive: !1
    })
}
window.perf?.start && (window.perf.app_start = qt(),
setTimeout( () => {
    window.perf.app_start === void 0 || window.perf.start === void 0 || Jt(`/stats?k=perf&t=app_start&a=${st}&d=${window.perf.app_start - window.perf.start}&img=1`)
}
));
hy({
    onEvent: e => {
        if (console.log("[PWA] ON_EVENT", e),
        e.event === "pwa_first_launch") {
            const t = e.iid
              , r = e.itm;
            if (!t || !r)
                return;
            try {
                const n = Number.parseInt(r, 10);
                if (Number.isNaN(n) || Date.now() - n > 1e3 * 60 * 60 * 24)
                    return
            } catch (n) {
                console.error("[PWA] Error", n);
                return
            }
            console.log("[PWA] FirstLaunch", e),
            kt() || Gt() ? (console.log("[PWA][pwa_first_launch] Send FirstLaunch", e),
            ui(),
            mi(e.promptType || "")) : console.info("[PWA][pwa_install_success] Ignore", e, {
                isIOS: kt(),
                isAndroid: Gt()
            });
            return
        }
        if (e.event === "pwa_install_prompt") {
            console.log("[PWA] BeforeIntallPrompt", e),
            ci({
                event: "PWA",
                pwa_event: "prompt",
                appid: st
            }),
            window.pwaInstallPrompt = e.originEvent,
            W.dispatch(ed({
                isPwaInstallPromptReady: !0
            })),
            e.originEvent.userChoice.then(t => {
                console.log("[PWA] UserChoice", t.outcome)
            }
            ).catch(t => {
                console.error("[PWA] Error", t)
            }
            );
            return
        }
        e.event === "pwa_install_success" && (console.log("[PWA] AppInstalled", e),
        !kt() && !Gt() ? (console.log("[PWA][pwa_install_success] Send FirstLaunch", e),
        ui(),
        mi(e.promptType || "")) : console.info("[PWA][pwa_install_success] Ignore", e, {
            isIOS: kt(),
            isAndroid: Gt()
        }),
        ci({
            event: "PWA",
            pwa_event: "install",
            appid: st
        }))
    }
});
const Eo = typeof requestIdleCallback == "function" ? requestIdleCallback : setTimeout
  , Ua = Pt(async () => {
    if (!mr.platform)
        return;
    console.log("[PLATFORM] Waiting for idle", Date.now());
    try {
        typeof Promise.race == "function" && await Promise.race([new Promise(t => Eo(t)), new Promise(t => setTimeout(t, 1e4))])
    } catch (t) {
        console.error(t)
    }
    console.log("[PLATFORM] Loading app", Date.now());
    let e;
    try {
        e = await Kf(st)
    } catch (t) {
        console.log(`[PLATFORM] No valid age verification status: ${t}`)
    }
    e?.verificationRequired && !e?.verified && W.dispatch(Qf.actions.showDialog()),
    xo( () => _o( () => import("./game-ded8115c-BzjqZ_Ug.js").then(t => t.d), __vite__mapDeps([5, 2, 3, 1, 4, 6])), {
        retries: 3
    }).then(t => t.initApp()).catch(t => {
        console.error("[PLATFORM] LOADING_APP_ERROR", t),
        window.Sentry?.captureException(t)
    }
    )
}
);
function Ay() {
    try {
        if (window.innerHeight < document.documentElement.clientHeight) {
            const e = Math.min(window.innerHeight, document.documentElement.clientHeight);
            document.documentElement.style.height = `${e}px`,
            window.addEventListener("orientationchange", () => {
                document.documentElement.style.height = ""
            }
            )
        }
    } catch (e) {
        console.error(e)
    }
}
async function Ry() {
    const t = await Tr().currentSession()
      , r = await Cr()
      , n = {
        authCode: t.code,
        appCode: r.aud,
        userId: r.sub,
        country: r.country,
        region: r.region,
        lang: r.lang,
        appUrl: window.option.idCallback,
        onpaymentcompleted: a => {
            console.info("[Payment] completed with", a),
            Ic({
                type: "PspCommand",
                action: "PaymentStatusChanged",
                orderNo: a
            })
        }
    };
    await zf(n)
}
async function Ly() {
    await df();
    const e = Rc();
    vd(e),
    Eo( () => {
        Yf()
    }
    ),
    Cy();
    const {prefetchSession: t} = window;
    t && (window.prefetchSession = void 0),
    window.__cloud_game_enabled__ && await ny();
    const r = $f({
        config: {
            appId: st,
            zIndex: 9997
        },
        onAuthStateChanged: (u, c) => {
            if (!u) {
                console.error(new Error("Fetch user error"), {
                    user: u,
                    prevUser: c
                });
                return
            }
            if (u.code === ic && W.dispatch(bc.actions.showDialog()),
            W.dispatch(Jf()),
            !c) {
                window.option.userId = u.userId,
                window.option.providers = u.providers,
                ac(u.providers),
                window.option.code = u.code,
                td(u.userId);
                return
            }
            if ((u.providers.length !== c.providers.length || u.providers.slice().sort().join(",") !== c.providers.slice().sort().join(",")) && (console.info(`Providers changed [${c.providers}] -> [${u.providers}], re-render template`),
            ac(u.providers),
            Ic({
                category: "g123_auth_event",
                action: "p_sns_bind_changed"
            })),
            u.userId !== c.userId) {
                console.info(`User changed [${c.userId}] -> [${u.userId}], reload page`),
                si("USER_ID_CHANGED", !0);
                return
            }
            u.code !== c.code && (console.info(`Code changed [${c.code}] -> [${u.code}], reload game`),
            si("USER_APP_CODE_CHANGED", !0))
        }
        ,
        onAuthResult: u => {
            switch (u.level) {
            case "success":
                vr("login", u.message);
                break;
            case "warning":
                vr("warning", u.message);
                break;
            case "error":
                vr("error", u.message);
                break
            }
        }
        ,
        prefetch: t
    });
    Ed(st);
    const n = Ac() === Cc.CHANNEL_ONLY ? qr(!0) : void 0;
    try {
        await r.currentSession()
    } catch (u) {
        console.error(u)
    }
    r.currentUser() || await xo( () => r.reload(), {
        retries: 5
    });
    const a = r.currentUser();
    if (!a)
        throw new Error("Fetching user error");
    typeof window.Sentry?.setUser == "function" && window.Sentry.setUser({
        id: a.userId
    });
    const o = Zf(r);
    if (!o)
        throw new Error("Fetching session error");
    const {isPlatformNewUser: i, isAppNewUser: s} = o;
    if (uc({
        action: i ? "p_register" : "p_login",
        data: {
            display_name: a.userId,
            providers: a.providers,
            ...i ? {} : {
                custom: {
                    is_app_new_user: s
                }
            }
        }
    }),
    console.info("[PLATFORM] reloadGame in game mode"),
    mr.psp && Ry(),
    mr.auxin && o.gameMode !== "cloud" && Eo( () => {
        _o(async () => {
            const {initMicroApplications: u} = await import("./game-74aa2de1-C7AhQnKw.js");
            return {
                initMicroApplications: u
            }
        }
        , __vite__mapDeps([7, 1, 2, 3, 4])).then( ({initMicroApplications: u}) => {
            u()
        }
        )
    }
    ),
    mr.websocket && Ev(),
    py(a.userId),
    window.option.mode !== "app") {
        if (Xf() && Ty())
            try {
                const c = ii.getItem($a.lineAppAuthRequestedAt)
                  , l = c ? Number.parseInt(c, 10) : void 0;
                (!l || ad(new Date, new Date(l)) > 7) && (ii.setItem($a.lineAppAuthRequestedAt, `${Date.now()}`),
                r.login("line"))
            } catch (c) {
                console.error(c)
            }
        setTimeout(Ua, 3e3);
        const u = qt();
        await new Promise(c => {
            const l = setTimeout(c, 3e4);
            (n || qr(!0)).then( () => {
                clearTimeout(l),
                c()
            }
            )
        }
        ),
        Ua(),
        qt() - u > 1e4 && await new Promise(c => setTimeout(c, 2e3))
    } else
        console.info("[PLATFORM] reloadGame in app mode"),
        document.body.style.backgroundColor = "#fff",
        n || qr(!0),
        Ua();
    Py(),
    Ay(),
    setTimeout(xd, 1e3)
}
Ly();
const Uy = Object.freeze(Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, {
    value: "Module"
}));
export {mr as F, kd as _, Rr as a, Ja as b, Oy as c, uy as d, Dy as e, By as f, qy as g, Fy as h, Ny as i, jy as j, Vy as k, uv as l, Wy as m, Hy as n, ky as o, Gy as p, Uy as q, jm as r, ly as s, cy as t};
