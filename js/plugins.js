/*!
	jQuery Colorbox v1.4.15 - 2013-04-22
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t, e, i) {
    function o(i, o, n) {
        var r = e.createElement(i);
        return o && (r.id = te + o), n && (r.style.cssText = n), t(r)
    }

    function n() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function r(t) {
        var e = H.length,
            i = (j + t) % e;
        return 0 > i ? e + i : i
    }

    function h(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? E.width() : n()) / 100 : 1) * parseInt(t, 10))
    }

    function l(t, e) {
        return t.photo || t.photoRegex.test(e)
    }

    function s(t, e) {
        return t.retinaUrl && i.devicePixelRatio > 1 ? e.replace(t.photoRegex, t.retinaSuffix) : e
    }

    function a(t) {
        "contains" in x[0] && !x[0].contains(t.target) && (t.stopPropagation(), x.focus())
    }

    function d() {
        var e, i = t.data(A, Z);
        null == i ? (_ = t.extend({}, Y), console && console.log && console.log("Error: cboxElement missing settings object")) : _ = t.extend({}, i);
        for (e in _) t.isFunction(_[e]) && "on" !== e.slice(0, 2) && (_[e] = _[e].call(A));
        _.rel = _.rel || A.rel || t(A).data("rel") || "nofollow", _.href = _.href || t(A).attr("href"), _.title = _.title || A.title, "string" == typeof _.href && (_.href = t.trim(_.href))
    }

    function c(i, o) {
        t(e).trigger(i), se.trigger(i), t.isFunction(o) && o.call(A)
    }

    function u() {
        var t, e, i, o, n, r = te + "Slideshow_",
            h = "click." + te;
        _.slideshow && H[1] ? (e = function() {
            clearTimeout(t)
        }, i = function() {
            (_.loop || H[j + 1]) && (t = setTimeout(J.next, _.slideshowSpeed))
        }, o = function() {
            M.html(_.slideshowStop).unbind(h).one(h, n), se.bind(ne, i).bind(oe, e).bind(re, n), x.removeClass(r + "off").addClass(r + "on")
        }, n = function() {
            e(), se.unbind(ne, i).unbind(oe, e).unbind(re, n), M.html(_.slideshowStart).unbind(h).one(h, function() {
                J.next(), o()
            }), x.removeClass(r + "on").addClass(r + "off")
        }, _.slideshowAuto ? o() : n()) : x.removeClass(r + "off " + r + "on")
    }

    function f(i) {
        G || (A = i, d(), H = t(A), j = 0, "nofollow" !== _.rel && (H = t("." + ee).filter(function() {
            var e, i = t.data(this, Z);
            return i && (e = t(this).data("rel") || i.rel || this.rel), e === _.rel
        }), j = H.index(A), -1 === j && (H = H.add(A), j = H.length - 1)), g.css({
            opacity: parseFloat(_.opacity),
            cursor: _.overlayClose ? "pointer" : "auto",
            visibility: "visible"
        }).show(), V && x.add(g).removeClass(V), _.className && x.add(g).addClass(_.className), V = _.className, K.html(_.close).show(), $ || ($ = q = !0, x.css({
            visibility: "hidden",
            display: "block"
        }), W = o(ae, "LoadedContent", "width:0; height:0; overflow:hidden").appendTo(v), D = b.height() + k.height() + v.outerHeight(!0) - v.height(), B = C.width() + T.width() + v.outerWidth(!0) - v.width(), N = W.outerHeight(!0), z = W.outerWidth(!0), _.w = h(_.initialWidth, "x"), _.h = h(_.initialHeight, "y"), J.position(), u(), c(ie, _.onOpen), O.add(F).hide(), x.focus(), e.addEventListener && (e.addEventListener("focus", a, !0), se.one(he, function() {
            e.removeEventListener("focus", a, !0)
        })), _.returnFocus && se.one(he, function() {
            t(A).focus()
        })), w())
    }

    function p() {
        !x && e.body && (X = !1, E = t(i), x = o(ae).attr({
            id: Z,
            "class": t.support.opacity === !1 ? te + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), g = o(ae, "Overlay").hide(), S = o(ae, "LoadingOverlay").add(o(ae, "LoadingGraphic")), y = o(ae, "Wrapper"), v = o(ae, "Content").append(F = o(ae, "Title"), I = o(ae, "Current"), P = t('<button type="button"/>').attr({
            id: te + "Previous"
        }), R = t('<button type="button"/>').attr({
            id: te + "Next"
        }), M = o("button", "Slideshow"), S, K = t('<button type="button"/>').attr({
            id: te + "Close"
        })), y.append(o(ae).append(o(ae, "TopLeft"), b = o(ae, "TopCenter"), o(ae, "TopRight")), o(ae, !1, "clear:left").append(C = o(ae, "MiddleLeft"), v, T = o(ae, "MiddleRight")), o(ae, !1, "clear:left").append(o(ae, "BottomLeft"), k = o(ae, "BottomCenter"), o(ae, "BottomRight"))).find("div div").css({
            "float": "left"
        }), L = o(ae, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), O = R.add(P).add(I).add(M), t(e.body).append(g, x.append(y, L)))
    }

    function m() {
        function i(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.control || (t.preventDefault(), f(this))
        }
        return x ? (X || (X = !0, R.click(function() {
            J.next()
        }), P.click(function() {
            J.prev()
        }), K.click(function() {
            J.close()
        }), g.click(function() {
            _.overlayClose && J.close()
        }), t(e).bind("keydown." + te, function(t) {
            var e = t.keyCode;
            $ && _.escKey && 27 === e && (t.preventDefault(), J.close()), $ && _.arrowKey && H[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), R.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + te, "." + ee, i) : t("." + ee).live("click." + te, i)), !0) : !1
    }

    function w() {
        var e, n, r, a = J.prep,
            u = ++de;
        q = !0, U = !1, A = H[j], d(), c(le), c(oe, _.onLoad), _.h = _.height ? h(_.height, "y") - N - D : _.innerHeight && h(_.innerHeight, "y"), _.w = _.width ? h(_.width, "x") - z - B : _.innerWidth && h(_.innerWidth, "x"), _.mw = _.w, _.mh = _.h, _.maxWidth && (_.mw = h(_.maxWidth, "x") - z - B, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.maxHeight && (_.mh = h(_.maxHeight, "y") - N - D, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.href, Q = setTimeout(function() {
            S.show()
        }, 100), _.inline ? (r = o(ae).hide().insertBefore(t(e)[0]), se.one(le, function() {
            r.replaceWith(W.children())
        }), a(t(e))) : _.iframe ? a(" ") : _.html ? a(_.html) : l(_, e) ? (e = s(_, e), t(U = new Image).addClass(te + "Photo").bind("error", function() {
            _.title = !1, a(o(ae, "Error").html(_.imgError))
        }).one("load", function() {
            var e;
            u === de && (U.alt = t(A).attr("alt") || t(A).attr("data-alt") || "", _.retinaImage && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), _.scalePhotos && (n = function() {
                U.height -= U.height * e, U.width -= U.width * e
            }, _.mw && U.width > _.mw && (e = (U.width - _.mw) / U.width, n()), _.mh && U.height > _.mh && (e = (U.height - _.mh) / U.height, n())), _.h && (U.style.marginTop = Math.max(_.mh - U.height, 0) / 2 + "px"), H[1] && (_.loop || H[j + 1]) && (U.style.cursor = "pointer", U.onclick = function() {
                J.next()
            }), U.style.width = U.width + "px", U.style.height = U.height + "px", setTimeout(function() {
                a(U)
            }, 1))
        }), setTimeout(function() {
            U.src = e
        }, 1)) : e && L.load(e, _.data, function(e, i) {
            u === de && a("error" === i ? o(ae, "Error").html(_.xhrError) : t(this).contents())
        })
    }
    var g, x, y, v, b, C, T, k, H, E, W, L, S, F, I, M, R, P, K, O, _, D, B, N, z, A, j, U, $, q, G, Q, J, V, X, Y = {
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            inline: !1,
            html: !1,
            iframe: !1,
            fastIframe: !0,
            photo: !1,
            href: !1,
            title: !1,
            rel: !1,
            opacity: .9,
            preloading: !0,
            className: !1,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            open: !1,
            returnFocus: !0,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0
        }, Z = "colorbox",
        te = "cbox",
        ee = te + "Element",
        ie = te + "_open",
        oe = te + "_load",
        ne = te + "_complete",
        re = te + "_cleanup",
        he = te + "_closed",
        le = te + "_purge",
        se = t("<a/>"),
        ae = "div",
        de = 0;
    t.colorbox || (t(p), J = t.fn[Z] = t[Z] = function(e, i) {
        var o = this;
        if (e = e || {}, p(), m()) {
            if (t.isFunction(o)) o = t("<a/>"), e.open = !0;
            else if (!o[0]) return o;
            i && (e.onComplete = i), o.each(function() {
                t.data(this, Z, t.extend({}, t.data(this, Z) || Y, e))
            }).addClass(ee), (t.isFunction(e.open) && e.open.call(o) || e.open) && f(o[0])
        }
        return o
    }, J.position = function(t, e) {
        function i(t) {
            b[0].style.width = k[0].style.width = v[0].style.width = parseInt(t.style.width, 10) - B + "px", v[0].style.height = C[0].style.height = T[0].style.height = parseInt(t.style.height, 10) - D + "px"
        }
        var o, r, l, s = 0,
            a = 0,
            d = x.offset();
        E.unbind("resize." + te), x.css({
            top: -9e4,
            left: -9e4
        }), r = E.scrollTop(), l = E.scrollLeft(), _.fixed ? (d.top -= r, d.left -= l, x.css({
            position: "fixed"
        })) : (s = r, a = l, x.css({
            position: "absolute"
        })), a += _.right !== !1 ? Math.max(E.width() - _.w - z - B - h(_.right, "x"), 0) : _.left !== !1 ? h(_.left, "x") : Math.round(Math.max(E.width() - _.w - z - B, 0) / 2), s += _.bottom !== !1 ? Math.max(n() - _.h - N - D - h(_.bottom, "y"), 0) : _.top !== !1 ? h(_.top, "y") : Math.round(Math.max(n() - _.h - N - D, 0) / 2), x.css({
            top: d.top,
            left: d.left,
            visibility: "visible"
        }), t = x.width() === _.w + z && x.height() === _.h + N ? 0 : t || 0, y[0].style.width = y[0].style.height = "9999px", o = {
            width: _.w + z + B,
            height: _.h + N + D,
            top: s,
            left: a
        }, 0 === t && x.css(o), x.dequeue().animate(o, {
            duration: t,
            complete: function() {
                i(this), q = !1, y[0].style.width = _.w + z + B + "px", y[0].style.height = _.h + N + D + "px", _.reposition && setTimeout(function() {
                    E.bind("resize." + te, J.position)
                }, 1), e && e()
            },
            step: function() {
                i(this)
            }
        })
    }, J.resize = function(t) {
        $ && (t = t || {}, t.width && (_.w = h(t.width, "x") - z - B), t.innerWidth && (_.w = h(t.innerWidth, "x")), W.css({
            width: _.w
        }), t.height && (_.h = h(t.height, "y") - N - D), t.innerHeight && (_.h = h(t.innerHeight, "y")), t.innerHeight || t.height || (W.css({
            height: "auto"
        }), _.h = W.height()), W.css({
            height: _.h
        }), J.position("none" === _.transition ? 0 : _.speed))
    }, J.prep = function(e) {
        function i() {
            return _.w = _.w || W.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
        }

        function n() {
            return _.h = _.h || W.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
        }
        if ($) {
            var h, a = "none" === _.transition ? 0 : _.speed;
            W.empty().remove(), W = o(ae, "LoadedContent").append(e), W.hide().appendTo(L.show()).css({
                width: i(),
                overflow: _.scrolling ? "auto" : "hidden"
            }).css({
                height: n()
            }).prependTo(v), L.hide(), t(U).css({
                "float": "none"
            }), h = function() {
                function e() {
                    t.support.opacity === !1 && x[0].style.removeAttribute("filter")
                }
                var i, n, h = H.length,
                    d = "frameBorder",
                    u = "allowTransparency";
                $ && (n = function() {
                    clearTimeout(Q), S.hide(), c(ne, _.onComplete)
                }, F.html(_.title).add(W).show(), h > 1 ? ("string" == typeof _.current && I.html(_.current.replace("{current}", j + 1).replace("{total}", h)).show(), R[_.loop || h - 1 > j ? "show" : "hide"]().html(_.next), P[_.loop || j ? "show" : "hide"]().html(_.previous), _.slideshow && M.show(), _.preloading && t.each([r(-1), r(1)], function() {
                    var e, i, o = H[this],
                        n = t.data(o, Z);
                    n && n.href ? (e = n.href, t.isFunction(e) && (e = e.call(o))) : e = t(o).attr("href"), e && l(n, e) && (e = s(n, e), i = new Image, i.src = e)
                })) : O.hide(), _.iframe ? (i = o("iframe")[0], d in i && (i[d] = 0), u in i && (i[u] = "true"), _.scrolling || (i.scrolling = "no"), t(i).attr({
                    src: _.href,
                    name: (new Date).getTime(),
                    "class": te + "Iframe",
                    allowFullScreen: !0,
                    webkitAllowFullScreen: !0,
                    mozallowfullscreen: !0
                }).one("load", n).appendTo(W), se.one(le, function() {
                    i.src = "//about:blank"
                }), _.fastIframe && t(i).trigger("load")) : n(), "fade" === _.transition ? x.fadeTo(a, 1, e) : e())
            }, "fade" === _.transition ? x.fadeTo(a, 0, function() {
                J.position(0, h)
            }) : J.position(a, h)
        }
    }, J.next = function() {
        !q && H[1] && (_.loop || H[j + 1]) && (j = r(1), f(H[j]))
    }, J.prev = function() {
        !q && H[1] && (_.loop || j) && (j = r(-1), f(H[j]))
    }, J.close = function() {
        $ && !G && (G = !0, $ = !1, c(re, _.onCleanup), E.unbind("." + te), g.fadeTo(_.fadeOut || 0, 0), x.stop().fadeTo(_.fadeOut || 0, 0, function() {
            x.add(g).css({
                opacity: 1,
                cursor: "auto"
            }).hide(), c(le), W.empty().remove(), setTimeout(function() {
                G = !1, c(he, _.onClosed)
            }, 1)
        }))
    }, J.remove = function() {
        x && (x.stop(), t.colorbox.close(), x.stop().remove(), g.remove(), G = !1, x = null, t("." + ee).removeData(Z).removeClass(ee), t(e).unbind("click." + te))
    }, J.element = function() {
        return t(A)
    }, J.settings = Y)
})(jQuery, document, window);

jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});

/*
 * jQuery liActualSize v 1.0
 * http://mmmagnit.ks.ua
 *
 * Copyright 2012, Linnik Yura
 * Free to use
 *
 * Augest 2012
 */
