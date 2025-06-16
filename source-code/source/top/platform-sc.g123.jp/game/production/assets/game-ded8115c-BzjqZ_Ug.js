const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/app-CpUCrGhP.js", "assets/game-beb9f26b--5uYc-_c.js", "assets/contextTrackingHelper-nB-OPn1T.css", "assets/game-03165520-C9c3cPxP.js", "assets/game-d8b296a6-D6-XlEtG.js", "assets/game-c7acd5ea-fobi1TZp.js", "assets/game-6f09ab72-CE2_ieOF.js", "assets/game-8cc43aba-Byxz78RI.js", "assets/game-e58840a6-X7mMB24c.js", "assets/game-33507154-DyI7v4sS.js", "assets/game-00a0a3d9-DymZZajw.js", "assets/game-4959c158-D4IOeLDe.js", "assets/game-486d4407-nfnwJ3XO.js", "assets/game-96573915-CovLvjmG.js", "assets/tailwind-7RJrjcio.css", "assets/game-2579259a-CR6d9Ilz.js", "assets/game-9d70c10e-BYkEDM1P.js"]))) => i.map(i => d[i]);
import {_ as P, a as it} from "./game-beb9f26b--5uYc-_c.js";
import {z as y, D as pe, T as st, u as f, B as Je, d as Pe, A as ae, y as Ke, a as D, r as G, a4 as V, e as ct, j as me, a5 as lt, f as b, w as Se, J as M, a6 as S, S as A, a7 as ke, a8 as Ee, a9 as ut, aa as dt, ab as ft, h as he, ac as pt, ad as mt, ae as ht, af as gt, ag as vt, ah as wt, p as yt, ai as _t, aj as bt, ak as Pt, al as St, l as J, am as xe, an as Ie, ao as kt, ap as Ce, M as Et, aq as xt, ar as It, as as Ct, O as At, o as Rt} from "./game-03165520-C9c3cPxP.js";
import {c as $t, d as Ye, s as Ze, l as Lt, i as Tt} from "./game-6f09ab72-CE2_ieOF.js";
import {a as Qe, b as Xe, c as Mt, d as Ot, t as Ae, s as Re, F as T} from "./app-CpUCrGhP.js";
function Dt(e) {
    if (e === null || e === !0 || e === !1)
        return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
function Nt(e, t) {
    Qe(2, arguments);
    var n = Xe(e)
      , r = Dt(t);
    return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r),
    n)
}
function E(e, t) {
    for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
        r = "0" + r;
    return n + r
}
function jt(e, t) {
    var n, r;
    Qe(1, arguments);
    var o = Xe(e);
    if (isNaN(o.getTime()))
        throw new RangeError("Invalid time value");
    var m = String((n = void 0) !== null && n !== void 0 ? n : "extended")
      , l = String((r = void 0) !== null && r !== void 0 ? r : "complete");
    if (m !== "extended" && m !== "basic")
        throw new RangeError("format must be 'extended' or 'basic'");
    if (l !== "date" && l !== "time" && l !== "complete")
        throw new RangeError("representation must be 'date', 'time', or 'complete'");
    var d = ""
      , u = ""
      , a = m === "extended" ? "-" : ""
      , i = m === "extended" ? ":" : "";
    if (l !== "time") {
        var c = E(o.getDate(), 2)
          , s = E(o.getMonth() + 1, 2)
          , h = E(o.getFullYear(), 4);
        d = "".concat(h).concat(a).concat(s).concat(a).concat(c)
    }
    if (l !== "date") {
        var g = o.getTimezoneOffset();
        if (g !== 0) {
            var v = Math.abs(g)
              , k = E(Math.floor(v / 60), 2)
              , U = E(v % 60, 2)
              , R = g < 0 ? "+" : "-";
            u = "".concat(R).concat(k, ":").concat(U)
        } else
            u = "Z";
        var $ = E(o.getHours(), 2)
          , K = E(o.getMinutes(), 2)
          , Y = E(o.getSeconds(), 2)
          , Z = d === "" ? "" : "T"
          , W = [$, K, Y].join(i);
        d = "".concat(d).concat(Z).concat(W).concat(u)
    }
    return d
}
var $e, Le;
function oe() {
    return oe = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    oe.apply(null, arguments)
}
var Ut = function(e) {
    return y("svg", oe({
        xmlns: "http://www.w3.org/2000/svg",
        width: 68,
        height: 24
    }, e), $e || ($e = y("path", {
        d: "M22.385 5.84c.262.261.409.617.409.988v17.108H27.2V5.858c0-.92-.365-1.8-1.013-2.45L22.778 0l-3.116 3.117zM7.744 5.334c.262-.262.617-.409.989-.409H17V.518H8.283A4.72 4.72 0 0 0 4.945 1.9L1.383 5.463A4.72 4.72 0 0 0 0 8.8v11.55a3.463 3.463 0 0 0 3.463 3.463h14.796v-9.238c0-.918-.365-1.8-1.014-2.448l-3.41-3.409-3.115 3.116 2.723 2.723c.261.262.409.617.409.989v3.86H4.873a.466.466 0 0 1-.466-.466V9.25c0-.372.148-.727.41-.989l2.927-2.928Zm33.866-.136a.93.93 0 0 0-.659-.273H30.916V.518h10.812c.918 0 1.8.365 2.448 1.013l3.041 3.042a3.46 3.46 0 0 1 1.014 2.448v3.056a3.46 3.46 0 0 1-2.1 3.182l-10.84 4.647a.47.47 0 0 0-.282.428v1.073h13.537v4.407H30.6v-6.41c0-1.386.826-2.638 2.1-3.183l11.123-4.768V7.798a.93.93 0 0 0-.274-.66zm20.37-.273c.246 0 .483.098.658.273l.681.682a.93.93 0 0 1 .274.658v4.369H68V5.76c0-.918-.365-1.8-1.014-2.448L65.204 1.53A3.47 3.47 0 0 0 62.756.518H51.341v4.407z"
    })), Le || (Le = y("path", {
        d: "M63.593 18.174v-.063l-5.65-5.652 3.115-3.115 5.928 5.927A3.46 3.46 0 0 1 68 17.72v.846c0 .918-.365 1.8-1.014 2.448l-1.782 1.782a3.46 3.46 0 0 1-2.448 1.014H51v-4.407h10.98a.93.93 0 0 0 .658-.274z"
    })))
};
const Wt = /\b(w-(\d{1,2}|\d\.\d|\d{1,2}\/\d{1,2}|auto|px|full|screen|min|max|fit))\b/
  , Ht = pe( ({style: e, className: t=""}, n) => {
    const r = st( () => {
        const o = t && Wt.test(t)
          , m = e?.width;
        return o || m
    }
    , [t, e?.width]);
    return f("div", {
        ref: n,
        children: f(Ut, {
            className: t || "fill-current",
            ...!r && {
                height: "14",
                width: "42"
            },
            viewBox: "0 0 68 24",
            ...e && {
                style: e
            }
        })
    })
}
);
var Te, Me, Oe;
function ie() {
    return ie = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ie.apply(null, arguments)
}
var Gt = function(e) {
    return y("svg", ie({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, e), Te || (Te = y("path", {
        fill: "currentColor",
        d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    })), Me || (Me = y("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
        clipRule: "evenodd"
    })), Oe || (Oe = y("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M17.707 7.793a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 13.086l5.293-5.293a1 1 0 0 1 1.414 0",
        clipRule: "evenodd"
    })))
};
const Vt = pe( (e, t) => f(Je, {
    ref: t,
    IconSvg: Gt,
    ...e
}));
var De, Ne, je, Ue;
function se() {
    return se = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    se.apply(null, arguments)
}
var zt = function(e) {
    return y("svg", se({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, e), De || (De = y("path", {
        fill: "currentColor",
        d: "M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18"
    })), Ne || (Ne = y("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12",
        clipRule: "evenodd"
    })), je || (je = y("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1",
        clipRule: "evenodd"
    })), Ue || (Ue = y("circle", {
        cx: 12,
        cy: 16,
        r: 1,
        fill: "#fff"
    })))
};
const Bt = pe( (e, t) => f(Je, {
    ref: t,
    IconSvg: zt,
    ...e
}))
  , Ft = ({open: e, children: t, onClose: n, onClosed: r, onConfirm: o, confirmBtnText: m="Yes", cancelBtnText: l="No", showCancelBtn: d=!0, className: u, style: a, maskClassName: i, maskStyle: c, headerClassName: s, headerStyle: h, contentClassName: g, contentStyle: v, logo: k, title: U, icon: R, footer: $, danger: K, maskClosable: Y}) => {
    const [Z,W] = Pe(!0)
      , [ge,ve] = Pe(!1)
      , H = ae(null)
      , we = ae();
    if (Ke( () => {
        var w, O;
        e ? (w = H.current,
        O = document.activeElement,
        w && w.contains(O) || (we.current = document.activeElement),
        H.current?.focus()) : we.current?.focus()
    }
    , [e]),
    !e && Z)
        return null;
    const ye = w => {
        const O = H.current;
        if (!O)
            return;
        const I = Array.from(O.querySelectorAll('[tabindex="0"]'))
          , {activeElement: at} = document
          , L = I.findIndex(ot => ot === at);
        w ? L === -1 || L === I.length - 1 ? I[0]?.focus() : I[L + 1]?.focus() : L === -1 || L === 0 ? I[I.length - 1]?.focus() : I[L - 1]?.focus()
    }
      , _e = () => {
        if (o) {
            const w = o();
            w && (ve(!0),
            w.finally( () => {
                ve(!1)
            }
            ))
        }
    }
      , be = $ === void 0 ? f("footer", K ? {
        className: "flex px-8 pb-5 pt-3",
        children: [f(D, {
            className: "mx-2 flex-1 rounded-full border-0 py-3.5 text-center text-xs font-bold first:ml-0 last:mr-0",
            "data-testid": "g123-dialog-confirm-btn",
            loading: ge,
            tabIndex: 0,
            type: "secondary",
            onClick: _e,
            children: m
        }), d ? f(D, {
            className: "mx-2 flex-1 rounded-full border-0 py-3.5 text-center text-xs font-bold first:ml-0 last:mr-0",
            "data-testid": "g123-dialog-cancel-btn",
            tabIndex: 0,
            type: "primary",
            onClick: n,
            children: l
        }) : null]
    } : {
        className: "flex px-8 pb-5 pt-3",
        children: [d ? f(D, {
            className: "mx-2 flex-1 rounded-full border-0 py-3.5 text-center text-xs font-bold first:ml-0 last:mr-0",
            "data-testid": "g123-dialog-cancel-btn",
            tabIndex: 0,
            type: "secondary",
            onClick: n,
            children: l
        }) : null, f(D, {
            className: "mx-2 flex-1 rounded-full border-0 py-3.5 text-center text-xs font-bold first:ml-0 last:mr-0",
            "data-testid": "g123-dialog-confirm-btn",
            loading: ge,
            tabIndex: 0,
            type: "primary",
            onClick: _e,
            children: m
        })]
    }) : $ === null || (Q = $,
    Array.isArray(Q) && Q.length === 0) ? null : f("footer", {
        className: "flex justify-between px-8 pb-5 pt-3",
        children: $
    });
    var Q;
    return f("div", {
        ref: H,
        className: G("fixed inset-0 z-50 flex min-h-screen items-center justify-center", {
            "animate-fade-out-bottom": !e,
            "animate-fade-in-bottom": e
        }),
        "data-testid": "g123-dialog-root",
        role: "presentation",
        tabIndex: -1,
        onAnimationEnd: () => {
            e ? W(!1) : (W(!0),
            r && r())
        }
        ,
        onKeyDown: w => {
            w.key === "Escape" && (w.stopPropagation(),
            n?.()),
            w.key === "Tab" && (w.preventDefault(),
            w.shiftKey ? ye(!1) : ye(!0))
        }
        ,
        children: [f("div", {
            className: V("fixed top-0 size-full bg-black/30", i),
            style: c,
            onClick: Y ? n : void 0
        }), f("div", {
            "aria-modal": "true",
            className: V(G("z-50 inline-block overflow-hidden", "rounded-lg bg-surface-primary shadow-lg", "w-fit min-w-64 max-w-[calc(100%-3rem)]"), u),
            role: "dialog",
            style: a,
            children: [f("header", {
                className: V("relative flex items-center justify-center", s),
                style: h,
                children: [f("div", {
                    className: "size-10"
                }), f("div", {
                    className: "flex flex-1 items-center justify-center",
                    children: [k && f(Ht, {}), U && f("h2", {
                        className: "flex flex-1 justify-center text-base font-semibold",
                        children: U
                    })]
                }), f("div", {
                    className: "flex justify-end",
                    children: f(D, {
                        "data-testid": "g123-dialog-close-icon",
                        icon: f(ct, {
                            className: "text-font-primary"
                        }),
                        tabIndex: 0,
                        type: "link",
                        onClick: n
                    })
                })]
            }), R && f("div", {
                className: G("flex items-center justify-center pb-4", {
                    "pt-4": !!k
                }),
                children: [R === "exclamation" && f(Bt, {
                    className: "scale-[2.5] text-error-default"
                }), R === "tick" && f(Vt, {
                    className: "scale-[2.5] text-success-default"
                })]
            }), f("div", {
                className: V(G("break-words px-10 pb-3 pt-2 text-center font-semibold", {
                    "pt-4": R,
                    "pb-6": !be
                }), g),
                style: v,
                children: t
            }), be]
        })]
    })
}
;
let ce = null;
const qt = () => ce || document.body
  , Kn = () => {
    const e = ae(null);
    return Ke( () => (ce = e.current,
    () => {
        ce = null
    }
    ), []),
    f("div", {
        ref: e
    })
}
  , X = e => {
    const {onClose: t, onConfirm: n, onClosed: r, content: o, ...m} = e;
    let l;
    const d = new Promise(v => {
        l = v
    }
    );
    function u() {
        t?.(),
        l(!1),
        g(!1)
    }
    async function a() {
        const v = await n?.();
        l(v ?? !0),
        g(!1)
    }
    const i = document.createElement("div")
      , c = qt();
    c.appendChild(i);
    const s = $t(i);
    function h() {
        r?.(),
        s.unmount(),
        c.removeChild(i)
    }
    function g(v) {
        s.render(f(Ft, {
            ...m,
            open: v,
            onClose: u,
            onClosed: h,
            onConfirm: a,
            children: o
        }))
    }
    return g(!0),
    {
        destroy: () => {
            g(!1)
        }
        ,
        then: v => d.then(v)
    }
}
  , Jt = {
    show: X,
    confirm: X,
    alert: e => X({
        showCancelBtn: !1,
        confirmBtnText: "OK",
        ...e
    })
};
let F, z;
function Kt(e) {
    z = e
}
async function q() {
    F = {
        type: "friday",
        module: await P( () => import("./app-CpUCrGhP.js").then(e => e.o), __vite__mapDeps([0, 1, 2, 3, 4]))
    },
    await F.module.initFridayApp()
}
function Yt(e) {
    if (!z)
        throw new Error("cs props not init");
    if (!F)
        throw q(),
        new Error("cs module not init");
    z.openSetting = e?.openSetting,
    F.module.showFridayApp(z)
}
let le = null;
function Zt() {
    return le
}
async function Qt(e, t) {
    le = await (await P(async () => {
        const {loadGameTracingWorker: r} = await import("./game-e2c233d4-DSOpGaIe.js");
        return {
            loadGameTracingWorker: r
        }
    }
    , [])).loadGameTracingWorker();
    const n = {
        action: "init",
        data: {
            environment: t,
            app: e,
            configEndpoint: `${me.SHD_G123_WEB_URL}/api/v2/3rd_party_config/${e}/sentry_game`
        }
    };
    le.postMessage(n)
}
let Xt = (e=21) => crypto.getRandomValues(new Uint8Array(e)).reduce( (t, n) => (n &= 63,
n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_",
t), "")
  , p = ""
  , ue = "";
