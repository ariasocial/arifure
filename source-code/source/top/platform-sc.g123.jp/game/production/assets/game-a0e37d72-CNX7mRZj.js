import {d as w, y as c, G as v, T as N, q as g, H as M, A as b, u as i, e as L} from "./game-03165520-C9c3cPxP.js";
import {i as V, a as k} from "./game-2579259a-CR6d9Ilz.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./game-6f09ab72-CE2_ieOF.js";
import "./game-8cc43aba-Byxz78RI.js";
import "./app-CpUCrGhP.js";
import "./game-33507154-DyI7v4sS.js";
import "./game-ded8115c-BzjqZ_Ug.js";
import "./game-9d70c10e-BYkEDM1P.js";
import "./game-00a0a3d9-DymZZajw.js";
const f = "game_add_to_favorites"
  , Y = "favorite"
  , I = e => {
    const {pathname: t, search: s} = window.location
      , r = new URLSearchParams(s);
    e(r),
    window.history.replaceState(null, "", `${t}?${r.toString()}`)
}
  , S = () => {
    I(e => {
        e.set(f, Y)
    }
    )
}
  , G = () => {
    I(e => {
        e.delete(f)
    }
    )
}
  , H = () => {
    const {search: e} = window.location;
    return new URLSearchParams(e).has(f)
}
  , W = window.__dynamic_base__ + "/assets/h5_favorite_common-DBGLsDRN.png"
  , K = window.__dynamic_base__ + "/assets/h5_favorite_safari-0_6qpgbR.png"
  , U = () => {
    const e = V() ? "Ctrl" : "Command"
      , t = k() ? {
        src: K,
        width: 347,
        height: 92
    } : {
        src: W,
        width: 329,
        height: 94
    };
    return {
        commandText: e,
        favoriteImage: t
    }
}
  , x = "game_add_to_favorites"
  , A = 1e3 * 60 * 60 * 24
  , F = [0, 3, 7, 14, 30]
  , B = 1e3 * 300
  , X = 1e3 * 30
  , E = 10
  , R = 5
  , j = () => new Date().toISOString().split("T")[0]
  , m = () => {
    const e = localStorage.getItem(x)
      , t = window.atob(e || "");
    return e ? JSON.parse(t) : {}
}
  , T = e => {
    const t = window.btoa(JSON.stringify(e));
    localStorage.setItem(x, t)
}
  , y = () => {
    try {
        const e = m()
          , t = e.pageVisits || {}
          , s = j();
        if (Object.keys(t).length > E) {
            const r = Object.keys(t).sort();
            for (let l = 0; l < R; l++)
                delete t[r[l]]
        }
        t[s] = t[s] || [],
        t[s].length > E && (t[s] = t[s].slice(R, t[s].length)),
        t[s].push({
            page: window.location.pathname,
            date: new Date().getTime()
        }),
        T({
            ...e,
            pageVisits: t
        })
    } catch (e) {
        console.error("🚀 ~ CheckIsFavorite ~ error:", e)
    }
}
  , D = () => {
    const [e,t] = w(!1)
      , [s,r] = w(!1)
      , [l,u] = w(!1);
    c( () => {
        y()
    }
    , []),
    c( () => {
        const a = H()
          , o = m();
        T({
            ...o,
            isFavorite: a
        }),
        t(a)
    }
    , []),
    c( () => {
        const a = new Date().getTime()
          , o = m()
          , n = Number(o.nextReport) || 0;
        u(n > a)
    }
    , []),
    c( () => {
        const a = new Date().getTime()
          , o = m()
          , n = Number(o.nextShowInterval);
        let h = Number(o.lastShowToast);
        if (n && h) {
            const O = h + F[n] * A;
            if (a > O) {
                h = a;
                const C = v().setTimeout( () => {
                    T({
                        ...o,
                        lastShowToast: h
                    }),
                    r(!0)
                }
                , X);
                return () => v().clearTimeout(C)
            }
            return
        }
        const P = v().setTimeout( () => {
            y(),
            r(!0)
        }
        , B);
        return () => v().clearTimeout(P)
    }
    , []);
    const p = N( () => s && !e, [s, e])
      , d = g( () => {
        const a = m()
          , o = new Date().getTime() + A / 2;
        T({
            ...a,
            nextReport: o
        }),
        u(!0)
    }
    , [])
      , _ = g( () => {
        const a = new Date().getTime()
          , o = m();
        let n = Number(o.nextShowInterval) || 0;
        n = Math.min(n + 1, F.length - 1),
        T({
            ...o,
            nextShowInterval: n,
            lastShowToast: a
        }),
        r(!1)
    }
    , []);
    return {
        isFavorite: e,
        isToastVisible: p,
        isReported: l,
        onReportCompleted: d,
        onCloseToast: _
    }
}
  , $ = 1e3 * 30
  , q = "misc_game_add_to_favorites"
  , z = () => {
    const {isFavorite: e, isReported: t, onReportCompleted: s} = D();
    c( () => {
        if (!e || t)
            return;
        const r = setTimeout( () => {
            M(q, {
                data: {
                    isFavorite: e
                }
            }),
            s()
        }
        , $);
        return () => clearTimeout(r)
    }
    , [e, t, s])
}
  , J = 1e3 * 20
  , Q = 1e3 * 3
  , Z = 5
  , me = () => {
    const {commandText: e, favoriteImage: t} = U()
      , s = b(null)
      , r = b(0)
      , {isToastVisible: l, isFavorite: u, onCloseToast: p} = D()
      , [d,_] = w(!1);
    z();
    const a = g( () => {
        _(!1),
        p()
    }
    , [p]);
    return c( () => {
        _(l)
    }
    , [l]),
    c( () => {
        if (!d)
            return;
        s.current?.focus();
        const o = setInterval( () => {
            s.current?.focus(),
            r.current++,
            r.current >= Z && clearInterval(o)
        }
        , Q);
        return () => o && clearInterval(o)
    }
    , [d]),
    c( () => {
        const o = n => {
            (n.metaKey || n.ctrlKey) && n.key === "d" && (S(),
            a())
        }
        ;
        return window.addEventListener("keydown", o, !0),
        () => {
            window.removeEventListener("keydown", o, !0)
        }
    }
    , [a]),
    c( () => {
        let o;
        return d ? S() : ( () => {
            u || (o = setTimeout(G, J))
        }
        )(),
        () => {
            o && clearTimeout(o)
        }
    }
    , [d, u]),
    i("div", {
        ref: s,
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        className: `fixed top-0 right-0 m-3 pb-6 px-6 bg-white rounded-lg drop-shadow-xl transition-opacity duration-1500 outline-none ${d ? "visible opacity-100 z-10000" : "invisible opacity-0 -z-10"}`,
        children: [i("button", {
            className: "absolute top-0 right-0 px-6 py-5 cursor-pointer hover:opacity-60",
            type: "button",
            onClick: a,
            children: i("div", {
                className: "flex items-center justify-center w-5 h-5 bg-[rgba(0,0,0,0.05)] rounded-full",
                children: i(L, {
                    className: "text-[#666] scale-60"
                })
            })
        }), i("div", {
            children: i("p", {
                className: "flex items-center text-base font-semibold py-3.5",
                children: ["Press", i("span", {
                    className: "mx-2 px-5 py-1  rounded-lg bg-success-bg text-link-default",
                    children: e
                }), "+", i("span", {
                    className: "mx-2 px-5 py-1  rounded-lg bg-success-bg text-link-default",
                    children: "D"
                })]
            })
        }), i("div", {
            children: i("img", {
                ...t,
                alt: "add to favorites",
                "aria-label": "add to favorites"
            })
        })]
    })
}
;
export {me as default};