/*
width = $('element').actual('width')
height = $('element').actual('height')
outerWidth = $('element').actual('outerWidth')
outerHeight = $('element').actual('outerHeight')
innerWidth = $('element').actual('innerWidth')
innerHeight = $('element').actual('innerHeight')
*/
(function($) {
    $.fn.actual = function() {
        if (arguments.length && typeof arguments[0] == 'string') {
            var dim = arguments[0];
            if (this.is(':visible')) return this[dim]();
            var clone = $(this).clone().css({
                position: 'absolute',
                top: '-9999px',
                visibility: 'hidden'
            }).appendTo('body');
            var s = clone[dim]();
            clone.remove();

            return s;
        };
        return undefined;
    };
}(jQuery));

/*
 * jQuery liValidForm v 10.2 for jquery-1.9.0
 * http://
 *
 * Copyright 2013, Linnik Yura
 * Free to use
 *
 * 09.07.2013
 */
//<form class="validat">
//<input class="valid email">
//.valid [.email, .url, .digits, data-error=""]
//.costumCaptcha (если есть елемент с таким классом, програмно каптча не создается)
//jquery 1.9.0
//jquery ui 1.10.1

jQuery.fn.liValidForm = function(options) {
    // настройки по умолчанию
    var o = jQuery.extend({
        valid: 'valid', //valid element selector 
        r: 'r', //mandatory element selector 
        row: 'row', //form str selector 
        noValid: 'noValid', //noValid element selector 
        captcha: false, //'slider', 'code' or false
        capLabel: '',
        capError: ''
    }, options);

    return this.each(function() {

        var form = $(this);
        var but = $('.submit', form);
        var butWrap = but.closest('.row');
        var capLabel;
        var capError;

        var createCpatcha = function() {
            if (o.captcha == 'code') {

                capLabel = 'Введите код';
                capError = 'Неправильно введен проверочный код'
                if (o.capLabel) {
                    capLabel = o.capLabel
                }
                if (o.capError) {
                    capError = o.capError
                }
                captchaHtml =
                    '<div class="row">' +
                    '<label class="label">' + capLabel + '</label>' +
                    '<div class="controls">' +
                    '<input class="captchaInput valid" data-error="' + capError + '" type="text" name="hislo" maxlength="4" size="4"/>' +
                    '<img class="captchaPic" src="pic/securimage_show.png" id="image" />' +
                    '<a class="refreshCptcha" title="Обновить изображение" href="#">update image</a>' +
                    '</div>' +
                    '</div>'
            }
            if (o.captcha == 'slider') {

                capLabel = 'Передвиньте ползунок в правый край';
                capError = 'Позиция ползунка неправильна'
                if (o.capLabel) {
                    capLabel = o.capLabel
                }
                if (o.capError) {
                    capError = o.capError
                }
                captchaHtml =
                    '<div class="row">' +
                    '<label class="label">' + capLabel + '</label>' +
                    '<div class="controls">' +
                    '<input type="hidden" class="amount" />' +
                    '<input type="text"  class="valid captchaView" data-error="' + capError + '">' +
                    '<div class="slWrap">' +
                    '<div class="slider"></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>	'
            }
            butWrap.before(captchaHtml)
        }
        if (!$('.costumCaptcha', form).length) {
            //createCpatcha()
        }



        var captchaView = $('.captchaView', form).val('');
        var amount = $('.amount', form);
        var capSlider = $('.slider', form);
        var slWrap = $('.slWrap', form).css({
            width: (captchaView.width() - 29) + 'px'
        });
        var fLabel = $('.label', form);
        var valid_form = $('.' + o.valid, form);
        var mand_el = valid_form.length; //Кол-во обязательных эл-тов



        var butTop = 0;
        if (but.css('top') != 'auto') {
            butTop = but.css('top');
        }

        //Создаем щит для кнопки
        var bw = but.actual('outerWidth');
        var bh = but.actual('outerHeight');

        var psevdo_but = $('<div>').css({
            width: bw,
            height: bh,
            left: 0,
            top: butTop,
            position: 'absolute',
            zIndex: '100',
            marginLeft: but.css('marginLeft'),
            marginTop: but.css('marginTop'),
            opacity: '0.1'
        }).addClass('psevdo_but');






        var servCaptcha = 9668; //offline test value
        var data = 1;
        var captchaHtml = '';

        var addErrorFunc = function(elError) {
            if (!elError.closest('.controls').find('.errorBox').length) {
                if (elError.is('[data-error]')) {
                    var errorText = 'Неправильно заполнено поле!';
                    if (elError.data('error') != '') {
                        errorText = elError.data('error')
                    }
                    var errorBox = $('<div>').addClass('errorBox').hide().html(errorText).appendTo(elError.closest('.controls'));
                    errorBox.slideDown()
                }
            }
        };
        var removeErrorFunc = function(elError) {
            elError.closest('.controls').find('.errorBox').slideUp(function() {
                $(this).remove();
            });
        }

        //email
            function ValidEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            }

            //url
            function ValidUrl(urlAddress) {
                var pattern = new RegExp(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
                return pattern.test(urlAddress);
            }

            //digits
            function ValidDigits(dig) {
                var pattern = new RegExp(/^\d+$/);
                return pattern.test(dig);
            }

            //radio
            function ValidRadio(el_r) {
                var el_name = el_r.attr('name')
                var check = el_r.closest("form").find('[name=' + el_name + ']').filter(':checked').length
                if (check > 0) {
                    check_el = true
                } else {
                    check_el = false
                }
                return check_el
            }


        var add_w = function(el_f) {
            el_f.addClass('wrong');
        }
        var remove_w = function(el_f) {
            el_f.removeClass('wrong');
        }
        var add_c = function(el_f) {
            el_f.addClass('indicator');
            addErrorFunc(el_f);
        }
        var remove_c = function(el_f) {
            el_f.removeClass('indicator');
            removeErrorFunc(el_f);
        }


        var wrong = function() {
            var wrong_el = $('.wrong', form).length //Кол-во незаполненых эл-тов

            if (wrong_el > 0) {
                but.addClass('disabled').css({
                    opacity: '0.5'
                });
                if (!$('.psevdo_but', form).length)
                    but.after(psevdo_but)
            } else {
                but.removeClass('disabled').css({
                    opacity: '1'
                });
                $('.psevdo_but', form).remove()
            }
        }

        var valider = function(z_el_form, z_el_val) {

            var z_el_val = $.trim(z_el_form.val());

            if (z_el_val != '') {

                if (z_el_form.is(':not(".email")') && z_el_form.is(':not(".url")') && z_el_form.is(':not(".digits")') && z_el_form.is(':not("[name=hislo]")') && z_el_form.is(':not("[type=radio]")') && z_el_form.is(':not("[type=checkbox]")') && z_el_form.is(':not("select")')) {

                    if (z_el_form.next('.fakefile').length) {
                        remove_w(z_el_form.next('.fakefile').find('input'));
                        remove_c(z_el_form.next('.fakefile').find('input'));
                    } else {
                        remove_w(z_el_form);
                        remove_c(z_el_form);
                    }
                } else {
                    //if select
                    if (z_el_form.is('select')) {
                        if (!z_el_form.find('option:selected').is('.placeholder')) {
                            remove_w(z_el_form);
                            remove_c(z_el_form);
                        } else {
                            add_w(z_el_form);
                            add_c(z_el_form);
                        }
                    }

                    //if email
                    if (z_el_form.is('.email')) {
                        if (ValidEmail(z_el_val)) {

                            remove_w(z_el_form);
                            remove_c(z_el_form);
                        } else {
                            add_w(z_el_form);
                            add_c(z_el_form);
                        }
                    }
                    //if url
                    if (z_el_form.is('.url')) {
                        if (ValidUrl(z_el_val)) {
                            remove_w(z_el_form);
                            remove_c(z_el_form);
                        } else {
                            add_w(z_el_form);
                            add_c(z_el_form);
                        }
                    }
                    //if digits
                    if (z_el_form.is('.digits')) {
                        if (ValidDigits(z_el_val)) {
                            remove_w(z_el_form);
                            remove_c(z_el_form);
                        } else {
                            add_w(z_el_form);
                            add_c(z_el_form);
                        }
                    }

                    //if radio
                    if (z_el_form.is('[type=radio]') || z_el_form.is('[type=checkbox]')) {
                        if (ValidRadio(z_el_form)) {
                            $('[name=' + z_el_form.attr('name') + ']', form).each(function() {
                                $(this).removeClass('wrong').removeClass('indicator');
                                removeErrorFunc($(this));
                            })
                        } else {
                            $('[name=' + z_el_form.attr('name') + ']', form).each(function() {
                                $(this).addClass('wrong').addClass('indicator');
                                addErrorFunc($(this));
                            })

                        }
                    }


                    //if captcha
                    if (z_el_form.is('.captchaInput')) {
                        if (o.captcha) {

                            if (o.captcha == 'code' && z_el_val.length == 4) {

                                /*
									$.get("/ajax/check_captcha.php?num="+z_el_val, function(data){
									*/

                                if (data == 1) {
                                    z_el_form.removeClass('wrong');
                                    z_el_form.removeClass('indicator');
                                    removeErrorFunc(z_el_form);
                                } else {
                                    z_el_form.addClass('wrong');
                                    z_el_form.addClass('indicator');
                                    addErrorFunc(z_el_form);
                                }
                                wrong()
                                /*
									});	
									*/
                            } else {
                                add_w(z_el_form);
                                add_c(z_el_form);
                            }

                        }
                    }


                }
            } else {
                if (z_el_form.next('.fakefile').length) {
                    add_w(z_el_form.next('.fakefile').find('input'));
                    add_c(z_el_form.next('.fakefile').find('input'));
                } else {
                    add_w(z_el_form);
                    add_c(z_el_form);
                }
            }
            wrong()
        }

        var validMain = function() {

            fLabel.each(function() {
                $('<span>').addClass(o.r).html('&nbsp;').appendTo($(this));
            })
            $('.' + o.noValid).each(function() {
                $(this).closest('.' + o.row).find('.' + o.r).html('&nbsp;').removeClass('mand');
            })


            valid_form.not('.' + o.noValid).blur(function() {
                valider($(this), $(this).val())
            })
            valid_form.not('.' + o.noValid).keyup(function() {
                valider($(this), $(this).val())
            })
            valid_form.not('.' + o.noValid).change(function() {
                valider($(this), $(this).val())
            })

            psevdo_but.click(function() {
                valid_form.not('.' + o.noValid).each(function() {
                    valider($(this), $(this).val())
                })
                return false;
            })

            var mySubmit = function() {
                valid_form.not('.' + o.noValid).each(function() {
                    valider($(this), $(this).val());
                });
                if (form.find('.valid.wrong').size() == 0) {
                    form.trigger('submit');
                }
            };

            $('*', form).on('keydown', function(e) {

                if (e.keyCode == 13 && !$(e.target).is('textarea')) {
                    return false;
                }

            });

            but.on('click', function() {
                mySubmit();
                return false;
            });

            valid_form.not('.' + o.noValid).each(function() {
                $(this).closest('.' + o.row).find('.r').html('*').addClass('mand');
                var el_form = $(this);
                var el_val = $.trim(el_form.val());
                if (el_val != '') {
                    if (el_form.is(':not(".email")') && el_form.is(':not(".url")') && el_form.is(':not(".digits")') && el_form.is(':not("[name=hislo]")') && el_form.is(':not("[type=radio]")') && el_form.is(':not("[type=checkbox]")') && el_form.is(':not("select")')) {
                        if (el_form.next('.fakefile').length) {
                            remove_w(el_form.next('.fakefile').find('input'));
                        } else {
                            remove_w(el_form);
                        }
                    } else {
                        //if select
                        if (el_form.is('select')) {
                            if (!el_form.find('option:selected').is('.placeholder')) {
                                remove_w(el_form);
                            } else {
                                add_w(el_form);
                            }
                        }

                        //if email
                        if (el_form.is('.email')) {
                            if (ValidEmail(el_val)) {
                                remove_w(el_form);
                            } else {
                                add_w(el_form);
                            }
                        }
                        //if url
                        if (el_form.is('.url')) {
                            if (ValidUrl(el_val)) {
                                remove_w(el_form);
                            } else {
                                add_w(el_form);
                            }
                        }
                        //if digits
                        if (el_form.is('.date')) {
                            if (ValidDate(el_val)) {
                                remove_w(el_form);
                            } else {
                                add_w(el_form);
                            }
                        }

                        //if radio
                        if (el_form.is('[type=radio]') || el_form.is('[type=checkbox]')) {
                            if (ValidRadio(el_form)) {
                                $('[name=' + el_form.attr('name') + ']', form).each(function() {
                                    $(this).removeClass('wrong');
                                })
                            } else {
                                $('[name=' + el_form.attr('name') + ']', form).each(function() {
                                    $(this).addClass('wrong');
                                })
                            }
                        }

                        if (el_form.is('.captchaInput')) {
                            if (o.captcha) {


                                if (o.captcha == 'code' && el_val.length == 4) {

                                    /*
									$.get("/ajax/check_captcha.php?num="+el_val, function(data){
									*/

                                    if (data == 1) {
                                        remove_w(el_form);
                                    } else {
                                        add_w(el_form);
                                    }

                                    /*	
									});	
									*/

                                } else {
                                    add_w(el_form);
                                }
                            }
                        }


                    }
                } else {
                    if (el_form.next('.fakefile').length) {
                        el_form.next('.fakefile').find('input').addClass('wrong');
                    } else {
                        el_form.addClass('wrong');
                    }
                }
            })




            wrong()


        }

        var captchaTest = function(ui) {
            var uiHandleLeft = $(ui.handle).attr('style').split('%')[0].split(' ')[1];
            var hideVal = amount.val()
            if (uiHandleLeft == 100 && hideVal == servCaptcha) {
                remove_w(captchaView);
                remove_c(captchaView);
                captchaView.val('Вы прошли проверку');
                valider(captchaView, captchaView.val());
            } else {
                add_w(captchaView);
                add_c(captchaView);
                captchaView.val('');
                valider(captchaView, captchaView.val());
            }
        }
        var sliderIni = function() {
            capSlider.slider({
                value: 0,
                min: 0,
                max: servCaptcha,
                step: 0.1,
                slide: function(event, ui) {
                    amount.val(ui.value);
                },
                stop: function(event, ui) {
                    captchaTest(ui);
                }
            });
            amount.val(capSlider.slider('value'));
        }
        if (o.captcha) {
            if (o.captcha == 'slider') {
                /*
				$.ajax({
					url: "testCaptcha.html", //Здесь надо генерировать число от 1000 до 9999 и передавать его обратно
					cache: false,
					success: function(data){
						servCaptcha = data;
				*/
                sliderIni()
                validMain()
                /*		
					}
				})
				*/
            }
            if (o.captcha == 'code') {
                validMain()
            }
        } else {
            validMain()
        }
    });
};

