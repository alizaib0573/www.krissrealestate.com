/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-csstransforms3d-csstransitions-domprefixes-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, i, a, s;
        for (var l in S)
            if (S.hasOwnProperty(l)) {
                if (e = [], t = S[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) a = e[i], s = a.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), C.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function i(e) {
        var t = x.className,
            n = Modernizr._config.classPrefix || "";
        if (_ && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? x.className.baseVal = t : x.className = t)
    }

    function a(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u() {
        var e = t.body;
        return e || (e = l(_ ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, o) {
        var i, a, s, c, f = "modernizr",
            d = l("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) s = l("div"), s.id = o ? o[r] : f + (r + 1), d.appendChild(s);
        return i = l("style"), i.type = "text/css", i.id = "s" + f, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), a = n(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = c, x.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var o;
        for (var i in e)
            if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? f(o, n || t) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, n, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, t, n);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var a = i.error ? "error" : "log";
                i[a].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else o = !n && t.currentStyle && t.currentStyle[r];
        return o
    }

    function h(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + p(t[o]) + ":" + r + ")");
            return i = i.join(" or "), c("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == m(e, null, "position")
            })
        }
        return n
    }

    function g(e, t, o, i) {
        function u() {
            f && (delete F.style, delete F.modElem)
        }
        if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
            var c = h(e, o);
            if (!r(c, "undefined")) return c
        }
        for (var f, d, p, m, g, v = ["modernizr", "tspan", "samp"]; !F.style && v.length;) f = !0, F.modElem = l(v.shift()), F.style = F.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (m = e[d], g = F.style[m], s(m, "-") && (m = a(m)), F.style[m] !== n) {
                if (i || r(o, "undefined")) return u(), "pfx" == t ? m : !0;
                try {
                    F.style[m] = o
                } catch (y) {}
                if (F.style[m] != g) return u(), "pfx" == t ? m : !0
            }
        return u(), !1
    }

    function v(e, t, n, o, i) {
        var a = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + T.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(s, t, o, i) : (s = (e + " " + z.join(a + " ") + a).split(" "), d(s, t, n))
    }

    function y(e, t, r) {
        return v(e, n, n, t, r)
    }
    var C = [],
        S = [],
        E = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                S.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                S.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = E, Modernizr = new Modernizr;
    var b = E._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    E._prefixes = b;
    var x = t.documentElement,
        _ = "svg" === x.nodeName.toLowerCase();
    _ || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t)
        }

        function i(e) {
            var t = y[e[g]];
            return t || (t = {}, v++, e[g] = v, y[v] = t), t
        }

        function a(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = i(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || i(e);
            for (var o = n.frag.cloneNode(), a = 0, s = r(), l = s.length; l > a; a++) o.createElement(s[a]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = i(e);
            return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var c, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            v = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, f = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: a,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var w = "Moz O ms Webkit",
        z = E._config.usePrefixes ? w.toLowerCase().split(" ") : [];
    E._domPrefixes = z;
    var N = "CSS" in e && "supports" in e.CSS,
        k = "supportsCSS" in e;
    Modernizr.addTest("supports", N || k);
    var T = E._config.usePrefixes ? w.split(" ") : [];
    E._cssomPrefixes = T;
    var P = function(t) {
        var r, o = b.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
        for (var a = 0; o > a; a++) {
            var s = b[a],
                l = s.toUpperCase() + "_" + r;
            if (l in i) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    E.atRule = P;
    var j = (E.testStyles = c, {
        elem: l("modernizr")
    });
    Modernizr._q.push(function() {
        delete j.elem
    });
    var F = {
        style: j.elem.style
    };
    Modernizr._q.unshift(function() {
        delete F.style
    });
    E.testProp = function(e, t, r) {
        return g([e], n, t, r)
    };
    E.testAllProps = v;
    E.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = a(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    E.testAllProps = y, Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)), Modernizr.addTest("csstransforms3d", function() {
        return !!y("perspective", "1px", !0)
    }), Modernizr.addTest("csstransitions", y("transition", "all", !0));
    var M = function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    E.mq = M, o(), i(C), delete E.addTest, delete E.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
    e.Modernizr = Modernizr
}(window, document);