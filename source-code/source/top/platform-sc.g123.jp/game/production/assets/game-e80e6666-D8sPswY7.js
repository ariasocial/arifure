import {Y as Vt, Z as Lt, R as qt, A as M, $ as Jt, d as st, T as vt, q as g, y as tt, u as B, a0 as Ht, p as jt, a1 as Zt, a2 as Kt, a3 as Qt} from "./game-03165520-C9c3cPxP.js";
import {r as Xt, t as zt} from "./app-CpUCrGhP.js";
import {a as ft, b as $t, u as tn, M as nn, w as n} from "./game-8cc43aba-Byxz78RI.js";
import {g as en} from "./game-d8b296a6-D6-XlEtG.js";
import {s as on} from "./game-ded8115c-BzjqZ_Ug.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-6f09ab72-CE2_ieOF.js";
var ct, mt;
function an() {
    if (mt)
        return ct;
    mt = 1;
    var o = Vt()
      , l = function() {
        return o.Date.now()
    };
    return ct = l,
    ct
}
var lt, wt;
function rn() {
    if (wt)
        return lt;
    wt = 1;
    var o = Lt()
      , l = an()
      , m = Xt()
      , s = "Expected a function"
      , u = Math.max
      , E = Math.min;
    function I(h, d, b) {
        var T, R, f, D, p, N, y = 0, F = !1, C = !1, k = !0;
        if (typeof h != "function")
            throw new TypeError(s);
        d = m(d) || 0,
        o(b) && (F = !!b.leading,
        C = "maxWait"in b,
        f = C ? u(m(b.maxWait) || 0, d) : f,
        k = "trailing"in b ? !!b.trailing : k);
        function U(c) {
            var i = T
              , w = R;
            return T = R = void 0,
            y = c,
            D = h.apply(w, i),
            D
        }
        function V(c) {
            return y = c,
            p = setTimeout(v, d),
            F ? U(c) : D
        }
        function q(c) {
            var i = c - N
              , w = c - y
              , L = d - i;
            return C ? E(L, f - w) : L
        }
        function O(c) {
            var i = c - N
              , w = c - y;
            return N === void 0 || i >= d || i < 0 || C && w >= f
        }
        function v() {
            var c = l();
            if (O(c))
                return _(c);
            p = setTimeout(v, q(c))
        }
        function _(c) {
            return p = void 0,
            k && T ? U(c) : (T = R = void 0,
            D)
        }
        function W() {
            p !== void 0 && clearTimeout(p),
            y = 0,
            T = N = R = p = void 0
        }
        function x() {
            return p === void 0 ? D : _(l())
        }
        function S() {
            var c = l()
              , i = O(c);
            if (T = arguments,
            R = this,
            N = c,
            i) {
                if (p === void 0)
                    return V(N);
                if (C)
                    return clearTimeout(p),
                    p = setTimeout(v, d),
                    U(N)
            }
            return p === void 0 && (p = setTimeout(v, d)),
            D
        }
        return S.cancel = W,
        S.flush = x,
        S
    }
    return lt = I,
    lt
}
var ut, At;
function sn() {
    if (At)
        return ut;
    At = 1;
    var o = rn()
      , l = Lt()
      , m = "Expected a function";
    function s(u, E, I) {
        var h = !0
          , d = !0;
        if (typeof u != "function")
            throw new TypeError(m);
        return l(I) && (h = "leading"in I ? !!I.leading : h,
        d = "trailing"in I ? !!I.trailing : d),
        o(u, E, {
            leading: h,
            maxWait: E,
            trailing: d
        })
    }
    return ut = s,
    ut
}
var cn = sn();
const ln = en(cn)
  , pt = 48
  , un = 1
  , dn = .8
  , fn = "floating-button-position"
  , nt = {
    position: "right",
    value: 50
}
  , pn = 300
  , hn = 2e3
  , gn = 50
  , Tt = 5
  , In = 16
  , Y = 0
  , P = 100
  , Z = 100
  , kt = 2e3
  , vn = 5
  , Ut = kt * vn
  , mn = `notification-blink ${Ut}ms ease-in-out`
  , dt = (o, l) => {
    const m = window.innerWidth
      , s = window.innerHeight
      , u = l || pt;
    if (o.position === "top") {
        if (o.value < u / m * 100)
            return {
                position: "left",
                value: Math.max(10, u / s * 100)
            };
        if (o.value > 100 - u / m * 100)
            return {
                position: "right",
                value: Math.max(10, u / s * 100)
            }
    }
    return o
}
;
function wn(o, l) {
    switch (l.type) {
    case "START_DRAG":
        return {
            ...o,
            isDragging: !0,
            dragOffset: l.dragOffset
        };
    case "END_DRAG":
        return {
            ...o,
            isDragging: !1,
            position: l.position,
            currentPosition: null
        };
    case "MOVE":
        return {
            ...o,
            currentPosition: l.position
        };
    case "SET_ACTIVE":
        return {
            ...o,
            isActive: !0,
            isDragging: !1
        };
    case "SET_INACTIVE":
        return {
            ...o,
            isActive: !1
        };
    case "RESET":
        return {
            ...o,
            isDragging: !1,
            currentPosition: null
        };
    default:
        return o
    }
}
const An = qt.memo( ({topIdleIcon: o, topIdleIconNotification1: l, topIdleIconNotification2: m, topActiveIcon: s, topActiveIconNotification1: u, topActiveIconNotification2: E, sideIdleIcon: I, sideIdleIconNotification1: h, sideIdleIconNotification2: d, sideActiveIcon: b, sideActiveIconNotification1: T, sideActiveIconNotification2: R, size: f=pt, opacity: D=un, hiddenOpacity: p=dn, enableTopEdge: N=!1, storageKey: y=fn, onClick: F, onDragEnd: C, sideOffset: k=39, topOffset: U=70}) => {
    const V = M(null)
      , q = M()
      , O = M()
      , v = M(null)
      , _ = M(null)
      , W = M(null)
      , x = M(null)
      , S = M()
      , c = {
        position: ( () => {
            try {
                const t = JSON.parse(localStorage.getItem(y) || JSON.stringify(nt));
                if (!t || typeof t.position != "string" || typeof t.value != "number")
                    return dt(nt, f);
                const e = {
                    position: ["top", "left", "right"].includes(t.position) ? t.position : nt.position,
                    value: Math.max(Y, Math.min(P, t.value))
                };
                return dt(e, f)
            } catch {
                return dt(nt, f)
            }
        }
        )(),
        isDragging: !1,
        isActive: !1,
        dragOffset: {
            x: 0,
            y: 0
        },
        currentPosition: null
    }
      , [i,w] = Jt(wn, c)
      , [L,Gt] = st({
        side: 15,
        top: 0
    })
      , [ht,K] = st(!1)
      , [it,et] = st(!1)
      , Q = ft(t => t.cs.isUnread)
      , J = vt( () => f || pt, [f])
      , gt = g( (t, e) => {
        const a = window.innerWidth
          , A = window.innerHeight
          , G = t < J
          , j = t > a - J;
        return e < J && (G || j) ? {
            position: G ? "left" : "right",
            value: Math.max(Y, Math.min(P, J / A * Z))
        } : N && e < gn ? {
            position: "top",
            value: Math.max(Y, Math.min(P, t / a * Z))
        } : {
            position: t < a / 2 ? "left" : "right",
            value: Math.max(Y, Math.min(P, e / A * Z))
        }
    }
    , [N, J])
      , It = g( () => {
        w({
            type: "SET_ACTIVE"
        }),
        F?.(),
        q.current && window.clearTimeout(q.current),
        q.current = window.setTimeout( () => {
            w({
                type: "SET_INACTIVE"
            })
        }
        , hn)
    }
    , [F])
      , X = g( (t, e) => {
        if (!V.current)
            return;
        v.current = {
            x: t,
            y: e
        };
        const a = V.current.getBoundingClientRect();
        w({
            type: "START_DRAG",
            dragOffset: {
                x: t - a.left,
                y: e - a.top
            }
        })
    }
    , [])
      , z = g( (t, e) => {
        W.current?.(t, e)
    }
    , [])
      , $ = g( (t, e) => {
        if (!v.current)
            return;
        x.current && (x.current.style.display = "none");
        const a = t - v.current.x
          , A = e - v.current.y;
        if (Math.sqrt(a * a + A * A) <= Tt)
            w({
                type: "RESET"
            }),
            It();
        else if (i.isDragging) {
            const j = gt(t, e);
            w({
                type: "END_DRAG",
                position: j
            }),
            localStorage.setItem(y, JSON.stringify(j)),
            C?.(j)
        }
        v.current = null,
        O.current && cancelAnimationFrame(O.current)
    }
    , [i.isDragging, gt, It, C, y])
      , Yt = g(t => {
        t.preventDefault(),
        X(t.clientX, t.clientY)
    }
    , [X])
      , ot = g(t => {
        z(t.clientX, t.clientY)
    }
    , [z])
      , at = g(t => {
        $(t.clientX, t.clientY)
    }
    , [$])
      , Pt = g(t => {
        if (_.current !== null)
            return;
        const e = t.touches[0];
        _.current = e.identifier,
        X(e.clientX, e.clientY),
        t.preventDefault()
    }
    , [X])
      , rt = g(t => {
        if (_.current === null)
            return;
        const e = Array.from(t.touches).find(a => a.identifier === _.current);
        e && (z(e.clientX, e.clientY),
        t.preventDefault())
    }
    , [z])
      , H = g(t => {
        if (_.current === null)
            return;
        const e = Array.from(t.changedTouches).find(a => a.identifier === _.current);
        e && ($(e.clientX, e.clientY),
        _.current = null,
        t.preventDefault())
    }
    , [$]);
    tt( () => (W.current = ln( (t, e) => {
        if (!i.isDragging || !v.current)
            return;
        const a = t - v.current.x
          , A = e - v.current.y;
        Math.sqrt(a * a + A * A) > Tt && (x.current && (x.current.style.display = "block"),
        O.current && cancelAnimationFrame(O.current),
        O.current = requestAnimationFrame( () => {
            w({
                type: "MOVE",
                position: {
                    x: t - i.dragOffset.x,
                    y: e - i.dragOffset.y
                }
            })
        }
        ))
    }
    , In),
    () => {
        W.current && W.current.cancel()
    }
    ), [i.isDragging, i.dragOffset]),
    tt( () => {
        if (i.isDragging)
            return window.addEventListener("mousemove", ot),
            window.addEventListener("mouseup", at),
            window.addEventListener("touchmove", rt, {
                passive: !1
            }),
            window.addEventListener("touchend", H),
            window.addEventListener("touchcancel", H),
            () => {
                window.removeEventListener("mousemove", ot),
                window.removeEventListener("mouseup", at),
                window.removeEventListener("touchmove", rt),
                window.removeEventListener("touchend", H),
                window.removeEventListener("touchcancel", H)
            }
    }
    , [i.isDragging, ot, at, rt, H]),
    tt( () => {
        const t = setTimeout( () => {
            Gt({
                side: k,
                top: U
            })
        }
        , 1e3);
        return () => clearTimeout(t)
    }
    , [k, U]),
    tt( () => {
        if (Q) {
            et(!0),
            K(!1);
            const t = performance.now()
              , e = a => {
                const A = a - t;
                A >= Ut ? (et(!1),
                K(!1)) : (K(Math.floor(A / (kt / 2)) % 2 === 1),
                S.current = requestAnimationFrame(e))
            }
            ;
            S.current = requestAnimationFrame(e)
        } else
            et(!1),
            K(!1);
        return () => {
            S.current && cancelAnimationFrame(S.current)
        }
    }
    , [Q]);
    const Bt = vt( () => {
        const t = {
            width: f,
            height: f,
            cursor: i.isDragging ? "grabbing" : "grab",
            transition: i.isDragging ? "none" : `all ${pn}ms ease`,
            opacity: i.isActive || i.isDragging ? D : p
        };
        if (i.isDragging && i.currentPosition) {
            const G = i.currentPosition.x < window.innerWidth / 2;
            return {
                ...t,
                position: "fixed",
                left: i.currentPosition.x,
                top: i.currentPosition.y,
                transform: G ? "scaleX(-1)" : "none"
            }
        }
        const e = i.isActive ? 0 : f * Math.min(P, Math.max(Y, L.side)) / Z
          , a = i.isActive ? 0 : f * Math.min(P, Math.max(Y, L.top)) / Z;
        return {
            top: {
                ...t,
                position: "fixed",
                top: 0,
                left: `${i.position.value}%`,
                transform: `translate(-50%, -${a}px)`
            },
            left: {
                ...t,
                position: "fixed",
                top: `${i.position.value}%`,
                left: 0,
                transform: `translate(-${e}px, -50%) scaleX(-1)`
            },
            right: {
                ...t,
                position: "fixed",
                top: `${i.position.value}%`,
                right: 0,
                transform: `translate(${e}px, -50%)`
            }
        }[i.position.position]
    }
    , [i, f, D, p, L.side, L.top])
      , Ft = g( () => {
        const t = {
            active: {
                top: {
                    normal: s || o,
                    unread: u,
                    blink1: u,
                    blink2: E
                },
                side: {
                    normal: b || I,
                    unread: T,
                    blink1: T,
                    blink2: R
                }
            },
            idle: {
                top: {
                    normal: o,
                    unread: l,
                    blink1: l,
                    blink2: m
                },
                side: {
                    normal: I,
                    unread: h,
                    blink1: h,
                    blink2: d
                }
            }
        }
          , e = i.isActive || i.isDragging ? "active" : "idle"
          , a = i.position.position === "top" ? "top" : "side";
        return Q ? it ? ht && t[e][a].blink2 || t[e][a].blink1 : t[e][a].unread : t[e][a].normal
    }
    , [i.isActive, i.isDragging, i.position.position, Q, it, ht, o, l, m, s, u, E, I, h, d, b, T, R]);
    return B(Ht, {
        children: [B("div", {
            ref: x,
            id: "floating-button-overlay",
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "transparent",
                touchAction: "none",
                pointerEvents: "auto",
                display: "none",
                zIndex: 9998
            },
            children: B("iframe", {
                title: "Floating Button Overlay",
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                    background: "transparent",
                    pointerEvents: "none"
                }
            })
        }), B("div", {
            ref: V,
            onMouseDown: Yt,
            onTouchStart: Pt,
            style: {
                ...Bt,
                animation: it ? mn : void 0
            },
            className: `fixed ${i.isDragging ? "will-change-transform" : ""} select-none touch-none`,
            "data-testid": "floating-button",
            "aria-label": "Floating action button",
            role: "button",
            tabIndex: 0,
            children: B("img", {
                src: Ft(),
                alt: "Floating Button",
                className: "w-full h-full pointer-events-none select-none touch-none",
                style: {
                    WebkitTouchCallout: "none"
                }
            })
        })]
    })
}
)
  , Wt = document.createElement("style");