function en(e) {
    const t = new URL(`${me.SHD_G123_GAME_URL}/game/${window.option.appId}?lang=${M.language}`);
    if (t.searchParams.set("platform", "PlatformShare"),
    t.searchParams.set("utm_source", "g123-game"),
    t.searchParams.set("utm_campaign", "platform-share"),
    e === "system" ? t.searchParams.set("utm_medium", "web_share") : t.searchParams.set("utm_medium", "popup_share"),
    t.searchParams.set("ctw_share_code", ue),
    typeof p?.query == "object")
        for (const [n,r] of Object.entries(p.query))
            t.searchParams.set(n, r);
    return t.href
}
function C(e) {
    let t;
    if (typeof p > "u")
        return t;
    const n = en(e);
    switch (e) {
    case "line":
        if (typeof p.ctw_line_share_text > "u")
            return;
        t = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(n)}&text=${p.ctw_line_share_text}`;
        break;
    case "facebook":
        t = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(n)}`;
        break;
    case "twitter":
        if (typeof p.ctw_twitter_share_text > "u")
            return;
        t = `http://twitter.com/share?text=${p.ctw_twitter_share_text}&url=${encodeURIComponent(n)}`,
        typeof p.ctw_twitter_share_via < "u" && (t += `&via=${p.ctw_twitter_share_via}`),
        typeof p.ctw_twitter_share_hashtags < "u" && (t += `&hashtags=${p.ctw_twitter_share_hashtags}`);
        break;
    case "copy":
        t = `${p.ctw_copy_text || p.ctw_line_share_text || p.ctw_twitter_share_text} 
${n}`;
        break;
    case "system":
        if (typeof p.ctw_copy_text > "u")
            return;
        if (t = {
            text: p.ctw_copy_text || p.ctw_line_share_text || p.ctw_twitter_share_text,
            url: n
        },
        typeof p.ctw_twitter_share_hashtags == "string") {
            const r = p.ctw_twitter_share_hashtags.split(",").map(o => `#${o}`).join(" ");
            t.text += ` ${r}`
        }
        typeof p.ctw_twitter_share_via < "u" && (t.text += ` @${p.ctw_twitter_share_via}`);
        break
    }
    return t
}
function et() {
    return !!(navigator.share && !lt(navigator.userAgent))
}
function tn(e) {
    if (e === "line") {
        const t = C("line");
        window.open(t);
        return
    }
    if (e === "facebook") {
        const t = C("facebook");
        window.open(t);
        return
    }
    if (e === "twitter") {
        const t = C("twitter");
        window.open(t);
        return
    }
    if (e === "copy") {
        const t = C("copy");
        Ot(t);
        return
    }
    if (e === "system") {
        const t = C("system");
        navigator.share(t).then( () => {
            console.info("thanks for sharing")
        }
        ).catch(console.error)
    }
}
function We(e) {
    const t = (e || ["line", "facebook", "twitter", "system", "copy"]).filter(n => !(n === "system" && !et() || n === "line" && !p.ctw_line_share_text || n === "twitter" && !p.ctw_twitter_share_text || n === "copy" && !C("copy")));
    t.length === 1 && tn(t[0]),
    t.length > 1 && (b.dispatch(Se.actions.update({
        targets: t
    })),
    b.dispatch(Se.actions.show()))
}
const nn = e => {
    if (p = e,
    ue = Xt(),
    (async () => await Mt({
        ctw_share_code: ue,
        ...p
    }))(),
    et()) {
        const t = C("system");
        navigator.share(t).then( () => {
            console.info("thanks for sharing")
        }
        ).catch(n => {
            if (n && n.name === "AbortError") {
                console.info("WebShare cancelled");
                return
            }
            console.error(n),
            We(e.targets)
        }
        )
    } else
        We(e.targets)
}
  , He = "g_visits";
