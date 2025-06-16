function ie(m) {
    if (typeof m == "function")
        if (document.readyState !== "loading")
            setTimeout( () => {
                m.call(document)
            }
            , 0);
        else {
            const d = () => {
                document.removeEventListener("DOMContentLoaded", d, !1),
                window.removeEventListener("load", d, !1),
                m.call(document)
            }
            ;
            document.addEventListener("DOMContentLoaded", d, !1),
            window.addEventListener("load", d, !1)
        }
}
function le() {
    const {PWA_CONFIG: m={}} = window
      , d = {
        pageId: m.pageId || "",
        splashScreen: m.splashScreen || null,
        startUrl: m.startUrl || null
    };
    if (!("fetch"in window) || navigator.standalone)
        return;
    const J = ["standalone", "fullscreen", "minimal-ui"]
      , V = "#f8f9fa"
      , j = 16
      , q = 120
      , U = navigator.userAgent || ""
      , y = navigator.vendor && navigator.vendor.indexOf("Apple") !== -1 && (U.indexOf("Mobile/") !== -1 || "standalone"in navigator)
      , G = !!U.match(/(MSIE |Edge\/|Trident\/)/)
      , Y = typeof Windows < "u";
    let w;
    try {
        w = window.sessionStorage
    } catch {}
    w = w || {};
    function v(e, t) {
        const r = `__pwacompat_${(typeof d.pageId == "function" ? d.pageId() : d.pageId) || ""}_${e}`;
        return t !== void 0 && (w[r] = t),
        w[r]
    }
    function K(e) {
        for (let t = 0; t < e.length; t += 1) {
            const n = e[t];
            try {
                return new URL("",n),
                r => new URL(r || "",n).toString()
            } catch {}
        }
        return t => t || ""
    }
    function b(e) {
        const t = e.sizes.split(/\s+/g).map(n => n === "any" ? Number.POSITIVE_INFINITY : Number.parseInt(n, 10) || 0);
        return Math.max(...t)
    }
    function C(e, t) {
        const n = [e]
          , r = Object.keys(t);
        for (let s = 0, p = r.length; s < p; s += 1) {
            const h = r[s];
            n.push(`[${h}="${t[h]}"]`)
        }
        let i;
        try {
            i = document.querySelector(n.join(""))
        } catch (s) {
            console.error(s),
            i = null
        }
        if (i)
            return i;
        i = document.createElement(e);
        for (let s = 0, p = r.length; s < p; s += 1) {
            const h = r[s];
            i.setAttribute(h, t[h])
        }
        return document.head.appendChild(i),
        i
    }
    function l(e, t) {
        let n = t;
        n && (n === !0 && (n = "yes"),
        C("meta", {
            name: e,
            content: n
        }))
    }
    function k({width: e, height: t}={
        width: 1,
        height: 1
    }) {
        const n = document.createElement("canvas");
        return n.width = e,
        n.height = t,
        n.getContext("2d")
    }
    function L(e) {
        const t = k();
        return t.fillStyle = e,
        t.fillRect(0, 0, 1, 1),
        t.getImageData(0, 0, 1, 1).data || []
    }
    function R(e) {
        const n = L(e).map(s => {
            const p = s / 255;
            return p < .03928 ? p / 12.92 : ((p + .055) / 1.055) ** 2.4
        }
        )
          , r = .2126 * n[0] + .7152 * n[1] + .0722 * n[2];
        return Math.abs(1.05 / (r + .05)) > 3
    }
    function Q() {
        try {
            return Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar
        } catch {
            return
        }
    }
    function W(e) {
        const t = L(e);
        return {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t[3]
        }
    }
    function X(e, t) {
        if (!(y || Y))
            return;
        const n = R(e);
        if (y) {
            let r;
            t ? r = "black-translucent" : n ? r = "black" : r = "default",
            l("apple-mobile-web-app-status-bar-style", r)
        } else {
            const r = Q();
            if (!r)
                return;
            r.foregroundColor = W(n ? "black" : "white"),
            r.backgroundColor = W(e)
        }
    }
    function T(e, t, n=!1) {
        const r = k(e);
        if (r.drawImage(e, 0, 0),
        !(!n && r.getImageData(0, 0, 1, 1).data[3] === 255))
            return r.globalCompositeOperation = "destination-over",
            r.fillStyle = t,
            r.fillRect(0, 0, e.width, e.height),
            r.canvas.toDataURL()
    }
    function Z(e) {
        let t;
        return (e || []).filter(n => n.platform === "itunes").forEach(n => {
            if (n.id)
                t = n.id;
            else {
                const r = n.url.match(/id(\d+)/);
                r && ([t] = r)
            }
        }
        ),
        t
    }
    function ee(e) {
        const t = String(e || "").substr(0, 3);
        return {
            por: "portrait",
            lan: "landscape"
        }[t] || ""
    }
    function te(e, t, n) {
        const r = {
            ...e,
            ...n
        }
          , i = new Blob([JSON.stringify(r)],{
            type: "application/json"
        })
          , s = URL.createObjectURL(i);
        t.setAttribute("href", s)
    }
    function D(e, t, n) {
        const r = typeof d.startUrl == "function" ? d.startUrl(e, n) : d.startUrl;
        if (r && r !== e.start_url)
            try {
                te(e, n, {
                    start_url: r
                })
            } catch (o) {
                console.warn("PWACompat error", o)
            }
        const i = e.icons || []
          , s = i.filter(o => (o.purpose || "").includes("maskable"));
        i.sort( (o, a) => b(a) - b(o)),
        s.sort( (o, a) => b(a) - b(o));
        const p = (s.length > 0 ? s : i).map(o => {
            const a = {
                rel: "icon",
                href: t(o.src),
                sizes: o.sizes
            };
            return C("link", a),
            !y || b(o) < q ? null : (a.rel = "apple-touch-icon",
            C("link", a))
        }
        ).filter(Boolean)
          , h = document.head.querySelector('meta[name="viewport"]')
          , oe = !!(h && h.content || "").match(/\bviewport-fit\s*=\s*cover\b/)
          , {display: M} = e
          , O = J.indexOf(M) !== -1;
        if (l("mobile-web-app-capable", O),
        X(e.theme_color || "black", oe),
        G) {
            l("application-name", e.short_name),
            l("msapplication-tooltip", e.description),
            l("msapplication-starturl", t(e.start_url || ".")),
            l("msapplication-navbutton-color", e.theme_color);
            const o = i[0];
            o && l("msapplication-TileImage", t(o.src)),
            l("msapplication-TileColor", e.background_color)
        }
        if (document.head.querySelector('[name="theme-color"]') || l("theme-color", e.theme_color),
        !y) {
            const o = ee(e.orientation);
            l("x5-orientation", o),
            l("screen-orientation", o),
            M === "fullscreen" ? (l("x5-fullscreen", "true"),
            l("full-screen", "yes")) : O && (l("x5-page-mode", "app"),
            l("browsermode", "application"));
            return
        }
        const I = e.background_color || V
          , re = R(I)
          , B = Z(e.related_applications);
        B && l("apple-itunes-app", `app-id=${B}`),
        l("apple-mobile-web-app-capable", O),
        l("apple-mobile-web-app-title", e.short_name || e.name);
        function A(o, a) {
            const c = document.createElement("link");
            c.setAttribute("rel", "apple-touch-startup-image"),
            c.setAttribute("media", `(orientation: ${o})`),
            c.setAttribute("href", a),
            document.head.appendChild(c)
        }
        function N(o, a, c, f) {
            const u = window.devicePixelRatio
              , g = k({
                width: o * u,
                height: a * u
            });
            if (g.scale(u, u),
            g.fillStyle = I,
            g.fillRect(0, 0, o, a),
            g.translate(o / 2, a / 2),
            f) {
                const x = 130 * f.height / f.width;
                x >= j && g.drawImage(f, 130 / -2, x / -2, 130, x)
            }
            return g.fillStyle = re ? "white" : "black",
            () => {
                const E = g.canvas.toDataURL();
                return A(c, E),
                E
            }
        }
        const P = v("iOS");
        if (P)
            try {
                const o = JSON.parse(P);
                A("portrait", o.p),
                A("landscape", o.l),
                p.forEach(a => {
                    const c = o.i[a.href];
                    c && (a.href = c)
                }
                );
                return
            } catch {}
        const S = {
            i: {}
        };
        function F(o, a) {
            const c = window.screen
              , f = N(c.availWidth, c.availHeight, "portrait", o)
              , u = N(c.availHeight, c.availWidth, "landscape", o);
            window.setTimeout( () => {
                S.p = f(),
                window.setTimeout( () => {
                    S.l = u(),
                    a()
                }
                , 10)
            }
            , 10)
        }
        function ae(o) {
            let a = p.length + 1;
            const c = () => {
                a -= 1,
                a || o()
            }
            ;
            c(),
            p.forEach(f => {
                const u = new Image;
                u.crossOrigin = "anonymous",
                u.onerror = c,
                u.onload = () => {
                    u.onload = null,
                    f.href = T(u, I, !0),
                    S.i[u.src] = f.href,
                    c()
                }
                ,
                u.src = f.href
            }
            )
        }
        function _() {
            v("iOS", JSON.stringify(S))
        }
        const z = p.slice()
          , H = typeof d.splashScreen == "function" ? d.splashScreen(e, n) : d.splashScreen;
        if (H)
            try {
                const o = H;
                z.unshift({
                    href: o
                })
            } catch (o) {
                console.warn("PWACompat error", o)
            }
        function $() {
            const o = z.shift();
            if (!o) {
                F(null, _);
                return
            }
            const a = new Image;
            a.crossOrigin = "anonymous",
            a.onerror = () => void $(),
            a.onload = () => {
                a.onload = null,
                F(a, () => {
                    const c = e.background_color && T(a, I);
                    c ? (o.href = c,
                    S.i[a.src] = c,
                    ae(_)) : _()
                }
                )
            }
            ,
            a.src = o.href
        }
        $()
    }
    async function ne() {
        const e = document.head.querySelector('link[rel="manifest"]')
          , t = e ? e.href : "";
        if (!t)
            throw new Error(`can't find <link rel="manifest" href=".." />'`);
        const n = K([t, window.location])
          , r = v("manifest");
        if (r) {
            try {
                const i = JSON.parse(r);
                D(i, n, e)
            } catch (i) {
                console.warn("PWACompat error", i)
            }
            return
        }
        fetch(t, {
            credentials: e.getAttribute("crossorigin") === "use-credentials" ? "include" : "same-origin"
        }).then(i => i.text()).then(i => {
            const s = JSON.parse(i);
            v("manifest", i),
            D(s, n, e)
        }
        ).catch(i => {
            console.warn("PWACompat error", i)
        }
        )
    }
    ie(ne)
}
export {le as default};
