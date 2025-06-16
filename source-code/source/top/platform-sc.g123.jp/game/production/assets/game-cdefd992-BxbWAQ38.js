import {z as l, D as g, u as n, B as v, q as s, j as x, r as c, a as d, C as y, E as w} from "./game-03165520-C9c3cPxP.js";
import {b as R, a as C} from "./game-8cc43aba-Byxz78RI.js";
import {u as _} from "./game-33507154-DyI7v4sS.js";
import {a as b} from "./game-ded8115c-BzjqZ_Ug.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./app-CpUCrGhP.js";
import "./game-6f09ab72-CE2_ieOF.js";
var m, p, f;
function i() {
    return i = Object.assign ? Object.assign.bind() : function(e) {
        for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var r in o)
                ({}).hasOwnProperty.call(o, r) && (e[r] = o[r])
        }
        return e
    }
    ,
    i.apply(null, arguments)
}
var N = function(e) {
    return l("svg", i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, e), m || (m = l("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M6 20a1 1 0 0 1 1-1h13a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
        clipRule: "evenodd"
    })), p || (p = l("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 7 21H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 .293-.707zM5 17.414V19h1.586l12-12L17 5.414z",
        clipRule: "evenodd"
    })), f || (f = l("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M13.293 6.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414",
        clipRule: "evenodd"
    })))
};
const j = g( (e, a) => n(v, {
    ref: a,
    IconSvg: N,
    ...e
}))
  , I = () => {
    const {t: e, i18n: a} = _()
      , o = R()
      , {status: r} = C(t => t.koreanR18Confirm)
      , u = s( () => {
        window.location.href = `${x.SHD_G123_WEB_URL}?lang=${a.language}`
    }
    , [a.language])
      , h = s(async () => {
        const t = window.option.appId;
        t && y(t),
        o(w.actions.hideDialog())
    }
    , [o]);
    return n("div", {
        className: c("fixed z-50 h-screen w-screen", "bg-slate-600/70", "flex items-center justify-center", {
            hidden: r !== "open"
        }),
        children: n("div", {
            className: c("flex flex-col items-center justify-center gap-y-4", "bg-surface-primary rounded-2xl", "h-fit w-96 p-4"),
            children: [n(b, {}), n("h2", {
                className: "font-semibold text-xl text-error-default",
                children: e("common.account.korean_r18_confirm.title")
            }), n("div", {
                className: "flex gap-x-1 text-font-secondary",
                children: [n(j, {
                    className: "scale-75"
                }), e("common.account.korean_r18_confirm.content")]
            }), n("p", {
                className: "text-xs px-4 py-8 bg-surface-quaternary rounded-lg text-neutral-6",
                children: e("common.account.korean_r18_confirm.description")
            }), n("div", {
                className: "flex w-full justify-between px-2",
                children: [n(d, {
                    className: "px-12! py-6!",
                    size: "middle",
                    onClick: u,
                    children: e("common.actions.no")
                }), n(d, {
                    className: "px-12! py-6!",
                    size: "middle",
                    type: "primary",
                    onClick: h,
                    children: e("common.actions.yes")
                })]
            })]
        })
    })
}
;
export {I as default};
