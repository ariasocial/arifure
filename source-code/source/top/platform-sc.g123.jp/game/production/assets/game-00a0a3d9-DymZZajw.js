import {z as l, D as s, u as g, B as c} from "./game-03165520-C9c3cPxP.js";
var o;
function a() {
    return a = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var e in t)
                ({}).hasOwnProperty.call(t, e) && (n[e] = t[e])
        }
        return n
    }
    ,
    a.apply(null, arguments)
}
var v = function(n) {
    return l("svg", a({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, n), o || (o = l("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M8.293 12.207a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L10.414 11.5l5.293 5.293a1 1 0 0 1-1.414 1.414z",
        clipRule: "evenodd"
    })))
};
const d = s( (n, r) => g(c, {
    ref: r,
    IconSvg: v,
    ...n
}));
var u;
function i() {
    return i = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var e in t)
                ({}).hasOwnProperty.call(t, e) && (n[e] = t[e])
        }
        return n
    }
    ,
    i.apply(null, arguments)
}
var f = function(n) {
    return l("svg", i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, n), u || (u = l("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M15.707 10.793a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l5.293-5.293-5.293-5.293a1 1 0 0 1 1.414-1.414z",
        clipRule: "evenodd"
    })))
};
const p = s( (n, r) => g(c, {
    ref: r,
    IconSvg: f,
    ...n
}));
export {p as e, d as m};