$(document).ready(function() {

    //start file
    $('.file').each(function() {
        var f = $(this);
        var fileItem = f.closest('.file_item');
        var fakeBut = $('.fakebut', fileItem);
        var rightPos = fileItem.width() - (fakeBut.position().left + fakeBut.outerWidth());
        f.css({
            right: rightPos
        });
    });

    $(document).on('change', '.file', function() {
        var item_wrap = $(this).closest('.row');
        var file = $(this).val();
        var reWin = /.*\\(.*)/;
        var fileTitle = file.replace(reWin, "$1"); //w*s
        var reUnix = /.*\/(.*)/;
        var fileTitle = fileTitle.replace(reUnix, "$1"); //*nix

        $('.fakefile input', item_wrap).val(fileTitle);
    });
    //end file  

    //sart placeholder
    if (!Modernizr.input.placeholder) {
        $('input[placeholder]').each(function() {
            var el = $(this);
            var ph = el.attr('placeholder');
            if (el.val() === '') {
                el.val(ph);
            }
            el.focus(function() {
                if (el.val() === ph) {
                    el.val('');
                }
            }).blur(function() {
                if (el.val() === '') {
                    el.val(ph);
                }
            });
        });
    }
    //end placeholder

    //start submit
    $('a.submit').bind('click', function() {
        $(this).closest('form').submit();
        return false;
    });
    //end submit

    //start vertical middle
    $('.middle_inner').each(function() {
        $('<span>').addClass('helper').appendTo($(this).parent());
    });
    //end vertical middle

    //start navigator
    $('.navigator a').each(function() {
        var nav_el = $(this);
        nav_el.after('<span>&nbsp;/&nbsp;</span>').css({
            padding: '0'
        });
    });
    //end navigator

    //start form_style
    $('.form_style').each(function() {
        var label_w = $('label', $(this)).outerWidth();
        $('.sdvig', $(this)).css({
            marginLeft: label_w + 10
        });
    });

    $('.footer_right a').on('mouseenter', function() {
        $(this).addClass('anim');
    }).on('mouseleave', function() {
        $(this).on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
            $(this).removeClass('anim');
        });
    });
    //end gallery

    //start content pic
    $('.content>img,.content>p>img').each(function() {
        var float = $(this).attr('style');
        var align = $(this).attr('align');
        if (float == 'float: left;' || float == 'float: left' || float == 'float:left;' || float == 'float:left' || align == 'left') {
            $(this).addClass('imgLeft');
        }
        if (float == 'float: right;' || float == 'float: right' || float == 'float:right;' || float == 'float:right' || align == 'right') {
            $(this).addClass('imgRight');
        }
    });
    //end content pic
});


