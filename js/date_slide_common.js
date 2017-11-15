(function(__context) {
    var module = {
        id: "f751fa756ab8aaf2e04d6d527de9093f",
        filename: "zepto.js",
        exports: {}
    };
    if (!__context.____MODULES) {
        __context.____MODULES = {}
    }
    var r = function(exports, module, global) {
        var Zepto = function() {
            function _(e) {
                return e == null  ? String(e) : T[N.call(e)] || "object"
            }
            function D(e) {
                return _(e) == "function"
            }
            function P(e) {
                return e != null  && e == e.window
            }
            function H(e) {
                return e != null  && e.nodeType == e.DOCUMENT_NODE
            }
            function B(e) {
                return _(e) == "object"
            }
            function j(e) {
                return B(e) && !P(e) && Object.getPrototypeOf(e) == Object.prototype
            }
            function F(e) {
                return typeof e.length == "number"
            }
            function I(e) {
                return o.call(e, function(e) {
                    return e != null 
                })
            }
            function q(e) {
                return e.length > 0 ? n.fn.concat.apply([], e) : e
            }
            function R(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            }
            function U(e) {
                return e in l ? l[e] : l[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
            }
            function z(e, t) {
                return typeof t == "number" && !c[R(e)] ? t + "px" : t
            }
            function W(e) {
                var t, n;
                if (!f[e]) {
                    t = a.createElement(e);
                    a.body.appendChild(t);
                    n = getComputedStyle(t, "").getPropertyValue("display");
                    t.parentNode.removeChild(t);
                    n == "none" && (n = "block");
                    f[e] = n
                }
                return f[e]
            }
            function X(e) {
                return "children" in e ? u.call(e.children) : n.map(e.childNodes, function(e) {
                    if (e.nodeType == 1)
                        return e
                })
            }
            function V(e, t) {
                var n, r = e ? e.length : 0;
                for (n = 0; n < r; n++)
                    this[n] = e[n];
                this.length = r;
                this.selector = t || ""
            }
            function $(n, r, i) {
                for (t in r)
                    if (i && (j(r[t]) || M(r[t]))) {
                        if (j(r[t]) && !j(n[t]))
                            n[t] = {};
                        if (M(r[t]) && !M(n[t]))
                            n[t] = [];
                        $(n[t], r[t], i)
                    } else if (r[t] !== e)
                        n[t] = r[t]
            }
            function J(e, t) {
                return t == null  ? n(e) : n(e).filter(t)
            }
            function K(e, t, n, r) {
                return D(t) ? t.call(e, n, r) : t
            }
            function Q(e, t, n) {
                n == null  ? e.removeAttribute(t) : e.setAttribute(t, n)
            }
            function G(t, n) {
                var r = t.className || ""
                  , i = r && r.baseVal !== e;
                if (n === e)
                    return i ? r.baseVal : r;
                i ? r.baseVal = n : t.className = n
            }
            function Y(e) {
                try {
                    return e ? e == "true" || (e == "false" ? false : e == "null" ? null  : +e + "" == e ? +e : /^[\[\{]/.test(e) ? n.parseJSON(e) : e) : e
                } catch (t) {
                    return e
                }
            }
            function Z(e, t) {
                t(e);
                for (var n = 0, r = e.childNodes.length; n < r; n++)
                    Z(e.childNodes[n], t)
            }
            var e, t, n, r, i = [], s = i.concat, o = i.filter, u = i.slice, a = window.document, f = {}, l = {}, c = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, h = /^\s*<(\w+|!)[^>]*>/, p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, v = /^(?:body|html)$/i, m = /([A-Z])/g, g = ["val", "css", "html", "text", "data", "width", "height", "offset"], y = ["after", "prepend", "before", "append"], b = a.createElement("table"), w = a.createElement("tr"), E = {
                tr: a.createElement("tbody"),
                tbody: b,
                thead: b,
                tfoot: b,
                td: w,
                th: w,
                "*": a.createElement("div")
            }, S = /complete|loaded|interactive/, x = /^[\w-]*$/, T = {}, N = T.toString, C = {}, k, L, A = a.createElement("div"), O = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            }, M = Array.isArray || function(e) {
                return e instanceof Array
            }
            ;
            C.matches = function(e, t) {
                if (!t || !e || e.nodeType !== 1)
                    return false;
                var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
                if (n)
                    return n.call(e, t);
                var r, i = e.parentNode, s = !i;
                if (s)
                    (i = A).appendChild(e);
                r = ~C.qsa(i, t).indexOf(e);
                s && A.removeChild(e);
                return r
            }
            ;
            k = function(e) {
                return e.replace(/-+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }
            ;
            L = function(e) {
                return o.call(e, function(t, n) {
                    return e.indexOf(t) == n
                })
            }
            ;
            C.fragment = function(t, r, i) {
                var s, o, f;
                if (p.test(t))
                    s = n(a.createElement(RegExp.$1));
                if (!s) {
                    if (t.replace)
                        t = t.replace(d, "<$1></$2>");
                    if (r === e)
                        r = h.test(t) && RegExp.$1;
                    if (!(r in E))
                        r = "*";
                    f = E[r];
                    f.innerHTML = "" + t;
                    s = n.each(u.call(f.childNodes), function() {
                        f.removeChild(this)
                    })
                }
                if (j(i)) {
                    o = n(s);
                    n.each(i, function(e, t) {
                        if (g.indexOf(e) > -1)
                            o[e](t);
                        else
                            o.attr(e, t)
                    })
                }
                return s
            }
            ;
            C.Z = function(e, t) {
                return new V(e,t)
            }
            ;
            C.isZ = function(e) {
                return e instanceof C.Z
            }
            ;
            C.init = function(t, r) {
                var i;
                if (!t)
                    return C.Z();
                else if (typeof t == "string") {
                    t = t.trim();
                    if (t[0] == "<" && h.test(t))
                        i = C.fragment(t, RegExp.$1, r),
                        t = null ;
                    else if (r !== e)
                        return n(r).find(t);
                    else
                        i = C.qsa(a, t)
                } else if (D(t))
                    return n(a).ready(t);
                else if (C.isZ(t))
                    return t;
                else {
                    if (M(t))
                        i = I(t);
                    else if (B(t))
                        i = [t],
                        t = null ;
                    else if (h.test(t))
                        i = C.fragment(t.trim(), RegExp.$1, r),
                        t = null ;
                    else if (r !== e)
                        return n(r).find(t);
                    else
                        i = C.qsa(a, t)
                }
                return C.Z(i, t)
            }
            ;
            n = function(e, t) {
                return C.init(e, t)
            }
            ;
            n.extend = function(e) {
                var t, n = u.call(arguments, 1);
                if (typeof e == "boolean") {
                    t = e;
                    e = n.shift()
                }
                n.forEach(function(n) {
                    $(e, n, t)
                });
                return e
            }
            ;
            C.qsa = function(e, t) {
                var n, r = t[0] == "#", i = !r && t[0] == ".", s = r || i ? t.slice(1) : t, o = x.test(s);
                return e.getElementById && o && r ? (n = e.getElementById(s)) ? [n] : [] : e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 ? [] : u.call(o && !r && e.getElementsByClassName ? i ? e.getElementsByClassName(s) : e.getElementsByTagName(t) : e.querySelectorAll(t))
            }
            ;
            n.contains = a.documentElement.contains ? function(e, t) {
                return e !== t && e.contains(t)
            }
             : function(e, t) {
                while (t && (t = t.parentNode))
                    if (t === e)
                        return true;
                return false
            }
            ;
            n.type = _;
            n.isFunction = D;
            n.isWindow = P;
            n.isArray = M;
            n.isPlainObject = j;
            n.isEmptyObject = function(e) {
                var t;
                for (t in e)
                    return false;
                return true
            }
            ;
            n.inArray = function(e, t, n) {
                return i.indexOf.call(t, e, n)
            }
            ;
            n.camelCase = k;
            n.trim = function(e) {
                return e == null  ? "" : String.prototype.trim.call(e)
            }
            ;
            n.uuid = 0;
            n.support = {};
            n.expr = {};
            n.noop = function() {}
            ;
            n.map = function(e, t) {
                var n, r = [], i, s;
                if (F(e))
                    for (i = 0; i < e.length; i++) {
                        n = t(e[i], i);
                        if (n != null )
                            r.push(n)
                    }
                else
                    for (s in e) {
                        n = t(e[s], s);
                        if (n != null )
                            r.push(n)
                    }
                return q(r)
            }
            ;
            n.each = function(e, t) {
                var n, r;
                if (F(e)) {
                    for (n = 0; n < e.length; n++)
                        if (t.call(e[n], n, e[n]) === false)
                            return e
                } else {
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === false)
                            return e
                }
                return e
            }
            ;
            n.grep = function(e, t) {
                return o.call(e, t)
            }
            ;
            if (window.JSON)
                n.parseJSON = JSON.parse;
            n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                T["[object " + t + "]"] = t.toLowerCase()
            });
            n.fn = {
                constructor: C.Z,
                length: 0,
                forEach: i.forEach,
                reduce: i.reduce,
                push: i.push,
                sort: i.sort,
                splice: i.splice,
                indexOf: i.indexOf,
                concat: function() {
                    var e, t, n = [];
                    for (e = 0; e < arguments.length; e++) {
                        t = arguments[e];
                        n[e] = C.isZ(t) ? t.toArray() : t
                    }
                    return s.apply(C.isZ(this) ? this.toArray() : this, n)
                },
                map: function(e) {
                    return n(n.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return n(u.apply(this, arguments))
                },
                ready: function(e) {
                    if (S.test(a.readyState) && a.body)
                        e(n);
                    else
                        a.addEventListener("DOMContentLoaded", function() {
                            e(n)
                        }, false);
                    return this
                },
                get: function(t) {
                    return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length]
                },
                toArray: function() {
                    return this.get()
                },
                size: function() {
                    return this.length
                },
                remove: function() {
                    return this.each(function() {
                        if (this.parentNode != null )
                            this.parentNode.removeChild(this)
                    })
                },
                each: function(e) {
                    i.every.call(this, function(t, n) {
                        return e.call(t, n, t) !== false
                    });
                    return this
                },
                filter: function(e) {
                    if (D(e))
                        return this.not(this.not(e));
                    return n(o.call(this, function(t) {
                        return C.matches(t, e)
                    }))
                },
                add: function(e, t) {
                    return n(L(this.concat(n(e, t))))
                },
                is: function(e) {
                    return this.length > 0 && C.matches(this[0], e)
                },
                not: function(t) {
                    var r = [];
                    if (D(t) && t.call !== e)
                        this.each(function(e) {
                            if (!t.call(this, e))
                                r.push(this)
                        });
                    else {
                        var i = typeof t == "string" ? this.filter(t) : F(t) && D(t.item) ? u.call(t) : n(t);
                        this.forEach(function(e) {
                            if (i.indexOf(e) < 0)
                                r.push(e)
                        })
                    }
                    return n(r)
                },
                has: function(e) {
                    return this.filter(function() {
                        return B(e) ? n.contains(this, e) : n(this).find(e).size()
                    })
                },
                eq: function(e) {
                    return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
                },
                first: function() {
                    var e = this[0];
                    return e && !B(e) ? e : n(e)
                },
                last: function() {
                    var e = this[this.length - 1];
                    return e && !B(e) ? e : n(e)
                },
                find: function(e) {
                    var t, r = this;
                    if (!e)
                        t = n();
                    else if (typeof e == "object")
                        t = n(e).filter(function() {
                            var e = this;
                            return i.some.call(r, function(t) {
                                return n.contains(t, e)
                            })
                        });
                    else if (this.length == 1)
                        t = n(C.qsa(this[0], e));
                    else
                        t = this.map(function() {
                            return C.qsa(this, e)
                        });
                    return t
                },
                closest: function(e, t) {
                    var r = this[0]
                      , i = false;
                    if (typeof e == "object")
                        i = n(e);
                    while (r && !(i ? i.indexOf(r) >= 0 : C.matches(r, e)))
                        r = r !== t && !H(r) && r.parentNode;
                    return n(r)
                },
                parents: function(e) {
                    var t = []
                      , r = this;
                    while (r.length > 0)
                        r = n.map(r, function(e) {
                            if ((e = e.parentNode) && !H(e) && t.indexOf(e) < 0) {
                                t.push(e);
                                return e
                            }
                        });
                    return J(t, e)
                },
                parent: function(e) {
                    return J(L(this.pluck("parentNode")), e)
                },
                children: function(e) {
                    return J(this.map(function() {
                        return X(this)
                    }), e)
                },
                contents: function() {
                    return this.map(function() {
                        return this.contentDocument || u.call(this.childNodes)
                    })
                },
                siblings: function(e) {
                    return J(this.map(function(e, t) {
                        return o.call(X(t.parentNode), function(e) {
                            return e !== t
                        })
                    }), e)
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = ""
                    })
                },
                pluck: function(e) {
                    return n.map(this, function(t) {
                        return t[e]
                    })
                },
                show: function() {
                    return this.each(function() {
                        this.style.display == "none" && (this.style.display = "");
                        if (getComputedStyle(this, "").getPropertyValue("display") == "none")
                            this.style.display = W(this.nodeName)
                    })
                },
                replaceWith: function(e) {
                    return this.before(e).remove()
                },
                wrap: function(e) {
                    var t = D(e);
                    if (this[0] && !t)
                        var r = n(e).get(0)
                          , i = r.parentNode || this.length > 1;
                    return this.each(function(s) {
                        n(this).wrapAll(t ? e.call(this, s) : i ? r.cloneNode(true) : r)
                    })
                },
                wrapAll: function(e) {
                    if (this[0]) {
                        n(this[0]).before(e = n(e));
                        var t;
                        while ((t = e.children()).length)
                            e = t.first();
                        n(e).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    var t = D(e);
                    return this.each(function(r) {
                        var i = n(this)
                          , s = i.contents()
                          , o = t ? e.call(this, r) : e;
                        s.length ? s.wrapAll(o) : i.append(o)
                    })
                },
                unwrap: function() {
                    this.parent().each(function() {
                        n(this).replaceWith(n(this).children())
                    });
                    return this
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(true)
                    })
                },
                hide: function() {
                    return this.css("display", "none")
                },
                toggle: function(t) {
                    return this.each(function() {
                        var r = n(this);
                        (t === e ? r.css("display") == "none" : t) ? r.show() : r.hide()
                    })
                },
                prev: function(e) {
                    return n(this.pluck("previousElementSibling")).filter(e || "*")
                },
                next: function(e) {
                    return n(this.pluck("nextElementSibling")).filter(e || "*")
                },
                html: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        var r = this.innerHTML;
                        n(this).empty().append(K(this, e, t, r))
                    }) : 0 in this ? this[0].innerHTML : null 
                },
                text: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        var n = K(this, e, t, this.textContent);
                        this.textContent = n == null  ? "" : "" + n
                    }) : 0 in this ? this[0].textContent : null 
                },
                attr: function(n, r) {
                    var i;
                    return typeof n == "string" && !(1 in arguments) ? !this.length || this[0].nodeType !== 1 ? e : !(i = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : i : this.each(function(e) {
                        if (this.nodeType !== 1)
                            return;
                        if (B(n))
                            for (t in n)
                                Q(this, t, n[t]);
                        else
                            Q(this, n, K(this, r, e, this.getAttribute(n)))
                    })
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        this.nodeType === 1 && e.split(" ").forEach(function(e) {
                            Q(this, e)
                        }, this)
                    })
                },
                prop: function(e, t) {
                    e = O[e] || e;
                    return 1 in arguments ? this.each(function(n) {
                        this[e] = K(this, t, n, this[e])
                    }) : this[0] && this[0][e]
                },
                data: function(t, n) {
                    var r = "data-" + t.replace(m, "-$1").toLowerCase();
                    var i = 1 in arguments ? this.attr(r, n) : this.attr(r);
                    return i !== null  ? Y(i) : e
                },
                val: function(e) {
                    return 0 in arguments ? this.each(function(t) {
                        this.value = K(this, e, t, this.value)
                    }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                        return this.selected
                    }).pluck("value") : this[0].value)
                },
                offset: function(e) {
                    if (e)
                        return this.each(function(t) {
                            var r = n(this)
                              , i = K(this, e, t, r.offset())
                              , s = r.offsetParent().offset()
                              , o = {
                                top: i.top - s.top,
                                left: i.left - s.left
                            };
                            if (r.css("position") == "static")
                                o["position"] = "relative";
                            r.css(o)
                        });
                    if (!this.length)
                        return null ;
                    if (!n.contains(a.documentElement, this[0]))
                        return {
                            top: 0,
                            left: 0
                        };
                    var t = this[0].getBoundingClientRect();
                    return {
                        left: t.left + window.pageXOffset,
                        top: t.top + window.pageYOffset,
                        width: Math.round(t.width),
                        height: Math.round(t.height)
                    }
                },
                css: function(e, r) {
                    if (arguments.length < 2) {
                        var i, s = this[0];
                        if (!s)
                            return;
                        i = getComputedStyle(s, "");
                        if (typeof e == "string")
                            return s.style[k(e)] || i.getPropertyValue(e);
                        else if (M(e)) {
                            var o = {};
                            n.each(e, function(e, t) {
                                o[t] = s.style[k(t)] || i.getPropertyValue(t)
                            });
                            return o
                        }
                    }
                    var u = "";
                    if (_(e) == "string") {
                        if (!r && r !== 0)
                            this.each(function() {
                                this.style.removeProperty(R(e))
                            });
                        else
                            u = R(e) + ":" + z(e, r)
                    } else {
                        for (t in e)
                            if (!e[t] && e[t] !== 0)
                                this.each(function() {
                                    this.style.removeProperty(R(t))
                                });
                            else
                                u += R(t) + ":" + z(t, e[t]) + ";"
                    }
                    return this.each(function() {
                        this.style.cssText += ";" + u
                    })
                },
                index: function(e) {
                    return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
                },
                hasClass: function(e) {
                    if (!e)
                        return false;
                    return i.some.call(this, function(e) {
                        return this.test(G(e))
                    }, U(e))
                },
                addClass: function(e) {
                    if (!e)
                        return this;
                    return this.each(function(t) {
                        if (!("className" in this))
                            return;
                        r = [];
                        var i = G(this)
                          , s = K(this, e, t, i);
                        s.split(/\s+/g).forEach(function(e) {
                            if (!n(this).hasClass(e))
                                r.push(e)
                        }, this);
                        r.length && G(this, i + (i ? " " : "") + r.join(" "))
                    })
                },
                removeClass: function(t) {
                    return this.each(function(n) {
                        if (!("className" in this))
                            return;
                        if (t === e)
                            return G(this, "");
                        r = G(this);
                        K(this, t, n, r).split(/\s+/g).forEach(function(e) {
                            r = r.replace(U(e), " ")
                        });
                        G(this, r.trim())
                    })
                },
                toggleClass: function(t, r) {
                    if (!t)
                        return this;
                    return this.each(function(i) {
                        var s = n(this)
                          , o = K(this, t, i, G(this));
                        o.split(/\s+/g).forEach(function(t) {
                            (r === e ? !s.hasClass(t) : r) ? s.addClass(t) : s.removeClass(t)
                        })
                    })
                },
                scrollTop: function(t) {
                    if (!this.length)
                        return;
                    var n = "scrollTop" in this[0];
                    if (t === e)
                        return n ? this[0].scrollTop : this[0].pageYOffset;
                    return this.each(n ? function() {
                        this.scrollTop = t
                    }
                     : function() {
                        this.scrollTo(this.scrollX, t)
                    }
                    )
                },
                scrollLeft: function(t) {
                    if (!this.length)
                        return;
                    var n = "scrollLeft" in this[0];
                    if (t === e)
                        return n ? this[0].scrollLeft : this[0].pageXOffset;
                    return this.each(n ? function() {
                        this.scrollLeft = t
                    }
                     : function() {
                        this.scrollTo(t, this.scrollY)
                    }
                    )
                },
                position: function() {
                    if (!this.length)
                        return;
                    var e = this[0]
                      , t = this.offsetParent()
                      , r = this.offset()
                      , i = v.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                    r.top -= parseFloat(n(e).css("margin-top")) || 0;
                    r.left -= parseFloat(n(e).css("margin-left")) || 0;
                    i.top += parseFloat(n(t[0]).css("border-top-width")) || 0;
                    i.left += parseFloat(n(t[0]).css("border-left-width")) || 0;
                    return {
                        top: r.top - i.top,
                        left: r.left - i.left
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || a.body;
                        while (e && !v.test(e.nodeName) && n(e).css("position") == "static")
                            e = e.offsetParent;
                        return e
                    })
                }
            };
            n.fn.detach = n.fn.remove;
            ["width", "height"].forEach(function(t) {
                var r = t.replace(/./, function(e) {
                    return e[0].toUpperCase()
                });
                n.fn[t] = function(i) {
                    var s, o = this[0];
                    if (i === e)
                        return P(o) ? o["inner" + r] : H(o) ? o.documentElement["scroll" + r] : (s = this.offset()) && s[t];
                    else
                        return this.each(function(e) {
                            o = n(this);
                            o.css(t, K(this, i, e, o[t]()))
                        })
                }
            });
            n.fn.outerHeight = function() {
                var e = this[0]
                  , t = window.getComputedStyle(e);
                return e.offsetHeight + parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
            }
            ;
            y.forEach(function(e, t) {
                var r = t % 2;
                n.fn[e] = function() {
                    var e, i = n.map(arguments, function(t) {
                        e = _(t);
                        return e == "object" || e == "array" || t == null  ? t : C.fragment(t)
                    }), s, o = this.length > 1;
                    if (i.length < 1)
                        return this;
                    return this.each(function(e, u) {
                        s = r ? u : u.parentNode;
                        u = t == 0 ? u.nextSibling : t == 1 ? u.firstChild : t == 2 ? u : null ;
                        var f = n.contains(a.documentElement, s);
                        i.forEach(function(e) {
                            if (o)
                                e = e.cloneNode(true);
                            else if (!s)
                                return n(e).remove();
                            s.insertBefore(e, u);
                            if (f)
                                Z(e, function(e) {
                                    if (e.nodeName != null  && e.nodeName.toUpperCase() === "SCRIPT" && (!e.type || e.type === "text/javascript") && !e.src)
                                        window["eval"].call(window, e.innerHTML)
                                })
                        })
                    })
                }
                ;
                n.fn[r ? e + "To" : "insert" + (t ? "Before" : "After")] = function(t) {
                    n(t)[e](this);
                    return this
                }
            });
            C.Z.prototype = V.prototype = n.fn;
            C.uniq = L;
            C.deserializeValue = Y;
            n.zepto = C;
            return n
        }();
        window.Zepto = Zepto;
        window.$ === undefined && (window.$ = Zepto);
        (function(e) {
            function c(e) {
                return e._zid || (e._zid = t++)
            }
            function h(e, t, n, r) {
                t = p(t);
                if (t.ns)
                    var i = d(t.ns);
                return (o[c(e)] || []).filter(function(e) {
                    return e && (!t.e || e.e == t.e) && (!t.ns || i.test(e.ns)) && (!n || c(e.fn) === c(n)) && (!r || e.sel == r)
                })
            }
            function p(e) {
                var t = ("" + e).split(".");
                return {
                    e: t[0],
                    ns: t.slice(1).sort().join(" ")
                }
            }
            function d(e) {
                return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
            }
            function v(e, t) {
                return e.del && !a && e.e in f || !!t
            }
            function m(e) {
                return l[e] || a && f[e] || e
            }
            function g(t, r, i, s, u, a, f) {
                var h = c(t)
                  , d = o[h] || (o[h] = []);
                r.split(/\s/).forEach(function(r) {
                    if (r == "ready")
                        return e(document).ready(i);
                    var o = p(r);
                    o.fn = i;
                    o.sel = u;
                    if (o.e in l)
                        i = function(t) {
                            var n = t.relatedTarget;
                            if (!n || n !== this && !e.contains(this, n))
                                return o.fn.apply(this, arguments)
                        }
                        ;
                    o.del = a;
                    var c = a || i;
                    o.proxy = function(e) {
                        e = x(e);
                        if (e.isImmediatePropagationStopped())
                            return;
                        e.data = s;
                        var r = c.apply(t, e._args == n ? [e] : [e].concat(e._args));
                        if (r === false)
                            e.preventDefault(),
                            e.stopPropagation(),
                            e.stopImmediatePropagation();
                        return r
                    }
                    ;
                    o.i = d.length;
                    d.push(o);
                    if ("addEventListener" in t)
                        t.addEventListener(m(o.e), o.proxy, v(o, f))
                })
            }
            function y(e, t, n, r, i) {
                var s = c(e);
                (t || "").split(/\s/).forEach(function(t) {
                    h(e, t, n, r).forEach(function(t) {
                        delete o[s][t.i];
                        if ("removeEventListener" in e)
                            e.removeEventListener(m(t.e), t.proxy, v(t, i))
                    })
                })
            }
            function x(t, r) {
                if (r || !t.isDefaultPrevented) {
                    r || (r = t);
                    e.each(S, function(e, n) {
                        var i = r[e];
                        t[e] = function() {
                            this[n] = b;
                            return i && i.apply(r, arguments)
                        }
                        ;
                        t[n] = w
                    });
                    if (r.defaultPrevented !== n ? r.defaultPrevented : "returnValue" in r ? r.returnValue === false : r.getPreventDefault && r.getPreventDefault())
                        t.isDefaultPrevented = b
                }
                return t
            }
            function T(e) {
                var t, r = {
                    originalEvent: e
                };
                for (t in e)
                    if (!E.test(t) && e[t] !== n)
                        r[t] = e[t];
                return x(r, e)
            }
            var t = 1, n, r = Array.prototype.slice, i = e.isFunction, s = function(e) {
                return typeof e == "string"
            }
            , o = {}, u = {}, a = "onfocusin" in window, f = {
                focus: "focusin",
                blur: "focusout"
            }, l = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
            u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents";
            e.event = {
                add: g,
                remove: y
            };
            e.proxy = function(t, n) {
                var o = 2 in arguments && r.call(arguments, 2);
                if (i(t)) {
                    var u = function() {
                        return t.apply(n, o ? o.concat(r.call(arguments)) : arguments)
                    }
                    ;
                    u._zid = c(t);
                    return u
                } else if (s(n)) {
                    if (o) {
                        o.unshift(t[n], t);
                        return e.proxy.apply(null , o)
                    } else {
                        return e.proxy(t[n], t)
                    }
                } else {
                    throw new TypeError("expected function")
                }
            }
            ;
            e.fn.bind = function(e, t, n) {
                return this.on(e, t, n)
            }
            ;
            e.fn.unbind = function(e, t) {
                return this.off(e, t)
            }
            ;
            e.fn.one = function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            }
            ;
            var b = function() {
                return true
            }
              , w = function() {
                return false
            }
              , E = /^([A-Z]|returnValue$|layer[XY]$)/
              , S = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            e.fn.delegate = function(e, t, n) {
                return this.on(t, e, n)
            }
            ;
            e.fn.undelegate = function(e, t, n) {
                return this.off(t, e, n)
            }
            ;
            e.fn.live = function(t, n) {
                e(document.body).delegate(this.selector, t, n);
                return this
            }
            ;
            e.fn.die = function(t, n) {
                e(document.body).undelegate(this.selector, t, n);
                return this
            }
            ;
            e.fn.on = function(t, o, u, a, f) {
                var l, c, h = this;
                if (t && !s(t)) {
                    e.each(t, function(e, t) {
                        h.on(e, o, u, t, f)
                    });
                    return h
                }
                if (!s(o) && !i(a) && a !== false)
                    a = u,
                    u = o,
                    o = n;
                if (a === n || u === false)
                    a = u,
                    u = n;
                if (a === false)
                    a = w;
                return h.each(function(n, i) {
                    if (f)
                        l = function(e) {
                            y(i, e.type, a);
                            return a.apply(this, arguments)
                        }
                        ;
                    if (o)
                        c = function(t) {
                            var n, s = e(t.target).closest(o, i).get(0);
                            if (s && s !== i) {
                                n = e.extend(T(t), {
                                    currentTarget: s,
                                    liveFired: i
                                });
                                return (l || a).apply(s, [n].concat(r.call(arguments, 1)))
                            }
                        }
                        ;
                    g(i, t, a, u, o, c || l)
                })
            }
            ;
            e.fn.off = function(t, r, o) {
                var u = this;
                if (t && !s(t)) {
                    e.each(t, function(e, t) {
                        u.off(e, r, t)
                    });
                    return u
                }
                if (!s(r) && !i(o) && o !== false)
                    o = r,
                    r = n;
                if (o === false)
                    o = w;
                return u.each(function() {
                    y(this, t, o, r)
                })
            }
            ;
            e.fn.trigger = function(t, n) {
                t = s(t) || e.isPlainObject(t) ? e.Event(t) : x(t);
                t._args = n;
                return this.each(function() {
                    if (t.type in f && typeof this[t.type] == "function")
                        this[t.type]();
                    else if ("dispatchEvent" in this)
                        this.dispatchEvent(t);
                    else
                        e(this).triggerHandler(t, n)
                })
            }
            ;
            e.fn.triggerHandler = function(t, n) {
                var r, i;
                this.each(function(o, u) {
                    r = T(s(t) ? e.Event(t) : t);
                    r._args = n;
                    r.target = u;
                    e.each(h(u, t.type || t), function(e, t) {
                        i = t.proxy(r);
                        if (r.isImmediatePropagationStopped())
                            return false
                    })
                });
                return i
            }
            ;
            ("focusin focusout focus blur load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select keydown keypress keyup error").split(" ").forEach(function(t) {
                e.fn[t] = function(e) {
                    return 0 in arguments ? this.bind(t, e) : this.trigger(t)
                }
            });
            e.Event = function(e, t) {
                if (!s(e))
                    t = e,
                    e = t.type;
                var n = document.createEvent(u[e] || "Events")
                  , r = true;
                if (t)
                    for (var i in t)
                        i == "bubbles" ? r = !!t[i] : n[i] = t[i];
                n.initEvent(e, r, true);
                return x(n)
            }
        })(Zepto);
        (function($) {
            function triggerAndReturn(e, t, n) {
                var r = $.Event(t);
                $(e).trigger(r, n);
                return !r.isDefaultPrevented()
            }
            function triggerGlobal(e, t, n, r) {
                if (e.global)
                    return triggerAndReturn(t || document, n, r)
            }
            function ajaxStart(e) {
                if (e.global && $.active++ === 0)
                    triggerGlobal(e, null , "ajaxStart")
            }
            function ajaxStop(e) {
                if (e.global && !--$.active)
                    triggerGlobal(e, null , "ajaxStop")
            }
            function ajaxBeforeSend(e, t) {
                var n = t.context;
                if (t.beforeSend.call(n, e, t) === false || triggerGlobal(t, n, "ajaxBeforeSend", [e, t]) === false)
                    return false;
                triggerGlobal(t, n, "ajaxSend", [e, t])
            }
            function ajaxSuccess(e, t, n, r) {
                var i = n.context
                  , s = "success";
                n.success.call(i, e, s, t);
                if (r)
                    r.resolveWith(i, [e, s, t]);
                triggerGlobal(n, i, "ajaxSuccess", [t, n, e]);
                ajaxComplete(s, t, n)
            }
            function ajaxError(e, t, n, r, i) {
                var s = r.context;
                r.error.call(s, n, t, e);
                if (i)
                    i.rejectWith(s, [n, t, e]);
                triggerGlobal(r, s, "ajaxError", [n, r, e || t]);
                ajaxComplete(t, n, r)
            }
            function ajaxComplete(e, t, n) {
                var r = n.context;
                n.complete.call(r, t, e);
                triggerGlobal(n, r, "ajaxComplete", [t, n]);
                ajaxStop(n)
            }
            function empty() {}
            function mimeToDataType(e) {
                if (e)
                    e = e.split(";", 2)[0];
                return e && (e == htmlType ? "html" : e == jsonType ? "json" : scriptTypeRE.test(e) ? "script" : xmlTypeRE.test(e) && "xml") || "text"
            }
            function appendQuery(e, t) {
                if (t == "")
                    return e;
                return (e + "&" + t).replace(/[&?]{1,2}/, "?")
            }
            function serializeData(e) {
                if (e.processData && e.data && $.type(e.data) != "string")
                    e.data = $.param(e.data, e.traditional);
                if (e.data && (!e.type || e.type.toUpperCase() == "GET"))
                    e.url = appendQuery(e.url, e.data),
                    e.data = undefined
            }
            function parseArguments(e, t, n, r) {
                if ($.isFunction(t))
                    r = n,
                    n = t,
                    t = undefined;
                if (!$.isFunction(n))
                    r = n,
                    n = undefined;
                return {
                    url: e,
                    data: t,
                    success: n,
                    dataType: r
                }
            }
            function serialize(e, t, n, r) {
                var i, s = $.isArray(t), o = $.isPlainObject(t);
                $.each(t, function(t, u) {
                    i = $.type(u);
                    if (r)
                        t = n ? r : r + "[" + (o || i == "object" || i == "array" ? t : "") + "]";
                    if (!r && s)
                        e.add(u.name, u.value);
                    else if (i == "array" || !n && i == "object")
                        serialize(e, u, n, t);
                    else
                        e.add(t, u)
                })
            }
            var jsonpID = 0, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/, originAnchor = document.createElement("a");
            originAnchor.href = window.location.href;
            $.active = 0;
            $.ajaxJSONP = function(e, t) {
                if (!("type" in e))
                    return $.ajax(e);
                var n = e.jsonpCallback, r = ($.isFunction(n) ? n() : n) || "jsonp" + ++jsonpID, i = document.createElement("script"), s = window[r], o, u = function(e) {
                    $(i).triggerHandler("error", e || "abort")
                }
                , a = {
                    abort: u
                }, f;
                if (t)
                    t.promise(a);
                $(i).on("load error", function(n, u) {
                    clearTimeout(f);
                    $(i).off().remove();
                    if (n.type == "error" || !o) {
                        ajaxError(null , u || "error", a, e, t)
                    } else {
                        ajaxSuccess(o[0], a, e, t)
                    }
                    window[r] = s;
                    if (o && $.isFunction(s))
                        s(o[0]);
                    s = o = undefined
                });
                if (ajaxBeforeSend(a, e) === false) {
                    u("abort");
                    return a
                }
                window[r] = function() {
                    o = arguments
                }
                ;
                i.src = e.url.replace(/\?(.+)=\?/, "?$1=" + r);
                document.head.appendChild(i);
                if (e.timeout > 0)
                    f = setTimeout(function() {
                        u("timeout")
                    }, e.timeout);
                return a
            }
            ;
            $.ajaxSettings = {
                type: "GET",
                beforeSend: empty,
                success: empty,
                error: empty,
                complete: empty,
                context: null ,
                global: true,
                xhr: function() {
                    return new window.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: jsonType,
                    xml: "application/xml, text/xml",
                    html: htmlType,
                    text: "text/plain"
                },
                crossDomain: false,
                timeout: 0,
                processData: true,
                cache: true
            };
            $.ajax = function(options) {
                var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred(), urlAnchor, hashIndex;
                for (key in $.ajaxSettings)
                    if (settings[key] === undefined)
                        settings[key] = $.ajaxSettings[key];
                ajaxStart(settings);
                if (!settings.crossDomain) {
                    urlAnchor = document.createElement("a");
                    urlAnchor.href = settings.url;
                    urlAnchor.href = urlAnchor.href;
                    settings.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
                }
                if (!settings.url)
                    settings.url = window.location.toString();
                if ((hashIndex = settings.url.indexOf("#")) > -1)
                    settings.url = settings.url.slice(0, hashIndex);
                serializeData(settings);
                var dataType = settings.dataType
                  , hasPlaceholder = /\?.+=\?/.test(settings.url);
                if (hasPlaceholder)
                    dataType = "jsonp";
                if (settings.cache === false || (!options || options.cache !== true) && ("script" == dataType || "jsonp" == dataType))
                    settings.url = appendQuery(settings.url, "_=" + Date.now());
                if ("jsonp" == dataType) {
                    if (!hasPlaceholder)
                        settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?");
                    return $.ajaxJSONP(settings, deferred)
                }
                var mime = settings.accepts[dataType], headers = {}, setHeader = function(e, t) {
                    headers[e.toLowerCase()] = [e, t]
                }
                , protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader, abortTimeout;
                if (deferred)
                    deferred.promise(xhr);
                if (!settings.crossDomain)
                    setHeader("X-Requested-With", "XMLHttpRequest");
                setHeader("Accept", mime || "*/*");
                if (mime = settings.mimeType || mime) {
                    if (mime.indexOf(",") > -1)
                        mime = mime.split(",", 2)[0];
                    xhr.overrideMimeType && xhr.overrideMimeType(mime)
                }
                if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET")
                    setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
                if (settings.headers)
                    for (name in settings.headers)
                        setHeader(name, settings.headers[name]);
                xhr.setRequestHeader = setHeader;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        clearTimeout(abortTimeout);
                        var result, error = false;
                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type"));
                            result = xhr.responseText;
                            try {
                                if (dataType == "script")
                                    (1,
                                    eval)(result);
                                else if (dataType == "xml")
                                    result = xhr.responseXML;
                                else if (dataType == "json")
                                    result = blankRE.test(result) ? null  : $.parseJSON(result)
                            } catch (e) {
                                error = e
                            }
                            if (error)
                                ajaxError(error, "parsererror", xhr, settings, deferred);
                            else
                                ajaxSuccess(result, xhr, settings, deferred)
                        } else {
                            ajaxError(xhr.statusText || null , xhr.status ? "error" : "abort", xhr, settings, deferred)
                        }
                    }
                }
                ;
                if (ajaxBeforeSend(xhr, settings) === false) {
                    xhr.abort();
                    ajaxError(null , "abort", xhr, settings, deferred);
                    return xhr
                }
                if (settings.xhrFields)
                    for (name in settings.xhrFields)
                        xhr[name] = settings.xhrFields[name];
                var async = "async" in settings ? settings.async : true;
                xhr.open(settings.type, settings.url, async, settings.username, settings.password);
                for (name in headers)
                    nativeSetHeader.apply(xhr, headers[name]);
                if (settings.timeout > 0)
                    abortTimeout = setTimeout(function() {
                        xhr.onreadystatechange = empty;
                        xhr.abort();
                        ajaxError(null , "timeout", xhr, settings, deferred)
                    }, settings.timeout);