function rn() {
    const {appId: e} = window.option;
    if (!e)
        return;
    let t = {};
    try {
        t = JSON.parse(S.getItem(He) || "{}")
    } catch (n) {
        console.error(n),
        t = {}
    }
    S.setItem(He, JSON.stringify({
        ...t,
        [e]: (t[e] || 0) + 1
    }))
}
const an = 7;
function on(e) {
    let t = 0;
    try {
        t = Number.parseInt(S.getItem(`${A.prefixPwaPromptDismissCount}:${e}`) || "0", 10)
    } catch (n) {
        console.error(n)
    }
    S.setItem(`${A.prefixPwaPromptDismissExpiredAt}:${e}`, jt(Nt(new Date, Math.min(an * (t + 1), 100)))),
    S.setItem(`${A.prefixPwaPromptDismissCount}:${e}`, `${t + 1}`)
}
const sn = () => {
    if (window?.pwaInstallPrompt)
        return window.pwaInstallPrompt.prompt(),
        window.pwaInstallPrompt.userChoice
}
;
let B;
const de = () => {
    const {appId: e} = window.option;
    e && B?.show && typeof B.show == "function" && B.show({
        handleDismiss: () => on(e)
    })
}
  , ee = e => {
    B = e
}
;
function cn() {
    if (rn(),
    ke() || Ee())
        return;
    const {appId: e} = window.option;
    window.PWA_CONFIG = {
        pageId: e,
        splashScreen: () => document.querySelector("#splash img").src
    },
    P(async () => {
        const {default: t} = await import("./game-b396a274-5EAcgZ1M.js");
        return {
            default: t
        }
    }
    , []).then( ({default: t}) => {
        t()
    }
    ),
    !ke() && !Ee() && (ut() ? P( () => import("./game-c7acd5ea-fobi1TZp.js"), __vite__mapDeps([5, 3, 1, 2, 4, 6, 7, 0, 8, 9, 10, 11])).then(t => {
        ee(t)
    }
    ) : dt() ? P( () => import("./game-486d4407-nfnwJ3XO.js"), __vite__mapDeps([12, 3, 1, 2, 4, 6, 7, 0, 8, 9, 11])).then(t => {
        ee(t)
    }
    ) : ft() && P( () => import("./game-96573915-CovLvjmG.js"), __vite__mapDeps([13, 3, 1, 2, 4, 6, 7, 0, 11, 9])).then(t => {
        ee(t)
    }
    ))
}
function tt(e) {
    return !!e && typeof e == "object" && "requestUserId"in e && "autoConfirm"in e && typeof e.requestUserId == "string" && typeof e.autoConfirm == "boolean"
}
function ln(e) {
    if (!tt(e)) {
        console.error("Invalid account recovery data", e);
        return
    }
    S.setItem(A.accountRecoveryData, JSON.stringify(e))
}
function Yn() {
    const e = S.getItem(A.accountRecoveryData);
    if (!e)
        return;
    const t = he().currentUser()?.userId;
    if (t)
        try {
            const n = JSON.parse(e);
            if (!tt(n)) {
                S.removeItem(A.accountRecoveryData);
                return
            }
            if (n.requestUserId === t)
                return;
            const r = n.autoConfirm ? M.t("account_recovery.welcome_back", {
                userId: t
            }) : M.t("account_recovery.account_recovered", {
                userId: t
            });
            setTimeout( () => {
                S.removeItem(A.accountRecoveryData),
                Ye({
                    type: "login",
                    content: r
                })
            }
            , 1e3)
        } catch (n) {
            console.error("Failed to parse account recovery data", n)
        }
}
function un({meta: e={}}) {
    const t = e.forceReload !== !1;
    Et("FROM_GAME_IFRAME", t)
}
function dn({data: e}) {
    if (!e) {
        console.error("Empty share data", e);
        return
    }
    nn(e)
}
function fn({data: e}) {
    de()
}
function pn() {
    window.pwaInstallPrompt ? sn().catch(e => {
        console.error("[PWA] Failed to show native PWA install promotion", e),
        de()
    }
    ) : de()
}
function mn({data: e}) {
    ln(e)
}
function hn() {
    Yt()
}
function gn(e) {
    switch (e.data.type) {
    case "login":
        Ae(!0),
        Re(Ce.Login);
        break;
    case "sns":
        Ae(!0),
        Re(Ce.Link);
        break
    }
}
function vn(e) {
    e?.data?.provider && he().login(e.data.provider, e.data.options)
}
function wn(e) {
    e?.data?.provider && he().link(e.data.provider, e.data.options)
}
function yn(e) {
    const n = b.getState().imConnect.supportedImTypes
      , {appId: r} = window.option;
    if (e?.data.provider === "auto") {
        const o = n[0];
        o && xe(Ie.H5Page, o, r);
        return
    }
    if (e?.data?.provider && n.includes(e.data.provider)) {
        xe(Ie.H5Page, e.data.provider, r);
        return
    }
    b.dispatch(kt(!0))
}
function _n(e) {
    const {data: t} = e;
    if (!t) {
        console.error("Empty account recovery data", t);
        return
    }
    St(t)
}
function bn() {
    b.dispatch(Pt())
}
function Pn(e) {
    setTimeout(async () => {
        const t = Zt();
        if (!t) {
            console.error("gameTrackerWorker is not initialized");
            return
        }
        const n = await J()
          , r = {
            action: "cp_game_error_tracking",
            data: {
                ...e.data,
                userId: n.sub,
                appCode: n.aud,
                lang: n.lang,
                region: n.region,
                country: n.country,
                url: window.location.href
            }
        };
        t.postMessage(r)
    }
    )
}
function Sn(e) {
    setTimeout( () => {
        _t(e)
    }
    )
}
function kn(e) {
    console.info("RECEIVE_GAME_EVENT", e),
    b.dispatch(bt(e))
}
function En({data: e}) {
    const {lang: t} = e;
    if (console.info(`Switching lang to ${t}`),
    !t) {
        console.error("Empty share data", e);
        return
    }
    Ze(t, !0)
}
function xn(e) {
    let t;
    if (e.data) {
        if (typeof e.data == "object" && (t = e.data),
        !t && typeof e.data == "string")
            try {
                t = JSON.parse(e.data)
            } catch {}
        if (t) {
            if (pt(t, M.language) && b.dispatch(mt({
                appId: t.appCode,
                isRefresh: !0
            })),
            t.event === "PaymentBegin") {
                Sn(t);
                return
            }
            if (t.event === "PaymentSucceed") {
                b.dispatch(ht(t.order.paymentCode));
                return
            }
            if (gt(t) || vt(t)) {
                kn(t);
                return
            }
            switch (t.action) {
            case "reload":
                {
                    un(t);
                    break
                }
            case "share":
                dn(t);
                break;
            case "show_pwa_prompt":
                fn(t);
                break;
            case "install_pwa":
                pn();
                break;
            case "support":
                hn();
                break;
            case "cp_login":
                gn(t);
                break;
            case "sns_login":
                vn(t);
                break;
            case "sns_link":
                wn(t);
                break;
            case "im_connect":
                yn(t);
                break;
            case "cp_game_error_tracking":
                Pn(t);
                break;
            case "switch_lang":
                En(t);
                break;
            case "save_recovery_account_data":
                {
                    mn(t);
                    break
                }
            case "StartPayment":
                {
                    b.dispatch(wt.actions.triggerShowCoupon());
                    const {payload: n} = t;
                    yt({
                        action: "p_paystart",
                        data: {
                            paymentMethods: n.paymentMethods,
                            defaultPayment: n.defaultPayment,
                            order_no: n.order?.orderNo,
                            items: n.order?.items,
                            custom: {
                                mode: n?.paymentButtonMode || 0
                            }
                        }
                    });
                    break
                }
            case "account_recovery":
                _n(t);
                break;
            case "show_game_translator_dialog":
                bn();
                break
            }
        }
    }
}
let Ge = !1;
function In() {
    console.log("[PLATFORM_APP] initAppBridge"),
    !Ge && (Ge = !0,
    window.addEventListener("message", xn, !1))
}
try {
    self["workbox:window:7.2.0"] && _()
} catch {}
function Ve(e, t) {
    return new Promise(function(n) {
        var r = new MessageChannel;
        r.port1.onmessage = function(o) {
            n(o.data)
        }
        ,
        e.postMessage(t, [r.port2])
    }
    )
}
function Cn(e) {
    var t = function(n, r) {
        if (typeof n != "object" || !n)
            return n;
        var o = n[Symbol.toPrimitive];
        if (o !== void 0) {
            var m = o.call(n, r);
            if (typeof m != "object")
                return m;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(n)
    }(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function An(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, Cn(r.key), r)
    }
}
function fe(e, t) {
    return fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r,
        n
    }
    ,
    fe(e, t)
}
function ze(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function Rn(e, t) {
    var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n)
        return (n = n.call(e)).next.bind(n);
    if (Array.isArray(e) || (n = function(o, m) {
        if (o) {
            if (typeof o == "string")
                return ze(o, m);
            var l = Object.prototype.toString.call(o).slice(8, -1);
            return l === "Object" && o.constructor && (l = o.constructor.name),
            l === "Map" || l === "Set" ? Array.from(o) : l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? ze(o, m) : void 0
        }
    }(e)) || t) {
        n && (e = n);
        var r = 0;
        return function() {
            return r >= e.length ? {
                done: !0
            } : {
                done: !1,
                value: e[r++]
            }
        }
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
try {
    self["workbox:core:7.2.0"] && _()
} catch {}
var te = function() {
    var e = this;
    this.promise = new Promise(function(t, n) {
        e.resolve = t,
        e.reject = n
    }
    )
};
function ne(e, t) {
    var n = location.href;
    return new URL(e,n).href === new URL(t,n).href
}
var N = function(e, t) {
    this.type = e,
    Object.assign(this, t)
};
function x(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)),
    t ? e.then(t) : e)
}
function $n() {}
var Ln = {
    type: "SKIP_WAITING"
};
function Be(e, t) {
    return e && e.then ? e.then($n) : Promise.resolve()
}
var Tn = function(e) {
    function t(d, u) {
        var a, i;
        return u === void 0 && (u = {}),
        (a = e.call(this) || this).nn = {},
        a.tn = 0,
        a.rn = new te,
        a.en = new te,
        a.on = new te,
        a.un = 0,
        a.an = new Set,
        a.cn = function() {
            var c = a.fn
              , s = c.installing;
            a.tn > 0 || !ne(s.scriptURL, a.sn.toString()) || performance.now() > a.un + 6e4 ? (a.vn = s,
            c.removeEventListener("updatefound", a.cn)) : (a.hn = s,
            a.an.add(s),
            a.rn.resolve(s)),
            ++a.tn,
            s.addEventListener("statechange", a.ln)
        }
        ,
        a.ln = function(c) {
            var s = a.fn
              , h = c.target
              , g = h.state
              , v = h === a.vn
              , k = {
                sw: h,
                isExternal: v,
                originalEvent: c
            };
            !v && a.mn && (k.isUpdate = !0),
            a.dispatchEvent(new N(g,k)),
            g === "installed" ? a.wn = self.setTimeout(function() {
                g === "installed" && s.waiting === h && a.dispatchEvent(new N("waiting",k))
            }, 200) : g === "activating" && (clearTimeout(a.wn),
            v || a.en.resolve(h))
        }
        ,
        a.yn = function(c) {
            var s = a.hn
              , h = s !== navigator.serviceWorker.controller;
            a.dispatchEvent(new N("controlling",{
                isExternal: h,
                originalEvent: c,
                sw: s,
                isUpdate: a.mn
            })),
            h || a.on.resolve(s)
        }
        ,
        a.gn = (i = function(c) {
            var s = c.data
              , h = c.ports
              , g = c.source;
            return x(a.getSW(), function() {
                a.an.has(g) && a.dispatchEvent(new N("message",{
                    data: s,
                    originalEvent: c,
                    ports: h,
                    sw: g
                }))
            })
        }
        ,
        function() {
            for (var c = [], s = 0; s < arguments.length; s++)
                c[s] = arguments[s];
            try {
                return Promise.resolve(i.apply(this, c))
            } catch (h) {
                return Promise.reject(h)
            }
        }
        ),
        a.sn = d,
        a.nn = u,
        navigator.serviceWorker.addEventListener("message", a.gn),
        a
    }
    var n, r;
    r = e,
    (n = t).prototype = Object.create(r.prototype),
    n.prototype.constructor = n,
    fe(n, r);
    var o, m, l = t.prototype;
    return l.register = function(d) {
        var u = (d === void 0 ? {} : d).immediate
          , a = u !== void 0 && u;
        try {
            var i = this;
            return x(function(c, s) {
                var h = c();
                return h && h.then ? h.then(s) : s(h)
            }(function() {
                if (!a && document.readyState !== "complete")
                    return Be(new Promise(function(c) {
                        return window.addEventListener("load", c)
                    }
                    ))
            }, function() {
                return i.mn = !!navigator.serviceWorker.controller,
                i.dn = i.pn(),
                x(i.bn(), function(c) {
                    i.fn = c,
                    i.dn && (i.hn = i.dn,
                    i.en.resolve(i.dn),
                    i.on.resolve(i.dn),
                    i.dn.addEventListener("statechange", i.ln, {
                        once: !0
                    }));
                    var s = i.fn.waiting;
                    return s && ne(s.scriptURL, i.sn.toString()) && (i.hn = s,
                    Promise.resolve().then(function() {
                        i.dispatchEvent(new N("waiting",{
                            sw: s,
                            wasWaitingBeforeRegister: !0
                        }))
                    }).then(function() {})),
                    i.hn && (i.rn.resolve(i.hn),
                    i.an.add(i.hn)),
                    i.fn.addEventListener("updatefound", i.cn),
                    navigator.serviceWorker.addEventListener("controllerchange", i.yn),
                    i.fn
                })
            }))
        } catch (c) {
            return Promise.reject(c)
        }
    }
    ,
    l.update = function() {
        try {
            return this.fn ? x(Be(this.fn.update())) : x()
        } catch (d) {
            return Promise.reject(d)
        }
    }
    ,
    l.getSW = function() {
        return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise
    }
    ,
    l.messageSW = function(d) {
        try {
            return x(this.getSW(), function(u) {
                return Ve(u, d)
            })
        } catch (u) {
            return Promise.reject(u)
        }
    }
    ,
    l.messageSkipWaiting = function() {
        this.fn && this.fn.waiting && Ve(this.fn.waiting, Ln)
    }
    ,
    l.pn = function() {
        var d = navigator.serviceWorker.controller;
        return d && ne(d.scriptURL, this.sn.toString()) ? d : void 0
    }
    ,
    l.bn = function() {
        try {
            var d = this;
            return x(function(u, a) {
                try {
                    var i = u()
                } catch (c) {
                    return a(c)
                }
                return i && i.then ? i.then(void 0, a) : i
            }(function() {
                return x(navigator.serviceWorker.register(d.sn, d.nn), function(u) {
                    return d.un = performance.now(),
                    u
                })
            }, function(u) {
                throw u
            }))
        } catch (u) {
            return Promise.reject(u)
        }
    }
    ,
    o = t,
    (m = [{
        key: "active",
        get: function() {
            return this.en.promise
        }
    }, {
        key: "controlling",
        get: function() {
            return this.on.promise
        }
    }]) && An(o.prototype, m),
    Object.defineProperty(o, "prototype", {
        writable: !1
    }),
    o
}(function() {
    function e() {
        this.Pn = new Map
    }
    var t = e.prototype;
    return t.addEventListener = function(n, r) {
        this.jn(n).add(r)
    }
    ,
    t.removeEventListener = function(n, r) {
        this.jn(n).delete(r)
    }
    ,
    t.dispatchEvent = function(n) {
        n.target = this;
        for (var r, o = Rn(this.jn(n.type)); !(r = o()).done; )
            (0,
            r.value)(n)
    }
    ,
    t.jn = function(n) {
        return this.Pn.has(n) || this.Pn.set(n, new Set),
        this.Pn.get(n)
    }
    ,
    e
}());
async function Mn() {
    const {appId: e} = window.option;
    if (!e)
        throw new Error("appId does not exist");
    const t = `${window.location.origin}/game/${e}`
      , n = `/pwa/${e}/sw`
      , r = new Tn(n,{
        scope: t
    });
    return r.addEventListener("activated", o => {
        o.isUpdate ? console.log("[service-worker] service worker activated") : console.log("[service-worker] service worker activated for the first time");
        const m = [window.location.href, ...performance.getEntriesByType("resource").map(l => l.name)];
        r.messageSW({
            type: "CACHE_URLS",
            payload: {
                urlsToCache: m
            }
        })
    }
    ),
    console.log("[service-worker] service worker register"),
    r.register()
}
const On = (e => async () => {
    if ("serviceWorker"in navigator)
        return e.instance || (e.instance = Mn()),
        e.instance
}
)({})
  , nt = it();
