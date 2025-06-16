import {d as r, c as u, u as e, r as P, O as h, f as I} from "./game-03165520-C9c3cPxP.js";
import {c as T} from "./game-6f09ab72-CE2_ieOF.js";
import {a as C, P as v} from "./game-8cc43aba-Byxz78RI.js";
import {T as y} from "./game-4959c158-D4IOeLDe.js";
import {u as b} from "./game-33507154-DyI7v4sS.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./app-CpUCrGhP.js";
const _ = ({onDismiss: t}) => {
    const {t: s} = b()
      , o = C(g => g.pwa.isPwaInstallPromptReady)
      , [n,m] = r(-216)
      , [p,a] = r(!0)
      , [i,d] = r(!1)
      , c = () => {
        a(!1),
        t?.()
    }
      , w = async () => {
        o && window?.pwaInstallPrompt ? (window.pwaInstallPrompt.prompt(),
        await window.pwaInstallPrompt.userChoice) : h.error(s("common.actions.add_to_desktop.pwa_unsupported"))
    }
      , f = () => {
        a(!1),
        d(!1),
        w()
    }
    ;
    return u( () => {
        setTimeout( () => {
            m(0)
        }
        , 1e3)
    }
    , []),
    e("div", {
        className: P("absolute z-10 w-full", "pointer-events-none select-none overflow-visible", {
            hidden: i,
            flex: !i
        }),
        children: e(y, {
            isTriggerShown: p,
            triggerBottomOffset: n,
            onTriggerClose: c,
            onTriggerConfirm: f
        })
    })
}
  , l = "pwaInstallPrompt";
function E(t) {
    if (window?.pwaInstallPrompt) {
        const {handleDismiss: s} = t || {};
        let o = document.getElementById(l);
        o && document.body.removeChild(o),
        o = document.createElement("div"),
        o.id = l,
        o.className = "g123App",
        document.body.appendChild(o),
        T(o).render(e(v, {
            store: I,
            children: e(_, {
                onDismiss: s
            })
        }))
    }
}
export {E as show};