//add more link @version 1.2
jQuery.fn.addtocopy = function(usercopytxt) {
    var options = {
        htmlcopytxt: '<br>More: <a href="' + window.location.href + '">' + window.location.href + '</a><br>',
        minlen: 25,
        addcopyfirst: false
    };
    $.extend(options, usercopytxt);
    var copy_sp = document.createElement('span');
    copy_sp.id = 'ctrlcopy';
    copy_sp.innerHTML = options.htmlcopytxt;
    return this.each(function() {
        $(this).mousedown(function() {
            $('#ctrlcopy').remove();
        });
        $(this).mouseup(function() {
            if (window.getSelection) {
                var slcted = window.getSelection();
                var seltxt = slcted.toString();
                if (!seltxt || seltxt.length < options.minlen) return;
                var nslct = slcted.getRangeAt(0);
                seltxt = nslct.cloneRange();
                seltxt.collapse(options.addcopyfirst);
                seltxt.insertNode(copy_sp);
                if (!options.addcopyfirst) nslct.setEndAfter(copy_sp);
                slcted.removeAllRanges();
                slcted.addRange(nslct);
            } else if (document.selection) {
                var slcted = document.selection;
                var nslct = slcted.createRange();
                var seltxt = nslct.text;
                if (!seltxt || seltxt.length < options.minlen) return;
                seltxt = nslct.duplicate();
                seltxt.collapse(options.addcopyfirst);
                seltxt.pasteHTML(copy_sp.outerHTML);
                if (!options.addcopyfirst) {
                    nslct.setEndPoint("EndToEnd", seltxt);
                    nslct.select();
                }
            }
        });
    });
};

