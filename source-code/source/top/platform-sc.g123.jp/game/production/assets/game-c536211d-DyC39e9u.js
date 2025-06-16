import {d as n, q as p, y as u, u as i, r as m, v as h} from "./game-03165520-C9c3cPxP.js";
import {c as f, b as w} from "./game-8cc43aba-Byxz78RI.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./app-CpUCrGhP.js";
const y = e => ({
    display: e.videoPopupModule.display,
    url: e.videoPopupModule.url
})
  , v = e => {
    const {display: s, url: a} = e
      , [c,r] = n(0)
      , l = w()
      , d = p(o => {
        o.stopPropagation(),
        l(h.actions.hideVideoPopup())
    }
    , [l])
      , t = p( () => {
        const o = document.body.clientWidth;
        o >= 560 ? r(315) : r(o * 315 / 560)
    }
    , []);
    return u( () => (window.addEventListener("resize", t),
    t(),
    () => window.removeEventListener("resize", t)), [t]),
    s ? i("div", {
        className: m("fixed right-0 top-0 z-50 size-full", "flex items-center justify-center", "bg-black/60"),
        id: "popup-video",
        role: "presentation",
        onClick: d,
        children: i("div", {
            className: "w-full max-w-[35rem]",
            style: {
                height: c
            },
            children: i("iframe", {
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                className: "border-0",
                height: "100%",
                src: `https://www.youtube.com/embed/${a}?autoplay=1&mute=1`,
                title: "YouTube video player",
                width: "100%"
            })
        })
    }) : null
}
  , H = f(y)(v);
export {H as default};
