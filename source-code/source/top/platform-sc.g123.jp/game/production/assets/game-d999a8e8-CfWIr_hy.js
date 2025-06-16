import {h as l, q as n, u as e, r as c, a as m, i as d} from "./game-03165520-C9c3cPxP.js";
import {e as p, s as u} from "./game-ded8115c-BzjqZ_Ug.js";
import {b as f, a as h} from "./game-8cc43aba-Byxz78RI.js";
import {u as x} from "./game-33507154-DyI7v4sS.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./game-6f09ab72-CE2_ieOF.js";
import "./app-CpUCrGhP.js";
const j = () => {
    const {t: s} = x()
      , t = f()
      , {status: o} = h(a => a.blockedUser)
      , r = l().currentUser()?.userId
      , i = n( () => {
        u(),
        t(d.actions.hideDialog())
    }
    , [t]);
    return e("div", {
        className: c("fixed z-50 h-screen w-screen", "bg-slate-600/70", "flex items-center justify-center", {
            hidden: o !== "open"
        }),
        children: e("div", {
            className: c("flex flex-col items-center justify-center gap-y-4", "bg-surface-primary rounded-2xl", "h-fit w-96 p-8"),
            children: [e(p, {
                className: "text-error-default scale-2"
            }), e("div", {
                className: "my-2 flex flex-col items-center justify-center gap-y-2 font-semibold",
                children: [e("p", {
                    className: "text-base",
                    children: s("common.account.blocked.title")
                }), r && e("p", {
                    className: "text-sm",
                    children: [" G123 ID: ", r]
                })]
            }), e(m, {
                block: !0,
                size: "middle",
                type: "primary",
                onClick: i,
                children: s("common.service.title")
            })]
        })
    })
}
;
export {j as default};