//debug()
var debug = function(f) {
    if (window.console !== undefined) {
        console.log(f);
    }
};

/*
	Paginator 3000
	- idea by ecto (ecto.ru)
	- coded by karaboz (karaboz.ru)

	How to implement:
	<div class="paginator" id="paginator_example"></div>
	<script type="text/javascript">
		paginator_example = new Paginator('paginator_example', 2048, 10, 1, 'http://www.yourwebsite.com/pages/');
	</script>

	Be sure that width of your paginator does not change after page is loaded
	If it happens you must call Paginator.resizePaginator(paginator_example) function to redraw paginator

*/

/*
	Paginator class
		paginatorHolderId - id of the html element where paginator will be placed as innerHTML (String): required
		pagesTotal - number of pages (Number, required)
		pagesSpan - number of pages which are visible at once (Number, required) 
		pageCurrent - the number of current page (Number, required)
		baseUrl - the url of the website (String)
			if baseUrl is 'http://www.yourwebsite.com/pages/' the links on the pages will be:
			http://www.yourwebsite.com/pages/1, http://www.yourwebsite.com/pages/2,	etc
*/
var Paginator = function(paginatorHolderId, pagesTotal, pagesSpan, pageCurrent, baseUrl) {
    if (!document.getElementById(paginatorHolderId) || !pagesTotal || !pagesSpan) return false;

    this.inputData = {
        paginatorHolderId: paginatorHolderId,
        pagesTotal: pagesTotal,
        pagesSpan: pagesSpan < pagesTotal ? pagesSpan : pagesTotal,
        pageCurrent: pageCurrent,
        baseUrl: baseUrl ? baseUrl : '/pages/'
    };

    this.html = {
        holder: null,

        table: null,
        trPages: null,
        trScrollBar: null,
        tdsPages: null,

        scrollBar: null,
        scrollThumb: null,

        pageCurrentMark: null
    };


    this.prepareHtml();

    this.initScrollThumb();
    this.initPageCurrentMark();
    this.initEvents();

    this.scrollToPageCurrent();
}

