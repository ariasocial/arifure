import {at as et, Q as H, x as Ue, A as N, q as tt, au as rt, c as nt, y as ot, av as ut, D as it, z as D, T as R, aw as ct} from "./game-03165520-C9c3cPxP.js";
import {a as st, g as De} from "./game-d8b296a6-D6-XlEtG.js";
import {_ as ke} from "./app-CpUCrGhP.js";
var ee = {
    exports: {}
}
  , te = {};
const le = st(et);
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function at() {
    if (ve)
        return te;
    ve = 1;
    var e = le;
    function t(f, l) {
        return f === l && (f !== 0 || 1 / f === 1 / l) || f !== f && l !== l
    }
    var n = typeof Object.is == "function" ? Object.is : t
      , o = e.useState
      , c = e.useEffect
      , u = e.useLayoutEffect
      , p = e.useDebugValue;
    function m(f, l) {
        var b = l()
          , S = o({
            inst: {
                value: b,
                getSnapshot: l
            }
        })
          , d = S[0].inst
          , r = S[1];
        return u(function() {
            d.value = b,
            d.getSnapshot = l,
            a(d) && r({
                inst: d
            })
        }, [f, b, l]),
        c(function() {
            return a(d) && r({
                inst: d
            }),
            f(function() {
                a(d) && r({
                    inst: d
                })
            })
        }, [f]),
        p(b),
        b
    }
    function a(f) {
        var l = f.getSnapshot;
        f = f.value;
        try {
            var b = l();
            return !n(f, b)
        } catch {
            return !0
        }
    }
    function s(f, l) {
        return l()
    }
    var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? s : m;
    return te.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y,
    te
}
var he;
function He() {
    return he || (he = 1,
    ee.exports = at()),
    ee.exports
}
var ft = He()
  , re = {
    exports: {}
}
  , ne = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function lt() {
    if (ge)
        return ne;
    ge = 1;
    var e = le
      , t = He();
    function n(s, y) {
        return s === y && (s !== 0 || 1 / s === 1 / y) || s !== s && y !== y
    }
    var o = typeof Object.is == "function" ? Object.is : n
      , c = t.useSyncExternalStore
      , u = e.useRef
      , p = e.useEffect
      , m = e.useMemo
      , a = e.useDebugValue;
    return ne.useSyncExternalStoreWithSelector = function(s, y, f, l, b) {
        var S = u(null);
        if (S.current === null) {
            var d = {
                hasValue: !1,
                value: null
            };
            S.current = d
        } else
            d = S.current;
        S = m(function() {
            function C(P) {
                if (!w) {
                    if (w = !0,
                    v = P,
                    P = l(P),
                    b !== void 0 && d.hasValue) {
                        var _ = d.value;
                        if (b(_, P))
                            return $ = _
                    }
                    return $ = P
                }
                if (_ = $,
                o(v, P))
                    return _;
                var O = l(P);
                return b !== void 0 && b(_, O) ? (v = P,
                _) : (v = P,
                $ = O)
            }
            var w = !1, v, $, i = f === void 0 ? null : f;
            return [function() {
                return C(y())
            }
            , i === null ? void 0 : function() {
                return C(i())
            }
            ]
        }, [y, f, l, b]);
        var r = c(s, S[0], S[1]);
        return p(function() {
            d.hasValue = !0,
            d.value = r
        }, [r]),
        a(r),
        r
    }
    ,
    ne
}
var we;
function dt() {
    return we || (we = 1,
    re.exports = lt()),
    re.exports
}
var pt = dt();
function yt(e) {
    e()
}
let Ve = yt;
const mt = e => Ve = e
  , St = () => Ve
  , Pe = Symbol.for("react-redux-context")
  , Ce = typeof globalThis < "u" ? globalThis : {};
function bt() {
    var e;
    if (!H)
        return {};
    const t = (e = Ce[Pe]) != null ? e : Ce[Pe] = new Map;
    let n = t.get(H);
    return n || (n = H(null),
    t.set(H, n)),
    n
}
const j = bt();
function de(e=j) {
    return function() {
        return Ue(e)
    }
}
const ze = de()
  , We = () => {
    throw new Error("uSES not initialized!")
}
;
let Be = We;
const vt = e => {
    Be = e
}
  , ht = (e, t) => e === t;
