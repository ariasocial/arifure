import {s as m, t as D} from "./game-03165520-C9c3cPxP.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
/*!
 Copyright 2018 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
/*! lifecycle.mjs v0.1.1 */
let u;
try {
    new EventTarget,
    u = !0
} catch {
    u = !1
}
class L {
    constructor() {
        this.e = {}
    }
    addEventListener(e, t, r=!1) {
        this.t(e).push(t)
    }
    removeEventListener(e, t, r=!1) {
        const a = this.t(e)
          , i = a.indexOf(t);
        i > -1 && a.splice(i, 1)
    }
    dispatchEvent(e) {
        return e.target = this,
        Object.freeze(e),
        this.t(e.type).forEach(t => t(e)),
        !0
    }
    t(e) {
        return this.e[e] = this.e[e] || []
    }
}
var k = u ? EventTarget : L;
class x {
    constructor(e) {
        this.type = e
    }
}
var O = u ? Event : x;
class z extends O {
    constructor(e, t) {
        super(e),
        this.newState = t.newState,
        this.oldState = t.oldState,
        this.originalEvent = t.originalEvent
    }
}
const n = "active"
  , c = "passive"
  , h = "hidden"
  , o = "frozen"
  , f = "terminated"
  , b = typeof safari == "object" && safari.pushNotification
  , I = "onpageshow"in self
  , j = ["focus", "blur", "visibilitychange", "freeze", "resume", "pageshow", I ? "pagehide" : "unload"]
  , E = s => (s.preventDefault(),
s.returnValue = "Are you sure?")
  , A = s => s.reduce( (e, t, r) => (e[t] = r,
e), {})
  , U = [[n, c, h, f], [n, c, h, o], [h, c, n], [o, h], [o, n], [o, c]].map(A)
  , C = (s, e) => {
    for (let t, r = 0; t = U[r]; ++r) {
        const a = t[s]
          , i = t[e];
        if (a >= 0 && i >= 0 && i > a)
            return Object.keys(t).slice(a, i + 1)
    }
    return []
}
  , l = () => document.visibilityState === h ? h : document.hasFocus() ? n : c;
class F extends k {
    constructor() {
        super();
        const e = l();
        this.s = e,
        this.i = [],
        this.a = this.a.bind(this),
        j.forEach(t => addEventListener(t, this.a, !0)),
        b && addEventListener("beforeunload", t => {
            this.n = setTimeout( () => {
                t.defaultPrevented || t.returnValue.length > 0 || this.r(t, h)
            }
            , 0)
        }
        )
    }
    get state() {
        return this.s
    }
    get pageWasDiscarded() {
        return document.wasDiscarded || !1
    }
    addUnsavedChanges(e) {
        !this.i.indexOf(e) > -1 && (this.i.length === 0 && addEventListener("beforeunload", E),
        this.i.push(e))
    }
    removeUnsavedChanges(e) {
        const t = this.i.indexOf(e);
        t > -1 && (this.i.splice(t, 1),
        this.i.length === 0 && removeEventListener("beforeunload", E))
    }
    r(e, t) {
        if (t !== this.s) {
            const r = this.s
              , a = C(r, t);
            for (let i = 0; i < a.length - 1; ++i) {
                const S = a[i]
                  , p = a[i + 1];
                this.s = p,
                this.dispatchEvent(new z("statechange",{
                    oldState: S,
                    newState: p,
                    originalEvent: e
                }))
            }
        }
    }
    a(e) {
        switch (b && clearTimeout(this.n),
        e.type) {
        case "pageshow":
        case "resume":
            this.r(e, l());
            break;
        case "focus":
            this.r(e, n);
            break;
        case "blur":
            this.s === n && this.r(e, l());
            break;
        case "pagehide":
        case "unload":
            this.r(e, e.persisted ? o : f);
            break;
        case "visibilitychange":
            this.s !== o && this.s !== f && this.r(e, l());
            break;
        case "freeze":
            this.r(e, o)
        }
    }
}
var V = new F;
let g = new Date().getTime()
  , w = !1
  , v = 0
  , y = 180;
function T() {
    const s = new Date().getTime();
    v += (s - g) / 1e3,
    g = s,
    !w && v >= 60 && (m({
        version: "v2",
        action: "g_heartbeat",
        data: {}
    }),
    D(),
    w = !0),
    v >= y && (m({
        version: "v2",
        action: "g_heartbeat",
        data: {}
    }),
    y += 180)
}
let d = setInterval(T, 1e3);
V.addEventListener("statechange", s => {
    s.newState === "active" || s.newState === "passive" ? (d && clearInterval(d),
    d = setInterval(T, 1e3),
    g = new Date().getTime()) : clearInterval(d)
}
);