/*
	Set all .html properties (links to dom objects)
*/
Paginator.prototype.prepareHtml = function() {

    this.html.holder = document.getElementById(this.inputData.paginatorHolderId);
    this.html.holder.innerHTML = this.makePagesTableHtml();

    this.html.table = this.html.holder.getElementsByTagName('table')[0];

    var trPages = this.html.table.getElementsByTagName('tr')[0];
    this.html.tdsPages = trPages.getElementsByTagName('td');

    this.html.scrollBar = getElementsByClassName(this.html.table, 'div', 'scroll_bar')[0];
    this.html.scrollThumb = getElementsByClassName(this.html.table, 'div', 'scroll_thumb')[0];
    this.html.pageCurrentMark = getElementsByClassName(this.html.table, 'div', 'current_page_mark')[0];

    // hide scrollThumb if there is no scroll (we see all pages at once)
    if (this.inputData.pagesSpan == this.inputData.pagesTotal) {
        addClass(this.html.holder, 'fullsize');
    }
}

/*
	Make html for pages (table) 
*/
Paginator.prototype.makePagesTableHtml = function() {
    var tdWidth = (100 / this.inputData.pagesSpan) + '%';

    var html = '' +
        '<table width="100%">' +
        '<tr>'
    for (var i = 1; i <= this.inputData.pagesSpan; i++) {
        html += '<td width="' + tdWidth + '"></td>';
    }
    html += '' +
        '</tr>' +
        '<tr>' +
        '<td colspan="' + this.inputData.pagesSpan + '">' +
        '<div class="scroll_bar">' +
        '<div class="scroll_trough"></div>' +
        '<div class="scroll_thumb">' +
        '<div class="scroll_knob"></div>' +
        '</div>' +
        '<div class="current_page_mark"></div>' +
        '</div>' +
        '</td>' +
        '</tr>' +
        '</table>';

    return html;
}

