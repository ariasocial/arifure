import {u as e, r as d, a as i, e as m} from "./game-03165520-C9c3cPxP.js";
import {u as p, M as _, a as g, w as h} from "./game-8cc43aba-Byxz78RI.js";
import {u} from "./game-33507154-DyI7v4sS.js";
const x = 216
  , k = ({isTriggerShown: s, triggerBottomOffset: r, onTriggerConfirm: n, onTriggerClose: l}) => {
    const {t} = u()
      , o = p({
        maxWidth: _
    })
      , {currentAppInfo: a} = g(c => c.mainPopup);
    return e("div", {
        "aria-hidden": !0,
        className: d("pointer-events-auto", "bg-surface-primary w-full px-6 py-4", "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),_-4px_0_6px_-1px_rgba(0,0,0,0.1),_4px_0_6px_-1px_rgba(0,0,0,0.1)]", {
            "absolute rounded-t-lg": o,
            "fixed right-4 top-4 max-w-96 rounded-lg": !o,
            block: s,
            hidden: !s
        }),
        style: o ? {
            bottom: r,
            transition: "bottom 0.2s",
            height: x
        } : {},
        children: e("div", {
            className: "mx-auto max-w-[40rem]",
            children: [e("div", {
                className: "text-center text-base font-bold",
                children: [e("h2", {
                    children: t("common.actions.add_to_desktop.trigger_title", {
                        app: a?.shortTitle
                    })
                }), e(i, {
                    className: "absolute right-4 top-4",
                    icon: e(m, {
                        className: "scale-[0.85] text-[#666]"
                    }),
                    size: "small",
                    type: "secondary",
                    onClick: l
                })]
            }), e("div", {
                className: "my-4 flex gap-4 text-sm font-normal",
                children: [e("img", {
                    alt: "game-icon",
                    className: "pointer-events-none size-[4.5rem] rounded-lg",
                    src: h(a?.iconUrl || "", ["w-72"])
                }), e("p", {
                    children: t("common.actions.add_to_desktop.trigger_desc", {
                        app: a?.shortTitle
                    })
                })]
            }), e(i, {
                block: !0,
                size: "middle",
                type: "highlight",
                onClick: n,
                children: t("common.actions.add_to_desktop.trigger_button")
            })]
        })
    })
}
;
export {k as T};