//              xhr.send(settings.data ? settings.data : null );
                return xhr
            }
            ;
            $.get = function() {
                return $.ajax(parseArguments.apply(null , arguments))
            }
            ;
            $.post = function() {
                var e = parseArguments.apply(null , arguments);
                e.type = "POST";
//              return $.ajax(e)
            }
            ;
            $.getJSON = function() {
                var e = parseArguments.apply(null , arguments);
                e.dataType = "json";
                return $.ajax(e)
            }
            ;
            $.fn.load = function(e, t, n) {
                if (!this.length)
                    return this;
                var r = this, i = e.split(/\s/), s, o = parseArguments(e, t, n), u = o.success;
                if (i.length > 1)
                    o.url = i[0],
                    s = i[1];
                o.success = function(e) {
                    r.html(s ? $("<div>").html(e.replace(rscript, "")).find(s) : e);
                    u && u.apply(r, arguments)
                }
                ;
                $.ajax(o);
                return this
            }
            ;
            var escape = encodeURIComponent;
            $.param = function(e, t) {
                var n = [];
                n.add = function(e, t) {
                    if ($.isFunction(t))
                        t = t();
                    if (t == null )
                        t = "";
                    this.push(escape(e) + "=" + escape(t))
                }
                ;
                serialize(n, e, t);
                return n.join("&").replace(/%20/g, "+")
            }
        })(Zepto);
        (function(e) {
            e.fn.serializeArray = function() {
                var t, n, r = [], i = function(e) {
                    if (e.forEach)
                        return e.forEach(i);
                    r.push({
                        name: t,
                        value: e
                    })
                }
                ;
                if (this[0])
                    e.each(this[0].elements, function(r, s) {
                        n = s.type,
                        t = s.name;
                        if (t && s.nodeName.toLowerCase() != "fieldset" && !s.disabled && n != "submit" && n != "reset" && n != "button" && n != "file" && (n != "radio" && n != "checkbox" || s.checked))
                            i(e(s).val())
                    });
                return r
            }
            ;
            e.fn.serialize = function() {
                var e = [];
                this.serializeArray().forEach(function(t) {
                    e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
                });
                return e.join("&")
            }
            ;
            e.fn.submit = function(t) {
                if (0 in arguments)
                    this.bind("submit", t);
                else if (this.length) {
                    var n = e.Event("submit");
                    this.eq(0).trigger(n);
                    if (!n.isDefaultPrevented())
                        this.get(0).submit()
                }
                return this
            }
        })(Zepto);
        (function() {
            try {
                getComputedStyle(undefined)
            } catch (e) {
                var t = getComputedStyle;
                window.getComputedStyle = function(e) {
                    try {
                        return t(e)
                    } catch (n) {
                        return null 
                    }
                }
            }
        })();
        (function(e) {
            function t(e, t) {
                var n = this.os = {}
                  , r = this.browser = {}
                  , i = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/)
                  , s = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                  , o = !!e.match(/\(Macintosh\; Intel /)
                  , u = e.match(/(iPad).*OS\s([\d_]+)/)
                  , a = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                  , f = !u && e.match(/(iPhone\sOS)\s([\d_]+)/)
                  , l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)
                  , c = /Win\d{2}|Windows/.test(t)
                  , h = e.match(/Windows Phone ([\d.]+)/)
                  , p = l && e.match(/TouchPad/)
                  , d = e.match(/Kindle\/([\d.]+)/)
                  , v = e.match(/Silk\/([\d._]+)/)
                  , m = e.match(/(BlackBerry).*Version\/([\d.]+)/)
                  , g = e.match(/(BB10).*Version\/([\d.]+)/)
                  , y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/)
                  , b = e.match(/PlayBook/)
                  , w = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/)
                  , E = e.match(/Firefox\/([\d.]+)/)
                  , S = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/)
                  , x = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/)
                  , T = !w && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/)
                  , N = T || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
                if (r.webkit = !!i)
                    r.version = i[1];
                if (s)
                    n.android = true,
                    n.version = s[2];
                if (f && !a)
                    n.ios = n.iphone = true,
                    n.version = f[2].replace(/_/g, ".");
                if (u)
                    n.ios = n.ipad = true,
                    n.version = u[2].replace(/_/g, ".");
                if (a)
                    n.ios = n.ipod = true,
                    n.version = a[3] ? a[3].replace(/_/g, ".") : null ;
                if (h)
                    n.wp = true,
                    n.version = h[1];
                if (l)
                    n.webos = true,
                    n.version = l[2];
                if (p)
                    n.touchpad = true;
                if (m)
                    n.blackberry = true,
                    n.version = m[2];
                if (g)
                    n.bb10 = true,
                    n.version = g[2];
                if (y)
                    n.rimtabletos = true,
                    n.version = y[2];
                if (b)
                    r.playbook = true;
                if (d)
                    n.kindle = true,
                    n.version = d[1];
                if (v)
                    r.silk = true,
                    r.version = v[1];
                if (!v && n.android && e.match(/Kindle Fire/))
                    r.silk = true;
                if (w)
                    r.chrome = true,
                    r.version = w[1];
                if (E)
                    r.firefox = true,
                    r.version = E[1];
                if (S)
                    n.firefoxos = true,
                    n.version = S[1];
                if (x)
                    r.ie = true,
                    r.version = x[1];
                if (N && (o || n.ios || c)) {
                    r.safari = true;
                    if (!n.ios)
                        r.version = N[1]
                }
                if (T)
                    r.webview = true;
                n.tablet = !!(u || b || s && !e.match(/Mobile/) || E && e.match(/Tablet/) || x && !e.match(/Phone/) && e.match(/Touch/));
                n.phone = !!(!n.tablet && !n.ipod && (s || f || l || m || g || w && e.match(/Android/) || w && e.match(/CriOS\/([\d.]+)/) || E && e.match(/Mobile/) || x && e.match(/Touch/)))
            }
            t.call(e, navigator.userAgent, navigator.platform);
            e.__detect = t
        })(Zepto);
        (function(e, t) {
            function g(e) {
                return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
            }
            function y(e) {
                return r ? r + e : e.toLowerCase()
            }
            var n = "", r, i = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            }, s = document.createElement("div"), o = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, u, a, f, l, c, h, p, d, v, m = {};
            e.each(i, function(e, i) {
                if (s.style[e + "TransitionProperty"] !== t) {
                    n = "-" + e.toLowerCase() + "-";
                    r = i;
                    return false
                }
            });
            u = n + "transform";
            m[a = n + "transition-property"] = m[f = n + "transition-duration"] = m[c = n + "transition-delay"] = m[l = n + "transition-timing-function"] = m[h = n + "animation-name"] = m[p = n + "animation-duration"] = m[v = n + "animation-delay"] = m[d = n + "animation-timing-function"] = "";
            e.fx = {
                off: r === t && s.style.transitionProperty === t,
                speeds: {
                    _default: 400,
                    fast: 200,
                    slow: 600
                },
                cssPrefix: n,
                transitionEnd: y("TransitionEnd"),
                animationEnd: y("AnimationEnd")
            };
            e.fn.animate = function(n, r, i, s, o) {
                if (e.isFunction(r))
                    s = r,
                    i = t,
                    r = t;
                if (e.isFunction(i))
                    s = i,
                    i = t;
                if (e.isPlainObject(r))
                    i = r.easing,
                    s = r.complete,
                    o = r.delay,
                    r = r.duration;
                if (r)
                    r = (typeof r == "number" ? r : e.fx.speeds[r] || e.fx.speeds._default) / 1e3;
                if (o)
                    o = parseFloat(o) / 1e3;
                return this.anim(n, r, i, s, o)
            }
            ;
            e.fn.anim = function(n, r, i, s, y) {
                var b, w = {}, E, S = "", x = this, T, N = e.fx.transitionEnd, C = false;
                if (r === t)
                    r = e.fx.speeds._default / 1e3;
                if (y === t)
                    y = 0;
                if (e.fx.off)
                    r = 0;
                if (typeof n == "string") {
                    w[h] = n;
                    w[p] = r + "s";
                    w[v] = y + "s";
                    w[d] = i || "linear";
                    N = e.fx.animationEnd
                } else {
                    E = [];
                    for (b in n)
                        if (o.test(b))
                            S += b + "(" + n[b] + ") ";
                        else
                            w[b] = n[b],
                            E.push(g(b));
                    if (S)
                        w[u] = S,
                        E.push(u);
                    if (r > 0 && typeof n === "object") {
                        w[a] = E.join(", ");
                        w[f] = r + "s";
                        w[c] = y + "s";
                        w[l] = i || "linear"
                    }
                }
                T = function(t) {
                    if (typeof t !== "undefined") {
                        if (t.target !== t.currentTarget)
                            return;
                        e(t.target).unbind(N, T)
                    } else
                        e(this).unbind(N, T);
                    C = true;
                    e(this).css(m);
                    s && s.call(this)
                }
                ;
                if (r > 0) {
                    this.bind(N, T);
                    setTimeout(function() {
                        if (C)
                            return;
                        T.call(x)
                    }, (r + y) * 1e3 + 400)
                }
                this.size() && this.get(0).clientLeft;
                this.css(w);
                if (r <= 0)
                    setTimeout(function() {
                        x.each(function() {
                            T.call(this)
                        })
                    }, 0);
                return this
            }
            ;
            s = null 
        })(Zepto);
        (function(e, t) {
            function u(n, r, i, s, o) {
                if (typeof r == "function" && !o)
                    o = r,
                    r = t;
                var u = {
                    opacity: i
                };
                if (s) {
                    u.scale = s;
                    n.css(e.fx.cssPrefix + "transform-origin", "0 0")
                }
                return n.animate(u, r, null , o)
            }
            function a(t, n, r, i) {
                return u(t, n, 0, r, function() {
                    s.call(e(this));
                    i && i.call(this)
                })
            }
            var n = window.document
              , r = n.documentElement
              , i = e.fn.show
              , s = e.fn.hide
              , o = e.fn.toggle;
            e.fn.show = function(e, n) {
                i.call(this);
                if (e === t)
                    e = 0;
                else
                    this.css("opacity", 0);
                return u(this, e, 1, "1,1", n)
            }
            ;
            e.fn.hide = function(e, n) {
                if (e === t)
                    return s.call(this);
                else
                    return a(this, e, "0,0", n)
            }
            ;
            e.fn.toggle = function(n, r) {
                if (n === t || typeof n == "boolean")
                    return o.call(this, n);
                else
                    return this.each(function() {
                        var t = e(this);
                        t[t.css("display") == "none" ? "show" : "hide"](n, r)
                    })
            }
            ;
            e.fn.fadeTo = function(e, t, n) {
                return u(this, e, t, null , n)
            }
            ;
            e.fn.fadeIn = function(e, t) {
                var n = this.css("opacity");
                if (n > 0)
                    this.css("opacity", 0);
                else
                    n = 1;
                return i.call(this).fadeTo(e, n, t)
            }
            ;
            e.fn.fadeOut = function(e, t) {
                return a(this, e, null , t)
            }
            ;
            e.fn.fadeToggle = function(t, n) {
                return this.each(function() {
                    var r = e(this);
                    r[r.css("opacity") == 0 || r.css("display") == "none" ? "fadeIn" : "fadeOut"](t, n)
                })
            }
        })(Zepto);
        (function(e) {
            function o(s, o) {
                var a = s[i]
                  , f = a && t[a];
                if (o === undefined)
                    return f || u(s);
                else {
                    if (f) {
                        if (o in f)
                            return f[o];
                        var l = r(o);
                        if (l in f)
                            return f[l]
                    }
                    return n.call(e(s), o)
                }
            }
            function u(n, s, o) {
                var u = n[i] || (n[i] = ++e.uuid)
                  , f = t[u] || (t[u] = a(n));
                if (s !== undefined)
                    f[r(s)] = o;
                return f
            }
            function a(t) {
                var n = {};
                e.each(t.attributes || s, function(t, i) {
                    if (i.name.indexOf("data-") == 0)
                        n[r(i.name.replace("data-", ""))] = e.zepto.deserializeValue(i.value)
                });
                return n
            }
            var t = {}
              , n = e.fn.data
              , r = e.camelCase
              , i = e.expando = "Zepto" + +(new Date)
              , s = [];
            e.fn.data = function(t, n) {
                return n === undefined ? e.isPlainObject(t) ? this.each(function(n, r) {
                    e.each(t, function(e, t) {
                        u(r, e, t)
                    })
                }) : 0 in this ? o(this[0], t) : undefined : this.each(function() {
                    u(this, t, n)
                })
            }
            ;
            e.fn.removeData = function(n) {
                if (typeof n == "string")
                    n = n.split(/\s+/);
                return this.each(function() {
                    var s = this[i]
                      , o = s && t[s];
                    if (o)
                        e.each(n || o, function(e) {
                            delete o[n ? r(this) : e]
                        })
                })
            }
            ;
            ["remove", "empty"].forEach(function(t) {
                var n = e.fn[t];
                e.fn[t] = function() {
                    var e = this.find("*");
                    if (t === "remove")
                        e = e.add(this);
                    e.removeData();
                    return n.call(this)
                }
            })
        })(Zepto);
        (function(e) {
            function n(t) {
                var r = [["resolve", "done", e.Callbacks({
                    once: 1,
                    memory: 1
                }), "resolved"], ["reject", "fail", e.Callbacks({
                    once: 1,
                    memory: 1
                }), "rejected"], ["notify", "progress", e.Callbacks({
                    memory: 1
                })]]
                  , i = "pending"
                  , s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        o.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var t = arguments;
                        return n(function(n) {
                            e.each(r, function(r, i) {
                                var u = e.isFunction(t[r]) && t[r];
                                o[i[1]](function() {
                                    var t = u && u.apply(this, arguments);
                                    if (t && e.isFunction(t.promise)) {
                                        t.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                                    } else {
                                        var r = this === s ? n.promise() : this
                                          , o = u ? [t] : arguments;
                                        n[i[0] + "With"](r, o)
                                    }
                                })
                            });
                            t = null 
                        }).promise()
                    },
                    promise: function(t) {
                        return t != null  ? e.extend(t, s) : s
                    }
                }
                  , o = {};
                e.each(r, function(e, t) {
                    var n = t[2]
                      , u = t[3];
                    s[t[1]] = n.add;
                    if (u) {
                        n.add(function() {
                            i = u
                        }, r[e ^ 1][2].disable, r[2][2].lock)
                    }
                    o[t[0]] = function() {
                        o[t[0] + "With"](this === o ? s : this, arguments);
                        return this
                    }
                    ;
                    o[t[0] + "With"] = n.fireWith
                });
                s.promise(o);
                if (t)
                    t.call(o, o);
                return o
            }
            var t = Array.prototype.slice;
            e.when = function(r) {
                var i = t.call(arguments), s = i.length, o = 0, u = s !== 1 || r && e.isFunction(r.promise) ? s : 0, a = u === 1 ? r : n(), f, l, c, h = function(e, n, r) {
                    return function(i) {
                        n[e] = this;
                        r[e] = arguments.length > 1 ? t.call(arguments) : i;
                        if (r === f) {
                            a.notifyWith(n, r)
                        } else if (!--u) {
                            a.resolveWith(n, r)
                        }
                    }
                }
                ;
                if (s > 1) {
                    f = new Array(s);
                    l = new Array(s);
                    c = new Array(s);
                    for (; o < s; ++o) {
                        if (i[o] && e.isFunction(i[o].promise)) {
                            i[o].promise().done(h(o, c, i)).fail(a.reject).progress(h(o, l, f))
                        } else {
                            --u
                        }
                    }
                }
                if (!u)
                    a.resolveWith(c, i);
                return a.promise()
            }
            ;
            e.Deferred = n
        })(Zepto);
        (function(e) {
            e.Callbacks = function(t) {
                t = e.extend({}, t);
                var n, r, i, s, o, u, a = [], f = !t.once && [], l = function(e) {
                    n = t.memory && e;
                    r = true;
                    u = s || 0;
                    s = 0;
                    o = a.length;
                    i = true;
                    for (; a && u < o; ++u) {
                        if (a[u].apply(e[0], e[1]) === false && t.stopOnFalse) {
                            n = false;
                            break
                        }
                    }
                    i = false;
                    if (a) {
                        if (f)
                            f.length && l(f.shift());
                        else if (n)
                            a.length = 0;
                        else
                            c.disable()
                    }
                }
                , c = {
                    add: function() {
                        if (a) {
                            var r = a.length
                              , u = function(n) {
                                e.each(n, function(e, n) {
                                    if (typeof n === "function") {
                                        if (!t.unique || !c.has(n))
                                            a.push(n)
                                    } else if (n && n.length && typeof n !== "string")
                                        u(n)
                                })
                            }
                            ;
                            u(arguments);
                            if (i)
                                o = a.length;
                            else if (n) {
                                s = r;
                                l(n)
                            }
                        }
                        return this
                    },
                    remove: function() {
                        if (a) {
                            e.each(arguments, function(t, n) {
                                var r;
                                while ((r = e.inArray(n, a, r)) > -1) {
                                    a.splice(r, 1);
                                    if (i) {
                                        if (r <= o)
                                            --o;
                                        if (r <= u)
                                            --u
                                    }
                                }
                            })
                        }
                        return this
                    },
                    has: function(t) {
                        return !!(a && (t ? e.inArray(t, a) > -1 : a.length))
                    },
                    empty: function() {
                        o = a.length = 0;
                        return this
                    },
                    disable: function() {
                        a = f = n = undefined;
                        return this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        f = undefined;
                        if (!n)
                            c.disable();
                        return this
                    },
                    locked: function() {
                        return !f
                    },
                    fireWith: function(e, t) {
                        if (a && (!r || f)) {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            if (i)
                                f.push(t);
                            else
                                l(t)
                        }
                        return this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments)
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return c
            }
        })(Zepto);
        (function(e) {
            function l(e, t, n, r) {
                return Math.abs(e - t) >= Math.abs(n - r) ? e - t > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
            }
            function c() {
                s = null ;
                if (t.last) {
                    t.el.trigger("longTap");
                    o = true;
                    u = e.extend(true, {}, t);
                    t = {}
                }
            }
            function h() {
                if (s)
                    clearTimeout(s);
                s = null 
            }
            function p() {
                if (n)
                    clearTimeout(n);
                if (r)
                    clearTimeout(r);
                if (i)
                    clearTimeout(i);
                if (s)
                    clearTimeout(s);
                n = r = i = s = null ;
                t = {}
            }
            function d(e) {
                return (e.pointerType == "touch" || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
            }
            function v(e, t) {
                return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
            }
            var t = {}, n, r, i, s, o, u = {}, a = 750, f;
            e(document).ready(function() {
                var m, g, y = 0, b = 0, w, E;
                if ("MSGesture" in window) {
                    f = new MSGesture;
                    f.target = document.body
                }
                e(document).bind("MSGestureEnd", function(e) {
                    var n = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null ;
                    if (n) {
                        t.el.trigger("swipe");
                        t.el.trigger("swipe" + n)
                    }
                }).on("touchstart MSPointerDown pointerdown", function(r) {
                    if ((E = v(r, "down")) && !d(r))
                        return;
                    w = E ? r : r.touches[0];
                    if (r.touches && r.touches.length === 1 && t.x2) {
                        t.x2 = undefined;
                        t.y2 = undefined
                    }
                    m = Date.now();
                    g = m - (t.last || m);
                    t.el = e("tagName" in w.target ? w.target : w.target.parentNode);
                    n && clearTimeout(n);
                    t.x1 = w.pageX;
                    t.y1 = w.pageY;
                    if (g > 0 && g <= 250)
                        t.isDoubleTap = true;
                    t.last = m;
                    s = setTimeout(c, a);
                    if (f && E)
                        f.addPointer(r.pointerId)
                }).on("touchmove MSPointerMove pointermove", function(e) {
                    if ((E = v(e, "move")) && !d(e))
                        return;
                    w = E ? e : e.touches[0];
                    h();
                    t.x2 = w.pageX;
                    t.y2 = w.pageY;
                    y += Math.abs(t.x1 - t.x2);
                    b += Math.abs(t.y1 - t.y2)
                }).on("touchend MSPointerUp pointerup", function(s) {
                    if ((E = v(s, "up")) && !d(s))
                        return;
                    h();
                    if (o) {
                        u.el.trigger("longTapEnd");
                        u = {};
                        o = false
                    }
                    if (t.x2 && Math.abs(t.x1 - t.x2) > 30 || t.y2 && Math.abs(t.y1 - t.y2) > 30)
                        i = setTimeout(function() {
                            t.el.trigger("swipe");
                            t.el.trigger("swipe" + l(t.x1, t.x2, t.y1, t.y2));
                            t = {}
                        }, 0);
                    else if ("last" in t)
                        if (y < 30 && b < 30) {
                            r = setTimeout(function() {
                                var r = e.Event("tap");
                                r.cancelTouch = p;
                                t.el.trigger(r);
                                if (t.isDoubleTap) {
                                    if (t.el)
                                        t.el.trigger("doubleTap");
                                    t = {}
                                } else {
                                    n = setTimeout(function() {
                                        n = null ;
                                        if (t.el)
                                            t.el.trigger("singleTap");
                                        t = {}
                                    }, 250)
                                }
                            }, 0)
                        } else {
                            t = {}
                        }
                    y = b = 0
                }).on("touchcancel MSPointerCancel pointercancel", p);
                e(window).on("scroll", p)
            });
            ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
                e.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })
        })(Zepto);
        (function(e) {
            if (e.os.ios) {
                var t = {}, n;
                function r(e) {
                    return "tagName" in e ? e : e.parentNode
                }
                e(document).bind("gesturestart", function(e) {
                    var i = Date.now()
                      , s = i - (t.last || i);
                    t.target = r(e.target);
                    n && clearTimeout(n);
                    t.e1 = e.scale;
                    t.last = i
                }).bind("gesturechange", function(e) {
                    t.e2 = e.scale
                }).bind("gestureend", function(n) {
                    if (t.e2 > 0) {
                        Math.abs(t.e1 - t.e2) != 0 && e(t.target).trigger("pinch") && e(t.target).trigger("pinch" + (t.e1 - t.e2 > 0 ? "In" : "Out"));
                        t.e1 = t.e2 = t.last = 0
                    } else if ("last" in t) {
                        t = {}
                    }
                });
                ["pinch", "pinchIn", "pinchOut"].forEach(function(t) {
                    e.fn[t] = function(e) {
                        return this.bind(t, e)
                    }
                })
            }
        })(Zepto)
    }(module.exports, module, __context);
    __context.____MODULES["f751fa756ab8aaf2e04d6d527de9093f"] = module.exports
})(this);
(function(e) {
    var t = {
        id: "07ba6417062d4d7c60c0a3e822e01f73",
        filename: "underscore.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        (function() {
            var r = typeof self === "object" && self.self === self && self || typeof n === "object" && n.global === n && n || this;
            var i = r._;
            var s = Array.prototype
              , o = Object.prototype;
            var u = s.push
              , a = s.slice
              , f = o.toString
              , l = o.hasOwnProperty;
            var c = Array.isArray
              , h = Object.keys
              , p = Object.create;
            var d = function() {}
            ;
            var v = function(e) {
                if (e instanceof v)
                    return e;
                if (!(this instanceof v))
                    return new v(e);
                this._wrapped = e
            }
            ;
            if (typeof e !== "undefined") {
                if (typeof t !== "undefined" && t.exports) {
                    e = t.exports = v
                }
                e._ = v
            } else {
                r._ = v
            }
            v.VERSION = "1.8.3";
            var m = function(e, t, n) {
                if (t === void 0)
                    return e;
                switch (n == null  ? 3 : n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    }
                    ;
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
                    ;
                case 4:
                    return function(n, r, i, s) {
                        return e.call(t, n, r, i, s)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
            ;
            var g = function(e, t, n) {
                if (e == null )
                    return v.identity;
                if (v.isFunction(e))
                    return m(e, t, n);
                if (v.isObject(e))
                    return v.matcher(e);
                return v.property(e)
            }
            ;
            v.iteratee = function(e, t) {
                return g(e, t, Infinity)
            }
            ;
            var y = function(e, t) {
                t = t == null  ? e.length - 1 : +t;
                return function() {
                    var n = Math.max(arguments.length - t, 0);
                    var r = Array(n);
                    for (var i = 0; i < n; i++) {
                        r[i] = arguments[i + t]
                    }
                    switch (t) {
                    case 0:
                        return e.call(this, r);
                    case 1:
                        return e.call(this, arguments[0], r);
                    case 2:
                        return e.call(this, arguments[0], arguments[1], r)
                    }
                    var s = Array(t + 1);
                    for (i = 0; i < t; i++) {
                        s[i] = arguments[i]
                    }
                    s[t] = r;
                    return e.apply(this, s)
                }
            }
            ;
            var b = function(e) {
                if (!v.isObject(e))
                    return {};
                if (p)
                    return p(e);
                d.prototype = e;
                var t = new d;
                d.prototype = null ;
                return t
            }
            ;
            var w = function(e) {
                return function(t) {
                    return t == null  ? void 0 : t[e]
                }
            }
            ;
            var E = Math.pow(2, 53) - 1;
            var S = w("length");
            var x = function(e) {
                var t = S(e);
                return typeof t == "number" && t >= 0 && t <= E
            }
            ;
            v.each = v.forEach = function(e, t, n) {
                t = m(t, n);
                var r, i;
                if (x(e)) {
                    for (r = 0,
                    i = e.length; r < i; r++) {
                        t(e[r], r, e)
                    }
                } else {
                    var s = v.keys(e);
                    for (r = 0,
                    i = s.length; r < i; r++) {
                        t(e[s[r]], s[r], e)
                    }
                }
                return e
            }
            ;
            v.map = v.collect = function(e, t, n) {
                t = g(t, n);
                var r = !x(e) && v.keys(e)
                  , i = (r || e).length
                  , s = Array(i);
                for (var o = 0; o < i; o++) {
                    var u = r ? r[o] : o;
                    s[o] = t(e[u], u, e)
                }
                return s
            }
            ;
            var T = function(e) {
                var t = function(t, n, r, i) {
                    var s = !x(t) && v.keys(t)
                      , o = (s || t).length
                      , u = e > 0 ? 0 : o - 1;
                    if (!i) {
                        r = t[s ? s[u] : u];
                        u += e
                    }
                    for (; u >= 0 && u < o; u += e) {
                        var a = s ? s[u] : u;
                        r = n(r, t[a], a, t)
                    }
                    return r
                }
                ;
                return function(e, n, r, i) {
                    var s = arguments.length >= 3;
                    return t(e, m(n, i, 4), r, s)
                }
            }
            ;
            v.reduce = v.foldl = v.inject = T(1);
            v.reduceRight = v.foldr = T(-1);
            v.find = v.detect = function(e, t, n) {
                var r;
                if (x(e)) {
                    r = v.findIndex(e, t, n)
                } else {
                    r = v.findKey(e, t, n)
                }
                if (r !== void 0 && r !== -1)
                    return e[r]
            }
            ;
            v.filter = v.select = function(e, t, n) {
                var r = [];
                t = g(t, n);
                v.each(e, function(e, n, i) {
                    if (t(e, n, i))
                        r.push(e)
                });
                return r
            }
            ;
            v.reject = function(e, t, n) {
                return v.filter(e, v.negate(g(t)), n)
            }
            ;
            v.every = v.all = function(e, t, n) {
                t = g(t, n);
                var r = !x(e) && v.keys(e)
                  , i = (r || e).length;
                for (var s = 0; s < i; s++) {
                    var o = r ? r[s] : s;
                    if (!t(e[o], o, e))
                        return false
                }
                return true
            }
            ;
            v.some = v.any = function(e, t, n) {
                t = g(t, n);
                var r = !x(e) && v.keys(e)
                  , i = (r || e).length;
                for (var s = 0; s < i; s++) {
                    var o = r ? r[s] : s;
                    if (t(e[o], o, e))
                        return true
                }
                return false
            }
            ;
            v.contains = v.includes = v.include = function(e, t, n, r) {
                if (!x(e))
                    e = v.values(e);
                if (typeof n != "number" || r)
                    n = 0;
                return v.indexOf(e, t, n) >= 0
            }
            ;
            v.invoke = y(function(e, t, n) {
                var r = v.isFunction(t);
                return v.map(e, function(e) {
                    var i = r ? t : e[t];
                    return i == null  ? i : i.apply(e, n)
                })
            });
            v.pluck = function(e, t) {
                return v.map(e, v.property(t))
            }
            ;
            v.where = function(e, t) {
                return v.filter(e, v.matcher(t))
            }
            ;
            v.findWhere = function(e, t) {
                return v.find(e, v.matcher(t))
            }
            ;
            v.max = function(e, t, n) {
                var r = -Infinity, i = -Infinity, s, o;
                if (t == null  || typeof t == "number" && typeof e[0] != "object" && e != null ) {
                    e = x(e) ? e : v.values(e);
                    for (var u = 0, a = e.length; u < a; u++) {
                        s = e[u];
                        if (s > r) {
                            r = s
                        }
                    }
                } else {
                    t = g(t, n);
                    v.each(e, function(e, n, s) {
                        o = t(e, n, s);
                        if (o > i || o === -Infinity && r === -Infinity) {
                            r = e;
                            i = o
                        }
                    })
                }
                return r
            }
            ;
            v.min = function(e, t, n) {
                var r = Infinity, i = Infinity, s, o;
                if (t == null  || typeof t == "number" && typeof e[0] != "object" && e != null ) {
                    e = x(e) ? e : v.values(e);
                    for (var u = 0, a = e.length; u < a; u++) {
                        s = e[u];
                        if (s < r) {
                            r = s
                        }
                    }
                } else {
                    t = g(t, n);
                    v.each(e, function(e, n, s) {
                        o = t(e, n, s);
                        if (o < i || o === Infinity && r === Infinity) {
                            r = e;
                            i = o
                        }
                    })
                }
                return r
            }
            ;
            v.shuffle = function(e) {
                return v.sample(e, Infinity)
            }
            ;
            v.sample = function(e, t, n) {
                if (t == null  || n) {
                    if (!x(e))
                        e = v.values(e);
                    return e[v.random(e.length - 1)]
                }
                var r = x(e) ? v.clone(e) : v.values(e);
                var i = S(r);
                t = Math.max(Math.min(t, i), 0);
                var s = i - 1;
                for (var o = 0; o < t; o++) {
                    var u = v.random(o, s);
                    var a = r[o];
                    r[o] = r[u];
                    r[u] = a
                }
                return r.slice(0, t)
            }
            ;
            v.sortBy = function(e, t, n) {
                t = g(t, n);
                return v.pluck(v.map(e, function(e, n, r) {
                    return {
                        value: e,
                        index: n,
                        criteria: t(e, n, r)
                    }
                }).sort(function(e, t) {
                    var n = e.criteria;
                    var r = t.criteria;
                    if (n !== r) {
                        if (n > r || n === void 0)
                            return 1;
                        if (n < r || r === void 0)
                            return -1
                    }
                    return e.index - t.index
                }), "value")
            }
            ;
            var N = function(e, t) {
                return function(n, r, i) {
                    var s = t ? [[], []] : {};
                    r = g(r, i);
                    v.each(n, function(t, i) {
                        var o = r(t, i, n);
                        e(s, t, o)
                    });
                    return s
                }
            }
            ;
            v.groupBy = N(function(e, t, n) {
                if (v.has(e, n))
                    e[n].push(t);
                else
                    e[n] = [t]
            });
            v.indexBy = N(function(e, t, n) {
                e[n] = t
            });
            v.countBy = N(function(e, t, n) {
                if (v.has(e, n))
                    e[n]++;
                else
                    e[n] = 1
            });
            v.toArray = function(e) {
                if (!e)
                    return [];
                if (v.isArray(e))
                    return a.call(e);
                if (x(e))
                    return v.map(e, v.identity);
                return v.values(e)
            }
            ;
            v.size = function(e) {
                if (e == null )
                    return 0;
                return x(e) ? e.length : v.keys(e).length
            }
            ;
            v.partition = N(function(e, t, n) {
                e[n ? 0 : 1].push(t)
            }, true);
            v.first = v.head = v.take = function(e, t, n) {
                if (e == null )
                    return void 0;
                if (t == null  || n)
                    return e[0];
                return v.initial(e, e.length - t)
            }
            ;
            v.initial = function(e, t, n) {
                return a.call(e, 0, Math.max(0, e.length - (t == null  || n ? 1 : t)))
            }
            ;
            v.last = function(e, t, n) {
                if (e == null )
                    return void 0;
                if (t == null  || n)
                    return e[e.length - 1];
                return v.rest(e, Math.max(0, e.length - t))
            }
            ;
            v.rest = v.tail = v.drop = function(e, t, n) {
                return a.call(e, t == null  || n ? 1 : t)
            }
            ;
            v.compact = function(e) {
                return v.filter(e, v.identity)
            }
            ;
            var C = function(e, t, n, r) {
                r = r || [];
                var i = r.length;
                for (var s = 0, o = S(e); s < o; s++) {
                    var u = e[s];
                    if (x(u) && (v.isArray(u) || v.isArguments(u))) {
                        if (t) {
                            var a = 0
                              , f = u.length;
                            while (a < f)
                                r[i++] = u[a++]
                        } else {
                            C(u, t, n, r);
                            i = r.length
                        }
                    } else if (!n) {
                        r[i++] = u
                    }
                }
                return r
            }
            ;
            v.flatten = function(e, t) {
                return C(e, t, false)
            }
            ;
            v.without = y(function(e, t) {
                return v.difference(e, t)
            });
            v.uniq = v.unique = function(e, t, n, r) {
                if (!v.isBoolean(t)) {
                    r = n;
                    n = t;
                    t = false
                }
                if (n != null )
                    n = g(n, r);
                var i = [];
                var s = [];
                for (var o = 0, u = S(e); o < u; o++) {
                    var a = e[o]
                      , f = n ? n(a, o, e) : a;
                    if (t) {
                        if (!o || s !== f)
                            i.push(a);
                        s = f
                    } else if (n) {
                        if (!v.contains(s, f)) {
                            s.push(f);
                            i.push(a)
                        }
                    } else if (!v.contains(i, a)) {
                        i.push(a)
                    }
                }
                return i
            }
            ;
            v.union = y(function(e) {
                return v.uniq(C(e, true, true))
            });
            v.intersection = function(e) {
                var t = [];
                var n = arguments.length;
                for (var r = 0, i = S(e); r < i; r++) {
                    var s = e[r];
                    if (v.contains(t, s))
                        continue;var o;
                    for (o = 1; o < n; o++) {
                        if (!v.contains(arguments[o], s))
                            break
                    }
                    if (o === n)
                        t.push(s)
                }
                return t
            }
            ;
            v.difference = y(function(e, t) {
                t = C(t, true, true);
                return v.filter(e, function(e) {
                    return !v.contains(t, e)
                })
            });
            v.unzip = function(e) {
                var t = e && v.max(e, S).length || 0;
                var n = Array(t);
                for (var r = 0; r < t; r++) {
                    n[r] = v.pluck(e, r)
                }
                return n
            }
            ;
            v.zip = y(v.unzip);
            v.object = function(e, t) {
                var n = {};
                for (var r = 0, i = S(e); r < i; r++) {
                    if (t) {
                        n[e[r]] = t[r]
                    } else {
                        n[e[r][0]] = e[r][1]
                    }
                }
                return n
            }
            ;
            var k = function(e) {
                return function(t, n, r) {
                    n = g(n, r);
                    var i = S(t);
                    var s = e > 0 ? 0 : i - 1;
                    for (; s >= 0 && s < i; s += e) {
                        if (n(t[s], s, t))
                            return s
                    }
                    return -1
                }
            }
            ;
            v.findIndex = k(1);
            v.findLastIndex = k(-1);
            v.sortedIndex = function(e, t, n, r) {
                n = g(n, r, 1);
                var i = n(t);
                var s = 0
                  , o = S(e);
                while (s < o) {
                    var u = Math.floor((s + o) / 2);
                    if (n(e[u]) < i)
                        s = u + 1;
                    else
                        o = u
                }
                return s
            }
            ;
            var L = function(e, t, n) {
                return function(r, i, s) {
                    var o = 0
                      , u = S(r);
                    if (typeof s == "number") {
                        if (e > 0) {
                            o = s >= 0 ? s : Math.max(s + u, o)
                        } else {
                            u = s >= 0 ? Math.min(s + 1, u) : s + u + 1
                        }
                    } else if (n && s && u) {
                        s = n(r, i);
                        return r[s] === i ? s : -1
                    }
                    if (i !== i) {
                        s = t(a.call(r, o, u), v.isNaN);
                        return s >= 0 ? s + o : -1
                    }
                    for (s = e > 0 ? o : u - 1; s >= 0 && s < u; s += e) {
                        if (r[s] === i)
                            return s
                    }
                    return -1
                }
            }
            ;
            v.indexOf = L(1, v.findIndex, v.sortedIndex);
            v.lastIndexOf = L(-1, v.findLastIndex);
            v.range = function(e, t, n) {
                if (t == null ) {
                    t = e || 0;
                    e = 0
                }
                n = n || 1;
                var r = Math.max(Math.ceil((t - e) / n), 0);
                var i = Array(r);
                for (var s = 0; s < r; s++,
                e += n) {
                    i[s] = e
                }
                return i
            }
            ;
            var A = function(e, t, n, r, i) {
                if (!(r instanceof t))
                    return e.apply(n, i);
                var s = b(e.prototype);
                var o = e.apply(s, i);
                if (v.isObject(o))
                    return o;
                return s
            }
            ;
            v.bind = y(function(e, t, n) {
                if (!v.isFunction(e))
                    throw new TypeError("Bind must be called on a function");
                var r = y(function(i) {
                    return A(e, r, t, this, n.concat(i))
                });
                return r
            });
            v.partial = y(function(e, t) {
                var n = v.partial.placeholder;
                var r = function() {
                    var i = 0
                      , s = t.length;
                    var o = Array(s);
                    for (var u = 0; u < s; u++) {
                        o[u] = t[u] === n ? arguments[i++] : t[u]
                    }
                    while (i < arguments.length)
                        o.push(arguments[i++]);
                    return A(e, r, this, this, o)
                }
                ;
                return r
            });
            v.partial.placeholder = v;
            v.bindAll = y(function(e, t) {
                t = C(t, false, false);
                var n = t.length;
                if (n < 1)
                    throw new Error("bindAll must be passed function names");
                while (n--) {
                    var r = t[n];
                    e[r] = v.bind(e[r], e)
                }
            });
            v.memoize = function(e, t) {
                var n = function(r) {
                    var i = n.cache;
                    var s = "" + (t ? t.apply(this, arguments) : r);
                    if (!v.has(i, s))
                        i[s] = e.apply(this, arguments);
                    return i[s]
                }
                ;
                n.cache = {};
                return n
            }
            ;
            v.delay = y(function(e, t, n) {
                return setTimeout(function() {
                    return e.apply(null , n)
                }, t)
            });
            v.defer = v.partial(v.delay, v, 1);
            v.throttle = function(e, t, n) {
                var r, i, s;
                var o = null ;
                var u = 0;
                if (!n)
                    n = {};
                var a = function() {
                    u = n.leading === false ? 0 : v.now();
                    o = null ;
                    s = e.apply(r, i);
                    if (!o)
                        r = i = null 
                }
                ;
                return function() {
                    var f = v.now();
                    if (!u && n.leading === false)
                        u = f;
                    var l = t - (f - u);
                    r = this;
                    i = arguments;
                    if (l <= 0 || l > t) {
                        if (o) {
                            clearTimeout(o);
                            o = null 
                        }
                        u = f;
                        s = e.apply(r, i);
                        if (!o)
                            r = i = null 
                    } else if (!o && n.trailing !== false) {
                        o = setTimeout(a, l)
                    }
                    return s
                }
            }
            ;
            v.debounce = function(e, t, n) {
                var r, i, s, o, u;
                var a = function() {
                    var f = v.now() - o;
                    if (f < t && f >= 0) {
                        r = setTimeout(a, t - f)
                    } else {
                        r = null ;
                        if (!n) {
                            u = e.apply(s, i);
                            if (!r)
                                s = i = null 
                        }
                    }
                }
                ;
                return function() {
                    s = this;
                    i = arguments;
                    o = v.now();
                    var f = n && !r;
                    if (!r)
                        r = setTimeout(a, t);
                    if (f) {
                        u = e.apply(s, i);
                        s = i = null 
                    }
                    return u
                }
            }
            ;
            v.wrap = function(e, t) {
                return v.partial(t, e)
            }
            ;
            v.negate = function(e) {
                return function() {
                    return !e.apply(this, arguments)
                }
            }
            ;
            v.compose = function() {
                var e = arguments;
                var t = e.length - 1;
                return function() {
                    var n = t;
                    var r = e[t].apply(this, arguments);
                    while (n--)
                        r = e[n].call(this, r);
                    return r
                }
            }
            ;
            v.after = function(e, t) {
                return function() {
                    if (--e < 1) {
                        return t.apply(this, arguments)
                    }
                }
            }
            ;
            v.before = function(e, t) {
                var n;
                return function() {
                    if (--e > 0) {
                        n = t.apply(this, arguments)
                    }
                    if (e <= 1)
                        t = null ;
                    return n
                }
            }
            ;
            v.once = v.partial(v.before, 2);
            v.restArgs = y;
            var O = !{
                toString: null 
            }.propertyIsEnumerable("toString");
            var M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
            var _ = function(e, t) {
                var n = M.length;
                var r = e.constructor;
                var i = v.isFunction(r) && r.prototype || o;
                var s = "constructor";
                if (v.has(e, s) && !v.contains(t, s))
                    t.push(s);
                while (n--) {
                    s = M[n];
                    if (s in e && e[s] !== i[s] && !v.contains(t, s)) {
                        t.push(s)
                    }
                }
            }
            ;
            v.keys = function(e) {
                if (!v.isObject(e))
                    return [];
                if (h)
                    return h(e);
                var t = [];
                for (var n in e)
                    if (v.has(e, n))
                        t.push(n);
                if (O)
                    _(e, t);
                return t
            }
            ;
            v.allKeys = function(e) {
                if (!v.isObject(e))
                    return [];
                var t = [];
                for (var n in e)
                    t.push(n);
                if (O)
                    _(e, t);
                return t
            }
            ;
            v.values = function(e) {
                var t = v.keys(e);
                var n = t.length;
                var r = Array(n);
                for (var i = 0; i < n; i++) {
                    r[i] = e[t[i]]
                }
                return r
            }
            ;
            v.mapObject = function(e, t, n) {
                t = g(t, n);
                var r = v.keys(e)
                  , i = r.length
                  , s = {};
                for (var o = 0; o < i; o++) {
                    var u = r[o];
                    s[u] = t(e[u], u, e)
                }
                return s
            }
            ;
            v.pairs = function(e) {
                var t = v.keys(e);
                var n = t.length;
                var r = Array(n);
                for (var i = 0; i < n; i++) {
                    r[i] = [t[i], e[t[i]]]
                }
                return r
            }
            ;
            v.invert = function(e) {
                var t = {};
                var n = v.keys(e);
                for (var r = 0, i = n.length; r < i; r++) {
                    t[e[n[r]]] = n[r]
                }
                return t
            }
            ;
            v.functions = v.methods = function(e) {
                var t = [];
                for (var n in e) {
                    if (v.isFunction(e[n]))
                        t.push(n)
                }
                return t.sort()
            }
            ;
            var D = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (r < 2 || n == null )
                        return n;
                    for (var i = 1; i < r; i++) {
                        var s = arguments[i]
                          , o = e(s)
                          , u = o.length;
                        for (var a = 0; a < u; a++) {
                            var f = o[a];
                            if (!t || n[f] === void 0)
                                n[f] = s[f]
                        }
                    }
                    return n
                }
            }
            ;
            v.extend = D(v.allKeys);
            v.extendOwn = v.assign = D(v.keys);
            v.findKey = function(e, t, n) {
                t = g(t, n);
                var r = v.keys(e), i;
                for (var s = 0, o = r.length; s < o; s++) {
                    i = r[s];
                    if (t(e[i], i, e))
                        return i
                }
            }
            ;
            var P = function(e, t, n) {
                return t in n
            }
            ;
            v.pick = y(function(e, t) {
                var n = {}
                  , r = t[0];
                if (e == null )
                    return n;
                if (v.isFunction(r)) {
                    if (t.length > 1)
                        r = m(r, t[1]);
                    t = v.allKeys(e)
                } else {
                    r = P;
                    t = C(t, false, false);
                    e = Object(e)
                }
                for (var i = 0, s = t.length; i < s; i++) {
                    var o = t[i];
                    var u = e[o];
                    if (r(u, o, e))
                        n[o] = u
                }
                return n
            });
            v.omit = y(function(e, t) {
                var n = t[0], r;
                if (v.isFunction(n)) {
                    n = v.negate(n);
                    if (t.length > 1)
                        r = t[1]
                } else {
                    t = v.map(C(t, false, false), String);
                    n = function(e, n) {
                        return !v.contains(t, n)
                    }
                }
                return v.pick(e, n, r)
            });
            v.defaults = D(v.allKeys, true);
            v.create = function(e, t) {
                var n = b(e);
                if (t)
                    v.extendOwn(n, t);
                return n
            }
            ;
            v.clone = function(e) {
                if (!v.isObject(e))
                    return e;
                return v.isArray(e) ? e.slice() : v.extend({}, e)
            }
            ;
            v.tap = function(e, t) {
                t(e);
                return e
            }
            ;
            v.isMatch = function(e, t) {
                var n = v.keys(t)
                  , r = n.length;
                if (e == null )
                    return !r;
                var i = Object(e);
                for (var s = 0; s < r; s++) {
                    var o = n[s];
                    if (t[o] !== i[o] || !(o in i))
                        return false
                }
                return true
            }
            ;
            var H, B;
            H = function(e, t, n, r) {
                if (e === t)
                    return e !== 0 || 1 / e === 1 / t;
                if (e == null  || t == null )
                    return e === t;
                if (e !== e)
                    return t !== t;
                var i = typeof e;
                if (i !== "function" && i !== "object" && typeof t !== "object")
                    return false;
                return B(e, t, n, r)
            }
            ;
            B = function(e, t, n, r) {
                if (e instanceof v)
                    e = e._wrapped;
                if (t instanceof v)
                    t = t._wrapped;
                var i = f.call(e);
                if (i !== f.call(t))
                    return false;
                switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e === "" + t;
                case "[object Number]":
                    if (+e !== +e)
                        return +t !== +t;
                    return +e === 0 ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
                }
                var s = i === "[object Array]";
                if (!s) {
                    if (typeof e != "object" || typeof t != "object")
                        return false;
                    var o = e.constructor
                      , u = t.constructor;
                    if (o !== u && !(v.isFunction(o) && o instanceof o && v.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) {
                        return false
                    }
                }
                n = n || [];
                r = r || [];
                var a = n.length;
                while (a--) {
                    if (n[a] === e)
                        return r[a] === t
                }
                n.push(e);
                r.push(t);
                if (s) {
                    a = e.length;
                    if (a !== t.length)
                        return false;
                    while (a--) {
                        if (!H(e[a], t[a], n, r))
                            return false
                    }
                } else {
                    var l = v.keys(e), c;
                    a = l.length;
                    if (v.keys(t).length !== a)
                        return false;
                    while (a--) {
                        c = l[a];
                        if (!(v.has(t, c) && H(e[c], t[c], n, r)))
                            return false
                    }
                }
                n.pop();
                r.pop();
                return true
            }
            ;
            v.isEqual = function(e, t) {
                return H(e, t)
            }
            ;
            v.isEmpty = function(e) {
                if (e == null )
                    return true;
                if (x(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)))
                    return e.length === 0;
                return v.keys(e).length === 0
            }
            ;
            v.isElement = function(e) {
                return !!(e && e.nodeType === 1)
            }
            ;
            v.isArray = c || function(e) {
                return f.call(e) === "[object Array]"
            }
            ;
            v.isObject = function(e) {
                var t = typeof e;
                return t === "function" || t === "object" && !!e
            }
            ;
            v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                v["is" + e] = function(t) {
                    return f.call(t) === "[object " + e + "]"
                }
            });
            if (!v.isArguments(arguments)) {
                v.isArguments = function(e) {
                    return v.has(e, "callee")
                }
            }
            var j = r.document && r.document.childNodes;
            if (typeof /./ != "function" && typeof Int8Array != "object" && typeof j != "function") {
                v.isFunction = function(e) {
                    return typeof e == "function" || false
                }
            }
            v.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }
            ;
            v.isNaN = function(e) {
                return v.isNumber(e) && e !== +e
            }
            ;
            v.isBoolean = function(e) {
                return e === true || e === false || f.call(e) === "[object Boolean]"
            }
            ;
            v.isNull = function(e) {
                return e === null 
            }
            ;
            v.isUndefined = function(e) {
                return e === void 0
            }
            ;
            v.has = function(e, t) {
                return e != null  && l.call(e, t)
            }
            ;
            v.noConflict = function() {
                r._ = i;
                return this
            }
            ;
            v.identity = function(e) {
                return e
            }
            ;
            v.constant = function(e) {
                return function() {
                    return e
                }
            }
            ;
            v.noop = function() {}
            ;
            v.property = w;
            v.propertyOf = function(e) {
                return e == null  ? function() {}
                 : function(t) {
                    return e[t]
                }
            }
            ;
            v.matcher = v.matches = function(e) {
                e = v.extendOwn({}, e);
                return function(t) {
                    return v.isMatch(t, e)
                }
            }
            ;
            v.times = function(e, t, n) {
                var r = Array(Math.max(0, e));
                t = m(t, n, 1);
                for (var i = 0; i < e; i++)
                    r[i] = t(i);
                return r
            }
            ;
            v.random = function(e, t) {
                if (t == null ) {
                    t = e;
                    e = 0
                }
                return e + Math.floor(Math.random() * (t - e + 1))
            }
            ;
            v.now = Date.now || function() {
                return (new Date).getTime()
            }
            ;
            var F = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            var I = v.invert(F);
            var q = function(e) {
                var t = function(t) {
                    return e[t]
                }
                ;
                var n = "(?:" + v.keys(e).join("|") + ")";
                var r = RegExp(n);
                var i = RegExp(n, "g");
                return function(e) {
                    e = e == null  ? "" : "" + e;
                    return r.test(e) ? e.replace(i, t) : e
                }
            }
            ;
            v.escape = q(F);
            v.unescape = q(I);
            v.result = function(e, t, n) {
                var r = e == null  ? void 0 : e[t];
                if (r === void 0) {
                    r = n
                }
                return v.isFunction(r) ? r.call(e) : r
            }
            ;
            var R = 0;
            v.uniqueId = function(e) {
                var t = ++R + "";
                return e ? e + t : t
            }
            ;
            v.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var U = /(.)^/;
            var z = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            };
            var W = /\\|'|\r|\n|\u2028|\u2029/g;
            var X = function(e) {
                return "\\" + z[e]
            }
            ;
            v.template = function(e, t, n) {
                if (!t && n)
                    t = n;
                t = v.defaults({}, t, v.templateSettings);
                var r = RegExp([(t.escape || U).source, (t.interpolate || U).source, (t.evaluate || U).source].join("|") + "|$", "g");
                var i = 0;
                var s = "__p+='";
                e.replace(r, function(t, n, r, o, u) {
                    s += e.slice(i, u).replace(W, X);
                    i = u + t.length;
                    if (n) {
                        s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"
                    } else if (r) {
                        s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"
                    } else if (o) {
                        s += "';\n" + o + "\n__p+='"
                    }
                    return t
                });
                s += "';\n";
                if (!t.variable)
                    s = "with(obj||{}){\n" + s + "}\n";
                s = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                var o;
                try {
                    o = new Function(t.variable || "obj","_",s)
                } catch (u) {
                    u.source = s;
                    throw u
                }
                var a = function(e) {
                    return o.call(this, e, v)
                }
                ;
                var f = t.variable || "obj";
                a.source = "function(" + f + "){\n" + s + "}";
                return a
            }
            ;
            v.chain = function(e) {
                var t = v(e);
                t._chain = true;
                return t
            }
            ;
            var V = function(e, t) {
                return e._chain ? v(t).chain() : t
            }
            ;
            v.mixin = function(e) {
                v.each(v.functions(e), function(t) {
                    var n = v[t] = e[t];
                    v.prototype[t] = function() {
                        var e = [this._wrapped];
                        u.apply(e, arguments);
                        return V(this, n.apply(v, e))
                    }
                })
            }
            ;
            v.mixin(v);
            v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = s[e];
                v.prototype[e] = function() {
                    var n = this._wrapped;
                    t.apply(n, arguments);
                    if ((e === "shift" || e === "splice") && n.length === 0)
                        delete n[0];
                    return V(this, n)
                }
            });
            v.each(["concat", "join", "slice"], function(e) {
                var t = s[e];
                v.prototype[e] = function() {
                    return V(this, t.apply(this._wrapped, arguments))
                }
            });
            v.prototype.value = function() {
                return this._wrapped
            }
            ;
            v.prototype.valueOf = v.prototype.toJSON = v.prototype.value;
            v.prototype.toString = function() {
                return "" + this._wrapped
            }
            ;
            if (typeof define === "function" && define.amd) {
                define("underscore", [], function() {
                    return v
                })
            }
        })()
    }(t.exports, t, e);
    e.____MODULES["07ba6417062d4d7c60c0a3e822e01f73"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "cf8e333260e21992ab2837742aa624be",
        filename: "libdependencies.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(t, n, r) {
        e.____MODULES["f751fa756ab8aaf2e04d6d527de9093f"];
        window._ = e.____MODULES["07ba6417062d4d7c60c0a3e822e01f73"]
    }(t.exports, t, e);
    e.____MODULES["cf8e333260e21992ab2837742aa624be"] = t.exports
})(this);