/*
	Set all needed properties for scrollThumb and it's width
*/
Paginator.prototype.initScrollThumb = function() {
    this.html.scrollThumb.widthMin = '8'; // minimum width of the scrollThumb (px)
    this.html.scrollThumb.widthPercent = this.inputData.pagesSpan / this.inputData.pagesTotal * 100;

    this.html.scrollThumb.xPosPageCurrent = (this.inputData.pageCurrent - Math.round(this.inputData.pagesSpan / 2)) / this.inputData.pagesTotal * this.html.table.offsetWidth;
    this.html.scrollThumb.xPos = this.html.scrollThumb.xPosPageCurrent;

    this.html.scrollThumb.xPosMin = 0;
    this.html.scrollThumb.xPosMax;

    this.html.scrollThumb.widthActual;

    this.setScrollThumbWidth();

}

Paginator.prototype.setScrollThumbWidth = function() {
    // Try to set width in percents
    this.html.scrollThumb.style.width = this.html.scrollThumb.widthPercent + "%";

    // Fix the actual width in px
    this.html.scrollThumb.widthActual = this.html.scrollThumb.offsetWidth;

    // If actual width less then minimum which we set
    if (this.html.scrollThumb.widthActual < this.html.scrollThumb.widthMin) {
        this.html.scrollThumb.style.width = this.html.scrollThumb.widthMin + 'px';
    }

    this.html.scrollThumb.xPosMax = this.html.table.offsetWidth - this.html.scrollThumb.widthActual;
}

Paginator.prototype.moveScrollThumb = function() {
    this.html.scrollThumb.style.left = this.html.scrollThumb.xPos + "px";
}


/*
	Set all needed properties for pageCurrentMark, it's width and move it
*/
Paginator.prototype.initPageCurrentMark = function() {
    this.html.pageCurrentMark.widthMin = '3';
    this.html.pageCurrentMark.widthPercent = 100 / this.inputData.pagesTotal;
    this.html.pageCurrentMark.widthActual;

    this.setPageCurrentPointWidth();
    this.movePageCurrentPoint();
}

Paginator.prototype.setPageCurrentPointWidth = function() {
    // Try to set width in percents
    this.html.pageCurrentMark.style.width = this.html.pageCurrentMark.widthPercent + '%';

    // Fix the actual width in px
    this.html.pageCurrentMark.widthActual = this.html.pageCurrentMark.offsetWidth;

    // If actual width less then minimum which we set
    if (this.html.pageCurrentMark.widthActual < this.html.pageCurrentMark.widthMin) {
        this.html.pageCurrentMark.style.width = this.html.pageCurrentMark.widthMin + 'px';
    }
}

Paginator.prototype.movePageCurrentPoint = function() {
    if (this.html.pageCurrentMark.widthActual < this.html.pageCurrentMark.offsetWidth) {
        this.html.pageCurrentMark.style.left = (this.inputData.pageCurrent - 1) / this.inputData.pagesTotal * this.html.table.offsetWidth - this.html.pageCurrentMark.offsetWidth / 2 + "px";
    } else {
        this.html.pageCurrentMark.style.left = (this.inputData.pageCurrent - 1) / this.inputData.pagesTotal * this.html.table.offsetWidth + "px";
    }
}



/*
	Drag, click and resize events
*/
Paginator.prototype.initEvents = function() {
    var _this = this;

    this.html.scrollThumb.onmousedown = function(e) {
        if (!e) var e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation) e.stopPropagation();

        var dx = getMousePosition(e).x - this.xPos;
        document.onmousemove = function(e) {
            if (!e) var e = window.event;
            _this.html.scrollThumb.xPos = getMousePosition(e).x - dx;

            // the first: draw pages, the second: move scrollThumb (it was logically but ie sucks!)
            _this.moveScrollThumb();
            _this.drawPages();


        }
        document.onmouseup = function() {
            document.onmousemove = null;
            _this.enableSelection();
        }
        _this.disableSelection();
    }

    this.html.scrollBar.onmousedown = function(e) {
        if (!e) var e = window.event;
        if (matchClass(_this.paginatorBox, 'fullsize')) return;

        _this.html.scrollThumb.xPos = getMousePosition(e).x - getPageX(_this.html.scrollBar) - _this.html.scrollThumb.offsetWidth / 2;

        _this.moveScrollThumb();
        _this.drawPages();


    }

    // Comment the row beneath if you set paginator width fixed
    addEvent(window, 'resize', function() {
        Paginator.resizePaginator(_this)
    });
}

