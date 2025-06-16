import {x as E, d as F, _ as B, A as N, y as P, b as J} from "./game-03165520-C9c3cPxP.js";
import {I as M, g as R, R as U, a as H} from "./game-6f09ab72-CE2_ieOF.js";
function K() {
    if (console && console.warn) {
        for (var t, e = arguments.length, r = new Array(e), a = 0; a < e; a++)
            r[a] = arguments[a];
        typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])),
        (t = console).warn.apply(t, r)
    }
}
var z = {};
function I() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
    typeof e[0] == "string" && z[e[0]] || (typeof e[0] == "string" && (z[e[0]] = new Date),
    K.apply(void 0, e))
}
function A(t, e, r) {
    t.loadNamespaces(e, function() {
        if (t.isInitialized)
            r();
        else {
            var a = function u() {
                setTimeout(function() {
                    t.off("initialized", u)
                }, 0),
                r()
            };
            t.on("initialized", a)
        }
    })
}
function W(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , a = e.languages[0]
      , u = e.options ? e.options.fallbackLng : !1
      , c = e.languages[e.languages.length - 1];
    if (a.toLowerCase() === "cimode")
        return !0;
    var n = function(d, f) {
        var p = e.services.backendConnector.state["".concat(d, "|").concat(f)];
        return p === -1 || p === 2
    };
    return r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && e.services.backendConnector.backend && e.isLanguageChangingTo && !n(e.isLanguageChangingTo, t) ? !1 : !!(e.hasResourceBundle(a, t) || !e.services.backendConnector.backend || e.options.resources && !e.options.partialBundledLanguages || n(a, t) && (!u || n(c, t)))
}
function Y(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!e.languages || !e.languages.length)
        return I("i18n.languages were undefined or empty", e.languages),
        !0;
    var a = e.options.ignoreJSONStructure !== void 0;
    return a ? e.hasLoadedNamespace(t, {
        precheck: function(c, n) {
            if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && c.services.backendConnector.backend && c.isLanguageChangingTo && !n(c.isLanguageChangingTo, t))
                return !1
        }
    }) : W(t, e, r)
}
function D(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter(function(u) {
            return Object.getOwnPropertyDescriptor(t, u).enumerable
        })),
        r.push.apply(r, a)
    }
    return r
}
function S(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? D(Object(r), !0).forEach(function(a) {
            J(t, a, r[a])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function(a) {
            Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a))
        })
    }
    return t
}
var q = function(e, r) {
    var a = N();
    return P(function() {
        a.current = e
    }, [e, r]),
    a.current
};
function V(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = e.i18n
      , a = E(M) || {}
      , u = a.i18n
      , c = a.defaultNS
      , n = r || u || R();
    if (n && !n.reportNamespaces && (n.reportNamespaces = new U),
    !n) {
        I("You will need to pass in an i18next instance by using initReactI18next");
        var y = function(s) {
            return Array.isArray(s) ? s[s.length - 1] : s
        }
          , d = [y, {}, !1];
        return d.t = y,
        d.i18n = {},
        d.ready = !1,
        d
    }
    n.options.react && n.options.react.wait !== void 0 && I("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    var f = S(S(S({}, H()), n.options.react), e)
      , p = f.useSuspense
      , x = f.keyPrefix
      , i = c || n.options && n.options.defaultNS;
    i = typeof i == "string" ? [i] : i || ["translation"],
    n.reportNamespaces.addUsedNamespaces && n.reportNamespaces.addUsedNamespaces(i);
    var g = (n.isInitialized || n.initializedStoreOnce) && i.every(function(o) {
        return Y(o, n, f)
    });
    function v() {
        return n.getFixedT(null, f.nsMode === "fallback" ? i : i[0], x)
    }
    var k = F(v)
      , C = B(k, 2)
      , j = C[0]
      , b = C[1]
      , w = i.join()
      , L = q(w)
      , l = N(!0);
    P(function() {
        var o = f.bindI18n
          , s = f.bindI18nStore;
        l.current = !0,
        !g && !p && A(n, i, function() {
            l.current && b(v)
        }),
        g && L && L !== w && l.current && b(v);
        function h() {
            l.current && b(v)
        }
        return o && n && n.on(o, h),
        s && n && n.store.on(s, h),
        function() {
            l.current = !1,
            o && n && o.split(" ").forEach(function(O) {
                return n.off(O, h)
            }),
            s && n && s.split(" ").forEach(function(O) {
                return n.store.off(O, h)
            })
        }
    }, [n, w]);
    var T = N(!0);
    P(function() {
        l.current && !T.current && b(v),
        T.current = !1
    }, [n, x]);
    var m = [j, n, g];
    if (m.t = j,
    m.i18n = n,
    m.ready = g,
    g || !g && !p)
        return m;
    throw new Promise(function(o) {
        A(n, i, function() {
            o()
        })
    }
    )
}
export {V as u};
