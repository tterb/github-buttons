(function() {
    var t, e, n, o, r, a, i, c, l, s, u, h, d, f, p, b, g, m = [].slice,
        y = function(t, e) {
            function n() {
                this.constructor = t
            }
            for (var o in e) v.call(e, o) && (t[o] = e[o]);
            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
        },
        v = {}.hasOwnProperty;
    g = this, b = g.document, r = "https://api.github.com", o = "github-button", a = "octicon", i = a + "-mark-github", c = !{}.hasOwnProperty.call(b, "currentScript") && delete b.currentScript && b.currentScript ? b.currentScript.src.replace(/[^\/]*([?#].*)?$/, "") : (/^http:/.test(b.location) ? "http" : "https") + "://buttons.github.io/", l = "faa75404-3b97-5585-b449-4bc51338fbd1", p = function() {
        function t() {}
        return t.stringify = function(t) {
            var e, n, o;
            n = [];
            for (e in t) o = t[e], n.push(encodeURIComponent(e) + "=" + (null != o ? encodeURIComponent(o) : ""));
            return n.join("&")
        }, t.parse = function(t) {
            var e, n, o, r, a, i, c, l;
            for (r = {}, i = t.split("&"), e = 0, o = i.length; e < o; e++) "" !== (a = i[e]) && (c = a.split("="), n = c[0], l = 2 <= c.length ? m.call(c, 1) : [], "" !== n && (r[decodeURIComponent(n)] = decodeURIComponent(l.join("="))));
            return r
        }, t
    }(), f = function() {
        function t() {}
        return t.encode = function(t) {
            return "#" + p.stringify(t)
        }, t.decode = function(t) {
            return null == t && (t = b.location.hash), p.parse(t.replace(/^#/, "")) || {}
        }, t
    }(), h = function() {
        function t(t) {
            this.$ = t
        }
        var e, n;
        return t.prototype.on = function() {
            var t, n, o, r, a, i, c;
            for (o = 2 <= arguments.length ? m.call(arguments, 0, a = arguments.length - 1) : (a = 0, []), r = arguments[a++], t = function(t) {
                    return function(e) {
                        return r.call(t, e || g.event)
                    }
                }(this), i = 0, c = o.length; i < c; i++) n = o[i], e(this.$, n, t)
        }, t.prototype.once = function() {
            var t, o, r, a, i, c, l;
            for (r = 2 <= arguments.length ? m.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), a = arguments[i++], t = function(e) {
                    return function(o) {
                        var i, c, l;
                        for (c = 0, l = r.length; c < l; c++) i = r[c], n(e.$, i, t);
                        return a.call(e, o || g.event)
                    }
                }(this), c = 0, l = r.length; c < l; c++) o = r[c], e(this.$, o, t)
        }, e = function(t, e, n) {
            t.addEventListener ? t.addEventListener("" + e, n) : t.attachEvent("on" + e, n)
        }, n = function(t, e, n) {
            t.removeEventListener ? t.removeEventListener("" + e, n) : t.detachEvent("on" + e, n)
        }, t
    }(), u = function(t) {
        function e(t, e) {
            this.$ = t && 1 === t.nodeType ? t : b.createElement(t), e && e.call(this, this.$)
        }
        return y(e, t), e
    }(h), d = function(t) {
        function e(t) {
            e.__super__.constructor.call(this, "iframe", function(e) {
                var n, o, r;
                o = {
                    allowtransparency: !0,
                    scrolling: "no",
                    frameBorder: 0
                };
                for (n in o) r = o[n], e.setAttribute(n, r);
                e.style.cssText = "width: 1px; height: 0; border: none", e.src = "javascript:0", t && t.call(this, e)
            })
        }
        var n, o;
        return y(e, t), e.prototype.html = function(t) {
            var e;
            try {
                e = this.$.contentWindow.document, e.open().write(t), e.close()
            } catch (t) {}
        }, e.prototype.load = function(t) {
            this.$.src = t
        }, e.prototype.size = function() {
            var t, e, n, r, a, i;
            try {
                return n = this.$.contentWindow.document, a = n.documentElement, t = n.body, i = a.scrollWidth, r = 50, e = t.getBoundingClientRect(), i = 95, r = Math.max(r, o(e.height || e.bottom - e.top)), t.style.display = ""), {
                    width: i + "px",
                    height: r + "px"
                }
            } catch (t) {}
        }, e.prototype.resize = function(t) {
            var e, n, o;
            n = null != t ? t : this.size() || {}, o = n.width, e = n.height, o && (this.$.style.width = o), e && (this.$.style.height = e)
        }, n = g.devicePixelRatio || 1, o = function(t) {
            return (n > 1 ? Math.ceil(Math.round(t * n) / n * 2) / 2 : Math.ceil(t)) || 0
        }, e
    }(u), t = function() {
        function t() {}
        return t.parse = function(t) {
            var e, n, o, r, a;
            for (r = {
                    href: t.href,
                    text: t.getAttribute("data-text") || t.textContent || t.innerText || ""
                }, a = ["data-show-count", "data-style", "data-icon", "aria-label"], n = 0, o = a.length; n < o; n++) e = a[n], r[e] = t.getAttribute(e) || "";
            return t.getAttribute("data-count-api") && (console && console.warn("GitHub Buttons deprecated `data-count-api`: use `data-show-count` instead. Please refer to https://github.com/JonSn0w/github-buttons for more info."), r["data-show-count"] = 1), r
        }, t
    }(), e = function(t) {
        function e(t, n, o) {
            var r;
            e.__super__.constructor.call(this, n), r = function(e) {
                return function() {
                    var n;
                    r = null, n = e.size(), e.$.parentNode.removeChild(e.$), e.once("load", function() {
                        this.resize(n)
                    }), e.load(c + "buttons.html" + t), o && o.call(e, e.$)
                }
            }(this), this.once("load", function() {
                var t;
                (t = this.$.contentWindow.callback) ? new u(t.script, function(t) {
                    this.on("load", "error", function() {
                        r && r()
                    }), t.readyState && this.on("readystatechange", function() {
                        !/i/.test(t.readyState) && r && r()
                    })
                }): r()
            }), this.html('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + l + '</title><base>\x3c!--[if lte IE 6]></base><![endif]--\x3e<link rel="stylesheet" href="' + c + 'assets/css/buttons.min.css"><script>document.location.hash = "' + t + '";<\/script></head><body><script src="' + c + 'buttons.js"><\/script></body></html>')
        }
        return y(e, t), e
    }(d), n = function() {
        function t(t) {
            t && (b.body.className = t["data-style"] || "", new e(t.href, null, function(n) {
                var o;
                n.className = "button", (o = t["aria-label"]) && n.setAttribute("aria-label", o), new u("i", function(e) {
                    e.className = a + " " + (t["data-icon"] || i), e.setAttribute("aria-hidden", "true"), n.appendChild(e)
                }), n.appendChild(b.createTextNode(" ")), new u("span", function(e) {
                    t.text && e.appendChild(b.createTextNode(t.text)), n.appendChild(e)
                }), b.body.appendChild(n), "github.com" === n.hostname && /^true|1$/i.test(t["data-show-count"]) && function() {
                    var t, o, a, i;
                    (a = n.pathname.replace(/^(?!\/)/, "/").match(/^\/([^\/?#]+)(?:\/([^\/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^\/?#]+)))?)?(?:[\/?#]|$)/)) && !a[6] && (a[2] ? (t = "/repos/" + a[1] + "/" + a[2], o = "/" + a[1] + "/" + a[2] + "/", a[3] ? (i = "subscribers_count", o += "watchers") : a[4] ? (i = "forks_count", o += "network") : a[5] ? (i = "open_issues_count", o += "issues") : (i = "stargazers_count", o += "stargazers")) : (t = "/users/" + a[1], i = "followers", o = "/" + a[1] + "/" + i), new e(o, n.href, function(e) {
                        e.className = "count", new u("b", function(t) {
                            e.appendChild(t)
                        }), new u("i", function(t) {
                            e.appendChild(t)
                        }), new u("span", function(n) {
                            new u("script", function(o) {
                                var a;
                                o.async = !0, o.src = r + function() {
                                    var e;
                                    return e = p.parse(t.split("?").slice(1).join("?")), e.callback = "callback", t.split("?")[0] + "?" + p.stringify(e)
                                }(), g.callback = function(t) {
                                    var o;
                                    g.callback = null, 200 === t.meta.status && (o = t.data[i], n.appendChild(b.createTextNode(("" + o).replace(/\B(?=(\d{3})+(?!\d))/g, ","))), e.appendChild(n), e.setAttribute("aria-label", o + " " + i.replace(/_count$/, "").replace("_", " ") + " on GitHub"), b.body.appendChild(e))
                                }, g.callback.script = o, this.on("error", function() {
                                    g.callback = null
                                }), o.readyState && this.on("readystatechange", function() {
                                    "loaded" === o.readyState && o.children && "loading" === o.readyState && (g.callback = null)
                                }), a = b.getElementsByTagName("head")[0], "[object Opera]" === {}.toString.call(g.opera) ? new h(b).on("DOMContentLoaded", function() {
                                    a.appendChild(o)
                                }) : a.appendChild(o)
                            })
                        })
                    }))
                }()
            }))
        }
        var e;
        return e = function(t) {
            function e(t, i, c) {
                e.__super__.constructor.call(this, "a", function(e) {
                    if ((e.href = i) && e.protocol !== o) try {
                        e.href = new URL(t, i).href
                    } catch (o) {
                        n.href = i, e.href = t, new u("div", function(t) {
                            t.innerHTML = e.outerHTML, e.href = t.lastChild.href, t = null
                        }), n.href = b.location.href, n.removeAttribute("href")
                    } else e.href = t;
                    r.test(e.href) && (e.target = "_top"), e.protocol !== o && a.test("." + e.hostname) || (e.href = "#", e.target = "_self"), c(e)
                })
            }
            var n, o, r, a;
            return y(e, t), n = b.getElementsByTagName("base")[0], o = "javascript:", a = /\.github\.com$/, r = /^https?:\/\/((gist\.)?github\.com\/[^\/?#]+\/[^\/?#]+\/archive\/|github\.com\/[^\/?#]+\/[^\/?#]+\/releases\/download\/|codeload\.github\.com\/)/, e
        }(u), t
    }(), s = function() {
        function t(t) {
            var e;
            /m/.test(b.readyState) || !/g/.test(b.readyState) && !b.documentElement.doScroll ? g.setTimeout(t) : b.addEventListener ? new h(b).once("DOMContentLoaded", t) : (e = function() {
                /m/.test(b.readyState) && (b.detachEvent("onreadystatechange", e), t && t())
            }, b.attachEvent("onreadystatechange", e))
        }
        return t
    }(), b.title === l ? new n(f.decode()) : new s(function() {
        var n, r, a, i, c, l;
        for (a = b.querySelectorAll ? b.querySelectorAll("a." + o) : function() {
                var t, e, r, a;
                for (r = b.getElementsByTagName("a"), a = [], t = 0, e = r.length; t < e; t++) n = r[t], ~(" " + n.className + " ").replace(/[ \t\n\f\r]+/g, " ").indexOf(" " + o + " ") && a.push(n);
                return a
            }(), i = function(n) {
                new e(f.encode(t.parse(n)), function(t) {
                    b.body.appendChild(t)
                }, function(t) {
                    n.parentNode.replaceChild(t, n)
                })
            }, c = 0, l = a.length; c < l; c++) r = a[c], i(r)
    })
}).call(this);
//# sourceMappingURL=buttons.js.map