function gt(e=j) {
    const t = e === j ? ze : de(e);
    return function(o, c={}) {
        const {equalityFn: u=ht, stabilityCheck: p=void 0, noopCheck: m=void 0} = typeof c == "function" ? {
            equalityFn: c
        } : c
          , {store: a, subscription: s, getServerState: y, stabilityCheck: f, noopCheck: l} = t();
        N(!0);
        const b = tt({
            [o.name](d) {
                return o(d)
            }
        }[o.name], [o, f, p])
          , S = Be(s.addNestedSub, a.getState, y || a.getState, b, u);
        return rt(S),
        S
    }
}
const wt = gt();
function q() {
    return q = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n)
                ({}).hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
    ,
    q.apply(null, arguments)
}
var oe = {
    exports: {}
}
  , h = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Pt() {
    if ($e)
        return h;
    $e = 1;
    var e = typeof Symbol == "function" && Symbol.for
      , t = e ? Symbol.for("react.element") : 60103
      , n = e ? Symbol.for("react.portal") : 60106
      , o = e ? Symbol.for("react.fragment") : 60107
      , c = e ? Symbol.for("react.strict_mode") : 60108
      , u = e ? Symbol.for("react.profiler") : 60114
      , p = e ? Symbol.for("react.provider") : 60109
      , m = e ? Symbol.for("react.context") : 60110
      , a = e ? Symbol.for("react.async_mode") : 60111
      , s = e ? Symbol.for("react.concurrent_mode") : 60111
      , y = e ? Symbol.for("react.forward_ref") : 60112
      , f = e ? Symbol.for("react.suspense") : 60113
      , l = e ? Symbol.for("react.suspense_list") : 60120
      , b = e ? Symbol.for("react.memo") : 60115
      , S = e ? Symbol.for("react.lazy") : 60116
      , d = e ? Symbol.for("react.block") : 60121
      , r = e ? Symbol.for("react.fundamental") : 60117
      , C = e ? Symbol.for("react.responder") : 60118
      , w = e ? Symbol.for("react.scope") : 60119;
    function v(i) {
        if (typeof i == "object" && i !== null) {
            var P = i.$$typeof;
            switch (P) {
            case t:
                switch (i = i.type,
                i) {
                case a:
                case s:
                case o:
                case u:
                case c:
                case f:
                    return i;
                default:
                    switch (i = i && i.$$typeof,
                    i) {
                    case m:
                    case y:
                    case S:
                    case b:
                    case p:
                        return i;
                    default:
                        return P
                    }
                }
            case n:
                return P
            }
        }
    }
    function $(i) {
        return v(i) === s
    }
    return h.AsyncMode = a,
    h.ConcurrentMode = s,
    h.ContextConsumer = m,
    h.ContextProvider = p,
    h.Element = t,
    h.ForwardRef = y,
    h.Fragment = o,
    h.Lazy = S,
    h.Memo = b,
    h.Portal = n,
    h.Profiler = u,
    h.StrictMode = c,
    h.Suspense = f,
    h.isAsyncMode = function(i) {
        return $(i) || v(i) === a
    }
    ,
    h.isConcurrentMode = $,
    h.isContextConsumer = function(i) {
        return v(i) === m
    }
    ,
    h.isContextProvider = function(i) {
        return v(i) === p
    }
    ,
    h.isElement = function(i) {
        return typeof i == "object" && i !== null && i.$$typeof === t
    }
    ,
    h.isForwardRef = function(i) {
        return v(i) === y
    }
    ,
    h.isFragment = function(i) {
        return v(i) === o
    }
    ,
    h.isLazy = function(i) {
        return v(i) === S
    }
    ,
    h.isMemo = function(i) {
        return v(i) === b
    }
    ,
    h.isPortal = function(i) {
        return v(i) === n
    }
    ,
    h.isProfiler = function(i) {
        return v(i) === u
    }
    ,
    h.isStrictMode = function(i) {
        return v(i) === c
    }
    ,
    h.isSuspense = function(i) {
        return v(i) === f
    }
    ,
    h.isValidElementType = function(i) {
        return typeof i == "string" || typeof i == "function" || i === o || i === s || i === u || i === c || i === f || i === l || typeof i == "object" && i !== null && (i.$$typeof === S || i.$$typeof === b || i.$$typeof === p || i.$$typeof === m || i.$$typeof === y || i.$$typeof === r || i.$$typeof === C || i.$$typeof === w || i.$$typeof === d)
    }
    ,
    h.typeOf = v,
    h
}
var _e;
function Ct() {
    return _e || (_e = 1,
    oe.exports = Pt()),
    oe.exports
}
var ue, Oe;
function $t() {
    if (Oe)
        return ue;
    Oe = 1;
    var e = Ct()
      , t = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }
      , n = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }
      , o = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }
      , c = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }
      , u = {};
    u[e.ForwardRef] = o,
    u[e.Memo] = c;
    function p(S) {
        return e.isMemo(S) ? c : u[S.$$typeof] || t
    }
    var m = Object.defineProperty
      , a = Object.getOwnPropertyNames
      , s = Object.getOwnPropertySymbols
      , y = Object.getOwnPropertyDescriptor
      , f = Object.getPrototypeOf
      , l = Object.prototype;
    function b(S, d, r) {
        if (typeof d != "string") {
            if (l) {
                var C = f(d);
                C && C !== l && b(S, C, r)
            }
            var w = a(d);
            s && (w = w.concat(s(d)));
            for (var v = p(S), $ = p(d), i = 0; i < w.length; ++i) {
                var P = w[i];
                if (!n[P] && !(r && r[P]) && !($ && $[P]) && !(v && v[P])) {
                    var _ = y(d, P);
                    try {
                        m(S, P, _)
                    } catch {}
                }
            }
        }
        return S
    }
    return ue = b,
    ue
}
var _t = $t();
const Re = De(_t);
var ie = {
    exports: {}
}
  , g = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Ot() {
    if (Me)
        return g;
    Me = 1;
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.server_context"), a = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), S;
    S = Symbol.for("react.module.reference");
    function d(r) {
        if (typeof r == "object" && r !== null) {
            var C = r.$$typeof;
            switch (C) {
            case e:
                switch (r = r.type,
                r) {
                case n:
                case c:
                case o:
                case s:
                case y:
                    return r;
                default:
                    switch (r = r && r.$$typeof,
                    r) {
                    case m:
                    case p:
                    case a:
                    case l:
                    case f:
                    case u:
                        return r;
                    default:
                        return C
                    }
                }
            case t:
                return C
            }
        }
    }
    return g.ContextConsumer = p,
    g.ContextProvider = u,
    g.Element = e,
    g.ForwardRef = a,
    g.Fragment = n,
    g.Lazy = l,
    g.Memo = f,
    g.Portal = t,
    g.Profiler = c,
    g.StrictMode = o,
    g.Suspense = s,
    g.SuspenseList = y,
    g.isAsyncMode = function() {
        return !1
    }
    ,
    g.isConcurrentMode = function() {
        return !1
    }
    ,
    g.isContextConsumer = function(r) {
        return d(r) === p
    }
    ,
    g.isContextProvider = function(r) {
        return d(r) === u
    }
    ,
    g.isElement = function(r) {
        return typeof r == "object" && r !== null && r.$$typeof === e
    }
    ,
    g.isForwardRef = function(r) {
        return d(r) === a
    }
    ,
    g.isFragment = function(r) {
        return d(r) === n
    }
    ,
    g.isLazy = function(r) {
        return d(r) === l
    }
    ,
    g.isMemo = function(r) {
        return d(r) === f
    }
    ,
    g.isPortal = function(r) {
        return d(r) === t
    }
    ,
    g.isProfiler = function(r) {
        return d(r) === c
    }
    ,
    g.isStrictMode = function(r) {
        return d(r) === o
    }
    ,
    g.isSuspense = function(r) {
        return d(r) === s
    }
    ,
    g.isSuspenseList = function(r) {
        return d(r) === y
    }
    ,
    g.isValidElementType = function(r) {
        return typeof r == "string" || typeof r == "function" || r === n || r === c || r === o || r === s || r === y || r === b || typeof r == "object" && r !== null && (r.$$typeof === l || r.$$typeof === f || r.$$typeof === u || r.$$typeof === p || r.$$typeof === a || r.$$typeof === S || r.getModuleId !== void 0)
    }
    ,
    g.typeOf = d,
    g
}
var xe;
function Rt() {
    return xe || (xe = 1,
    ie.exports = Ot()),
    ie.exports
}
var Mt = Rt();
const xt = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];
function jt(e, t, n, o, {areStatesEqual: c, areOwnPropsEqual: u, areStatePropsEqual: p}) {
    let m = !1, a, s, y, f, l;
    function b(w, v) {
        return a = w,
        s = v,
        y = e(a, s),
        f = t(o, s),
        l = n(y, f, s),
        m = !0,
        l
    }
    function S() {
        return y = e(a, s),
        t.dependsOnOwnProps && (f = t(o, s)),
        l = n(y, f, s),
        l
    }
    function d() {
        return e.dependsOnOwnProps && (y = e(a, s)),
        t.dependsOnOwnProps && (f = t(o, s)),
        l = n(y, f, s),
        l
    }
    function r() {
        const w = e(a, s)
          , v = !p(w, y);
        return y = w,
        v && (l = n(y, f, s)),
        l
    }
    function C(w, v) {
        const $ = !u(v, s)
          , i = !c(w, a, v, s);
        return a = w,
        s = v,
        $ && i ? S() : $ ? d() : i ? r() : l
    }
    return function(v, $) {
        return m ? C(v, $) : b(v, $)
    }
}
function Et(e, t) {
    let {initMapStateToProps: n, initMapDispatchToProps: o, initMergeProps: c} = t
      , u = ke(t, xt);
    const p = n(e, u)
      , m = o(e, u)
      , a = c(e, u);
    return jt(p, m, a, e, u)
}
function Qe(e) {
    return function(n) {
        const o = e(n);
        function c() {
            return o
        }
        return c.dependsOnOwnProps = !1,
        c
    }
}
function je(e) {
    return e.dependsOnOwnProps ? !!e.dependsOnOwnProps : e.length !== 1
}
function Tt(e, t) {
    return function(o, {displayName: c}) {
        const u = function(m, a) {
            return u.dependsOnOwnProps ? u.mapToProps(m, a) : u.mapToProps(m, void 0)
        };
        return u.dependsOnOwnProps = !0,
        u.mapToProps = function(m, a) {
            u.mapToProps = e,
            u.dependsOnOwnProps = je(e);
            let s = u(m, a);
            return typeof s == "function" && (u.mapToProps = s,
            u.dependsOnOwnProps = je(s),
            s = u(m, a)),
            s
        }
        ,
        u
    }
}
function Nt(e, t) {
    return (n, o) => {
        throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`)
    }
}
function qt(e) {
    return Qe(t => ({
        dispatch: t
    }))
}
function Lt(e) {
    return e ? typeof e == "function" ? Tt(e) : Nt(e, "mapStateToProps") : Qe( () => ({}))
}
function Ft(e, t, n) {
    return q({}, n, e, t)
}
function It(e) {
    return () => Ft
}
function At() {
    const e = St();
    let t = null
      , n = null;
    return {
        clear() {
            t = null,
            n = null
        },
        notify() {
            e( () => {
                let o = t;
                for (; o; )
                    o.callback(),
                    o = o.next
            }
            )
        },
        get() {
            let o = []
              , c = t;
            for (; c; )
                o.push(c),
                c = c.next;
            return o
        },
        subscribe(o) {
            let c = !0
              , u = n = {
                callback: o,
                next: null,
                prev: n
            };
            return u.prev ? u.prev.next = u : t = u,
            function() {
                !c || t === null || (c = !1,
                u.next ? u.next.prev = u.prev : n = u.prev,
                u.prev ? u.prev.next = u.next : t = u.next)
            }
        }
    }
}
const Ee = {
    notify() {},
    get: () => []
};
function Ke(e, t) {
    let n, o = Ee, c = 0, u = !1;
    function p(d) {
        y();
        const r = o.subscribe(d);
        let C = !1;
        return () => {
            C || (C = !0,
            r(),
            f())
        }
    }
    function m() {
        o.notify()
    }
    function a() {
        S.onStateChange && S.onStateChange()
    }
    function s() {
        return u
    }
    function y() {
        c++,
        n || (n = t ? t.addNestedSub(a) : e.subscribe(a),
        o = At())
    }
    function f() {
        c--,
        n && c === 0 && (n(),
        n = void 0,
        o.clear(),
        o = Ee)
    }
    function l() {
        u || (u = !0,
        y())
    }
    function b() {
        u && (u = !1,
        f())
    }
    const S = {
        addNestedSub: p,
        notifyNestedSubs: m,
        handleChangeWrapper: a,
        isSubscribed: s,
        trySubscribe: l,
        tryUnsubscribe: b,
        getListeners: () => o
    };
    return S
}
const Ut = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , B = Ut ? nt : ot;
function Te(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function ce(e, t) {
    if (Te(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    const n = Object.keys(e)
      , o = Object.keys(t);
    if (n.length !== o.length)
        return !1;
    for (let c = 0; c < n.length; c++)
        if (!Object.prototype.hasOwnProperty.call(t, n[c]) || !Te(e[n[c]], t[n[c]]))
            return !1;
    return !0
}
const Dt = ["reactReduxForwardedRef"];
let Ye = We;
const kt = e => {
    Ye = e
}
  , Ht = [null, null];
function Vt(e, t, n) {
    B( () => e(...t), n)
}
function zt(e, t, n, o, c, u) {
    e.current = o,
    n.current = !1,
    c.current && (c.current = null,
    u())
}
function Wt(e, t, n, o, c, u, p, m, a, s, y) {
    if (!e)
        return () => {}
        ;
    let f = !1
      , l = null;
    const b = () => {
        if (f || !m.current)
            return;
        const d = t.getState();
        let r, C;
        try {
            r = o(d, c.current)
        } catch (w) {
            C = w,
            l = w
        }
        C || (l = null),
        r === u.current ? p.current || s() : (u.current = r,
        a.current = r,
        p.current = !0,
        y())
    }
    ;
    return n.onStateChange = b,
    n.trySubscribe(),
    b(),
    () => {
        if (f = !0,
        n.tryUnsubscribe(),
        n.onStateChange = null,
        l)
            throw l
    }
}
function Bt(e, t) {
    return e === t
}
function cr(e, t, n, {pure: o, areStatesEqual: c=Bt, areOwnPropsEqual: u=ce, areStatePropsEqual: p=ce, areMergedPropsEqual: m=ce, forwardRef: a=!1, context: s=j}={}) {
    const y = s
      , f = Lt(e)
      , l = qt()
      , b = It()
      , S = !!e;
    return r => {
        const C = r.displayName || r.name || "Component"
          , w = `Connect(${C})`
          , v = {
            shouldHandleStateChanges: S,
            displayName: w,
            wrappedComponentName: C,
            WrappedComponent: r,
            initMapStateToProps: f,
            initMapDispatchToProps: l,
            initMergeProps: b,
            areStatesEqual: c,
            areStatePropsEqual: p,
            areOwnPropsEqual: u,
            areMergedPropsEqual: m
        };
        function $(_) {
            const [O,Q,E] = R( () => {
                const {reactReduxForwardedRef: M} = _
                  , U = ke(_, Dt);
                return [_.context, M, U]
            }
            , [_])
              , L = R( () => O && O.Consumer && Mt.isContextConsumer(D(O.Consumer, null)) ? O : y, [O, y])
              , x = Ue(L)
              , F = !!_.store && !!_.store.getState && !!_.store.dispatch
              , Je = !!x && !!x.store
              , T = F ? _.store : x.store
              , pe = Je ? x.getServerState : T.getState
              , K = R( () => Et(T.dispatch, v), [T])
              , [I,ye] = R( () => {
                if (!S)
                    return Ht;
                const M = Ke(T, F ? void 0 : x.subscription)
                  , U = M.notifyNestedSubs.bind(M);
                return [M, U]
            }
            , [T, F, x])
              , me = R( () => F ? x : q({}, x, {
                subscription: I
            }), [F, x, I])
              , Y = N()
              , G = N(E)
              , A = N()
              , Se = N(!1);
            N(!1);
            const Z = N(!1)
              , J = N();
            B( () => (Z.current = !0,
            () => {
                Z.current = !1
            }
            ), []);
            const be = R( () => () => A.current && E === G.current ? A.current : K(T.getState(), E), [T, E])
              , Xe = R( () => U => I ? Wt(S, T, I, K, G, Y, Se, Z, A, ye, U) : () => {}
            , [I]);
            Vt(zt, [G, Y, Se, E, A, ye]);
            let k;
            try {
                k = Ye(Xe, be, pe ? () => K(pe(), E) : be)
            } catch (M) {
                throw J.current && (M.message += `
The error may be correlated with this previous error:
${J.current.stack}

`),
                M
            }
            B( () => {
                J.current = void 0,
                A.current = void 0,
                Y.current = k
            }
            );
            const X = R( () => D(r, q({}, k, {
                ref: Q
            })), [Q, r, k]);
            return R( () => S ? D(L.Provider, {
                value: me
            }, X) : X, [L, X, me])
        }
        const P = ut($);
        if (P.WrappedComponent = r,
        P.displayName = $.displayName = w,
        a) {
            const O = it(function(E, L) {
                return D(P, q({}, E, {
                    reactReduxForwardedRef: L
                }))
            });
            return O.displayName = w,
            O.WrappedComponent = r,
            Re(O, r)
        }
        return Re(P, r)
    }
}
function sr({store: e, context: t, children: n, serverState: o, stabilityCheck: c="once", noopCheck: u="once"}) {
    const p = R( () => {
        const s = Ke(e);
        return {
            store: e,
            subscription: s,
            getServerState: o ? () => o : void 0,
            stabilityCheck: c,
            noopCheck: u
        }
    }
    , [e, o, c, u])
      , m = R( () => e.getState(), [e]);
    return B( () => {
        const {subscription: s} = p;
        return s.onStateChange = s.notifyNestedSubs,
        s.trySubscribe(),
        m !== e.getState() && s.notifyNestedSubs(),
        () => {
            s.tryUnsubscribe(),
            s.onStateChange = void 0
        }
    }
    , [p, m]),
    D((t || j).Provider, {
        value: p
    }, n)
}
function Ge(e=j) {
    const t = e === j ? ze : de(e);
    return function() {
        const {store: o} = t();
        return o
    }
}
const Qt = Ge();
function Kt(e=j) {
    const t = e === j ? Qt : Ge(e);
    return function() {
        return t().dispatch
    }
}
const Yt = Kt();
vt(pt.useSyncExternalStoreWithSelector);
kt(ft.useSyncExternalStore);
mt(ct);
const ar = "576px";
var se = {}, ae = {}, fe = {}, V = {}, Ne;
function Ze() {
    if (Ne)
        return V;
    Ne = 1,
    Object.defineProperty(V, "__esModule", {
        value: !0
    });
    function e(t) {
        return t.replace(/[A-Z]/g, function(n) {
            return "-" + n.toLowerCase()
        }).toLowerCase()
    }
    return V.default = e,
    V
}
var z = {}, qe;
function Gt() {
    if (qe)
        return z;
    qe = 1,
    Object.defineProperty(z, "__esModule", {
        value: !0
    });
    var e = Ze()
      , t = " and ";
    function n(o) {
        return typeof o == "string" ? o : Object.entries(o).map(function(c) {
            var u = c[0]
              , p = c[1]
              , m = e.default(u)
              , a = p;
            return typeof a == "boolean" ? a ? m : "not " + m : (typeof a == "number" && /[height|width]$/.test(m) && (a = a + "px"),
            "(" + m + ": " + a + ")")
        }).join(t)
    }
    return z.default = n,
    z
}
var W = {}, Le;
function Zt() {
    if (Le)
        return W;
    Le = 1,
    Object.defineProperty(W, "__esModule", {
        value: !0
    });
    function e() {}
    return W.default = e,
    W
}
var Fe;
function Jt() {
    return Fe || (Fe = 1,
    function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.noop = e.queryObjectToString = e.camelToHyphen = void 0;
        var t = Ze();
        Object.defineProperty(e, "camelToHyphen", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        });
        var n = Gt();
        Object.defineProperty(e, "queryObjectToString", {
            enumerable: !0,
            get: function() {
                return n.default
            }
        });
        var o = Zt();
        Object.defineProperty(e, "noop", {
            enumerable: !0,
            get: function() {
                return o.default
            }
        })
    }(fe)),
    fe
}
var Ie;
function Xt() {
    return Ie || (Ie = 1,
    function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.useMediaLayout = e.useMedia = e.mockMediaQueryList = void 0;
        var t = le
          , n = Jt();
        e.mockMediaQueryList = {
            media: "",
            matches: !1,
            onchange: n.noop,
            addListener: n.noop,
            removeListener: n.noop,
            addEventListener: n.noop,
            removeEventListener: n.noop,
            dispatchEvent: function(c) {
                return !0
            }
        };
        var o = function(c) {
            return function(u, p) {
                p === void 0 && (p = !1);
                var m = t.useState(p)
                  , a = m[0]
                  , s = m[1]
                  , y = n.queryObjectToString(u);
                return c(function() {
                    var f = !0
                      , l = typeof window > "u" ? e.mockMediaQueryList : window.matchMedia(y)
                      , b = function() {
                        f && s(!!l.matches)
                    };
                    return l.addListener(b),
                    s(l.matches),
                    function() {
                        f = !1,
                        l.removeListener(b)
                    }
                }, [y]),
                a
            }
        };
        e.useMedia = o(t.useEffect),
        e.useMediaLayout = o(t.useLayoutEffect),
        e.default = e.useMedia
    }(ae)),
    ae
}
var Ae;
function er() {
    return Ae || (Ae = 1,
    function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.useMediaLayout = e.useMedia = e.default = void 0;
        var t = Xt();
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return t.default
            }
        }),
        Object.defineProperty(e, "useMedia", {
            enumerable: !0,
            get: function() {
                return t.useMedia
            }
        }),
        Object.defineProperty(e, "useMediaLayout", {
            enumerable: !0,
            get: function() {
                return t.useMediaLayout
            }
        })
    }(se)),
    se
}
var tr = er();
const fr = De(tr)
  , lr = () => Yt()
  , dr = wt
  , rr = {
    "platform-sc.g123.jp": "platform-ik.g123.jp",
    "platform-sc.stg.g123.jp": "platform-ik.stg.g123.jp",
    "cdn-new.g123.jp": "platform-ik.g123.jp",
    "cdn-new.stg.g123.jp": "platform-ik.stg.g123.jp"
};
function pr(e, t, n) {
    try {
        if (!e || !e.startsWith("http"))
            return e;
        const o = new URL(e)
          , c = rr[o.host];
        if (!c)
            return e;
        o.host = c;
        const u = t || [];
        let p = 1;
        return n && Number.isInteger(n) && n > 1 || typeof window < "u" && window.devicePixelRatio && window.devicePixelRatio > 1 && (p = window.devicePixelRatio),
        u.push(`dpr-${p}`),
        u.length > 0 && o.searchParams.set("tr", u.sort().join(",")),
        o.href
    } catch {
        return e
    }
}
export {ar as M, sr as P, dr as a, lr as b, cr as c, tr as l, fr as u, pr as w};
