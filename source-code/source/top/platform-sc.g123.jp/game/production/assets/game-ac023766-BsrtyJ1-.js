import {R as r, u as o} from "./game-03165520-C9c3cPxP.js";
import {a as c} from "./game-8cc43aba-Byxz78RI.js";
import {u as a} from "./game-33507154-DyI7v4sS.js";
import {i as n} from "./game-ded8115c-BzjqZ_Ug.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./app-CpUCrGhP.js";
import "./game-6f09ab72-CE2_ieOF.js";
const k = () => {
    const {t: e} = a()
      , {cookieEnabled: t} = c(i => i.privacy);
    return r.useEffect( () => {
        (navigator && !navigator.cookieEnabled || !t) && n.show({
            content: o("div", {
                className: "relative -top-6 flex max-w-80 flex-col text-left text-xs",
                children: [o("h2", {
                    className: "text-base font-semibold",
                    children: e("common.tips.caution")
                }), o("p", {
                    children: e("common.privacy.cookie_blocked")
                }), o("p", {
                    children: e("common.privacy.cookie_blocked_desc")
                })]
            }),
            footer: null
        })
    }
    , [t, e]),
    o("span", {})
}
;
export {k as default};