/*
	Redraw current span of pages
*/
Paginator.prototype.drawPages = function() {
    var percentFromLeft = this.html.scrollThumb.xPos / (this.html.table.offsetWidth);
    var cellFirstValue = Math.round(percentFromLeft * this.inputData.pagesTotal);

    var html = "";
    // drawing pages control the position of the scrollThumb on the edges!
    if (cellFirstValue < 1) {
        cellFirstValue = 1;
        this.html.scrollThumb.xPos = 0;
        this.moveScrollThumb();
    } else if (cellFirstValue >= this.inputData.pagesTotal - this.inputData.pagesSpan) {
        cellFirstValue = this.inputData.pagesTotal - this.inputData.pagesSpan + 1;
        this.html.scrollThumb.xPos = this.html.table.offsetWidth - this.html.scrollThumb.offsetWidth;
        this.moveScrollThumb();
    }

    for (var i = 0; i < this.html.tdsPages.length; i++) {

        var cellCurrentValue = cellFirstValue + i;
        var url = this.inputData.baseUrl + cellCurrentValue;
        if (cellCurrentValue == '1') {
            url = this.inputData.baseUrl.split('page')[0]
        }
        if (cellCurrentValue == this.inputData.pageCurrent) {
            html = "<span>" + "<strong>" + cellCurrentValue + "</strong>" + "</span>";
        } else {

            html = "<span>" + "<a href='" + url + "'>" + cellCurrentValue + "</a>" + "</span>";
        }
        this.html.tdsPages[i].innerHTML = html;
    }
}

/*
	Scroll to current page
*/
Paginator.prototype.scrollToPageCurrent = function() {
    this.html.scrollThumb.xPosPageCurrent = (this.inputData.pageCurrent - Math.round(this.inputData.pagesSpan / 2)) / this.inputData.pagesTotal * this.html.table.offsetWidth;
    this.html.scrollThumb.xPos = this.html.scrollThumb.xPosPageCurrent;

    this.moveScrollThumb();
    this.drawPages();

}



Paginator.prototype.disableSelection = function() {
    document.onselectstart = function() {
        return false;
    }
    this.html.scrollThumb.focus();
}

Paginator.prototype.enableSelection = function() {
    document.onselectstart = function() {
        return true;
    }
}

/*
	Function is used when paginator was resized (window.onresize fires it automatically)
	Use it when you change paginator with DHTML
	Do not use it if you set fixed width of paginator
*/
Paginator.resizePaginator = function(paginatorObj) {

    paginatorObj.setPageCurrentPointWidth();
    paginatorObj.movePageCurrentPoint();

    paginatorObj.setScrollThumbWidth();
    paginatorObj.scrollToPageCurrent();
}




/*
	Global functions which are used
*/
function getElementsByClassName(objParentNode, strNodeName, strClassName) {
    var nodes = objParentNode.getElementsByTagName(strNodeName);
    if (!strClassName) {
        return nodes;
    }
    var nodesWithClassName = [];
    for (var i = 0; i < nodes.length; i++) {
        if (matchClass(nodes[i], strClassName)) {
            nodesWithClassName[nodesWithClassName.length] = nodes[i];
        }
    }
    return nodesWithClassName;
}


function addClass(objNode, strNewClass) {
    replaceClass(objNode, strNewClass, '');
}

function removeClass(objNode, strCurrClass) {
    replaceClass(objNode, '', strCurrClass);
}

function replaceClass(objNode, strNewClass, strCurrClass) {
    var strOldClass = strNewClass;
    if (strCurrClass && strCurrClass.length) {
        strCurrClass = strCurrClass.replace(/\s+(\S)/g, '|$1');
        if (strOldClass.length) strOldClass += '|';
        strOldClass += strCurrClass;
    }
    objNode.className = objNode.className.replace(new RegExp('(^|\\s+)(' + strOldClass + ')($|\\s+)', 'g'), '$1');
    objNode.className += ((objNode.className.length) ? ' ' : '') + strNewClass;
}

function matchClass(objNode, strCurrClass) {
    return (objNode && objNode.className.length && objNode.className.match(new RegExp('(^|\\s+)(' + strCurrClass + ')($|\\s+)')));
}


function addEvent(objElement, strEventType, ptrEventFunc) {
    if (objElement.addEventListener)
        objElement.addEventListener(strEventType, ptrEventFunc, false);
    else if (objElement.attachEvent)
        objElement.attachEvent('on' + strEventType, ptrEventFunc);
}

function removeEvent(objElement, strEventType, ptrEventFunc) {
    if (objElement.removeEventListener) objElement.removeEventListener(strEventType, ptrEventFunc, false);
    else if (objElement.detachEvent) objElement.detachEvent('on' + strEventType, ptrEventFunc);
}


function getPageY(oElement) {
    var iPosY = oElement.offsetTop;
    while (oElement.offsetParent != null) {
        oElement = oElement.offsetParent;
        iPosY += oElement.offsetTop;
        if (oElement.tagName == 'BODY') break;
    }
    return iPosY;
}

function getPageX(oElement) {
    var iPosX = oElement.offsetLeft;
    while (oElement.offsetParent != null) {
        oElement = oElement.offsetParent;
        iPosX += oElement.offsetLeft;
        if (oElement.tagName == 'BODY') break;
    }
    return iPosX;
}

function getMousePosition(e) {
    if (e.pageX || e.pageY) {
        var posX = e.pageX;
        var posY = e.pageY;
    } else if (e.clientX || e.clientY) {
        var posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        var posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x: posX,
        y: posY
    }
}