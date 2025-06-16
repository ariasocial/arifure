import {q as l, u as s, w as p} from "./game-03165520-C9c3cPxP.js";
import {p as m, o as d} from "./game-ded8115c-BzjqZ_Ug.js";
import {a as f, b as h} from "./game-8cc43aba-Byxz78RI.js";
import {u} from "./game-33507154-DyI7v4sS.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
import "./game-6f09ab72-CE2_ieOF.js";
import "./app-CpUCrGhP.js";
const b = {
    line: "LINE",
    facebook: "Facebook",
    twitter: "X",
    copy: "Copy URL",
    system: "More"
}
  , y = {
    line: "#00c300",
    facebook: "#3c599b",
    twitter: "#000000",
    copy: "#f5a623",
    system: "#f5a623"
}
  , A = () => {
    const {t: n} = u()
      , {status: i, targets: r} = f(o => o.webShareModule)
      , t = h()
      , c = l( () => {
        t(p.actions.hide())
    }
    , [t])
      , a = o => {
        d(o)
    }
    ;
    return s(m, {
        open: i === "open",
        title: n("common.actions.share"),
        footer: null,
        onClose: c,
        children: s("div", {
            className: "flex pt-4",
            children: (r || []).map(o => s("div", {
                className: "flex size-16 cursor-pointer flex-col items-center",
                role: "presentation",
                onClick: e => {
                    e.stopPropagation(),
                    e.preventDefault(),
                    a(o)
                }
                ,
                onKeyDown: e => {
                    e.stopPropagation(),
                    e.preventDefault(),
                    a(o)
                }
                ,
                children: [s("img", {
                    alt: `${o}_icon`,
                    className: "size-10",
                    loading: "lazy",
                    src: `/static/img/${o}.png`
                }), s("div", {
                    className: "text-xs",
                    style: {
                        color: y[o]
                    },
                    children: b[o]
                })]
            }, o))
        })
    })
}
;
export {A as default};