Wt.textContent = `
  @keyframes notification-blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(Wt);
const Nt = window.__dynamic_base__ + "/assets/aria-side-active-notification-1-Dtb3gkhC.png"
  , _t = window.__dynamic_base__ + "/assets/aria-side-active-notification-2-Di1928WQ.png"
  , Et = window.__dynamic_base__ + "/assets/aria-side-active-Bmlazv_n.png"
  , bt = window.__dynamic_base__ + "/assets/aria-side-idel-notification-1-Bx9Wugg5.png"
  , Dt = window.__dynamic_base__ + "/assets/aria-side-idel-notification-2-TDxiG2GT.png"
  , yt = window.__dynamic_base__ + "/assets/aria-top-idel-DRaYRL5f.png"
  , Rt = window.__dynamic_base__ + "/assets/aria-top-active-notification-1-BoujLy7K.png"
  , Ct = window.__dynamic_base__ + "/assets/aria-top-active-notification-2-D_uGKtq9.png"
  , Ot = window.__dynamic_base__ + "/assets/aria-top-active-ClLoO2Cp.png"
  , St = window.__dynamic_base__ + "/assets/aria-top-idel-DRaYRL5f.png"
  , Mt = window.__dynamic_base__ + "/assets/aria-side-active-Bmlazv_n.png"
  , xt = window.__dynamic_base__ + "/assets/aria-top-idel-DRaYRL5f.png"
  , r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAMAAAC4uKf/AAAAb1BMVEUAAAAHBwcHBwcDAwMBAQECAgICAgLg/DPd9zPB2Sy50SpZZBY2Pg2ImR/S7DDH4C3O5y+YqyPY8jGluiaxxilzgh3j/zQTbHJ7tlPJ7TwtfmogdW6VyEu85D/W9jhbn1xHkWI6iGZurVeIv0+v2kPn1fgEAAAAFnRSTlMACA0UMRwm8+epnVJEa862wnfbhJBfiDfSBgAABFpJREFUaN7N2utymzAQBWDHVQribrDlW2zHSd7/GSvw4kMs0A0009N2Ou2fb3a1AgJaOeatzar9s5K/AwWMmuUlctbDkN/9WioEkfCnT09SxQvWNGDeu8i/YC7TTkCtQvnbhf5BILxZ/SMKCqPAfHgYF3+KJGKUEIjyvCyiOomgbNfwso4jIRPFRcW3OYGtB24e1UI5r8VICp4/vWcz3TsISkpVJCYTVZtXzqesB5UmkCYSl6n02mail/Z7C1ReCKu03KA4W4qsR1WgbLl+UKx7SGVliXAKz7ri7LW+hW0HY+GYuGHMvpWDFmbcUUJx0EwYWWksvBKn0GytTSQ8E8ldh9o0FFmMJWJGEp2GOVzDWkjTzeEaVhgNhaGupTQ0Ui2snQ1Y8zUsmzqI3V7eiEWykRi0CSuNlsGi9KERpk6itLJYLJQ4m2rkG1mMi8XCadlUjCaxEQsm7yfyhbJs4vX7dtqP5WhuJFaMpoPrqcNZUXSYSDAj6oqlWuuCoiwxkSqrRoXJ7VxqLZRljRV9aY6FfcCyx0SO0l5WrNRZKqDFUJrUgFkVdth7YOqqASt1li+W0F4D1lks1ljeWJQx9BGFbSatr/0wp6+DmqsQdiNCV6pKTOT2y7oJt1TAJNV3MbKq6+ACqX0kLNfMvLeFPsqasGRTl8XjaaYl+LOPuLkUFoV9CI/Uz0sWBl+M5xPUGZZTMgZMv2RnWBfhlx0tGpZsK8aDwr5Hb3EWWINxJIwbscvoLe5+tZ4QYJURO47f4u5HE1b2s/9sY+GI4RZ3Mmk1XYtpPiQWu2HYFWYtbme/22i4WDlhuBWYtYjR7GObWWOwoOl3hXxYnYddcRkz7sFZleGiiVzCVaZqp6stJrXIjPneEKIntuow5jP64nofYJ+60e8wbOraAYN2G8wI/nvisRiXq9KMGe5ANk8hhHE/7McC44Thftb4YUcLbEvzAWwXDstfsHeWhcOYUhmrg2AYRuVRLgjG8dyIJ55QWD6CZVEYDBerJya1amkMW/oXhj5qsNthJF9GbIMtbezj3hATFv/qIp72kxBYiR9zoU39AH+eiaXo4gCbeHb8nIeVw/EwjsjHPCylLpKEPs4sbbQwGg/b90nHkwtmflGGVUvGtJs3xunpQ8E0Lzd/bncvLM5Q2FhpuVgwDfbY6BeEIC+kVS3gq/aJL50BPiIAU0sL+nlEfd0e+sMPJhJaKAuYWfP4fBZOg4VLxwQGLZyl1hb40zE+oy33Ufztf/rcv4LGGveDDDmztFAcHZtwLi7JaDSkBcq4bj2XlvZUQWddcI7H7ViNA1fkRMHyOjBUxsZxT2RV6ikXx+IeHNvoj0Llme9RKGjgZHJejEk1byVQaw/qhZNeB255VfTH1+qSN7ts9vE1FBf+YB7GpK8ORw4fJiEPiCSi3pY4TElgZ8pfUqEMD1Muc8p2eBoVCjlEwZrnARw9Aavpn+fiQUTCnCRGgYDJCUPhqK/vUeV/gOFf3NcYpfQAAAAASUVORK5CYII="
  , Tn = {
    default: {
        pc: {
            width: 48,
            sideActiveIcon: n(r, ["w-64", "h-64"]),
            sideActiveIconNotification1: n(r, ["w-64", "h-64"]),
            sideActiveIconNotification2: n(r, ["w-64", "h-64"]),
            sideIdleIcon: n(r, ["w-64", "h-64"]),
            sideIdleIconNotification1: n(r, ["w-64", "h-64"]),
            sideIdleIconNotification2: n(r, ["w-64", "h-64"]),
            topActiveIcon: n(r, ["w-64", "h-64"]),
            topActiveIconNotification1: n(r, ["w-64", "h-64"]),
            topActiveIconNotification2: n(r, ["w-64", "h-64"]),
            topIdleIcon: n(r, ["w-64", "h-64"]),
            topIdleIconNotification1: n(r, ["w-64", "h-64"]),
            topIdleIconNotification2: n(r, ["w-64", "h-64"])
        },
        sp: {
            width: 48,
            sideActiveIcon: n(r, ["w-56", "h-56"]),
            sideActiveIconNotification1: n(r, ["w-56", "h-56"]),
            sideActiveIconNotification2: n(r, ["w-56", "h-56"]),
            sideIdleIcon: n(r, ["w-56", "h-56"]),
            sideIdleIconNotification1: n(r, ["w-56", "h-56"]),
            sideIdleIconNotification2: n(r, ["w-56", "h-56"]),
            topActiveIcon: n(r, ["w-56", "h-56"]),
            topActiveIconNotification1: n(r, ["w-56", "h-56"]),
            topActiveIconNotification2: n(r, ["w-56", "h-56"]),
            topIdleIcon: n(r, ["w-56", "h-56"]),
            topIdleIconNotification1: n(r, ["w-56", "h-56"]),
            topIdleIconNotification2: n(r, ["w-56", "h-56"])
        }
    },
    arena: {
        pc: {
            width: 64,
            sideActiveIcon: n(Et, ["w-64", "h-64"]),
            sideActiveIconNotification1: n(Nt, ["w-64", "h-64"]),
            sideActiveIconNotification2: n(_t, ["w-64", "h-64"]),
            sideIdleIcon: n(yt, ["w-64", "h-64"]),
            sideIdleIconNotification1: n(bt, ["w-64", "h-64"]),
            sideIdleIconNotification2: n(Dt, ["w-64", "h-64"]),
            topActiveIcon: n(Ot, ["w-64", "h-64"]),
            topActiveIconNotification1: n(Rt, ["w-64", "h-64"]),
            topActiveIconNotification2: n(Ct, ["w-64", "h-64"]),
            topIdleIcon: n(xt, ["w-64", "h-64"]),
            topIdleIconNotification1: n(St, ["w-64", "h-64"]),
            topIdleIconNotification2: n(Mt, ["w-64", "h-64"])
        },
        sp: {
            width: 56,
            sideActiveIcon: n(Et, ["w-56", "h-56"]),
            sideActiveIconNotification1: n(Nt, ["w-56", "h-56"]),
            sideActiveIconNotification2: n(_t, ["w-56", "h-56"]),
            sideIdleIcon: n(yt, ["w-56", "h-56"]),
            sideIdleIconNotification1: n(bt, ["w-56", "h-56"]),
            sideIdleIconNotification2: n(Dt, ["w-56", "h-56"]),
            topActiveIcon: n(Ot, ["w-56", "h-56"]),
            topActiveIconNotification1: n(Rt, ["w-56", "h-56"]),
            topActiveIconNotification2: n(Ct, ["w-56", "h-56"]),
            topIdleIcon: n(xt, ["w-56", "h-56"]),
            topIdleIconNotification1: n(St, ["w-56", "h-56"]),
            topIdleIconNotification2: n(Mt, ["w-56", "h-56"])
        }
    }
}
  , Sn = () => {
    const o = $t()
      , l = ft(h => h.app.gbuttonTheme) || "default"
      , m = tn({
        maxWidth: nn
    })
      , s = Tn[l][m ? "sp" : "pc"]
      , u = ft(h => h.cs.isUnread)
      , E = g( () => {
        if (console.log("handleClick"),
        zt(!0),
        jt({
            action: "p_click",
            data: {
                display_name: window.option.userId,
                click: "GButton",
                providers: window.option.providers
            }
        }),
        u) {
            on(),
            setTimeout( () => {
                o(Zt({
                    isUnread: !1
                }))
            }
            );
            return
        }
        Kt()
    }
    , [o, u])
      , I = g( () => {
        o(Qt())
    }
    , [o]);
    return B(An, {
        size: s.width,
        sideIdleIcon: s.sideIdleIcon,
        sideActiveIconNotification1: s.sideActiveIconNotification1,
        sideActiveIconNotification2: s.sideActiveIconNotification2,
        sideActiveIcon: s.sideActiveIcon,
        sideIdleIconNotification1: s.sideIdleIconNotification1,
        sideIdleIconNotification2: s.sideIdleIconNotification2,
        topIdleIcon: s.topIdleIcon,
        topActiveIconNotification1: s.topActiveIconNotification1,
        topActiveIconNotification2: s.topActiveIconNotification2,
        topActiveIcon: s.topActiveIcon,
        topIdleIconNotification1: s.topIdleIconNotification1,
        topIdleIconNotification2: s.topIdleIconNotification2,
        enableTopEdge: !0,
        onClick: E,
        onDragEnd: I
    })
}
;
export {Sn as default};
