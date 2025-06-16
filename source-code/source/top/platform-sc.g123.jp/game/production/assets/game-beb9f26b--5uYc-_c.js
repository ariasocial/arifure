const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/game-201d43b2-3D0n_qs2.js", "assets/game-d8b296a6-D6-XlEtG.js", "assets/game-687bafc7-DM5GjXir.js"]))) => i.map(i => d[i]);
const D = "modulepreload"
  , $ = function(e) {
    return window.__dynamic_base__ + "/" + e
}
  , p = {}
  , S = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const a = document.querySelector("meta[property=csp-nonce]")
          , s = a?.nonce || a?.getAttribute("nonce");
        o = Promise.allSettled(n.map(l => {
            if (l = $(l),
            l in p)
                return;
            p[l] = !0;
            const u = l.endsWith(".css")
              , k = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${k}`))
                return;
            const d = document.createElement("link");
            if (d.rel = u ? "stylesheet" : D,
            u || (d.as = "script"),
            d.crossOrigin = "",
            d.href = l,
            s && d.setAttribute("nonce", s),
            document.head.appendChild(d),
            u)
                return new Promise( (A, O) => {
                    d.addEventListener("load", A),
                    d.addEventListener("error", () => O(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    function i(a) {
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = a,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw a
    }
    return o.then(a => {
        for (const s of a || [])
            s.status === "rejected" && i(s.reason);
        return t().catch(i)
    }
    )
}
  , B = () => {
    const e = window.navigator.userAgent
      , t = e.indexOf("MSIE ")
      , n = e.indexOf("Trident/");
    return t > -1 || n > -1
}
;
function P() {
    if (window.Sentry)
        try {
            const {sentryOption: e} = window.option;
            if (!e)
                return;
            const t = [];
            window.Sentry.Integrations?.BrowserTracing && t.push(new window.Sentry.Integrations.BrowserTracing),
            window.Sentry.init({
                integrations: t,
                tracesSampleRate: 4e-4,
                ignoreErrors: ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error."],
                denyUrls: [/graph\.facebook\.com/i, /connect\.facebook\.net\/en_US\/all\.js/i, /eatdifferent\.com\.woopra-ns\.com/i, /static\.woopra\.com\/js\/woopra\.js/i, /extensions\//i, /^chrome:\/\//i, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i],
                ...e
            }),
            window.option.appId && window.Sentry?.setTag("app", window.option.appId)
        } catch (e) {
            console.error(e)
        }
}
B() || P();
const g = window?.option?.runEnv;
(g === "staging" || g === "local") && S(async () => {
    const {default: e} = await import("./game-201d43b2-3D0n_qs2.js").then(t => t.v);
    return {
        default: e
    }
}
, __vite__mapDeps([0, 1])).then( ({default: e}) => {
    new e
}
);
window.crypto || (e => {
    e.crypto = e.msCrypto
}
)(window);
S( () => import("./game-687bafc7-DM5GjXir.js").then(e => e.j), __vite__mapDeps([2, 1])).then(e => {
    window.$ = e.default
}
);
function h() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
        return crypto.randomUUID();
    let e = "", t, n;
    for (t = 0; t < 32; t += 1)
        n = Math.random() * 16 | 0,
        (t === 8 || t === 12 || t === 16 || t === 20) && (e += "-"),
        e += (t === 12 ? 4 : t === 16 ? n & 3 | 8 : n).toString(16);
    return e
}
const R = e => {
    const t = `${e}=`
      , n = document.cookie.split(";");
    for (let r = 0; r < n.length; r += 1) {
        let o = n[r];
        for (; o.charAt(0) === " "; )
            o = o.substring(1);
        if (o.indexOf(t) === 0)
            return o.substring(t.length, o.length)
    }
}
  , N = (e, t, n, r) => {
    const o = new Date;
    o.setTime(o.getTime() + n * 24 * 60 * 60 * 1e3);
    const i = `expires=${o.toUTCString()}`;
    document.cookie = `${e}=${t};${i}${r ? `;domain=${r}` : ""};path=/`
}
;
function Q(e) {
    document.cookie = `${e}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
}
const y = 7;
function C(e) {
    return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
async function U(e) {
    navigator.hardwareConcurrency && e.push({
        key: "cpu_cores",
        value: navigator.hardwareConcurrency,
        weight: 8,
        stability: 10
    }),
    navigator.deviceMemory && e.push({
        key: "device_memory",
        value: navigator.deviceMemory,
        weight: 8,
        stability: 10
    }),
    navigator.maxTouchPoints !== void 0 && e.push({
        key: "touch_points",
        value: navigator.maxTouchPoints,
        weight: 7,
        stability: 9
    }),
    navigator.platform && e.push({
        key: "platform",
        value: navigator.platform,
        weight: 6,
        stability: 8
    }),
    "oscpu"in navigator && e.push({
        key: "os_cpu",
        value: navigator.oscpu,
        weight: 5,
        stability: 7
    })
}
async function L(e) {
    try {
        const t = document.createElement("canvas")
          , n = t.getContext("webgl") || t.getContext("experimental-webgl");
        if (!n)
            return;
        const r = n.getExtension("WEBGL_debug_renderer_info");
        if (r) {
            const a = n.getParameter(r.UNMASKED_VENDOR_WEBGL);
            e.push({
                key: "gpu_vendor",
                value: a,
                weight: 9,
                stability: 10
            });
            const s = n.getParameter(r.UNMASKED_RENDERER_WEBGL);
            e.push({
                key: "gpu_renderer",
                value: s,
                weight: 10,
                stability: 10
            })
        }
        e.push({
            key: "max_texture_size",
            value: n.getParameter(n.MAX_TEXTURE_SIZE),
            weight: 6,
            stability: 9
        }),
        e.push({
            key: "max_viewport_dims",
            value: n.getParameter(n.MAX_VIEWPORT_DIMS).join("x"),
            weight: 6,
            stability: 9
        }),
        t.width = 50,
        t.height = 20,
        n.viewport(0, 0, 50, 20),
        n.clearColor(.15, .3, .45, 1),
        n.clear(n.COLOR_BUFFER_BIT);
        const o = new Uint8Array(4);
        n.readPixels(25, 10, 1, 1, n.RGBA, n.UNSIGNED_BYTE, o);
        const i = `${o[0]}_${o[1]}_${o[2]}`;
        e.push({
            key: "webgl_pixel_test",
            value: i,
            weight: 7,
            stability: 8
        })
    } catch {}
}
function M(e) {
    if (!window.screen)
        return;
    const t = `${window.screen.width}x${window.screen.height}`;
    e.push({
        key: "screen_resolution",
        value: t,
        weight: 8,
        stability: 9
    }),
    e.push({
        key: "color_depth",
        value: window.screen.colorDepth,
        weight: 6,
        stability: 9
    }),
    e.push({
        key: "pixel_ratio",
        value: window.devicePixelRatio,
        weight: 7,
        stability: 8
    })
}
function j(e) {
    try {
        const r = ["audio/mp3", "audio/ogg", "audio/wav"]
          , o = ["video/mp4", "video/webm", "video/ogg"]
          , i = document.createElement("audio")
          , a = document.createElement("video")
          , s = r.filter(u => i.canPlayType(u) !== "").join("_")
          , l = o.filter(u => a.canPlayType(u) !== "").join("_");
        e.push({
            key: "media_support",
            value: `${s}|${l}`,
            weight: 4,
            stability: 7
        })
    } catch {}
    const n = ["Intl", "WebAssembly", "BigInt", "SharedArrayBuffer", "RTCPeerConnection", "IntersectionObserver", "ResizeObserver"].filter(r => r in window).join("_");
    e.push({
        key: "supported_apis",
        value: n,
        weight: 4,
        stability: 7
    });
    try {
        const r = document.createElement("canvas");
        e.push({
            key: "canvas_support",
            value: !!r.getContext("2d"),
            weight: 3,
            stability: 8
        })
    } catch {}
}
function G(e) {
    const t = {
        chrome: "chrome"in window,
        msCredentials: "msCredentials"in window,
        MSInputMethodContext: "MSInputMethodContext"in window,
        InstallTrigger: "InstallTrigger"in window,
        safari: "safari"in window || "ApplePaySession"in window,
        Intl: typeof Intl < "u" ? Object.keys(Intl).sort().join("_") : ""
    };
    e.push({
        key: "browser_apis",
        value: JSON.stringify(t),
        weight: 8,
        stability: 7
    })
}
function K(e) {
    const t = ["MozAppearance", "WebkitAppearance", "msTextSizeAdjust", "scrollbarWidth", "webkitCoverflowAdjust", "webkitLineSnap"]
      , n = document.documentElement
      , r = window.getComputedStyle(n)
      , o = t.filter(i => i in r).join("_");
    e.push({
        key: "css_features",
        value: o,
        weight: 7,
        stability: 7
    })
}
async function F(e) {
    try {
        const t = JSON.stringify(e)
          , n = new TextEncoder().encode(t)
          , r = await crypto.subtle.digest("SHA-256", n);
        return I(r)
    } catch {
        return x(JSON.stringify(e))
    }
}
async function H(e) {
    const t = document.createElement("canvas");
    t.width = 100,
    t.height = 40;
    const n = t.getContext("2d");
    if (n) {
        n.textBaseline = "alphabetic",
        n.fillStyle = "#f60",
        n.fillRect(10, 5, 30, 30),
        n.fillStyle = "#069",
        n.font = "15px Arial",
        n.fillText("BrowserID", 15, 25);
        const r = n.getImageData(0, 0, 100, 40).data
          , o = [];
        for (let i = 0; i < r.length; i += 41)
            o.push(r[i]);
        e.push({
            key: "browser_canvas",
            value: await F(o),
            weight: 8,
            stability: 7
        })
    }
}
async function V(e) {
    G(e),
    K(e),
    await H(e)
}
async function W() {
    const e = [];
    return await Promise.all([U(e), L(e), M(e), j(e), V(e)]),
    e
}
function X(e) {
    return typeof e == "number" ? e % 1 !== 0 ? Number(e.toFixed(1)) : e : typeof e == "string" ? e.replace(/\s+[\d.]+(?:\.\d+)*(?:\w*)/g, "") : e
}
function f(e) {
    return e === null || typeof e != "object" ? String(e) : Array.isArray(e) ? `[${e.map(r => f(r)).join(",")}]` : `{${Object.keys(e).sort().map(r => {
        const o = e[r];
        return `"${r}":${f(o)}`
    }
    ).join(",")}}`
}
function I(e) {
    const t = new Uint8Array(e);
    let n = "";
    for (let r = 0; r < t.byteLength; r++)
        n += String.fromCharCode(t[r]);
    return C(n)
}
function x(e) {
    const t = new Uint8Array(32);
    for (let r = 0; r < e.length; r++) {
        const o = e.charCodeAt(r);
        if (t[r % 32] = (t[r % 32] + o) % 256,
        r > 0) {
            const i = r * 7 % 32;
            t[i] = (t[i] + o) % 256
        }
    }
    for (let r = 0; r < 3; r++)
        for (let o = 0; o < 32; o++) {
            const i = t[(o + 31) % 32]
              , a = t[(o + 1) % 32];
            t[o] = (t[o] + i + a) % 256
        }
    let n = "";
    for (let r = 0; r < t.byteLength; r++)
        n += String.fromCharCode(t[r]);
    return C(n)
}
async function w(e) {
    e.sort( (n, r) => n.key.localeCompare(r.key));
    const t = e.map(n => ({
        k: n.key,
        v: X(n.value)
    }));
    try {
        console.info("stableData", t);
        const n = f(t)
          , r = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n));
        return I(r)
    } catch {
        return x(f(t))
    }
}
async function z() {
    const e = await W()
      , t = e.filter(n => n.stability >= y);
    if (t.length < 3) {
        const n = e.filter(r => r.stability >= y - 2);
        return w(n)
    }
    return w(t)
}
const m = "gp_dvid"
  , _ = "gp_dvtm"
  , T = ( () => {
    switch (window.location.host.replace(/^h5\.|(\.)?g123\.jp$/g, "")) {
    case "local":
        return {
            suffix: "_local",
            domain: ".local.g123.jp"
        };
    case "stg":
        return {
            suffix: "_staging",
            domain: ".stg.g123.jp"
        };
    default:
        return {
            suffix: "",
            domain: ".g123.jp"
        }
    }
}
)()
  , v = `__gp_dvid${T.suffix}`
  , Y = T.domain;
let c;
const J = ( () => {
    try {
        const e = "gp_test";
        return localStorage.setItem(e, e),
        localStorage.removeItem(e),
        !0
    } catch {
        return !1
    }
}
)();
function q(e, t) {
    if (!t)
        return !0;
    const n = Number.parseInt(t, 10);
    return Number.isNaN(n) ? !0 : e - n > 7 * 24 * 60 * 60 * 1e3
}
function b(e, t) {
    try {
        localStorage.setItem(e, t)
    } catch (n) {
        console.info("[CONTEXT] storageSetItem error", n)
    }
}
function E(e) {
    try {
        return localStorage.getItem(e)
    } catch (t) {
        return console.info("[CONTEXT] storageGetItem error", t),
        null
    }
}
async function Z() {
    if (c)
        return c;
    const e = R(v)
      , t = E(m);
    c = e || t || "";
    const n = Date.now()
      , r = E(_)
      , o = q(n, r);
    if (!c || o)
        try {
            const i = await z();
            c = i && J ? `df${i}` : `dr${h()}`
        } catch (i) {
            console.error("[CONTEXT] initDeviceId error", i),
            c = `dr${h()}`
        }
    return N(v, c, 365, Y),
    c && (t !== c || o) && (b(m, c),
    b(_, `${n}`)),
    c
}
async function ee() {
    try {
        c = await Z()
    } catch (e) {
        console.error("[CONTEXT] initContext error", e)
    }
}
export {S as _, h as a, R as g, ee as i, Q as r, N as s};