(function(e) {
    var t = {
        id: "4d5cbd309fb9bbad35204302ea5b515d",
        filename: "zepto_util.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        !function(e, t, n) {
            function c() {
                o = e("#loadWrap");
                if (o.size() == 0) {
                    o = e(f).appendTo(document.body)
                }
                o.hide();
                u = o.find(".text-info")
            }
            var r = /[\d.]+(ms|s)/;
            ["animation", "transition"].forEach(function(n) {
                e.fn[n + "End"] = function(i) {
                    if (i instanceof Function) {
                        var s = false;
                        var o = function() {
                            if (!s) {
                                s = true;
                                i()
                            }
                        }
                        ;
                        var u = t.getComputedStyle(this[0])
                          , a = r.exec(u[e.styleNames[n]] || u[e.styleNames[n + "Duration"]])
                          , f = 300;
                        if (a) {
                            f = parseFloat(a[0]);
                            if (a[1] == "s") {
                                f *= 1e3
                            }
                        }
                        setTimeout(o, f + 200);
                        this.one(e.eventNames[n + "End"], o)
                    }
                    return this
                }
            });
            e.fn.confirmEvent = function(t, n, r) {
                var i = this;
                document.addEventListener(t, function s(o) {
                    o.preventDefault();
                    o.stopPropagation();
                    o.stopImmediatePropagation();
                    document.removeEventListener(t, s, true);
                    var u = o.target;
                    if (u == i[0] || e(u).parents().indexOf(i[0]) !== -1) {
                        n.call(i)
                    } else {
                        r.call(i, u)
                    }
                }, true);
                return i
            }
            ;
            var i = document.createElement("div")
              , s = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            };
            e.each(s, function(t, n) {
                if (i.style[t + "TransitionProperty"] !== "undefined") {
                    var r = "-" + t.toLowerCase() + "-";
                    e.extend(e, {
                        prefixStyle: function(e) {
                            var t = Object.prototype.toString.call(e), n;
                            if (t === "[object Object]") {
                                n = {};
                                for (var i in e) {
                                    n[r + i] = e[i]
                                }
                                return n
                            }
                            if (t === "[object String]") {
                                return r + e
                            }
                            return e
                        },
                        prefixEvent: function(e) {
                            return n ? n + e : e.toLowerCase()
                        }
                    });
                    return false
                }
            });
            i = null ;
            e.extend(e, {
                monitorUrl: "/h5/monitor?",
                href: function() {
                    var e = this, n = t.location.href, r = new RegExp, i;
                    n = n.replace(/#.*/, "");
                    return {
                        getValue: function() {
                            return n
                        },
                        replace: function() {
                            n = n.replace(arguments[0], arguments[1]);
                            return this
                        },
                        append: function(e) {
                            n = n + "&" + e;
                            return this
                        },
                        path: function(e) {
                            n = n.indexOf("?") != -1 ? n.replace(/\/[^\/]*\?/, "/" + e + "?") : n.replace(/\/[^/]*$/, "/" + e + "?");
                            return this
                        },
                        param: function() {
                            var e = arguments
                              , t = e.length;
                            if (t == 0) {
                                n = n.replace(/\?(.)*/, "?");
                                return this
                            }
                            if (t == 1 && typeof e[0] == "string") {
                                r.compile("[&?]" + e[0] + "=([^=&?#]*)");
                                return n.match(r) ? n.match(r)[1] : ""
                            }
                            if (t == 2) {
                                r.compile("[&?]" + e[0] + "=([^=&?#]*)");
                                i = n.match(r);
                                n = i ? n.replace(e[0] + "=" + i[1], e[0] + "=" + e[1]) : n + (n.indexOf("?") == -1 ? "?" : n.indexOf("?") == n.length - 1 ? "" : "&") + e[0] + "=" + e[1];
                                return this
                            }
                            if (typeof e[0] == "object") {
                                var s, o = e[0];
                                for (s in o) {
                                    e.callee(s, o[s])
                                }
                            }
                            return this
                        },
                        exec: function() {
                            t.location.href = n
                        }
                    }
                },
                zeroFill: function(e) {
                    e = +e;
                    return e > 9 ? e : "" + 0 + e
                },
                loading: function(t) {
                    if (!o) {
                        c()
                    }
                    var n = e.extend({}, a, t);
                    u.text(n.content);
                    o.show();
                    if (n.stopMove) {
                        o.on("touchMove", function(e) {
                            e.preventDefault()
                        })
                    }
                },
                closeLoading: function() {
                    o.hide().off("touchMove")
                },
                monitor: function(t) {
                    e.get(this.monitorUrl + e.param(t))
                },
                offKeyBoard: function() {
                    document.activeElement && document.activeElement.blur()
                }
            });
            e(document.body).on("tap click", function(t) {
                var n = ["INPUT", "TEXTAREA"];
                if (n.indexOf(t.target.tagName) == -1) {
                    e.offKeyBoard()
                }
            });
            var l = true;
            t.onerror = function(t) {
                if (t === "Script error.") {
                    return
                }
                if (!l) {
                    return
                }
                l = false;
                setTimeout(function() {
                    l = true
                }, 1e3);
                var n = [], r = arguments.length, i;
                if (typeof t === "object" && t.srcElement && t.target) {
                    if (t.srcElement == "[object HTMLScriptElement]" && t.target == "[object HTMLScriptElement]") {
                        t = "Error loading script"
                    } else {
                        t = "Event Error - target:" + t.target + " srcElement:" + t.srcElement
                    }
                }
                t = t.toString();
                if (t.indexOf("Location.toString") > -1 || t.indexOf("Error loading script") > -1) {
                    return
                }
                n.push(t);
                for (var s = 1; s < r; s++) {
                    if (!!arguments[s] && !!arguments[s].stack) {
                        n.push(arguments[s].stack.toString())
                    } else {
                        n.push(arguments[s])
                    }
                }
                location.pathname && n.push(location.pathname);
//              e.post("jsErr", {
//                  msg: n.join(":::")
//              })
            }
            ;
            e.fn.listen = function(n, r) {
                var i = n.split("."), s, o = e(this), u = navigator.userAgent.toLowerCase();
                n = i[0];
                s = i[1] || n;
                if (n == "scroll") {
                    if (u.indexOf("iphone") > 0) {
                        var a = t.pageYOffset;
                        o.on("touchmove." + s, function() {
                            var e = t.pageYOffset;
                            r(e, e - a);
                            a = e
                        });
                        o.one("touchend", function() {
                            stop = true
                        })
                    } else {
                        var a = t.pageYOffset;
                        o.on("touchstart." + s, function() {
                            var e = false;
                            requestAnimationFrame(function n() {
                                var i = t.pageYOffset
                                  , s = i != a;
                                if (s) {
                                    r(i, i - a);
                                    a = i
                                }
                                if (s || !e) {
                                    requestAnimationFrame(n)
                                }
                            })
                        });
                        o.one("touchend", function() {
                            stop = true
                        })
                    }
                }
            }
            ;
            e.fn.deaf = function(t) {
                if (t.charAt(0) !== ".") {
                    t = "." + t
                }
                e(this).off(t)
            }
            ;
            e.fn.activeTouch = function(e, t) {
                var n = this;
                this.on("touchstart", function(t) {
                    e.call(n, t)
                });
                this.on("touchmove touchend", function(e) {
                    t.call(n, e)
                });
                return this
            }
            ;
            var h = t.localStorage;
            var p = function(e) {
                try {
                    h.setItem("isOk", "ok");
                    h.removeItem("isOk");
                    return true
                } catch (e) {
                    return false
                }
            }();
            e.storage = {
                hasS: p,
                set: function(e, t) {
                    if (p) {
                        h.setItem(e, t);
                        return 1
                    }
                    return 0
                },
                get: function(e) {
                    return p ? h.getItem(e) : 0
                },
                remove: function(e) {
                    if (p) {
                        h.removeItem(e)
                    } else {
                        return 0
                    }
                }
            };
            var d = e("body");
            var v = e("body");
            e.mask = {
                set: function() {
                    d.css("position", "fixed")
                },
                remove: function(e) {
                    d.css("position", "");
                    v.scrollTop(e)
                }
            };
            e.Getcookie = {
                get: function(e, t) {
                    var n = t || document.cookie;
                    var r = new RegExp(e + "=(.*?)(;|$)");
                    var i = n.match(r);
                    if (i && i.length > 2) {
                        return i[1]
                    } else {
                        return ""
                    }
                }
            };
            e.date = {
                toDateObj: function(e, t) {
                    if (Object.prototype.toString.call(e) !== "[object Date]") {
                        if (typeof e === "string") {
                            var n = e.split(/[-/]/)
                              , r = parseInt(n[0])
                              , i = parseInt(n[1]) - 1
                              , s = parseInt(n[2]);
                            e = new Date(r,i,s)
                        } else {
                            throw new Error("date 参数应为字符串或日期对象")
                        }
                    }
                    if (!t) {
                        e = new Date(e.getFullYear(),e.getMonth(),e.getDate())
                    }
                    return e
                },
                add: function(t, n, r) {
                    r = r || typeof t === "string";
                    t = e.date.toDateObj(t);
                    n = n || 0;
                    t = new Date(t.getFullYear(),t.getMonth(),t.getDate() + n);
                    return r ? e.date.format(t) : t
                },
                clone: function(e) {
                    if (Object.prototype.toString.call(e) === "[object Date]") {
                        return new Date(e.getFullYear(),e.getMonth(),e.getDate())
                    } else {
                        return e
                    }
                },
                format: function(t, n) {
                    n = n || "yyyy-MM-dd";
                    if (typeof t === "string") {
                        t = e.date.toDateObj(t)
                    }
                    return n.replace(/(eweek(\d*)|yyyy|eMM(\d*)|MM|M|dd|d)/g, function(n, r, i, s) {
                        switch (r) {
                        case "yyyy":
                            return t.getFullYear();
                        case "MM":
                            return e.date.padLeft(t.getMonth() + 1, 2, "0");
                        case "M":
                            return t.getMonth() + 1;
                        case "dd":
                            return e.date.padLeft(t.getDate(), 2, "0");
                        case "d":
                            return t.getDate();
                        default:
                            var o = r.match(/^eweek(\d*)$/)
                              , u = t.getDay();
                            if (o) {
                                var a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][u];
                                if (o[1]) {
                                    a = a.substring(0, o[1])
                                }
                                return a
                            }
                            var f = r.match(/^eMM(\d*)$/)
                              , l = t.getMonth();
                            if (f) {
                                var c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][l];
                                if (f[1]) {
                                    c = c.substring(0, f[1])
                                }
                                return c
                            }
                        }
                    })
                },
                getWeekStr: function(t) {
                    t = e.date.toDateObj(t);
                    return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][t.getDay()]
                },
                padLeft: function(e, t, n) {
                    e = e + "";
                    n = n || " ";
                    while (e.length < t) {
                        e = n + e
                    }
                    return e
                }
            }
        }($, window)
    }(t.exports, t, e);
    e.____MODULES["4d5cbd309fb9bbad35204302ea5b515d"] = t.exports
})(this);