async function Fe(e) {
    if (!e)
        return;
    const t = await J()
      , {memory: n} = performance
      , r = {
        type: "sw/heartbeat",
        action: {
            kind: "mount",
            sessionId: nt,
            reportParams: await xt(),
            custom: {
                userId: t.sub,
                appCode: t.aud,
                issuedAt: t.iat,
                lang: t.lang,
                memory: n ? {
                    jsHeapSizeLimit: n.jsHeapSizeLimit,
                    totalJSHeapSize: n.totalJSHeapSize,
                    usedJSHeapSize: n.usedJSHeapSize
                } : void 0
            }
        }
    };
    e.postMessage(r)
}
async function qe(e) {
    if (!e)
        return;
    const t = {
        type: "sw/heartbeat",
        action: {
            kind: "unmount",
            sessionId: nt
        }
    };
    e.postMessage(t)
}
function Dn(e) {
    return e?.type === "sw/heartbeat" && e?.kind === "ping"
}
async function Nn() {
    const e = {
        enabled: !0
    };
    navigator.serviceWorker.addEventListener("message", t => {
        e.enabled && Dn(t.data) && t.source && Fe(t.source)
    }
    ),
    window.addEventListener("pageshow", () => {
        e.enabled = !0,
        Fe(navigator.serviceWorker.controller)
    }
    ),
    window.addEventListener("pagehide", () => {
        e.enabled = !1,
        qe(navigator.serviceWorker.controller)
    }
    ),
    window.addEventListener("beforeunload", () => {
        e.enabled = !1,
        qe(navigator.serviceWorker.controller)
    }
    )
}
async function jn() {
    if (!("serviceWorker"in navigator))
        return;
    await (await On())?.update(),
    await Nn()
}
const Un = "g123";
let re;
function Wn(e) {
    return re || (re = It({
        config: {
            lang: e.lang,
            appId: Un,
            disableAuthRefresh: !0
        },
        onAuthStateChanged: (t, n) => {
            console.log("[CS_APP]: auth state changed", t, n)
        }
    })),
    re
}
async function Hn() {
    let e = window.option.lang;
    try {
        e = (await J()).lang
    } catch (n) {
        console.error(n)
    }
    return Wn({
        lang: e
    }).currentSession()
}
const j = "ja"
  , Gn = typeof requestIdleCallback == "function" ? requestIdleCallback : setTimeout;
