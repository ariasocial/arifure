import {d as f, y as l, u as n, r, g as s} from "./game-03165520-C9c3cPxP.js";
import {u as d} from "./game-33507154-DyI7v4sS.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./game-6f09ab72-CE2_ieOF.js";
const w = () => {
    const {t: i} = d()
      , [t,o] = f(!1)
      , e = {
        offline: () => {
            o(!0)
        }
        ,
        online: () => {
            o(!1)
        }
    };
    return l( () => (window.addEventListener("offline", e.offline),
    window.addEventListener("online", e.online),
    () => {
        window.removeEventListener("offline", e.offline),
        window.removeEventListener("online", e.online)
    }
    ), [e.offline, e.online]),
    n("div", {
        className: r("fixed bottom-6 left-1/2 -translate-x-1/2", "flex items-center justify-center gap-x-4", "bg-info-bg text-info-default min-w-96 max-w-[26rem] rounded-lg p-4", "border-info-disabled border border-solid", {
            hidden: !t
        }),
        children: [n(s, {
            className: "text-info-default scale-150"
        }), n("span", {
            className: "text-sm font-bold",
            children: i("common.tips.offline")
        })]
    })
}
;
export {w as default};
