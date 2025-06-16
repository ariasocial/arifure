import {a as or, c as Y, g as sr} from "./game-d8b296a6-D6-XlEtG.js";
var T = {
    exports: {}
};
function cr(P) {
    throw new Error('Could not dynamically require "' + P + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var N = {
    exports: {}
};
const fr = {}
  , vr = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: fr
}, Symbol.toStringTag, {
    value: "Module"
}))
  , ur = or(vr);
var hr = N.exports, Z;
function O() {
    return Z || (Z = 1,
    function(P, K) {
        (function(A, B) {
            P.exports = B()
        }
        )(hr, function() {
            var A = A || function(B, H) {
                var b;
                if (typeof window < "u" && window.crypto && (b = window.crypto),
                typeof self < "u" && self.crypto && (b = self.crypto),
                typeof globalThis < "u" && globalThis.crypto && (b = globalThis.crypto),
                !b && typeof window < "u" && window.msCrypto && (b = window.msCrypto),
                !b && typeof Y < "u" && Y.crypto && (b = Y.crypto),
                !b && typeof cr == "function")
                    try {
                        b = ur
                    } catch {}
                var F = function() {
                    if (b) {
                        if (typeof b.getRandomValues == "function")
                            try {
                                return b.getRandomValues(new Uint32Array(1))[0]
                            } catch {}
                        if (typeof b.randomBytes == "function")
                            try {
                                return b.randomBytes(4).readInt32LE()
                            } catch {}
                    }
                    throw new Error("Native crypto module could not be used to get secure random number.")
                }
                  , z = Object.create || function() {
                    function t() {}
                    return function(r) {
                        var a;
                        return t.prototype = r,
                        a = new t,
                        t.prototype = null,
                        a
                    }
                }()
                  , E = {}
                  , n = E.lib = {}
                  , g = n.Base = function() {
                    return {
                        extend: function(t) {
                            var r = z(this);
                            return t && r.mixIn(t),
                            (!r.hasOwnProperty("init") || this.init === r.init) && (r.init = function() {
                                r.$super.init.apply(this, arguments)
                            }
                            ),
                            r.init.prototype = r,
                            r.$super = this,
                            r
                        },
                        create: function() {
                            var t = this.extend();
                            return t.init.apply(t, arguments),
                            t
                        },
                        init: function() {},
                        mixIn: function(t) {
                            for (var r in t)
                                t.hasOwnProperty(r) && (this[r] = t[r]);
                            t.hasOwnProperty("toString") && (this.toString = t.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    }
                }()
                  , y = n.WordArray = g.extend({
                    init: function(t, r) {
                        t = this.words = t || [],
                        r != H ? this.sigBytes = r : this.sigBytes = t.length * 4
                    },
                    toString: function(t) {
                        return (t || l).stringify(this)
                    },
                    concat: function(t) {
                        var r = this.words
                          , a = t.words
                          , u = this.sigBytes
                          , x = t.sigBytes;
                        if (this.clamp(),
                        u % 4)
                            for (var C = 0; C < x; C++) {
                                var W = a[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                                r[u + C >>> 2] |= W << 24 - (u + C) % 4 * 8
                            }
                        else
                            for (var D = 0; D < x; D += 4)
                                r[u + D >>> 2] = a[D >>> 2];
                        return this.sigBytes += x,
                        this
                    },
                    clamp: function() {
                        var t = this.words
                          , r = this.sigBytes;
                        t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8,
                        t.length = B.ceil(r / 4)
                    },
                    clone: function() {
                        var t = g.clone.call(this);
                        return t.words = this.words.slice(0),
                        t
                    },
                    random: function(t) {
                        for (var r = [], a = 0; a < t; a += 4)
                            r.push(F());
                        return new y.init(r,t)
                    }
                })
                  , h = E.enc = {}
                  , l = h.Hex = {
                    stringify: function(t) {
                        for (var r = t.words, a = t.sigBytes, u = [], x = 0; x < a; x++) {
                            var C = r[x >>> 2] >>> 24 - x % 4 * 8 & 255;
                            u.push((C >>> 4).toString(16)),
                            u.push((C & 15).toString(16))
                        }
                        return u.join("")
                    },
                    parse: function(t) {
                        for (var r = t.length, a = [], u = 0; u < r; u += 2)
                            a[u >>> 3] |= parseInt(t.substr(u, 2), 16) << 24 - u % 8 * 4;
                        return new y.init(a,r / 2)
                    }
                }
                  , m = h.Latin1 = {
                    stringify: function(t) {
                        for (var r = t.words, a = t.sigBytes, u = [], x = 0; x < a; x++) {
                            var C = r[x >>> 2] >>> 24 - x % 4 * 8 & 255;
                            u.push(String.fromCharCode(C))
                        }
                        return u.join("")
                    },
                    parse: function(t) {
                        for (var r = t.length, a = [], u = 0; u < r; u++)
                            a[u >>> 2] |= (t.charCodeAt(u) & 255) << 24 - u % 4 * 8;
                        return new y.init(a,r)
                    }
                }
                  , p = h.Utf8 = {
                    stringify: function(t) {
                        try {
                            return decodeURIComponent(escape(m.stringify(t)))
                        } catch {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(t) {
                        return m.parse(unescape(encodeURIComponent(t)))
                    }
                }
                  , _ = n.BufferedBlockAlgorithm = g.extend({
                    reset: function() {
                        this._data = new y.init,
                        this._nDataBytes = 0
                    },
                    _append: function(t) {
                        typeof t == "string" && (t = p.parse(t)),
                        this._data.concat(t),
                        this._nDataBytes += t.sigBytes
                    },
                    _process: function(t) {
                        var r, a = this._data, u = a.words, x = a.sigBytes, C = this.blockSize, W = C * 4, D = x / W;
                        t ? D = B.ceil(D) : D = B.max((D | 0) - this._minBufferSize, 0);
                        var e = D * C
                          , i = B.min(e * 4, x);
                        if (e) {
                            for (var d = 0; d < e; d += C)
                                this._doProcessBlock(u, d);
                            r = u.splice(0, e),
                            a.sigBytes -= i
                        }
                        return new y.init(r,i)
                    },
                    clone: function() {
                        var t = g.clone.call(this);
                        return t._data = this._data.clone(),
                        t
                    },
                    _minBufferSize: 0
                });
                n.Hasher = _.extend({
                    cfg: g.extend(),
                    init: function(t) {
                        this.cfg = this.cfg.extend(t),
                        this.reset()
                    },
                    reset: function() {
                        _.reset.call(this),
                        this._doReset()
                    },
                    update: function(t) {
                        return this._append(t),
                        this._process(),
                        this
                    },
                    finalize: function(t) {
                        t && this._append(t);
                        var r = this._doFinalize();
                        return r
                    },
                    blockSize: 16,
                    _createHelper: function(t) {
                        return function(r, a) {
                            return new t.init(a).finalize(r)
                        }
                    },
                    _createHmacHelper: function(t) {
                        return function(r, a) {
                            return new S.HMAC.init(t,a).finalize(r)
                        }
                    }
                });
                var S = E.algo = {};
                return E
            }(Math);
            return A
        })
    }(N)),
    N.exports
}
var M = {
    exports: {}
}, dr = M.exports, J;
function lr() {
    return J || (J = 1,
    function(P, K) {
        (function(A, B) {
            P.exports = B(O())
        }
        )(dr, function(A) {
            return function() {
                var B = A
                  , H = B.lib
                  , b = H.WordArray
                  , F = B.enc;
                F.Base64 = {
                    stringify: function(E) {
                        var n = E.words
                          , g = E.sigBytes
                          , y = this._map;
                        E.clamp();
                        for (var h = [], l = 0; l < g; l += 3)
                            for (var m = n[l >>> 2] >>> 24 - l % 4 * 8 & 255, p = n[l + 1 >>> 2] >>> 24 - (l + 1) % 4 * 8 & 255, _ = n[l + 2 >>> 2] >>> 24 - (l + 2) % 4 * 8 & 255, S = m << 16 | p << 8 | _, t = 0; t < 4 && l + t * .75 < g; t++)
                                h.push(y.charAt(S >>> 6 * (3 - t) & 63));
                        var r = y.charAt(64);
                        if (r)
                            for (; h.length % 4; )
                                h.push(r);
                        return h.join("")
                    },
                    parse: function(E) {
                        var n = E.length
                          , g = this._map
                          , y = this._reverseMap;
                        if (!y) {
                            y = this._reverseMap = [];
                            for (var h = 0; h < g.length; h++)
                                y[g.charCodeAt(h)] = h
                        }
                        var l = g.charAt(64);
                        if (l) {
                            var m = E.indexOf(l);
                            m !== -1 && (n = m)
                        }
                        return z(E, n, y)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                };
                function z(E, n, g) {
                    for (var y = [], h = 0, l = 0; l < n; l++)
                        if (l % 4) {
                            var m = g[E.charCodeAt(l - 1)] << l % 4 * 2
                              , p = g[E.charCodeAt(l)] >>> 6 - l % 4 * 2
                              , _ = m | p;
                            y[h >>> 2] |= _ << 24 - h % 4 * 8,
                            h++
                        }
                    return b.create(y, h)
                }
            }(),
            A.enc.Base64
        })
    }(M)),
    M.exports
}
var V = {
    exports: {}
}, pr = V.exports, X;
function xr() {
    return X || (X = 1,
    function(P, K) {
        (function(A, B) {
            P.exports = B(O())
        }
        )(pr, function(A) {
            return function(B) {
                var H = A
                  , b = H.lib
                  , F = b.WordArray
                  , z = b.Hasher
                  , E = H.algo
                  , n = [];
                (function() {
                    for (var p = 0; p < 64; p++)
                        n[p] = B.abs(B.sin(p + 1)) * 4294967296 | 0
                }
                )();
                var g = E.MD5 = z.extend({
                    _doReset: function() {
                        this._hash = new F.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    _doProcessBlock: function(p, _) {
                        for (var S = 0; S < 16; S++) {
                            var t = _ + S
                              , r = p[t];
                            p[t] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360
                        }
                        var a = this._hash.words
                          , u = p[_ + 0]
                          , x = p[_ + 1]
                          , C = p[_ + 2]
                          , W = p[_ + 3]
                          , D = p[_ + 4]
                          , e = p[_ + 5]
                          , i = p[_ + 6]
                          , d = p[_ + 7]
                          , s = p[_ + 8]
                          , k = p[_ + 9]
                          , w = p[_ + 10]
                          , R = p[_ + 11]
                          , q = p[_ + 12]
                          , $ = p[_ + 13]
                          , L = p[_ + 14]
                          , I = p[_ + 15]
                          , o = a[0]
                          , c = a[1]
                          , f = a[2]
                          , v = a[3];
                        o = y(o, c, f, v, u, 7, n[0]),
                        v = y(v, o, c, f, x, 12, n[1]),
                        f = y(f, v, o, c, C, 17, n[2]),
                        c = y(c, f, v, o, W, 22, n[3]),
                        o = y(o, c, f, v, D, 7, n[4]),
                        v = y(v, o, c, f, e, 12, n[5]),
                        f = y(f, v, o, c, i, 17, n[6]),
                        c = y(c, f, v, o, d, 22, n[7]),
                        o = y(o, c, f, v, s, 7, n[8]),
                        v = y(v, o, c, f, k, 12, n[9]),
                        f = y(f, v, o, c, w, 17, n[10]),
                        c = y(c, f, v, o, R, 22, n[11]),
                        o = y(o, c, f, v, q, 7, n[12]),
                        v = y(v, o, c, f, $, 12, n[13]),
                        f = y(f, v, o, c, L, 17, n[14]),
                        c = y(c, f, v, o, I, 22, n[15]),
                        o = h(o, c, f, v, x, 5, n[16]),
                        v = h(v, o, c, f, i, 9, n[17]),
                        f = h(f, v, o, c, R, 14, n[18]),
                        c = h(c, f, v, o, u, 20, n[19]),
                        o = h(o, c, f, v, e, 5, n[20]),
                        v = h(v, o, c, f, w, 9, n[21]),
                        f = h(f, v, o, c, I, 14, n[22]),
                        c = h(c, f, v, o, D, 20, n[23]),
                        o = h(o, c, f, v, k, 5, n[24]),
                        v = h(v, o, c, f, L, 9, n[25]),
                        f = h(f, v, o, c, W, 14, n[26]),
                        c = h(c, f, v, o, s, 20, n[27]),
                        o = h(o, c, f, v, $, 5, n[28]),
                        v = h(v, o, c, f, C, 9, n[29]),
                        f = h(f, v, o, c, d, 14, n[30]),
                        c = h(c, f, v, o, q, 20, n[31]),
                        o = l(o, c, f, v, e, 4, n[32]),
                        v = l(v, o, c, f, s, 11, n[33]),
                        f = l(f, v, o, c, R, 16, n[34]),
                        c = l(c, f, v, o, L, 23, n[35]),
                        o = l(o, c, f, v, x, 4, n[36]),
                        v = l(v, o, c, f, D, 11, n[37]),
                        f = l(f, v, o, c, d, 16, n[38]),
                        c = l(c, f, v, o, w, 23, n[39]),
                        o = l(o, c, f, v, $, 4, n[40]),
                        v = l(v, o, c, f, u, 11, n[41]),
                        f = l(f, v, o, c, W, 16, n[42]),
                        c = l(c, f, v, o, i, 23, n[43]),
                        o = l(o, c, f, v, k, 4, n[44]),
                        v = l(v, o, c, f, q, 11, n[45]),
                        f = l(f, v, o, c, I, 16, n[46]),
                        c = l(c, f, v, o, C, 23, n[47]),
                        o = m(o, c, f, v, u, 6, n[48]),
                        v = m(v, o, c, f, d, 10, n[49]),
                        f = m(f, v, o, c, L, 15, n[50]),
                        c = m(c, f, v, o, e, 21, n[51]),
                        o = m(o, c, f, v, q, 6, n[52]),
                        v = m(v, o, c, f, W, 10, n[53]),
                        f = m(f, v, o, c, w, 15, n[54]),
                        c = m(c, f, v, o, x, 21, n[55]),
                        o = m(o, c, f, v, s, 6, n[56]),
                        v = m(v, o, c, f, I, 10, n[57]),
                        f = m(f, v, o, c, i, 15, n[58]),
                        c = m(c, f, v, o, $, 21, n[59]),
                        o = m(o, c, f, v, D, 6, n[60]),
                        v = m(v, o, c, f, R, 10, n[61]),
                        f = m(f, v, o, c, C, 15, n[62]),
                        c = m(c, f, v, o, k, 21, n[63]),
                        a[0] = a[0] + o | 0,
                        a[1] = a[1] + c | 0,
                        a[2] = a[2] + f | 0,
                        a[3] = a[3] + v | 0
                    },
                    _doFinalize: function() {
                        var p = this._data
                          , _ = p.words
                          , S = this._nDataBytes * 8
                          , t = p.sigBytes * 8;
                        _[t >>> 5] |= 128 << 24 - t % 32;
                        var r = B.floor(S / 4294967296)
                          , a = S;
                        _[(t + 64 >>> 9 << 4) + 15] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360,
                        _[(t + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360,
                        p.sigBytes = (_.length + 1) * 4,
                        this._process();
                        for (var u = this._hash, x = u.words, C = 0; C < 4; C++) {
                            var W = x[C];
                            x[C] = (W << 8 | W >>> 24) & 16711935 | (W << 24 | W >>> 8) & 4278255360
                        }
                        return u
                    },
                    clone: function() {
                        var p = z.clone.call(this);
                        return p._hash = this._hash.clone(),
                        p
                    }
                });
                function y(p, _, S, t, r, a, u) {
                    var x = p + (_ & S | ~_ & t) + r + u;
                    return (x << a | x >>> 32 - a) + _
                }
                function h(p, _, S, t, r, a, u) {
                    var x = p + (_ & t | S & ~t) + r + u;
                    return (x << a | x >>> 32 - a) + _
                }
                function l(p, _, S, t, r, a, u) {
                    var x = p + (_ ^ S ^ t) + r + u;
                    return (x << a | x >>> 32 - a) + _
                }
                function m(p, _, S, t, r, a, u) {
                    var x = p + (S ^ (_ | ~t)) + r + u;
                    return (x << a | x >>> 32 - a) + _
                }
                H.MD5 = z._createHelper(g),
                H.HmacMD5 = z._createHmacHelper(g)
            }(Math),
            A.MD5
        })
    }(V)),
    V.exports
}
var G = {
    exports: {}
}, U = {
    exports: {}
}, _r = U.exports, rr;
function yr() {
    return rr || (rr = 1,
    function(P, K) {
        (function(A, B) {
            P.exports = B(O())
        }
        )(_r, function(A) {
            return function() {
                var B = A
                  , H = B.lib
                  , b = H.WordArray
                  , F = H.Hasher
                  , z = B.algo
                  , E = []
                  , n = z.SHA1 = F.extend({
                    _doReset: function() {
                        this._hash = new b.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(g, y) {
                        for (var h = this._hash.words, l = h[0], m = h[1], p = h[2], _ = h[3], S = h[4], t = 0; t < 80; t++) {
                            if (t < 16)
                                E[t] = g[y + t] | 0;
                            else {
                                var r = E[t - 3] ^ E[t - 8] ^ E[t - 14] ^ E[t - 16];
                                E[t] = r << 1 | r >>> 31
                            }
                            var a = (l << 5 | l >>> 27) + S + E[t];
                            t < 20 ? a += (m & p | ~m & _) + 1518500249 : t < 40 ? a += (m ^ p ^ _) + 1859775393 : t < 60 ? a += (m & p | m & _ | p & _) - 1894007588 : a += (m ^ p ^ _) - 899497514,
                            S = _,
                            _ = p,
                            p = m << 30 | m >>> 2,
                            m = l,
                            l = a
                        }
                        h[0] = h[0] + l | 0,
                        h[1] = h[1] + m | 0,
                        h[2] = h[2] + p | 0,
                        h[3] = h[3] + _ | 0,
                        h[4] = h[4] + S | 0
                    },
                    _doFinalize: function() {
                        var g = this._data
                          , y = g.words
                          , h = this._nDataBytes * 8
                          , l = g.sigBytes * 8;
                        return y[l >>> 5] |= 128 << 24 - l % 32,
                        y[(l + 64 >>> 9 << 4) + 14] = Math.floor(h / 4294967296),
                        y[(l + 64 >>> 9 << 4) + 15] = h,
                        g.sigBytes = y.length * 4,
                        this._process(),
                        this._hash
                    },
                    clone: function() {
                        var g = F.clone.call(this);
                        return g._hash = this._hash.clone(),
                        g
                    }
                });
                B.SHA1 = F._createHelper(n),
                B.HmacSHA1 = F._createHmacHelper(n)
            }(),
            A.SHA1
        })
    }(U)),
    U.exports
}
var j = {
    exports: {}
}, gr = j.exports, er;
function mr() {
    return er || (er = 1,
    function(P, K) {
        (function(A, B) {
            P.exports = B(O())
        }
        )(gr, function(A) {
            (function() {
                var B = A
                  , H = B.lib
                  , b = H.Base
                  , F = B.enc
                  , z = F.Utf8
                  , E = B.algo;
                E.HMAC = b.extend({
                    init: function(n, g) {
                        n = this._hasher = new n.init,
                        typeof g == "string" && (g = z.parse(g));
                        var y = n.blockSize
                          , h = y * 4;
                        g.sigBytes > h && (g = n.finalize(g)),
                        g.clamp();
                        for (var l = this._oKey = g.clone(), m = this._iKey = g.clone(), p = l.words, _ = m.words, S = 0; S < y; S++)
                            p[S] ^= 1549556828,
                            _[S] ^= 909522486;
                        l.sigBytes = m.sigBytes = h,
                        this.reset()
                    },
                    reset: function() {
                        var n = this._hasher;
                        n.reset(),
                        n.update(this._iKey)
                    },
                    update: function(n) {
                        return this._hasher.update(n),
                        this
                    },
                    finalize: function(n) {
                        var g = this._hasher
                          , y = g.finalize(n);
                        g.reset();
                        var h = g.finalize(this._oKey.clone().concat(y));
                        return h
                    }
                })
            }
            )()
        })
    }(j)),
    j.exports
}
var Br = G.exports, tr;
function ir() {
    return tr || (tr = 1,
    function(P, K) {
        (function(A, B, H) {
            P.exports = B(O(), yr(), mr())
        }
        )(Br, function(A) {
            return function() {
                var B = A
                  , H = B.lib
                  , b = H.Base
                  , F = H.WordArray
                  , z = B.algo
                  , E = z.MD5
                  , n = z.EvpKDF = b.extend({
                    cfg: b.extend({
                        keySize: 128 / 32,
                        hasher: E,
                        iterations: 1
                    }),
                    init: function(g) {
                        this.cfg = this.cfg.extend(g)
                    },
                    compute: function(g, y) {
                        for (var h, l = this.cfg, m = l.hasher.create(), p = F.create(), _ = p.words, S = l.keySize, t = l.iterations; _.length < S; ) {
                            h && m.update(h),
                            h = m.update(g).finalize(y),
                            m.reset();
                            for (var r = 1; r < t; r++)
                                h = m.finalize(h),
                                m.reset();
                            p.concat(h)
                        }
                        return p.sigBytes = S * 4,
                        p
                    }
                });
                B.EvpKDF = function(g, y, h) {
                    return n.create(h).compute(g, y)
                }
            }(),
            A.EvpKDF
        })
    }(G)),
    G.exports
}
var Q = {
    exports: {}
}, Cr = Q.exports, nr;
function kr() {
    return nr || (nr = 1,
    function(P, K) {
        (function(A, B, H) {
            P.exports = B(O(), ir())
        }
        )(Cr, function(A) {
            A.lib.Cipher || function(B) {
                var H = A
                  , b = H.lib
                  , F = b.Base
                  , z = b.WordArray
                  , E = b.BufferedBlockAlgorithm
                  , n = H.enc;
                n.Utf8;
                var g = n.Base64
                  , y = H.algo
                  , h = y.EvpKDF
                  , l = b.Cipher = E.extend({
                    cfg: F.extend(),
                    createEncryptor: function(e, i) {
                        return this.create(this._ENC_XFORM_MODE, e, i)
                    },
                    createDecryptor: function(e, i) {
                        return this.create(this._DEC_XFORM_MODE, e, i)
                    },
                    init: function(e, i, d) {
                        this.cfg = this.cfg.extend(d),
                        this._xformMode = e,
                        this._key = i,
                        this.reset()
                    },
                    reset: function() {
                        E.reset.call(this),
                        this._doReset()
                    },
                    process: function(e) {
                        return this._append(e),
                        this._process()
                    },
                    finalize: function(e) {
                        e && this._append(e);
                        var i = this._doFinalize();
                        return i
                    },
                    keySize: 128 / 32,
                    ivSize: 128 / 32,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function() {
                        function e(i) {
                            return typeof i == "string" ? D : x
                        }
                        return function(i) {
                            return {
                                encrypt: function(d, s, k) {
                                    return e(s).encrypt(i, d, s, k)
                                },
                                decrypt: function(d, s, k) {
                                    return e(s).decrypt(i, d, s, k)
                                }
                            }
                        }
                    }()
                });
                b.StreamCipher = l.extend({
                    _doFinalize: function() {
                        var e = this._process(!0);
                        return e
                    },
                    blockSize: 1
                });
                var m = H.mode = {}
                  , p = b.BlockCipherMode = F.extend({
                    createEncryptor: function(e, i) {
                        return this.Encryptor.create(e, i)
                    },
                    createDecryptor: function(e, i) {
                        return this.Decryptor.create(e, i)
                    },
                    init: function(e, i) {
                        this._cipher = e,
                        this._iv = i
                    }
                })
                  , _ = m.CBC = function() {
                    var e = p.extend();
                    e.Encryptor = e.extend({
                        processBlock: function(d, s) {
                            var k = this._cipher
                              , w = k.blockSize;
                            i.call(this, d, s, w),
                            k.encryptBlock(d, s),
                            this._prevBlock = d.slice(s, s + w)
                        }
                    }),
                    e.Decryptor = e.extend({
                        processBlock: function(d, s) {
                            var k = this._cipher
                              , w = k.blockSize
                              , R = d.slice(s, s + w);
                            k.decryptBlock(d, s),
                            i.call(this, d, s, w),
                            this._prevBlock = R
                        }
                    });
                    function i(d, s, k) {
                        var w, R = this._iv;
                        R ? (w = R,
                        this._iv = B) : w = this._prevBlock;
                        for (var q = 0; q < k; q++)
                            d[s + q] ^= w[q]
                    }
                    return e
                }()
                  , S = H.pad = {}
                  , t = S.Pkcs7 = {
                    pad: function(e, i) {
                        for (var d = i * 4, s = d - e.sigBytes % d, k = s << 24 | s << 16 | s << 8 | s, w = [], R = 0; R < s; R += 4)
                            w.push(k);
                        var q = z.create(w, s);
                        e.concat(q)
                    },
                    unpad: function(e) {
                        var i = e.words[e.sigBytes - 1 >>> 2] & 255;
                        e.sigBytes -= i
                    }
                };
                b.BlockCipher = l.extend({
                    cfg: l.cfg.extend({
                        mode: _,
                        padding: t
                    }),
                    reset: function() {
                        var e;
                        l.reset.call(this);
                        var i = this.cfg
                          , d = i.iv
                          , s = i.mode;
                        this._xformMode == this._ENC_XFORM_MODE ? e = s.createEncryptor : (e = s.createDecryptor,
                        this._minBufferSize = 1),
                        this._mode && this._mode.__creator == e ? this._mode.init(this, d && d.words) : (this._mode = e.call(s, this, d && d.words),
                        this._mode.__creator = e)
                    },
                    _doProcessBlock: function(e, i) {
                        this._mode.processBlock(e, i)
                    },
                    _doFinalize: function() {
                        var e, i = this.cfg.padding;
                        return this._xformMode == this._ENC_XFORM_MODE ? (i.pad(this._data, this.blockSize),
                        e = this._process(!0)) : (e = this._process(!0),
                        i.unpad(e)),
                        e
                    },
                    blockSize: 128 / 32
                });
                var r = b.CipherParams = F.extend({
                    init: function(e) {
                        this.mixIn(e)
                    },
                    toString: function(e) {
                        return (e || this.formatter).stringify(this)
                    }
                })
                  , a = H.format = {}
                  , u = a.OpenSSL = {
                    stringify: function(e) {
                        var i, d = e.ciphertext, s = e.salt;
                        return s ? i = z.create([1398893684, 1701076831]).concat(s).concat(d) : i = d,
                        i.toString(g)
                    },
                    parse: function(e) {
                        var i, d = g.parse(e), s = d.words;
                        return s[0] == 1398893684 && s[1] == 1701076831 && (i = z.create(s.slice(2, 4)),
                        s.splice(0, 4),
                        d.sigBytes -= 16),
                        r.create({
                            ciphertext: d,
                            salt: i
                        })
                    }
                }
                  , x = b.SerializableCipher = F.extend({
                    cfg: F.extend({
                        format: u
                    }),
                    encrypt: function(e, i, d, s) {
                        s = this.cfg.extend(s);
                        var k = e.createEncryptor(d, s)
                          , w = k.finalize(i)
                          , R = k.cfg;
                        return r.create({
                            ciphertext: w,
                            key: d,
                            iv: R.iv,
                            algorithm: e,
                            mode: R.mode,
                            padding: R.padding,
                            blockSize: e.blockSize,
                            formatter: s.format
                        })
                    },
                    decrypt: function(e, i, d, s) {
                        s = this.cfg.extend(s),
                        i = this._parse(i, s.format);
                        var k = e.createDecryptor(d, s).finalize(i.ciphertext);
                        return k
                    },
                    _parse: function(e, i) {
                        return typeof e == "string" ? i.parse(e, this) : e
                    }
                })
                  , C = H.kdf = {}
                  , W = C.OpenSSL = {
                    execute: function(e, i, d, s, k) {
                        if (s || (s = z.random(64 / 8)),
                        k)
                            var w = h.create({
                                keySize: i + d,
                                hasher: k
                            }).compute(e, s);
                        else
                            var w = h.create({
                                keySize: i + d
                            }).compute(e, s);
                        var R = z.create(w.words.slice(i), d * 4);
                        return w.sigBytes = i * 4,
                        r.create({
                            key: w,
                            iv: R,
                            salt: s
                        })
                    }
                }
                  , D = b.PasswordBasedCipher = x.extend({
                    cfg: x.cfg.extend({
                        kdf: W
                    }),
                    encrypt: function(e, i, d, s) {
                        s = this.cfg.extend(s);
                        var k = s.kdf.execute(d, e.keySize, e.ivSize, s.salt, s.hasher);
                        s.iv = k.iv;
                        var w = x.encrypt.call(this, e, i, k.key, s);
                        return w.mixIn(k),
                        w
                    },
                    decrypt: function(e, i, d, s) {
                        s = this.cfg.extend(s),
                        i = this._parse(i, s.format);
                        var k = s.kdf.execute(d, e.keySize, e.ivSize, i.salt, s.hasher);
                        s.iv = k.iv;
                        var w = x.decrypt.call(this, e, i, k.key, s);
                        return w
                    }
                })
            }()
        })
    }(Q)),
    Q.exports
}
var br = T.exports, ar;
function wr() {
    return ar || (ar = 1,
    function(P, K) {
        (function(A, B, H) {
            P.exports = B(O(), lr(), xr(), ir(), kr())
        }
        )(br, function(A) {
            return function() {
                var B = A
                  , H = B.lib
                  , b = H.BlockCipher
                  , F = B.algo
                  , z = []
                  , E = []
                  , n = []
                  , g = []
                  , y = []
                  , h = []
                  , l = []
                  , m = []
                  , p = []
                  , _ = [];
                (function() {
                    for (var r = [], a = 0; a < 256; a++)
                        a < 128 ? r[a] = a << 1 : r[a] = a << 1 ^ 283;
                    for (var u = 0, x = 0, a = 0; a < 256; a++) {
                        var C = x ^ x << 1 ^ x << 2 ^ x << 3 ^ x << 4;
                        C = C >>> 8 ^ C & 255 ^ 99,
                        z[u] = C,
                        E[C] = u;
                        var W = r[u]
                          , D = r[W]
                          , e = r[D]
                          , i = r[C] * 257 ^ C * 16843008;
                        n[u] = i << 24 | i >>> 8,
                        g[u] = i << 16 | i >>> 16,
                        y[u] = i << 8 | i >>> 24,
                        h[u] = i;
                        var i = e * 16843009 ^ D * 65537 ^ W * 257 ^ u * 16843008;
                        l[C] = i << 24 | i >>> 8,
                        m[C] = i << 16 | i >>> 16,
                        p[C] = i << 8 | i >>> 24,
                        _[C] = i,
                        u ? (u = W ^ r[r[r[e ^ W]]],
                        x ^= r[r[x]]) : u = x = 1
                    }
                }
                )();
                var S = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                  , t = F.AES = b.extend({
                    _doReset: function() {
                        var r;
                        if (!(this._nRounds && this._keyPriorReset === this._key)) {
                            for (var a = this._keyPriorReset = this._key, u = a.words, x = a.sigBytes / 4, C = this._nRounds = x + 6, W = (C + 1) * 4, D = this._keySchedule = [], e = 0; e < W; e++)
                                e < x ? D[e] = u[e] : (r = D[e - 1],
                                e % x ? x > 6 && e % x == 4 && (r = z[r >>> 24] << 24 | z[r >>> 16 & 255] << 16 | z[r >>> 8 & 255] << 8 | z[r & 255]) : (r = r << 8 | r >>> 24,
                                r = z[r >>> 24] << 24 | z[r >>> 16 & 255] << 16 | z[r >>> 8 & 255] << 8 | z[r & 255],
                                r ^= S[e / x | 0] << 24),
                                D[e] = D[e - x] ^ r);
                            for (var i = this._invKeySchedule = [], d = 0; d < W; d++) {
                                var e = W - d;
                                if (d % 4)
                                    var r = D[e];
                                else
                                    var r = D[e - 4];
                                d < 4 || e <= 4 ? i[d] = r : i[d] = l[z[r >>> 24]] ^ m[z[r >>> 16 & 255]] ^ p[z[r >>> 8 & 255]] ^ _[z[r & 255]]
                            }
                        }
                    },
                    encryptBlock: function(r, a) {
                        this._doCryptBlock(r, a, this._keySchedule, n, g, y, h, z)
                    },
                    decryptBlock: function(r, a) {
                        var u = r[a + 1];
                        r[a + 1] = r[a + 3],
                        r[a + 3] = u,
                        this._doCryptBlock(r, a, this._invKeySchedule, l, m, p, _, E);
                        var u = r[a + 1];
                        r[a + 1] = r[a + 3],
                        r[a + 3] = u
                    },
                    _doCryptBlock: function(r, a, u, x, C, W, D, e) {
                        for (var i = this._nRounds, d = r[a] ^ u[0], s = r[a + 1] ^ u[1], k = r[a + 2] ^ u[2], w = r[a + 3] ^ u[3], R = 4, q = 1; q < i; q++) {
                            var $ = x[d >>> 24] ^ C[s >>> 16 & 255] ^ W[k >>> 8 & 255] ^ D[w & 255] ^ u[R++]
                              , L = x[s >>> 24] ^ C[k >>> 16 & 255] ^ W[w >>> 8 & 255] ^ D[d & 255] ^ u[R++]
                              , I = x[k >>> 24] ^ C[w >>> 16 & 255] ^ W[d >>> 8 & 255] ^ D[s & 255] ^ u[R++]
                              , o = x[w >>> 24] ^ C[d >>> 16 & 255] ^ W[s >>> 8 & 255] ^ D[k & 255] ^ u[R++];
                            d = $,
                            s = L,
                            k = I,
                            w = o
                        }
                        var $ = (e[d >>> 24] << 24 | e[s >>> 16 & 255] << 16 | e[k >>> 8 & 255] << 8 | e[w & 255]) ^ u[R++]
                          , L = (e[s >>> 24] << 24 | e[k >>> 16 & 255] << 16 | e[w >>> 8 & 255] << 8 | e[d & 255]) ^ u[R++]
                          , I = (e[k >>> 24] << 24 | e[w >>> 16 & 255] << 16 | e[d >>> 8 & 255] << 8 | e[s & 255]) ^ u[R++]
                          , o = (e[w >>> 24] << 24 | e[d >>> 16 & 255] << 16 | e[s >>> 8 & 255] << 8 | e[k & 255]) ^ u[R++];
                        r[a] = $,
                        r[a + 1] = L,
                        r[a + 2] = I,
                        r[a + 3] = o
                    },
                    keySize: 256 / 32
                });
                B.AES = b._createHelper(t)
            }(),
            A.AES
        })
    }(T)),
    T.exports
}
var zr = wr();
const Er = sr(zr);
function Dr() {
    try {
        const {origin: P} = window.location
          , K = "__ginsedk"
          , B = Er.encrypt(P, "20250613-e311500").toString();
        document.cookie = `${K}=${B};path=/;secure`
    } catch (P) {
        console.error(P)
    }
}
export {Dr as addEncryptedDomainKey};
