const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/game-b99b5d94-DRbRlkRo.js", "assets/game-d8b296a6-D6-XlEtG.js", "assets/app-CpUCrGhP.js", "assets/game-beb9f26b--5uYc-_c.js", "assets/contextTrackingHelper-nB-OPn1T.css"]))) => i.map(i => d[i]);
import {_ as _e, a as $t} from "./game-beb9f26b--5uYc-_c.js";
import {g as Zr, c as Pr} from "./game-d8b296a6-D6-XlEtG.js";
var hn = {}, mn, Ro;
function Jf() {
    if (Ro)
        return mn;
    Ro = 1;
    function e(t, r) {
        typeof r == "boolean" && (r = {
            forever: r
        }),
        this._originalTimeouts = JSON.parse(JSON.stringify(t)),
        this._timeouts = t,
        this._options = r || {},
        this._maxRetryTime = r && r.maxRetryTime || 1 / 0,
        this._fn = null,
        this._errors = [],
        this._attempts = 1,
        this._operationTimeout = null,
        this._operationTimeoutCb = null,
        this._timeout = null,
        this._operationStart = null,
        this._timer = null,
        this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
    }
    return mn = e,
    e.prototype.reset = function() {
        this._attempts = 1,
        this._timeouts = this._originalTimeouts.slice(0)
    }
    ,
    e.prototype.stop = function() {
        this._timeout && clearTimeout(this._timeout),
        this._timer && clearTimeout(this._timer),
        this._timeouts = [],
        this._cachedTimeouts = null
    }
    ,
    e.prototype.retry = function(t) {
        if (this._timeout && clearTimeout(this._timeout),
        !t)
            return !1;
        var r = new Date().getTime();
        if (t && r - this._operationStart >= this._maxRetryTime)
            return this._errors.push(t),
            this._errors.unshift(new Error("RetryOperation timeout occurred")),
            !1;
        this._errors.push(t);
        var n = this._timeouts.shift();
        if (n === void 0)
            if (this._cachedTimeouts)
                this._errors.splice(0, this._errors.length - 1),
                n = this._cachedTimeouts.slice(-1);
            else
                return !1;
        var a = this;
        return this._timer = setTimeout(function() {
            a._attempts++,
            a._operationTimeoutCb && (a._timeout = setTimeout(function() {
                a._operationTimeoutCb(a._attempts)
            }, a._operationTimeout),
            a._options.unref && a._timeout.unref()),
            a._fn(a._attempts)
        }, n),
        this._options.unref && this._timer.unref(),
        !0
    }
    ,
    e.prototype.attempt = function(t, r) {
        this._fn = t,
        r && (r.timeout && (this._operationTimeout = r.timeout),
        r.cb && (this._operationTimeoutCb = r.cb));
        var n = this;
        this._operationTimeoutCb && (this._timeout = setTimeout(function() {
            n._operationTimeoutCb()
        }, n._operationTimeout)),
        this._operationStart = new Date().getTime(),
        this._fn(this._attempts)
    }
    ,
    e.prototype.try = function(t) {
        console.log("Using RetryOperation.try() is deprecated"),
        this.attempt(t)
    }
    ,
    e.prototype.start = function(t) {
        console.log("Using RetryOperation.start() is deprecated"),
        this.attempt(t)
    }
    ,
    e.prototype.start = e.prototype.try,
    e.prototype.errors = function() {
        return this._errors
    }
    ,
    e.prototype.attempts = function() {
        return this._attempts
    }
    ,
    e.prototype.mainError = function() {
        if (this._errors.length === 0)
            return null;
        for (var t = {}, r = null, n = 0, a = 0; a < this._errors.length; a++) {
            var i = this._errors[a]
              , o = i.message
              , s = (t[o] || 0) + 1;
            t[o] = s,
            s >= n && (r = i,
            n = s)
        }
        return r
    }
    ,
    mn
}
var Co;
function Yf() {
    return Co || (Co = 1,
    function(e) {
        var t = Jf();
        e.operation = function(r) {
            var n = e.timeouts(r);
            return new t(n,{
                forever: r && (r.forever || r.retries === 1 / 0),
                unref: r && r.unref,
                maxRetryTime: r && r.maxRetryTime
            })
        }
        ,
        e.timeouts = function(r) {
            if (r instanceof Array)
                return [].concat(r);
            var n = {
                retries: 10,
                factor: 2,
                minTimeout: 1 * 1e3,
                maxTimeout: 1 / 0,
                randomize: !1
            };
            for (var a in r)
                n[a] = r[a];
            if (n.minTimeout > n.maxTimeout)
                throw new Error("minTimeout is greater than maxTimeout");
            for (var i = [], o = 0; o < n.retries; o++)
                i.push(this.createTimeout(o, n));
            return r && r.forever && !i.length && i.push(this.createTimeout(o, n)),
            i.sort(function(s, u) {
                return s - u
            }),
            i
        }
        ,
        e.createTimeout = function(r, n) {
            var a = n.randomize ? Math.random() + 1 : 1
              , i = Math.round(a * Math.max(n.minTimeout, 1) * Math.pow(n.factor, r));
            return i = Math.min(i, n.maxTimeout),
            i
        }
        ,
        e.wrap = function(r, n, a) {
            if (n instanceof Array && (a = n,
            n = null),
            !a) {
                a = [];
                for (var i in r)
                    typeof r[i] == "function" && a.push(i)
            }
            for (var o = 0; o < a.length; o++) {
                var s = a[o]
                  , u = r[s];
                r[s] = function(p) {
                    var l = e.operation(n)
                      , f = Array.prototype.slice.call(arguments, 1)
                      , d = f.pop();
                    f.push(function(g) {
                        l.retry(g) || (g && (arguments[0] = l.mainError()),
                        d.apply(this, arguments))
                    }),
                    l.attempt(function() {
                        p.apply(r, f)
                    })
                }
                .bind(r, u),
                r[s].options = n
            }
        }
    }(hn)),
    hn
}
var vn, To;
function Xf() {
    return To || (To = 1,
    vn = Yf()),
    vn
}
var _n, Lo;
function Zf() {
    if (Lo)
        return _n;
    Lo = 1;
    var e = Xf();
    function t(r, n) {
        function a(i, o) {
            var s = n || {}, u;
            "randomize"in s || (s.randomize = !0),
            u = e.operation(s);
            function c(f) {
                o(f || new Error("Aborted"))
            }
            function p(f, d) {
                if (f.bail) {
                    c(f);
                    return
                }
                u.retry(f) ? s.onRetry && s.onRetry(f, d) : o(u.mainError())
            }
            function l(f) {
                var d;
                try {
                    d = r(c, f)
                } catch (g) {
                    p(g, f);
                    return
                }
                Promise.resolve(d).then(i).catch(function(h) {
                    p(h, f)
                })
            }
            u.attempt(l)
        }
        return new Promise(a)
    }
    return _n = t,
    _n
}
var Qf = Zf();
const hi = Zr(Qf);
function ke(e) {
    "@babel/helpers - typeof";
    return ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ke(e)
}
function Io(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function el(e, t) {
    if (e) {
        if (typeof e == "string")
            return Io(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Io(e, t) : void 0
    }
}
function at(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function mi(e, t) {
    return mi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
        return r.__proto__ = n,
        r
    }
    ,
    mi(e, t)
}
function Qr(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && mi(e, t)
}
function De(e) {
    return De = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    ,
    De(e)
}
function vr(e, t) {
    if (t && (ke(t) == "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return at(e)
}
function $e(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function ed(e, t) {
    if (ke(e) != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t);
        if (ke(n) != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function tl(e) {
    var t = ed(e, "string");
    return ke(t) == "symbol" ? t : t + ""
}
function No(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1,
        n.configurable = !0,
        "value"in n && (n.writable = !0),
        Object.defineProperty(e, tl(n.key), n)
    }
}
function Ue(e, t, r) {
    return t && No(e.prototype, t),
    r && No(e, r),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Ye(e, t, r) {
    return (t = tl(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
const td = e => {
    let t, r = e;
    return (...n) => (r && (t = r(...n),
    r = void 0),
    t)
}
  , J_ = (e, t=5e3, r="Promise timed out") => {
    let n;
    const a = new Promise( (i, o) => {
        n = setTimeout( () => o(new Error(r)), t)
    }
    );
    return Promise.race([e.finally( () => clearTimeout(n)), a])
}
;
function rl(e) {
    if (Array.isArray(e))
        return e
}
function rd(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function nl() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function nd(e) {
    return rl(e) || rd(e) || el(e) || nl()
}
function jo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Do(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? jo(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jo(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
var ad = {
    type: "logger",
    log: function(t) {
        this.output("log", t)
    },
    warn: function(t) {
        this.output("warn", t)
    },
    error: function(t) {
        this.output("error", t)
    },
    output: function(t, r) {
        console && console[t] && console[t].apply(console, r)
    }
}
  , id = function() {
    function e(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        $e(this, e),
        this.init(t, r)
    }
    return Ue(e, [{
        key: "init",
        value: function(r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            this.prefix = n.prefix || "i18next:",
            this.logger = r || ad,
            this.options = n,
            this.debug = n.debug
        }
    }, {
        key: "setDebug",
        value: function(r) {
            this.debug = r
        }
    }, {
        key: "log",
        value: function() {
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                n[a] = arguments[a];
            return this.forward(n, "log", "", !0)
        }
    }, {
        key: "warn",
        value: function() {
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                n[a] = arguments[a];
            return this.forward(n, "warn", "", !0)
        }
    }, {
        key: "error",
        value: function() {
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                n[a] = arguments[a];
            return this.forward(n, "error", "")
        }
    }, {
        key: "deprecate",
        value: function() {
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
                n[a] = arguments[a];
            return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
        }
    }, {
        key: "forward",
        value: function(r, n, a, i) {
            return i && !this.debug ? null : (typeof r[0] == "string" && (r[0] = "".concat(a).concat(this.prefix, " ").concat(r[0])),
            this.logger[n](r))
        }
    }, {
        key: "create",
        value: function(r) {
            return new e(this.logger,Do(Do({}, {
                prefix: "".concat(this.prefix, ":").concat(r, ":")
            }), this.options))
        }
    }, {
        key: "clone",
        value: function(r) {
            return r = r || this.options,
            r.prefix = r.prefix || this.prefix,
            new e(this.logger,r)
        }
    }]),
    e
}()
  , Ie = new id
  , st = function() {
    function e() {
        $e(this, e),
        this.observers = {}
    }
    return Ue(e, [{
        key: "on",
        value: function(r, n) {
            var a = this;
            return r.split(" ").forEach(function(i) {
                a.observers[i] = a.observers[i] || [],
                a.observers[i].push(n)
            }),
            this
        }
    }, {
        key: "off",
        value: function(r, n) {
            if (this.observers[r]) {
                if (!n) {
                    delete this.observers[r];
                    return
                }
                this.observers[r] = this.observers[r].filter(function(a) {
                    return a !== n
                })
            }
        }
    }, {
        key: "emit",
        value: function(r) {
            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                a[i - 1] = arguments[i];
            if (this.observers[r]) {
                var o = [].concat(this.observers[r]);
                o.forEach(function(u) {
                    u.apply(void 0, a)
                })
            }
            if (this.observers["*"]) {
                var s = [].concat(this.observers["*"]);
                s.forEach(function(u) {
                    u.apply(u, [r].concat(a))
                })
            }
        }
    }]),
    e
}();
function Yt() {
    var e, t, r = new Promise(function(n, a) {
        e = n,
        t = a
    }
    );
    return r.resolve = e,
    r.reject = t,
    r
}
function Mo(e) {
    return e == null ? "" : "" + e
}
function od(e, t, r) {
    e.forEach(function(n) {
        t[n] && (r[n] = t[n])
    })
}
function Gi(e, t, r) {
    function n(s) {
        return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s
    }
    function a() {
        return !e || typeof e == "string"
    }
    for (var i = typeof t != "string" ? [].concat(t) : t.split("."); i.length > 1; ) {
        if (a())
            return {};
        var o = n(i.shift());
        !e[o] && r && (e[o] = new r),
        Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {}
    }
    return a() ? {} : {
        obj: e,
        k: n(i.shift())
    }
}
function $o(e, t, r) {
    var n = Gi(e, t, Object)
      , a = n.obj
      , i = n.k;
    a[i] = r
}
function sd(e, t, r, n) {
    var a = Gi(e, t, Object)
      , i = a.obj
      , o = a.k;
    i[o] = i[o] || [],
    i[o].push(r)
}
function qr(e, t) {
    var r = Gi(e, t)
      , n = r.obj
      , a = r.k;
    if (n)
        return n[a]
}
function Uo(e, t, r) {
    var n = qr(e, r);
    return n !== void 0 ? n : qr(t, r)
}
function al(e, t, r) {
    for (var n in t)
        n !== "__proto__" && n !== "constructor" && (n in e ? typeof e[n] == "string" || e[n]instanceof String || typeof t[n] == "string" || t[n]instanceof String ? r && (e[n] = t[n]) : al(e[n], t[n], r) : e[n] = t[n]);
    return e
}
function Pt(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var ud = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
function cd(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
        return ud[t]
    }) : e
}
var en = typeof window < "u" && window.navigator && typeof window.navigator.userAgentData > "u" && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
  , ld = [" ", ",", "?", "!", ";"];
function fd(e, t, r) {
    t = t || "",
    r = r || "";
    var n = ld.filter(function(s) {
        return t.indexOf(s) < 0 && r.indexOf(s) < 0
    });
    if (n.length === 0)
        return !0;
    var a = new RegExp("(".concat(n.map(function(s) {
        return s === "?" ? "\\?" : s
    }).join("|"), ")"))
      , i = !a.test(e);
    if (!i) {
        var o = e.indexOf(r);
        o > 0 && !a.test(e.substring(0, o)) && (i = !0)
    }
    return i
}
function qo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? qo(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qo(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function dd(e) {
    var t = pd();
    return function() {
        var n = De(e), a;
        if (t) {
            var i = De(this).constructor;
            a = Reflect.construct(n, arguments, i)
        } else
            a = n.apply(this, arguments);
        return vr(this, a)
    }
}
function pd() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function il(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (e) {
        if (e[t])
            return e[t];
        for (var n = t.split(r), a = e, i = 0; i < n.length; ++i) {
            if (!a || typeof a[n[i]] == "string" && i + 1 < n.length)
                return;
            if (a[n[i]] === void 0) {
                for (var o = 2, s = n.slice(i, i + o).join(r), u = a[s]; u === void 0 && n.length > i + o; )
                    o++,
                    s = n.slice(i, i + o).join(r),
                    u = a[s];
                if (u === void 0)
                    return;
                if (u === null)
                    return null;
                if (t.endsWith(s)) {
                    if (typeof u == "string")
                        return u;
                    if (s && typeof u[s] == "string")
                        return u[s]
                }
                var c = n.slice(i + o).join(r);
                return c ? il(u, c, r) : void 0
            }
            a = a[n[i]]
        }
        return a
    }
}
var gd = function(e) {
    Qr(r, e);
    var t = dd(r);
    function r(n) {
        var a, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        return $e(this, r),
        a = t.call(this),
        en && st.call(at(a)),
        a.data = n || {},
        a.options = i,
        a.options.keySeparator === void 0 && (a.options.keySeparator = "."),
        a.options.ignoreJSONStructure === void 0 && (a.options.ignoreJSONStructure = !0),
        a
    }
    return Ue(r, [{
        key: "addNamespaces",
        value: function(a) {
            this.options.ns.indexOf(a) < 0 && this.options.ns.push(a)
        }
    }, {
        key: "removeNamespaces",
        value: function(a) {
            var i = this.options.ns.indexOf(a);
            i > -1 && this.options.ns.splice(i, 1)
        }
    }, {
        key: "getResource",
        value: function(a, i, o) {
            var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
              , u = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator
              , c = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure
              , p = [a, i];
            o && typeof o != "string" && (p = p.concat(o)),
            o && typeof o == "string" && (p = p.concat(u ? o.split(u) : o)),
            a.indexOf(".") > -1 && (p = a.split("."));
            var l = qr(this.data, p);
            return l || !c || typeof o != "string" ? l : il(this.data && this.data[a] && this.data[a][i], o, u)
        }
    }, {
        key: "addResource",
        value: function(a, i, o, s) {
            var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
                silent: !1
            }
              , c = this.options.keySeparator;
            c === void 0 && (c = ".");
            var p = [a, i];
            o && (p = p.concat(c ? o.split(c) : o)),
            a.indexOf(".") > -1 && (p = a.split("."),
            s = i,
            i = p[1]),
            this.addNamespaces(i),
            $o(this.data, p, s),
            u.silent || this.emit("added", a, i, o, s)
        }
    }, {
        key: "addResources",
        value: function(a, i, o) {
            var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
                silent: !1
            };
            for (var u in o)
                (typeof o[u] == "string" || Object.prototype.toString.apply(o[u]) === "[object Array]") && this.addResource(a, i, u, o[u], {
                    silent: !0
                });
            s.silent || this.emit("added", a, i, o)
        }
    }, {
        key: "addResourceBundle",
        value: function(a, i, o, s, u) {
            var c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                silent: !1
            }
              , p = [a, i];
            a.indexOf(".") > -1 && (p = a.split("."),
            s = o,
            o = i,
            i = p[1]),
            this.addNamespaces(i);
            var l = qr(this.data, p) || {};
            s ? al(l, o, u) : l = Er(Er({}, l), o),
            $o(this.data, p, l),
            c.silent || this.emit("added", a, i, o)
        }
    }, {
        key: "removeResourceBundle",
        value: function(a, i) {
            this.hasResourceBundle(a, i) && delete this.data[a][i],
            this.removeNamespaces(i),
            this.emit("removed", a, i)
        }
    }, {
        key: "hasResourceBundle",
        value: function(a, i) {
            return this.getResource(a, i) !== void 0
        }
    }, {
        key: "getResourceBundle",
        value: function(a, i) {
            return i || (i = this.options.defaultNS),
            this.options.compatibilityAPI === "v1" ? Er(Er({}, {}), this.getResource(a, i)) : this.getResource(a, i)
        }
    }, {
        key: "getDataByLanguage",
        value: function(a) {
            return this.data[a]
        }
    }, {
        key: "hasLanguageSomeTranslations",
        value: function(a) {
            var i = this.getDataByLanguage(a)
              , o = i && Object.keys(i) || [];
            return !!o.find(function(s) {
                return i[s] && Object.keys(i[s]).length > 0
            })
        }
    }, {
        key: "toJSON",
        value: function() {
            return this.data
        }
    }]),
    r
}(st)
  , ol = {
    processors: {},
    addPostProcessor: function(t) {
        this.processors[t.name] = t
    },
    handle: function(t, r, n, a, i) {
        var o = this;
        return t.forEach(function(s) {
            o.processors[s] && (r = o.processors[s].process(r, n, a, i))
        }),
        r
    }
};
function Fo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function ae(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Fo(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fo(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function hd(e) {
    var t = md();
    return function() {
        var n = De(e), a;
        if (t) {
            var i = De(this).constructor;
            a = Reflect.construct(n, arguments, i)
        } else
            a = n.apply(this, arguments);
        return vr(this, a)
    }
}
function md() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
var Go = {}
  , zo = function(e) {
    Qr(r, e);
    var t = hd(r);
    function r(n) {
        var a, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return $e(this, r),
        a = t.call(this),
        en && st.call(at(a)),
        od(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, at(a)),
        a.options = i,
        a.options.keySeparator === void 0 && (a.options.keySeparator = "."),
        a.logger = Ie.create("translator"),
        a
    }
    return Ue(r, [{
        key: "changeLanguage",
        value: function(a) {
            a && (this.language = a)
        }
    }, {
        key: "exists",
        value: function(a) {
            var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                interpolation: {}
            };
            if (a == null)
                return !1;
            var o = this.resolve(a, i);
            return o && o.res !== void 0
        }
    }, {
        key: "extractFromKey",
        value: function(a, i) {
            var o = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
            o === void 0 && (o = ":");
            var s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
              , u = i.ns || this.options.defaultNS || []
              , c = o && a.indexOf(o) > -1
              , p = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !fd(a, o, s);
            if (c && !p) {
                var l = a.match(this.interpolator.nestingRegexp);
                if (l && l.length > 0)
                    return {
                        key: a,
                        namespaces: u
                    };
                var f = a.split(o);
                (o !== s || o === s && this.options.ns.indexOf(f[0]) > -1) && (u = f.shift()),
                a = f.join(s)
            }
            return typeof u == "string" && (u = [u]),
            {
                key: a,
                namespaces: u
            }
        }
    }, {
        key: "translate",
        value: function(a, i, o) {
            var s = this;
            if (ke(i) !== "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)),
            i || (i = {}),
            a == null)
                return "";
            Array.isArray(a) || (a = [String(a)]);
            var u = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails
              , c = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator
              , p = this.extractFromKey(a[a.length - 1], i)
              , l = p.key
              , f = p.namespaces
              , d = f[f.length - 1]
              , g = i.lng || this.language
              , h = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
            if (g && g.toLowerCase() === "cimode") {
                if (h) {
                    var m = i.nsSeparator || this.options.nsSeparator;
                    return u ? (v.res = "".concat(d).concat(m).concat(l),
                    v) : "".concat(d).concat(m).concat(l)
                }
                return u ? (v.res = l,
                v) : l
            }
            var v = this.resolve(a, i)
              , _ = v && v.res
              , b = v && v.usedKey || l
              , y = v && v.exactUsedKey || l
              , w = Object.prototype.toString.apply(_)
              , k = ["[object Number]", "[object Function]", "[object RegExp]"]
              , O = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays
              , S = !this.i18nFormat || this.i18nFormat.handleAsObject
              , R = typeof _ != "string" && typeof _ != "boolean" && typeof _ != "number";
            if (S && _ && R && k.indexOf(w) < 0 && !(typeof O == "string" && w === "[object Array]")) {
                if (!i.returnObjects && !this.options.returnObjects) {
                    this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                    var L = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(b, _, ae(ae({}, i), {}, {
                        ns: f
                    })) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
                    return u ? (v.res = L,
                    v) : L
                }
                if (c) {
                    var E = w === "[object Array]"
                      , U = E ? [] : {}
                      , W = E ? y : b;
                    for (var X in _)
                        if (Object.prototype.hasOwnProperty.call(_, X)) {
                            var re = "".concat(W).concat(c).concat(X);
                            U[X] = this.translate(re, ae(ae({}, i), {
                                joinArrays: !1,
                                ns: f
                            })),
                            U[X] === re && (U[X] = _[X])
                        }
                    _ = U
                }
            } else if (S && typeof O == "string" && w === "[object Array]")
                _ = _.join(O),
                _ && (_ = this.extendTranslation(_, a, i, o));
            else {
                var J = !1
                  , Z = !1
                  , A = i.count !== void 0 && typeof i.count != "string"
                  , Ee = r.hasDefaultValue(i)
                  , Ze = A ? this.pluralResolver.getSuffix(g, i.count, i) : ""
                  , pe = i["defaultValue".concat(Ze)] || i.defaultValue;
                !this.isValidLookup(_) && Ee && (J = !0,
                _ = pe),
                this.isValidLookup(_) || (Z = !0,
                _ = l);
                var ge = i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey
                  , K = ge && Z ? void 0 : _
                  , B = Ee && pe !== _ && this.options.updateMissing;
                if (Z || J || B) {
                    if (this.logger.log(B ? "updateKey" : "missingKey", g, d, l, B ? pe : _),
                    c) {
                        var ce = this.resolve(l, ae(ae({}, i), {}, {
                            keySeparator: !1
                        }));
                        ce && ce.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                    }
                    var le = []
                      , q = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
                    if (this.options.saveMissingTo === "fallback" && q && q[0])
                        for (var Fe = 0; Fe < q.length; Fe++)
                            le.push(q[Fe]);
                    else
                        this.options.saveMissingTo === "all" ? le = this.languageUtils.toResolveHierarchy(i.lng || this.language) : le.push(i.lng || this.language);
                    var Ae = function(oe, Re, gt) {
                        var Wt = Ee && gt !== _ ? gt : K;
                        s.options.missingKeyHandler ? s.options.missingKeyHandler(oe, d, Re, Wt, B, i) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(oe, d, Re, Wt, B, i),
                        s.emit("missingKey", oe, d, Re, _)
                    };
                    this.options.saveMissing && (this.options.saveMissingPlurals && A ? le.forEach(function(he) {
                        s.pluralResolver.getSuffixes(he, i).forEach(function(oe) {
                            Ae([he], l + oe, i["defaultValue".concat(oe)] || pe)
                        })
                    }) : Ae(le, l, pe))
                }
                _ = this.extendTranslation(_, a, i, v, o),
                Z && _ === l && this.options.appendNamespaceToMissingKey && (_ = "".concat(d, ":").concat(l)),
                (Z || J) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? _ = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(d, ":").concat(l) : l, J ? _ : void 0) : _ = this.options.parseMissingKeyHandler(_))
            }
            return u ? (v.res = _,
            v) : _
        }
    }, {
        key: "extendTranslation",
        value: function(a, i, o, s, u) {
            var c = this;
            if (this.i18nFormat && this.i18nFormat.parse)
                a = this.i18nFormat.parse(a, ae(ae({}, this.options.interpolation.defaultVariables), o), s.usedLng, s.usedNS, s.usedKey, {
                    resolved: s
                });
            else if (!o.skipInterpolation) {
                o.interpolation && this.interpolator.init(ae(ae({}, o), {
                    interpolation: ae(ae({}, this.options.interpolation), o.interpolation)
                }));
                var p = typeof a == "string" && (o && o.interpolation && o.interpolation.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables), l;
                if (p) {
                    var f = a.match(this.interpolator.nestingRegexp);
                    l = f && f.length
                }
                var d = o.replace && typeof o.replace != "string" ? o.replace : o;
                if (this.options.interpolation.defaultVariables && (d = ae(ae({}, this.options.interpolation.defaultVariables), d)),
                a = this.interpolator.interpolate(a, d, o.lng || this.language, o),
                p) {
                    var g = a.match(this.interpolator.nestingRegexp)
                      , h = g && g.length;
                    l < h && (o.nest = !1)
                }
                o.nest !== !1 && (a = this.interpolator.nest(a, function() {
                    for (var _ = arguments.length, b = new Array(_), y = 0; y < _; y++)
                        b[y] = arguments[y];
                    return u && u[0] === b[0] && !o.context ? (c.logger.warn("It seems you are nesting recursively key: ".concat(b[0], " in key: ").concat(i[0])),
                    null) : c.translate.apply(c, b.concat([i]))
                }, o)),
                o.interpolation && this.interpolator.reset()
            }
            var m = o.postProcess || this.options.postProcess
              , v = typeof m == "string" ? [m] : m;
            return a != null && v && v.length && o.applyPostProcessor !== !1 && (a = ol.handle(v, a, i, this.options && this.options.postProcessPassResolved ? ae({
                i18nResolved: s
            }, o) : o, this)),
            a
        }
    }, {
        key: "resolve",
        value: function(a) {
            var i = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s, u, c, p, l;
            return typeof a == "string" && (a = [a]),
            a.forEach(function(f) {
                if (!i.isValidLookup(s)) {
                    var d = i.extractFromKey(f, o)
                      , g = d.key;
                    u = g;
                    var h = d.namespaces;
                    i.options.fallbackNS && (h = h.concat(i.options.fallbackNS));
                    var m = o.count !== void 0 && typeof o.count != "string"
                      , v = m && !o.ordinal && o.count === 0 && i.pluralResolver.shouldUseIntlApi()
                      , _ = o.context !== void 0 && (typeof o.context == "string" || typeof o.context == "number") && o.context !== ""
                      , b = o.lngs ? o.lngs : i.languageUtils.toResolveHierarchy(o.lng || i.language, o.fallbackLng);
                    h.forEach(function(y) {
                        i.isValidLookup(s) || (l = y,
                        !Go["".concat(b[0], "-").concat(y)] && i.utils && i.utils.hasLoadedNamespace && !i.utils.hasLoadedNamespace(l) && (Go["".concat(b[0], "-").concat(y)] = !0,
                        i.logger.warn('key "'.concat(u, '" for languages "').concat(b.join(", "), `" won't get resolved as namespace "`).concat(l, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                        b.forEach(function(w) {
                            if (!i.isValidLookup(s)) {
                                p = w;
                                var k = [g];
                                if (i.i18nFormat && i.i18nFormat.addLookupKeys)
                                    i.i18nFormat.addLookupKeys(k, g, w, y, o);
                                else {
                                    var O;
                                    m && (O = i.pluralResolver.getSuffix(w, o.count, o));
                                    var S = "".concat(i.options.pluralSeparator, "zero");
                                    if (m && (k.push(g + O),
                                    v && k.push(g + S)),
                                    _) {
                                        var R = "".concat(g).concat(i.options.contextSeparator).concat(o.context);
                                        k.push(R),
                                        m && (k.push(R + O),
                                        v && k.push(R + S))
                                    }
                                }
                                for (var L; L = k.pop(); )
                                    i.isValidLookup(s) || (c = L,
                                    s = i.getResource(w, y, L, o))
                            }
                        }))
                    })
                }
            }),
            {
                res: s,
                usedKey: u,
                exactUsedKey: c,
                usedLng: p,
                usedNS: l
            }
        }
    }, {
        key: "isValidLookup",
        value: function(a) {
            return a !== void 0 && !(!this.options.returnNull && a === null) && !(!this.options.returnEmptyString && a === "")
        }
    }, {
        key: "getResource",
        value: function(a, i, o) {
            var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(a, i, o, s) : this.resourceStore.getResource(a, i, o, s)
        }
    }], [{
        key: "hasDefaultValue",
        value: function(a) {
            var i = "defaultValue";
            for (var o in a)
                if (Object.prototype.hasOwnProperty.call(a, o) && i === o.substring(0, i.length) && a[o] !== void 0)
                    return !0;
            return !1
        }
    }]),
    r
}(st);
function yn(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
var vd = function() {
    function e(t) {
        $e(this, e),
        this.options = t,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = Ie.create("languageUtils")
    }
    return Ue(e, [{
        key: "getScriptPartFromCode",
        value: function(r) {
            if (!r || r.indexOf("-") < 0)
                return null;
            var n = r.split("-");
            return n.length === 2 || (n.pop(),
            n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"))
        }
    }, {
        key: "getLanguagePartFromCode",
        value: function(r) {
            if (!r || r.indexOf("-") < 0)
                return r;
            var n = r.split("-");
            return this.formatLanguageCode(n[0])
        }
    }, {
        key: "formatLanguageCode",
        value: function(r) {
            if (typeof r == "string" && r.indexOf("-") > -1) {
                var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                  , a = r.split("-");
                return this.options.lowerCaseLng ? a = a.map(function(i) {
                    return i.toLowerCase()
                }) : a.length === 2 ? (a[0] = a[0].toLowerCase(),
                a[1] = a[1].toUpperCase(),
                n.indexOf(a[1].toLowerCase()) > -1 && (a[1] = yn(a[1].toLowerCase()))) : a.length === 3 && (a[0] = a[0].toLowerCase(),
                a[1].length === 2 && (a[1] = a[1].toUpperCase()),
                a[0] !== "sgn" && a[2].length === 2 && (a[2] = a[2].toUpperCase()),
                n.indexOf(a[1].toLowerCase()) > -1 && (a[1] = yn(a[1].toLowerCase())),
                n.indexOf(a[2].toLowerCase()) > -1 && (a[2] = yn(a[2].toLowerCase()))),
                a.join("-")
            }
            return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r
        }
    }, {
        key: "isSupportedCode",
        value: function(r) {
            return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)),
            !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1
        }
    }, {
        key: "getBestMatchFromCodes",
        value: function(r) {
            var n = this;
            if (!r)
                return null;
            var a;
            return r.forEach(function(i) {
                if (!a) {
                    var o = n.formatLanguageCode(i);
                    (!n.options.supportedLngs || n.isSupportedCode(o)) && (a = o)
                }
            }),
            !a && this.options.supportedLngs && r.forEach(function(i) {
                if (!a) {
                    var o = n.getLanguagePartFromCode(i);
                    if (n.isSupportedCode(o))
                        return a = o;
                    a = n.options.supportedLngs.find(function(s) {
                        if (s.indexOf(o) === 0)
                            return s
                    })
                }
            }),
            a || (a = this.getFallbackCodes(this.options.fallbackLng)[0]),
            a
        }
    }, {
        key: "getFallbackCodes",
        value: function(r, n) {
            if (!r)
                return [];
            if (typeof r == "function" && (r = r(n)),
            typeof r == "string" && (r = [r]),
            Object.prototype.toString.apply(r) === "[object Array]")
                return r;
            if (!n)
                return r.default || [];
            var a = r[n];
            return a || (a = r[this.getScriptPartFromCode(n)]),
            a || (a = r[this.formatLanguageCode(n)]),
            a || (a = r[this.getLanguagePartFromCode(n)]),
            a || (a = r.default),
            a || []
        }
    }, {
        key: "toResolveHierarchy",
        value: function(r, n) {
            var a = this
              , i = this.getFallbackCodes(n || this.options.fallbackLng || [], r)
              , o = []
              , s = function(c) {
                c && (a.isSupportedCode(c) ? o.push(c) : a.logger.warn("rejecting language code not found in supportedLngs: ".concat(c)))
            };
            return typeof r == "string" && r.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(r)),
            this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(r)),
            this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(r))) : typeof r == "string" && s(this.formatLanguageCode(r)),
            i.forEach(function(u) {
                o.indexOf(u) < 0 && s(a.formatLanguageCode(u))
            }),
            o
        }
    }]),
    e
}()
  , _d = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
}, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
}, {
    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
}, {
    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
}, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
}, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
}, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
}, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
}, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
}, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
}, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
}, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
}, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
}, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
}, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
}, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
}, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
}, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
}, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
}, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
}, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
}, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
}, {
    lngs: ["he", "iw"],
    nr: [1, 2, 20, 21],
    fc: 22
}]
  , yd = {
    1: function(t) {
        return +(t > 1)
    },
    2: function(t) {
        return +(t != 1)
    },
    3: function(t) {
        return 0
    },
    4: function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
    },
    5: function(t) {
        return t == 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5
    },
    6: function(t) {
        return t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2
    },
    7: function(t) {
        return t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
    },
    8: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3
    },
    9: function(t) {
        return +(t >= 2)
    },
    10: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4
    },
    11: function(t) {
        return t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3
    },
    12: function(t) {
        return +(t % 10 != 1 || t % 100 == 11)
    },
    13: function(t) {
        return +(t !== 0)
    },
    14: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3
    },
    15: function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
    },
    16: function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2
    },
    17: function(t) {
        return t == 1 || t % 10 == 1 && t % 100 != 11 ? 0 : 1
    },
    18: function(t) {
        return t == 0 ? 0 : t == 1 ? 1 : 2
    },
    19: function(t) {
        return t == 1 ? 0 : t == 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3
    },
    20: function(t) {
        return t == 1 ? 0 : t == 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2
    },
    21: function(t) {
        return t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0
    },
    22: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3
    }
}
  , bd = ["v1", "v2", "v3"]
  , Vo = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
};
function wd() {
    var e = {};
    return _d.forEach(function(t) {
        t.lngs.forEach(function(r) {
            e[r] = {
                numbers: t.nr,
                plurals: yd[t.fc]
            }
        })
    }),
    e
}
var Sd = function() {
    function e(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        $e(this, e),
        this.languageUtils = t,
        this.options = r,
        this.logger = Ie.create("pluralResolver"),
        (!this.options.compatibilityJSON || this.options.compatibilityJSON === "v4") && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
        this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
        this.rules = wd()
    }
    return Ue(e, [{
        key: "addRule",
        value: function(r, n) {
            this.rules[r] = n
        }
    }, {
        key: "getRule",
        value: function(r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (this.shouldUseIntlApi())
                try {
                    return new Intl.PluralRules(r,{
                        type: n.ordinal ? "ordinal" : "cardinal"
                    })
                } catch {
                    return
                }
            return this.rules[r] || this.rules[this.languageUtils.getLanguagePartFromCode(r)]
        }
    }, {
        key: "needsPlural",
        value: function(r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , a = this.getRule(r, n);
            return this.shouldUseIntlApi() ? a && a.resolvedOptions().pluralCategories.length > 1 : a && a.numbers.length > 1
        }
    }, {
        key: "getPluralFormsOfKey",
        value: function(r, n) {
            var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return this.getSuffixes(r, a).map(function(i) {
                return "".concat(n).concat(i)
            })
        }
    }, {
        key: "getSuffixes",
        value: function(r) {
            var n = this
              , a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , i = this.getRule(r, a);
            return i ? this.shouldUseIntlApi() ? i.resolvedOptions().pluralCategories.sort(function(o, s) {
                return Vo[o] - Vo[s]
            }).map(function(o) {
                return "".concat(n.options.prepend).concat(o)
            }) : i.numbers.map(function(o) {
                return n.getSuffix(r, o, a)
            }) : []
        }
    }, {
        key: "getSuffix",
        value: function(r, n) {
            var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
              , i = this.getRule(r, a);
            return i ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(i.select(n)) : this.getSuffixRetroCompatible(i, n) : (this.logger.warn("no plural rule found for: ".concat(r)),
            "")
        }
    }, {
        key: "getSuffixRetroCompatible",
        value: function(r, n) {
            var a = this
              , i = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n))
              , o = r.numbers[i];
            this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 && (o === 2 ? o = "plural" : o === 1 && (o = ""));
            var s = function() {
                return a.options.prepend && o.toString() ? a.options.prepend + o.toString() : o.toString()
            };
            return this.options.compatibilityJSON === "v1" ? o === 1 ? "" : typeof o == "number" ? "_plural_".concat(o.toString()) : s() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && r.numbers.length === 2 && r.numbers[0] === 1 ? s() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
        }
    }, {
        key: "shouldUseIntlApi",
        value: function() {
            return !bd.includes(this.options.compatibilityJSON)
        }
    }]),
    e
}();
function Ko(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function ve(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ko(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ko(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
var kd = function() {
    function e() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        $e(this, e),
        this.logger = Ie.create("interpolator"),
        this.options = t,
        this.format = t.interpolation && t.interpolation.format || function(r) {
            return r
        }
        ,
        this.init(t)
    }
    return Ue(e, [{
        key: "init",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            r.interpolation || (r.interpolation = {
                escapeValue: !0
            });
            var n = r.interpolation;
            this.escape = n.escape !== void 0 ? n.escape : cd,
            this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0,
            this.useRawValueToEscape = n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1,
            this.prefix = n.prefix ? Pt(n.prefix) : n.prefixEscaped || "{{",
            this.suffix = n.suffix ? Pt(n.suffix) : n.suffixEscaped || "}}",
            this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",",
            this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-",
            this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "",
            this.nestingPrefix = n.nestingPrefix ? Pt(n.nestingPrefix) : n.nestingPrefixEscaped || Pt("$t("),
            this.nestingSuffix = n.nestingSuffix ? Pt(n.nestingSuffix) : n.nestingSuffixEscaped || Pt(")"),
            this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",",
            this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3,
            this.alwaysFormat = n.alwaysFormat !== void 0 ? n.alwaysFormat : !1,
            this.resetRegExp()
        }
    }, {
        key: "reset",
        value: function() {
            this.options && this.init(this.options)
        }
    }, {
        key: "resetRegExp",
        value: function() {
            var r = "".concat(this.prefix, "(.+?)").concat(this.suffix);
            this.regexp = new RegExp(r,"g");
            var n = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
            this.regexpUnescape = new RegExp(n,"g");
            var a = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
            this.nestingRegexp = new RegExp(a,"g")
        }
    }, {
        key: "interpolate",
        value: function(r, n, a, i) {
            var o = this, s, u, c, p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
            function l(m) {
                return m.replace(/\$/g, "$$$$")
            }
            var f = function(v) {
                if (v.indexOf(o.formatSeparator) < 0) {
                    var _ = Uo(n, p, v);
                    return o.alwaysFormat ? o.format(_, void 0, a, ve(ve(ve({}, i), n), {}, {
                        interpolationkey: v
                    })) : _
                }
                var b = v.split(o.formatSeparator)
                  , y = b.shift().trim()
                  , w = b.join(o.formatSeparator).trim();
                return o.format(Uo(n, p, y), w, a, ve(ve(ve({}, i), n), {}, {
                    interpolationkey: y
                }))
            };
            this.resetRegExp();
            var d = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler
              , g = i && i.interpolation && i.interpolation.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables
              , h = [{
                regex: this.regexpUnescape,
                safeValue: function(v) {
                    return l(v)
                }
            }, {
                regex: this.regexp,
                safeValue: function(v) {
                    return o.escapeValue ? l(o.escape(v)) : l(v)
                }
            }];
            return h.forEach(function(m) {
                for (c = 0; s = m.regex.exec(r); ) {
                    var v = s[1].trim();
                    if (u = f(v),
                    u === void 0)
                        if (typeof d == "function") {
                            var _ = d(r, s, i);
                            u = typeof _ == "string" ? _ : ""
                        } else if (i && i.hasOwnProperty(v))
                            u = "";
                        else if (g) {
                            u = s[0];
                            continue
                        } else
                            o.logger.warn("missed to pass in variable ".concat(v, " for interpolating ").concat(r)),
                            u = "";
                    else
                        typeof u != "string" && !o.useRawValueToEscape && (u = Mo(u));
                    var b = m.safeValue(u);
                    if (r = r.replace(s[0], b),
                    g ? (m.regex.lastIndex += u.length,
                    m.regex.lastIndex -= s[0].length) : m.regex.lastIndex = 0,
                    c++,
                    c >= o.maxReplaces)
                        break
                }
            }),
            r
        }
    }, {
        key: "nest",
        value: function(r, n) {
            var a = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o, s, u = ve({}, i);
            u.applyPostProcessor = !1,
            delete u.defaultValue;
            function c(d, g) {
                var h = this.nestingOptionsSeparator;
                if (d.indexOf(h) < 0)
                    return d;
                var m = d.split(new RegExp("".concat(h, "[ ]*{")))
                  , v = "{".concat(m[1]);
                d = m[0],
                v = this.interpolate(v, u);
                var _ = v.match(/'/g)
                  , b = v.match(/"/g);
                (_ && _.length % 2 === 0 && !b || b.length % 2 !== 0) && (v = v.replace(/'/g, '"'));
                try {
                    u = JSON.parse(v),
                    g && (u = ve(ve({}, g), u))
                } catch (y) {
                    return this.logger.warn("failed parsing options string in nesting for key ".concat(d), y),
                    "".concat(d).concat(h).concat(v)
                }
                return delete u.defaultValue,
                d
            }
            for (; o = this.nestingRegexp.exec(r); ) {
                var p = []
                  , l = !1;
                if (o[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(o[1])) {
                    var f = o[1].split(this.formatSeparator).map(function(d) {
                        return d.trim()
                    });
                    o[1] = f.shift(),
                    p = f,
                    l = !0
                }
                if (s = n(c.call(this, o[1].trim(), u), u),
                s && o[0] === r && typeof s != "string")
                    return s;
                typeof s != "string" && (s = Mo(s)),
                s || (this.logger.warn("missed to resolve ".concat(o[1], " for nesting ").concat(r)),
                s = ""),
                l && (s = p.reduce(function(d, g) {
                    return a.format(d, g, i.lng, ve(ve({}, i), {}, {
                        interpolationkey: o[1].trim()
                    }))
                }, s.trim())),
                r = r.replace(o[0], s),
                this.regexp.lastIndex = 0
            }
            return r
        }
    }]),
    e
}();
function Ho(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Qe(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ho(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ho(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Od(e) {
    var t = e.toLowerCase().trim()
      , r = {};
    if (e.indexOf("(") > -1) {
        var n = e.split("(");
        t = n[0].toLowerCase().trim();
        var a = n[1].substring(0, n[1].length - 1);
        if (t === "currency" && a.indexOf(":") < 0)
            r.currency || (r.currency = a.trim());
        else if (t === "relativetime" && a.indexOf(":") < 0)
            r.range || (r.range = a.trim());
        else {
            var i = a.split(";");
            i.forEach(function(o) {
                if (o) {
                    var s = o.split(":")
                      , u = nd(s)
                      , c = u[0]
                      , p = u.slice(1)
                      , l = p.join(":").trim().replace(/^'+|'+$/g, "");
                    r[c.trim()] || (r[c.trim()] = l),
                    l === "false" && (r[c.trim()] = !1),
                    l === "true" && (r[c.trim()] = !0),
                    isNaN(l) || (r[c.trim()] = parseInt(l, 10))
                }
            })
        }
    }
    return {
        formatName: t,
        formatOptions: r
    }
}
function Et(e) {
    var t = {};
    return function(n, a, i) {
        var o = a + JSON.stringify(i)
          , s = t[o];
        return s || (s = e(a, i),
        t[o] = s),
        s(n)
    }
}
var xd = function() {
    function e() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        $e(this, e),
        this.logger = Ie.create("formatter"),
        this.options = t,
        this.formats = {
            number: Et(function(r, n) {
                var a = new Intl.NumberFormat(r,n);
                return function(i) {
                    return a.format(i)
                }
            }),
            currency: Et(function(r, n) {
                var a = new Intl.NumberFormat(r,Qe(Qe({}, n), {}, {
                    style: "currency"
                }));
                return function(i) {
                    return a.format(i)
                }
            }),
            datetime: Et(function(r, n) {
                var a = new Intl.DateTimeFormat(r,Qe({}, n));
                return function(i) {
                    return a.format(i)
                }
            }),
            relativetime: Et(function(r, n) {
                var a = new Intl.RelativeTimeFormat(r,Qe({}, n));
                return function(i) {
                    return a.format(i, n.range || "day")
                }
            }),
            list: Et(function(r, n) {
                var a = new Intl.ListFormat(r,Qe({}, n));
                return function(i) {
                    return a.format(i)
                }
            })
        },
        this.init(t)
    }
    return Ue(e, [{
        key: "init",
        value: function(r) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                interpolation: {}
            }
              , a = n.interpolation;
            this.formatSeparator = a.formatSeparator ? a.formatSeparator : a.formatSeparator || ","
        }
    }, {
        key: "add",
        value: function(r, n) {
            this.formats[r.toLowerCase().trim()] = n
        }
    }, {
        key: "addCached",
        value: function(r, n) {
            this.formats[r.toLowerCase().trim()] = Et(n)
        }
    }, {
        key: "format",
        value: function(r, n, a, i) {
            var o = this
              , s = n.split(this.formatSeparator)
              , u = s.reduce(function(c, p) {
                var l = Od(p)
                  , f = l.formatName
                  , d = l.formatOptions;
                if (o.formats[f]) {
                    var g = c;
                    try {
                        var h = i && i.formatParams && i.formatParams[i.interpolationkey] || {}
                          , m = h.locale || h.lng || i.locale || i.lng || a;
                        g = o.formats[f](c, m, Qe(Qe(Qe({}, d), i), h))
                    } catch (v) {
                        o.logger.warn(v)
                    }
                    return g
                } else
                    o.logger.warn("there was no format function for ".concat(f));
                return c
            }, r);
            return u
        }
    }]),
    e
}();
function Bo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Wo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bo(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bo(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Pd(e) {
    var t = Ed();
    return function() {
        var n = De(e), a;
        if (t) {
            var i = De(this).constructor;
            a = Reflect.construct(n, arguments, i)
        } else
            a = n.apply(this, arguments);
        return vr(this, a)
    }
}
function Ed() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function Ad(e, t) {
    e.pending[t] !== void 0 && (delete e.pending[t],
    e.pendingCount--)
}
var Rd = function(e) {
    Qr(r, e);
    var t = Pd(r);
    function r(n, a, i) {
        var o, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return $e(this, r),
        o = t.call(this),
        en && st.call(at(o)),
        o.backend = n,
        o.store = a,
        o.services = i,
        o.languageUtils = i.languageUtils,
        o.options = s,
        o.logger = Ie.create("backendConnector"),
        o.waitingReads = [],
        o.maxParallelReads = s.maxParallelReads || 10,
        o.readingCalls = 0,
        o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5,
        o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350,
        o.state = {},
        o.queue = [],
        o.backend && o.backend.init && o.backend.init(i, s.backend, s),
        o
    }
    return Ue(r, [{
        key: "queueLoad",
        value: function(a, i, o, s) {
            var u = this
              , c = {}
              , p = {}
              , l = {}
              , f = {};
            return a.forEach(function(d) {
                var g = !0;
                i.forEach(function(h) {
                    var m = "".concat(d, "|").concat(h);
                    !o.reload && u.store.hasResourceBundle(d, h) ? u.state[m] = 2 : u.state[m] < 0 || (u.state[m] === 1 ? p[m] === void 0 && (p[m] = !0) : (u.state[m] = 1,
                    g = !1,
                    p[m] === void 0 && (p[m] = !0),
                    c[m] === void 0 && (c[m] = !0),
                    f[h] === void 0 && (f[h] = !0)))
                }),
                g || (l[d] = !0)
            }),
            (Object.keys(c).length || Object.keys(p).length) && this.queue.push({
                pending: p,
                pendingCount: Object.keys(p).length,
                loaded: {},
                errors: [],
                callback: s
            }),
            {
                toLoad: Object.keys(c),
                pending: Object.keys(p),
                toLoadLanguages: Object.keys(l),
                toLoadNamespaces: Object.keys(f)
            }
        }
    }, {
        key: "loaded",
        value: function(a, i, o) {
            var s = a.split("|")
              , u = s[0]
              , c = s[1];
            i && this.emit("failedLoading", u, c, i),
            o && this.store.addResourceBundle(u, c, o),
            this.state[a] = i ? -1 : 2;
            var p = {};
            this.queue.forEach(function(l) {
                sd(l.loaded, [u], c),
                Ad(l, a),
                i && l.errors.push(i),
                l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(function(f) {
                    p[f] || (p[f] = {});
                    var d = l.loaded[f];
                    d.length && d.forEach(function(g) {
                        p[f][g] === void 0 && (p[f][g] = !0)
                    })
                }),
                l.done = !0,
                l.errors.length ? l.callback(l.errors) : l.callback())
            }),
            this.emit("loaded", p),
            this.queue = this.queue.filter(function(l) {
                return !l.done
            })
        }
    }, {
        key: "read",
        value: function(a, i, o) {
            var s = this
              , u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
              , c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout
              , p = arguments.length > 5 ? arguments[5] : void 0;
            if (!a.length)
                return p(null, {});
            if (this.readingCalls >= this.maxParallelReads) {
                this.waitingReads.push({
                    lng: a,
                    ns: i,
                    fcName: o,
                    tried: u,
                    wait: c,
                    callback: p
                });
                return
            }
            return this.readingCalls++,
            this.backend[o](a, i, function(l, f) {
                if (s.readingCalls--,
                s.waitingReads.length > 0) {
                    var d = s.waitingReads.shift();
                    s.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback)
                }
                if (l && f && u < s.maxRetries) {
                    setTimeout(function() {
                        s.read.call(s, a, i, o, u + 1, c * 2, p)
                    }, c);
                    return
                }
                p(l, f)
            })
        }
    }, {
        key: "prepareLoading",
        value: function(a, i) {
            var o = this
              , s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
              , u = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend)
                return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                u && u();
            typeof a == "string" && (a = this.languageUtils.toResolveHierarchy(a)),
            typeof i == "string" && (i = [i]);
            var c = this.queueLoad(a, i, s, u);
            if (!c.toLoad.length)
                return c.pending.length || u(),
                null;
            c.toLoad.forEach(function(p) {
                o.loadOne(p)
            })
        }
    }, {
        key: "load",
        value: function(a, i, o) {
            this.prepareLoading(a, i, {}, o)
        }
    }, {
        key: "reload",
        value: function(a, i, o) {
            this.prepareLoading(a, i, {
                reload: !0
            }, o)
        }
    }, {
        key: "loadOne",
        value: function(a) {
            var i = this
              , o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
              , s = a.split("|")
              , u = s[0]
              , c = s[1];
            this.read(u, c, "read", void 0, void 0, function(p, l) {
                p && i.logger.warn("".concat(o, "loading namespace ").concat(c, " for language ").concat(u, " failed"), p),
                !p && l && i.logger.log("".concat(o, "loaded namespace ").concat(c, " for language ").concat(u), l),
                i.loaded(a, p, l)
            })
        }
    }, {
        key: "saveMissing",
        value: function(a, i, o, s, u) {
            var c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
            if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(i)) {
                this.logger.warn('did not save key "'.concat(o, '" as the namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                return
            }
            o == null || o === "" || (this.backend && this.backend.create && this.backend.create(a, i, o, s, null, Wo(Wo({}, c), {}, {
                isUpdate: u
            })),
            !(!a || !a[0]) && this.store.addResource(a[0], i, o, s))
        }
    }]),
    r
}(st);
function Cd() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !0,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
            var r = {};
            if (ke(t[1]) === "object" && (r = t[1]),
            typeof t[1] == "string" && (r.defaultValue = t[1]),
            typeof t[2] == "string" && (r.tDescription = t[2]),
            ke(t[2]) === "object" || ke(t[3]) === "object") {
                var n = t[3] || t[2];
                Object.keys(n).forEach(function(a) {
                    r[a] = n[a]
                })
            }
            return r
        },
        interpolation: {
            escapeValue: !0,
            format: function(t, r, n, a) {
                return t
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}
function Jo(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
}
function Yo(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Le(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Yo(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yo(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function Td(e) {
    var t = Ld();
    return function() {
        var n = De(e), a;
        if (t) {
            var i = De(this).constructor;
            a = Reflect.construct(n, arguments, i)
        } else
            a = n.apply(this, arguments);
        return vr(this, a)
    }
}
function Ld() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function Ar() {}
function Id(e) {
    var t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
    t.forEach(function(r) {
        typeof e[r] == "function" && (e[r] = e[r].bind(e))
    })
}
var Fr = function(e) {
    Qr(r, e);
    var t = Td(r);
    function r() {
        var n, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
        if ($e(this, r),
        n = t.call(this),
        en && st.call(at(n)),
        n.options = Jo(a),
        n.services = {},
        n.logger = Ie,
        n.modules = {
            external: []
        },
        Id(at(n)),
        i && !n.isInitialized && !a.isClone) {
            if (!n.options.initImmediate)
                return n.init(a, i),
                vr(n, at(n));
            setTimeout(function() {
                n.init(a, i)
            }, 0)
        }
        return n
    }
    return Ue(r, [{
        key: "init",
        value: function() {
            var a = this
              , i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , o = arguments.length > 1 ? arguments[1] : void 0;
            typeof i == "function" && (o = i,
            i = {}),
            !i.defaultNS && i.defaultNS !== !1 && i.ns && (typeof i.ns == "string" ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
            var s = Cd();
            this.options = Le(Le(Le({}, s), this.options), Jo(i)),
            this.options.compatibilityAPI !== "v1" && (this.options.interpolation = Le(Le({}, s.interpolation), this.options.interpolation)),
            i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator),
            i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
            function u(v) {
                return v ? typeof v == "function" ? new v : v : null
            }
            if (!this.options.isClone) {
                this.modules.logger ? Ie.init(u(this.modules.logger), this.options) : Ie.init(null, this.options);
                var c;
                this.modules.formatter ? c = this.modules.formatter : typeof Intl < "u" && (c = xd);
                var p = new vd(this.options);
                this.store = new gd(this.options.resources,this.options);
                var l = this.services;
                l.logger = Ie,
                l.resourceStore = this.store,
                l.languageUtils = p,
                l.pluralResolver = new Sd(p,{
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                }),
                c && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (l.formatter = u(c),
                l.formatter.init(l, this.options),
                this.options.interpolation.format = l.formatter.format.bind(l.formatter)),
                l.interpolator = new kd(this.options),
                l.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                },
                l.backendConnector = new Rd(u(this.modules.backend),l.resourceStore,l,this.options),
                l.backendConnector.on("*", function(v) {
                    for (var _ = arguments.length, b = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
                        b[y - 1] = arguments[y];
                    a.emit.apply(a, [v].concat(b))
                }),
                this.modules.languageDetector && (l.languageDetector = u(this.modules.languageDetector),
                l.languageDetector.init(l, this.options.detection, this.options)),
                this.modules.i18nFormat && (l.i18nFormat = u(this.modules.i18nFormat),
                l.i18nFormat.init && l.i18nFormat.init(this)),
                this.translator = new zo(this.services,this.options),
                this.translator.on("*", function(v) {
                    for (var _ = arguments.length, b = new Array(_ > 1 ? _ - 1 : 0), y = 1; y < _; y++)
                        b[y - 1] = arguments[y];
                    a.emit.apply(a, [v].concat(b))
                }),
                this.modules.external.forEach(function(v) {
                    v.init && v.init(a)
                })
            }
            if (this.format = this.options.interpolation.format,
            o || (o = Ar),
            this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                var f = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0])
            }
            !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined");
            var d = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
            d.forEach(function(v) {
                a[v] = function() {
                    var _;
                    return (_ = a.store)[v].apply(_, arguments)
                }
            });
            var g = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
            g.forEach(function(v) {
                a[v] = function() {
                    var _;
                    return (_ = a.store)[v].apply(_, arguments),
                    a
                }
            });
            var h = Yt()
              , m = function() {
                var _ = function(y, w) {
                    a.isInitialized && !a.initializedStoreOnce && a.logger.warn("init: i18next is already initialized. You should call init just once!"),
                    a.isInitialized = !0,
                    a.options.isClone || a.logger.log("initialized", a.options),
                    a.emit("initialized", a.options),
                    h.resolve(w),
                    o(y, w)
                };
                if (a.languages && a.options.compatibilityAPI !== "v1" && !a.isInitialized)
                    return _(null, a.t.bind(a));
                a.changeLanguage(a.options.lng, _)
            };
            return this.options.resources || !this.options.initImmediate ? m() : setTimeout(m, 0),
            h
        }
    }, {
        key: "loadResources",
        value: function(a) {
            var i = this
              , o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar
              , s = o
              , u = typeof a == "string" ? a : this.language;
            if (typeof a == "function" && (s = a),
            !this.options.resources || this.options.partialBundledLanguages) {
                if (u && u.toLowerCase() === "cimode")
                    return s();
                var c = []
                  , p = function(d) {
                    if (d) {
                        var g = i.services.languageUtils.toResolveHierarchy(d);
                        g.forEach(function(h) {
                            c.indexOf(h) < 0 && c.push(h)
                        })
                    }
                };
                if (u)
                    p(u);
                else {
                    var l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    l.forEach(function(f) {
                        return p(f)
                    })
                }
                this.options.preload && this.options.preload.forEach(function(f) {
                    return p(f)
                }),
                this.services.backendConnector.load(c, this.options.ns, function(f) {
                    !f && !i.resolvedLanguage && i.language && i.setResolvedLanguage(i.language),
                    s(f)
                })
            } else
                s(null)
        }
    }, {
        key: "reloadResources",
        value: function(a, i, o) {
            var s = Yt();
            return a || (a = this.languages),
            i || (i = this.options.ns),
            o || (o = Ar),
            this.services.backendConnector.reload(a, i, function(u) {
                s.resolve(),
                o(u)
            }),
            s
        }
    }, {
        key: "use",
        value: function(a) {
            if (!a)
                throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
            if (!a.type)
                throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
            return a.type === "backend" && (this.modules.backend = a),
            (a.type === "logger" || a.log && a.warn && a.error) && (this.modules.logger = a),
            a.type === "languageDetector" && (this.modules.languageDetector = a),
            a.type === "i18nFormat" && (this.modules.i18nFormat = a),
            a.type === "postProcessor" && ol.addPostProcessor(a),
            a.type === "formatter" && (this.modules.formatter = a),
            a.type === "3rdParty" && this.modules.external.push(a),
            this
        }
    }, {
        key: "setResolvedLanguage",
        value: function(a) {
            if (!(!a || !this.languages) && !(["cimode", "dev"].indexOf(a) > -1))
                for (var i = 0; i < this.languages.length; i++) {
                    var o = this.languages[i];
                    if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
                        this.resolvedLanguage = o;
                        break
                    }
                }
        }
    }, {
        key: "changeLanguage",
        value: function(a, i) {
            var o = this;
            this.isLanguageChangingTo = a;
            var s = Yt();
            this.emit("languageChanging", a);
            var u = function(f) {
                o.language = f,
                o.languages = o.services.languageUtils.toResolveHierarchy(f),
                o.resolvedLanguage = void 0,
                o.setResolvedLanguage(f)
            }
              , c = function(f, d) {
                d ? (u(d),
                o.translator.changeLanguage(d),
                o.isLanguageChangingTo = void 0,
                o.emit("languageChanged", d),
                o.logger.log("languageChanged", d)) : o.isLanguageChangingTo = void 0,
                s.resolve(function() {
                    return o.t.apply(o, arguments)
                }),
                i && i(f, function() {
                    return o.t.apply(o, arguments)
                })
            }
              , p = function(f) {
                !a && !f && o.services.languageDetector && (f = []);
                var d = typeof f == "string" ? f : o.services.languageUtils.getBestMatchFromCodes(f);
                d && (o.language || u(d),
                o.translator.language || o.translator.changeLanguage(d),
                o.services.languageDetector && o.services.languageDetector.cacheUserLanguage(d)),
                o.loadResources(d, function(g) {
                    c(g, d)
                })
            };
            return !a && this.services.languageDetector && !this.services.languageDetector.async ? p(this.services.languageDetector.detect()) : !a && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(p) : p(a),
            s
        }
    }, {
        key: "getFixedT",
        value: function(a, i, o) {
            var s = this
              , u = function c(p, l) {
                var f;
                if (ke(l) !== "object") {
                    for (var d = arguments.length, g = new Array(d > 2 ? d - 2 : 0), h = 2; h < d; h++)
                        g[h - 2] = arguments[h];
                    f = s.options.overloadTranslationOptionHandler([p, l].concat(g))
                } else
                    f = Le({}, l);
                f.lng = f.lng || c.lng,
                f.lngs = f.lngs || c.lngs,
                f.ns = f.ns || c.ns,
                f.keyPrefix = f.keyPrefix || o || c.keyPrefix;
                var m = s.options.keySeparator || "."
                  , v = f.keyPrefix ? "".concat(f.keyPrefix).concat(m).concat(p) : p;
                return s.t(v, f)
            };
            return typeof a == "string" ? u.lng = a : u.lngs = a,
            u.ns = i,
            u.keyPrefix = o,
            u
        }
    }, {
        key: "t",
        value: function() {
            var a;
            return this.translator && (a = this.translator).translate.apply(a, arguments)
        }
    }, {
        key: "exists",
        value: function() {
            var a;
            return this.translator && (a = this.translator).exists.apply(a, arguments)
        }
    }, {
        key: "setDefaultNamespace",
        value: function(a) {
            this.options.defaultNS = a
        }
    }, {
        key: "hasLoadedNamespace",
        value: function(a) {
            var i = this
              , o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (!this.isInitialized)
                return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                !1;
            if (!this.languages || !this.languages.length)
                return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                !1;
            var s = this.resolvedLanguage || this.languages[0]
              , u = this.options ? this.options.fallbackLng : !1
              , c = this.languages[this.languages.length - 1];
            if (s.toLowerCase() === "cimode")
                return !0;
            var p = function(d, g) {
                var h = i.services.backendConnector.state["".concat(d, "|").concat(g)];
                return h === -1 || h === 2
            };
            if (o.precheck) {
                var l = o.precheck(this, p);
                if (l !== void 0)
                    return l
            }
            return !!(this.hasResourceBundle(s, a) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || p(s, a) && (!u || p(c, a)))
        }
    }, {
        key: "loadNamespaces",
        value: function(a, i) {
            var o = this
              , s = Yt();
            return this.options.ns ? (typeof a == "string" && (a = [a]),
            a.forEach(function(u) {
                o.options.ns.indexOf(u) < 0 && o.options.ns.push(u)
            }),
            this.loadResources(function(u) {
                s.resolve(),
                i && i(u)
            }),
            s) : (i && i(),
            Promise.resolve())
        }
    }, {
        key: "loadLanguages",
        value: function(a, i) {
            var o = Yt();
            typeof a == "string" && (a = [a]);
            var s = this.options.preload || []
              , u = a.filter(function(c) {
                return s.indexOf(c) < 0
            });
            return u.length ? (this.options.preload = s.concat(u),
            this.loadResources(function(c) {
                o.resolve(),
                i && i(c)
            }),
            o) : (i && i(),
            Promise.resolve())
        }
    }, {
        key: "dir",
        value: function(a) {
            if (a || (a = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
            !a)
                return "rtl";
            var i = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"];
            return i.indexOf(this.services.languageUtils.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
        }
    }, {
        key: "cloneInstance",
        value: function() {
            var a = this
              , i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
              , o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ar
              , s = Le(Le(Le({}, this.options), i), {
                isClone: !0
            })
              , u = new r(s);
            (i.debug !== void 0 || i.prefix !== void 0) && (u.logger = u.logger.clone(i));
            var c = ["store", "services", "language"];
            return c.forEach(function(p) {
                u[p] = a[p]
            }),
            u.services = Le({}, this.services),
            u.services.utils = {
                hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
            },
            u.translator = new zo(u.services,u.options),
            u.translator.on("*", function(p) {
                for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++)
                    f[d - 1] = arguments[d];
                u.emit.apply(u, [p].concat(f))
            }),
            u.init(s, o),
            u.translator.options = u.options,
            u.translator.backendConnector.services.utils = {
                hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
            },
            u
        }
    }, {
        key: "toJSON",
        value: function() {
            return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
                resolvedLanguage: this.resolvedLanguage
            }
        }
    }]),
    r
}(st);
Ye(Fr, "createInstance", function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , t = arguments.length > 1 ? arguments[1] : void 0;
    return new Fr(e,t)
});
var Y = Fr.createInstance();
Y.createInstance = Fr.createInstance;
Y.createInstance;
Y.init;
Y.loadResources;
Y.reloadResources;
Y.use;
Y.changeLanguage;
Y.getFixedT;
var Xo = Y.t;
Y.exists;
Y.setDefaultNamespace;
Y.hasLoadedNamespace;
Y.loadNamespaces;
Y.loadLanguages;
const Zo = {
    en: {
        auth: () => _e( () => import("./game-5058022b-xg882Z2k.js"), [])
    },
    ja: {
        auth: () => _e( () => import("./game-8aa46b72-DN-jO8rt.js"), [])
    },
    "zh-TW": {
        auth: () => _e( () => import("./game-f74a0b73-DN2Xjqs6.js"), [])
    },
    "zh-CN": {
        auth: () => _e( () => import("./game-37c53d79-_f7mRQHj.js"), [])
    },
    ko: {
        auth: () => _e( () => import("./game-65cbc097-DASMdrHf.js"), [])
    },
    fr: {
        auth: () => _e( () => import("./game-37db8993-BaPavMu5.js"), [])
    },
    de: {
        auth: () => _e( () => import("./game-233c579c-CeKB2yy4.js"), [])
    },
    th: {
        auth: () => _e( () => import("./game-52d3122a-5a_C9NHI.js"), [])
    },
    vi: {
        auth: () => _e( () => import("./game-057ffa54-soUKoklS.js"), [])
    }
};
async function Qo(e, t) {
    const r = {
        [e]: Zo[e],
        [t]: Zo[t]
    }
      , n = {}
      , a = [];
    return Object.keys(r).forEach(i => {
        const o = r[i];
        o && Object.keys(o).forEach(s => {
            const u = o[s]
              , c = u().then(p => {
                n[i] || (n[i] = {}),
                n[i][s] = p
            }
            ).catch(p => {
                console.error(p)
            }
            );
            a.push(c)
        }
        )
    }
    ),
    await Promise.all(a),
    n
}
var bn, es;
function sl() {
    if (es)
        return bn;
    es = 1;
    var e = typeof Pr == "object" && Pr && Pr.Object === Object && Pr;
    return bn = e,
    bn
}
var wn, ts;
function Xe() {
    if (ts)
        return wn;
    ts = 1;
    var e = sl()
      , t = typeof self == "object" && self && self.Object === Object && self
      , r = e || t || Function("return this")();
    return wn = r,
    wn
}
var Sn, rs;
function zi() {
    if (rs)
        return Sn;
    rs = 1;
    var e = Xe()
      , t = e.Symbol;
    return Sn = t,
    Sn
}
var kn, ns;
function Nd() {
    if (ns)
        return kn;
    ns = 1;
    var e = zi()
      , t = Object.prototype
      , r = t.hasOwnProperty
      , n = t.toString
      , a = e ? e.toStringTag : void 0;
    function i(o) {
        var s = r.call(o, a)
          , u = o[a];
        try {
            o[a] = void 0;
            var c = !0
        } catch {}
        var p = n.call(o);
        return c && (s ? o[a] = u : delete o[a]),
        p
    }
    return kn = i,
    kn
}
var On, as;
function jd() {
    if (as)
        return On;
    as = 1;
    var e = Object.prototype
      , t = e.toString;
    function r(n) {
        return t.call(n)
    }
    return On = r,
    On
}
var xn, is;
function tn() {
    if (is)
        return xn;
    is = 1;
    var e = zi()
      , t = Nd()
      , r = jd()
      , n = "[object Null]"
      , a = "[object Undefined]"
      , i = e ? e.toStringTag : void 0;
    function o(s) {
        return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s)
    }
    return xn = o,
    xn
}
var Pn, os;
function ul() {
    if (os)
        return Pn;
    os = 1;
    function e(t) {
        var r = typeof t;
        return t != null && (r == "object" || r == "function")
    }
    return Pn = e,
    Pn
}
var En, ss;
function cl() {
    if (ss)
        return En;
    ss = 1;
    var e = tn()
      , t = ul()
      , r = "[object AsyncFunction]"
      , n = "[object Function]"
      , a = "[object GeneratorFunction]"
      , i = "[object Proxy]";
    function o(s) {
        if (!t(s))
            return !1;
        var u = e(s);
        return u == n || u == a || u == r || u == i
    }
    return En = o,
    En
}
var An, us;
function Dd() {
    if (us)
        return An;
    us = 1;
    var e = Xe()
      , t = e["__core-js_shared__"];
    return An = t,
    An
}
var Rn, cs;
function Md() {
    if (cs)
        return Rn;
    cs = 1;
    var e = Dd()
      , t = function() {
        var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : ""
    }();
    function r(n) {
        return !!t && t in n
    }
    return Rn = r,
    Rn
}
var Cn, ls;
function ll() {
    if (ls)
        return Cn;
    ls = 1;
    var e = Function.prototype
      , t = e.toString;
    function r(n) {
        if (n != null) {
            try {
                return t.call(n)
            } catch {}
            try {
                return n + ""
            } catch {}
        }
        return ""
    }
    return Cn = r,
    Cn
}
var Tn, fs;
function $d() {
    if (fs)
        return Tn;
    fs = 1;
    var e = cl()
      , t = Md()
      , r = ul()
      , n = ll()
      , a = /[\\^$.*+?()[\]{}|]/g
      , i = /^\[object .+?Constructor\]$/
      , o = Function.prototype
      , s = Object.prototype
      , u = o.toString
      , c = s.hasOwnProperty
      , p = RegExp("^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function l(f) {
        if (!r(f) || t(f))
            return !1;
        var d = e(f) ? p : i;
        return d.test(n(f))
    }
    return Tn = l,
    Tn
}
var Ln, ds;
function Ud() {
    if (ds)
        return Ln;
    ds = 1;
    function e(t, r) {
        return t?.[r]
    }
    return Ln = e,
    Ln
}
var In, ps;
function Ut() {
    if (ps)
        return In;
    ps = 1;
    var e = $d()
      , t = Ud();
    function r(n, a) {
        var i = t(n, a);
        return e(i) ? i : void 0
    }
    return In = r,
    In
}
var Nn, gs;
function rn() {
    if (gs)
        return Nn;
    gs = 1;
    var e = Ut()
      , t = e(Object, "create");
    return Nn = t,
    Nn
}
var jn, hs;
function qd() {
    if (hs)
        return jn;
    hs = 1;
    var e = rn();
    function t() {
        this.__data__ = e ? e(null) : {},
        this.size = 0
    }
    return jn = t,
    jn
}
var Dn, ms;
function Fd() {
    if (ms)
        return Dn;
    ms = 1;
    function e(t) {
        var r = this.has(t) && delete this.__data__[t];
        return this.size -= r ? 1 : 0,
        r
    }
    return Dn = e,
    Dn
}
var Mn, vs;
function Gd() {
    if (vs)
        return Mn;
    vs = 1;
    var e = rn()
      , t = "__lodash_hash_undefined__"
      , r = Object.prototype
      , n = r.hasOwnProperty;
    function a(i) {
        var o = this.__data__;
        if (e) {
            var s = o[i];
            return s === t ? void 0 : s
        }
        return n.call(o, i) ? o[i] : void 0
    }
    return Mn = a,
    Mn
}
var $n, _s;
function zd() {
    if (_s)
        return $n;
    _s = 1;
    var e = rn()
      , t = Object.prototype
      , r = t.hasOwnProperty;
    function n(a) {
        var i = this.__data__;
        return e ? i[a] !== void 0 : r.call(i, a)
    }
    return $n = n,
    $n
}
var Un, ys;
function Vd() {
    if (ys)
        return Un;
    ys = 1;
    var e = rn()
      , t = "__lodash_hash_undefined__";
    function r(n, a) {
        var i = this.__data__;
        return this.size += this.has(n) ? 0 : 1,
        i[n] = e && a === void 0 ? t : a,
        this
    }
    return Un = r,
    Un
}
var qn, bs;
function Kd() {
    if (bs)
        return qn;
    bs = 1;
    var e = qd()
      , t = Fd()
      , r = Gd()
      , n = zd()
      , a = Vd();
    function i(o) {
        var s = -1
          , u = o == null ? 0 : o.length;
        for (this.clear(); ++s < u; ) {
            var c = o[s];
            this.set(c[0], c[1])
        }
    }
    return i.prototype.clear = e,
    i.prototype.delete = t,
    i.prototype.get = r,
    i.prototype.has = n,
    i.prototype.set = a,
    qn = i,
    qn
}
var Fn, ws;
function Hd() {
    if (ws)
        return Fn;
    ws = 1;
    function e() {
        this.__data__ = [],
        this.size = 0
    }
    return Fn = e,
    Fn
}
var Gn, Ss;
function fl() {
    if (Ss)
        return Gn;
    Ss = 1;
    function e(t, r) {
        return t === r || t !== t && r !== r
    }
    return Gn = e,
    Gn
}
var zn, ks;
function nn() {
    if (ks)
        return zn;
    ks = 1;
    var e = fl();
    function t(r, n) {
        for (var a = r.length; a--; )
            if (e(r[a][0], n))
                return a;
        return -1
    }
    return zn = t,
    zn
}
var Vn, Os;
function Bd() {
    if (Os)
        return Vn;
    Os = 1;
    var e = nn()
      , t = Array.prototype
      , r = t.splice;
    function n(a) {
        var i = this.__data__
          , o = e(i, a);
        if (o < 0)
            return !1;
        var s = i.length - 1;
        return o == s ? i.pop() : r.call(i, o, 1),
        --this.size,
        !0
    }
    return Vn = n,
    Vn
}
var Kn, xs;
function Wd() {
    if (xs)
        return Kn;
    xs = 1;
    var e = nn();
    function t(r) {
        var n = this.__data__
          , a = e(n, r);
        return a < 0 ? void 0 : n[a][1]
    }
    return Kn = t,
    Kn
}
var Hn, Ps;
function Jd() {
    if (Ps)
        return Hn;
    Ps = 1;
    var e = nn();
    function t(r) {
        return e(this.__data__, r) > -1
    }
    return Hn = t,
    Hn
}
var Bn, Es;
function Yd() {
    if (Es)
        return Bn;
    Es = 1;
    var e = nn();
    function t(r, n) {
        var a = this.__data__
          , i = e(a, r);
        return i < 0 ? (++this.size,
        a.push([r, n])) : a[i][1] = n,
        this
    }
    return Bn = t,
    Bn
}
var Wn, As;
function an() {
    if (As)
        return Wn;
    As = 1;
    var e = Hd()
      , t = Bd()
      , r = Wd()
      , n = Jd()
      , a = Yd();
    function i(o) {
        var s = -1
          , u = o == null ? 0 : o.length;
        for (this.clear(); ++s < u; ) {
            var c = o[s];
            this.set(c[0], c[1])
        }
    }
    return i.prototype.clear = e,
    i.prototype.delete = t,
    i.prototype.get = r,
    i.prototype.has = n,
    i.prototype.set = a,
    Wn = i,
    Wn
}
var Jn, Rs;
function Vi() {
    if (Rs)
        return Jn;
    Rs = 1;
    var e = Ut()
      , t = Xe()
      , r = e(t, "Map");
    return Jn = r,
    Jn
}
var Yn, Cs;
function Xd() {
    if (Cs)
        return Yn;
    Cs = 1;
    var e = Kd()
      , t = an()
      , r = Vi();
    function n() {
        this.size = 0,
        this.__data__ = {
            hash: new e,
            map: new (r || t),
            string: new e
        }
    }
    return Yn = n,
    Yn
}
var Xn, Ts;
function Zd() {
    if (Ts)
        return Xn;
    Ts = 1;
    function e(t) {
        var r = typeof t;
        return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null
    }
    return Xn = e,
    Xn
}
var Zn, Ls;
function on() {
    if (Ls)
        return Zn;
    Ls = 1;
    var e = Zd();
    function t(r, n) {
        var a = r.__data__;
        return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map
    }
    return Zn = t,
    Zn
}
var Qn, Is;
function Qd() {
    if (Is)
        return Qn;
    Is = 1;
    var e = on();
    function t(r) {
        var n = e(this, r).delete(r);
        return this.size -= n ? 1 : 0,
        n
    }
    return Qn = t,
    Qn
}
var ea, Ns;
function ep() {
    if (Ns)
        return ea;
    Ns = 1;
    var e = on();
    function t(r) {
        return e(this, r).get(r)
    }
    return ea = t,
    ea
}
var ta, js;
function tp() {
    if (js)
        return ta;
    js = 1;
    var e = on();
    function t(r) {
        return e(this, r).has(r)
    }
    return ta = t,
    ta
}
var ra, Ds;
function rp() {
    if (Ds)
        return ra;
    Ds = 1;
    var e = on();
    function t(r, n) {
        var a = e(this, r)
          , i = a.size;
        return a.set(r, n),
        this.size += a.size == i ? 0 : 1,
        this
    }
    return ra = t,
    ra
}
var na, Ms;
function Ki() {
    if (Ms)
        return na;
    Ms = 1;
    var e = Xd()
      , t = Qd()
      , r = ep()
      , n = tp()
      , a = rp();
    function i(o) {
        var s = -1
          , u = o == null ? 0 : o.length;
        for (this.clear(); ++s < u; ) {
            var c = o[s];
            this.set(c[0], c[1])
        }
    }
    return i.prototype.clear = e,
    i.prototype.delete = t,
    i.prototype.get = r,
    i.prototype.has = n,
    i.prototype.set = a,
    na = i,
    na
}
var aa, $s;
function np() {
    if ($s)
        return aa;
    $s = 1;
    var e = Ki()
      , t = "Expected a function";
    function r(n, a) {
        if (typeof n != "function" || a != null && typeof a != "function")
            throw new TypeError(t);
        var i = function() {
            var o = arguments
              , s = a ? a.apply(this, o) : o[0]
              , u = i.cache;
            if (u.has(s))
                return u.get(s);
            var c = n.apply(this, o);
            return i.cache = u.set(s, c) || u,
            c
        };
        return i.cache = new (r.Cache || e),
        i
    }
    return r.Cache = e,
    aa = r,
    aa
}
var ap = np();
const dl = Zr(ap)
  , ip = dl(e => {
    if (!e)
        return null;
    const t = e.split(".");
    if (t.length !== 3)
        return null;
    try {
        return {
            country: "JP",
            region: "JP",
            lang: "ja",
            currency: "JPY",
            ...JSON.parse(atob(t[1]))
        }
    } catch (r) {
        return console.error(r),
        null
    }
}
);
let ye;
function op() {
    if (!ye)
        throw new Error("i18nInstance is not initialized");
    return ye
}
const At = "auth";
async function sp(e, t) {
    let {lang: r} = e.config;
    if (!r) {
        if (!t)
            throw new Error("code is empty");
        r = ip(t)?.lang
    }
    if (!r)
        throw new Error("user.lang is empty");
    if (!ye) {
        const n = await Qo(r, "en");
        ye = Y.createInstance(),
        await ye.init({
            defaultNS: At,
            resources: n,
            lng: r,
            fallbackLng: "en",
            debug: !1,
            interpolation: {
                escapeValue: !1
            }
        })
    }
    if (ye.language !== r) {
        if (!ye.hasResourceBundle(r, At)) {
            const n = await Qo(r, "en");
            n?.[r]?.[At] && ye.addResourceBundle(r, At, n[r][At])
        }
        ye.hasResourceBundle(r, At) && await ye.changeLanguage(r)
    }
    return ye
}
function we(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
        r[n - 1] = arguments[n];
    throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(a) {
        return "'" + a + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}
function ut(e) {
    return !!e && !!e[z]
}
function Be(e) {
    var t;
    return !!e && (function(r) {
        if (!r || typeof r != "object")
            return !1;
        var n = Object.getPrototypeOf(r);
        if (n === null)
            return !0;
        var a = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
        return a === Object || typeof a == "function" && Function.toString.call(a) === mp
    }(e) || Array.isArray(e) || !!e[Ks] || !!(!((t = e.constructor) === null || t === void 0) && t[Ks]) || Hi(e) || Bi(e))
}
function bt(e, t, r) {
    r === void 0 && (r = !1),
    qt(e) === 0 ? (r ? Object.keys : Lt)(e).forEach(function(n) {
        r && typeof n == "symbol" || t(n, e[n], e)
    }) : e.forEach(function(n, a) {
        return t(a, n, e)
    })
}
function qt(e) {
    var t = e[z];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Hi(e) ? 2 : Bi(e) ? 3 : 0
}
function Tt(e, t) {
    return qt(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function up(e, t) {
    return qt(e) === 2 ? e.get(t) : e[t]
}
function pl(e, t, r) {
    var n = qt(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r
}
function gl(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Hi(e) {
    return gp && e instanceof Map
}
function Bi(e) {
    return hp && e instanceof Set
}
function mt(e) {
    return e.o || e.t
}
function Wi(e) {
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    var t = ml(e);
    delete t[z];
    for (var r = Lt(t), n = 0; n < r.length; n++) {
        var a = r[n]
          , i = t[a];
        i.writable === !1 && (i.writable = !0,
        i.configurable = !0),
        (i.get || i.set) && (t[a] = {
            configurable: !0,
            writable: !0,
            enumerable: i.enumerable,
            value: e[a]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}
function Ji(e, t) {
    return t === void 0 && (t = !1),
    Yi(e) || ut(e) || !Be(e) || (qt(e) > 1 && (e.set = e.add = e.clear = e.delete = cp),
    Object.freeze(e),
    t && bt(e, function(r, n) {
        return Ji(n, !0)
    }, !0)),
    e
}
function cp() {
    we(2)
}
function Yi(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}
function je(e) {
    var t = bi[e];
    return t || we(18, e),
    t
}
function lp(e, t) {
    bi[e] || (bi[e] = t)
}
function vi() {
    return cr
}
function ia(e, t) {
    t && (je("Patches"),
    e.u = [],
    e.s = [],
    e.v = t)
}
function Gr(e) {
    _i(e),
    e.p.forEach(fp),
    e.p = null
}
function _i(e) {
    e === cr && (cr = e.l)
}
function Us(e) {
    return cr = {
        p: [],
        l: cr,
        h: e,
        m: !0,
        _: 0
    }
}
function fp(e) {
    var t = e[z];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}
function oa(e, t) {
    t._ = t.p.length;
    var r = t.p[0]
      , n = e !== void 0 && e !== r;
    return t.h.O || je("ES5").S(t, e, n),
    n ? (r[z].P && (Gr(t),
    we(4)),
    Be(e) && (e = zr(t, e),
    t.l || Vr(t, e)),
    t.u && je("Patches").M(r[z].t, e, t.u, t.s)) : e = zr(t, r, []),
    Gr(t),
    t.u && t.v(t.u, t.s),
    e !== hl ? e : void 0
}
function zr(e, t, r) {
    if (Yi(t))
        return t;
    var n = t[z];
    if (!n)
        return bt(t, function(s, u) {
            return qs(e, n, t, s, u, r)
        }, !0),
        t;
    if (n.A !== e)
        return t;
    if (!n.P)
        return Vr(e, n.t, !0),
        n.t;
    if (!n.I) {
        n.I = !0,
        n.A._--;
        var a = n.i === 4 || n.i === 5 ? n.o = Wi(n.k) : n.o
          , i = a
          , o = !1;
        n.i === 3 && (i = new Set(a),
        a.clear(),
        o = !0),
        bt(i, function(s, u) {
            return qs(e, n, a, s, u, r, o)
        }),
        Vr(e, a, !1),
        r && e.u && je("Patches").N(n, r, e.u, e.s)
    }
    return n.o
}
function qs(e, t, r, n, a, i, o) {
    if (ut(a)) {
        var s = zr(e, a, i && t && t.i !== 3 && !Tt(t.R, n) ? i.concat(n) : void 0);
        if (pl(r, n, s),
        !ut(s))
            return;
        e.m = !1
    } else
        o && r.add(a);
    if (Be(a) && !Yi(a)) {
        if (!e.h.D && e._ < 1)
            return;
        zr(e, a),
        t && t.A.l || Vr(e, a)
    }
}
function Vr(e, t, r) {
    r === void 0 && (r = !1),
    !e.l && e.h.D && e.m && Ji(t, r)
}
function sa(e, t) {
    var r = e[z];
    return (r ? mt(r) : e)[t]
}
function Fs(e, t) {
    if (t in e)
        for (var r = Object.getPrototypeOf(e); r; ) {
            var n = Object.getOwnPropertyDescriptor(r, t);
            if (n)
                return n;
            r = Object.getPrototypeOf(r)
        }
}
function rt(e) {
    e.P || (e.P = !0,
    e.l && rt(e.l))
}
function ua(e) {
    e.o || (e.o = Wi(e.t))
}
function yi(e, t, r) {
    var n = Hi(t) ? je("MapSet").F(t, r) : Bi(t) ? je("MapSet").T(t, r) : e.O ? function(a, i) {
        var o = Array.isArray(a)
          , s = {
            i: o ? 1 : 0,
            A: i ? i.A : vi(),
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: a,
            k: null,
            o: null,
            j: null,
            C: !1
        }
          , u = s
          , c = lr;
        o && (u = [s],
        c = Qt);
        var p = Proxy.revocable(u, c)
          , l = p.revoke
          , f = p.proxy;
        return s.k = f,
        s.j = l,
        f
    }(t, r) : je("ES5").J(t, r);
    return (r ? r.A : vi()).p.push(n),
    n
}
function dp(e) {
    return ut(e) || we(22, e),
    function t(r) {
        if (!Be(r))
            return r;
        var n, a = r[z], i = qt(r);
        if (a) {
            if (!a.P && (a.i < 4 || !je("ES5").K(a)))
                return a.t;
            a.I = !0,
            n = Gs(r, i),
            a.I = !1
        } else
            n = Gs(r, i);
        return bt(n, function(o, s) {
            a && up(a.t, o) === s || pl(n, o, t(s))
        }),
        i === 3 ? new Set(n) : n
    }(e)
}
function Gs(e, t) {
    switch (t) {
    case 2:
        return new Map(e);
    case 3:
        return Array.from(e)
    }
    return Wi(e)
}
function pp() {
    function e(i, o) {
        var s = a[i];
        return s ? s.enumerable = o : a[i] = s = {
            configurable: !0,
            enumerable: o,
            get: function() {
                var u = this[z];
                return lr.get(u, i)
            },
            set: function(u) {
                var c = this[z];
                lr.set(c, i, u)
            }
        },
        s
    }
    function t(i) {
        for (var o = i.length - 1; o >= 0; o--) {
            var s = i[o][z];
            if (!s.P)
                switch (s.i) {
                case 5:
                    n(s) && rt(s);
                    break;
                case 4:
                    r(s) && rt(s)
                }
        }
    }
    function r(i) {
        for (var o = i.t, s = i.k, u = Lt(s), c = u.length - 1; c >= 0; c--) {
            var p = u[c];
            if (p !== z) {
                var l = o[p];
                if (l === void 0 && !Tt(o, p))
                    return !0;
                var f = s[p]
                  , d = f && f[z];
                if (d ? d.t !== l : !gl(f, l))
                    return !0
            }
        }
        var g = !!o[z];
        return u.length !== Lt(o).length + (g ? 0 : 1)
    }
    function n(i) {
        var o = i.k;
        if (o.length !== i.t.length)
            return !0;
        var s = Object.getOwnPropertyDescriptor(o, o.length - 1);
        if (s && !s.get)
            return !0;
        for (var u = 0; u < o.length; u++)
            if (!o.hasOwnProperty(u))
                return !0;
        return !1
    }
    var a = {};
    lp("ES5", {
        J: function(i, o) {
            var s = Array.isArray(i)
              , u = function(p, l) {
                if (p) {
                    for (var f = Array(l.length), d = 0; d < l.length; d++)
                        Object.defineProperty(f, "" + d, e(d, !0));
                    return f
                }
                var g = ml(l);
                delete g[z];
                for (var h = Lt(g), m = 0; m < h.length; m++) {
                    var v = h[m];
                    g[v] = e(v, p || !!g[v].enumerable)
                }
                return Object.create(Object.getPrototypeOf(l), g)
            }(s, i)
              , c = {
                i: s ? 5 : 4,
                A: o ? o.A : vi(),
                P: !1,
                I: !1,
                R: {},
                l: o,
                t: i,
                k: u,
                o: null,
                g: !1,
                C: !1
            };
            return Object.defineProperty(u, z, {
                value: c,
                writable: !0
            }),
            u
        },
        S: function(i, o, s) {
            s ? ut(o) && o[z].A === i && t(i.p) : (i.u && function u(c) {
                if (c && typeof c == "object") {
                    var p = c[z];
                    if (p) {
                        var l = p.t
                          , f = p.k
                          , d = p.R
                          , g = p.i;
                        if (g === 4)
                            bt(f, function(b) {
                                b !== z && (l[b] !== void 0 || Tt(l, b) ? d[b] || u(f[b]) : (d[b] = !0,
                                rt(p)))
                            }),
                            bt(l, function(b) {
                                f[b] !== void 0 || Tt(f, b) || (d[b] = !1,
                                rt(p))
                            });
                        else if (g === 5) {
                            if (n(p) && (rt(p),
                            d.length = !0),
                            f.length < l.length)
                                for (var h = f.length; h < l.length; h++)
                                    d[h] = !1;
                            else
                                for (var m = l.length; m < f.length; m++)
                                    d[m] = !0;
                            for (var v = Math.min(f.length, l.length), _ = 0; _ < v; _++)
                                f.hasOwnProperty(_) || (d[_] = !0),
                                d[_] === void 0 && u(f[_])
                        }
                    }
                }
            }(i.p[0]),
            t(i.p))
        },
        K: function(i) {
            return i.i === 4 ? r(i) : n(i)
        }
    })
}
var zs, cr, Xi = typeof Symbol < "u" && typeof Symbol("x") == "symbol", gp = typeof Map < "u", hp = typeof Set < "u", Vs = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", hl = Xi ? Symbol.for("immer-nothing") : ((zs = {})["immer-nothing"] = !0,
zs), Ks = Xi ? Symbol.for("immer-draftable") : "__$immer_draftable", z = Xi ? Symbol.for("immer-state") : "__$immer_state", mp = "" + Object.prototype.constructor, Lt = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
}
: Object.getOwnPropertyNames, ml = Object.getOwnPropertyDescriptors || function(e) {
    var t = {};
    return Lt(e).forEach(function(r) {
        t[r] = Object.getOwnPropertyDescriptor(e, r)
    }),
    t
}
, bi = {}, lr = {
    get: function(e, t) {
        if (t === z)
            return e;
        var r = mt(e);
        if (!Tt(r, t))
            return function(a, i, o) {
                var s, u = Fs(i, o);
                return u ? "value"in u ? u.value : (s = u.get) === null || s === void 0 ? void 0 : s.call(a.k) : void 0
            }(e, r, t);
        var n = r[t];
        return e.I || !Be(n) ? n : n === sa(e.t, t) ? (ua(e),
        e.o[t] = yi(e.A.h, n, e)) : n
    },
    has: function(e, t) {
        return t in mt(e)
    },
    ownKeys: function(e) {
        return Reflect.ownKeys(mt(e))
    },
    set: function(e, t, r) {
        var n = Fs(mt(e), t);
        if (n?.set)
            return n.set.call(e.k, r),
            !0;
        if (!e.P) {
            var a = sa(mt(e), t)
              , i = a?.[z];
            if (i && i.t === r)
                return e.o[t] = r,
                e.R[t] = !1,
                !0;
            if (gl(r, a) && (r !== void 0 || Tt(e.t, t)))
                return !0;
            ua(e),
            rt(e)
        }
        return e.o[t] === r && (r !== void 0 || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r,
        e.R[t] = !0),
        !0
    },
    deleteProperty: function(e, t) {
        return sa(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1,
        ua(e),
        rt(e)) : delete e.R[t],
        e.o && delete e.o[t],
        !0
    },
    getOwnPropertyDescriptor: function(e, t) {
        var r = mt(e)
          , n = Reflect.getOwnPropertyDescriptor(r, t);
        return n && {
            writable: !0,
            configurable: e.i !== 1 || t !== "length",
            enumerable: n.enumerable,
            value: r[t]
        }
    },
    defineProperty: function() {
        we(11)
    },
    getPrototypeOf: function(e) {
        return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function() {
        we(12)
    }
}, Qt = {};
bt(lr, function(e, t) {
    Qt[e] = function() {
        return arguments[0] = arguments[0][0],
        t.apply(this, arguments)
    }
}),
Qt.deleteProperty = function(e, t) {
    return Qt.set.call(this, e, t, void 0)
}
,
Qt.set = function(e, t, r) {
    return lr.set.call(this, e[0], t, r, e[0])
}
;
var vp = function() {
    function e(r) {
        var n = this;
        this.O = Vs,
        this.D = !0,
        this.produce = function(a, i, o) {
            if (typeof a == "function" && typeof i != "function") {
                var s = i;
                i = a;
                var u = n;
                return function(h) {
                    var m = this;
                    h === void 0 && (h = s);
                    for (var v = arguments.length, _ = Array(v > 1 ? v - 1 : 0), b = 1; b < v; b++)
                        _[b - 1] = arguments[b];
                    return u.produce(h, function(y) {
                        var w;
                        return (w = i).call.apply(w, [m, y].concat(_))
                    })
                }
            }
            var c;
            if (typeof i != "function" && we(6),
            o !== void 0 && typeof o != "function" && we(7),
            Be(a)) {
                var p = Us(n)
                  , l = yi(n, a, void 0)
                  , f = !0;
                try {
                    c = i(l),
                    f = !1
                } finally {
                    f ? Gr(p) : _i(p)
                }
                return typeof Promise < "u" && c instanceof Promise ? c.then(function(h) {
                    return ia(p, o),
                    oa(h, p)
                }, function(h) {
                    throw Gr(p),
                    h
                }) : (ia(p, o),
                oa(c, p))
            }
            if (!a || typeof a != "object") {
                if ((c = i(a)) === void 0 && (c = a),
                c === hl && (c = void 0),
                n.D && Ji(c, !0),
                o) {
                    var d = []
                      , g = [];
                    je("Patches").M(a, c, d, g),
                    o(d, g)
                }
                return c
            }
            we(21, a)
        }
        ,
        this.produceWithPatches = function(a, i) {
            if (typeof a == "function")
                return function(c) {
                    for (var p = arguments.length, l = Array(p > 1 ? p - 1 : 0), f = 1; f < p; f++)
                        l[f - 1] = arguments[f];
                    return n.produceWithPatches(c, function(d) {
                        return a.apply(void 0, [d].concat(l))
                    })
                }
                ;
            var o, s, u = n.produce(a, i, function(c, p) {
                o = c,
                s = p
            });
            return typeof Promise < "u" && u instanceof Promise ? u.then(function(c) {
                return [c, o, s]
            }) : [u, o, s]
        }
        ,
        typeof r?.useProxies == "boolean" && this.setUseProxies(r.useProxies),
        typeof r?.autoFreeze == "boolean" && this.setAutoFreeze(r.autoFreeze)
    }
    var t = e.prototype;
    return t.createDraft = function(r) {
        Be(r) || we(8),
        ut(r) && (r = dp(r));
        var n = Us(this)
          , a = yi(this, r, void 0);
        return a[z].C = !0,
        _i(n),
        a
    }
    ,
    t.finishDraft = function(r, n) {
        var a = r && r[z]
          , i = a.A;
        return ia(i, n),
        oa(void 0, i)
    }
    ,
    t.setAutoFreeze = function(r) {
        this.D = r
    }
    ,
    t.setUseProxies = function(r) {
        r && !Vs && we(20),
        this.O = r
    }
    ,
    t.applyPatches = function(r, n) {
        var a;
        for (a = n.length - 1; a >= 0; a--) {
            var i = n[a];
            if (i.path.length === 0 && i.op === "replace") {
                r = i.value;
                break
            }
        }
        a > -1 && (n = n.slice(a + 1));
        var o = je("Patches").$;
        return ut(r) ? o(r, n) : this.produce(r, function(s) {
            return o(s, n)
        })
    }
    ,
    e
}()
  , ue = new vp
  , vl = ue.produce;
ue.produceWithPatches.bind(ue);
ue.setAutoFreeze.bind(ue);
ue.setUseProxies.bind(ue);
ue.applyPatches.bind(ue);
ue.createDraft.bind(ue);
ue.finishDraft.bind(ue);
function Hs(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Bs(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Hs(Object(r), !0).forEach(function(n) {
            Ye(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function ne(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var Ws = function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable"
}()
  , ca = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
}
  , Kr = {
    INIT: "@@redux/INIT" + ca(),
    REPLACE: "@@redux/REPLACE" + ca(),
    PROBE_UNKNOWN_ACTION: function() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + ca()
    }
};
function _p(e) {
    if (typeof e != "object" || e === null)
        return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}
function _l(e, t, r) {
    var n;
    if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
        throw new Error(ne(0));
    if (typeof t == "function" && typeof r > "u" && (r = t,
    t = void 0),
    typeof r < "u") {
        if (typeof r != "function")
            throw new Error(ne(1));
        return r(_l)(e, t)
    }
    if (typeof e != "function")
        throw new Error(ne(2));
    var a = e
      , i = t
      , o = []
      , s = o
      , u = !1;
    function c() {
        s === o && (s = o.slice())
    }
    function p() {
        if (u)
            throw new Error(ne(3));
        return i
    }
    function l(h) {
        if (typeof h != "function")
            throw new Error(ne(4));
        if (u)
            throw new Error(ne(5));
        var m = !0;
        return c(),
        s.push(h),
        function() {
            if (m) {
                if (u)
                    throw new Error(ne(6));
                m = !1,
                c();
                var _ = s.indexOf(h);
                s.splice(_, 1),
                o = null
            }
        }
    }
    function f(h) {
        if (!_p(h))
            throw new Error(ne(7));
        if (typeof h.type > "u")
            throw new Error(ne(8));
        if (u)
            throw new Error(ne(9));
        try {
            u = !0,
            i = a(i, h)
        } finally {
            u = !1
        }
        for (var m = o = s, v = 0; v < m.length; v++) {
            var _ = m[v];
            _()
        }
        return h
    }
    function d(h) {
        if (typeof h != "function")
            throw new Error(ne(10));
        a = h,
        f({
            type: Kr.REPLACE
        })
    }
    function g() {
        var h, m = l;
        return h = {
            subscribe: function(_) {
                if (typeof _ != "object" || _ === null)
                    throw new Error(ne(11));
                function b() {
                    _.next && _.next(p())
                }
                b();
                var y = m(b);
                return {
                    unsubscribe: y
                }
            }
        },
        h[Ws] = function() {
            return this
        }
        ,
        h
    }
    return f({
        type: Kr.INIT
    }),
    n = {
        dispatch: f,
        subscribe: l,
        getState: p,
        replaceReducer: d
    },
    n[Ws] = g,
    n
}
function yp(e) {
    Object.keys(e).forEach(function(t) {
        var r = e[t]
          , n = r(void 0, {
            type: Kr.INIT
        });
        if (typeof n > "u")
            throw new Error(ne(12));
        if (typeof r(void 0, {
            type: Kr.PROBE_UNKNOWN_ACTION()
        }) > "u")
            throw new Error(ne(13))
    })
}
function bp(e) {
    for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var a = t[n];
        typeof e[a] == "function" && (r[a] = e[a])
    }
    var i = Object.keys(r), o;
    try {
        yp(r)
    } catch (s) {
        o = s
    }
    return function(u, c) {
        if (u === void 0 && (u = {}),
        o)
            throw o;
        for (var p = !1, l = {}, f = 0; f < i.length; f++) {
            var d = i[f]
              , g = r[d]
              , h = u[d]
              , m = g(h, c);
            if (typeof m > "u")
                throw c && c.type,
                new Error(ne(14));
            l[d] = m,
            p = p || m !== h
        }
        return p = p || i.length !== Object.keys(u).length,
        p ? l : u
    }
}
function Hr() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return t.length === 0 ? function(n) {
        return n
    }
    : t.length === 1 ? t[0] : t.reduce(function(n, a) {
        return function() {
            return n(a.apply(void 0, arguments))
        }
    })
}
function wp() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(n) {
        return function() {
            var a = n.apply(void 0, arguments)
              , i = function() {
                throw new Error(ne(15))
            }
              , o = {
                getState: a.getState,
                dispatch: function() {
                    return i.apply(void 0, arguments)
                }
            }
              , s = t.map(function(u) {
                return u(o)
            });
            return i = Hr.apply(void 0, s)(a.dispatch),
            Bs(Bs({}, a), {}, {
                dispatch: i
            })
        }
    }
}
function yl(e) {
    var t = function(n) {
        var a = n.dispatch
          , i = n.getState;
        return function(o) {
            return function(s) {
                return typeof s == "function" ? s(a, i, e) : o(s)
            }
        }
    };
    return t
}
var wi = yl();
wi.withExtraArgument = yl;
var bl = function() {
    var e = function(t, r) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, a) {
            n.__proto__ = a
        }
        || function(n, a) {
            for (var i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i])
        }
        ,
        e(t, r)
    };
    return function(t, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        e(t, r);
        function n() {
            this.constructor = t
        }
        t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
    }
}()
  , Sp = function(e, t) {
    var r = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, n, a, i, o;
    return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function s(c) {
        return function(p) {
            return u([c, p])
        }
    }
    function u(c) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; r; )
            try {
                if (n = 1,
                a && (i = c[0] & 2 ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a),
                0) : a.next) && !(i = i.call(a, c[1])).done)
                    return i;
                switch (a = 0,
                i && (c = [c[0] & 2, i.value]),
                c[0]) {
                case 0:
                case 1:
                    i = c;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    a = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (i = r.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                        r.label = c[1];
                        break
                    }
                    if (c[0] === 6 && r.label < i[1]) {
                        r.label = i[1],
                        i = c;
                        break
                    }
                    if (i && r.label < i[2]) {
                        r.label = i[2],
                        r.ops.push(c);
                        break
                    }
                    i[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                c = t.call(e, r)
            } catch (p) {
                c = [6, p],
                a = 0
            } finally {
                n = i = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
  , Nt = function(e, t) {
    for (var r = 0, n = t.length, a = e.length; r < n; r++,
    a++)
        e[a] = t[r];
    return e
}
  , kp = Object.defineProperty
  , Op = Object.defineProperties
  , xp = Object.getOwnPropertyDescriptors
  , Js = Object.getOwnPropertySymbols
  , Pp = Object.prototype.hasOwnProperty
  , Ep = Object.prototype.propertyIsEnumerable
  , Ys = function(e, t, r) {
    return t in e ? kp(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r
}
  , it = function(e, t) {
    for (var r in t || (t = {}))
        Pp.call(t, r) && Ys(e, r, t[r]);
    if (Js)
        for (var n = 0, a = Js(t); n < a.length; n++) {
            var r = a[n];
            Ep.call(t, r) && Ys(e, r, t[r])
        }
    return e
}
  , la = function(e, t) {
    return Op(e, xp(t))
}
  , Ap = function(e, t, r) {
    return new Promise(function(n, a) {
        var i = function(u) {
            try {
                s(r.next(u))
            } catch (c) {
                a(c)
            }
        }
          , o = function(u) {
            try {
                s(r.throw(u))
            } catch (c) {
                a(c)
            }
        }
          , s = function(u) {
            return u.done ? n(u.value) : Promise.resolve(u.value).then(i, o)
        };
        s((r = r.apply(e, t)).next())
    }
    )
}
  , Rp = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
    if (arguments.length !== 0)
        return typeof arguments[0] == "object" ? Hr : Hr.apply(null, arguments)
}
;
function Cp(e) {
    if (typeof e != "object" || e === null)
        return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null)
        return !0;
    for (var r = t; Object.getPrototypeOf(r) !== null; )
        r = Object.getPrototypeOf(r);
    return t === r
}
function ot(e, t) {
    function r() {
        for (var n = [], a = 0; a < arguments.length; a++)
            n[a] = arguments[a];
        if (t) {
            var i = t.apply(void 0, n);
            if (!i)
                throw new Error("prepareAction did not return an object");
            return it(it({
                type: e,
                payload: i.payload
            }, "meta"in i && {
                meta: i.meta
            }), "error"in i && {
                error: i.error
            })
        }
        return {
            type: e,
            payload: n[0]
        }
    }
    return r.toString = function() {
        return "" + e
    }
    ,
    r.type = e,
    r.match = function(n) {
        return n.type === e
    }
    ,
    r
}
var Tp = function(e) {
    bl(t, e);
    function t() {
        for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
        var a = e.apply(this, r) || this;
        return Object.setPrototypeOf(a, t.prototype),
        a
    }
    return Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.concat = function() {
        for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
        return e.prototype.concat.apply(this, r)
    }
    ,
    t.prototype.prepend = function() {
        for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0]) ? new (t.bind.apply(t, Nt([void 0], r[0].concat(this)))) : new (t.bind.apply(t, Nt([void 0], r.concat(this))))
    }
    ,
    t
}(Array)
  , Lp = function(e) {
    bl(t, e);
    function t() {
        for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
        var a = e.apply(this, r) || this;
        return Object.setPrototypeOf(a, t.prototype),
        a
    }
    return Object.defineProperty(t, Symbol.species, {
        get: function() {
            return t
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.concat = function() {
        for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
        return e.prototype.concat.apply(this, r)
    }
    ,
    t.prototype.prepend = function() {
        for (var r = [], n = 0; n < arguments.length; n++)
            r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0]) ? new (t.bind.apply(t, Nt([void 0], r[0].concat(this)))) : new (t.bind.apply(t, Nt([void 0], r.concat(this))))
    }
    ,
    t
}(Array);
function Si(e) {
    return Be(e) ? vl(e, function() {}) : e
}
function Ip(e) {
    return typeof e == "boolean"
}
function Np() {
    return function(t) {
        return jp(t)
    }
}
function jp(e) {
    e === void 0 && (e = {});
    var t = e.thunk
      , r = t === void 0 ? !0 : t;
    e.immutableCheck,
    e.serializableCheck,
    e.actionCreatorCheck;
    var n = new Tp;
    return r && (Ip(r) ? n.push(wi) : n.push(wi.withExtraArgument(r.extraArgument))),
    n
}
function Zi(e) {
    var t = Np(), r = e || {}, n = r.reducer, a = n === void 0 ? void 0 : n, i = r.middleware, o = i === void 0 ? t() : i, s = r.devTools, u = s === void 0 ? !0 : s, c = r.preloadedState, p = c === void 0 ? void 0 : c, l = r.enhancers, f = l === void 0 ? void 0 : l, d;
    if (typeof a == "function")
        d = a;
    else if (Cp(a))
        d = bp(a);
    else
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var g = o;
    typeof g == "function" && (g = g(t));
    var h = wp.apply(void 0, g)
      , m = Hr;
    u && (m = Rp(it({
        trace: !1
    }, typeof u == "object" && u)));
    var v = new Lp(h)
      , _ = v;
    Array.isArray(f) ? _ = Nt([h], f) : typeof f == "function" && (_ = f(v));
    var b = m.apply(void 0, _);
    return _l(d, p, b)
}
function wl(e) {
    var t = {}, r = [], n, a = {
        addCase: function(i, o) {
            var s = typeof i == "string" ? i : i.type;
            if (!s)
                throw new Error("`builder.addCase` cannot be called with an empty action type");
            if (s in t)
                throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
            return t[s] = o,
            a
        },
        addMatcher: function(i, o) {
            return r.push({
                matcher: i,
                reducer: o
            }),
            a
        },
        addDefaultCase: function(i) {
            return n = i,
            a
        }
    };
    return e(a),
    [t, r, n]
}
function Dp(e) {
    return typeof e == "function"
}
function Mp(e, t, r, n) {
    r === void 0 && (r = []);
    var a = typeof t == "function" ? wl(t) : [t, r, n], i = a[0], o = a[1], s = a[2], u;
    if (Dp(e))
        u = function() {
            return Si(e())
        }
        ;
    else {
        var c = Si(e);
        u = function() {
            return c
        }
    }
    function p(l, f) {
        l === void 0 && (l = u());
        var d = Nt([i[f.type]], o.filter(function(g) {
            var h = g.matcher;
            return h(f)
        }).map(function(g) {
            var h = g.reducer;
            return h
        }));
        return d.filter(function(g) {
            return !!g
        }).length === 0 && (d = [s]),
        d.reduce(function(g, h) {
            if (h)
                if (ut(g)) {
                    var m = g
                      , v = h(m, f);
                    return v === void 0 ? g : v
                } else {
                    if (Be(g))
                        return vl(g, function(_) {
                            return h(_, f)
                        });
                    var v = h(g, f);
                    if (v === void 0) {
                        if (g === null)
                            return g;
                        throw Error("A case reducer on a non-draftable value must not return undefined")
                    }
                    return v
                }
            return g
        }, l)
    }
    return p.getInitialState = u,
    p
}
function $p(e, t) {
    return e + "/" + t
}
function te(e) {
    var t = e.name;
    if (!t)
        throw new Error("`name` is a required option for createSlice");
    var r = typeof e.initialState == "function" ? e.initialState : Si(e.initialState)
      , n = e.reducers || {}
      , a = Object.keys(n)
      , i = {}
      , o = {}
      , s = {};
    a.forEach(function(p) {
        var l = n[p], f = $p(t, p), d, g;
        "reducer"in l ? (d = l.reducer,
        g = l.prepare) : d = l,
        i[p] = d,
        o[f] = d,
        s[p] = g ? ot(f, g) : ot(f)
    });
    function u() {
        var p = typeof e.extraReducers == "function" ? wl(e.extraReducers) : [e.extraReducers]
          , l = p[0]
          , f = l === void 0 ? {} : l
          , d = p[1]
          , g = d === void 0 ? [] : d
          , h = p[2]
          , m = h === void 0 ? void 0 : h
          , v = it(it({}, f), o);
        return Mp(r, function(_) {
            for (var b in v)
                _.addCase(b, v[b]);
            for (var y = 0, w = g; y < w.length; y++) {
                var k = w[y];
                _.addMatcher(k.matcher, k.reducer)
            }
            m && _.addDefaultCase(m)
        })
    }
    var c;
    return {
        name: t,
        reducer: function(p, l) {
            return c || (c = u()),
            c(p, l)
        },
        actions: s,
        caseReducers: i,
        getInitialState: function() {
            return c || (c = u()),
            c.getInitialState()
        }
    }
}
var Up = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"
  , qp = function(e) {
    e === void 0 && (e = 21);
    for (var t = "", r = e; r--; )
        t += Up[Math.random() * 64 | 0];
    return t
}
  , Fp = ["name", "message", "stack", "code"]
  , fa = function() {
    function e(t, r) {
        this.payload = t,
        this.meta = r
    }
    return e
}()
  , Xs = function() {
    function e(t, r) {
        this.payload = t,
        this.meta = r
    }
    return e
}()
  , Gp = function(e) {
    if (typeof e == "object" && e !== null) {
        for (var t = {}, r = 0, n = Fp; r < n.length; r++) {
            var a = n[r];
            typeof e[a] == "string" && (t[a] = e[a])
        }
        return t
    }
    return {
        message: String(e)
    }
}
  , dt = function() {
    function e(t, r, n) {
        var a = ot(t + "/fulfilled", function(c, p, l, f) {
            return {
                payload: c,
                meta: la(it({}, f || {}), {
                    arg: l,
                    requestId: p,
                    requestStatus: "fulfilled"
                })
            }
        })
          , i = ot(t + "/pending", function(c, p, l) {
            return {
                payload: void 0,
                meta: la(it({}, l || {}), {
                    arg: p,
                    requestId: c,
                    requestStatus: "pending"
                })
            }
        })
          , o = ot(t + "/rejected", function(c, p, l, f, d) {
            return {
                payload: f,
                error: (n && n.serializeError || Gp)(c || "Rejected"),
                meta: la(it({}, d || {}), {
                    arg: l,
                    requestId: p,
                    rejectedWithValue: !!f,
                    requestStatus: "rejected",
                    aborted: c?.name === "AbortError",
                    condition: c?.name === "ConditionError"
                })
            }
        })
          , s = typeof AbortController < "u" ? AbortController : function() {
            function c() {
                this.signal = {
                    aborted: !1,
                    addEventListener: function() {},
                    dispatchEvent: function() {
                        return !1
                    },
                    onabort: function() {},
                    removeEventListener: function() {},
                    reason: void 0,
                    throwIfAborted: function() {}
                }
            }
            return c.prototype.abort = function() {}
            ,
            c
        }();
        function u(c) {
            return function(p, l, f) {
                var d = n?.idGenerator ? n.idGenerator(c) : qp(), g = new s, h;
                function m(_) {
                    h = _,
                    g.abort()
                }
                var v = function() {
                    return Ap(this, null, function() {
                        var _, b, y, w, k, O, S;
                        return Sp(this, function(R) {
                            switch (R.label) {
                            case 0:
                                return R.trys.push([0, 4, , 5]),
                                w = (_ = n?.condition) == null ? void 0 : _.call(n, c, {
                                    getState: l,
                                    extra: f
                                }),
                                Vp(w) ? [4, w] : [3, 2];
                            case 1:
                                w = R.sent(),
                                R.label = 2;
                            case 2:
                                if (w === !1 || g.signal.aborted)
                                    throw {
                                        name: "ConditionError",
                                        message: "Aborted due to condition callback returning false."
                                    };
                                return k = new Promise(function(L, E) {
                                    return g.signal.addEventListener("abort", function() {
                                        return E({
                                            name: "AbortError",
                                            message: h || "Aborted"
                                        })
                                    })
                                }
                                ),
                                p(i(d, c, (b = n?.getPendingMeta) == null ? void 0 : b.call(n, {
                                    requestId: d,
                                    arg: c
                                }, {
                                    getState: l,
                                    extra: f
                                }))),
                                [4, Promise.race([k, Promise.resolve(r(c, {
                                    dispatch: p,
                                    getState: l,
                                    extra: f,
                                    requestId: d,
                                    signal: g.signal,
                                    abort: m,
                                    rejectWithValue: function(L, E) {
                                        return new fa(L,E)
                                    },
                                    fulfillWithValue: function(L, E) {
                                        return new Xs(L,E)
                                    }
                                })).then(function(L) {
                                    if (L instanceof fa)
                                        throw L;
                                    return L instanceof Xs ? a(L.payload, d, c, L.meta) : a(L, d, c)
                                })])];
                            case 3:
                                return y = R.sent(),
                                [3, 5];
                            case 4:
                                return O = R.sent(),
                                y = O instanceof fa ? o(null, d, c, O.payload, O.meta) : o(O, d, c),
                                [3, 5];
                            case 5:
                                return S = n && !n.dispatchConditionRejection && o.match(y) && y.meta.condition,
                                S || p(y),
                                [2, y]
                            }
                        })
                    })
                }();
                return Object.assign(v, {
                    abort: m,
                    requestId: d,
                    arg: c,
                    unwrap: function() {
                        return v.then(zp)
                    }
                })
            }
        }
        return Object.assign(u, {
            pending: i,
            rejected: o,
            fulfilled: a,
            typePrefix: t
        })
    }
    return e.withTypes = function() {
        return e
    }
    ,
    e
}();
function zp(e) {
    if (e.meta && e.meta.rejectedWithValue)
        throw e.payload;
    if (e.error)
        throw e.error;
    return e.payload
}
function Vp(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var Qi = "listenerMiddleware";
ot(Qi + "/add");
ot(Qi + "/removeAll");
ot(Qi + "/remove");
var Zs;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
pp();
const ee = function e(t) {
    function r(a, i, o) {
        var s, u = {};
        if (Array.isArray(a))
            return a.concat(i);
        for (s in a)
            u[o ? s.toLowerCase() : s] = a[s];
        for (s in i) {
            var c = o ? s.toLowerCase() : s
              , p = i[s];
            u[c] = c in u && typeof p == "object" ? r(u[c], p, c == "headers") : p
        }
        return u
    }
    function n(a, i, o, s, u) {
        var c = typeof a != "string" ? (i = a).url : a
          , p = {
            config: i
        }
          , l = r(t, i)
          , f = {};
        s = s || l.data,
        (l.transformRequest || []).map(function(d) {
            s = d(s, l.headers) || s
        }),
        l.auth && (f.authorization = l.auth),
        s && typeof s == "object" && typeof s.append != "function" && typeof s.text != "function" && (s = JSON.stringify(s),
        f["content-type"] = "application/json");
        try {
            f[l.xsrfHeaderName] = decodeURIComponent(document.cookie.match(RegExp("(^|; )" + l.xsrfCookieName + "=([^;]*)"))[2])
        } catch {}
        return l.baseURL && (c = c.replace(/^(?!.*\/\/)\/?/, l.baseURL + "/")),
        l.params && (c += (~c.indexOf("?") ? "&" : "?") + (l.paramsSerializer ? l.paramsSerializer(l.params) : new URLSearchParams(l.params))),
        (l.fetch || fetch)(c, {
            method: (o || l.method || "get").toUpperCase(),
            body: s,
            headers: r(l.headers, f, !0),
            credentials: l.withCredentials ? "include" : u
        }).then(function(d) {
            for (var g in d)
                typeof d[g] != "function" && (p[g] = d[g]);
            return l.responseType == "stream" ? (p.data = d.body,
            p) : d[l.responseType || "text"]().then(function(h) {
                p.data = h,
                p.data = JSON.parse(h)
            }).catch(Object).then(function() {
                return (l.validateStatus ? l.validateStatus(d.status) : d.ok) ? p : Promise.reject(p)
            })
        })
    }
    return t = t || {},
    n.request = n,
    n.get = function(a, i) {
        return n(a, i, "get")
    }
    ,
    n.delete = function(a, i) {
        return n(a, i, "delete")
    }
    ,
    n.head = function(a, i) {
        return n(a, i, "head")
    }
    ,
    n.options = function(a, i) {
        return n(a, i, "options")
    }
    ,
    n.post = function(a, i, o) {
        return n(a, o, "post", i)
    }
    ,
    n.put = function(a, i, o) {
        return n(a, o, "put", i)
    }
    ,
    n.patch = function(a, i, o) {
        return n(a, o, "patch", i)
    }
    ,
    n.all = Promise.all.bind(Promise),
    n.spread = function(a) {
        return a.apply.bind(a, a)
    }
    ,
    n.CancelToken = typeof AbortController == "function" ? AbortController : Object,
    n.defaults = t,
    n.create = e,
    n
}()
  , Ft = {
    "g123.jp": "https://h5.g123.jp",
    "h5.g123.jp": "https://h5.g123.jp",
    "semi.g123.jp": "https://h5.semi.g123.jp",
    "h5.semi.g123.jp": "https://h5.semi.g123.jp",
    "stg.g123.jp": "https://h5.stg.g123.jp",
    "h5.stg.g123.jp": "https://h5.stg.g123.jp",
    "local.g123.jp": "https://h5.local.g123.jp",
    "h5.local.g123.jp": "https://h5.local.g123.jp"
}[window.location.hostname] || "https://h5.g123.jp"
  , Kp = async () => (await ee({
    url: `${Ft}/api/v1/oauth/config`,
    method: "get",
    withCredentials: !0
})).data
  , Hp = async (e, t) => {
    const r = {
        credentials: "include",
        cache: "no-store"
    }
      , {hash: n, href: a} = window.location;
    navigator.standalone && n && (r.headers = {
        "x-session-key": decodeURIComponent(n)
    });
    const i = new URL(`${window.location.origin}/api/v1/session?appId=${e}`);
    if (t)
        r.headers = {
            ...r.headers,
            Authorization: `Bearer ${t}`
        };
    else {
        i.searchParams.set("from", a);
        const c = new URL(a).searchParams.get("lang");
        c && i.searchParams.set("lang", c)
    }
    console.info("FETCH URL", i.href);
    const o = await fetch(i.href, r);
    if (!o.ok) {
        console.error(o);
        const u = await o.text();
        throw console.error(u),
        new Error(u)
    }
    return await o.json()
}
  , Qs = (e, t) => {
    const r = new URL(`${Ft}/api/v1/oauth/line/${e}`);
    if (t)
        for (const [n,a] of Object.entries(t))
            r.searchParams.set(n, a);
    return r.href
}
  , ct = (e, t, r) => {
    const i = new URL(`${Ft}/api/v1/oauth/${e}/${t}`);
    return r?.appCode && i.searchParams.set("appCode", r.appCode),
    r?.redirectUri && i.searchParams.set("redirect_uri", r.redirectUri),
    window.open(i.href, `${e.toUpperCase()}で${t === "login" ? "ログイン" : "連携"}`, `toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=${Math.min(599, window.screen.width - 20)},height=600,top=${(window.screen.height - 600) / 2}, left=${(window.screen.width - 599) / 2}`)
}
  , Rr = async (e, t, r) => {
    const n = {};
    n.kind = e;
    for (const [o,s] of Object.entries(t))
        n[o] = s;
    "error"in r ? n.error = r.error : (n.code = r.code,
    n.id_token = r.idToken,
    n.user = r.user),
    console.info("[APPLE] validateAppleAuthRequest", {
        options: t,
        params: r,
        data: n
    });
    const a = new FormData;
    for (const [o,s] of Object.entries(n))
        a.append(o, s);
    return (await ee.post(`${Ft}/api/v1/oauth/apple/callback`, a, {
        withCredentials: !0
    })).data
}
  , eu = async (e, t, r) => {
    const n = {};
    n.kind = e,
    n.id_token = r;
    for (const [o,s] of Object.entries(t))
        n[o] = s;
    const a = new FormData;
    for (const [o,s] of Object.entries(n))
        a.append(o, s);
    return console.info("[GOOGLE] validateGoogleAuthRequest", {
        options: t,
        data: n
    }),
    (await ee.post(`${Ft}/api/v1/oauth/google/callback`, a, {
        withCredentials: !0
    })).data
}
;
async function Bp(e, t) {
    const r = document.head || document.getElementsByTagName("head")[0]
      , n = document.createElement("script");
    if (n.type = t.type || "text/javascript",
    n.async = "async"in t ? !!t.async : !0,
    n.src = e,
    t.attrs)
        for (const [i,o] of Object.entries(t.attrs))
            n.setAttribute(i, o);
    t.text && (n.text = `${t.text}`);
    const a = new Promise( (i, o) => {
        n.onload = function() {
            this.onerror = null,
            this.onload = null,
            i(n)
        }
        ,
        n.onerror = function() {
            this.onerror = null,
            this.onload = null,
            o(new Error(`Failed to load ${this.src}`))
        }
    }
    );
    return r.appendChild(n),
    a
}
const eo = ( () => {
    const e = {};
    return (t, r) => {
        if (typeof t != "string")
            throw new Error("src must be string");
        const {cacheable: n=!0, ...a} = r || {}
          , i = e[t];
        if (n && i)
            return i;
        const o = Bp(t, a);
        return n && (e[t] = o),
        o
    }
}
)()
  , da = "apple";
function Wp(e) {
    return !!e && "client_id"in e && "sdk_url"in e
}
class Jp {
    constructor(t, r) {
        if (this.commands = t,
        !Wp(r))
            throw new Error(`config invalid ${r}`);
        this.config = r,
        this.init()
    }
    startLogin(t) {
        if (!AppleID) {
            this.commands.showMessage("UNKNOWN", "login", "apple");
            return
        }
        (async () => {
            try {
                const r = await AppleID.auth.signIn();
                r && this.appleLoginSuccess(t, r)
            } catch (r) {
                this.appleLoginFail(t, r)
            }
        }
        )()
    }
    startLink(t) {
        if (!AppleID) {
            this.commands.showMessage("UNKNOWN", "link", "apple");
            return
        }
        (async () => {
            if (this.commands.isLinked(da)) {
                this.commands.showMessage("CREATE_LINK_SNS_ALREADY_LINKED", "link", da);
                return
            }
            try {
                const n = await AppleID.auth.signIn();
                n && this.appleLinkSuccess(t, n)
            } catch (n) {
                this.appleLinkFail(t, n)
            }
        }
        )()
    }
    async init() {
        await eo(this.config.sdk_url);
        let t = this.config.redirect_uri || "";
        t.startsWith(window.location.origin) || (t = window.location.origin),
        AppleID.auth.init({
            clientId: this.config.client_id,
            scope: this.config.scope,
            redirectURI: t,
            usePopup: !0
        }),
        console.info(da, "environment ready!")
    }
    async appleLoginFail(t, r) {
        await Rr("login", t, {
            error: r.error
        });
        const n = r.error;
        n === "popup_closed_by_user" || n === "user_cancelled_authorize" || (console.error("[g123-auth]", r),
        this.commands.showMessage("UNKNOWN", "login", "apple"))
    }
    async appleLinkFail(t, r) {
        await Rr("link", t, {
            error: r.error
        });
        const n = r.error;
        n === "popup_closed_by_user" || n === "user_cancelled_authorize" || (console.error("[g123-auth]", r),
        this.commands.showMessage("UNKNOWN", "link", "apple"))
    }
    async appleLoginSuccess(t, r) {
        try {
            const n = await Rr("login", t, {
                code: r.authorization.code,
                idToken: r.authorization.id_token,
                user: JSON.stringify(r.user)
            });
            if (!n) {
                this.commands.showMessage("NETWORK_TIMEOUT", "login", "apple");
                return
            }
            this.commands.showMessage(n.code, n.kind, "apple"),
            this.commands.reloadSession()
        } catch (n) {
            console.error(n),
            this.commands.showMessage("UNKNOWN", "login", "apple")
        }
    }
    async appleLinkSuccess(t, r) {
        try {
            const n = await Rr("link", t, {
                code: r.authorization.code,
                idToken: r.authorization.id_token,
                user: JSON.stringify(r.user)
            });
            if (!n) {
                this.commands.showMessage("NETWORK_TIMEOUT", "link", "apple");
                return
            }
            this.commands.showMessage(n.code, n.kind, "apple"),
            this.commands.reloadSession()
        } catch (n) {
            console.error(n),
            this.commands.showMessage("UNKNOWN", "link", "apple")
        }
    }
}
class tu {
    startLink(t) {
        ct("facebook", "link", t)
    }
    startLogin(t) {
        ct("facebook", "login", t)
    }
}
function Yp(e) {
    return !!e && "client_id"in e && "scope"in e
}
class Xp {
    constructor(t, r, n) {
        if (this.commands = t,
        this.supportOneTap = !1,
        !Yp(n))
            throw new Error(`config invalid ${n}`);
        this.config = n,
        this.initGoogleSignin()
    }
    startLink(t) {
        if (!google)
            throw new Error("google is undefined");
        this.options = t,
        this.loginType = "link",
        this.supportOneTap ? google.accounts.id.prompt(r => {
            this.supportOneTap = !r.isNotDisplayed() && !r.isSkippedMoment()
        }
        ) : ct("google", "link", t)
    }
    startLogin(t) {
        if (!google)
            throw new Error("google is undefined");
        this.options = t,
        this.loginType = "login",
        this.supportOneTap ? google.accounts.id.prompt(r => {
            this.supportOneTap = !r.isNotDisplayed() && !r.isSkippedMoment()
        }
        ) : ct("google", "login", t)
    }
    async initGoogleSignin() {
        window.onGoogleLibraryLoad = () => {
            google && google.accounts.id.initialize({
                client_id: this.config.client_id,
                callback: this.googleSigninCallback.bind(this),
                auto_select: !1,
                login_uri: this.config.redirect_uri,
                context: "use"
            })
        }
        ,
        await eo("https://accounts.google.com/gsi/client")
    }
    async googleSigninCallback(t) {
        console.info("[GoogleLogin] Receive response", t);
        const {credential: r} = t
          , {loginType: n, options: a} = this;
        if (!n)
            throw new Error("loginType is empty");
        if (!a)
            throw new Error("options is empty");
        this.loginType === "login" ? this.doGoogleLogin(a, r) : this.doGoogleLink(a, r)
    }
    async doGoogleLink(t, r) {
        try {
            const n = await eu("login", t, r);
            if (!n) {
                this.commands.showMessage("NETWORK_TIMEOUT", "link", "google");
                return
            }
            this.commands.showMessage(n.code, n.kind, "google"),
            this.commands.reloadSession()
        } catch (n) {
            console.error(n),
            this.commands.showMessage("UNKNOWN", "link", "google")
        }
    }
    async doGoogleLogin(t, r) {
        try {
            const n = await eu("link", t, r);
            if (!n) {
                this.commands.showMessage("NETWORK_TIMEOUT", "login", "google");
                return
            }
            this.commands.showMessage(n.code, n.kind, "google"),
            this.commands.reloadSession()
        } catch (n) {
            console.error(n),
            this.commands.showMessage("UNKNOWN", "login", "google")
        }
    }
}
const ru = () => /line/i.test(navigator.userAgent);
class nu {
    startLink(t) {
        if (ru()) {
            const r = Qs("link", t);
            r && (window.location.href = r);
            return
        }
        ct("line", "link", t)
    }
    startLogin(t) {
        if (ru()) {
            const r = Qs("login", t);
            r && (window.location.href = r);
            return
        }
        ct("line", "login", t)
    }
}
function vt(e) {
    return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
function nr(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    for (; t.length % 4; )
        t += "=";
    return Uint8Array.from(atob(t), r => r.charCodeAt(0))
}
function Sl() {
    return !!navigator.credentials?.create
}
async function kl() {
    if (!Sl())
        return console.warn("WebAuthn is not supported", navigator.credentials),
        !1;
    try {
        return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
    } catch (e) {
        return console.warn("Failed to check passkey support:", e),
        !1
    }
}
async function Zp() {
    const e = {
        webauthnSupported: Sl(),
        platformAuthenticator: !1,
        conditionalUI: !1
    };
    if (e.webauthnSupported)
        try {
            e.platformAuthenticator = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(),
            "isConditionalMediationAvailable"in PublicKeyCredential && (e.conditionalUI = await PublicKeyCredential.isConditionalMediationAvailable())
        } catch (t) {
            console.warn("Failed to check capabilities:", t)
        }
    return e
}
class Qp {
    constructor(t) {
        this.endpointAuthenticateBegin = t.endpointAuthenticateBegin,
        this.endpointAuthenticateFinish = t.endpointAuthenticateFinish
    }
    async authenticate(t) {
        try {
            if (!await kl())
                throw new Error("Passkey not supported on this device");
            const r = new URL(this.endpointAuthenticateBegin);
            t.appCode && r.searchParams.set("appCode", t.appCode);
            const n = await ee.post(r.href, {}, {
                withCredentials: !0
            })
              , a = n.data.state
              , i = n.data.challenge
              , o = {
                publicKey: {
                    challenge: nr(i.challenge),
                    timeout: i.timeout,
                    rpId: i.rpId,
                    userVerification: i.userVerification,
                    allowCredentials: i.allowCredentials?.map(d => ({
                        ...d,
                        id: nr(d.id)
                    })) || []
                }
            }
              , s = await navigator.credentials.get(o);
            if (!s)
                throw new Error("Failed to get assertion");
            const u = s.response
              , c = {
                credentialId: vt(s.rawId),
                authenticatorData: vt(u.authenticatorData),
                clientDataJSON: vt(u.clientDataJSON),
                signature: vt(u.signature),
                userHandle: u.userHandle ? vt(u.userHandle) : null
            }
              , p = new URL(this.endpointAuthenticateFinish);
            p.searchParams.set("state", a);
            const f = (await ee.post(p.href, c, {
                withCredentials: !0
            })).data;
            return console.log("Authentication successful, session established via cookie"),
            f
        } catch (r) {
            throw console.error("Passkey authentication failed:", r),
            r
        }
    }
}
class eg {
    constructor(t) {
        this.endpointRegisterBegin = t.endpointRegisterBegin,
        this.endpointRegisterFinish = t.endpointRegisterFinish
    }
    async register(t) {
        try {
            if (!await kl())
                throw new Error("Passkey not supported on this device");
            const r = new URL(this.endpointRegisterBegin);
            t.appCode && r.searchParams.set("appCode", t.appCode);
            const n = await ee.post(r.href, {}, {
                withCredentials: !0
            })
              , a = n.data.state
              , i = n.data.challenge
              , o = {
                publicKey: {
                    rp: i.rp,
                    user: {
                        id: nr(i.user.id),
                        name: i.user.name,
                        displayName: i.user.displayName
                    },
                    challenge: nr(i.challenge),
                    pubKeyCredParams: i.pubKeyCredParams,
                    timeout: i.timeout,
                    attestation: i.attestation,
                    authenticatorSelection: {
                        authenticatorAttachment: i.authenticatorSelection.authenticatorAttachment,
                        requireResidentKey: i.authenticatorSelection.requireResidentKey,
                        userVerification: i.authenticatorSelection.userVerification
                    },
                    excludeCredentials: i.excludeCredentials?.map(f => ({
                        ...f,
                        id: nr(f.id)
                    })) || []
                }
            }
              , s = await navigator.credentials.create(o);
            if (!s)
                throw new Error("Failed to create credential");
            const u = s.response
              , c = {
                credentialId: s.id,
                attestationObject: vt(u.attestationObject),
                clientDataJSON: vt(u.clientDataJSON)
            }
              , p = new URL(this.endpointRegisterFinish);
            return p.searchParams.set("state", a),
            (await ee.post(p.href, c, {
                withCredentials: !0
            })).data
        } catch (r) {
            throw console.error("Passkey registration failed:", r),
            r
        }
    }
}
const et = "passkey";
function au(e) {
    if (!(e instanceof Error))
        return null;
    switch (e.name) {
    case "NotAllowedError":
        return "PASSKEY_USER_REJECTED_OR_TIMEOUT";
    case "InvalidStateError":
        return "PASSKEY_INVALID_STATE";
    case "NotSupportedError":
        return "PASSKEY_OPERATION_NOT_SUPPORTED";
    case "SecurityError":
        return "PASSKEY_SECURITY_ERROR";
    case "AbortError":
        return "PASSKEY_OPERATION_ABORTED";
    case "ConstraintError":
        return "PASSKEY_CONSTRAINT_ERROR";
    case "DataError":
        return "PASSKEY_DATA_ERROR";
    case "UnknownError":
        return "PASSKEY_UNKNOWN_ERROR";
    case "NetworkError":
        return "PASSKEY_NETWORK_ERROR";
    default:
        return null
    }
}
async function iu() {
    const e = await Zp();
    return e.webauthnSupported ? e.platformAuthenticator ? "" : "PASSKEY_NOT_PLATFORM_AUTHENTICATOR" : "PASSKEY_NOT_SUPPORTED"
}
class tg {
    constructor(t, r) {
        this.commands = t,
        this.authentication = new Qp({
            endpointAuthenticateBegin: `${r}/api/v1/oauth/passkey/login`,
            endpointAuthenticateFinish: `${r}/api/v1/oauth/passkey/callback`
        }),
        this.registration = new eg({
            endpointRegisterBegin: `${r}/api/v1/oauth/passkey/link`,
            endpointRegisterFinish: `${r}/api/v1/oauth/passkey/callback`
        })
    }
    startLink(t) {
        if (console.info("[PASSKEY] startLink", t),
        this.commands.isLinked(et)) {
            this.commands.showMessage("CREATE_LINK_SNS_ALREADY_LINKED", "link", et);
            return
        }
        (async () => {
            const n = await iu();
            if (n) {
                this.commands.showMessage(n, "link", et);
                return
            }
            try {
                const a = await this.registration.register(t);
                if (this.commands.showMessage(a.code, a.kind, et),
                a.code === "VALIDATE_SUCCESS") {
                    this.commands.reloadSession();
                    return
                }
            } catch (a) {
                const i = au(a);
                console.error("[PASSKEY] Link failed", a),
                this.commands.showMessage(i || "UNKNOWN", "link", et)
            }
        }
        )()
    }
    startLogin(t) {
        console.info("[PASSKEY] startLogin", t),
        (async () => {
            try {
                const r = await iu();
                if (r) {
                    this.commands.showMessage(r, "login", et);
                    return
                }
                const n = await this.authentication.authenticate(t);
                if (this.commands.showMessage(n.code, n.kind, et),
                n.code === "VALIDATE_SUCCESS") {
                    this.commands.reloadSession();
                    return
                }
            } catch (r) {
                const n = au(r);
                console.error("[PASSKEY] Login failed", r),
                this.commands.showMessage(n || "UNKNOWN", "login", et)
            }
        }
        )()
    }
}
class ou {
    startLink(t) {
        ct("twitter", "link", t)
    }
    startLogin(t) {
        ct("twitter", "login", t)
    }
}
const Cr = {
    passkey: "Passkey",
    facebook: "Facebook",
    twitter: "Twitter",
    google: "Google",
    apple: "Apple",
    line: "Line",
    facebook_message: "Facebook",
    discord_message: "Discord",
    whatsapp_message: "WhatsApp",
    line_message: "Line",
    kakao_message: "KakaoTalk",
    im: "IM"
}
  , rg = ["facebook", "twitter", "google", "apple", "line", "passkey"];
function ng(e, t, r, n) {
    let a = "success", i;
    const o = n === "im" || n?.endsWith("_message");
    switch (t) {
    case "PASSKEY_NOT_SUPPORTED":
        a = "warning",
        i = e.t("common.account.sdk.passkey.not_supported");
        break;
    case "PASSKEY_NOT_PLATFORM_AUTHENTICATOR":
        a = "warning",
        i = e.t("common.account.sdk.passkey.not_platform_authenticator");
        break;
    case "PASSKEY_USER_REJECTED_OR_TIMEOUT":
        a = "warning",
        i = e.t("common.account.sdk.passkey.user_rejected_or_timeout");
        break;
    case "PASSKEY_INVALID_STATE":
        a = "error",
        i = e.t("common.account.sdk.passkey.invalid_state");
        break;
    case "PASSKEY_OPERATION_NOT_SUPPORTED":
        a = "error",
        i = e.t("common.account.sdk.passkey.operation_not_supported");
        break;
    case "PASSKEY_SECURITY_ERROR":
        a = "error",
        i = e.t("common.account.sdk.passkey.security_error");
        break;
    case "PASSKEY_OPERATION_ABORTED":
        a = "warning",
        i = e.t("common.account.sdk.passkey.operation_aborted");
        break;
    case "PASSKEY_CONSTRAINT_ERROR":
        a = "error",
        i = e.t("common.account.sdk.passkey.constraint_error");
        break;
    case "PASSKEY_DATA_ERROR":
        a = "error",
        i = e.t("common.account.sdk.passkey.data_error");
        break;
    case "PASSKEY_UNKNOWN_ERROR":
        a = "error",
        i = e.t("common.account.sdk.passkey.unknown_error");
        break;
    case "PASSKEY_NETWORK_ERROR":
        a = "error",
        i = e.t("common.account.sdk.passkey.network_error");
        break;
    case "VALIDATE_LOGIN_NOT_LINKED":
        a = "warning",
        i = e.t("common.account.sdk.login.not_linked");
        break;
    case "CREATE_LINK_SNS_ALREADY_LINKED":
        a = "warning",
        i = e.t("common.account.sdk.links.create_link_sns_already_linked", {
            providerName: n && n in Cr ? Cr[n] : "SNS"
        });
        break;
    case "VALIDATE_LINK_ALREADY_LINKED":
        a = "warning",
        i = e.t("common.account.sdk.links.already_link_others", {
            providerName: n && n in Cr ? Cr[n] : "SNS"
        });
        break;
    case "VALIDATE_SUCCESS":
        r === "login" ? i = e.t("common.account.login.success") : r === "link" || r === "silent_link" ? i = e.t("common.account.links.success") : i = e.t("common.account.sdk.authentication_success");
        break;
    case "VALIDATE_TOKEN_NOT_FOUND":
        i = o ? e.t("common.account.sdk.imlink.validate_token_not_found") : e.t("common.account.sdk.error", {
            code: t
        });
        break;
    case "VALIDATE_BAD_CREDENTIAL":
        r === "login" ? i = e.t("common.account.sdk.login.bad_credential") : i = e.t("common.account.sdk.links.bad_credential");
        break;
    case "VALIDATE_OAUTH_ERROR":
    case "VALIDATE_TOKEN_EMPTY":
    case "VALIDATE_STATUS_INVALID":
    case "VALIDATE_PROVIDER_NOT_MATCH":
    case "VALIDATE_TIMEOUT":
    default:
        a = "error",
        i = e.t("common.account.sdk.error", {
            code: t
        });
        break
    }
    return {
        level: a,
        message: i
    }
}
const ag = {
    mode: "hidden",
    providerConfig: {},
    notification: {
        status: "close"
    }
};
function ig(e) {
    return typeof e == "string" && rg.includes(e)
}
const se = te({
    name: "auth",
    initialState: ag,
    reducers: {
        initConfig: (e, t) => {
            e.config = t.payload
        }
        ,
        showLogin: e => {
            e.mode = "login",
            e.notification = {
                status: "close"
            }
        }
        ,
        showLink: e => {
            e.mode = "silent_link",
            e.notification = {
                status: "close"
            }
        }
        ,
        showLinkWithoutUI: e => {
            e.mode = "silent_link",
            e.notification = {
                status: "close"
            }
        }
        ,
        closeDialog: e => {
            e.mode = "hidden",
            e.notification = {
                status: "close"
            }
        }
        ,
        sessionUpdated: (e, t) => {
            const {code: r, user: n} = t.payload
              , a = t.payload.providers.map(i => i.toLowerCase()).sort().filter(ig);
            e.user ? (e.user.userId = n.id,
            e.user.image = n.image,
            e.user.displayName = n.displayName,
            e.user.created = n.created,
            e.user.code = r,
            JSON.stringify(e.user.providers) !== JSON.stringify(a) && (e.user.providers = a)) : e.user = {
                userId: n.id,
                image: n.image,
                displayName: n.displayName,
                created: n.created,
                code: r,
                providers: a
            }
        }
        ,
        authConfigUpdated: (e, t) => {
            e.providerConfig = t.payload
        }
        ,
        showNotifier: (e, t) => {
            const {code: r, kind: n, providerType: a} = t.payload
              , i = ng(op(), r, n, a);
            let o = "open";
            const {message: s} = i;
            e.mode === "silent_link" && (o = "close"),
            e.notification = {
                status: o,
                kind: n,
                code: r,
                message: s,
                level: i.level
            }
        }
        ,
        dismissNotifier: e => {
            e.notification = {
                status: "close"
            }
        }
    }
})
  , ar = e => async (t, r) => {
    let n;
    if (e && (n = await e),
    !n) {
        const a = r().config?.appId;
        if (!a)
            throw new Error(`[g123-auth] state.config.appId is ${a}`);
        const i = r().user?.code;
        n = await Hp(a, i)
    }
    if (!n)
        throw new Error("[g123-auth] reloadSession failed");
    return t(se.actions.sessionUpdated(n)),
    n
}
  , og = () => (e, t, {providers: r}) => {
    if (t().providerConfig && Object.keys(t().providerConfig).length > 1)
        return;
    const n = {
        hide: () => {
            e(se.actions.closeDialog())
        }
        ,
        reloadSession: () => {
            e(ar())
        }
        ,
        showMessage: (a, i, o) => {
            e(se.actions.showNotifier({
                code: a,
                kind: i,
                providerType: o
            })),
            setTimeout( () => {
                e(se.actions.dismissNotifier())
            }
            )
        }
        ,
        isLinked: a => !!t().user?.providers?.includes(a)
    };
    r.passkey = new tg(n,Ft),
    r.twitter = new ou,
    r.line = new nu,
    r.facebook = new tu,
    Kp().then(a => {
        e(se.actions.authConfigUpdated(a));
        const {providerConfig: i} = t();
        if (!i)
            throw new Error(`providerConfig is ${i}`);
        const o = t().config?.appId || "";
        r.twitter = new ou,
        r.line = new nu,
        i.apple && (r.apple = new Jp(n,i.apple)),
        r.facebook = new tu,
        i.google && (r.google = new Xp(n,o,i.google))
    }
    )
}
  , su = (e, t) => (r, n, {providers: a}) => {
    const i = n()
      , {mode: o} = i
      , s = {
        ...t || {}
    };
    if (s.appCode || (s.appCode = i.config?.appId),
    s.redirectUri || (s.redirectUri = i.config?.redirectUri),
    o === "link" || o === "silent_link")
        a[e]?.startLink(s);
    else if (o === "login")
        a[e]?.startLogin(s);
    else
        throw new Error(`Unknown mode: ${o}`);
    r(ar())
}
;
Zi({
    reducer: se.reducer,
    middleware: e => e({
        thunk: {
            extraArgument: {
                providers: {}
            }
        }
    })
});
function sg() {
    return Zi({
        reducer: se.reducer,
        middleware: e => e({
            thunk: {
                extraArgument: {
                    providers: {}
                }
            }
        })
    })
}
function ug(e) {
    return typeof e == "object" && !!e && "type"in e && e.type === "G123_AUTH_RESPONSE"
}
function cg(e) {
    if (!e?.config?.appId)
        throw new Error("[g123-auth] config.appId is required");
    if (typeof e?.onAuthStateChanged != "function")
        throw new Error("[g123-auth] onAuthStateChanged is required")
}
let uu;
class lg {
    constructor(t) {
        cg(t),
        this.store = sg();
        let r = this.store.getState();
        this.store.subscribe( () => {
            const n = this.store.getState();
            if (r.user !== n.user && (t.onAuthStateChanged(n.user, r.user),
            sp(t, n.user?.code)),
            n.notification.level && n.notification.message && (n.notification.level !== r.notification.level || n.notification.message !== r.notification.message))
                try {
                    const i = {
                        kind: n.mode === "silent_link" ? "silent_link" : n.notification.kind,
                        code: n.notification.code || "UNKNOWN",
                        level: n.notification.level,
                        message: n.notification.message
                    }
                      , o = new CustomEvent("authResultMessage",{
                        detail: i
                    });
                    window.dispatchEvent(o),
                    t.onAuthResult && t.onAuthResult(i)
                } catch (a) {
                    console.error(a)
                }
            r = n
        }
        ),
        this.store.dispatch(se.actions.initConfig(t.config)),
        this.session = this.store.dispatch(ar(t.prefetch)),
        this.store.dispatch(og()),
        t.config.disableAuthRefresh || (document.addEventListener("visibilitychange", () => {
            document.visibilityState && document.visibilityState !== "visible" || (this.reload(),
            console.log("[g123-auth] reloadSession by visibilitychange"))
        }
        ),
        window.addEventListener("message", n => {
            const {data: a} = n;
            if (!ug(a))
                return;
            setTimeout( () => {
                this.store.dispatch(ar())
            }
            , 1e3);
            const i = n.source;
            i.close ? i.close() : a.redirectTo && (i.location.href = a.redirectTo),
            a.kind === "login" && a.code === "VALIDATE_SUCCESS" && this.store.dispatch(se.actions.closeDialog()),
            this.store.dispatch(se.actions.showNotifier({
                code: a.code,
                kind: a.kind,
                providerType: a.providerType
            })),
            setTimeout( () => {
                this.store.dispatch(se.actions.dismissNotifier())
            }
            )
        }
        , !1),
        clearInterval(uu),
        uu = setInterval( () => {
            this.reload(),
            console.log("[g123-auth] reloadSession by interval")
        }
        , 3e5))
    }
    login(t, r) {
        this.store.dispatch(se.actions.showLogin()),
        t && this.store.dispatch(su(t, r))
    }
    link(t, r) {
        this.store.dispatch(se.actions.showLinkWithoutUI()),
        t && this.store.dispatch(su(t, r))
    }
    reload() {
        return this.session = this.store.dispatch(ar()),
        this.session
    }
    currentUser() {
        return this.store.getState().user
    }
    currentSession() {
        return this.session
    }
}
function Ol(e) {
    return new lg(e)
}
function fg() {
    window.initG123Auth = window.initG123Auth || Ol,
    _e( () => import("./game-b99b5d94-DRbRlkRo.js"), __vite__mapDeps([0, 1])).then(e => {
        e.addEncryptedDomainKey()
    }
    ).catch(e => {
        console.error(e)
    }
    )
}
fg();
const dg = "ERROR_BLOCKED_USER"
  , xe = window.__game_process_env__;
window.__game_process_env__ = void 0;
const pg = dg;
let Ke;
const ki = new Map;
function Y_(e) {
    return Ke || (Ke = Ol(e),
    Ke.currentSession().then(t => {
        Ke && !ki.has(Ke) && ki.set(Ke, t)
    }
    )),
    Ke
}
function fr() {
    if (!Ke)
        throw new Error("Auth is not initialized");
    return Ke
}
function X_(e) {
    return ki.get(e)
}
function Z_() {
    const e = fr().currentUser();
    return e && e.providers.length < 1 || !1
}
const gg = dl(e => {
    if (!e)
        return null;
    const t = e.split(".");
    if (t.length !== 3)
        return null;
    try {
        return {
            country: "JP",
            region: "JP",
            lang: "ja",
            currency: "JPY",
            ...JSON.parse(atob(t[1]))
        }
    } catch (r) {
        return console.error(r),
        null
    }
}
);
async function Gt() {
    const t = await fr().currentSession();
    if (!t)
        throw new Error("Session is unavailable");
    const {code: r} = t;
    if (r === pg)
        throw new Error("Blocked");
    const n = gg(r);
    if (!n)
        throw new Error("Code is unavailable");
    return n
}
async function Q_(e) {
    const {data: {verification_required: t, verified: r}} = await ee.get(`${xe.SHD_G123_GAME_URL}/api/v1/age_verification`, {
        params: {
            appCode: e
        }
    });
    return {
        verificationRequired: t,
        verified: r
    }
}
async function ey(e) {
    await ee.post(`${xe.SHD_G123_GAME_URL}/api/v1/age_verification?appCode=${e}`, {}, {
        withCredentials: !0
    })
}
const xl = ee.create({
    baseURL: window.option?.runEnv === "production" ? "https://data-fireman.g123.jp" : "https://data-fireman.stg.g123.jp"
});
async function hg(e) {
    await xl.post("/v1/conversion_event/pre_process/cr", e, {
        withCredentials: !0
    })
}
async function mg(e) {
    await xl.post("/v1/conversion_event/pre_process/pm", e, {
        withCredentials: !0
    })
}
const vg = {
    gbuttonTheme: "arena",
    gameLoginOrRegisterAt: 0,
    isSupportedDevice: !0
}
  , Br = te({
    name: "app",
    initialState: vg,
    reducers: {
        setGbuttonTheme: (e, t) => {
            e.gbuttonTheme !== t.payload.gbuttonTheme && (e.gbuttonTheme = t.payload.gbuttonTheme)
        }
        ,
        setGameLoginOrRegisterAt: (e, t) => {
            e.gameLoginOrRegisterAt || (e.gameLoginOrRegisterAt = t.payload.gameLoginOrRegisterAt)
        }
        ,
        setIsSupportedDevice: (e, t) => {
            e.isSupportedDevice = t.payload
        }
    }
})
  , {setGameLoginOrRegisterAt: ty, setIsSupportedDevice: ry} = Br.actions
  , _g = () => e => {
    new URL(window.location.href).searchParams.get("utm_source") === "exoclick" && e(Br.actions.setGbuttonTheme({
        gbuttonTheme: "default"
    })),
    window.option.appId === "doraemon" && e(Br.actions.setGbuttonTheme({
        gbuttonTheme: "default"
    }))
}
  , yg = {
    status: "close",
    blocked: !1
}
  , Pl = te({
    name: "blockedUserDialog",
    initialState: yg,
    reducers: {
        showDialog(e) {
            e.status = "open",
            e.blocked = !0
        },
        hideDialog(e) {
            e.status = "close"
        }
    }
})
  , {showDialog: ny} = Pl.actions
  , bg = {
    status: "close"
}
  , El = te({
    name: "koreanR18Confirm",
    initialState: bg,
    reducers: {
        showDialog(e) {
            e.status = "open"
        },
        hideDialog(e) {
            e.status = "close"
        }
    }
})
  , {showDialog: ay} = El.actions;
var wg = (e => (e.Recommends = "Recommends",
e.Service = "Service",
e.Login = "Login",
e.Recovery = "Recovery",
e.Install = "Install",
e.Link = "Link",
e.Settings = "Settings",
e.Terms = "Terms",
e.QRCode = "QRCode",
e))(wg || {});
const Sg = {
    currentAppInfo: null,
    currentRoute: "Recommends",
    recommendGames: null,
    hotGameCodes: [],
    newGameCodes: [],
    preregists: null,
    authProviders: [],
    isOpen: !1,
    isGuestClicked: !1,
    vipRank: 0
}
  , Al = te({
    name: "mainPopup",
    initialState: Sg,
    reducers: {
        toggleMainPopup(e, t) {
            e.isOpen = t.payload.isOpen
        },
        switchMainPopupRoute(e, t) {
            e.currentRoute = t.payload.tab
        },
        setIsGuestClicked(e, t) {
            e.isGuestClicked = t.payload.clicked
        },
        updateCurrentAppInfo(e, t) {
            e.currentAppInfo = t.payload.appInfo
        },
        updateRecommendGames(e, t) {
            e.recommendGames = t.payload.recommendGames
        },
        updateHotGameCodes(e, t) {
            e.hotGameCodes = t.payload.hotGameCodes
        },
        updateNewGameCodes(e, t) {
            e.newGameCodes = t.payload.newGameCodes
        },
        updatePreregists(e, t) {
            e.preregists = t.payload.preregists
        },
        updateAuthProviders(e, t) {
            e.authProviders = t.payload.authProviders
        },
        updateVipRank(e, t) {
            e.vipRank = t.payload.vipRank
        }
    }
})
  , {toggleMainPopup: iy} = Al.actions
  , kg = {
    cookieEnabled: !0
}
  , Rl = te({
    name: "privacy",
    initialState: kg,
    reducers: {
        setCookieEnabled(e, t) {
            e.cookieEnabled = t.payload.cookieEnabled
        }
    }
})
  , {setCookieEnabled: oy} = Rl.actions
  , Og = {
    isUnread: !1
}
  , Cl = te({
    name: "cs",
    initialState: Og,
    reducers: {
        setIsUnread: (e, t) => {
            e.isUnread = t.payload.isUnread
        }
    }
})
  , {setIsUnread: sy} = Cl.actions
  , xg = {
    gameTranslatorVisible: !1
}
  , Tl = te({
    name: "dialog",
    initialState: xg,
    reducers: {
        showGameTranslatorDialog: e => {
            e.gameTranslatorVisible = !0
        }
        ,
        hideGameTranslatorDialog: e => {
            e.gameTranslatorVisible = !1
        }
    }
})
  , {showGameTranslatorDialog: uy, hideGameTranslatorDialog: cy} = Tl.actions;
function cu() {
    throw new Error("undefined")
}
function Pg() {
    let e = cu
      , t = cu;
    const r = new Promise( (n, a) => {
        e = n,
        t = a
    }
    );
    return {
        resolve: e,
        reject: t,
        promise: r
    }
}
const Eg = {
    instance: Pg(),
    initialized: !1
};
function to() {
    return Eg.instance.promise
}
function ly() {
    to().then(e => {
        if (!e) {
            console.error("[MA Auxin Listener][sendGButtonClickedAuxinEvent] not initialized");
            return
        }
        window.top?.postMessage({
            type: "auxin_g_button_clicked"
        }, "*")
    }
    )
}
function Ag(e) {
    to().then(t => {
        if (!t) {
            console.error("[MA Auxin Listener][sendLevelUpAuxinEvent] not initialized");
            return
        }
        window.top?.postMessage({
            type: "auxin_level_up",
            body: {
                level: e
            }
        }, "*")
    }
    )
}
window.addEventListener("message", e => {
    e.data?.type === "auxin_pwa_first_launch" && console.log("[MA Auxin Listener] Received auxin_pwa_first_launch event")
}
);
function fy() {
    to().then(e => {
        if (!e) {
            console.error("[MA Auxin Listener][sendPwaFirstLaunchAuxinEvent] not initialized");
            return
        }
        console.log("[MA Auxin Listener][sendPwaFirstLaunchAuxinEvent] send event"),
        setTimeout( () => {
            window.top?.postMessage({
                type: "auxin_pwa_first_launch"
            }, "*")
        }
        , 5e3)
    }
    )
}
function Rg(e, t, r, n, a) {
    for (t = t.split ? t.split(".") : t,
    n = 0; n < t.length; n++)
        e = e ? e[t[n]] : a;
    return e === a ? r : e
}
var er = {
    exports: {}
}, Cg = er.exports, lu;
function Tg() {
    return lu || (lu = 1,
    function(e, t) {
        (function(r, n) {
            var a = "1.0.40"
              , i = ""
              , o = "?"
              , s = "function"
              , u = "undefined"
              , c = "object"
              , p = "string"
              , l = "major"
              , f = "model"
              , d = "name"
              , g = "type"
              , h = "vendor"
              , m = "version"
              , v = "architecture"
              , _ = "console"
              , b = "mobile"
              , y = "tablet"
              , w = "smarttv"
              , k = "wearable"
              , O = "embedded"
              , S = 500
              , R = "Amazon"
              , L = "Apple"
              , E = "ASUS"
              , U = "BlackBerry"
              , W = "Browser"
              , X = "Chrome"
              , re = "Edge"
              , J = "Firefox"
              , Z = "Google"
              , A = "Huawei"
              , Ee = "LG"
              , Ze = "Microsoft"
              , pe = "Motorola"
              , ge = "Opera"
              , K = "Samsung"
              , B = "Sharp"
              , ce = "Sony"
              , le = "Xiaomi"
              , q = "Zebra"
              , Fe = "Facebook"
              , Ae = "Chromium OS"
              , he = "Mac OS"
              , oe = " Browser"
              , Re = function(D, M) {
                var I = {};
                for (var G in D)
                    M[G] && M[G].length % 2 === 0 ? I[G] = M[G].concat(D[G]) : I[G] = D[G];
                return I
            }
              , gt = function(D) {
                for (var M = {}, I = 0; I < D.length; I++)
                    M[D[I].toUpperCase()] = D[I];
                return M
            }
              , Wt = function(D, M) {
                return typeof D === p ? Ot(M).indexOf(Ot(D)) !== -1 : !1
            }
              , Ot = function(D) {
                return D.toLowerCase()
            }
              , Bf = function(D) {
                return typeof D === p ? D.replace(/[^\d\.]/g, i).split(".")[0] : n
            }
              , pn = function(D, M) {
                if (typeof D === p)
                    return D = D.replace(/^\s\s*/, i),
                    typeof M === u ? D : D.substring(0, S)
            }
              , Jt = function(D, M) {
                for (var I = 0, G, Ge, Ce, $, C, Te; I < M.length && !C; ) {
                    var gn = M[I]
                      , Ao = M[I + 1];
                    for (G = Ge = 0; G < gn.length && !C && gn[G]; )
                        if (C = gn[G++].exec(D),
                        C)
                            for (Ce = 0; Ce < Ao.length; Ce++)
                                Te = C[++Ge],
                                $ = Ao[Ce],
                                typeof $ === c && $.length > 0 ? $.length === 2 ? typeof $[1] == s ? this[$[0]] = $[1].call(this, Te) : this[$[0]] = $[1] : $.length === 3 ? typeof $[1] === s && !($[1].exec && $[1].test) ? this[$[0]] = Te ? $[1].call(this, Te, $[2]) : n : this[$[0]] = Te ? Te.replace($[1], $[2]) : n : $.length === 4 && (this[$[0]] = Te ? $[3].call(this, Te.replace($[1], $[2])) : n) : this[$] = Te || n;
                    I += 2
                }
            }
              , Or = function(D, M) {
                for (var I in M)
                    if (typeof M[I] === c && M[I].length > 0) {
                        for (var G = 0; G < M[I].length; G++)
                            if (Wt(M[I][G], D))
                                return I === o ? n : I
                    } else if (Wt(M[I], D))
                        return I === o ? n : I;
                return M.hasOwnProperty("*") ? M["*"] : D
            }
              , Wf = {
                "1.0": "/8",
                "1.2": "/1",
                "1.3": "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }
              , Po = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            }
              , Eo = {
                browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, m], [/opios[\/ ]+([\w\.]+)/i], [m, [d, ge + " Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], [m, [d, ge + " GX"]], [/\bopr\/([\w\.]+)/i], [m, [d, ge]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], [m, [d, "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], [m, [d, "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [d, m], [/quark(?:pc)?\/([-\w\.]+)/i], [m, [d, "Quark"]], [/\bddg\/([\w\.]+)/i], [m, [d, "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [d, "UC" + W]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], [m, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [d, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [d, "Yandex"]], [/slbrowser\/([\w\.]+)/i], [m, [d, "Smart Lenovo " + W]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure " + W], m], [/\bfocus\/([\w\.]+)/i], [m, [d, J + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [d, ge + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [d, ge + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [d, "MIUI" + oe]], [/fxios\/([\w\.-]+)/i], [m, [d, J]], [/\bqihoobrowser\/?([\w\.]*)/i], [m, [d, "360"]], [/\b(qq)\/([\w\.]+)/i], [[d, /(.+)/, "$1Browser"], m], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1" + oe], m], [/samsungbrowser\/([\w\.]+)/i], [m, [d, K + " Internet"]], [/metasr[\/ ]?([\d\.]+)/i], [m, [d, "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [[d, "Sogou Mobile"], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], [d, m], [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i], [d], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], [m, d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, Fe], m], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i], [d, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [d, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [d, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [d, X + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, X + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [d, "Android " + W]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [d, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [m, Or, Wf]], [/(webkit|khtml)\/([\w\.]+)/i], [d, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], m], [/(wolvic|librewolf)\/([\w\.]+)/i], [d, m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [d, J + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [d, [m, /_/g, "."]], [/(cobalt)\/([\w\.]+)/i], [d, [m, /master.|lts./, ""]]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, Ot]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[v, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[v, "armhf"]], [/windows (ce|mobile); ppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[v, /ower/, i, Ot]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[v, Ot]]],
                device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [f, [h, K], [g, y]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], [f, [h, K], [g, b]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [f, [h, L], [g, b]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [f, [h, L], [g, y]], [/(macintosh);/i], [f, [h, L]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [f, [h, B], [g, b]], [/(?:honor)([-\w ]+)[;\)]/i], [f, [h, "Honor"], [g, b]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [f, [h, A], [g, y]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [f, [h, A], [g, b]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [[f, /_/g, " "], [h, le], [g, b]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[f, /_/g, " "], [h, le], [g, y]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [f, [h, "OPPO"], [g, b]], [/\b(opd2\d{3}a?) bui/i], [f, [h, "OPPO"], [g, y]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [f, [h, "Vivo"], [g, b]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], [f, [h, "Realme"], [g, b]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [f, [h, pe], [g, b]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [f, [h, pe], [g, y]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [f, [h, Ee], [g, y]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [f, [h, Ee], [g, b]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [f, [h, "Lenovo"], [g, y]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[f, /_/g, " "], [h, "Nokia"], [g, b]], [/(pixel c)\b/i], [f, [h, Z], [g, y]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [f, [h, Z], [g, b]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [f, [h, ce], [g, b]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[f, "Xperia Tablet"], [h, ce], [g, y]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [f, [h, "OnePlus"], [g, b]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [f, [h, R], [g, y]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[f, /(.+)/g, "Fire Phone $1"], [h, R], [g, b]], [/(playbook);[-\w\),; ]+(rim)/i], [f, h, [g, y]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [f, [h, U], [g, b]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [f, [h, E], [g, y]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [f, [h, E], [g, b]], [/(nexus 9)/i], [f, [h, "HTC"], [g, y]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [h, [f, /_/g, " "], [g, b]], [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i], [f, [h, "TCL"], [g, y]], [/(itel) ((\w+))/i], [[h, Ot], f, [g, Or, {
                    tablet: ["p10001l", "w7001"],
                    "*": "mobile"
                }]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [f, [h, "Acer"], [g, y]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [f, [h, "Meizu"], [g, b]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], [f, [h, "Ulefone"], [g, b]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], [f, [h, "Energizer"], [g, b]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], [f, [h, "Cat"], [g, b]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], [f, [h, "Smartfren"], [g, b]], [/droid.+; (a(?:015|06[35]|142p?))/i], [f, [h, "Nothing"], [g, b]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, f, [g, b]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, f, [g, y]], [/(surface duo)/i], [f, [h, Ze], [g, y]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [f, [h, "Fairphone"], [g, b]], [/(u304aa)/i], [f, [h, "AT&T"], [g, b]], [/\bsie-(\w*)/i], [f, [h, "Siemens"], [g, b]], [/\b(rct\w+) b/i], [f, [h, "RCA"], [g, y]], [/\b(venue[\d ]{2,7}) b/i], [f, [h, "Dell"], [g, y]], [/\b(q(?:mv|ta)\w+) b/i], [f, [h, "Verizon"], [g, y]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [f, [h, "Barnes & Noble"], [g, y]], [/\b(tm\d{3}\w+) b/i], [f, [h, "NuVision"], [g, y]], [/\b(k88) b/i], [f, [h, "ZTE"], [g, y]], [/\b(nx\d{3}j) b/i], [f, [h, "ZTE"], [g, b]], [/\b(gen\d{3}) b.+49h/i], [f, [h, "Swiss"], [g, b]], [/\b(zur\d{3}) b/i], [f, [h, "Swiss"], [g, y]], [/\b((zeki)?tb.*\b) b/i], [f, [h, "Zeki"], [g, y]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], f, [g, y]], [/\b(ns-?\w{0,9}) b/i], [f, [h, "Insignia"], [g, y]], [/\b((nxa|next)-?\w{0,9}) b/i], [f, [h, "NextBook"], [g, y]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], f, [g, b]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], f, [g, b]], [/\b(ph-1) /i], [f, [h, "Essential"], [g, b]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [f, [h, "Envizen"], [g, y]], [/\b(trio[-\w\. ]+) b/i], [f, [h, "MachSpeed"], [g, y]], [/\btu_(1491) b/i], [f, [h, "Rotor"], [g, y]], [/(shield[\w ]+) b/i], [f, [h, "Nvidia"], [g, y]], [/(sprint) (\w+)/i], [h, f, [g, b]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [h, Ze], [g, b]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [f, [h, q], [g, y]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [f, [h, q], [g, b]], [/smart-tv.+(samsung)/i], [h, [g, w]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [h, K], [g, w]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, Ee], [g, w]], [/(apple) ?tv/i], [h, [f, L + " TV"], [g, w]], [/crkey/i], [[f, X + "cast"], [h, Z], [g, w]], [/droid.+aft(\w+)( bui|\))/i], [f, [h, R], [g, w]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [f, [h, B], [g, w]], [/(bravia[\w ]+)( bui|\))/i], [f, [h, ce], [g, w]], [/(mitv-\w{5}) bui/i], [f, [h, le], [g, w]], [/Hbbtv.*(technisat) (.*);/i], [h, f, [g, w]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[h, pn], [f, pn], [g, w]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[g, w]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, f, [g, _]], [/droid.+; (shield) bui/i], [f, [h, "Nvidia"], [g, _]], [/(playstation [345portablevi]+)/i], [f, [h, ce], [g, _]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [f, [h, Ze], [g, _]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], [f, [h, K], [g, k]], [/((pebble))app/i], [h, f, [g, k]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [f, [h, L], [g, k]], [/droid.+; (glass) \d/i], [f, [h, Z], [g, k]], [/droid.+; (wt63?0{2,3})\)/i], [f, [h, q], [g, k]], [/droid.+; (glass) \d/i], [f, [h, Z], [g, k]], [/(pico) (4|neo3(?: link|pro)?)/i], [h, f, [g, k]], [/; (quest( \d| pro)?)/i], [f, [h, Fe], [g, k]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [g, O]], [/(aeobc)\b/i], [f, [h, R], [g, O]], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], [f, [g, b]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [f, [g, y]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[g, y]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[g, b]], [/(android[-\w\. ]{0,9});.+buil/i], [f, [h, "Generic"]]],
                engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [d, re + "HTML"]], [/(arkweb)\/([\w\.]+)/i], [d, m], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [d, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, d]],
                os: [[/microsoft (windows) (vista|xp)/i], [d, m], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], [d, [m, Or, Po]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, Or, Po], [d, "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, he], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, m], [/\(bb(10);/i], [m, [d, U]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [d, J + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [d, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [d, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [d, X + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[d, Ae], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, m], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [d, m]]
            }
              , me = function(D, M) {
                if (typeof D === c && (M = D,
                D = n),
                !(this instanceof me))
                    return new me(D,M).getResult();
                var I = typeof r !== u && r.navigator ? r.navigator : n
                  , G = D || (I && I.userAgent ? I.userAgent : i)
                  , Ge = I && I.userAgentData ? I.userAgentData : n
                  , Ce = M ? Re(Eo, M) : Eo
                  , $ = I && I.userAgent == G;
                return this.getBrowser = function() {
                    var C = {};
                    return C[d] = n,
                    C[m] = n,
                    Jt.call(C, G, Ce.browser),
                    C[l] = Bf(C[m]),
                    $ && I && I.brave && typeof I.brave.isBrave == s && (C[d] = "Brave"),
                    C
                }
                ,
                this.getCPU = function() {
                    var C = {};
                    return C[v] = n,
                    Jt.call(C, G, Ce.cpu),
                    C
                }
                ,
                this.getDevice = function() {
                    var C = {};
                    return C[h] = n,
                    C[f] = n,
                    C[g] = n,
                    Jt.call(C, G, Ce.device),
                    $ && !C[g] && Ge && Ge.mobile && (C[g] = b),
                    $ && C[f] == "Macintosh" && I && typeof I.standalone !== u && I.maxTouchPoints && I.maxTouchPoints > 2 && (C[f] = "iPad",
                    C[g] = y),
                    C
                }
                ,
                this.getEngine = function() {
                    var C = {};
                    return C[d] = n,
                    C[m] = n,
                    Jt.call(C, G, Ce.engine),
                    C
                }
                ,
                this.getOS = function() {
                    var C = {};
                    return C[d] = n,
                    C[m] = n,
                    Jt.call(C, G, Ce.os),
                    $ && !C[d] && Ge && Ge.platform && Ge.platform != "Unknown" && (C[d] = Ge.platform.replace(/chrome os/i, Ae).replace(/macos/i, he)),
                    C
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return G
                }
                ,
                this.setUA = function(C) {
                    return G = typeof C === p && C.length > S ? pn(C, S) : C,
                    this
                }
                ,
                this.setUA(G),
                this
            };
            me.VERSION = a,
            me.BROWSER = gt([d, m, l]),
            me.CPU = gt([v]),
            me.DEVICE = gt([f, h, g, _, b, w, y, k, O]),
            me.ENGINE = me.OS = gt([d, m]),
            e.exports && (t = e.exports = me),
            t.UAParser = me;
            var xt = typeof r !== u && (r.jQuery || r.Zepto);
            if (xt && !xt.ua) {
                var xr = new me;
                xt.ua = xr.getResult(),
                xt.ua.get = function() {
                    return xr.getUA()
                }
                ,
                xt.ua.set = function(D) {
                    xr.setUA(D);
                    var M = xr.getResult();
                    for (var I in M)
                        xt.ua[I] = M[I]
                }
            }
        }
        )(typeof window == "object" ? window : Cg)
    }(er, er.exports)),
    er.exports
}
var Lg = Tg();
const Ll = Zr(Lg)
  , Ig = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
  , Ng = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function jg(e) {
    return Ig.test(e) || Ng.test(e.substr(0, 4))
}
function dy(e) {
    return !jg(e)
}
const Dg = "17.2".split(".").map(Number).reduce( (e, t, r) => e + t * 100 ** (2 - r), 0);
class Mg {
    constructor(t) {
        try {
            this.ua = new Ll(t),
            console.info("User agent:", this.ua.getResult())
        } catch (r) {
            console.error("Error while parsing user agent", r)
        }
    }
    getPwaPromptType() {
        if (this.ua)
            return this.ua.getOS().name === "iOS" && this.ua.getBrowser().name === "Mobile Safari" ? "ios_safari" : this.ua.getOS().name === "iOS" && this.ua.getBrowser().name === "Chrome" ? "ios_chrome" : this.ua.getOS().name === "Android" ? "android" : "others"
    }
    isIOS() {
        return !!this.ua && this.ua.getOS().name === "iOS"
    }
    isAndroid() {
        return !!this.ua && this.ua.getOS().name === "Android"
    }
    isMobileDevice() {
        return !!this.ua && this.ua.getDevice().type === "mobile"
    }
    isIOSPwaSupported() {
        if (!this.ua || !this.isIOS())
            return !1;
        const t = this.ua.getOS().version;
        return t ? t.split(".").map(Number).reduce( (n, a, i) => n + a * 100 ** (2 - i), 0) >= Dg : !1
    }
    getDeviceInfo() {
        if (!this.ua)
            return null;
        const t = this.ua.getResult();
        return {
            isDesktop: !this.isMobileDevice(),
            device: t.device.type || "desktop",
            osName: t.os.name || "",
            osVersion: t.os.version || "",
            browserName: t.browser.name || "",
            browserVersion: t.browser.version || ""
        }
    }
}
const jt = new Ll
  , dr = new Mg(navigator.userAgent)
  , py = () => !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
  , $g = () => "serviceWorker"in navigator && "BeforeInstallPromptEvent"in window
  , gy = () => dr.isAndroid() && dr.isMobileDevice()
  , hy = () => dr.isIOS()
  , ro = () => !!("standalone"in window.navigator && window.navigator.standalone === !0 || window.matchMedia?.("(display-mode: standalone)").matches)
  , Ug = ["architecture", "platformVersion", "bitness", "formFactor", "fullVersionList", "model", "wow64"];
let pa;
const qg = async () => {
    if (!("userAgentData"in navigator))
        return {};
    if (!pa)
        try {
            pa = await navigator.userAgentData.getHighEntropyValues?.(Ug) || {}
        } catch (e) {
            console.error(e)
        }
    return pa || {}
}
  , Il = () => jt.getOS().name === "iOS" && jt.getBrowser().name === "Mobile Safari"
  , Nl = () => jt.getOS().name === "iOS" && jt.getBrowser().name === "Chrome" && !window.navigator.standalone
  , Fg = () => /line/i.test(navigator.userAgent)
  , Gg = () => {
    const e = navigator.userAgent || navigator.vendor;
    return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1
}
  , zg = () => (navigator.userAgent || navigator.vendor).indexOf("Twitter") > -1
  , Vg = () => Fg() || Gg() || zg()
  , my = () => !ro() && !Vg() && (Il() || Nl() || $g())
  , vy = () => dr.getPwaPromptType()
  , Kg = () => !jt.getDevice().type
  , Hg = () => {
    const e = jt.getDevice();
    return e.model === "iPad" || e.type === "tablet" && dr.isIOS()
}
  , _y = () => !Kg() && !Hg()
  , yy = e => e === "got";
let fe;
const Oi = {
    reloadLog: "g123_game:reload_log",
    browserUpdateTimestamp: "browser-update-timestamp",
    prefixPwaPromptDismissExpiredAt: "g123_game:pwaprompt:dismiss_expired_at",
    prefixPwaPromptDismissCount: "g123_game:pwaprompt:dismiss_count",
    lineAppAuthRequestedAt: "g123_game:line_app_auth_requested_at",
    campaignGbuttonAnimation: "g123_game:campaign_gbutton_animation",
    campaignGiftReceived: "g123_game:campaign_gift_received",
    pwaSavedLangPrefix: "g123_game:pwa_saved_lang",
    eventListScrollTop: "g123_game:event_list_scroll_top",
    refundCampaignTargetUser: "psp:refund_campaign_target_user",
    cbtLoginAccountBefore: "g123_game:cbt_login_account_before",
    recentlyPlayedGames: "g123_game:recent_played_games",
    accountRecoveryData: "g123_game:account_recovery_data",
    featureFlag: "g123_game:feature_flag",
    gameStoragePrefix: "cpsdk:storage"
}
  , Bg = () => {
    let e = {};
    return {
        get length() {
            return Object.keys(e).length
        },
        setItem: (t, r) => {
            e[t] = String(r)
        }
        ,
        getItem: t => e[t],
        key: t => Object.keys(e)[t],
        removeItem: t => {
            delete e[t]
        }
        ,
        clear: () => (e = {},
        e)
    }
}
;
function no() {
    if (fe)
        return fe;
    const e = "g123-storage-check-key";
    try {
        return fe = window.localStorage,
        fe.setItem(e, "1"),
        fe.removeItem(e),
        fe
    } catch {}
    try {
        return fe = window.sessionStorage,
        fe.setItem(e, "1"),
        fe.removeItem(e),
        fe
    } catch {}
    return fe = Bg(),
    fe
}
const by = no()
  , Wg = (e => () => (e.instance || (e.instance = (async () => {
    try {
        return (await (await (await _e(async () => {
            const {default: a} = await import("./app-CpUCrGhP.js").then(i => i.p);
            return {
                default: a
            }
        }
        , __vite__mapDeps([2, 3, 4, 1]))).default.load()).get()).visitorId
    } catch (t) {
        console.error(t);
        return
    }
}
)()),
e.instance))({});
function wy(e, t) {
    const r = no()
      , n = Date.now() - 1e4
      , a = (r.getItem(Oi.reloadLog) || "").split(",").map(i => {
        try {
            return Number.parseInt(i, 10)
        } catch {
            return 0
        }
    }
    ).filter(i => i > n);
    if (a.length > 3) {
        const i = new Error(`RELOAD_PAGE, too many reloads, reason[${e}], force=${t}`);
        console.error(i),
        window.Sentry?.captureException(i);
        return
    }
    if (a.length > 1 && Date.now() - a[a.length - 1] < 3e3) {
        const i = new Error(`RELOAD_PAGE, reload too frequently, reason[${e}], force=${t}`);
        console.error(i),
        window.Sentry?.captureException(i);
        return
    }
    r.setItem(Oi.reloadLog, [...a, Date.now()].join(",")),
    console.log(`RELOAD_PAGE, reason[${e}], force=${t}`),
    window.location.reload()
}
let Tr = null;
async function Jg() {
    if (Tr)
        return Tr.appFrom;
    const {appId: e, userId: t} = window.option;
    if (!e || !t)
        throw new Error(`appId [${e}] or userId [${t}] empty`);
    const r = await fetch(`/api/userapp?appId=${e}&userId=${t}`, {
        credentials: "omit"
    });
    if (!r.ok)
        return console.error(await r.text()),
        "";
    const n = await r.json();
    return Tr = {
        userId: t,
        appId: e,
        appFrom: n.app_from || ""
    },
    Tr.appFrom
}
async function _r() {
    const e = await Jg();
    if (e)
        try {
            const t = new URL(e);
            return t || void 0
        } catch (t) {
            console.error(t);
            return
        }
}
async function ao() {
    try {
        const {userId: e, appId: t} = window.option;
        if (!e || !t)
            return [];
        const r = await fetch(`/uts?appId=${t}`, {
            method: "GET"
        });
        if (r.status === 200)
            return (await r.json()).Tags.map(a => ({
                appid: a.appid,
                tagKey: a.tag_key,
                tagValue: a.tag_value,
                updated: a.updated
            }))
    } catch (e) {
        console.error(e)
    }
    return []
}
async function Sy() {
    const {userId: e, appId: t} = window.option
      , r = window.location.href;
    if (!e || !t)
        return;
    const a = await fetch("/uts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: "u_active",
            payload: {
                ctwid: e,
                appid: t,
                pageUrl: r
            }
        })
    });
    if (a.status === 200) {
        const i = await a.json();
        i && Object.keys(i).length > 0 && (io({
            version: "v2",
            action: "g_active",
            data: {
                game_server_id: "",
                game_user_id: "",
                role: {},
                item: {},
                custom: {
                    uts: {
                        retargeting: i.retargeting
                    }
                }
            }
        }),
        Me({
            event: "UserActive",
            ctwid: e,
            appid: t,
            LastAppSource: i.utm_source,
            retargeting: i.retargeting
        }))
    }
}
function zt(e) {
    const t = () => {
        if (!window.navigator.sendBeacon("/reports", JSON.stringify(e)))
            throw new Error("sendBeacon failed")
    }
      , r = () => {
        hi( () => fetch("/reports", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        }), {
            retries: 3
        })
    }
    ;
    if (typeof navigator < "u" && typeof navigator.sendBeacon == "function")
        try {
            t()
        } catch (n) {
            console.error(n),
            r()
        }
    else
        r()
}
function Yg(e, t) {
    if (e === "g_tutorial") {
        const {item_id: r, item_desc: n} = t || {};
        Me({
            event: e,
            ...r && n ? {
                item_id: r,
                item_desc: n
            } : {}
        })
    }
}
function Xg(e, t) {
    if (e === "g_tutorial" && typeof t.item == "object" && t.item !== null) {
        const r = t.item;
        Me({
            event: e,
            ...r.item_id && r.item_desc ? {
                item_id: r.item_id,
                item_desc: r.item_desc
            } : {}
        })
    }
}
async function Zg() {
    const e = await Gt();
    return {
        userId: e.sub,
        appId: e.aud,
        country: e.country,
        region: e.region,
        lang: e.lang,
        currency: e.currency,
        mtl: e.mtl
    }
}
async function sn() {
    const {userId: e, appId: t, country: r, region: n, lang: a, mtl: i} = await Zg();
    if (!fr().currentUser())
        throw new Error("currentUser is empty");
    if (!e)
        throw new Error(`userId is not found ${e}`);
    return {
        page: {
            referer: document.referrer || "",
            network_connection: Rg(window, "navigator.network.connection.effectiveType", ""),
            url: window.location.href,
            fp: await Wg() || "",
            country: r,
            region: n,
            lang: a,
            mtl: i,
            userAgent: window.navigator.userAgent,
            userAgentData: await qg(),
            isStandalone: ro() ? 1 : 0
        },
        ctwid: e,
        appid: t
    }
}
async function io(e) {
    const {version: t, service: r, action: n, data: a} = e
      , i = $t()
      , {ctwid: o, appid: s, page: u} = await sn()
      , c = {
        version: t,
        type: n,
        uuid: i,
        time: `${Date.now()}`,
        ctwid: o,
        appid: s,
        page: u,
        payload: a,
        service: r
    };
    if (t === "v2" ? Xg(n, a) : Yg(n, a),
    (n === "g_register" || n === "g_login") && Me({
        event: n
    }),
    n === "g_createrole") {
        const p = await ao();
        let l = null
          , f = -1;
        try {
            for (let h = 0; h < p.length; h += 1)
                p[h].tagKey === "last_ad_url" && p[h].updated > f && (l = new URL(p[h].tagValue),
                f = p[h].updated)
        } catch {}
        const d = l?.searchParams
          , g = p.filter(h => h.tagKey === "create_role").length === 0;
        hg({
            ctwid: o,
            appid: s,
            isFirst: g,
            url: window.location.href
        }),
        Me({
            event: n,
            ctwid: o,
            appid: s,
            lastADDetail: {
                appPlatform: d?.get("platform") || "",
                appSource: d?.get("utm_source") || "",
                appCampaign: d?.get("utm_campaign") || "",
                appAdGroup: d?.get("utm_adgroup") || "",
                appKeyword: d?.get("utm_keyword") || "",
                time: f
            },
            isFirst: g
        })
    }
    zt(c)
}
async function ky(e) {
    const {action: t, data: r} = e
      , n = $t()
      , {ctwid: a, appid: i, page: o} = await sn()
      , s = {
        type: t,
        uuid: n,
        time: `${Date.now()}`,
        ctwid: a,
        appid: i,
        page: o,
        payload: r
    };
    (t === "p_register" || t === "p_login") && Me({
        event: t
    }),
    zt(s)
}
async function Qg(e, t, r) {
    const n = await Gt()
      , {sub: a, aud: i, country: o, region: s} = n
      , {appTitle: u} = window.option
      , p = new URL(window.location.href).searchParams.get("platform")
      , l = (await _r())?.searchParams
      , f = $t()
      , d = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      , g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    window.top?.option?.code && window.dataLayer && window.first_land_url && window.dataLayer.push({
        event: "p_pre_entry",
        ctwid: a,
        appid: t,
        dl_platformid: p || "ctw",
        dl_appid: t,
        dl_appname: u,
        dl_ctwid: a,
        dl_country: o,
        dl_region: s,
        lastADDetail: {
            appPlatform: l?.get("platform") || "",
            appSource: l?.get("utm_source") || "",
            appCampaign: l?.get("utm_campaign") || "",
            appAdgroup: l?.get("utm_adgroup") || "",
            appKeyword: l?.get("utm_keyword") || "",
            time: new Date().getTime()
        }
    }),
    zt({
        version: "v2",
        type: "misc_platform_pre_entry",
        uuid: f,
        ctwid: a,
        appid: i,
        service: "platform",
        page: {
            region: s,
            country: o,
            lang: r,
            windowWidth: d,
            windowHeight: g,
            referer: document.referrer,
            url: window.location.href,
            first_land_url: window.first_land_url,
            userAgent: window.navigator.userAgent
        },
        payload: {
            provider: e,
            appid: t,
            lang: r,
            timestamp: Date.now()
        }
    })
}
async function eh({data: e}) {
    const t = $t()
      , {ctwid: r, appid: n, page: a} = await sn()
      , i = {
        type: "misc_im_link",
        version: "v2",
        service: "platform",
        uuid: t,
        time: `${Date.now()}`,
        ctwid: r,
        appid: n,
        page: a,
        payload: e
    };
    zt(i)
}
async function Oy(e) {
    th("misc_account_recovery", {
        data: e
    })
}
async function th(e, {data: t}) {
    const r = $t()
      , {ctwid: n, appid: a, page: i} = await sn()
      , o = {
        type: e,
        version: "v2",
        service: "platform",
        uuid: r,
        time: `${Date.now()}`,
        ctwid: n,
        appid: a,
        page: i,
        payload: t
    };
    zt(o)
}
async function rh(e, t) {
    const r = await Gt()
      , {sub: n, aud: a, country: i, region: o} = r
      , s = $t()
      , u = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      , c = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    zt({
        version: "v2",
        type: "misc_platform_pre_entry_cancel",
        uuid: s,
        ctwid: n,
        appid: a,
        service: "platform",
        page: {
            region: o,
            country: i,
            lang: t,
            windowWidth: u,
            windowHeight: c,
            referer: document.referrer,
            url: window.location.href,
            first_land_url: window.first_land_url,
            userAgent: window.navigator.userAgent
        },
        payload: {
            appid: e,
            lang: t,
            timestamp: Date.now()
        }
    })
}
function nh(e) {
    return typeof e == "object" && e !== null && "data"in e && "level"in e && "ctwid"in e
}
function ah(e) {
    return typeof e == "object" && e !== null && "version"in e && e.version === "v2" && "service"in e && e.service === "flashlaunch"
}
function ih(e) {
    return typeof e == "object" && e !== null && "category"in e && e.category === "GAME_EVENT" && "action"in e && e.action === "ACTIVATE" && "payload"in e
}
function oh(e) {
    return typeof e == "object" && e !== null && "type"in e && e.type === "game_event" && "action"in e && e.action === "server_game_event_created"
}
const sh = {};
function uh(e) {
    e.data && (Ag(e.level),
    io({
        version: "v2",
        action: "g_levelup",
        data: {
            ...e.data,
            game_server_id: e.data?.game_server_id || e.server_id,
            custom: {
                ...e.data.custom,
                event_source: "server"
            },
            role: {
                ...e.data.role,
                level: e.level.toString()
            }
        }
    }))
}
const ch = dt("GAME_EVENT_ACTIVATE", async e => {
    if (!e?.payload) {
        const n = new Error("event payload is required");
        throw console.error(n, e),
        n
    }
    const r = (await ee.post("/api/v1/events/game_event/activate", {
        payload: e.payload
    })).data;
    return r.length > 0 && setTimeout( () => {
        r.forEach(n => {
            if (n.category === "GC_LEVEL_UP") {
                console.log("[GAME_EVENT] GC_LEVEL_UP event", n);
                const {level: a} = n;
                V_(a),
                setTimeout( () => {
                    if (!n.payload)
                        return;
                    const i = JSON.parse(n.payload);
                    nh(i) && uh(i)
                }
                )
            }
            if (n.category === "GC_FLASHLAUNCH" && setTimeout( () => {
                if (!n.payload)
                    return;
                const a = JSON.parse(n.payload);
                if (!ah(a)) {
                    console.error("[GAME_EVENT] FLASHLAUNCH event, error payload", n);
                    return
                }
                io(a)
            }
            ),
            n.category === "GC_PAYMENT_SUCCEED") {
                console.log("[GAME_EVENT] GC_PAYMENT_SUCCEED event", n);
                const {order: a} = n
                  , i = a.items?.[0]?.currency || "JPY";
                z_({
                    amount: xo(a.items),
                    currency: i,
                    orderID: a.order_no,
                    isAppFirst: a.is_app_first,
                    lastPaymentTime: a.last_deliver_order_time,
                    order: {
                        orderNo: a.order_no,
                        appCode: a.app_code,
                        paymentCode: a.payment_code,
                        status: a.status,
                        error: a.error,
                        items: a.items.map(o => ({
                            code: o.code,
                            name: o.name,
                            desc: o.desc,
                            amt: o.amt,
                            currency: o.currency || i,
                            qty: o.qty,
                            taxamt: o.taxamt
                        }))
                    }
                })
            }
        }
        )
    }
    ),
    r
}
)
  , xy = dt("CHECK_GAME_EVENTS", async (e, {dispatch: t}) => {
    const {appId: r} = window.option
      , n = await ee.get(`/api/v1/events/game_event/check/${r}?r=${e}&t=${Date.now()}`, {
        withCredentials: !0
    });
    for (const a of n.data)
        oh(a) || ih(a) ? t(ch(a)) : (console.error("[GAME_EVENT] Unknown event", a),
        window.postMessage(a));
    return n.data
}
)
  , lh = te({
    name: "gameEvent",
    initialState: sh,
    reducers: {}
})
  , Se = {
    FacebookMessage: "facebook_message",
    DiscordMessage: "discord_message",
    WhatsappMessage: "whatsapp_message",
    LineMessage: "line_message",
    KakaoMessage: "kakao_message"
}
  , fu = {
    [Se.FacebookMessage]: "FACEBOOK",
    [Se.DiscordMessage]: "DISCORD",
    [Se.WhatsappMessage]: "WHATSAPP",
    [Se.LineMessage]: "LINE",
    [Se.KakaoMessage]: "KAKAO"
}
  , Lr = {
    Passkey: "passkey",
    Twitter: "twitter",
    Google: "google",
    Apple: "apple"
}
  , fh = e => typeof e == "object" && e !== null && "type"in e && "action"in e && "appCode"in e && "imType"in e
  , dh = {
    LineChat: "line_chat"
}
  , ph = {
    Simple: "simple"
}
  , gh = {
    PreEntryType: "pre_entry"
}
  , hh = {
    PreEntryStatusChanged: "pre_entry_status_changed"
}
  , Py = (e, t) => typeof e == "object" && e !== null && "type"in e && e.type === gh.PreEntryType && "action"in e && e.action === hh.PreEntryStatusChanged && "lang"in e && e.lang === t && "appCode"in e && "userId"in e && "isRegistered"in e
  , mh = {
    PreEntry: "pre-registration",
    Profile: "profile",
    H5Page: "h5-page"
}
  , vh = {
    imPopupOpen: !1,
    supportedImTypes: [],
    imConnectedStatus: {},
    imConnectedStatusList: []
};
function du(e, t) {
    return !e || !t ? !1 : e.isLinked !== t.isLinked
}
const Wr = te({
    name: "imConnect",
    initialState: vh,
    reducers: {
        setImPopupOpen: (e, t) => {
            e.imPopupOpen = t.payload
        }
        ,
        initImConnectedStatus: (e, t) => {
            const r = e.imConnectedStatus;
            e.imConnectedStatusList = t.payload || [];
            const n = t.payload?.map(o => o.imType) ?? [];
            e.supportedImTypes = n;
            const a = {};
            for (const o of t.payload || [])
                a[o.imType] = o;
            e.imConnectedStatus = a;
            const i = e.imConnectedStatus;
            for (const [o,s] of Object.entries(i)) {
                if (!s)
                    continue;
                const u = r[o];
                if (u && du(u, s)) {
                    e.imPopupConnectedStatus = {
                        before: u,
                        after: s
                    },
                    console.log("[IM_CONNECT][initImConnectedStatus] imPopupConnectedStatus changed", e.imPopupConnectedStatus);
                    break
                }
            }
        }
        ,
        updateImConnectedStatus: (e, t) => {
            const r = t.payload.imType;
            if (!e.supportedImTypes.includes(r))
                return;
            e.imConnectedStatusList = e.imConnectedStatusList.map(i => i.imType === r ? t.payload : i);
            const n = e.imConnectedStatus[r]
              , a = t.payload;
            e.imConnectedStatus[r] = a,
            n && du(n, a) && (e.imPopupConnectedStatus = {
                before: n,
                after: a
            },
            console.log("[IM_CONNECT][updateImConnectedStatus] imPopupConnectedStatus changed", e.imPopupConnectedStatus))
        }
        ,
        dismissImPopupConnectedStatus: e => {
            e.imPopupConnectedStatus = void 0
        }
    }
});
async function _h(e) {
    try {
        return (await ee.get(`${xe.SHD_G123_GAME_URL}/api/v1/im/connected_status`, {
            params: e,
            withCredentials: !0
        })).data
    } catch (t) {
        throw window?.Sentry?.captureException(t),
        t
    }
}
const jl = dt("imConnect/refreshImConnectedStatus", async (e, {dispatch: t}) => {
    const r = await _h(e);
    return e.imType ? t(Wr.actions.updateImConnectedStatus(r[0])) : t(Wr.actions.initImConnectedStatus(r)),
    r
}
);
function yh(e, t) {
    const r = n => {
        const a = n.data;
        fh(a) && a.appCode === t && e(jl({
            appCode: a.appCode,
            imType: a.imType
        }))
    }
    ;
    return window.addEventListener("message", r),
    () => {
        window.removeEventListener("message", r)
    }
}
let ir;
const Ey = dt("imConnect/installImConnectModule", async (e, {dispatch: t}) => {
    ir && ir(),
    ir = yh(t, e),
    t(jl({
        appCode: e
    }))
}
)
  , Ay = dt("imConnect/uninstallImConnectModule", async () => {
    ir && ir()
}
)
  , {setImPopupOpen: Ry, dismissImPopupConnectedStatus: Cy} = Wr.actions;
var ga, pu;
function bh() {
    if (pu)
        return ga;
    pu = 1;
    var e = an();
    function t() {
        this.__data__ = new e,
        this.size = 0
    }
    return ga = t,
    ga
}
var ha, gu;
function wh() {
    if (gu)
        return ha;
    gu = 1;
    function e(t) {
        var r = this.__data__
          , n = r.delete(t);
        return this.size = r.size,
        n
    }
    return ha = e,
    ha
}
var ma, hu;
function Sh() {
    if (hu)
        return ma;
    hu = 1;
    function e(t) {
        return this.__data__.get(t)
    }
    return ma = e,
    ma
}
var va, mu;
function kh() {
    if (mu)
        return va;
    mu = 1;
    function e(t) {
        return this.__data__.has(t)
    }
    return va = e,
    va
}
var _a, vu;
function Oh() {
    if (vu)
        return _a;
    vu = 1;
    var e = an()
      , t = Vi()
      , r = Ki()
      , n = 200;
    function a(i, o) {
        var s = this.__data__;
        if (s instanceof e) {
            var u = s.__data__;
            if (!t || u.length < n - 1)
                return u.push([i, o]),
                this.size = ++s.size,
                this;
            s = this.__data__ = new r(u)
        }
        return s.set(i, o),
        this.size = s.size,
        this
    }
    return _a = a,
    _a
}
var ya, _u;
function xh() {
    if (_u)
        return ya;
    _u = 1;
    var e = an()
      , t = bh()
      , r = wh()
      , n = Sh()
      , a = kh()
      , i = Oh();
    function o(s) {
        var u = this.__data__ = new e(s);
        this.size = u.size
    }
    return o.prototype.clear = t,
    o.prototype.delete = r,
    o.prototype.get = n,
    o.prototype.has = a,
    o.prototype.set = i,
    ya = o,
    ya
}
var ba, yu;
function Ph() {
    if (yu)
        return ba;
    yu = 1;
    var e = "__lodash_hash_undefined__";
    function t(r) {
        return this.__data__.set(r, e),
        this
    }
    return ba = t,
    ba
}
var wa, bu;
function Eh() {
    if (bu)
        return wa;
    bu = 1;
    function e(t) {
        return this.__data__.has(t)
    }
    return wa = e,
    wa
}
var Sa, wu;
function Ah() {
    if (wu)
        return Sa;
    wu = 1;
    var e = Ki()
      , t = Ph()
      , r = Eh();
    function n(a) {
        var i = -1
          , o = a == null ? 0 : a.length;
        for (this.__data__ = new e; ++i < o; )
            this.add(a[i])
    }
    return n.prototype.add = n.prototype.push = t,
    n.prototype.has = r,
    Sa = n,
    Sa
}
var ka, Su;
function Rh() {
    if (Su)
        return ka;
    Su = 1;
    function e(t, r) {
        for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
            if (r(t[n], n, t))
                return !0;
        return !1
    }
    return ka = e,
    ka
}
var Oa, ku;
function Ch() {
    if (ku)
        return Oa;
    ku = 1;
    function e(t, r) {
        return t.has(r)
    }
    return Oa = e,
    Oa
}
var xa, Ou;
function Dl() {
    if (Ou)
        return xa;
    Ou = 1;
    var e = Ah()
      , t = Rh()
      , r = Ch()
      , n = 1
      , a = 2;
    function i(o, s, u, c, p, l) {
        var f = u & n
          , d = o.length
          , g = s.length;
        if (d != g && !(f && g > d))
            return !1;
        var h = l.get(o)
          , m = l.get(s);
        if (h && m)
            return h == s && m == o;
        var v = -1
          , _ = !0
          , b = u & a ? new e : void 0;
        for (l.set(o, s),
        l.set(s, o); ++v < d; ) {
            var y = o[v]
              , w = s[v];
            if (c)
                var k = f ? c(w, y, v, s, o, l) : c(y, w, v, o, s, l);
            if (k !== void 0) {
                if (k)
                    continue;
                _ = !1;
                break
            }
            if (b) {
                if (!t(s, function(O, S) {
                    if (!r(b, S) && (y === O || p(y, O, u, c, l)))
                        return b.push(S)
                })) {
                    _ = !1;
                    break
                }
            } else if (!(y === w || p(y, w, u, c, l))) {
                _ = !1;
                break
            }
        }
        return l.delete(o),
        l.delete(s),
        _
    }
    return xa = i,
    xa
}
var Pa, xu;
function Th() {
    if (xu)
        return Pa;
    xu = 1;
    var e = Xe()
      , t = e.Uint8Array;
    return Pa = t,
    Pa
}
var Ea, Pu;
function Lh() {
    if (Pu)
        return Ea;
    Pu = 1;
    function e(t) {
        var r = -1
          , n = Array(t.size);
        return t.forEach(function(a, i) {
            n[++r] = [i, a]
        }),
        n
    }
    return Ea = e,
    Ea
}
var Aa, Eu;
function Ih() {
    if (Eu)
        return Aa;
    Eu = 1;
    function e(t) {
        var r = -1
          , n = Array(t.size);
        return t.forEach(function(a) {
            n[++r] = a
        }),
        n
    }
    return Aa = e,
    Aa
}
var Ra, Au;
function Nh() {
    if (Au)
        return Ra;
    Au = 1;
    var e = zi()
      , t = Th()
      , r = fl()
      , n = Dl()
      , a = Lh()
      , i = Ih()
      , o = 1
      , s = 2
      , u = "[object Boolean]"
      , c = "[object Date]"
      , p = "[object Error]"
      , l = "[object Map]"
      , f = "[object Number]"
      , d = "[object RegExp]"
      , g = "[object Set]"
      , h = "[object String]"
      , m = "[object Symbol]"
      , v = "[object ArrayBuffer]"
      , _ = "[object DataView]"
      , b = e ? e.prototype : void 0
      , y = b ? b.valueOf : void 0;
    function w(k, O, S, R, L, E, U) {
        switch (S) {
        case _:
            if (k.byteLength != O.byteLength || k.byteOffset != O.byteOffset)
                return !1;
            k = k.buffer,
            O = O.buffer;
        case v:
            return !(k.byteLength != O.byteLength || !E(new t(k), new t(O)));
        case u:
        case c:
        case f:
            return r(+k, +O);
        case p:
            return k.name == O.name && k.message == O.message;
        case d:
        case h:
            return k == O + "";
        case l:
            var W = a;
        case g:
            var X = R & o;
            if (W || (W = i),
            k.size != O.size && !X)
                return !1;
            var re = U.get(k);
            if (re)
                return re == O;
            R |= s,
            U.set(k, O);
            var J = n(W(k), W(O), R, L, E, U);
            return U.delete(k),
            J;
        case m:
            if (y)
                return y.call(k) == y.call(O)
        }
        return !1
    }
    return Ra = w,
    Ra
}
var Ca, Ru;
function jh() {
    if (Ru)
        return Ca;
    Ru = 1;
    function e(t, r) {
        for (var n = -1, a = r.length, i = t.length; ++n < a; )
            t[i + n] = r[n];
        return t
    }
    return Ca = e,
    Ca
}
var Ta, Cu;
function oo() {
    if (Cu)
        return Ta;
    Cu = 1;
    var e = Array.isArray;
    return Ta = e,
    Ta
}
var La, Tu;
function Dh() {
    if (Tu)
        return La;
    Tu = 1;
    var e = jh()
      , t = oo();
    function r(n, a, i) {
        var o = a(n);
        return t(n) ? o : e(o, i(n))
    }
    return La = r,
    La
}
var Ia, Lu;
function Mh() {
    if (Lu)
        return Ia;
    Lu = 1;
    function e(t, r) {
        for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
            var s = t[n];
            r(s, n, t) && (o[i++] = s)
        }
        return o
    }
    return Ia = e,
    Ia
}
var Na, Iu;
function $h() {
    if (Iu)
        return Na;
    Iu = 1;
    function e() {
        return []
    }
    return Na = e,
    Na
}
var ja, Nu;
function Uh() {
    if (Nu)
        return ja;
    Nu = 1;
    var e = Mh()
      , t = $h()
      , r = Object.prototype
      , n = r.propertyIsEnumerable
      , a = Object.getOwnPropertySymbols
      , i = a ? function(o) {
        return o == null ? [] : (o = Object(o),
        e(a(o), function(s) {
            return n.call(o, s)
        }))
    }
    : t;
    return ja = i,
    ja
}
var Da, ju;
function qh() {
    if (ju)
        return Da;
    ju = 1;
    function e(t, r) {
        for (var n = -1, a = Array(t); ++n < t; )
            a[n] = r(n);
        return a
    }
    return Da = e,
    Da
}
var Ma, Du;
function un() {
    if (Du)
        return Ma;
    Du = 1;
    function e(t) {
        return t != null && typeof t == "object"
    }
    return Ma = e,
    Ma
}
var $a, Mu;
function Fh() {
    if (Mu)
        return $a;
    Mu = 1;
    var e = tn()
      , t = un()
      , r = "[object Arguments]";
    function n(a) {
        return t(a) && e(a) == r
    }
    return $a = n,
    $a
}
var Ua, $u;
function Gh() {
    if ($u)
        return Ua;
    $u = 1;
    var e = Fh()
      , t = un()
      , r = Object.prototype
      , n = r.hasOwnProperty
      , a = r.propertyIsEnumerable
      , i = e(function() {
        return arguments
    }()) ? e : function(o) {
        return t(o) && n.call(o, "callee") && !a.call(o, "callee")
    }
    ;
    return Ua = i,
    Ua
}
var tr = {
    exports: {}
}, qa, Uu;
function zh() {
    if (Uu)
        return qa;
    Uu = 1;
    function e() {
        return !1
    }
    return qa = e,
    qa
}
tr.exports;
var qu;
function Ml() {
    return qu || (qu = 1,
    function(e, t) {
        var r = Xe()
          , n = zh()
          , a = t && !t.nodeType && t
          , i = a && !0 && e && !e.nodeType && e
          , o = i && i.exports === a
          , s = o ? r.Buffer : void 0
          , u = s ? s.isBuffer : void 0
          , c = u || n;
        e.exports = c
    }(tr, tr.exports)),
    tr.exports
}
var Fa, Fu;
function Vh() {
    if (Fu)
        return Fa;
    Fu = 1;
    var e = 9007199254740991
      , t = /^(?:0|[1-9]\d*)$/;
    function r(n, a) {
        var i = typeof n;
        return a = a ?? e,
        !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a
    }
    return Fa = r,
    Fa
}
var Ga, Gu;
function $l() {
    if (Gu)
        return Ga;
    Gu = 1;
    var e = 9007199254740991;
    function t(r) {
        return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e
    }
    return Ga = t,
    Ga
}
var za, zu;
function Kh() {
    if (zu)
        return za;
    zu = 1;
    var e = tn()
      , t = $l()
      , r = un()
      , n = "[object Arguments]"
      , a = "[object Array]"
      , i = "[object Boolean]"
      , o = "[object Date]"
      , s = "[object Error]"
      , u = "[object Function]"
      , c = "[object Map]"
      , p = "[object Number]"
      , l = "[object Object]"
      , f = "[object RegExp]"
      , d = "[object Set]"
      , g = "[object String]"
      , h = "[object WeakMap]"
      , m = "[object ArrayBuffer]"
      , v = "[object DataView]"
      , _ = "[object Float32Array]"
      , b = "[object Float64Array]"
      , y = "[object Int8Array]"
      , w = "[object Int16Array]"
      , k = "[object Int32Array]"
      , O = "[object Uint8Array]"
      , S = "[object Uint8ClampedArray]"
      , R = "[object Uint16Array]"
      , L = "[object Uint32Array]"
      , E = {};
    E[_] = E[b] = E[y] = E[w] = E[k] = E[O] = E[S] = E[R] = E[L] = !0,
    E[n] = E[a] = E[m] = E[i] = E[v] = E[o] = E[s] = E[u] = E[c] = E[p] = E[l] = E[f] = E[d] = E[g] = E[h] = !1;
    function U(W) {
        return r(W) && t(W.length) && !!E[e(W)]
    }
    return za = U,
    za
}
var Va, Vu;
function Hh() {
    if (Vu)
        return Va;
    Vu = 1;
    function e(t) {
        return function(r) {
            return t(r)
        }
    }
    return Va = e,
    Va
}
var rr = {
    exports: {}
};
rr.exports;
var Ku;
function Bh() {
    return Ku || (Ku = 1,
    function(e, t) {
        var r = sl()
          , n = t && !t.nodeType && t
          , a = n && !0 && e && !e.nodeType && e
          , i = a && a.exports === n
          , o = i && r.process
          , s = function() {
            try {
                var u = a && a.require && a.require("util").types;
                return u || o && o.binding && o.binding("util")
            } catch {}
        }();
        e.exports = s
    }(rr, rr.exports)),
    rr.exports
}
var Ka, Hu;
function Ul() {
    if (Hu)
        return Ka;
    Hu = 1;
    var e = Kh()
      , t = Hh()
      , r = Bh()
      , n = r && r.isTypedArray
      , a = n ? t(n) : e;
    return Ka = a,
    Ka
}
var Ha, Bu;
function Wh() {
    if (Bu)
        return Ha;
    Bu = 1;
    var e = qh()
      , t = Gh()
      , r = oo()
      , n = Ml()
      , a = Vh()
      , i = Ul()
      , o = Object.prototype
      , s = o.hasOwnProperty;
    function u(c, p) {
        var l = r(c)
          , f = !l && t(c)
          , d = !l && !f && n(c)
          , g = !l && !f && !d && i(c)
          , h = l || f || d || g
          , m = h ? e(c.length, String) : []
          , v = m.length;
        for (var _ in c)
            (p || s.call(c, _)) && !(h && (_ == "length" || d && (_ == "offset" || _ == "parent") || g && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || a(_, v))) && m.push(_);
        return m
    }
    return Ha = u,
    Ha
}
var Ba, Wu;
function Jh() {
    if (Wu)
        return Ba;
    Wu = 1;
    var e = Object.prototype;
    function t(r) {
        var n = r && r.constructor
          , a = typeof n == "function" && n.prototype || e;
        return r === a
    }
    return Ba = t,
    Ba
}
var Wa, Ju;
function Yh() {
    if (Ju)
        return Wa;
    Ju = 1;
    function e(t, r) {
        return function(n) {
            return t(r(n))
        }
    }
    return Wa = e,
    Wa
}
var Ja, Yu;
function Xh() {
    if (Yu)
        return Ja;
    Yu = 1;
    var e = Yh()
      , t = e(Object.keys, Object);
    return Ja = t,
    Ja
}
var Ya, Xu;
function Zh() {
    if (Xu)
        return Ya;
    Xu = 1;
    var e = Jh()
      , t = Xh()
      , r = Object.prototype
      , n = r.hasOwnProperty;
    function a(i) {
        if (!e(i))
            return t(i);
        var o = [];
        for (var s in Object(i))
            n.call(i, s) && s != "constructor" && o.push(s);
        return o
    }
    return Ya = a,
    Ya
}
var Xa, Zu;
function Qh() {
    if (Zu)
        return Xa;
    Zu = 1;
    var e = cl()
      , t = $l();
    function r(n) {
        return n != null && t(n.length) && !e(n)
    }
    return Xa = r,
    Xa
}
var Za, Qu;
function em() {
    if (Qu)
        return Za;
    Qu = 1;
    var e = Wh()
      , t = Zh()
      , r = Qh();
    function n(a) {
        return r(a) ? e(a) : t(a)
    }
    return Za = n,
    Za
}
var Qa, ec;
function tm() {
    if (ec)
        return Qa;
    ec = 1;
    var e = Dh()
      , t = Uh()
      , r = em();
    function n(a) {
        return e(a, r, t)
    }
    return Qa = n,
    Qa
}
var ei, tc;
function rm() {
    if (tc)
        return ei;
    tc = 1;
    var e = tm()
      , t = 1
      , r = Object.prototype
      , n = r.hasOwnProperty;
    function a(i, o, s, u, c, p) {
        var l = s & t
          , f = e(i)
          , d = f.length
          , g = e(o)
          , h = g.length;
        if (d != h && !l)
            return !1;
        for (var m = d; m--; ) {
            var v = f[m];
            if (!(l ? v in o : n.call(o, v)))
                return !1
        }
        var _ = p.get(i)
          , b = p.get(o);
        if (_ && b)
            return _ == o && b == i;
        var y = !0;
        p.set(i, o),
        p.set(o, i);
        for (var w = l; ++m < d; ) {
            v = f[m];
            var k = i[v]
              , O = o[v];
            if (u)
                var S = l ? u(O, k, v, o, i, p) : u(k, O, v, i, o, p);
            if (!(S === void 0 ? k === O || c(k, O, s, u, p) : S)) {
                y = !1;
                break
            }
            w || (w = v == "constructor")
        }
        if (y && !w) {
            var R = i.constructor
              , L = o.constructor;
            R != L && "constructor"in i && "constructor"in o && !(typeof R == "function" && R instanceof R && typeof L == "function" && L instanceof L) && (y = !1)
        }
        return p.delete(i),
        p.delete(o),
        y
    }
    return ei = a,
    ei
}
var ti, rc;
function nm() {
    if (rc)
        return ti;
    rc = 1;
    var e = Ut()
      , t = Xe()
      , r = e(t, "DataView");
    return ti = r,
    ti
}
var ri, nc;
function am() {
    if (nc)
        return ri;
    nc = 1;
    var e = Ut()
      , t = Xe()
      , r = e(t, "Promise");
    return ri = r,
    ri
}
var ni, ac;
function im() {
    if (ac)
        return ni;
    ac = 1;
    var e = Ut()
      , t = Xe()
      , r = e(t, "Set");
    return ni = r,
    ni
}
var ai, ic;
function om() {
    if (ic)
        return ai;
    ic = 1;
    var e = Ut()
      , t = Xe()
      , r = e(t, "WeakMap");
    return ai = r,
    ai
}
var ii, oc;
function sm() {
    if (oc)
        return ii;
    oc = 1;
    var e = nm()
      , t = Vi()
      , r = am()
      , n = im()
      , a = om()
      , i = tn()
      , o = ll()
      , s = "[object Map]"
      , u = "[object Object]"
      , c = "[object Promise]"
      , p = "[object Set]"
      , l = "[object WeakMap]"
      , f = "[object DataView]"
      , d = o(e)
      , g = o(t)
      , h = o(r)
      , m = o(n)
      , v = o(a)
      , _ = i;
    return (e && _(new e(new ArrayBuffer(1))) != f || t && _(new t) != s || r && _(r.resolve()) != c || n && _(new n) != p || a && _(new a) != l) && (_ = function(b) {
        var y = i(b)
          , w = y == u ? b.constructor : void 0
          , k = w ? o(w) : "";
        if (k)
            switch (k) {
            case d:
                return f;
            case g:
                return s;
            case h:
                return c;
            case m:
                return p;
            case v:
                return l
            }
        return y
    }
    ),
    ii = _,
    ii
}
var oi, sc;
function um() {
    if (sc)
        return oi;
    sc = 1;
    var e = xh()
      , t = Dl()
      , r = Nh()
      , n = rm()
      , a = sm()
      , i = oo()
      , o = Ml()
      , s = Ul()
      , u = 1
      , c = "[object Arguments]"
      , p = "[object Array]"
      , l = "[object Object]"
      , f = Object.prototype
      , d = f.hasOwnProperty;
    function g(h, m, v, _, b, y) {
        var w = i(h)
          , k = i(m)
          , O = w ? p : a(h)
          , S = k ? p : a(m);
        O = O == c ? l : O,
        S = S == c ? l : S;
        var R = O == l
          , L = S == l
          , E = O == S;
        if (E && o(h)) {
            if (!o(m))
                return !1;
            w = !0,
            R = !1
        }
        if (E && !R)
            return y || (y = new e),
            w || s(h) ? t(h, m, v, _, b, y) : r(h, m, O, v, _, b, y);
        if (!(v & u)) {
            var U = R && d.call(h, "__wrapped__")
              , W = L && d.call(m, "__wrapped__");
            if (U || W) {
                var X = U ? h.value() : h
                  , re = W ? m.value() : m;
                return y || (y = new e),
                b(X, re, v, _, y)
            }
        }
        return E ? (y || (y = new e),
        n(h, m, v, _, b, y)) : !1
    }
    return oi = g,
    oi
}
var si, uc;
function cm() {
    if (uc)
        return si;
    uc = 1;
    var e = um()
      , t = un();
    function r(n, a, i, o, s) {
        return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s)
    }
    return si = r,
    si
}
var ui, cc;
function lm() {
    if (cc)
        return ui;
    cc = 1;
    var e = cm();
    function t(r, n) {
        return e(r, n)
    }
    return ui = t,
    ui
}
var fm = lm();
const lc = Zr(fm);
function Ty(e) {
    return typeof e == "object" && e.game_user_id !== void 0 && e.game_server_id !== void 0
}
function dm(e) {
    return typeof e == "object" && e.role !== void 0
}
const pm = {
    role_id: "",
    role_name: "",
    game_server: "",
    tags: [],
    game_user_id: "",
    game_server_id: "",
    role: {
        id: "",
        name: "",
        level: "",
        exp: "",
        vip_level: "",
        vip_exp: "",
        virtual_balance: "",
        custom: ""
    }
}
  , gm = te({
    name: "inGameAcount",
    initialState: pm,
    reducers: {
        updateByInformEvent(e, t) {
            const r = t.payload;
            e.role_id = r.role_id || e.role_id,
            e.role_name = r.role_name || e.role_name,
            e.tags = (r.tags || r.tags || []).filter(Boolean).map(n => /^vip/i.test(n) ? n.toUpperCase() : n),
            e.game_server_id = r.game_server || e.game_server_id,
            e.game_server = e.game_server_id,
            e.role.id = r.role_id || e.role.id,
            e.role.name = r.role_name || e.role.name
        },
        updateByGEvent(e, t) {
            const r = t.payload;
            if (dm(r))
                e.game_user_id = r.game_user_id || e.game_user_id,
                e.game_server_id = r.game_server_id || e.game_server_id,
                e.game_server = e.game_server_id,
                e.role_id = r.role.id || e.role_id,
                e.role_name = r.role.name || e.role_name,
                lc(e.role, r.role) || (e.role = r.role);
            else {
                e.game_user_id = r.game_user_id || e.game_user_id,
                e.game_server_id = r.game_server_id || e.game_server_id,
                e.game_server = e.game_server_id,
                e.role_id = r.role_id || e.role_id;
                const n = {
                    id: r.role_id || e.role.id,
                    name: e.role_name,
                    level: r.role_level || e.role.level,
                    exp: String(r.role_exp) || e.role.exp,
                    vip_level: String(r.role_vip_level) || e.role.vip_level,
                    vip_exp: String(r.role_vip_exp) || e.role.vip_exp,
                    virtual_balance: String(r.virtual_balance1) || e.role.virtual_balance,
                    custom: e.role.custom
                };
                lc(e.role, n) || (e.role = n)
            }
        }
    }
})
  , fc = 599
  , dc = 600
  , hm = e => window.open(e, "_blank", `toolbar=no,location=yes,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,width=${Math.min(fc, window.screen.width - 20)},height=${dc},top=${(window.screen.height - dc) / 2}, left=${(window.screen.width - fc) / 2}`)
  , Ly = {
    line_message: "LINE",
    facebook_message: "Facebook",
    discord_message: "Discord",
    whatsapp_message: "WhatsApp",
    kakao_message: "Kakao"
};
function mm(e, t, r, n) {
    const {lang: a} = window.option;
    switch (t) {
    case Se.LineMessage:
        fr().link("line", {
            appCode: r,
            redirectUri: n
        });
        break;
    case Se.FacebookMessage:
    case Se.DiscordMessage:
    case Se.WhatsappMessage:
    case Se.KakaoMessage:
        {
            const i = new URL(`${xe.SHD_G123_GAME_URL}/api/v1/im/connect`);
            i.searchParams.set("appCode", r),
            i.searchParams.set("imType", t),
            i.searchParams.set("lang", a || "ja"),
            hm(i.href)
        }
        break;
    case Lr.Twitter:
    case Lr.Google:
    case Lr.Apple:
    case Lr.Passkey:
        fr().link(t);
        break
    }
    t in fu && eh({
        data: {
            appid: r,
            action: "ON",
            isConversationEnabled: !1,
            channel: fu[t],
            source: e
        }
    })
}
const vm = {}.hasOwnProperty;
function It(...e) {
    const t = [];
    return e.forEach(r => {
        if (r) {
            if (typeof r == "string" || typeof r == "number")
                t.push(r.toString());
            else if (Array.isArray(r)) {
                const n = It(...r);
                n && t.push(n)
            } else if (typeof r == "object") {
                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]"))
                    return void t.push(r.toString());
                Object.keys(r).forEach(n => {
                    vm.call(r, n) && r[n] && t.push(n)
                }
                )
            }
        }
    }
    ),
    Array.from(new Set(t)).join(" ")
}
var yr, N, ql, _t, pc, Fl, Gl, zl, so, xi, Pi, Vl, pr = {}, Kl = [], _m = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, br = Array.isArray;
function Ne(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}
function uo(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}
function T(e, t, r) {
    var n, a, i, o = {};
    for (i in t)
        i == "key" ? n = t[i] : i == "ref" ? a = t[i] : o[i] = t[i];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? yr.call(arguments, 2) : r),
    typeof e == "function" && e.defaultProps != null)
        for (i in e.defaultProps)
            o[i] == null && (o[i] = e.defaultProps[i]);
    return or(e, o, n, a, null)
}
function or(e, t, r, n, a) {
    var i = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: a ?? ++ql,
        __i: -1,
        __u: 0
    };
    return a == null && N.vnode != null && N.vnode(i),
    i
}
function Hl() {
    return {
        current: null
    }
}
function Pe(e) {
    return e.children
}
function Oe(e, t) {
    this.props = e,
    this.context = t
}
function Dt(e, t) {
    if (t == null)
        return e.__ ? Dt(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++)
        if ((r = e.__k[t]) != null && r.__e != null)
            return r.__e;
    return typeof e.type == "function" ? Dt(e) : null
}
function Bl(e) {
    var t, r;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if ((r = e.__k[t]) != null && r.__e != null) {
                e.__e = e.__c.base = r.__e;
                break
            }
        return Bl(e)
    }
}
function Ei(e) {
    (!e.__d && (e.__d = !0) && _t.push(e) && !Jr.__r++ || pc != N.debounceRendering) && ((pc = N.debounceRendering) || Fl)(Jr)
}
function Jr() {
    for (var e, t, r, n, a, i, o, s = 1; _t.length; )
        _t.length > s && _t.sort(Gl),
        e = _t.shift(),
        s = _t.length,
        e.__d && (r = void 0,
        a = (n = (t = e).__v).__e,
        i = [],
        o = [],
        t.__P && ((r = Ne({}, n)).__v = n.__v + 1,
        N.vnode && N.vnode(r),
        co(t.__P, r, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [a] : null, i, a ?? Dt(n), !!(32 & n.__u), o),
        r.__v = n.__v,
        r.__.__k[r.__i] = r,
        Yl(i, r, o),
        r.__e != a && Bl(r)));
    Jr.__r = 0
}
function Wl(e, t, r, n, a, i, o, s, u, c, p) {
    var l, f, d, g, h, m, v = n && n.__k || Kl, _ = t.length;
    for (u = ym(r, t, v, u, _),
    l = 0; l < _; l++)
        (d = r.__k[l]) != null && (f = d.__i == -1 ? pr : v[d.__i] || pr,
        d.__i = l,
        m = co(e, d, f, a, i, o, s, u, c, p),
        g = d.__e,
        d.ref && f.ref != d.ref && (f.ref && lo(f.ref, null, d),
        p.push(d.ref, d.__c || g, d)),
        h == null && g != null && (h = g),
        4 & d.__u || f.__k === d.__k ? u = Jl(d, u, e) : typeof d.type == "function" && m !== void 0 ? u = m : g && (u = g.nextSibling),
        d.__u &= -7);
    return r.__e = h,
    u
}
function ym(e, t, r, n, a) {
    var i, o, s, u, c, p = r.length, l = p, f = 0;
    for (e.__k = new Array(a),
    i = 0; i < a; i++)
        (o = t[i]) != null && typeof o != "boolean" && typeof o != "function" ? (u = i + f,
        (o = e.__k[i] = typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? or(null, o, null, null, null) : br(o) ? or(Pe, {
            children: o
        }, null, null, null) : o.constructor == null && o.__b > 0 ? or(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = e,
        o.__b = e.__b + 1,
        s = null,
        (c = o.__i = bm(o, r, u, l)) != -1 && (l--,
        (s = r[c]) && (s.__u |= 2)),
        s == null || s.__v == null ? (c == -1 && (a > p ? f-- : a < p && f++),
        typeof o.type != "function" && (o.__u |= 4)) : c != u && (c == u - 1 ? f-- : c == u + 1 ? f++ : (c > u ? f-- : f++,
        o.__u |= 4))) : e.__k[i] = null;
    if (l)
        for (i = 0; i < p; i++)
            (s = r[i]) != null && (2 & s.__u) == 0 && (s.__e == n && (n = Dt(s)),
            Zl(s, s));
    return n
}
function Jl(e, t, r) {
    var n, a;
    if (typeof e.type == "function") {
        for (n = e.__k,
        a = 0; n && a < n.length; a++)
            n[a] && (n[a].__ = e,
            t = Jl(n[a], t, r));
        return t
    }
    e.__e != t && (t && e.type && !r.contains(t) && (t = Dt(e)),
    r.insertBefore(e.__e, t || null),
    t = e.__e);
    do
        t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t
}
function He(e, t) {
    return t = t || [],
    e == null || typeof e == "boolean" || (br(e) ? e.some(function(r) {
        He(r, t)
    }) : t.push(e)),
    t
}
function bm(e, t, r, n) {
    var a, i, o = e.key, s = e.type, u = t[r];
    if (u === null && e.key == null || u && o == u.key && s == u.type && (2 & u.__u) == 0)
        return r;
    if (n > (u != null && (2 & u.__u) == 0 ? 1 : 0))
        for (a = r - 1,
        i = r + 1; a >= 0 || i < t.length; ) {
            if (a >= 0) {
                if ((u = t[a]) && (2 & u.__u) == 0 && o == u.key && s == u.type)
                    return a;
                a--
            }
            if (i < t.length) {
                if ((u = t[i]) && (2 & u.__u) == 0 && o == u.key && s == u.type)
                    return i;
                i++
            }
        }
    return -1
}
function gc(e, t, r) {
    t[0] == "-" ? e.setProperty(t, r ?? "") : e[t] = r == null ? "" : typeof r != "number" || _m.test(t) ? r : r + "px"
}
function Ir(e, t, r, n, a) {
    var i;
    e: if (t == "style")
        if (typeof r == "string")
            e.style.cssText = r;
        else {
            if (typeof n == "string" && (e.style.cssText = n = ""),
            n)
                for (t in n)
                    r && t in r || gc(e.style, t, "");
            if (r)
                for (t in r)
                    n && r[t] == n[t] || gc(e.style, t, r[t])
        }
    else if (t[0] == "o" && t[1] == "n")
        i = t != (t = t.replace(zl, "$1")),
        t = t.toLowerCase()in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + i] = r,
        r ? n ? r.u = n.u : (r.u = so,
        e.addEventListener(t, i ? Pi : xi, i)) : e.removeEventListener(t, i ? Pi : xi, i);
    else {
        if (a == "http://www.w3.org/2000/svg")
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
            try {
                e[t] = r ?? "";
                break e
            } catch {}
        typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && r == 1 ? "" : r))
    }
}
function hc(e) {
    return function(t) {
        if (this.l) {
            var r = this.l[t.type + e];
            if (t.t == null)
                t.t = so++;
            else if (t.t < r.u)
                return;
            return r(N.event ? N.event(t) : t)
        }
    }
}
function co(e, t, r, n, a, i, o, s, u, c) {
    var p, l, f, d, g, h, m, v, _, b, y, w, k, O, S, R, L, E = t.type;
    if (t.constructor != null)
        return null;
    128 & r.__u && (u = !!(32 & r.__u),
    i = [s = t.__e = r.__e]),
    (p = N.__b) && p(t);
    e: if (typeof E == "function")
        try {
            if (v = t.props,
            _ = "prototype"in E && E.prototype.render,
            b = (p = E.contextType) && n[p.__c],
            y = p ? b ? b.props.value : p.__ : n,
            r.__c ? m = (l = t.__c = r.__c).__ = l.__E : (_ ? t.__c = l = new E(v,y) : (t.__c = l = new Oe(v,y),
            l.constructor = E,
            l.render = Sm),
            b && b.sub(l),
            l.props = v,
            l.state || (l.state = {}),
            l.context = y,
            l.__n = n,
            f = l.__d = !0,
            l.__h = [],
            l._sb = []),
            _ && l.__s == null && (l.__s = l.state),
            _ && E.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ne({}, l.__s)),
            Ne(l.__s, E.getDerivedStateFromProps(v, l.__s))),
            d = l.props,
            g = l.state,
            l.__v = t,
            f)
                _ && E.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(),
                _ && l.componentDidMount != null && l.__h.push(l.componentDidMount);
            else {
                if (_ && E.getDerivedStateFromProps == null && v !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, y),
                !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l.__s, y) === !1 || t.__v == r.__v) {
                    for (t.__v != r.__v && (l.props = v,
                    l.state = l.__s,
                    l.__d = !1),
                    t.__e = r.__e,
                    t.__k = r.__k,
                    t.__k.some(function(U) {
                        U && (U.__ = t)
                    }),
                    w = 0; w < l._sb.length; w++)
                        l.__h.push(l._sb[w]);
                    l._sb = [],
                    l.__h.length && o.push(l);
                    break e
                }
                l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, y),
                _ && l.componentDidUpdate != null && l.__h.push(function() {
                    l.componentDidUpdate(d, g, h)
                })
            }
            if (l.context = y,
            l.props = v,
            l.__P = e,
            l.__e = !1,
            k = N.__r,
            O = 0,
            _) {
                for (l.state = l.__s,
                l.__d = !1,
                k && k(t),
                p = l.render(l.props, l.state, l.context),
                S = 0; S < l._sb.length; S++)
                    l.__h.push(l._sb[S]);
                l._sb = []
            } else
                do
                    l.__d = !1,
                    k && k(t),
                    p = l.render(l.props, l.state, l.context),
                    l.state = l.__s;
                while (l.__d && ++O < 25);
            l.state = l.__s,
            l.getChildContext != null && (n = Ne(Ne({}, n), l.getChildContext())),
            _ && !f && l.getSnapshotBeforeUpdate != null && (h = l.getSnapshotBeforeUpdate(d, g)),
            R = p,
            p != null && p.type === Pe && p.key == null && (R = Xl(p.props.children)),
            s = Wl(e, br(R) ? R : [R], t, r, n, a, i, o, s, u, c),
            l.base = t.__e,
            t.__u &= -161,
            l.__h.length && o.push(l),
            m && (l.__E = l.__ = null)
        } catch (U) {
            if (t.__v = null,
            u || i != null)
                if (U.then) {
                    for (t.__u |= u ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
                        s = s.nextSibling;
                    i[i.indexOf(s)] = null,
                    t.__e = s
                } else
                    for (L = i.length; L--; )
                        uo(i[L]);
            else
                t.__e = r.__e,
                t.__k = r.__k;
            N.__e(U, t, r)
        }
    else
        i == null && t.__v == r.__v ? (t.__k = r.__k,
        t.__e = r.__e) : s = t.__e = wm(r.__e, t, r, n, a, i, o, u, c);
    return (p = N.diffed) && p(t),
    128 & t.__u ? void 0 : s
}
function Yl(e, t, r) {
    for (var n = 0; n < r.length; n++)
        lo(r[n], r[++n], r[++n]);
    N.__c && N.__c(t, e),
    e.some(function(a) {
        try {
            e = a.__h,
            a.__h = [],
            e.some(function(i) {
                i.call(a)
            })
        } catch (i) {
            N.__e(i, a.__v)
        }
    })
}
function Xl(e) {
    return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : br(e) ? e.map(Xl) : Ne({}, e)
}
function wm(e, t, r, n, a, i, o, s, u) {
    var c, p, l, f, d, g, h, m = r.props, v = t.props, _ = t.type;
    if (_ == "svg" ? a = "http://www.w3.org/2000/svg" : _ == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"),
    i != null) {
        for (c = 0; c < i.length; c++)
            if ((d = i[c]) && "setAttribute"in d == !!_ && (_ ? d.localName == _ : d.nodeType == 3)) {
                e = d,
                i[c] = null;
                break
            }
    }
    if (e == null) {
        if (_ == null)
            return document.createTextNode(v);
        e = document.createElementNS(a, _, v.is && v),
        s && (N.__m && N.__m(t, i),
        s = !1),
        i = null
    }
    if (_ == null)
        m === v || s && e.data == v || (e.data = v);
    else {
        if (i = i && yr.call(e.childNodes),
        m = r.props || pr,
        !s && i != null)
            for (m = {},
            c = 0; c < e.attributes.length; c++)
                m[(d = e.attributes[c]).name] = d.value;
        for (c in m)
            if (d = m[c],
            c != "children") {
                if (c == "dangerouslySetInnerHTML")
                    l = d;
                else if (!(c in v)) {
                    if (c == "value" && "defaultValue"in v || c == "checked" && "defaultChecked"in v)
                        continue;
                    Ir(e, c, null, d, a)
                }
            }
        for (c in v)
            d = v[c],
            c == "children" ? f = d : c == "dangerouslySetInnerHTML" ? p = d : c == "value" ? g = d : c == "checked" ? h = d : s && typeof d != "function" || m[c] === d || Ir(e, c, d, m[c], a);
        if (p)
            s || l && (p.__html == l.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html),
            t.__k = [];
        else if (l && (e.innerHTML = ""),
        Wl(t.type == "template" ? e.content : e, br(f) ? f : [f], t, r, n, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, o, i ? i[0] : r.__k && Dt(r, 0), s, u),
        i != null)
            for (c = i.length; c--; )
                uo(i[c]);
        s || (c = "value",
        _ == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[c] || _ == "progress" && !g || _ == "option" && g != m[c]) && Ir(e, c, g, m[c], a),
        c = "checked",
        h != null && h != e[c] && Ir(e, c, h, m[c], a))
    }
    return e
}
function lo(e, t, r) {
    try {
        if (typeof e == "function") {
            var n = typeof e.__u == "function";
            n && e.__u(),
            n && t == null || (e.__u = e(t))
        } else
            e.current = t
    } catch (a) {
        N.__e(a, r)
    }
}
function Zl(e, t, r) {
    var n, a;
    if (N.unmount && N.unmount(e),
    (n = e.ref) && (n.current && n.current != e.__e || lo(n, null, t)),
    (n = e.__c) != null) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount()
            } catch (i) {
                N.__e(i, t)
            }
        n.base = n.__P = null
    }
    if (n = e.__k)
        for (a = 0; a < n.length; a++)
            n[a] && Zl(n[a], t, r || typeof e.type != "function");
    r || uo(e.__e),
    e.__c = e.__ = e.__e = void 0
}
function Sm(e, t, r) {
    return this.constructor(e, r)
}
function gr(e, t, r) {
    var n, a, i, o;
    t == document && (t = document.documentElement),
    N.__ && N.__(e, t),
    a = (n = typeof r == "function") ? null : r && r.__k || t.__k,
    i = [],
    o = [],
    co(t, e = (!n && r || t).__k = T(Pe, null, [e]), a || pr, pr, t.namespaceURI, !n && r ? [r] : a ? null : t.firstChild ? yr.call(t.childNodes) : null, i, !n && r ? r : a ? a.__e : t.firstChild, n, o),
    Yl(i, e, o)
}
function Ql(e, t) {
    gr(e, t, Ql)
}
function km(e, t, r) {
    var n, a, i, o, s = Ne({}, e.props);
    for (i in e.type && e.type.defaultProps && (o = e.type.defaultProps),
    t)
        i == "key" ? n = t[i] : i == "ref" ? a = t[i] : s[i] = t[i] == null && o != null ? o[i] : t[i];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? yr.call(arguments, 2) : r),
    or(e.type, s, n || e.key, a || e.ref, null)
}
function ef(e) {
    function t(r) {
        var n, a;
        return this.getChildContext || (n = new Set,
        (a = {})[t.__c] = this,
        this.getChildContext = function() {
            return a
        }
        ,
        this.componentWillUnmount = function() {
            n = null
        }
        ,
        this.shouldComponentUpdate = function(i) {
            this.props.value != i.value && n.forEach(function(o) {
                o.__e = !0,
                Ei(o)
            })
        }
        ,
        this.sub = function(i) {
            n.add(i);
            var o = i.componentWillUnmount;
            i.componentWillUnmount = function() {
                n && n.delete(i),
                o && o.call(i)
            }
        }
        ),
        r.children
    }
    return t.__c = "__cC" + Vl++,
    t.__ = e,
    t.Provider = t.__l = (t.Consumer = function(r, n) {
        return r.children(n)
    }
    ).contextType = t,
    t
}
yr = Kl.slice,
N = {
    __e: function(e, t, r, n) {
        for (var a, i, o; t = t.__; )
            if ((a = t.__c) && !a.__)
                try {
                    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(e)),
                    o = a.__d),
                    a.componentDidCatch != null && (a.componentDidCatch(e, n || {}),
                    o = a.__d),
                    o)
                        return a.__E = a
                } catch (s) {
                    e = s
                }
        throw e
    }
},
ql = 0,
Oe.prototype.setState = function(e, t) {
    var r;
    r = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ne({}, this.state),
    typeof e == "function" && (e = e(Ne({}, r), this.props)),
    e && Ne(r, e),
    e != null && this.__v && (t && this._sb.push(t),
    Ei(this))
}
,
Oe.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    Ei(this))
}
,
Oe.prototype.render = Pe,
_t = [],
Fl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
Gl = function(e, t) {
    return e.__v.__b - t.__v.__b
}
,
Jr.__r = 0,
zl = /(PointerCapture)$|Capture$/i,
so = 0,
xi = hc(!1),
Pi = hc(!0),
Vl = 0;
var We, F, ci, mc, Mt = 0, tf = [], H = N, vc = H.__b, _c = H.__r, yc = H.diffed, bc = H.__c, wc = H.unmount, Sc = H.__;
function wt(e, t) {
    H.__h && H.__h(F, e, Mt || t),
    Mt = 0;
    var r = F.__H || (F.__H = {
        __: [],
        __h: []
    });
    return e >= r.__.length && r.__.push({}),
    r.__[e]
}
function St(e) {
    return Mt = 1,
    cn(rf, e)
}
function cn(e, t, r) {
    var n = wt(We++, 2);
    if (n.t = e,
    !n.__c && (n.__ = [r ? r(t) : rf(void 0, t), function(s) {
        var u = n.__N ? n.__N[0] : n.__[0]
          , c = n.t(u, s);
        u !== c && (n.__N = [c, n.__[1]],
        n.__c.setState({}))
    }
    ],
    n.__c = F,
    !F.__f)) {
        var a = function(s, u, c) {
            if (!n.__c.__H)
                return !0;
            var p = n.__c.__H.__.filter(function(f) {
                return !!f.__c
            });
            if (p.every(function(f) {
                return !f.__N
            }))
                return !i || i.call(this, s, u, c);
            var l = n.__c.props !== s;
            return p.forEach(function(f) {
                if (f.__N) {
                    var d = f.__[0];
                    f.__ = f.__N,
                    f.__N = void 0,
                    d !== f.__[0] && (l = !0)
                }
            }),
            i && i.call(this, s, u, c) || l
        };
        F.__f = !0;
        var i = F.shouldComponentUpdate
          , o = F.componentWillUpdate;
        F.componentWillUpdate = function(s, u, c) {
            if (this.__e) {
                var p = i;
                i = void 0,
                a(s, u, c),
                i = p
            }
            o && o.call(this, s, u, c)
        }
        ,
        F.shouldComponentUpdate = a
    }
    return n.__N || n.__
}
function lt(e, t) {
    var r = wt(We++, 3);
    !H.__s && mo(r.__H, t) && (r.__ = e,
    r.u = t,
    F.__H.__h.push(r))
}
function Vt(e, t) {
    var r = wt(We++, 4);
    !H.__s && mo(r.__H, t) && (r.__ = e,
    r.u = t,
    F.__h.push(r))
}
function wr(e) {
    return Mt = 5,
    be(function() {
        return {
            current: e
        }
    }, [])
}
function fo(e, t, r) {
    Mt = 6,
    Vt(function() {
        if (typeof e == "function") {
            var n = e(t());
            return function() {
                e(null),
                n && typeof n == "function" && n()
            }
        }
        if (e)
            return e.current = t(),
            function() {
                return e.current = null
            }
    }, r == null ? r : r.concat(e))
}
function be(e, t) {
    var r = wt(We++, 7);
    return mo(r.__H, t) && (r.__ = e(),
    r.__H = t,
    r.__h = e),
    r.__
}
function ft(e, t) {
    return Mt = 8,
    be(function() {
        return e
    }, t)
}
function po(e) {
    var t = F.context[e.__c]
      , r = wt(We++, 9);
    return r.c = e,
    t ? (r.__ == null && (r.__ = !0,
    t.sub(F)),
    t.props.value) : e.__
}
function go(e, t) {
    H.useDebugValue && H.useDebugValue(t ? t(e) : e)
}
function Om(e) {
    var t = wt(We++, 10)
      , r = St();
    return t.__ = e,
    F.componentDidCatch || (F.componentDidCatch = function(n, a) {
        t.__ && t.__(n, a),
        r[1](n)
    }
    ),
    [r[0], function() {
        r[1](void 0)
    }
    ]
}
function ho() {
    var e = wt(We++, 11);
    if (!e.__) {
        for (var t = F.__v; t !== null && !t.__m && t.__ !== null; )
            t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
    }
    return e.__
}
function xm() {
    for (var e; e = tf.shift(); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(Mr),
                e.__H.__h.forEach(Ai),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                H.__e(t, e.__v)
            }
}
H.__b = function(e) {
    F = null,
    vc && vc(e)
}
,
H.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
    Sc && Sc(e, t)
}
,
H.__r = function(e) {
    _c && _c(e),
    We = 0;
    var t = (F = e.__c).__H;
    t && (ci === F ? (t.__h = [],
    F.__h = [],
    t.__.forEach(function(r) {
        r.__N && (r.__ = r.__N),
        r.u = r.__N = void 0
    })) : (t.__h.forEach(Mr),
    t.__h.forEach(Ai),
    t.__h = [],
    We = 0)),
    ci = F
}
,
H.diffed = function(e) {
    yc && yc(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (tf.push(t) !== 1 && mc === H.requestAnimationFrame || ((mc = H.requestAnimationFrame) || Pm)(xm)),
    t.__H.__.forEach(function(r) {
        r.u && (r.__H = r.u),
        r.u = void 0
    })),
    ci = F = null
}
,
H.__c = function(e, t) {
    t.some(function(r) {
        try {
            r.__h.forEach(Mr),
            r.__h = r.__h.filter(function(n) {
                return !n.__ || Ai(n)
            })
        } catch (n) {
            t.some(function(a) {
                a.__h && (a.__h = [])
            }),
            t = [],
            H.__e(n, r.__v)
        }
    }),
    bc && bc(e, t)
}
,
H.unmount = function(e) {
    wc && wc(e);
    var t, r = e.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            Mr(n)
        } catch (a) {
            t = a
        }
    }),
    r.__H = void 0,
    t && H.__e(t, r.__v))
}
;
var kc = typeof requestAnimationFrame == "function";
function Pm(e) {
    var t, r = function() {
        clearTimeout(n),
        kc && cancelAnimationFrame(t),
        setTimeout(e)
    }, n = setTimeout(r, 100);
    kc && (t = requestAnimationFrame(r))
}
function Mr(e) {
    var t = F
      , r = e.__c;
    typeof r == "function" && (e.__c = void 0,
    r()),
    F = t
}
function Ai(e) {
    var t = F;
    e.__c = e.__(),
    F = t
}
function mo(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
        return r !== e[n]
    })
}
function rf(e, t) {
    return typeof t == "function" ? t(e) : t
}
function nf(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}
function Ri(e, t) {
    for (var r in e)
        if (r !== "__source" && !(r in t))
            return !0;
    for (var n in t)
        if (n !== "__source" && e[n] !== t[n])
            return !0;
    return !1
}
function vo(e, t) {
    var r = t()
      , n = St({
        t: {
            __: r,
            u: t
        }
    })
      , a = n[0].t
      , i = n[1];
    return Vt(function() {
        a.__ = r,
        a.u = t,
        li(a) && i({
            t: a
        })
    }, [e, r, t]),
    lt(function() {
        return li(a) && i({
            t: a
        }),
        e(function() {
            li(a) && i({
                t: a
            })
        })
    }, [e]),
    r
}
function li(e) {
    var t, r, n = e.u, a = e.__;
    try {
        var i = n();
        return !((t = a) === (r = i) && (t !== 0 || 1 / t == 1 / r) || t != t && r != r)
    } catch {
        return !0
    }
}
function _o(e) {
    e()
}
function yo(e) {
    return e
}
function bo() {
    return [!1, _o]
}
var wo = Vt;
function Yr(e, t) {
    this.props = e,
    this.context = t
}
function So(e, t) {
    function r(a) {
        var i = this.props.ref
          , o = i == a.ref;
        return !o && i && (i.call ? i(null) : i.current = null),
        t ? !t(this.props, a) || !o : Ri(this.props, a)
    }
    function n(a) {
        return this.shouldComponentUpdate = r,
        T(e, a)
    }
    return n.displayName = "Memo(" + (e.displayName || e.name) + ")",
    n.prototype.isReactComponent = !0,
    n.__f = !0,
    n
}
(Yr.prototype = new Oe).isPureReactComponent = !0,
Yr.prototype.shouldComponentUpdate = function(e, t) {
    return Ri(this.props, e) || Ri(this.state, t)
}
;
var Oc = N.__b;
N.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
    e.ref = null),
    Oc && Oc(e)
}
;
var Em = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function qe(e) {
    function t(r) {
        var n = nf({}, r);
        return delete n.ref,
        e(n, r.ref || null)
    }
    return t.$$typeof = Em,
    t.render = t,
    t.prototype.isReactComponent = t.__f = !0,
    t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
    t
}
var xc = function(e, t) {
    return e == null ? null : He(He(e).map(t))
}
  , af = {
    map: xc,
    forEach: xc,
    count: function(e) {
        return e ? He(e).length : 0
    },
    only: function(e) {
        var t = He(e);
        if (t.length !== 1)
            throw "Children.only";
        return t[0]
    },
    toArray: He
}
  , Am = N.__e;
N.__e = function(e, t, r, n) {
    if (e.then) {
        for (var a, i = t; i = i.__; )
            if ((a = i.__c) && a.__c)
                return t.__e == null && (t.__e = r.__e,
                t.__k = r.__k),
                a.__c(e, t)
    }
    Am(e, t, r, n)
}
;
var Pc = N.unmount;
function of(e, t, r) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
        typeof n.__c == "function" && n.__c()
    }),
    e.__c.__H = null),
    (e = nf({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t),
    e.__c.__e = !0,
    e.__c = null),
    e.__k = e.__k && e.__k.map(function(n) {
        return of(n, t, r)
    })),
    e
}
function sf(e, t, r) {
    return e && r && (e.__v = null,
    e.__k = e.__k && e.__k.map(function(n) {
        return sf(n, t, r)
    }),
    e.__c && e.__c.__P === t && (e.__e && r.appendChild(e.__e),
    e.__c.__e = !0,
    e.__c.__P = r)),
    e
}
function sr() {
    this.__u = 0,
    this.o = null,
    this.__b = null
}
function uf(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}
function cf(e) {
    var t, r, n;
    function a(i) {
        if (t || (t = e()).then(function(o) {
            r = o.default || o
        }, function(o) {
            n = o
        }),
        n)
            throw n;
        if (!r)
            throw t;
        return T(r, i)
    }
    return a.displayName = "Lazy",
    a.__f = !0,
    a
}
function Ct() {
    this.i = null,
    this.l = null
}
N.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(),
    t && 32 & e.__u && (e.type = null),
    Pc && Pc(e)
}
,
(sr.prototype = new Oe).__c = function(e, t) {
    var r = t.__c
      , n = this;
    n.o == null && (n.o = []),
    n.o.push(r);
    var a = uf(n.__v)
      , i = !1
      , o = function() {
        i || (i = !0,
        r.__R = null,
        a ? a(s) : s())
    };
    r.__R = o;
    var s = function() {
        if (!--n.__u) {
            if (n.state.__a) {
                var u = n.state.__a;
                n.__v.__k[0] = sf(u, u.__c.__P, u.__c.__O)
            }
            var c;
            for (n.setState({
                __a: n.__b = null
            }); c = n.o.pop(); )
                c.forceUpdate()
        }
    };
    n.__u++ || 32 & t.__u || n.setState({
        __a: n.__b = n.__v.__k[0]
    }),
    e.then(o, o)
}
,
sr.prototype.componentWillUnmount = function() {
    this.o = []
}
,
sr.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var r = document.createElement("div")
              , n = this.__v.__k[0].__c;
            this.__v.__k[0] = of(this.__b, r, n.__O = n.__P)
        }
        this.__b = null
    }
    var a = t.__a && T(Pe, null, e.fallback);
    return a && (a.__u &= -33),
    [T(Pe, null, t.__a ? null : e.children), a]
}
;
var Ec = function(e, t, r) {
    if (++r[1] === r[0] && e.l.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
        for (r = e.i; r; ) {
            for (; r.length > 3; )
                r.pop()();
            if (r[1] < r[0])
                break;
            e.i = r = r[2]
        }
};
function Rm(e) {
    return this.getChildContext = function() {
        return e.context
    }
    ,
    e.children
}
function Cm(e) {
    var t = this
      , r = e.h;
    t.componentWillUnmount = function() {
        gr(null, t.v),
        t.v = null,
        t.h = null
    }
    ,
    t.h && t.h !== r && t.componentWillUnmount(),
    t.v || (t.h = r,
    t.v = {
        nodeType: 1,
        parentNode: r,
        childNodes: [],
        contains: function() {
            return !0
        },
        appendChild: function(n) {
            this.childNodes.push(n),
            t.h.appendChild(n)
        },
        insertBefore: function(n, a) {
            this.childNodes.push(n),
            t.h.insertBefore(n, a)
        },
        removeChild: function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
            t.h.removeChild(n)
        }
    }),
    gr(T(Rm, {
        context: t.context
    }, e.__v), t.v)
}
function lf(e, t) {
    var r = T(Cm, {
        __v: e,
        h: t
    });
    return r.containerInfo = t,
    r
}
(Ct.prototype = new Oe).__a = function(e) {
    var t = this
      , r = uf(t.__v)
      , n = t.l.get(e);
    return n[0]++,
    function(a) {
        var i = function() {
            t.props.revealOrder ? (n.push(a),
            Ec(t, e, n)) : a()
        };
        r ? r(i) : i()
    }
}
,
Ct.prototype.render = function(e) {
    this.i = null,
    this.l = new Map;
    var t = He(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var r = t.length; r--; )
        this.l.set(t[r], this.i = [1, 0, this.i]);
    return e.children
}
,
Ct.prototype.componentDidUpdate = Ct.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, r) {
        Ec(e, r, t)
    })
}
;
var ff = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103
  , Tm = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
  , Lm = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
  , Im = /[A-Z0-9]/g
  , Nm = typeof document < "u"
  , jm = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
};
function df(e, t, r) {
    return t.__k == null && (t.textContent = ""),
    gr(e, t),
    typeof r == "function" && r(),
    e ? e.__c : null
}
function pf(e, t, r) {
    return Ql(e, t),
    typeof r == "function" && r(),
    e ? e.__c : null
}
Oe.prototype.isReactComponent = {},
["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Oe.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var Ac = N.event;
function Dm() {}
function Mm() {
    return this.cancelBubble
}
function $m() {
    return this.defaultPrevented
}
N.event = function(e) {
    return Ac && (e = Ac(e)),
    e.persist = Dm,
    e.isPropagationStopped = Mm,
    e.isDefaultPrevented = $m,
    e.nativeEvent = e
}
;
var ko, Um = {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this.class
    }
}, Rc = N.vnode;
N.vnode = function(e) {
    typeof e.type == "string" && function(t) {
        var r = t.props
          , n = t.type
          , a = {}
          , i = n.indexOf("-") === -1;
        for (var o in r) {
            var s = r[o];
            if (!(o === "value" && "defaultValue"in r && s == null || Nm && o === "children" && n === "noscript" || o === "class" || o === "className")) {
                var u = o.toLowerCase();
                o === "defaultValue" && "value"in r && r.value == null ? o = "value" : o === "download" && s === !0 ? s = "" : u === "translate" && s === "no" ? s = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? o = "ondblclick" : u !== "onchange" || n !== "input" && n !== "textarea" || jm(r.type) ? u === "onfocus" ? o = "onfocusin" : u === "onblur" ? o = "onfocusout" : Lm.test(o) && (o = u) : u = o = "oninput" : i && Tm.test(o) ? o = o.replace(Im, "-$&").toLowerCase() : s === null && (s = void 0),
                u === "oninput" && a[o = u] && (o = "oninputCapture"),
                a[o] = s
            }
        }
        n == "select" && a.multiple && Array.isArray(a.value) && (a.value = He(r.children).forEach(function(c) {
            c.props.selected = a.value.indexOf(c.props.value) != -1
        })),
        n == "select" && a.defaultValue != null && (a.value = He(r.children).forEach(function(c) {
            c.props.selected = a.multiple ? a.defaultValue.indexOf(c.props.value) != -1 : a.defaultValue == c.props.value
        })),
        r.class && !r.className ? (a.class = r.class,
        Object.defineProperty(a, "className", Um)) : (r.className && !r.class || r.class && r.className) && (a.class = a.className = r.className),
        t.props = a
    }(e),
    e.$$typeof = ff,
    Rc && Rc(e)
}
;
var Cc = N.__r;
N.__r = function(e) {
    Cc && Cc(e),
    ko = e.__c
}
;
var Tc = N.diffed;
N.diffed = function(e) {
    Tc && Tc(e);
    var t = e.props
      , r = e.__e;
    r != null && e.type === "textarea" && "value"in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value),
    ko = null
}
;
var gf = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return ko.__n[e.__c].props.value
            },
            useCallback: ft,
            useContext: po,
            useDebugValue: go,
            useDeferredValue: yo,
            useEffect: lt,
            useId: ho,
            useImperativeHandle: fo,
            useInsertionEffect: wo,
            useLayoutEffect: Vt,
            useMemo: be,
            useReducer: cn,
            useRef: wr,
            useState: St,
            useSyncExternalStore: vo,
            useTransition: bo
        }
    }
}
  , qm = "18.3.1";
function hf(e) {
    return T.bind(null, e)
}
function Sr(e) {
    return !!e && e.$$typeof === ff
}
function mf(e) {
    return Sr(e) && e.type === Pe
}
function vf(e) {
    return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
}
function _f(e) {
    return Sr(e) ? km.apply(null, arguments) : e
}
function yf(e) {
    return !!e.__k && (gr(null, e),
    !0)
}
function bf(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var wf = function(e, t) {
    return e(t)
}
  , Sf = function(e, t) {
    return e(t)
}
  , kf = Pe
  , Of = Sr
  , $r = {
    useState: St,
    useId: ho,
    useReducer: cn,
    useEffect: lt,
    useLayoutEffect: Vt,
    useInsertionEffect: wo,
    useTransition: bo,
    useDeferredValue: yo,
    useSyncExternalStore: vo,
    startTransition: _o,
    useRef: wr,
    useImperativeHandle: fo,
    useMemo: be,
    useCallback: ft,
    useContext: po,
    useDebugValue: go,
    version: "18.3.1",
    Children: af,
    render: df,
    hydrate: pf,
    unmountComponentAtNode: yf,
    createPortal: lf,
    createElement: T,
    createContext: ef,
    createFactory: hf,
    cloneElement: _f,
    createRef: Hl,
    Fragment: Pe,
    isValidElement: Sr,
    isElement: Of,
    isFragment: mf,
    isMemo: vf,
    findDOMNode: bf,
    Component: Oe,
    PureComponent: Yr,
    memo: So,
    forwardRef: qe,
    flushSync: Sf,
    unstable_batchedUpdates: wf,
    StrictMode: kf,
    Suspense: sr,
    SuspenseList: Ct,
    lazy: cf,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: gf
};
const Iy = Object.freeze(Object.defineProperty({
    __proto__: null,
    Children: af,
    Component: Oe,
    Fragment: Pe,
    PureComponent: Yr,
    StrictMode: kf,
    Suspense: sr,
    SuspenseList: Ct,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: gf,
    cloneElement: _f,
    createContext: ef,
    createElement: T,
    createFactory: hf,
    createPortal: lf,
    createRef: Hl,
    default: $r,
    findDOMNode: bf,
    flushSync: Sf,
    forwardRef: qe,
    hydrate: pf,
    isElement: Of,
    isFragment: mf,
    isMemo: vf,
    isValidElement: Sr,
    lazy: cf,
    memo: So,
    render: df,
    startTransition: _o,
    unmountComponentAtNode: yf,
    unstable_batchedUpdates: wf,
    useCallback: ft,
    useContext: po,
    useDebugValue: go,
    useDeferredValue: yo,
    useEffect: lt,
    useErrorBoundary: Om,
    useId: ho,
    useImperativeHandle: fo,
    useInsertionEffect: wo,
    useLayoutEffect: Vt,
    useMemo: be,
    useReducer: cn,
    useRef: wr,
    useState: St,
    useSyncExternalStore: vo,
    useTransition: bo,
    version: qm
}, Symbol.toStringTag, {
    value: "Module"
}));
var Fm = 0;
function V(e, t, r, n, a, i) {
    t || (t = {});
    var o, s, u = t;
    if ("ref"in u)
        for (s in u = {},
        t)
            s == "ref" ? o = t[s] : u[s] = t[s];
    var c = {
        type: e,
        props: u,
        key: r,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --Fm,
        __i: -1,
        __u: 0,
        __source: a,
        __self: i
    };
    if (typeof e == "function" && (o = e.defaultProps))
        for (s in o)
            u[s] === void 0 && (u[s] = o[s]);
    return N.vnode && N.vnode(c),
    c
}
const Oo = "-"
  , Gm = e => {
    const t = Vm(e)
      , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
    return {
        getClassGroupId: o => {
            const s = o.split(Oo);
            return s[0] === "" && s.length !== 1 && s.shift(),
            xf(s, t) || zm(o)
        }
        ,
        getConflictingClassGroupIds: (o, s) => {
            const u = r[o] || [];
            return s && n[o] ? [...u, ...n[o]] : u
        }
    }
}
  , xf = (e, t) => {
    if (e.length === 0)
        return t.classGroupId;
    const r = e[0]
      , n = t.nextPart.get(r)
      , a = n ? xf(e.slice(1), n) : void 0;
    if (a)
        return a;
    if (t.validators.length === 0)
        return;
    const i = e.join(Oo);
    return t.validators.find( ({validator: o}) => o(i))?.classGroupId
}
  , Lc = /^\[(.+)\]$/
  , zm = e => {
    if (Lc.test(e)) {
        const t = Lc.exec(e)[1]
          , r = t?.substring(0, t.indexOf(":"));
        if (r)
            return "arbitrary.." + r
    }
}
  , Vm = e => {
    const {theme: t, classGroups: r} = e
      , n = {
        nextPart: new Map,
        validators: []
    };
    for (const a in r)
        Ci(r[a], n, a, t);
    return n
}
  , Ci = (e, t, r, n) => {
    e.forEach(a => {
        if (typeof a == "string") {
            const i = a === "" ? t : Ic(t, a);
            i.classGroupId = r;
            return
        }
        if (typeof a == "function") {
            if (Km(a)) {
                Ci(a(n), t, r, n);
                return
            }
            t.validators.push({
                validator: a,
                classGroupId: r
            });
            return
        }
        Object.entries(a).forEach( ([i,o]) => {
            Ci(o, Ic(t, i), r, n)
        }
        )
    }
    )
}
  , Ic = (e, t) => {
    let r = e;
    return t.split(Oo).forEach(n => {
        r.nextPart.has(n) || r.nextPart.set(n, {
            nextPart: new Map,
            validators: []
        }),
        r = r.nextPart.get(n)
    }
    ),
    r
}
  , Km = e => e.isThemeGetter
  , Hm = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , r = new Map
      , n = new Map;
    const a = (i, o) => {
        r.set(i, o),
        t++,
        t > e && (t = 0,
        n = r,
        r = new Map)
    }
    ;
    return {
        get(i) {
            let o = r.get(i);
            if (o !== void 0)
                return o;
            if ((o = n.get(i)) !== void 0)
                return a(i, o),
                o
        },
        set(i, o) {
            r.has(i) ? r.set(i, o) : a(i, o)
        }
    }
}
  , Ti = "!"
  , Li = ":"
  , Bm = Li.length
  , Wm = e => {
    const {prefix: t, experimentalParseClassName: r} = e;
    let n = a => {
        const i = [];
        let o = 0, s = 0, u = 0, c;
        for (let g = 0; g < a.length; g++) {
            let h = a[g];
            if (o === 0 && s === 0) {
                if (h === Li) {
                    i.push(a.slice(u, g)),
                    u = g + Bm;
                    continue
                }
                if (h === "/") {
                    c = g;
                    continue
                }
            }
            h === "[" ? o++ : h === "]" ? o-- : h === "(" ? s++ : h === ")" && s--
        }
        const p = i.length === 0 ? a : a.substring(u)
          , l = Jm(p)
          , f = l !== p
          , d = c && c > u ? c - u : void 0;
        return {
            modifiers: i,
            hasImportantModifier: f,
            baseClassName: l,
            maybePostfixModifierPosition: d
        }
    }
    ;
    if (t) {
        const a = t + Li
          , i = n;
        n = o => o.startsWith(a) ? i(o.substring(a.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: o,
            maybePostfixModifierPosition: void 0
        }
    }
    if (r) {
        const a = n;
        n = i => r({
            className: i,
            parseClassName: a
        })
    }
    return n
}
  , Jm = e => e.endsWith(Ti) ? e.substring(0, e.length - 1) : e.startsWith(Ti) ? e.substring(1) : e
  , Ym = e => {
    const t = Object.fromEntries(e.orderSensitiveModifiers.map(n => [n, !0]));
    return n => {
        if (n.length <= 1)
            return n;
        const a = [];
        let i = [];
        return n.forEach(o => {
            o[0] === "[" || t[o] ? (a.push(...i.sort(), o),
            i = []) : i.push(o)
        }
        ),
        a.push(...i.sort()),
        a
    }
}
  , Xm = e => ({
    cache: Hm(e.cacheSize),
    parseClassName: Wm(e),
    sortModifiers: Ym(e),
    ...Gm(e)
})
  , Zm = /\s+/
  , Qm = (e, t) => {
    const {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: a, sortModifiers: i} = t
      , o = []
      , s = e.trim().split(Zm);
    let u = "";
    for (let c = s.length - 1; c >= 0; c -= 1) {
        const p = s[c]
          , {isExternal: l, modifiers: f, hasImportantModifier: d, baseClassName: g, maybePostfixModifierPosition: h} = r(p);
        if (l) {
            u = p + (u.length > 0 ? " " + u : u);
            continue
        }
        let m = !!h
          , v = n(m ? g.substring(0, h) : g);
        if (!v) {
            if (!m) {
                u = p + (u.length > 0 ? " " + u : u);
                continue
            }
            if (v = n(g),
            !v) {
                u = p + (u.length > 0 ? " " + u : u);
                continue
            }
            m = !1
        }
        const _ = i(f).join(":")
          , b = d ? _ + Ti : _
          , y = b + v;
        if (o.includes(y))
            continue;
        o.push(y);
        const w = a(v, m);
        for (let k = 0; k < w.length; ++k) {
            const O = w[k];
            o.push(b + O)
        }
        u = p + (u.length > 0 ? " " + u : u)
    }
    return u
}
;
function ev() {
    let e = 0, t, r, n = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (r = Pf(t)) && (n && (n += " "),
        n += r);
    return n
}
const Pf = e => {
    if (typeof e == "string")
        return e;
    let t, r = "";
    for (let n = 0; n < e.length; n++)
        e[n] && (t = Pf(e[n])) && (r && (r += " "),
        r += t);
    return r
}
;
function tv(e, ...t) {
    let r, n, a, i = o;
    function o(u) {
        const c = t.reduce( (p, l) => l(p), e());
        return r = Xm(c),
        n = r.cache.get,
        a = r.cache.set,
        i = s,
        s(u)
    }
    function s(u) {
        const c = n(u);
        if (c)
            return c;
        const p = Qm(u, r);
        return a(u, p),
        p
    }
    return function() {
        return i(ev.apply(null, arguments))
    }
}
const Q = e => {
    const t = r => r[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Ef = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Af = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , rv = /^\d+\/\d+$/
  , nv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , av = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , iv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , ov = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , sv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Rt = e => rv.test(e)
  , j = e => !!e && !Number.isNaN(Number(e))
  , tt = e => !!e && Number.isInteger(Number(e))
  , fi = e => e.endsWith("%") && j(e.slice(0, -1))
  , ze = e => nv.test(e)
  , uv = () => !0
  , cv = e => av.test(e) && !iv.test(e)
  , Rf = () => !1
  , lv = e => ov.test(e)
  , fv = e => sv.test(e)
  , dv = e => !x(e) && !P(e)
  , pv = e => Kt(e, Lf, Rf)
  , x = e => Ef.test(e)
  , ht = e => Kt(e, If, cv)
  , di = e => Kt(e, _v, j)
  , Nc = e => Kt(e, Cf, Rf)
  , gv = e => Kt(e, Tf, fv)
  , Nr = e => Kt(e, Nf, lv)
  , P = e => Af.test(e)
  , Xt = e => Ht(e, If)
  , hv = e => Ht(e, yv)
  , jc = e => Ht(e, Cf)
  , mv = e => Ht(e, Lf)
  , vv = e => Ht(e, Tf)
  , jr = e => Ht(e, Nf, !0)
  , Kt = (e, t, r) => {
    const n = Ef.exec(e);
    return n ? n[1] ? t(n[1]) : r(n[2]) : !1
}
  , Ht = (e, t, r=!1) => {
    const n = Af.exec(e);
    return n ? n[1] ? t(n[1]) : r : !1
}
  , Cf = e => e === "position" || e === "percentage"
  , Tf = e => e === "image" || e === "url"
  , Lf = e => e === "length" || e === "size" || e === "bg-size"
  , If = e => e === "length"
  , _v = e => e === "number"
  , yv = e => e === "family-name"
  , Nf = e => e === "shadow"
  , bv = () => {
    const e = Q("color")
      , t = Q("font")
      , r = Q("text")
      , n = Q("font-weight")
      , a = Q("tracking")
      , i = Q("leading")
      , o = Q("breakpoint")
      , s = Q("container")
      , u = Q("spacing")
      , c = Q("radius")
      , p = Q("shadow")
      , l = Q("inset-shadow")
      , f = Q("text-shadow")
      , d = Q("drop-shadow")
      , g = Q("blur")
      , h = Q("perspective")
      , m = Q("aspect")
      , v = Q("ease")
      , _ = Q("animate")
      , b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , y = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , w = () => [...y(), P, x]
      , k = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , O = () => ["auto", "contain", "none"]
      , S = () => [P, x, u]
      , R = () => [Rt, "full", "auto", ...S()]
      , L = () => [tt, "none", "subgrid", P, x]
      , E = () => ["auto", {
        span: ["full", tt, P, x]
    }, tt, P, x]
      , U = () => [tt, "auto", P, x]
      , W = () => ["auto", "min", "max", "fr", P, x]
      , X = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , re = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , J = () => ["auto", ...S()]
      , Z = () => [Rt, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()]
      , A = () => [e, P, x]
      , Ee = () => [...y(), jc, Nc, {
        position: [P, x]
    }]
      , Ze = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , pe = () => ["auto", "cover", "contain", mv, pv, {
        size: [P, x]
    }]
      , ge = () => [fi, Xt, ht]
      , K = () => ["", "none", "full", c, P, x]
      , B = () => ["", j, Xt, ht]
      , ce = () => ["solid", "dashed", "dotted", "double"]
      , le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , q = () => [j, fi, jc, Nc]
      , Fe = () => ["", "none", g, P, x]
      , Ae = () => ["none", j, P, x]
      , he = () => ["none", j, P, x]
      , oe = () => [j, P, x]
      , Re = () => [Rt, "full", ...S()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [ze],
            breakpoint: [ze],
            color: [uv],
            container: [ze],
            "drop-shadow": [ze],
            ease: ["in", "out", "in-out"],
            font: [dv],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [ze],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [ze],
            shadow: [ze],
            spacing: ["px", j],
            text: [ze],
            "text-shadow": [ze],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", Rt, x, P, m]
            }],
            container: ["container"],
            columns: [{
                columns: [j, x, P, s]
            }],
            "break-after": [{
                "break-after": b()
            }],
            "break-before": [{
                "break-before": b()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: w()
            }],
            overflow: [{
                overflow: k()
            }],
            "overflow-x": [{
                "overflow-x": k()
            }],
            "overflow-y": [{
                "overflow-y": k()
            }],
            overscroll: [{
                overscroll: O()
            }],
            "overscroll-x": [{
                "overscroll-x": O()
            }],
            "overscroll-y": [{
                "overscroll-y": O()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: R()
            }],
            "inset-x": [{
                "inset-x": R()
            }],
            "inset-y": [{
                "inset-y": R()
            }],
            start: [{
                start: R()
            }],
            end: [{
                end: R()
            }],
            top: [{
                top: R()
            }],
            right: [{
                right: R()
            }],
            bottom: [{
                bottom: R()
            }],
            left: [{
                left: R()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [tt, "auto", P, x]
            }],
            basis: [{
                basis: [Rt, "full", "auto", s, ...S()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [j, Rt, "auto", "initial", "none", x]
            }],
            grow: [{
                grow: ["", j, P, x]
            }],
            shrink: [{
                shrink: ["", j, P, x]
            }],
            order: [{
                order: [tt, "first", "last", "none", P, x]
            }],
            "grid-cols": [{
                "grid-cols": L()
            }],
            "col-start-end": [{
                col: E()
            }],
            "col-start": [{
                "col-start": U()
            }],
            "col-end": [{
                "col-end": U()
            }],
            "grid-rows": [{
                "grid-rows": L()
            }],
            "row-start-end": [{
                row: E()
            }],
            "row-start": [{
                "row-start": U()
            }],
            "row-end": [{
                "row-end": U()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": W()
            }],
            "auto-rows": [{
                "auto-rows": W()
            }],
            gap: [{
                gap: S()
            }],
            "gap-x": [{
                "gap-x": S()
            }],
            "gap-y": [{
                "gap-y": S()
            }],
            "justify-content": [{
                justify: [...X(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...re(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...re()]
            }],
            "align-content": [{
                content: ["normal", ...X()]
            }],
            "align-items": [{
                items: [...re(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...re(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": X()
            }],
            "place-items": [{
                "place-items": [...re(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...re()]
            }],
            p: [{
                p: S()
            }],
            px: [{
                px: S()
            }],
            py: [{
                py: S()
            }],
            ps: [{
                ps: S()
            }],
            pe: [{
                pe: S()
            }],
            pt: [{
                pt: S()
            }],
            pr: [{
                pr: S()
            }],
            pb: [{
                pb: S()
            }],
            pl: [{
                pl: S()
            }],
            m: [{
                m: J()
            }],
            mx: [{
                mx: J()
            }],
            my: [{
                my: J()
            }],
            ms: [{
                ms: J()
            }],
            me: [{
                me: J()
            }],
            mt: [{
                mt: J()
            }],
            mr: [{
                mr: J()
            }],
            mb: [{
                mb: J()
            }],
            ml: [{
                ml: J()
            }],
            "space-x": [{
                "space-x": S()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": S()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: Z()
            }],
            w: [{
                w: [s, "screen", ...Z()]
            }],
            "min-w": [{
                "min-w": [s, "screen", "none", ...Z()]
            }],
            "max-w": [{
                "max-w": [s, "screen", "none", "prose", {
                    screen: [o]
                }, ...Z()]
            }],
            h: [{
                h: ["screen", ...Z()]
            }],
            "min-h": [{
                "min-h": ["screen", "none", ...Z()]
            }],
            "max-h": [{
                "max-h": ["screen", ...Z()]
            }],
            "font-size": [{
                text: ["base", r, Xt, ht]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [n, P, di]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", fi, x]
            }],
            "font-family": [{
                font: [hv, x, t]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [a, P, x]
            }],
            "line-clamp": [{
                "line-clamp": [j, "none", P, di]
            }],
            leading: [{
                leading: [i, ...S()]
            }],
            "list-image": [{
                "list-image": ["none", P, x]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", P, x]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: A()
            }],
            "text-color": [{
                text: A()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...ce(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [j, "from-font", "auto", P, ht]
            }],
            "text-decoration-color": [{
                decoration: A()
            }],
            "underline-offset": [{
                "underline-offset": [j, "auto", P, x]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: S()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P, x]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", P, x]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: Ee()
            }],
            "bg-repeat": [{
                bg: Ze()
            }],
            "bg-size": [{
                bg: pe()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, tt, P, x],
                    radial: ["", P, x],
                    conic: [tt, P, x]
                }, vv, gv]
            }],
            "bg-color": [{
                bg: A()
            }],
            "gradient-from-pos": [{
                from: ge()
            }],
            "gradient-via-pos": [{
                via: ge()
            }],
            "gradient-to-pos": [{
                to: ge()
            }],
            "gradient-from": [{
                from: A()
            }],
            "gradient-via": [{
                via: A()
            }],
            "gradient-to": [{
                to: A()
            }],
            rounded: [{
                rounded: K()
            }],
            "rounded-s": [{
                "rounded-s": K()
            }],
            "rounded-e": [{
                "rounded-e": K()
            }],
            "rounded-t": [{
                "rounded-t": K()
            }],
            "rounded-r": [{
                "rounded-r": K()
            }],
            "rounded-b": [{
                "rounded-b": K()
            }],
            "rounded-l": [{
                "rounded-l": K()
            }],
            "rounded-ss": [{
                "rounded-ss": K()
            }],
            "rounded-se": [{
                "rounded-se": K()
            }],
            "rounded-ee": [{
                "rounded-ee": K()
            }],
            "rounded-es": [{
                "rounded-es": K()
            }],
            "rounded-tl": [{
                "rounded-tl": K()
            }],
            "rounded-tr": [{
                "rounded-tr": K()
            }],
            "rounded-br": [{
                "rounded-br": K()
            }],
            "rounded-bl": [{
                "rounded-bl": K()
            }],
            "border-w": [{
                border: B()
            }],
            "border-w-x": [{
                "border-x": B()
            }],
            "border-w-y": [{
                "border-y": B()
            }],
            "border-w-s": [{
                "border-s": B()
            }],
            "border-w-e": [{
                "border-e": B()
            }],
            "border-w-t": [{
                "border-t": B()
            }],
            "border-w-r": [{
                "border-r": B()
            }],
            "border-w-b": [{
                "border-b": B()
            }],
            "border-w-l": [{
                "border-l": B()
            }],
            "divide-x": [{
                "divide-x": B()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": B()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...ce(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...ce(), "hidden", "none"]
            }],
            "border-color": [{
                border: A()
            }],
            "border-color-x": [{
                "border-x": A()
            }],
            "border-color-y": [{
                "border-y": A()
            }],
            "border-color-s": [{
                "border-s": A()
            }],
            "border-color-e": [{
                "border-e": A()
            }],
            "border-color-t": [{
                "border-t": A()
            }],
            "border-color-r": [{
                "border-r": A()
            }],
            "border-color-b": [{
                "border-b": A()
            }],
            "border-color-l": [{
                "border-l": A()
            }],
            "divide-color": [{
                divide: A()
            }],
            "outline-style": [{
                outline: [...ce(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [j, P, x]
            }],
            "outline-w": [{
                outline: ["", j, Xt, ht]
            }],
            "outline-color": [{
                outline: A()
            }],
            shadow: [{
                shadow: ["", "none", p, jr, Nr]
            }],
            "shadow-color": [{
                shadow: A()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", l, jr, Nr]
            }],
            "inset-shadow-color": [{
                "inset-shadow": A()
            }],
            "ring-w": [{
                ring: B()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: A()
            }],
            "ring-offset-w": [{
                "ring-offset": [j, ht]
            }],
            "ring-offset-color": [{
                "ring-offset": A()
            }],
            "inset-ring-w": [{
                "inset-ring": B()
            }],
            "inset-ring-color": [{
                "inset-ring": A()
            }],
            "text-shadow": [{
                "text-shadow": ["none", f, jr, Nr]
            }],
            "text-shadow-color": [{
                "text-shadow": A()
            }],
            opacity: [{
                opacity: [j, P, x]
            }],
            "mix-blend": [{
                "mix-blend": [...le(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": le()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [j]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": q()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": q()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": A()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": A()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": q()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": q()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": A()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": A()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": q()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": q()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": A()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": A()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": q()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": q()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": A()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": A()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": q()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": q()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": A()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": A()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": q()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": q()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": A()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": A()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": q()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": q()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": A()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": A()
            }],
            "mask-image-radial": [{
                "mask-radial": [P, x]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": q()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": q()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": A()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": A()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": y()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [j]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": q()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": q()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": A()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": A()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: Ee()
            }],
            "mask-repeat": [{
                mask: Ze()
            }],
            "mask-size": [{
                mask: pe()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", P, x]
            }],
            filter: [{
                filter: ["", "none", P, x]
            }],
            blur: [{
                blur: Fe()
            }],
            brightness: [{
                brightness: [j, P, x]
            }],
            contrast: [{
                contrast: [j, P, x]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", d, jr, Nr]
            }],
            "drop-shadow-color": [{
                "drop-shadow": A()
            }],
            grayscale: [{
                grayscale: ["", j, P, x]
            }],
            "hue-rotate": [{
                "hue-rotate": [j, P, x]
            }],
            invert: [{
                invert: ["", j, P, x]
            }],
            saturate: [{
                saturate: [j, P, x]
            }],
            sepia: [{
                sepia: ["", j, P, x]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", P, x]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Fe()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [j, P, x]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [j, P, x]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", j, P, x]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [j, P, x]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", j, P, x]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [j, P, x]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [j, P, x]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", j, P, x]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": S()
            }],
            "border-spacing-x": [{
                "border-spacing-x": S()
            }],
            "border-spacing-y": [{
                "border-spacing-y": S()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", P, x]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [j, "initial", P, x]
            }],
            ease: [{
                ease: ["linear", "initial", v, P, x]
            }],
            delay: [{
                delay: [j, P, x]
            }],
            animate: [{
                animate: ["none", _, P, x]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [h, P, x]
            }],
            "perspective-origin": [{
                "perspective-origin": w()
            }],
            rotate: [{
                rotate: Ae()
            }],
            "rotate-x": [{
                "rotate-x": Ae()
            }],
            "rotate-y": [{
                "rotate-y": Ae()
            }],
            "rotate-z": [{
                "rotate-z": Ae()
            }],
            scale: [{
                scale: he()
            }],
            "scale-x": [{
                "scale-x": he()
            }],
            "scale-y": [{
                "scale-y": he()
            }],
            "scale-z": [{
                "scale-z": he()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: oe()
            }],
            "skew-x": [{
                "skew-x": oe()
            }],
            "skew-y": [{
                "skew-y": oe()
            }],
            transform: [{
                transform: [P, x, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: w()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: Re()
            }],
            "translate-x": [{
                "translate-x": Re()
            }],
            "translate-y": [{
                "translate-y": Re()
            }],
            "translate-z": [{
                "translate-z": Re()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: A()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: A()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P, x]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": S()
            }],
            "scroll-mx": [{
                "scroll-mx": S()
            }],
            "scroll-my": [{
                "scroll-my": S()
            }],
            "scroll-ms": [{
                "scroll-ms": S()
            }],
            "scroll-me": [{
                "scroll-me": S()
            }],
            "scroll-mt": [{
                "scroll-mt": S()
            }],
            "scroll-mr": [{
                "scroll-mr": S()
            }],
            "scroll-mb": [{
                "scroll-mb": S()
            }],
            "scroll-ml": [{
                "scroll-ml": S()
            }],
            "scroll-p": [{
                "scroll-p": S()
            }],
            "scroll-px": [{
                "scroll-px": S()
            }],
            "scroll-py": [{
                "scroll-py": S()
            }],
            "scroll-ps": [{
                "scroll-ps": S()
            }],
            "scroll-pe": [{
                "scroll-pe": S()
            }],
            "scroll-pt": [{
                "scroll-pt": S()
            }],
            "scroll-pr": [{
                "scroll-pr": S()
            }],
            "scroll-pb": [{
                "scroll-pb": S()
            }],
            "scroll-pl": [{
                "scroll-pl": S()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", P, x]
            }],
            fill: [{
                fill: ["none", ...A()]
            }],
            "stroke-w": [{
                stroke: [j, Xt, ht, di]
            }],
            stroke: [{
                stroke: ["none", ...A()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , pi = tv(bv)
  , Bt = qe( ({IconSvg: e, width: t, height: r, viewBox: n, style: a, containerStyle: i, className: o="", containerClassName: s=""}, u) => V("div", {
    ref: u,
    ...s && {
        className: s
    },
    ...i && {
        style: i
    },
    children: V(e, {
        ...t && {
            width: t
        },
        ...r && {
            height: r
        },
        ...n && {
            viewBox: n
        },
        ...o && {
            className: o
        },
        ...a && {
            style: a
        }
    })
}));
var Dc, Mc;
function Ii() {
    return Ii = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Ii.apply(null, arguments)
}
var wv = function(e) {
    return T("svg", Ii({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, e), Dc || (Dc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
        clipRule: "evenodd"
    })), Mc || (Mc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M17.707 7.793a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 13.086l5.293-5.293a1 1 0 0 1 1.414 0",
        clipRule: "evenodd"
    })))
};
const Sv = qe( (e, t) => V(Bt, {
    ref: t,
    IconSvg: wv,
    ...e
}));
var $c;
function Ni() {
    return Ni = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Ni.apply(null, arguments)
}
var kv = function(e) {
    return T("svg", Ni({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, e), $c || ($c = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M11.648 16a1 1 0 0 1-.729-.315l-5.647-6a1 1 0 0 1 1.456-1.37l4.92 5.226 4.919-5.226a1 1 0 0 1 1.456 1.37l-5.647 6a1 1 0 0 1-.728.315",
        clipRule: "evenodd"
    })))
};
const Ov = qe( (e, t) => V(Bt, {
    ref: t,
    IconSvg: kv,
    ...e
}));
var Uc, qc, Fc;
function ji() {
    return ji = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    ji.apply(null, arguments)
}
var xv = function(e) {
    return T("svg", ji({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, e), Uc || (Uc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12",
        clipRule: "evenodd"
    })), qc || (qc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M8.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414",
        clipRule: "evenodd"
    })), Fc || (Fc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M15.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0",
        clipRule: "evenodd"
    })))
};
const Pv = qe( (e, t) => V(Bt, {
    ref: t,
    IconSvg: xv,
    ...e
}));
var Gc, zc;
function Di() {
    return Di = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Di.apply(null, arguments)
}
var Ev = function(e) {
    return T("svg", Di({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, e), Gc || (Gc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M5.315 5.315a1.08 1.08 0 0 1 1.523 0l11.847 11.847a1.077 1.077 0 0 1-1.523 1.523L5.315 6.838a1.077 1.077 0 0 1 0-1.523",
        clipRule: "evenodd"
    })), zc || (zc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M18.685 5.315c.42.421.42 1.103 0 1.523L6.838 18.685a1.077 1.077 0 0 1-1.523-1.523L17.162 5.315c.42-.42 1.102-.42 1.523 0",
        clipRule: "evenodd"
    })))
};
const Av = qe( (e, t) => V(Bt, {
    ref: t,
    IconSvg: Ev,
    ...e
}));
var Vc, Kc, Hc;
function Mi() {
    return Mi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    Mi.apply(null, arguments)
}
var Rv = function(e) {
    return T("svg", Mi({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, e), Vc || (Vc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12",
        clipRule: "evenodd"
    })), Kc || (Kc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1",
        clipRule: "evenodd"
    })), Hc || (Hc = T("circle", {
        cx: 12,
        cy: 16,
        r: 1,
        fill: "inherit"
    })))
};
const Cv = qe( (e, t) => V(Bt, {
    ref: t,
    IconSvg: Rv,
    ...e
}));
var Bc;
function $i() {
    return $i = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    $i.apply(null, arguments)
}
var Tv = function(e) {
    return T("svg", $i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "currentColor"
    }, e), Bc || (Bc = T("path", {
        fill: "inherit",
        fillRule: "evenodd",
        d: "M20 11.955a7.96 7.96 0 0 0-1.326-4.413c-.292-.44-.27-1.034.106-1.403.414-.406 1.09-.382 1.421.093A9.95 9.95 0 0 1 22 11.955c0 4.931-3.569 9.028-8.264 9.85-.574.1-1.07-.366-1.07-.949 0-.524.406-.955.92-1.058A8 8 0 0 0 20 11.955M5.894 18.643c.409-.402.39-1.062.018-1.498a8.001 8.001 0 0 1 5.09-13.128c.548-.068.998-.51.998-1.062s-.449-1.005-.999-.95A10 10 0 0 0 2 11.954c0 2.566.966 4.906 2.555 6.677.354.394.96.381 1.339.01Z",
        clipRule: "evenodd"
    })))
};
const jf = qe( (e, t) => V(Bt, {
    ref: t,
    IconSvg: Tv,
    ...e
}))
  , Lv = qe( ({type: e="default", size: t="default", disabled: r=!1, loading: n=!1, block: a=!1, htmlType: i="button", href: o, target: s="_self", icon: u, children: c, className: p="", style: l, onClick: f, ...d}, g) => {
    const h = be( () => e === "link" || e === "text", [e])
      , m = be( () => !c && !!u, [c, u])
      , v = be( () => !!c && !!u, [c, u])
      , _ = ft(O => {
        f?.(O)
    }
    , [f])
      , b = o ? "a" : "button"
      , y = be( () => ({
        "scale-[0.67]": t === "small",
        "scale-[0.75]": t === "middle" || t === "default",
        "scale-100": t === "large" || t === "xLarge"
    }), [t])
      , w = be( () => ({
        "scale-[0.67]": t === "small" && m,
        "scale-100": (t === "middle" || t === "default") && m,
        "scale-[1.8]": t === "large" && m,
        "scale-[2]": t === "xLarge" && m
    }), [m, t])
      , k = be( () => ({
        "scale-[0.67]": t === "small" && v,
        "scale-[0.75]": (t === "middle" || t === "default") && v,
        "scale-100": (t === "large" || t === "xLarge") && v
    }), [v, t]);
    return V(b, {
        ref: g,
        ...d,
        className: pi(It("flex items-center justify-center gap-x-0.5", {
            "border-transparent": !0,
            "bg-brand-tertiary-base text-font-overlay dark:bg-neutral-0 dark:text-font-primary": e === "primary",
            "bg-error-default text-white": e === "danger",
            "bg-transparent text-font-primary dark:text-font-overlay": e === "text",
            "bg-brand-primary-base text-font-primary": e === "highlight",
            "border-2 border-solid border-brand-tertiary-base bg-transparent text-font-primary dark:border-font-overlay dark:text-font-overlay": e === "stroke",
            "bg-transparent text-link-default dark:text-brand-secondary-secondary": e === "link",
            "bg-brand-tertiary-container text-font-primary dark:bg-font-secondary dark:text-font-overlay": e === "secondary" || e === "default",
            "hover:bg-font-secondary dark:hover:bg-neutral-3": e === "primary",
            "hover:bg-error-disabled": e === "danger",
            "hover:bg-brand-primary-container": e === "highlight",
            "hover:text-brand-secondary-secondary dark:hover:text-brand-secondary-container": e === "link",
            "dark:hover:border-neutral-3 dark:hover:bg-neutral-3": e === "stroke",
            "hover:bg-surface-tertiary dark:hover:bg-neutral-6": e === "text" || e === "stroke" || e === "secondary" || e === "default",
            "active:bg-font-secondary dark:active:bg-neutral-5": e === "primary",
            "active:bg-error-disabled": e === "danger",
            "active:bg-surface-tertiary": e === "text",
            "active:bg-brand-primary-secondary": e === "highlight",
            "active:text-brand-secondary-base ": e === "link",
            "active:bg-font-disabled dark:active:bg-neutral-5": e === "secondary" || e === "default",
            "!text-font-disabled dark:!text-font-secondary": r,
            "bg-neutral-3 dark:!bg-neutral-8": (e === "default" || e === "secondary" || e === "danger" || e === "highlight" || e === "primary") && r,
            "!border-font-disabled dark:!border-font-secondary": e === "stroke" && r,
            "opacity-100": !n,
            "opacity-40": n
        }, {
            "w-fit rounded-full px-sm": !h && !m,
            "h-6 min-w-[4.25rem] gap-x-0": t === "small" && !h && !m,
            "h-10 min-w-20": !(t !== "middle" && t !== "default" || h || m),
            "h-16 min-w-[6.25rem]": t === "large" && !h && !m,
            "h-20 min-w-[7.5rem] px-xl": t === "xLarge" && !h && !m,
            "size-fit": h,
            "gap-x-0 rounded-xs px-xs py-xxs": t === "small" && h,
            "gap-x-0 rounded-md p-xs": (t === "middle" || t === "default") && h,
            "rounded px-sm py-xs": t === "large" && h,
            "rounded px-xl py-xxs": t === "xLarge" && h,
            "rounded-full": m,
            "p-xs": (t === "middle" || t === "default") && m,
            "p-5": t === "large" && m,
            "p-6": t === "xLarge" && m
        }, {
            "text-center text-xs font-semibold": !0,
            "!text-sm": t === "middle" || t === "default",
            "!text-base": t === "large",
            "!text-xl": t === "xLarge"
        }, {
            "!w-full": a
        }, {
            "cursor-pointer": !r && !n,
            "cursor-not-allowed": r,
            "cursor-wait": n
        }), p),
        disabled: r,
        type: i,
        ...!!o && {
            href: o,
            target: s
        },
        ...!r && f && {
            onClick: _
        },
        ...l && {
            style: l
        },
        children: [n && V("div", {
            className: "animate-spin",
            "data-testid": "g123-btn-loading-spin",
            children: V(jf, {
                className: pi(It(y, w, k, u && $r.isValidElement(u) ? u.props.className : ""))
            })
        }), u && $r.isValidElement(u) && !n && $r.cloneElement(u, {
            className: pi(It(w, k, u.props.className))
        }), c && V("span", {
            className: "truncate",
            children: c
        })]
    })
}
);
let Iv = {
    data: ""
}
  , Nv = e => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
})).firstChild : e || Iv
  , jv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g
  , Dv = /\/\*[^]*?\*\/|  +/g
  , Wc = /\n+/g
  , nt = (e, t) => {
    let r = ""
      , n = ""
      , a = "";
    for (let i in e) {
        let o = e[i];
        i[0] == "@" ? i[1] == "i" ? r = i + " " + o + ";" : n += i[1] == "f" ? nt(o, i) : i + "{" + nt(o, i[1] == "k" ? "" : t) + "}" : typeof o == "object" ? n += nt(o, t ? t.replace(/([^,])+/g, s => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, u => /&/.test(u) ? u.replace(/&/g, s) : s ? s + " " + u : u)) : i) : o != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(),
        a += nt.p ? nt.p(i, o) : i + ":" + o + ";")
    }
    return r + (t && a ? t + "{" + a + "}" : a) + n
}
  , Ve = {}
  , Df = e => {
    if (typeof e == "object") {
        let t = "";
        for (let r in e)
            t += r + Df(e[r]);
        return t
    }
    return e
}
  , Mv = (e, t, r, n, a) => {
    let i = Df(e)
      , o = Ve[i] || (Ve[i] = (u => {
        let c = 0
          , p = 11;
        for (; c < u.length; )
            p = 101 * p + u.charCodeAt(c++) >>> 0;
        return "go" + p
    }
    )(i));
    if (!Ve[o]) {
        let u = i !== e ? e : (c => {
            let p, l, f = [{}];
            for (; p = jv.exec(c.replace(Dv, "")); )
                p[4] ? f.shift() : p[3] ? (l = p[3].replace(Wc, " ").trim(),
                f.unshift(f[0][l] = f[0][l] || {})) : f[0][p[1]] = p[2].replace(Wc, " ").trim();
            return f[0]
        }
        )(e);
        Ve[o] = nt(a ? {
            ["@keyframes " + o]: u
        } : u, r ? "" : "." + o)
    }
    let s = r && Ve.g ? Ve.g : null;
    return r && (Ve.g = Ve[o]),
    ( (u, c, p, l) => {
        l ? c.data = c.data.replace(l, u) : c.data.indexOf(u) === -1 && (c.data = p ? u + c.data : c.data + u)
    }
    )(Ve[o], t, n, s),
    o
}
  , $v = (e, t, r) => e.reduce( (n, a, i) => {
    let o = t[i];
    if (o && o.call) {
        let s = o(r)
          , u = s && s.props && s.props.className || /^go/.test(s) && s;
        o = u ? "." + u : s && typeof s == "object" ? s.props ? "" : nt(s, "") : s === !1 ? "" : s
    }
    return n + a + (o ?? "")
}
, "");
function ln(e) {
    let t = this || {}
      , r = e.call ? e(t.p) : e;
    return Mv(r.unshift ? r.raw ? $v(r, [].slice.call(arguments, 1), t.p) : r.reduce( (n, a) => Object.assign(n, a && a.call ? a(t.p) : a), {}) : r, Nv(t.target), t.g, t.o, t.k)
}
let Mf, Ui, qi;
ln.bind({
    g: 1
});
let Je = ln.bind({
    k: 1
});
function Uv(e, t, r, n) {
    nt.p = t,
    Mf = e,
    Ui = r,
    qi = n
}
function pt(e, t) {
    let r = this || {};
    return function() {
        let n = arguments;
        function a(i, o) {
            let s = Object.assign({}, i)
              , u = s.className || a.className;
            r.p = Object.assign({
                theme: Ui && Ui()
            }, s),
            r.o = / *go\d+/.test(u),
            s.className = ln.apply(r, n) + (u ? " " + u : "");
            let c = e;
            return e[0] && (c = s.as || e,
            delete s.as),
            qi && c[0] && qi(s),
            Mf(c, s)
        }
        return t ? t(a) : a
    }
}
var qv = e => typeof e == "function"
  , Xr = (e, t) => qv(e) ? e(t) : e
  , Fv = ( () => {
    let e = 0;
    return () => (++e).toString()
}
)()
  , $f = ( () => {
    let e;
    return () => {
        if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches
        }
        return e
    }
}
)()
  , Gv = 20
  , Uf = (e, t) => {
    switch (t.type) {
    case 0:
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, Gv)
        };
    case 1:
        return {
            ...e,
            toasts: e.toasts.map(i => i.id === t.toast.id ? {
                ...i,
                ...t.toast
            } : i)
        };
    case 2:
        let {toast: r} = t;
        return Uf(e, {
            type: e.toasts.find(i => i.id === r.id) ? 1 : 0,
            toast: r
        });
    case 3:
        let {toastId: n} = t;
        return {
            ...e,
            toasts: e.toasts.map(i => i.id === n || n === void 0 ? {
                ...i,
                dismissed: !0,
                visible: !1
            } : i)
        };
    case 4:
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(i => i.id !== t.toastId)
        };
    case 5:
        return {
            ...e,
            pausedAt: t.time
        };
    case 6:
        let a = t.time - (e.pausedAt || 0);
        return {
            ...e,
            pausedAt: void 0,
            toasts: e.toasts.map(i => ({
                ...i,
                pauseDuration: i.pauseDuration + a
            }))
        }
    }
}
  , Ur = []
  , yt = {
    toasts: [],
    pausedAt: void 0
}
  , kt = e => {
    yt = Uf(yt, e),
    Ur.forEach(t => {
        t(yt)
    }
    )
}
  , zv = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
}
  , Vv = (e={}) => {
    let[t,r] = St(yt)
      , n = wr(yt);
    lt( () => (n.current !== yt && r(yt),
    Ur.push(r),
    () => {
        let i = Ur.indexOf(r);
        i > -1 && Ur.splice(i, 1)
    }
    ), []);
    let a = t.toasts.map(i => {
        var o, s, u;
        return {
            ...e,
            ...e[i.type],
            ...i,
            removeDelay: i.removeDelay || ((o = e[i.type]) == null ? void 0 : o.removeDelay) || e?.removeDelay,
            duration: i.duration || ((s = e[i.type]) == null ? void 0 : s.duration) || e?.duration || zv[i.type],
            style: {
                ...e.style,
                ...(u = e[i.type]) == null ? void 0 : u.style,
                ...i.style
            }
        }
    }
    );
    return {
        ...t,
        toasts: a
    }
}
  , Kv = (e, t="blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: {
        role: "status",
        "aria-live": "polite"
    },
    message: e,
    pauseDuration: 0,
    ...r,
    id: r?.id || Fv()
})
  , kr = e => (t, r) => {
    let n = Kv(t, e, r);
    return kt({
        type: 2,
        toast: n
    }),
    n.id
}
  , ie = (e, t) => kr("blank")(e, t);
ie.error = kr("error");
ie.success = kr("success");
ie.loading = kr("loading");
ie.custom = kr("custom");
ie.dismiss = e => {
    kt({
        type: 3,
        toastId: e
    })
}
;
ie.remove = e => kt({
    type: 4,
    toastId: e
});
ie.promise = (e, t, r) => {
    let n = ie.loading(t.loading, {
        ...r,
        ...r?.loading
    });
    return typeof e == "function" && (e = e()),
    e.then(a => {
        let i = t.success ? Xr(t.success, a) : void 0;
        return i ? ie.success(i, {
            id: n,
            ...r,
            ...r?.success
        }) : ie.dismiss(n),
        a
    }
    ).catch(a => {
        let i = t.error ? Xr(t.error, a) : void 0;
        i ? ie.error(i, {
            id: n,
            ...r,
            ...r?.error
        }) : ie.dismiss(n)
    }
    ),
    e
}
;
var Hv = (e, t) => {
    kt({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    })
}
  , Bv = () => {
    kt({
        type: 5,
        time: Date.now()
    })
}
  , ur = new Map
  , Wv = 1e3
  , Jv = (e, t=Wv) => {
    if (ur.has(e))
        return;
    let r = setTimeout( () => {
        ur.delete(e),
        kt({
            type: 4,
            toastId: e
        })
    }
    , t);
    ur.set(e, r)
}
  , Yv = e => {
    let {toasts: t, pausedAt: r} = Vv(e);
    lt( () => {
        if (r)
            return;
        let i = Date.now()
          , o = t.map(s => {
            if (s.duration === 1 / 0)
                return;
            let u = (s.duration || 0) + s.pauseDuration - (i - s.createdAt);
            if (u < 0) {
                s.visible && ie.dismiss(s.id);
                return
            }
            return setTimeout( () => ie.dismiss(s.id), u)
        }
        );
        return () => {
            o.forEach(s => s && clearTimeout(s))
        }
    }
    , [t, r]);
    let n = ft( () => {
        r && kt({
            type: 6,
            time: Date.now()
        })
    }
    , [r])
      , a = ft( (i, o) => {
        let {reverseOrder: s=!1, gutter: u=8, defaultPosition: c} = o || {}
          , p = t.filter(d => (d.position || c) === (i.position || c) && d.height)
          , l = p.findIndex(d => d.id === i.id)
          , f = p.filter( (d, g) => g < l && d.visible).length;
        return p.filter(d => d.visible).slice(...s ? [f + 1] : [0, f]).reduce( (d, g) => d + (g.height || 0) + u, 0)
    }
    , [t]);
    return lt( () => {
        t.forEach(i => {
            if (i.dismissed)
                Jv(i.id, i.removeDelay);
            else {
                let o = ur.get(i.id);
                o && (clearTimeout(o),
                ur.delete(i.id))
            }
        }
        )
    }
    , [t]),
    {
        toasts: t,
        handlers: {
            updateHeight: Hv,
            startPause: Bv,
            endPause: n,
            calculateOffset: a
        }
    }
}
  , Xv = Je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`
  , Zv = Je`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , Qv = Je`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`
  , e_ = pt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Xv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Zv} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Qv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`
  , t_ = Je`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
  , r_ = pt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${t_} 1s linear infinite;
`
  , n_ = Je`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`
  , a_ = Je`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`
  , i_ = pt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${n_} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${a_} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`
  , o_ = pt("div")`
  position: absolute;
`
  , s_ = pt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`
  , u_ = Je`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`
  , c_ = pt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${u_} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`
  , l_ = ({toast: e}) => {
    let {icon: t, type: r, iconTheme: n} = e;
    return t !== void 0 ? typeof t == "string" ? T(c_, null, t) : t : r === "blank" ? null : T(s_, null, T(r_, {
        ...n
    }), r !== "loading" && T(o_, null, r === "error" ? T(e_, {
        ...n
    }) : T(i_, {
        ...n
    })))
}
  , f_ = e => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`
  , d_ = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`
  , p_ = "0%{opacity:0;} 100%{opacity:1;}"
  , g_ = "0%{opacity:1;} 100%{opacity:0;}"
  , h_ = pt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`
  , m_ = pt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`
  , v_ = (e, t) => {
    let r = e.includes("top") ? 1 : -1
      , [n,a] = $f() ? [p_, g_] : [f_(r), d_(r)];
    return {
        animation: t ? `${Je(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Je(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    }
}
  , __ = So( ({toast: e, position: t, style: r, children: n}) => {
    let a = e.height ? v_(e.position || t || "top-center", e.visible) : {
        opacity: 0
    }
      , i = T(l_, {
        toast: e
    })
      , o = T(m_, {
        ...e.ariaProps
    }, Xr(e.message, e));
    return T(h_, {
        className: e.className,
        style: {
            ...a,
            ...r,
            ...e.style
        }
    }, typeof n == "function" ? n({
        icon: i,
        message: o
    }) : T(Pe, null, i, o))
}
);
Uv(T);
var y_ = ({id: e, className: t, style: r, onHeightUpdate: n, children: a}) => {
    let i = ft(o => {
        if (o) {
            let s = () => {
                let u = o.getBoundingClientRect().height;
                n(e, u)
            }
            ;
            s(),
            new MutationObserver(s).observe(o, {
                subtree: !0,
                childList: !0,
                characterData: !0
            })
        }
    }
    , [e, n]);
    return T("div", {
        ref: i,
        className: t,
        style: r
    }, a)
}
  , b_ = (e, t) => {
    let r = e.includes("top")
      , n = r ? {
        top: 0
    } : {
        bottom: 0
    }
      , a = e.includes("center") ? {
        justifyContent: "center"
    } : e.includes("right") ? {
        justifyContent: "flex-end"
    } : {};
    return {
        left: 0,
        right: 0,
        display: "flex",
        position: "absolute",
        transition: $f() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
        transform: `translateY(${t * (r ? 1 : -1)}px)`,
        ...n,
        ...a
    }
}
  , w_ = ln`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`
  , Dr = 16
  , Ny = ({reverseOrder: e, position: t="top-center", toastOptions: r, gutter: n, children: a, containerStyle: i, containerClassName: o}) => {
    let {toasts: s, handlers: u} = Yv(r);
    return T("div", {
        id: "_rht_toaster",
        style: {
            position: "fixed",
            zIndex: 9999,
            top: Dr,
            left: Dr,
            right: Dr,
            bottom: Dr,
            pointerEvents: "none",
            ...i
        },
        className: o,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause
    }, s.map(c => {
        let p = c.position || t
          , l = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: n,
            defaultPosition: t
        })
          , f = b_(p, l);
        return T(y_, {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? w_ : "",
            style: f
        }, c.type === "custom" ? Xr(c.message, c) : a ? a(c) : T(__, {
            toast: c,
            position: p
        }))
    }
    ))
}
  , de = ie;
const S_ = ({message: e, currToast: t, options: r}) => {
    const {icon: n, extraContent: a, duration: i=2e3} = r || {}
      , [o,s] = St(!1)
      , u = wr(null)
      , c = ft(p => {
        p.stopPropagation(),
        p.preventDefault(),
        u.current && clearTimeout(u.current),
        o || s(!0)
    }
    , [o]);
    return lt( () => (u.current = window.setTimeout( () => {
        de.dismiss(t.id)
    }
    , i),
    () => {
        u.current && clearTimeout(u.current)
    }
    ), [t.id, i]),
    V("div", {
        className: It("w-fit", {
            "cursor-default": o,
            "cursor-pointer": !o
        }),
        role: "button",
        tabIndex: 0,
        onClick: c,
        children: [V("div", {
            className: "flex items-center gap-x-2",
            children: [n, V("span", {
                className: "flex-1",
                children: e
            }), V(Lv, o ? {
                className: "!p-0",
                icon: V(Av, {
                    className: "text-brand-tertiary-base dark:text-font-overlay"
                }),
                type: "link",
                onClick: () => de.dismiss(t.id)
            } : {
                className: "!p-0",
                icon: V(Ov, {
                    className: "text-brand-tertiary-base dark:text-font-overlay"
                }),
                type: "link"
            })]
        }), V("div", {
            className: It({
                "mt-4": o,
                "invisible h-0": !o
            }),
            children: a
        })]
    })
}
  , Zt = ({icon: e, message: t, extraContent: r, originalOptions: n}) => de(a => V(S_, {
    currToast: a,
    message: t,
    options: {
        icon: e,
        extraContent: r,
        ...n
    }
}), {
    className: "!py-2.5 !px-1.5 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
    ...n,
    duration: Number.POSITIVE_INFINITY
})
  , Jc = {
    ...de,
    default: (e, t) => {
        const {extraContent: r} = t || {};
        return r ? Zt({
            message: e,
            extraContent: r,
            originalOptions: t
        }) : de(e, {
            className: "!py-3 !px-1.5 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
            ...t
        })
    }
    ,
    success: (e, t) => {
        const r = V(Sv, {
            className: "text-success-default"
        })
          , {extraContent: n} = t || {};
        return n ? Zt({
            icon: r,
            message: e,
            extraContent: n,
            originalOptions: t
        }) : de.success(e, {
            icon: r,
            className: "!py-3 !px-4 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
            ...t
        })
    }
    ,
    error: (e, t) => {
        const r = V(Pv, {
            className: "text-error-default"
        })
          , {extraContent: n} = t || {};
        return n ? Zt({
            icon: r,
            message: e,
            extraContent: n,
            originalOptions: t
        }) : de.error(e, {
            icon: r,
            className: "!py-3 !px-4 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
            ...t
        })
    }
    ,
    warn: (e, t) => {
        const r = V(Cv, {
            className: "text-info-default"
        })
          , {extraContent: n} = t || {};
        return n ? Zt({
            icon: r,
            message: e,
            extraContent: n,
            originalOptions: t
        }) : de.error(e, {
            icon: r,
            className: "!py-3 !px-4 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
            ...t
        })
    }
    ,
    loading: (e, t) => {
        const r = V(jf, {
            className: "scale-75 text-font-secondary dark:text-font-overlay",
            containerClassName: "animate-spin"
        })
          , {extraContent: n} = t || {};
        return n ? Zt({
            icon: r,
            message: e,
            extraContent: n,
            originalOptions: t
        }) : de.loading(e, {
            icon: r,
            className: "!py-3 !px-4 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
            ...t
        })
    }
    ,
    dismiss: e => {
        de.dismiss(e)
    }
    ,
    remove: e => {
        de.remove(e)
    }
    ,
    promise: (e, t, r) => de.promise(e, t, {
        className: "!py-3 !px-4 !bg-surface-primary dark:!bg-neutral-7 !text-font-primary dark:!text-font-overlay",
        ...r
    })
};
var Yc = Object.assign(Jc, {
    default: Jc.default
});
async function qf(e) {
    const t = await ee.get(`${xe.SHD_G123_WEB_URL}/api/v1/preEntry/${e}?lang=${Y.language}`, {
        withCredentials: !0
    });
    if (!t.data)
        throw new Error(t.data);
    return t.data
}
async function Ff({appId: e, type: t}) {
    return (await ee.post(`${xe.SHD_G123_WEB_URL}/api/v1/preEntry?type=${t}&lang=${Y.language}`, {
        appCode: e
    }, {
        headers: {
            "x-requested-with": "xhr"
        },
        withCredentials: !0
    })).data
}
async function k_(e) {
    return (await ee.post(`${xe.SHD_G123_WEB_URL}/api/v1/preEntry/cancel?lang=${Y.language}`, {
        appId: e
    }, {
        headers: {
            "x-requested-with": "xhr"
        },
        withCredentials: !0
    })).data
}
const O_ = {
    fetchPreEntryState: qf,
    postPreEntry: Ff,
    cancelPreEntryState: k_
}
  , x_ = dt("preEntry/loadPreEntry", async (e, {dispatch: t}) => {
    const {appId: r, isRefresh: n} = e
      , a = await qf(r);
    return t(n ? hr.actions.updatePreEntry({
        appId: r,
        preEntryResponse: a
    }) : hr.actions.initPreEntry({
        appId: r,
        preEntryResponse: a
    })),
    a
}
)
  , P_ = dt("preEntry/startPreEntry", async (e, {getState: t, dispatch: r}) => {
    const {appId: n} = e
      , a = t().preEntry.preEntryStateMap[n];
    if (!a)
        throw new Error(`PreEntry not found [appId=${n}]`);
    Qg("", n, Y.language);
    const i = a.supportedTypes[0];
    if (i !== ph.Simple && !a.imLinkingStatus[i]) {
        const u = `${xe.SHD_G123_WEB_URL}/game/${n}?lang=${Y.language}`
          , c = i === dh.LineChat ? Se.LineMessage : i;
        mm(mh.PreEntry, c, n, u)
    }
    const s = await Ff({
        appId: n,
        type: i
    });
    return r(hr.actions.updatePreEntry({
        appId: n,
        preEntryResponse: s
    })),
    s
}
)
  , E_ = dt("preEntry/cancelPreEntry", async (e, {dispatch: t}) => {
    const {appId: r} = e;
    rh(r, Y.language);
    const n = await O_.cancelPreEntryState(r);
    return t(hr.actions.updatePreEntry({
        appId: r,
        preEntryResponse: n
    })),
    n
}
)
  , A_ = {
    preEntryMap: {},
    preEntryStateMap: {},
    popupPreRegisterationStatus: void 0
}
  , hr = te({
    name: "preEntry",
    initialState: A_,
    reducers: {
        setPreEntry: (e, t) => {
            e.preEntryMap[t.payload.appId] = t.payload.preEntryResponse
        }
        ,
        initPreEntry: (e, t) => {
            const {appId: r, preEntryResponse: n} = t.payload
              , a = {
                ...e.preEntryStateMap,
                [r]: n
            };
            return {
                ...e,
                preEntryStateMap: a
            }
        }
        ,
        updatePreEntry: (e, t) => {
            const {appId: r, preEntryResponse: n} = t.payload
              , a = e.preEntryStateMap[r]?.isRegistered
              , i = n?.isRegistered
              , o = {
                ...e.preEntryStateMap,
                [r]: n
            };
            return {
                ...e,
                preEntryStateMap: o,
                popupPreRegisterationStatus: {
                    before: a,
                    after: i
                }
            }
        }
        ,
        dismissPopupPreRegisterationStatus: e => ({
            ...e,
            popupPreRegisterationStatus: void 0
        })
    },
    extraReducers: e => {
        e.addCase(x_.fulfilled, (t, r) => {
            t.preEntryStateMap[r.meta.arg.appId] = r.payload
        }
        ),
        e.addCase(P_.rejected, (t, r) => {
            r.error && Yc.error(Xo("common.actions.pre_register.failed"))
        }
        ),
        e.addCase(E_.rejected, (t, r) => {
            r.error && Yc.error(Xo("common.actions.pre_register.cancel_failed"))
        }
        )
    }
})
  , Xc = {
    sdkVersion: "unknown",
    sdkStatus: "init",
    sdkLastEventAt: 0,
    appVersion: "unknown",
    appStatus: "init",
    appLastEventAt: 0
}
  , Gf = te({
    name: "pspMonitor",
    initialState: Xc,
    reducers: {
        updateSdkVersion: (e, t) => ({
            ...Xc,
            sdkVersion: t.payload.version
        }),
        updateSdkStatus: (e, t) => {
            const {sdkLastEventAt: r} = e;
            return t.payload.time < r ? e : {
                ...e,
                sdkStatus: t.payload.status,
                sdkLastEventAt: t.payload.time
            }
        }
        ,
        updateAppStatus: (e, t) => {
            const {appLastEventAt: r} = e;
            return t.payload.time < r ? e : {
                ...e,
                appStatus: t.payload.status,
                appLastEventAt: t.payload.time,
                appVersion: t.payload.version
            }
        }
    }
});
function jy(e) {
    return typeof e == "object" && e !== null && "event"in e && "payload"in e && e.event === "PaymentSdkMonitor"
}
const Dy = e => async (t, r) => {
    const n = r().pspMonitorModule
      , a = {
        appStatus: n.appStatus,
        appVersion: n.appVersion,
        sdkStatus: n.sdkStatus,
        sdkVersion: n.sdkVersion,
        gameVersion: window?.option.appVersion
    }
      , i = `${xe.SHD_G123_PSP_URL}/api/app/orders/${e}/init`;
    await ee.get(i, {
        params: a
    })
}
  , {updateSdkVersion: R_, updateSdkStatus: My, updateAppStatus: $y} = Gf.actions
  , C_ = {
    isPwaInstallPromptReady: !ro() && (Il() || Nl())
}
  , zf = te({
    name: "pwa",
    initialState: C_,
    reducers: {
        setIsPwaInstallPromptReady: (e, t) => {
            e.isPwaInstallPromptReady = t.payload.isPwaInstallPromptReady
        }
    }
})
  , {setIsPwaInstallPromptReady: Uy} = zf.actions
  , T_ = ["creditucc", "paypal", "paypay", "stripe_creditcard", "adyen_creditcard", "applepay", "googlepay"];
function L_(e) {
    return T_.includes(e)
}
function qy(e) {
    return typeof e == "object" && e !== null && "target_user"in e && "refund_ratio"in e && typeof e.target_user == "boolean" && typeof e.refund_ratio == "number"
}
const I_ = no()
  , N_ = {
    loginChecked: !1,
    doCouponTrigger: !1,
    refundStatus: null,
    showRefundEmailLogin: !1
}
  , mr = te({
    name: "refund-coupon",
    initialState: N_,
    reducers: {
        loginChecked: e => {
            e.loginChecked = !0
        }
        ,
        triggerShowCoupon: e => {
            e.loginChecked && (e.doCouponTrigger = !0)
        }
        ,
        setRefundCampaignStatus: (e, t) => {
            const {payload: r} = t;
            e.refundStatus = r
        }
        ,
        setShowEmail: (e, t) => {
            const {payload: r} = t;
            if (!r) {
                e.showRefundEmailLogin = r;
                return
            }
            e.refundStatus?.pay_window && (I_.getItem(Oi.refundCampaignTargetUser) === "true" ? e.showRefundEmailLogin = r : e.refundStatus = {
                pay_window: null,
                target_user: !1,
                refund_ratio: 0
            })
        }
    }
})
  , Fy = () => async e => {
    e(mr.actions.loginChecked())
}
  , Gy = e => async t => {
    L_(e) && (t(mr.actions.setShowEmail(!0)),
    t(mr.actions.setRefundCampaignStatus({
        pay_window: null,
        target_user: !1,
        refund_ratio: 0
    })))
}
  , {triggerShowCoupon: zy, setRefundCampaignStatus: Vy, setShowEmail: Ky} = mr.actions
  , j_ = {
    display: !1,
    url: ""
}
  , Vf = te({
    name: "videoPopup",
    initialState: j_,
    reducers: {
        showVideoPopup(e, t) {
            e.url = t.payload,
            t.payload && (e.display = !0)
        },
        hideVideoPopup(e) {
            e.display = !1,
            e.url = ""
        }
    }
})
  , {showVideoPopup: Hy, hideVideoPopup: By} = Vf.actions
  , D_ = {
    status: "close",
    targets: [],
    data: null,
    code: ""
}
  , Kf = te({
    name: "webShare",
    initialState: D_,
    reducers: {
        update(e, t) {
            e.data = t.payload.data,
            e.code = t.payload.code,
            e.targets = t.payload.targets
        },
        show(e) {
            e.status = "open"
        },
        hide(e) {
            e.status = "close"
        }
    }
})
  , {show: Wy, hide: Jy, update: Yy} = Kf.actions
  , M_ = {
    cs: Cl.reducer,
    app: Br.reducer,
    blockedUser: Pl.reducer,
    koreanR18Confirm: El.reducer,
    gameEvent: lh.reducer,
    inGameAccount: gm.reducer,
    mainPopup: Al.reducer,
    preEntry: hr.reducer,
    privacy: Rl.reducer,
    pspMonitorModule: Gf.reducer,
    refundCoupon: mr.reducer,
    videoPopupModule: Vf.reducer,
    webShareModule: Kf.reducer,
    pwa: zf.reducer,
    imConnect: Wr.reducer,
    dialog: Tl.reducer
};
function Zc(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}
function $_(e) {
    var t = [];
    function r(a) {
        for (var i = [], o = 0; o < t.length; o++)
            t[o] === a ? a = null : i.push(t[o]);
        t = i
    }
    function n(a, i, o) {
        e = i ? a : Zc(Zc({}, e), a);
        for (var s = t, u = 0; u < s.length; u++)
            s[u](e, o)
    }
    return e = e || {},
    {
        action: function(a) {
            function i(o) {
                n(o, !1, a)
            }
            return function() {
                for (var o = arguments, s = [e], u = 0; u < arguments.length; u++)
                    s.push(o[u]);
                var c = a.apply(this, s);
                if (c != null)
                    return c.then ? c.then(i) : i(c)
            }
        },
        setState: n,
        subscribe: function(a) {
            return t.push(a),
            function() {
                r(a)
            }
        },
        unsubscribe: r,
        getState: function() {
            return e
        }
    }
}
const U_ = {}
  , Qc = $_(U_);
function q_(e) {
    let t = e.getState();
    Qc.setState(t.inGameAccount),
    e.subscribe( () => {
        const r = e.getState();
        t.inGameAccount !== r.inGameAccount && (Qc.setState(r.inGameAccount),
        console.log("[g123-game][inGameAccount] state changed", JSON.stringify(r.inGameAccount))),
        t = e.getState()
    }
    )
}
const fn = Zi({
    reducer: M_
});
fn.dispatch(_g());
q_(fn);
window.__G123_GLOBAL_REDUX_STORE__ = fn;
async function Xy(e) {
    let t = xe.SHD_G123_PSP_SDK_URL
      , r = "";
    try {
        const a = await hi( () => ee.get(`${xe.SHD_G123_PSP_URL}/config`));
        a.data?.SHD_G123_PSP_SDK_URL && (t = a.data?.SHD_G123_PSP_SDK_URL,
        r = a.data?.SHD_G123_PSP_SDK_MODULE_URL || ""),
        a.data?.APP_VERSION && fn.dispatch(R_({
            version: a.data.APP_VERSION
        }))
    } catch (a) {
        console.error("[PLATFORM][pspHelper] LOAD_PSP_CONFIG_ERROR", a),
        window.Sentry?.captureException(a)
    }
    let n = !1;
    if (r)
        try {
            const a = await hi( () => import(r));
            console.info("[PLATFORM][pspHelper] PSP_SDK_MODULE_LOADED", a),
            await a.initG123Psp(e),
            n = !0
        } catch (a) {
            console.error("[PLATFORM][pspHelper] LOAD_PSP_MODULE_ERROR", a),
            window.Sentry?.captureException(a)
        }
    if (!n)
        try {
            window.initG123Psp || await eo(t),
            window.initG123Psp && (await window.initG123Psp(e),
            n = !0)
        } catch (a) {
            console.error("[PLATFORM][pspHelper] LOAD_PSP_SCRIPT_ERROR", a),
            window.Sentry?.captureException(a)
        }
    if (!n)
        throw window.pspConfig = e,
        new Error("window.initG123Psp not exist")
}
function xo(e) {
    return e.reduce( (t, r) => t + r.qty * r.amt + r.taxamt, 0)
}
const dn = td(async () => {
    try {
        const {appTitle: e} = window.option
          , t = await Gt()
          , {sub: r, aud: n, country: a, region: i} = t
          , s = new URL(window.location.href).searchParams.get("platform")
          , u = (await _r())?.searchParams;
        window.dataLayer || (window.dataLayer = []),
        window.gtag?.("set", "user_id", r),
        window.dataLayer.push({
            user_id: r,
            dl_platformid: s || "ctw",
            dl_appid: n,
            dl_appname: e,
            dl_ctwid: r,
            dl_country: a,
            dl_region: i,
            appPlatform: u?.get("platform") || "",
            appSource: u?.get("utm_source") || "",
            appCampaign: u?.get("utm_campaign") || "",
            appAdgroup: u?.get("utm_adgroup") || "",
            appKeyword: u?.get("utm_keyword") || ""
        })
    } catch (e) {
        console.error(e)
    }
}
);
async function Me(e) {
    await dn(),
    window.dataLayer || (window.dataLayer = []),
    window.dataLayer.push(e)
}
async function Fi(e, t) {
    await dn(),
    window.gtag?.("event", e, t)
}
function Hf(e, t) {
    const r = {};
    for (let n = 0; n < t.length; n += 1)
        t[n].tagKey.startsWith(e) && (r[t[n].tagKey] = t[n].tagValue);
    return r
}
async function F_(e) {
    await dn();
    const {amount: t, orderID: r} = e
      , {order: n} = e
      , a = e.currency || n?.items?.[0]?.currency;
    await Fi("begin_checkout", {
        currency: a,
        value: n?.items ? xo(n.items) : t,
        transaction_id: n?.orderNo || r,
        items: n?.items?.map( (i, o) => ({
            item_id: `${n.appCode}:${i.code || i.name}`,
            item_name: `${n.appCode}:${i.name}`,
            affiliation: n?.appCode || window.option.appId,
            index: o,
            item_brand: n.appCode,
            item_category: n.appCode,
            price: i.amt,
            quantity: i.qty
        }))
    })
}
async function G_(e) {
    await dn();
    const {amount: t, orderID: r, order: n} = e
      , a = e.currency || n?.items?.[0]?.currency
      , i = n?.items ? xo(n.items) : t
      , o = n?.paymentCode
      , s = n?.orderNo || r
      , u = n?.items?.map( (c, p) => ({
        item_id: `${n.appCode}:${c.code || c.name}`,
        item_name: `${n.appCode}:${c.name}`,
        affiliation: n?.appCode || window.option.appId,
        index: p,
        item_brand: n.appCode,
        item_category: n.appCode,
        price: c.amt,
        quantity: c.qty
    }));
    await Fi("add_payment_info", {
        currency: a,
        value: i,
        payment_type: o,
        items: u
    }),
    await Fi("purchase", {
        currency: a,
        value: i,
        transaction_id: s,
        items: u
    })
}
function z_(e) {
    const {order: t} = e;
    if (!t)
        return;
    const {paymentCode: r} = t
      , n = e.currency || t?.items?.[0]?.currency;
    setTimeout(async () => {
        const a = await Gt()
          , {sub: i, aud: o} = a;
        if (mg({
            appid: o,
            ctwid: i,
            amount: e.amount,
            currencyCode: n,
            orderID: e.orderID,
            isAppFirst: e.isAppFirst,
            url: window.location.href
        }),
        window.option.expflags?.disableGtmMessageListener) {
            let s = !1
              , u = null
              , c = null
              , p = null
              , l = -1
              , f = -1
              , d = {};
            try {
                const [v] = await Promise.all([ao()]);
                d = Hf("trigger_", v);
                try {
                    for (let _ = 0; _ < v.length; _ += 1)
                        v[_].tagKey === "createrole_ad_url" && (p = new URL(v[_].tagValue),
                        l = v[_].updated),
                        v[_].tagKey === "last_ad_url" && v[_].updated > f && (c = new URL(v[_].tagValue),
                        f = v[_].updated)
                } catch {}
                u = await _r() || null,
                s = ( () => {
                    const _ = new URL(window.location.href)
                      , b = u || new URL(window.location.origin)
                      , y = ["platform", "utm_source", "utm_campaign", "utm_adgroup", "utm_keyword"];
                    for (let w = 0, k = y.length; w < k; w += 1) {
                        const O = y[w]
                          , S = _.searchParams.get(O) || ""
                          , R = b.searchParams.get(O) || "";
                        if (S !== R)
                            return !1
                    }
                    return !0
                }
                )()
            } catch (v) {
                console.error(v)
            }
            const g = u?.searchParams
              , h = p?.searchParams
              , m = c?.searchParams;
            await Me({
                event: "PaymentSucceed",
                amount: e.amount,
                currencyCode: n,
                orderID: e.orderID,
                category: "click",
                PageType: "TransactionPage",
                time: new Date().getTime(),
                triggerTags: d,
                createRoleADDetail: {
                    appPlatform: h?.get("platform") || "",
                    appSource: h?.get("utm_source") || "",
                    appCampaign: h?.get("utm_campaign") || "",
                    appAdGroup: h?.get("utm_adgroup") || "",
                    appKeyword: h?.get("utm_keyword") || "",
                    time: l
                },
                lastADDetail: {
                    appPlatform: m?.get("platform") || "",
                    appSource: m?.get("utm_source") || "",
                    appCampaign: m?.get("utm_campaign") || "",
                    appAdGroup: m?.get("utm_adgroup") || "",
                    appKeyword: m?.get("utm_keyword") || "",
                    time: f
                },
                ProductTransactionProducts: [{
                    id: o,
                    price: e.amount,
                    quantity: 1
                }],
                TransactionID: e.orderID,
                isAppFirst: e.isAppFirst,
                isAppPageUrlSame: s,
                lastPaymentTime: e.lastPaymentTime,
                appPlatform: g?.get("platform") || "",
                appSource: g?.get("utm_source") || "",
                appCampaign: g?.get("utm_campaign") || "",
                appKeyword: g?.get("utm_keyword") || "",
                paymentCode: r,
                appid: o,
                ctwid: i
            }),
            await G_(e)
        }
    }
    )
}
function Zy(e) {
    const {order: t} = e;
    if (!t)
        return;
    const r = e.currency || t?.items?.[0]?.currency;
    setTimeout(async () => {
        if (window.option.expflags?.disableGtmMessageListener) {
            let n = !1;
            const a = await _r();
            try {
                n = ( () => {
                    const u = new URL(window.location.href)
                      , c = a || new URL(window.location.origin)
                      , p = ["platform", "utm_source", "utm_campaign", "utm_adgroup", "utm_keyword"];
                    for (let l = 0, f = p.length; l < f; l += 1) {
                        const d = p[l]
                          , g = u.searchParams.get(d) || ""
                          , h = c.searchParams.get(d) || "";
                        if (g !== h)
                            return !1
                    }
                    return !0
                }
                )()
            } catch (u) {
                console.error(u)
            }
            const i = a?.searchParams
              , o = await Gt()
              , {aud: s} = o;
            await Me({
                event: "PaymentBegin",
                amount: e.amount,
                currencyCode: r,
                orderID: e.orderID,
                category: "click",
                PageType: "TransactionPage",
                ProductTransactionProducts: [{
                    id: s,
                    price: e.amount,
                    quantity: 1
                }],
                TransactionID: e.orderID,
                isAppFirst: e.isAppFirst,
                isAppPageUrlSame: n,
                appPlatform: i?.get("platform") || "",
                appSource: i?.get("utm_source") || "",
                appKeyword: i?.get("utm_keyword") || ""
            }),
            await F_(e)
        }
    }
    )
}
function Qy() {
    const e = Object.assign({}, ...window.dataLayer || []);
    window.option.expflags?.disableGtmMessageListener && Me({
        event: "CreateRole",
        platform: e.dl_platformid,
        appid: e.dl_appid,
        category: "click",
        PageType: "ProductPage",
        ProductID: e.dl_appid,
        is_first_pay: void 0
    })
}
async function V_(e) {
    const [t,r] = await Promise.all([ao(), _r()])
      , n = r || new URL(window.location.origin)
      , a = Hf("trigger_", t);
    let i = null
      , o = -1;
    for (let u = 0; u < t.length; u += 1)
        t[u].tagKey === "createrole_ad_url" && (i = new URL(t[u].tagValue),
        o = t[u].updated);
    const s = i?.searchParams;
    Me({
        event: "level_up",
        level: e,
        createRoleADDetail: {
            appPlatform: s?.get("platform") || "",
            appSource: s?.get("utm_source") || "",
            appCampaign: s?.get("utm_campaign") || "",
            appAdGroup: s?.get("utm_adgroup") || "",
            appKeyword: s?.get("utm_keyword") || "",
            time: o
        },
        triggerTags: a,
        appPlatform: n.searchParams.get("platform") || "",
        appSource: n.searchParams.get("utm_source") || "",
        appCampaign: n.searchParams.get("utm_campaign") || "",
        appAdgroup: n.searchParams.get("utm_adgroup") || "",
        appKeyword: n.searchParams.get("utm_keyword") || ""
    })
}
class K_ {
    constructor() {
        this.startTime = 0,
        this.listeners = [],
        this.started = !1,
        this.intervalId = null
    }
    checkAndRunListeners() {
        this.started && (this.listeners = this.listeners.filter(t => {
            const [r,n] = t;
            if (Date.now() - this.startTime > r) {
                try {
                    n()
                } catch (a) {
                    console.error(a)
                }
                return !1
            }
            return !0
        }
        ))
    }
    startObserver() {
        this.started || this.startTime !== 0 && (this.started = !0,
        this.intervalId = setInterval( () => {
            this.checkAndRunListeners()
        }
        , 100))
    }
    setTimeout(t, r) {
        const n = [r, t];
        return this.listeners.push(n),
        this.startObserver(),
        n
    }
    clearTimeout(t) {
        this.listeners = this.listeners.filter(r => r !== t)
    }
    start() {
        this.startTime = Date.now(),
        this.startObserver()
    }
    stopAndClear() {
        this.intervalId !== null && (clearInterval(this.intervalId),
        this.intervalId = null),
        this.started = !1,
        this.listeners = []
    }
}
let gi;
function eb() {
    return gi || (gi = new K_),
    gi
}
function H_(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n, a, i, o, s = [], u = !0, c = !1;
        try {
            if (i = (r = r.call(e)).next,
            t === 0) {
                if (Object(r) !== r)
                    return;
                u = !1
            } else
                for (; !(u = (n = i.call(r)).done) && (s.push(n.value),
                s.length !== t); u = !0)
                    ;
        } catch (p) {
            c = !0,
            a = p
        } finally {
            try {
                if (!u && r.return != null && (o = r.return(),
                Object(o) !== o))
                    return
            } finally {
                if (c)
                    throw a
            }
        }
        return s
    }
}
function tb(e, t) {
    return rl(e) || H_(e, t) || el(e, t) || nl()
}
export {cn as $, wr as A, Bt as B, ey as C, qe as D, El as E, Ov as F, eb as G, th as H, no as I, Y as J, Ny as K, Y_ as L, wy as M, yf as N, Yc as O, df as P, ef as Q, $r as R, Oi as S, be as T, Mg as U, Ue as V, $e as W, ee as X, Xe as Y, ul as Z, tb as _, Lv as a, rd as a$, Pe as a0, sy as a1, ly as a2, zy as a3, pi as a4, dy as a5, by as a6, ro as a7, Vg as a8, Il as a9, Vy as aA, P_ as aB, E_ as aC, hr as aD, Ey as aE, Ay as aF, sr as aG, cf as aH, cy as aI, Ly as aJ, Cy as aK, ke as aL, De as aM, vr as aN, Rl as aO, td as aP, pg as aQ, Pg as aR, ty as aS, Dy as aT, Qy as aU, jy as aV, Gf as aW, Ty as aX, dm as aY, gm as aZ, Io as a_, Nl as aa, $g as ab, Py as ac, x_ as ad, Gy as ae, oh as af, ih as ag, mr as ah, Zy as ai, ch as aj, uy as ak, Oy as al, mm as am, mh as an, Ry as ao, wg as ap, sn as aq, Ol as ar, Ll as as, Iy as at, go as au, So as av, wf as aw, fo as ax, py as ay, qy as az, Ye as b, el as b0, zi as b1, Gh as b2, oo as b3, jh as b4, Ut as b5, fl as b6, Th as b7, Yh as b8, Jh as b9, Rg as bA, hi as bB, Al as bC, _y as bD, yy as bE, hy as bF, gy as bG, ry as bH, Wg as bI, X_ as bJ, Z_ as bK, Fy as bL, Xy as bM, Q_ as bN, fy as bO, Me as bP, Uy as bQ, Qh as ba, un as bb, tn as bc, Wh as bd, Ml as be, cl as bf, Ul as bg, xh as bh, Vh as bi, em as bj, mi as bk, Qr as bl, Uh as bm, $h as bn, Dh as bo, sm as bp, Hh as bq, Bh as br, tm as bs, dl as bt, Ah as bu, Ch as bv, Bs as bw, J_ as bx, xy as by, qg as bz, Vt as c, St as d, Av as e, fn as f, Cv as g, fr as h, Pl as i, xe as j, Eg as k, Gt as l, my as m, vy as n, Qc as o, ky as p, ft as q, It as r, io as s, Sy as t, V as u, Vf as v, Kf as w, po as x, lt as y, T as z};