async function rt() {
    const {lang: e} = window.option
      , n = new URLSearchParams(window.location.search).get("appCode") || window.option.appId
      , {appTitle: r} = window.option
      , {appVersion: o} = window.option
      , m = await Hn()
      , l = m.userId
      , d = m.code
      , u = b.getState().inGameAccount
      , a = window.option.providers
      , {ua: i, ...c} = new Ct().getResult()
      , s = JSON.stringify(c);
    Kt({
        appCode: n,
        appVersion: o,
        appTitle: r,
        g123Id: l,
        platformCode: d,
        lang: e,
        sns: a,
        deviceInfo: s,
        inGameUserAccount: {
            gameServerID: u?.game_server || "unknown",
            gameUserName: u?.role_name || "unknown",
            gameUserId: u?.role_id || "unknown",
            tags: u?.tags || []
        },
        gameUserStore: Rt
    })
}
async function Vn() {
    window.addEventListener("message", async e => {
        if (e?.data?.type?.startsWith("gp_global_actions/")) {
            if (e.data.type === "gp_global_actions/show_toast") {
                Ye(e.data.payload);
                return
            }
            if (e.data.type === "gp_global_actions/dismiss_toast") {
                At.dismiss();
                return
            }
            if (e.data.type === "gp_global_actions/show_dialog") {
                Jt.alert({
                    content: e.data.payload.message,
                    icon: "exclamation"
                });
                return
            }
            e.data.type === "gp_global_actions/reload_cshelp" && (await rt(),
            q())
        }
    }
    )
}
async function zn() {
    if (console.log(`[PLATFORM_APP] initApp, mode=[${window.option.mode}]`),
    In(),
    await rt(),
    window.option.mode === "app") {
        window.option.appId === "findmyaccount" && setTimeout( () => {
            q()
        }
        );
        return
    }
    let e = j;
    try {
        e = (await J()).lang || j
    } catch {
        e = new URL(window.location.href).searchParams.get("lang") || j
    }
    const t = await Lt(e, j);
    await M.use(Tt).init({
        resources: t,
        lng: e,
        fallbackLng: j,
        debug: me.NODE_ENV !== "production",
        interpolation: {
            escapeValue: !1
        }
    }),
    Ze(e),
    T.jobConsole && P( () => import("./game-5afd2156-CbvXjEy9.js"), []),
    T.mainApp && Promise.all([P( () => Promise.resolve({}), __vite__mapDeps([14])), P( () => import("./game-2579259a-CR6d9Ilz.js").then(n => n.r), __vite__mapDeps([15, 1, 2, 3, 4, 6, 7, 0, 9, 16, 10]))]).then( ([n,r]) => {
        r?.loadReactApp && r.loadReactApp(b, M)
    }
    ),
    Gn( () => {
        Vn(),
        T.pwa && jn(),
        T.pwa && cn(),
        T.gameErrorTrace && Qt(window.option?.appId, window.option?.runEnv),
        T.cs && setTimeout( () => {
            q()
        }
        )
    }
    )
}
const Zn = Object.freeze(Object.defineProperty({
    __proto__: null,
    initApp: zn
}, Symbol.toStringTag, {
    value: "Module"
}));
export {Ht as a, Vt as b, Yn as c, Zn as d, Bt as e, Jt as i, Kn as l, tn as o, Ft as p, Yt as s, de as t};
