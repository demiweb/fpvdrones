_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([[10], {
    "+5i3": function (e, t, n) {
    }, "/0+H": function (e, t, n) {
        "use strict";
        t.__esModule = !0, t.isInAmpMode = o, t.useAmp = function () {
            return o(r.default.useContext(a.AmpStateContext))
        };
        var i, r = (i = n("q1tI")) && i.__esModule ? i : {default: i}, a = n("lwAK");

        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.ampFirst,
                n = void 0 !== t && t, i = e.hybrid, r = void 0 !== i && i, a = e.hasQuery, o = void 0 !== a && a;
            return n || r && o
        }
    }, 0: function (e, t, n) {
        n("GcxT"), e.exports = n("nOHt")
    }, "1RBc": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var i, r = (i = n("q1tI")) && i.__esModule ? i : {default: i};

        function a(e) {
            return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function c(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function u(e, t) {
            return (u = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var l = function (e) {
            function t(e) {
                var n, i, r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), i = this, (n = !(r = s(t).call(this, e)) || "object" !== a(r) && "function" !== typeof r ? c(i) : r)._children = [], n._childrenRefs = [], n._transitionData = {}, n._transitionOutCallback = n._transitionOutCallback.bind(c(n)), n
            }

            var n, i, l;
            return function (e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && u(e, t)
            }(t, e), n = t, (i = [{
                key: "componentDidMount", value: function () {
                    this._updateFragment()
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    this._updateFragment()
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    this._update(this.props);
                    var t = r.default.Children.map(this._children, (function (t, n) {
                        return r.default.cloneElement(t, {
                            ref: function (t) {
                                e._childrenRefs[n] = t
                            }
                        })
                    }));
                    return r.default.createElement(r.default.Fragment, null, t)
                }
            }, {
                key: "_updateFragment", value: function () {
                    var e = this.props.fragment;
                    this._transitionData.currentFragment !== e && (this._transitionData.previousFragment = this._transitionData.currentFragment, this._transitionData.currentFragment = e, this.isAppearing = !this._transitionData.previousFragment && this._transitionData.currentFragment, this.isAppearing ? (this._requestImmediateTransitionIn(), this._requestTransitionIn()) : this._requestTransition())
                }
            }, {
                key: "_update", value: function (e) {
                    var t = e.children;
                    t && (this._children.unshift(t), this._children = this._removeDuplicates(this._children, "key"))
                }
            }, {
                key: "_rerender", value: function () {
                    this._previousChildrenLength !== this._children.length && (this._previousChildrenLength = this._children.length, this.forceUpdate())
                }
            }, {
                key: "_removeOldChild", value: function () {
                    this._previousChildrenLength = this._children, this._children.pop(), this._rerender()
                }
            }, {
                key: "_transitionOutCallback", value: function () {
                    this._removeOldChild(), this.props.onExited && this.props.onExited(), this._requestTransitionIn()
                }
            }, {
                key: "_requestImmediateTransitionIn", value: function () {
                    this._triggerImmediateTransitionIn()
                }
            }, {
                key: "_triggerImmediateTransitionIn", value: function () {
                    var e = this._childrenRefs[0];
                    e && e.immediateTransitionIn && e.immediateTransitionIn(this._transitionData)
                }
            }, {
                key: "_requestTransitionIn", value: function () {
                    this._triggerTransitionIn()
                }
            }, {
                key: "_triggerTransitionIn", value: function () {
                    var e = this._childrenRefs[0];
                    e && e.transitionIn && (this.props.onEnter && this.props.onEnter(), e.transitionIn(this._transitionData))
                }
            }, {
                key: "_requestTransition", value: function () {
                    this._triggerTransitionOut()
                }
            }, {
                key: "_triggerTransitionOut", value: function () {
                    if (this._children.length > 1) {
                        var e = this._childrenRefs[1];
                        e && e.transitionOut ? (this._requestImmediateTransitionIn(), e.transitionOut(this._transitionOutCallback, this._transitionData)) : (this._requestImmediateTransitionIn(), this._transitionOutCallback())
                    } else {
                        var t = this._childrenRefs[0];
                        t && t.transitionOut ? t.transitionOut(this._transitionOutCallback, this._transitionData) : this._transitionOutCallback()
                    }
                }
            }, {
                key: "_removeDuplicates", value: function (e, t) {
                    return e.filter((function (e, n, i) {
                        return i.map((function (e) {
                            return e[t]
                        })).indexOf(e[t]) === n
                    }))
                }
            }]) && o(n.prototype, i), l && o(n, l), t
        }(r.default.Component);
        t.default = l
    }, "7W2i": function (e, t, n) {
        var i = n("SksO");
        e.exports = function (e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && i(e, t)
        }
    }, "87Pf": function (e, t, n) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = ((i = n("1RBc")) && i.__esModule ? i : {default: i}).default;
        t.default = r
    }, "8Kt/": function (e, t, n) {
        "use strict";
        n("lSNA");
        t.__esModule = !0, t.defaultHead = l, t.default = void 0;
        var i, r = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== typeof e && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, r, a) : n[r] = e[r]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n("q1tI")), a = (i = n("Xuae")) && i.__esModule ? i : {default: i}, o = n("lwAK"), s = n("FYa8"),
            c = n("/0+H");

        function u() {
            if ("function" !== typeof WeakMap) return null;
            var e = new WeakMap;
            return u = function () {
                return e
            }, e
        }

        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = [r.default.createElement("meta", {charSet: "utf-8"})];
            return e || t.push(r.default.createElement("meta", {name: "viewport", content: "width=device-width"})), t
        }

        function h(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === r.default.Fragment ? e.concat(r.default.Children.toArray(t.props.children).reduce((function (e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }), [])) : e.concat(t)
        }

        var f = ["name", "httpEquiv", "charSet", "itemProp"];

        function d(e, t) {
            return e.reduce((function (e, t) {
                var n = r.default.Children.toArray(t.props.children);
                return e.concat(n)
            }), []).reduce(h, []).reverse().concat(l(t.inAmpMode)).filter(function () {
                var e = new Set, t = new Set, n = new Set, i = {};
                return function (r) {
                    var a = !0, o = !1;
                    if (r.key && "number" !== typeof r.key && r.key.indexOf("$") > 0) {
                        o = !0;
                        var s = r.key.slice(r.key.indexOf("$") + 1);
                        e.has(s) ? a = !1 : e.add(s)
                    }
                    switch (r.type) {
                        case"title":
                        case"base":
                            t.has(r.type) ? a = !1 : t.add(r.type);
                            break;
                        case"meta":
                            for (var c = 0, u = f.length; c < u; c++) {
                                var l = f[c];
                                if (r.props.hasOwnProperty(l)) if ("charSet" === l) n.has(l) ? a = !1 : n.add(l); else {
                                    var h = r.props[l], d = i[l] || new Set;
                                    "name" === l && o || !d.has(h) ? (d.add(h), i[l] = d) : a = !1
                                }
                            }
                    }
                    return a
                }
            }()).reverse().map((function (e, t) {
                var n = e.key || t;
                return r.default.cloneElement(e, {key: n})
            }))
        }

        function p(e) {
            var t = e.children, n = (0, r.useContext)(o.AmpStateContext), i = (0, r.useContext)(s.HeadManagerContext);
            return r.default.createElement(a.default, {
                reduceComponentsToState: d,
                headManager: i,
                inAmpMode: (0, c.isInAmpMode)(n)
            }, t)
        }

        p.rewind = function () {
        };
        var v = p;
        t.default = v
    }, Bnag: function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }, EbDI: function (e, t) {
        e.exports = function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }
    }, FYa8: function (e, t, n) {
        "use strict";
        var i;
        t.__esModule = !0, t.HeadManagerContext = void 0;
        var r = ((i = n("q1tI")) && i.__esModule ? i : {default: i}).default.createContext({});
        t.HeadManagerContext = r
    }, GcxT: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n("IlR1")
        }])
    }, Ijbi: function (e, t, n) {
        var i = n("WkPL");
        e.exports = function (e) {
            if (Array.isArray(e)) return i(e)
        }
    }, IlR1: function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("q1tI"), r = n("nKUr"), a = n("1OyB"), o = n("vuIU"), s = n("JX7q"), c = n("Ji7U"), u = n("md7G"),
            l = n("foSv"), h = n("rePB"), f = (n("+5i3"), n("s+lh"), n("g4pe")), d = n.n(f), p = n("z/o8"),
            v = n("87Pf"), m = n.n(v), g = n("BZnu"), b = n("ap0H"), _ = n("pjWk"), y = n("Bq0P"), j = n("sQf5"),
            O = n("gmiy");

        function w(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var x = ["Are you over", "21 years", "old"], k = "IM 21+", C = "NO", R = {
            title: ["Sorry", "kid!"],
            subtitle: "You don't have the legal age to enter the website",
            copy: "We hope to welcome you in the future"
        }, T = function (e) {
            Object(c.a)(n, e);
            var t = w(n);

            function n() {
                var e;
                return Object(a.a)(this, n), e = t.call(this), Object(h.a)(Object(s.a)(e), "_buttonAcceptHandler", (function () {
                    Object(O.c)(), e._tlOut = p.b.timeline({
                        onComplete: function () {
                            e._animationFinsihed()
                        }
                    }), e._tlOut.to(e.ui.mouth.current, {
                        opacity: 0,
                        duration: .8,
                        ease: "power4.in"
                    }, 0).set(e.ui.buttons.current, {css: {overflow: "hidden"}}, 0).to(e.ui.buttons.current, {
                        opacity: 0,
                        duration: .7,
                        ease: "power4.in"
                    }, 0).to(e.ui.titleOne.current, {
                        y: "150%",
                        duration: .7,
                        ease: "power4.in"
                    }, .2).to(e.ui.titleOne.current, {
                        transformOrigin: "0% 100%",
                        rotate: 5,
                        duration: .9,
                        ease: "power4.in"
                    }, .2).to(e.ui.titleTwo.current, {
                        y: "220%",
                        duration: .7,
                        ease: "power2.in"
                    }, .2).to(e.ui.titleTwo.current, {
                        transformOrigin: " bottom left",
                        rotate: 8,
                        duration: .9,
                        ease: "power2.in"
                    }, .2).to(e.ui.buttonAcceptText.current, {
                        webkitClipPath: "inset(0% 0% 0% 0%)",
                        duration: .4,
                        ease: "power2.inOut"
                    }, 0).to(e.ui.buttonAcceptText.current, {
                        height: 0,
                        duration: .5,
                        ease: "power2.inOut"
                    }, 0).to(e.ui.buttonAccept.current, {
                        rotate: 1.8,
                        duration: 1,
                        ease: "power4.in"
                    }, .2).to(e.ui.buttonAccept.current, {
                        y: "100%",
                        duration: 1,
                        ease: "power4.in"
                    }, .4).to(e.ui.buttonDecline.current, {
                        rotate: 1.2,
                        duration: 1,
                        ease: "power4.in"
                    }, .2).to(e.ui.buttonDecline.current, {
                        y: "100%",
                        duration: 1,
                        ease: "power4.in"
                    }, .4).to(e.ui.el.current, {autoAlpha: 0, duration: .2, ease: "sine.inOut"}, 2)
                })), Object(h.a)(Object(s.a)(e), "_buttonDeclineHandler", (function () {
                    e._tlInDecline = p.b.timeline(), e._tlInDecline.to(e.ui.content.current, {
                        autoAlpha: 0,
                        duration: .5,
                        ease: "power4.out"
                    }, 0).to(e.ui.decline.current, {autoAlpha: 1, duration: 1, ease: "power4.out"}, .5)
                })), e.ui = {
                    el: Object(i.createRef)(),
                    content: Object(i.createRef)(),
                    mouth: Object(i.createRef)(),
                    titleOne: Object(i.createRef)(),
                    titleTwo: Object(i.createRef)(),
                    buttons: Object(i.createRef)(),
                    buttonAccept: Object(i.createRef)(),
                    buttonAcceptText: Object(i.createRef)(),
                    buttonDecline: Object(i.createRef)(),
                    decline: Object(i.createRef)()
                }, e
            }

            return Object(o.a)(n, [{
                key: "componentDidMount", value: function () {
                    g.a.get("age-gate-passed") || (Object(O.a)(), y.a.setBackgroundTransition(j.b.DARK_BLUE), this._setupAnimation())
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this._killTimelines()
                }
            }, {
                key: "render", value: function () {
                    return Object(r.jsx)("div", {
                        ref: this.ui.el, className: "age-gate", children: Object(r.jsxs)("div", {
                            className: "age-gate__container",
                            children: [Object(r.jsx)("div", {
                                ref: this.ui.mouth,
                                className: "age-gate__mouth",
                                children: Object(r.jsx)(_.a, {source: "mouth"})
                            }), Object(r.jsxs)("div", {
                                className: "age-gate__copy", children: [Object(r.jsxs)("div", {
                                    ref: this.ui.content,
                                    className: "age-gate__content",
                                    children: [Object(r.jsxs)("div", {
                                        className: "age-gate__title title",
                                        children: [Object(r.jsx)("div", {
                                            className: "age-gate__title-container",
                                            children: Object(r.jsx)("div", {
                                                ref: this.ui.titleOne,
                                                className: "age-gate__text title__text",
                                                children: x[0]
                                            })
                                        }), Object(r.jsx)("div", {
                                            className: "age-gate__title-container",
                                            children: Object(r.jsxs)("div", {
                                                ref: this.ui.titleTwo,
                                                className: "age-gate__text title__text",
                                                children: [Object(r.jsxs)("span", {
                                                    className: "yellow",
                                                    children: [x[1], " "]
                                                }), x[2]]
                                            })
                                        })]
                                    }), Object(r.jsxs)("div", {
                                        ref: this.ui.buttons,
                                        className: "age-gate__buttons",
                                        children: [Object(r.jsxs)("button", {
                                            ref: this.ui.buttonAccept,
                                            onClick: this._buttonAcceptHandler,
                                            className: "age-gate__button age-gate__button--accept",
                                            children: [Object(r.jsx)("span", {children: k}), Object(r.jsx)("span", {
                                                ref: this.ui.buttonAcceptText,
                                                children: k
                                            })]
                                        }), Object(r.jsxs)("button", {
                                            ref: this.ui.buttonDecline,
                                            onClick: this._buttonDeclineHandler,
                                            className: "age-gate__button age-gate__button--decline",
                                            children: [Object(r.jsx)("span", {children: C}), Object(r.jsx)("span", {children: C})]
                                        })]
                                    })]
                                }), Object(r.jsxs)("div", {
                                    ref: this.ui.decline,
                                    className: "age-gate__decline",
                                    children: [Object(r.jsx)(b.a, {
                                        className: "age-gate__title",
                                        type: "h2",
                                        alignment: "center",
                                        children: Object(r.jsxs)("span", {
                                            children: [R.title[0], " ", Object(r.jsx)("span", {
                                                className: "yellow",
                                                children: R.title[1]
                                            })]
                                        })
                                    }), Object(r.jsx)("p", {
                                        className: "age-gate__subtitle heading-2",
                                        children: R.subtitle
                                    }), Object(r.jsx)("p", {
                                        className: "age-gate__underline",
                                        children: R.copy
                                    }), Object(r.jsx)("hr", {className: "age-gate__line"})]
                                })]
                            })]
                        })
                    })
                }
            }, {
                key: "_setupAnimation", value: function () {
                    this._tlIn = p.b.timeline();
                    this._tlIn.set(this.ui.titleOne.current, {
                        rotate: -5,
                        y: "-100%",
                        transformOrigin: "0% 100%"
                    }, 0).set(this.ui.titleTwo.current, {
                        rotate: -5,
                        y: "-100%",
                        transformOrigin: "0% 100%"
                    }, 0).set(this.ui.buttonAccept.current, {
                        rotate: 1.2,
                        y: "100%",
                        transformOrigin: "0% 100%"
                    }, 0).set(this.ui.buttonDecline.current, {
                        rotate: 1.2,
                        y: "100%",
                        transformOrigin: "0% 100%"
                    }, 0).to(this.ui.el.current, {
                        autoAlpha: 1,
                        duration: .2,
                        ease: "power3.out"
                    }, .8).to(this.ui.mouth.current, {
                        opacity: 1,
                        duration: 1,
                        ease: "power0.out"
                    }, .8).to(this.ui.titleOne.current, {
                        y: "0%",
                        duration: .9,
                        ease: "power4.out"
                    }, 1).to(this.ui.titleOne.current, {
                        rotate: 0,
                        duration: .9,
                        ease: "power4.out"
                    }, 1.4).to(this.ui.titleTwo.current, {
                        y: "0%",
                        duration: .9,
                        ease: "power4.out"
                    }, 1.1).to(this.ui.titleTwo.current, {
                        rotate: 0,
                        duration: .9,
                        ease: "power4.out"
                    }, 1.5).to(this.ui.buttonAccept.current, {
                        y: "0%",
                        duration: .9,
                        ease: "power4.out"
                    }, 1.1).to(this.ui.buttonAccept.current, {
                        rotate: 0,
                        duration: .9,
                        ease: "power4.out"
                    }, 1.5).to(this.ui.buttonDecline.current, {
                        y: "0%",
                        duration: .9,
                        ease: "power4.out"
                    }, 1.1).to(this.ui.buttonDecline.current, {
                        rotate: 0,
                        duration: .9,
                        ease: "power4.out"
                    }, 1.5).set(this.ui.buttons.current, {css: {overflow: "visible"}}, 1.5)
                }
            }, {
                key: "_animationFinsihed", value: function () {
                    Object(O.c)(), g.a.set("age-gate-passed", !0)
                }
            }, {
                key: "_killTimelines", value: function () {
                    this._tlIn && this._tlIn.kill(), this._tlIn = null, this._tlOut && this._tlOut.kill(), this._tlOut = null, this._tlInDecline && this._tlInDecline.kill(), this._tlInDecline = null
                }
            }]), n
        }(i.Component), S = n("ll3m"), E = n("yh64"), z = function () {
            function e(t) {
                Object(a.a)(this, e), this.gl = t, this.fbo = this.gl.createFramebuffer(), this.texture = new E.a(t), this.setSize(window.innerWidth, window.innerHeight), this._initFbo(), this.size = {
                    width: 1,
                    height: 1
                }
            }

            return Object(o.a)(e, [{
                key: "_initFbo", value: function () {
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.texture.handle, 0)
                }
            }, {
                key: "setSize", value: function (e, t) {
                    this.size = {width: e, height: t};
                    var n = this.gl.RGBA, i = this.gl.RGBA, r = this.gl.UNSIGNED_BYTE;
                    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture.handle), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, n, e, t, 0, i, r, null), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE)
                }
            }, {
                key: "getTexture", value: function () {
                    return this.texture
                }
            }, {
                key: "bind", value: function () {
                    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.gl.viewport(0, 0, this.size.width, this.size.height), this.gl.clear(this.gl.COLOR_BUFFER_BIT)
                }
            }]), e
        }(), P = n("ReuC"), D = n("C26S"), I = n("rAxF"), M = n("14S6"), N = n("Rgdr"), H = n.n(N);

        function A(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        function L(e, t) {
            var n = [e, t], i = [3240, 1080];
            return [Math.min(n[0] / n[1] / (i[0] / i[1]), 1), Math.min(n[1] / n[0] / (i[1] / i[0]), 1)]
        }

        function F() {
            var e = H.a.create();
            return H.a.ortho(e, -1, 1, 1, -1, .1, 10), e
        }

        var W = function (e) {
            Object(c.a)(n, e);
            var t = A(n);

            function n(e) {
                var i;
                return Object(a.a)(this, n), (i = t.call(this, j.a.BACKGROUND_WAVE, 1, 1, new M.a("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 uProjection;\nuniform mat4 uModel;\n\nvarying vec2 v_uv;\nvoid main() {\n    v_uv = uv;\n    gl_Position = uProjection * uModel * vec4(position * 1.12, 1.0);\n}", "precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 v_uv;\nuniform sampler2D uTexture;\nuniform sampler2D uLut;\nuniform sampler2D uToLut;\n\nuniform vec2 uRatio;\nuniform float uTime;\nuniform float uProgress;\n\n#define ROWS 8.0\n#define COLS 8.0\n#define WIDTH 512.0\n#define HEIGHT 512.0\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v){\n    const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n            -0.577350269189626, 0.024390243902439);\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n    vec2 i1;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.0);\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n      dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\nvec4 lookup(vec4 textureColor, sampler2D texture) {\n    textureColor = clamp(textureColor, 0.0, 1.0);\n\n    float blueColor = textureColor.b * 63.0;\n\n    vec2 colorId;\n    colorId.y = floor(floor(blueColor) / 8.0);\n    colorId.x = floor(blueColor) - (colorId.y * 8.0);\n\n    vec2 colorUv;\n    colorUv.x = (colorId.x * 1.0 / ROWS) + 0.5/WIDTH + (1.0 / ROWS - 1.0/WIDTH) * textureColor.r;\n    colorUv.y = (colorId.y * 1.0 / COLS) + 0.5/HEIGHT + (1.0 / COLS - 1.0/HEIGHT) * textureColor.g;\n\n    return texture2D(texture, colorUv);;\n}\n\nvoid main() {\n    vec2 t_uv = v_uv;\n    \n    vec2 uv = vec2(\n        v_uv.x * uRatio.x + (1.0 - uRatio.x) * 0.5,\n        v_uv.y * uRatio.y + (1.0 - uRatio.y) * 0.5\n    );\n\n    uv.x += snoise(uv * 1.75 + uTime) * 0.06;\n    uv.y += snoise(uv * 1.75 + uTime) * 0.06;\n    vec4 originalColor = texture2D(uTexture, uv);\n    gl_FragColor = mix(lookup(originalColor, uLut), lookup(originalColor, uToLut), uProgress);\n\n}"), {
                    uTexture: e.textureManager.fromImage(window.innerWidth < 700 ? "images/webgl/base.jpg" : "images/webgl/base-desktop.jpg"),
                    uLut: e.textureManager.fromImage(j.b.DARK_BLUE),
                    uToLut: e.textureManager.fromImage(j.b.DARK_BLUE),
                    uRatio: L(window.innerWidth, window.innerHeight),
                    uTime: 0,
                    uProjection: F(),
                    uProgress: 0
                })).scene = e, i
            }

            return Object(o.a)(n, [{
                key: "update", value: function () {
                    this.uniforms.uTime += 8e-4, this.uniforms.uLut.unit = 1, this.uniforms.uToLut.unit = 2
                }
            }, {
                key: "setSize", value: function (e, t) {
                    this.setUniform("uRatio", L(e, t))
                }
            }, {
                key: "setColor", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = this.scene.textureManager.fromImage(e);
                    n !== this.uniforms.uToLut && (this.uniforms.uLut = this.uniforms.uToLut, this.uniforms.uToLut = this.scene.textureManager.fromImage(e), this.uniforms.uProgress = 0, this._tween && this._tween.kill(), this._tween = p.a.to(this.uniforms, {
                        uProgress: 1,
                        duration: t
                    }))
                }
            }]), n
        }(I.a), B = n("VeHU");

        function U(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var q = function (e) {
            Object(c.a)(n, e);
            var t = U(n);

            function n(e, i, r, o, s, c) {
                var u;
                return Object(a.a)(this, n), (u = t.call(this, i, r, o, new M.a(B.a, "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 v_uv;\n\nuniform float uIsMask;\nuniform sampler2D uTexture;\n\nvoid main() {\n    // image\n    if(uIsMask < 1.0) {\n        gl_FragColor = texture2D(uTexture, v_uv);\n    }\n    \n    // video\n    else {\n        vec2 positionVideo = v_uv;\n        positionVideo.y *= 1.0/2.0;\n\n        vec2 positionMask = v_uv;\n        positionMask.y *= 1.0/2.0;\n        positionMask.y += 1.0/2.0 * 1.0;\n\n        vec4 colorVideo = texture2D(uTexture, positionVideo);\n        vec4 colorMask = texture2D(uTexture, positionMask);\n        vec4 color = vec4(colorVideo.rgb, colorMask.r);\n\n        gl_FragColor = color;\n    }\n}"), {
                    uIsMask: s.endsWith(".png") ? 0 : 1,
                    uTexture: s.endsWith(".png") ? new E.a(e).fromImage(s) : new E.a(e).fromVideo(s),
                    uProjection: H.a.create()
                })).height = o, u.width = r, u.sign = c, u
            }

            return Object(o.a)(n, [{
                key: "setSize", value: function (e, t) {
                    var n = S.resizeManager.viewportHeight - t, i = e > 1024 ? .5 : .22, r = e > 400 ? 40 : 20, a = 30;
                    e > 1024 && (a = 30), e > 1440 && (a = -60), this.scale = [i, i, 1];
                    var o, s, c = this.uniforms.uProjection;
                    H.a.identity(c), o = .5 * e, s = .5 * t, H.a.ortho(c, -o, o, -s, s, .1, 10), this.position[1] = s - this.height * this._scale[1] + r + n, this.position[0] = (o - this.width * this._scale[0] + a) * this.sign
                }
            }, {
                key: "update", value: function () {
                    this.uniforms.uTexture.update(), this.uniforms.uModel = this.model
                }
            }]), n
        }(I.a), V = n("wc1E");

        function G(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var X = function (e) {
            Object(c.a)(n, e);
            var t = G(n);

            function n(e) {
                var i, r;
                Object(a.a)(this, n), (i = t.call(this, e)).add(new W(Object(s.a)(i))), i.videoLeft = new q(e, "left-video", 800, 700, "videos/human-male-01-w-mask.mp4", -1), i.videoRight = new q(e, "right-video", 800, 700, "videos/human-male-02-w-mask.mp4", 1), i.decorations = {
                    colorSwab: new V.a(Object(s.a)(i), "decor-color-swab", "images/webgl/color-swab.png", 268, 106, [-600, 600, -1], [0, 3.14, 3.14]),
                    gem: new V.a(Object(s.a)(i), "decor-gem", "images/webgl/gem.png", 132, 148, [500, 875, -1], [0, 3.14, 3.14]),
                    decorDots: [new V.a(Object(s.a)(i), "decor-dots-0", "images/webgl/circle.png", 12, 12, [-150, 600, -1], [0, 0, 0]), new V.a(Object(s.a)(i), "decor-dots-1", "images/webgl/circle.png", 12, 12, [-600, 200, -1], [0, 0, 0]), new V.a(Object(s.a)(i), "decor-dots-2", "images/webgl/circle.png", 18, 18, [-1600, 500, -1], [0, 0, 0]), new V.a(Object(s.a)(i), "decor-dots-3", "images/webgl/circle.png", 9, 9, [800, 400, -1], [0, 0, 0]), new V.a(Object(s.a)(i), "decor-dots-4", "images/webgl/circle.png", 18, 18, [860, 470, -1], [0, 0, 0]), new V.a(Object(s.a)(i), "decor-dots-5", "images/webgl/circle.png", 6, 6, [1660, 470, -1], [0, 0, 0])]
                }, i.add(i.decorations.colorSwab), i.add(i.decorations.gem);
                var o = i.decorations.decorDots.length;
                for (r = 0; r < o; r++) i.add(i.decorations.decorDots[r]);
                return i.add(i.videoLeft), i.add(i.videoRight), i
            }

            return Object(o.a)(n, [{
                key: "render", value: function (e) {
                    this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA), Object(P.a)(Object(l.a)(n.prototype), "render", this).call(this, e)
                }
            }, {
                key: "setDecorationMobile", value: function () {
                    var e = this.decorations.colorSwab, t = this.decorations.gem, n = this.decorations.decorDots;
                    e.position = [-140, 400, -1], e.rotation = [0, 3.14, 3.14], e.scale = [.2, .2, 1], t.position = [150, 480, -1], t.rotation = [0, 3.14, 3.14], t.scale = [.2, .2, 1];
                    var i,
                        r = [[-40, 300, -1], [-1024, 200, -1], [-1024, 500, -1], [240, 300, -1], [-1024, 470, -1], [-140, 425, -1]],
                        a = n.length;
                    for (i = 0; i < a; i++) n[i].position = r[i]
                }
            }, {
                key: "setDecorationDesktop", value: function () {
                    var e = this.decorations.colorSwab, t = this.decorations.gem, n = this.decorations.decorDots;
                    e.position = [-600, 600, -1], e.rotation = [0, 3.14, 3.14], e.scale = [.4, .4, .4], t.position = [200, 600, -1], t.rotation = [0, 0, 0], t.scale = [.4, .4, .4];
                    var i,
                        r = [[-150, 600, -1], [-600, 200, -1], [-1600, 500, -1], [800, 400, -1], [860, 470, -1], [1660, 470, -1]],
                        a = n.length;
                    for (i = 0; i < a; i++) n[i].position = r[i]
                }
            }, {
                key: "setSize", value: function (e, t) {
                    e > 1024 ? this.setDecorationDesktop() : this.setDecorationMobile(), Object(P.a)(Object(l.a)(n.prototype), "setSize", this).call(this, e, t)
                }
            }]), n
        }(D.a);

        function Y(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var K = function (e) {
            Object(c.a)(n, e);
            var t = Y(n);

            function n(e) {
                var i;
                return Object(a.a)(this, n), (i = t.call(this, e)).add(new W(Object(s.a)(i))), i
            }

            return n
        }(D.a);

        function J(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var $ = function (e) {
            Object(c.a)(n, e);
            var t = J(n);

            function n(e) {
                return Object(a.a)(this, n), t.call(this, j.a.POST_PROCCESING_CA_RIPPLE, 1, 1, new M.a("#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = vec2(uv.x, 1.0 - uv.y);;\n    gl_Position.xy = position.xy * 0.8;\n    gl_Position.w = 0.8;\n}", "precision highp float;\n#define GLSLIFY 1\n\nuniform float uRipple;\nuniform float uStretch;\nuniform float uChromaticStrength;\nuniform float uTime;\n\nuniform sampler2D uTexture;\n\nvarying vec2 v_uv;\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\n\nfloat snoise(vec2 v){\n    const vec4 C = vec4(0.211324865405187, 0.366025403784439,\n            -0.577350269189626, 0.024390243902439);\n    vec2 i  = floor(v + dot(v, C.yy) );\n    vec2 x0 = v -   i + dot(i, C.xx);\n    vec2 i1;\n    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.0);\n    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n        dot(x12.zw,x12.zw)), 0.0);\n    m = m*m ;\n    m = m*m ;\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n    vec3 g;\n    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\nvec2 distort(vec2 p)\n{\n    float theta  = atan(p.y, p.x);\n    float radius = length(p);\n    radius = pow(radius, uStretch);\n    p.x = radius * cos(theta);\n    p.y = radius * sin(theta);\n    return 0.5 * (p + 1.0);\n}\n\nvoid main() {\n    vec2 direction = v_uv * 2.0 - 1.0;\n    vec2 uv = v_uv * 2.0 - 1.0;\n    uv *= uRipple + abs(snoise((direction * 1.4 + uTime))) * 0.08 * (1.0 - smoothstep(0.95, 1.0, uRipple));\n    float dist = 1.0 - clamp((length(direction) + uStretch), 0.0, 2.0);\n    uv += uv * dist * uStretch;\n    uv += 1.0;\n    uv *= 0.5;\n\n    \n    gl_FragColor.x = texture2D(uTexture, (uv) + direction * uChromaticStrength * 0.005).x;\n    gl_FragColor.y = texture2D(uTexture, (uv)).y;\n    gl_FragColor.z = texture2D(uTexture, (uv) - direction * uChromaticStrength * 0.005).z;\n\n    // gl_FragColor.xy = direction;\n    // gl_FragColor.z = 0.0;\n    gl_FragColor.w = 1.0;\n}"), {
                    uChromaticStrength: 0,
                    uRipple: 1,
                    uStretch: 0,
                    uTime: 0,
                    uTexture: e
                })
            }

            return Object(o.a)(n, [{
                key: "update", value: function () {
                    this.uniforms.uTime += .01
                }
            }]), n
        }(I.a);

        function Q(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var Z = function (e) {
            Object(c.a)(n, e);
            var t = Q(n);

            function n(e, i) {
                var r;
                return Object(a.a)(this, n), (r = t.call(this, e)).add(new $(i)), r
            }

            return Object(o.a)(n, [{
                key: "animateIn", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1.5,
                        t = this.getChildByName(j.a.POST_PROCCESING_CA_RIPPLE), n = p.a.timeline();
                    n.fromTo(t.uniforms, {uRipple: 0, uStretch: 0, uChromaticStrength: 0}, {uRipple: 1, duration: e})
                }
            }, {
                key: "animateOut", value: function (e) {
                    var t = this.getChildByName(j.a.POST_PROCCESING_CA_RIPPLE), n = p.a.timeline();
                    return n.to(t.uniforms, {uStretch: 1, uChromaticStrength: 4, duration: e}), n
                }
            }]), n
        }(D.a);

        function ee(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var te = "landing", ne = "default", ie = function (e) {
            Object(c.a)(n, e);
            var t = ee(n);

            function n() {
                var e;
                return Object(a.a)(this, n), (e = t.call(this)).ui = {canvas: Object(i.createRef)()}, e.webgl = {
                    gl: null,
                    fbo: null,
                    backgroundScene: null,
                    landingScene: null,
                    postProccesedScene: null
                }, e._resizeHandler = e._resizeHandler.bind(Object(s.a)(e)), e._render = e._render.bind(Object(s.a)(e)), e
            }

            return Object(o.a)(n, [{
                key: "componentDidMount", value: function () {
                    this._setupEventListeners(), this._initWebgl(), p.a.ticker.add(this._render), this._resize()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    p.a.ticker.remove(this._render), this._removeEventListeners(), this.webgl.landingScene.dispose()
                }
            }, {
                key: "render", value: function () {
                    return Object(r.jsx)("canvas", {ref: this.ui.canvas, className: "background"})
                }
            }, {
                key: "_initWebgl", value: function () {
                    var e = this.ui.canvas.current;
                    this.webgl.gl = e.getContext("webgl"), this.webgl.fbo = new z(this.webgl.gl), this.webgl.landingScene = new X(this.webgl.gl), this.webgl.backgroundScene = new K(this.webgl.gl), this.webgl.postProccesedScene = new Z(this.webgl.gl, this.webgl.fbo.getTexture()), g.a.set("background-active-scene", this.webgl.postProccesedScene)
                }
            }, {
                key: "_setupEventListeners", value: function () {
                    S.resizeManager.addEventListener("resize", this._resizeHandler), S.resizeManager.addEventListener("resize:complete", this._resizeHandler), g.a.addEventListener("change:background-state", this._onStateChange.bind(this)), g.a.addEventListener("change:background-transition", this._onColorChange.bind(this))
                }
            }, {
                key: "_removeEventListeners", value: function () {
                    S.resizeManager.removeEventListener("resize", this._resizeHandler), S.resizeManager.removeEventListener("resize:complete", this._resizeHandler)
                }
            }, {
                key: "_resizeHandler", value: function () {
                    this._resize()
                }
            }, {
                key: "_onStateChange", value: function () {
                    switch (g.a.get("background-state")) {
                        case te:
                            this.webgl.landingScene.videoLeft.uniforms.uTexture.playVideo(), this.webgl.landingScene.videoRight.uniforms.uTexture.playVideo(), g.a.set("background-active-scene", this.webgl.postProccesedScene);
                            break;
                        default:
                        case ne:
                            this.webgl.landingScene.videoLeft.uniforms.uTexture.pauseVideo(), this.webgl.landingScene.videoRight.uniforms.uTexture.pauseVideo(), g.a.set("background-active-scene", this.webgl.backgroundScene)
                    }
                }
            }, {
                key: "_onColorChange", value: function () {
                    var e = this.webgl.backgroundScene.getChildByName(j.a.BACKGROUND_WAVE),
                        t = g.a.get("background-transition")[0], n = g.a.get("background-transition")[1];
                    e.setColor(t, n)
                }
            }, {
                key: "_resize", value: function () {
                    var e = this.ui.canvas.current;
                    e.width = e.clientWidth, e.height = e.clientHeight, this.webgl.gl.viewport(0, 0, e.width, e.height), this.webgl.fbo.setSize(e.width, e.height), this.webgl.landingScene.setSize(e.width, e.height), this.webgl.backgroundScene.setSize(e.width, e.height), this.webgl.postProccesedScene.setSize(e.width, e.height)
                }
            }, {
                key: "_render", value: function () {
                    switch (g.a.get("background-state")) {
                        case te:
                            this.webgl.landingScene.update(), this.webgl.landingScene.render(this.webgl.fbo), this.webgl.postProccesedScene.update(), this.webgl.postProccesedScene.render();
                            break;
                        default:
                        case ne:
                            this.webgl.backgroundScene.update(), this.webgl.backgroundScene.render()
                    }
                }
            }]), n
        }(i.Component), re = n("YFqc"), ae = n.n(re);

        function oe(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var se = function (e) {
            Object(c.a)(n, e);
            var t = oe(n);

            function n() {
                var e;
                return Object(a.a)(this, n), e = t.call(this), Object(h.a)(Object(s.a)(e), "_buttonClickHandler", (function () {
                    y.a.setMenuOverlayVisible(!g.a.get("menu-visible"))
                })), Object(h.a)(Object(s.a)(e), "_menuChangeHandler", (function () {
                    e._tl.reversed() ? e._tl.play() : e._tl.reverse()
                })), e.ui = {
                    el: Object(i.createRef)(),
                    lines: Object(i.createRef)(),
                    lineTop: Object(i.createRef)(),
                    lineCenter: Object(i.createRef)(),
                    lineBottom: Object(i.createRef)()
                }, e
            }

            return Object(o.a)(n, [{
                key: "componentDidMount", value: function () {
                    p.b.fromTo(this.ui.el.current, {autoAlpha: 0}, {
                        autoAlpha: 1,
                        ease: "sine.inOut"
                    }), this._setupEventListeners(), this._setupAnimation()
                }
            }, {
                key: "render", value: function () {
                    return Object(r.jsxs)("button", {
                        className: this._getClassNames(),
                        ref: this.ui.el,
                        onClick: this._buttonClickHandler,
                        children: [Object(r.jsx)("span", {
                            className: "sr-only",
                            children: "menu"
                        }), Object(r.jsxs)("svg", {
                            ref: this.ui.lines,
                            className: "button-menu__icon",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 26 19",
                            children: [Object(r.jsx)("path", {
                                ref: this.ui.lineTop,
                                d: "M0 0h26v3H0z"
                            }), Object(r.jsx)("path", {
                                ref: this.ui.lineCenter,
                                d: "M0 8h26v3H0z"
                            }), Object(r.jsx)("path", {ref: this.ui.lineBottom, d: "M0 16h26v3H0z"})]
                        })]
                    })
                }
            }, {
                key: "_setupAnimation", value: function () {
                    this._tl = p.b.timeline({paused: !0, reversed: !0}), this._tl.to(this.ui.lineTop.current, {
                        y: 8,
                        duration: .2,
                        ease: "power2.inOut"
                    }, "slideTogether").to(this.ui.lineBottom.current, {
                        y: -8,
                        duration: .2,
                        ease: "power2.inOut"
                    }, "slideTogether").to(this.ui.lineCenter.current, {
                        opacity: 0,
                        duration: .2,
                        ease: "power2.inOut"
                    }, "slideTogether").to(this.ui.lines.current, {
                        rotate: 720,
                        ease: "power4inOut",
                        duration: .2
                    }).to(this.ui.lineTop.current, {
                        rotate: 45,
                        transformOrigin: "50% 50%",
                        duration: .2,
                        ease: "power3.inOut"
                    }, "makeCross").to(this.ui.lineBottom.current, {
                        rotate: -45,
                        transformOrigin: "50% 50%",
                        duration: .2,
                        ease: "power3.inOut"
                    }, "makeCross")
                }
            }, {
                key: "_getClassNames", value: function () {
                    var e = this.props.className, t = "button-menu";
                    return t += e ? " ".concat(e) : ""
                }
            }, {
                key: "_setupEventListeners", value: function () {
                    g.a.addEventListener("change:menu-visible", this._menuChangeHandler)
                }
            }]), n
        }(i.Component);

        function ce(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var ue = {url: "/", label: "Home"}, le = {url: "/the-goods", label: "The Goods"},
            he = {url: "/projects", label: "Projects"}, fe = {url: "/where-to-buy", label: "Where to buy"},
            de = {url: "https://www.instagram.com/oasiscannabisco/", label: "Let's be friends"}, pe = function (e) {
                Object(c.a)(n, e);
                var t = ce(n);

                function n(e) {
                    var r;
                    return Object(a.a)(this, n), r = t.call(this, e), Object(h.a)(Object(s.a)(r), "setActiveRoute", (function (e) {
                        r.setState({activeRoute: e})
                    })), Object(h.a)(Object(s.a)(r), "_contentChangeHandler", (function (e) {
                        e.value ? r._hideHeader() : r._showHeader()
                    })), r.store = e.store, r.store.setActiveRoute = r.setActiveRoute, r.state = {
                        menuOpen: !1,
                        activeRoute: null
                    }, r.ui = {
                        el: Object(i.createRef)(),
                        navLeft: Object(i.createRef)(),
                        navRight: Object(i.createRef)()
                    }, r
                }

                return Object(o.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this._setupEventListeners(), this._setState()
                    }
                }, {
                    key: "componentDidUpdate", value: function (e) {
                        e.agegatePassed !== this.props.agegatePassed && !0 === this.props.agegatePassed && this.setState({show: !0})
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this._removeEventListeners(), this._killTimelines()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.state.show;
                        return Object(r.jsx)("header", {
                            className: "header".concat(t ? " is-visible" : " is-hidden"), children: Object(r.jsxs)("div", {
                                className: "header__container",
                                children: [Object(r.jsxs)("ul", {
                                    className: "header__nav",
                                    ref: this.ui.navLeft,
                                    children: [Object(r.jsx)("li", {
                                        className: "header__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: ue.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: this._getClassNames(ue.url),
                                                children: ue.label
                                            })
                                        })
                                    }), Object(r.jsx)("li", {
                                        className: "header__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: le.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: this._getClassNames(le.url),
                                                children: le.label
                                            })
                                        })
                                    }), Object(r.jsx)("li", {
                                        className: "header__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: he.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: this._getClassNames(he.url),
                                                children: he.label
                                            })
                                        })
                                    })]
                                }), Object(r.jsx)(ae.a, {
                                    href: "/",
                                    scroll: !1,
                                    children: Object(r.jsx)("a", {
                                        className: "header__logo-link",
                                        onClick: function () {
                                            e._closeMenu()
                                        },
                                        children: Object(r.jsx)("img", {
                                            className: "header__logo",
                                            src: "/images/logo-oasis.svg",
                                            alt: "Oasis Cannabis Logo"
                                        })
                                    })
                                }), Object(r.jsxs)("ul", {
                                    className: "header__nav",
                                    ref: this.ui.navRight,
                                    children: [Object(r.jsx)("li", {
                                        className: "header__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: "/where-to-buy",
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: this._getClassNames(fe.url),
                                                children: fe.label
                                            })
                                        })
                                    }), Object(r.jsx)("li", {
                                        className: "header__nav-item", children: Object(r.jsxs)("a", {
                                            className: "header__nav-link header__social",
                                            href: de.url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [Object(r.jsx)("span", {
                                                className: "header__nav-label",
                                                children: de.label
                                            }), Object(r.jsx)("svg", {
                                                className: "header__social-icon",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                children: Object(r.jsx)("path", {d: "M9.60075943 0C6.99275958 0 6.6671596.012 5.64315966.0576 4.62075972.1056 3.92475977.26639998 3.3127598.50399997c-.63119996.24479998-1.16719993.57359997-1.7007999 1.10719993-.53359996.53359997-.86319994 1.06879994-1.10719993 1.7007999C.26715998 3.92399977.10555999 4.61999972.05836 5.64239966c-.048 1.02399994-.0576 1.34959992-.0576 3.95759977 0 2.60799987.012 2.93359987.0576 3.95759977.048 1.0215999.20879998 1.7183999.44639997 2.3303999.24479999.6303999.57359997 1.1671999 1.10719993 1.7007999.53359997.5327999 1.06879994.8631999 1.7007999 1.1071999.61279997.2368 1.30879992.3992 2.33039986.4464 1.02399994.048 1.34959992.0576 3.95759977.0576 2.60799987 0 2.93359987-.012 3.95759977-.0576 1.0215999-.048 1.7183999-.2096 2.3303999-.4464.6303999-.2448 1.1671999-.5744 1.7007999-1.1071999.5327999-.5336.8631999-1.068 1.1071999-1.7007999.2368-.612.3992-1.3088.4464-2.3303999.048-1.0239999.0576-1.3495999.0576-3.95759977 0-2.60799985-.012-2.93359983-.0576-3.95759977-.048-1.02159994-.2096-1.71919989-.4464-2.33039986-.2448-.63119996-.5744-1.16719993-1.1071999-1.7007999-.5336-.53359996-1.068-.86319994-1.7007999-1.10719993-.612-.23759999-1.3088-.39919998-2.3303999-.44639997C12.5343593.0096 12.2087593 0 9.60075943 0zm0 1.7279999c2.56239987 0 2.86799987.0128 3.87999977.05679999.9359999.044 1.4439999.19919999 1.7815999.33199998.4496.17359999.7679999.38159998 1.1055999.71679996.3352.33599998.5432.65519996.7168 1.10479994.1312.33759998.288.84559994.3304 1.78159989.0456 1.01279994.056 1.31679992.056 3.87999977 0 2.56319987-.012 2.86799987-.0592 3.87999977-.0488.9359999-.2048 1.4439999-.3368 1.7815999-.1792.4496-.3832.7679999-.7192 1.1055999-.3352.3352-.6591999.5432-1.1039999.7168-.336.1312-.852.288-1.7879999.3304-1.0191999.0456-1.3191999.056-3.88719977.056-2.56879985 0-2.86879983-.012-3.88719977-.0592-.93679994-.0488-1.45279991-.2048-1.78879989-.3368-.45519998-.1792-.76799996-.3832-1.10319994-.7192-.33679998-.3352-.55199996-.6591999-.71999995-1.1039999-.132-.336-.28719999-.852-.33599998-1.7879999-.036-1.0079999-.0488-1.3191999-.0488-3.87519977 0-2.55679985.0128-2.86879983.0488-3.88879977.04879999-.93599994.20399998-1.45119991.33599998-1.78719989.16799999-.45599998.38319997-.76799996.71999995-1.10479994.33519998-.33519998.64799996-.55119996 1.10319994-.71839995.33599998-.1328.84079995-.28879999 1.77679989-.33679998 1.01999994-.036 1.31999992-.048 3.88719977-.048l.036.024zm0 2.94239982c-2.72399984 0-4.92959971 2.20799987-4.92959971 4.92959971 0 2.72399987 2.20799987 4.92959967 4.92959971 4.92959967 2.72399987 0 4.92959967-2.2079998 4.92959967-4.92959967 0-2.72399984-2.2079998-4.92959971-4.92959967-4.92959971zm0 8.12959948c-1.7679999 0-3.19999981-1.4319999-3.19999981-3.19999977 0-1.7679999 1.43199991-3.19999981 3.19999981-3.19999981 1.76799987 0 3.19999977 1.43199991 3.19999977 3.19999981 0 1.76799987-1.4319999 3.19999977-3.19999977 3.19999977zm6.27679967-8.32399947c0 .63599997-.5168 1.15199993-1.152 1.15199993-.6359999 0-1.1519999-.51679996-1.1519999-1.15199993 0-.63519996.5168-1.15120086 1.1519999-1.15120086.6344-.00079907 1.152.5160009 1.152 1.15120086z"})
                                            }), Object(r.jsx)("span", {className: "sr-only", children: "Instagram"})]
                                        })
                                    })]
                                }), Object(r.jsx)(se, {className: "header__button-menu"})]
                            })
                        })
                    }
                }, {
                    key: "_setupEventListeners", value: function () {
                        g.a.addEventListener("change:content-visible", this._contentChangeHandler)
                    }
                }, {
                    key: "_removeEventListeners", value: function () {
                        g.a.removeEventListener("change:content-visible", this._contentChangeHandler)
                    }
                }, {
                    key: "_getClassNames", value: function (e) {
                        var t = "header__nav-link";
                        return t += this.state.activeRoute == e ? " is-active" : ""
                    }
                }, {
                    key: "_closeMenu", value: function () {
                        !0 === g.a.get("menu-visible") && y.a.setMenuOverlayVisible(!1)
                    }
                }, {
                    key: "_hideHeader", value: function () {
                        p.b.timeline().to(this.ui.el.current, {autoAlpha: 0, duration: .8, ease: "power4.out"}, 0)
                    }
                }, {
                    key: "_showHeader", value: function () {
                        p.b.timeline().to(this.ui.el.current, {autoAlpha: 1, duration: .8, ease: "power4.out"}, 0)
                    }
                }, {
                    key: "_setState", value: function () {
                        this.setState({show: g.a.get("age-gate-passed")})
                    }
                }, {
                    key: "_killTimelines", value: function () {
                        this._tlShow && this._tlShow.kill(), this._tlShow = null, this._tlHide && this._tlHide.kill(), this._tlHide = null
                    }
                }]), n
            }(i.Component);

        function ve(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var me, ge = {url: "/", label: "Home"}, be = {url: "/the-goods", label: "The Goods"},
            _e = {url: "/projects", label: "Projects"}, ye = {url: "/where-to-buy", label: "Where to buy"},
            je = function (e) {
                Object(c.a)(n, e);
                var t = ve(n);

                function n() {
                    var e;
                    Object(a.a)(this, n);
                    for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(o)), Object(h.a)(Object(s.a)(e), "ui", {
                        el: Object(i.createRef)(),
                        menuItemOne: Object(i.createRef)(),
                        menuItemTwo: Object(i.createRef)(),
                        menuItemThree: Object(i.createRef)(),
                        menuItemFour: Object(i.createRef)(),
                        hr: Object(i.createRef)(),
                        footerContent: Object(i.createRef)()
                    }), Object(h.a)(Object(s.a)(e), "_menuChangeHandler", (function (t) {
                        t.value ? (e._tlHide.kill(), e._tlShow.play(0), y.a.setBackgroundState("default"), Object(O.b)()) : (e._tlShow.kill(), e._tlHide.play(0), Object(O.d)())
                    })), e
                }

                return Object(o.a)(n, [{
                    key: "componentDidMount", value: function () {
                        this._setupEventListeners(), this._setupTimelines()
                    }
                }, {
                    key: "render", value: function () {
                        var e = this;
                        return Object(r.jsx)("div", {
                            className: "menu", ref: this.ui.el, children: Object(r.jsxs)("div", {
                                className: "menu__container",
                                children: [Object(r.jsxs)("ul", {
                                    className: "menu__nav",
                                    children: [Object(r.jsx)("li", {
                                        ref: this.ui.menuItemOne,
                                        className: "menu__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: ge.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: "menu__nav-link",
                                                onClick: function () {
                                                    e._closeMenu()
                                                },
                                                children: ge.label
                                            })
                                        })
                                    }), Object(r.jsx)("li", {
                                        ref: this.ui.menuItemTwo,
                                        className: "menu__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: be.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: "menu__nav-link",
                                                onClick: function () {
                                                    e._closeMenu()
                                                },
                                                children: be.label
                                            })
                                        })
                                    }), Object(r.jsx)("li", {
                                        ref: this.ui.menuItemThree,
                                        className: "menu__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: _e.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: "menu__nav-link",
                                                onClick: function () {
                                                    e._closeMenu()
                                                },
                                                children: _e.label
                                            })
                                        })
                                    }), Object(r.jsx)("li", {
                                        ref: this.ui.menuItemFour,
                                        className: "menu__nav-item",
                                        children: Object(r.jsx)(ae.a, {
                                            href: ye.url,
                                            scroll: !1,
                                            children: Object(r.jsx)("a", {
                                                className: "menu__nav-link",
                                                onClick: function () {
                                                    e._closeMenu()
                                                },
                                                children: ye.label
                                            })
                                        })
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "menu__footer",
                                    children: [Object(r.jsx)("hr", {ref: this.ui.hr}), Object(r.jsx)("div", {
                                        ref: this.ui.footerContent,
                                        className: "menu__footer-content",
                                        children: Object(r.jsxs)("a", {
                                            className: "menu__social",
                                            href: "https://www.instagram.com/oasiscannabisco/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: [Object(r.jsx)("span", {
                                                className: "sr-only",
                                                children: "Instagram"
                                            }), Object(r.jsx)("span", {
                                                className: "menu__social-label",
                                                children: "@oasiscannabisco"
                                            }), Object(r.jsx)("svg", {
                                                className: "menu__social-icon",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 20 20",
                                                children: Object(r.jsx)("path", {d: "M9.60075943 0C6.99275958 0 6.6671596.012 5.64315966.0576 4.62075972.1056 3.92475977.26639998 3.3127598.50399997c-.63119996.24479998-1.16719993.57359997-1.7007999 1.10719993-.53359996.53359997-.86319994 1.06879994-1.10719993 1.7007999C.26715998 3.92399977.10555999 4.61999972.05836 5.64239966c-.048 1.02399994-.0576 1.34959992-.0576 3.95759977 0 2.60799987.012 2.93359987.0576 3.95759977.048 1.0215999.20879998 1.7183999.44639997 2.3303999.24479999.6303999.57359997 1.1671999 1.10719993 1.7007999.53359997.5327999 1.06879994.8631999 1.7007999 1.1071999.61279997.2368 1.30879992.3992 2.33039986.4464 1.02399994.048 1.34959992.0576 3.95759977.0576 2.60799987 0 2.93359987-.012 3.95759977-.0576 1.0215999-.048 1.7183999-.2096 2.3303999-.4464.6303999-.2448 1.1671999-.5744 1.7007999-1.1071999.5327999-.5336.8631999-1.068 1.1071999-1.7007999.2368-.612.3992-1.3088.4464-2.3303999.048-1.0239999.0576-1.3495999.0576-3.95759977 0-2.60799985-.012-2.93359983-.0576-3.95759977-.048-1.02159994-.2096-1.71919989-.4464-2.33039986-.2448-.63119996-.5744-1.16719993-1.1071999-1.7007999-.5336-.53359996-1.068-.86319994-1.7007999-1.10719993-.612-.23759999-1.3088-.39919998-2.3303999-.44639997C12.5343593.0096 12.2087593 0 9.60075943 0zm0 1.7279999c2.56239987 0 2.86799987.0128 3.87999977.05679999.9359999.044 1.4439999.19919999 1.7815999.33199998.4496.17359999.7679999.38159998 1.1055999.71679996.3352.33599998.5432.65519996.7168 1.10479994.1312.33759998.288.84559994.3304 1.78159989.0456 1.01279994.056 1.31679992.056 3.87999977 0 2.56319987-.012 2.86799987-.0592 3.87999977-.0488.9359999-.2048 1.4439999-.3368 1.7815999-.1792.4496-.3832.7679999-.7192 1.1055999-.3352.3352-.6591999.5432-1.1039999.7168-.336.1312-.852.288-1.7879999.3304-1.0191999.0456-1.3191999.056-3.88719977.056-2.56879985 0-2.86879983-.012-3.88719977-.0592-.93679994-.0488-1.45279991-.2048-1.78879989-.3368-.45519998-.1792-.76799996-.3832-1.10319994-.7192-.33679998-.3352-.55199996-.6591999-.71999995-1.1039999-.132-.336-.28719999-.852-.33599998-1.7879999-.036-1.0079999-.0488-1.3191999-.0488-3.87519977 0-2.55679985.0128-2.86879983.0488-3.88879977.04879999-.93599994.20399998-1.45119991.33599998-1.78719989.16799999-.45599998.38319997-.76799996.71999995-1.10479994.33519998-.33519998.64799996-.55119996 1.10319994-.71839995.33599998-.1328.84079995-.28879999 1.77679989-.33679998 1.01999994-.036 1.31999992-.048 3.88719977-.048l.036.024zm0 2.94239982c-2.72399984 0-4.92959971 2.20799987-4.92959971 4.92959971 0 2.72399987 2.20799987 4.92959967 4.92959971 4.92959967 2.72399987 0 4.92959967-2.2079998 4.92959967-4.92959967 0-2.72399984-2.2079998-4.92959971-4.92959967-4.92959971zm0 8.12959948c-1.7679999 0-3.19999981-1.4319999-3.19999981-3.19999977 0-1.7679999 1.43199991-3.19999981 3.19999981-3.19999981 1.76799987 0 3.19999977 1.43199991 3.19999977 3.19999981 0 1.76799987-1.4319999 3.19999977-3.19999977 3.19999977zm6.27679967-8.32399947c0 .63599997-.5168 1.15199993-1.152 1.15199993-.6359999 0-1.1519999-.51679996-1.1519999-1.15199993 0-.63519996.5168-1.15120086 1.1519999-1.15120086.6344-.00079907 1.152.5160009 1.152 1.15120086z"})
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    }
                }, {
                    key: "_setupEventListeners", value: function () {
                        g.a.addEventListener("change:menu-visible", this._menuChangeHandler)
                    }
                }, {
                    key: "_closeMenu", value: function () {
                        !0 === g.a.get("menu-visible") && y.a.setMenuOverlayVisible(!1)
                    }
                }, {
                    key: "_setupTimelines", value: function () {
                        this._tlShow = new p.b.timeline({paused: !0}), this._tlHide = new p.b.timeline({paused: !0}), this._tlShow.set(this.ui.footerContent.current, {opacity: 0}).set(this.ui.hr.current, {scaleY: 0}).set(this.ui.el.current, {autoAlpha: 1}).set([this.ui.menuItemOne.current, this.ui.menuItemTwo.current, this.ui.menuItemThree.current, this.ui.menuItemFour.current], {x: "-100vw"}).to([this.ui.menuItemOne.current, this.ui.menuItemTwo.current, this.ui.menuItemThree.current, this.ui.menuItemFour.current], {
                            x: 0,
                            opacity: 1,
                            duration: .4,
                            ease: "customPowerOut",
                            stagger: {each: .05}
                        }, .1).to(this.ui.hr.current, {
                            scaleY: 1,
                            duration: .4,
                            ease: "sine.inOut"
                        }, .6).to(this.ui.footerContent.current, {
                            opacity: 1,
                            duration: .4,
                            ease: "sine.inOut"
                        }, .4), this._tlHide.to([this.ui.menuItemOne.current, this.ui.menuItemTwo.current, this.ui.menuItemThree.current, this.ui.menuItemFour.current], {
                            duration: .2,
                            ease: "power4.in",
                            stagger: {each: .05},
                            opacity: 0
                        }, 0).to(this.ui.footerContent.current, {
                            opacity: 0,
                            duration: .4,
                            ease: "sine.inOut"
                        }, .2).to(this.ui.hr.current, {scaleY: 0}, .2).set(this.ui.el.current, {autoAlpha: 0}, 1.2)
                    }
                }]), n
            }(i.Component);

        function Oe(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var we = function (e) {
            Object(c.a)(n, e);
            var t = Oe(n);

            function n() {
                return Object(a.a)(this, n), t.apply(this, arguments)
            }

            return Object(o.a)(n, [{
                key: "render", value: function () {
                    return null
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this;
                    if (!me) {
                        this._link = document.getElementById("dynamic-favicon");
                        var t = 0;
                        me = p.a.timeline({repeat: -1}), [{
                            src: "/favicon/favicon1.ico",
                            duration: 4
                        }, {src: "/favicon/favicon4.ico", duration: .3}, {
                            src: "/favicon/favicon1.ico",
                            duration: 4
                        }].forEach((function (n) {
                            me.add((function () {
                                e._updateFavicon(n.src)
                            }), t), t += n.duration
                        }))
                    }
                }
            }, {
                key: "_updateFavicon", value: function (e) {
                    e && (this._link.href = e)
                }
            }]), n
        }(i.Component), xe = n("la6v");

        function ke(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var Ce = function (e) {
            Object(c.a)(n, e);
            var t = ke(n);

            function n() {
                var e;
                return Object(a.a)(this, n), e = t.call(this), Object(h.a)(Object(s.a)(e), "el", Object(i.createRef)(null)), Object(h.a)(Object(s.a)(e), "_buttonPrimaryClickHandler", (function () {
                    e._acceptCookies()
                })), e.state = {isConsentCookie: null}, e
            }

            return Object(o.a)(n, [{
                key: "_acceptCookies", value: function () {
                    g.a.set("cookie-consent", !0), p.a.to(this.el.current, {autoAlpha: 0, duration: .3, ease: "linear"})
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.setState({isConsentCookie: g.a.get("cookie-consent")})
                }
            }, {
                key: "render", value: function () {
                    return this.state.isConsentCookie ? null : Object(r.jsx)("div", {
                        className: "cookie-message",
                        ref: this.el,
                        children: Object(r.jsxs)("div", {
                            className: "cookie-message__container",
                            children: [Object(r.jsxs)("p", {
                                className: "cookie-message__body",
                                children: ["We use cookies on this website to enhance the experience, for more information read our ", Object(r.jsx)("a", {
                                    className: "cookie-message__link",
                                    href: "/OASIS_PrivacyPolicy.pdf",
                                    target: "_blank",
                                    children: "privacy policy"
                                }), "."]
                            }), Object(r.jsx)(xe.a, {
                                className: "cookie-message__button",
                                label: "Got it!",
                                onClick: this._buttonPrimaryClickHandler
                            }), Object(r.jsx)("img", {
                                className: "cookie-message__icon",
                                src: "/images/icons/icon-cannabis.svg",
                                alt: ""
                            })]
                        })
                    })
                }
            }]), n
        }(i.Component);

        function Re(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        var Te = function (e) {
            Object(c.a)(n, e);
            var t = Re(n);

            function n(e) {
                var r;
                return Object(a.a)(this, n), r = t.call(this, e), Object(h.a)(Object(s.a)(r), "scrollTop", (function () {
                    window.scrollTo(0, 0)
                })), Object(h.a)(Object(s.a)(r), "transitionIn", (function (e) {
                    p.b.timeline().add((function () {
                        y.a.setBackgroundTransition(e, 0)
                    }), 0).to(r.ui.background.current, {
                        opacity: 0,
                        duration: .8
                    }, 0).to([r.ui.slide1.current, r.ui.slide2.current, r.ui.slide3.current, r.ui.slide4.current, r.ui.slide5.current], {
                        duration: .8,
                        scaleX: 0,
                        transformOrigin: "right",
                        ease: "power4.inOut"
                    }, 0)
                })), Object(h.a)(Object(s.a)(r), "transitionOut", (function (e) {
                    p.b.timeline().to(r.ui.background.current, {
                        opacity: .5,
                        duration: .8
                    }, 0).to([r.ui.slide1.current, r.ui.slide2.current, r.ui.slide3.current, r.ui.slide4.current, r.ui.slide5.current], {
                        duration: .8,
                        scaleX: 1,
                        transformOrigin: "left",
                        ease: "power4.inOut",
                        onComplete: function () {
                            e()
                        }
                    }, 0)
                })), r.ui = {
                    background: Object(i.createRef)(),
                    slide1: Object(i.createRef)(),
                    slide2: Object(i.createRef)(),
                    slide3: Object(i.createRef)(),
                    slide4: Object(i.createRef)(),
                    slide5: Object(i.createRef)()
                }, r.store = e.store, r.store.scrollTop = r.scrollTop, r.store.transitionIn = r.transitionIn, r.store.transitionOut = r.transitionOut, r
            }

            return Object(o.a)(n, [{
                key: "render", value: function () {
                    return Object(r.jsxs)("div", {
                        ref: this.el,
                        className: "transition",
                        children: [Object(r.jsxs)("ul", {
                            className: "transition transition__slides",
                            children: [Object(r.jsx)("li", {
                                ref: this.ui.slide1,
                                className: "transition__slide"
                            }), Object(r.jsx)("li", {
                                ref: this.ui.slide2,
                                className: "transition__slide"
                            }), Object(r.jsx)("li", {
                                ref: this.ui.slide3,
                                className: "transition__slide"
                            }), Object(r.jsx)("li", {
                                ref: this.ui.slide4,
                                className: "transition__slide"
                            }), Object(r.jsx)("li", {ref: this.ui.slide5, className: "transition__slide"})]
                        }), Object(r.jsx)("div", {ref: this.ui.background, className: "transition__background"})]
                    })
                }
            }]), n
        }(i.Component);

        function Se(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function Ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Se(Object(n), !0).forEach((function (t) {
                    Object(h.a)(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ze(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(l.a)(e);
                if (t) {
                    var r = Object(l.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(u.a)(this, n)
            }
        }

        n.e(18).then(n.t.bind(null, "Wr5T", 7));
        var Pe = function (e) {
            Object(c.a)(n, e);
            var t = ze(n);

            function n() {
                var e;
                return Object(a.a)(this, n), e = t.call(this), Object(h.a)(Object(s.a)(e), "_ageGateChangeHandler", (function (t) {
                    t.value;
                    e.setState({agegatePassed: g.a.get("age-gate-passed")})
                })), Object(h.a)(Object(s.a)(e), "_menuChangeHandler", (function (t) {
                    t.value ? e._hidePage() : e._showPage()
                })), e.headerStore = {
                    setActiveRoute: function () {
                    }
                }, e.transitionStore = {
                    scrollTop: function () {
                    }, transitionIn: function () {
                    }, transitionOut: function () {
                    }
                }, e.ui = {
                    transitionRef: Object(i.createRef)(),
                    content: Object(i.createRef)()
                }, e._resizeHandler = e._resizeHandler.bind(Object(s.a)(e)), e
            }

            return Object(o.a)(n, [{
                key: "render", value: function () {
                    var e = this.props.router;
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)(d.a, {
                            children: [Object(r.jsx)("title", {children: this._pageTitle()}), Object(r.jsx)("meta", {
                                name: "viewport",
                                content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                            }), Object(r.jsx)("meta", {charSet: "utf-8"}), Object(r.jsx)("link", {
                                rel: "apple-touch-icon",
                                sizes: "180x180",
                                href: "/favicon/apple-touch-icon.png"
                            }), Object(r.jsx)("link", {
                                id: "dynamic-favicon",
                                rel: "icon",
                                type: "image/png",
                                sizes: "32x32",
                                href: "/favicon/favicon-32x32.png"
                            }), Object(r.jsx)("link", {
                                rel: "mask-icon",
                                href: "/favicon/safari-pinned-tab.svg",
                                color: "#8b63eb"
                            }), Object(r.jsx)("meta", {
                                name: "msapplication-TileColor",
                                content: "#0a134a"
                            }), Object(r.jsx)("meta", {
                                name: "theme-color",
                                content: "#0a134a"
                            }), Object(r.jsx)("meta", {
                                name: "theme-color",
                                content: "#fde700"
                            }), Object(r.jsx)("meta", {
                                property: "og:image",
                                content: "/images/share.jpg"
                            }), Object(r.jsx)("meta", {
                                property: "og:image:width",
                                content: "1200"
                            }), Object(r.jsx)("meta", {
                                property: "og:image:height",
                                content: "630"
                            }), Object(r.jsx)("meta", {
                                name: "description",
                                content: "OASIS Cannabis Co. makes California's best cannabis products. Freshly squeezed edibles, premium flower and the most mouthwatering single-origin chocolates. Each serving is infused with 10mg of our own sun & soil grown cannabis oil."
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/fonts/grande_light.woff2",
                                as: "font",
                                type: "font/woff2",
                                crossOrigin: "crossorigin"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/fonts/grande_regular.woff2",
                                as: "font",
                                type: "font/woff2",
                                crossOrigin: "crossorigin"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/fonts/grande_bold.woff2",
                                as: "font",
                                type: "font/woff2",
                                crossOrigin: "crossorigin"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/fonts/grande_black.woff2",
                                as: "font",
                                type: "font/woff2",
                                crossOrigin: "crossorigin"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/fonts/maison_neue_medium.woff2",
                                as: "font",
                                type: "font/woff2",
                                crossOrigin: "crossorigin"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/fonts/maison_neue_bold.woff2",
                                as: "font",
                                type: "font/woff2",
                                crossOrigin: "crossorigin"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/images/webgl/base-desktop.jpg",
                                as: "image"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/images/webgl/base.jpg",
                                as: "image"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/images/luts/lut-dark-blue.jpg",
                                as: "image"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/images/luts/lut-purple01.jpg",
                                as: "image"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/images/luts/lut-purple02.jpg",
                                as: "image"
                            }), Object(r.jsx)("link", {
                                rel: "preload",
                                href: "/images/luts/lut-yellow.jpg",
                                as: "image"
                            }), Object(r.jsx)("script", {
                                async: !0,
                                src: "https://www.googletagmanager.com/gtag/js?id=UA-186000803-1"
                            }), Object(r.jsx)("script", {dangerouslySetInnerHTML: {__html: "window.dataLayer = window.dataLayer || [];\n                        function gtag(){dataLayer.push(arguments);}\n                        gtag('js', new Date());\n\n                        gtag('config', 'UA-186000803-1', {\n                            'page_path': '".concat(e.pathname, "',\n                            'anonymize_ip': true\n                        });")}})]
                        }), this.returnBody()]
                    })
                }
            }, {
                key: "returnBody", value: function () {
                    var e = this.props, t = e.pageProps, n = e.Component, a = e.router.pathname || "/",
                        o = this.state || {}, s = o.agegatePassed, c = o.isIE;
                    return this.state ? c ? Object(r.jsxs)("div", {
                        className: "legacy-warning",
                        children: [Object(r.jsxs)("h1", {children: ["Browser ", Object(r.jsx)("span", {children: "unsupported"})]}), Object(r.jsx)("p", {children: "Oasis Cannabis works in the latest version of Chrome, Edge and Safari."})]
                    }) : Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(ie, {}), Object(r.jsx)(pe, {
                            agegatePassed: s,
                            store: this.headerStore
                        }), s ? Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(je, {}), Object(r.jsx)("div", {
                                className: "content",
                                ref: this.ui.content,
                                children: Object(r.jsx)(m.a, {
                                    fragment: a,
                                    children: Object(i.createElement)(n, Ee(Ee({className: "page"}, t), {}, {
                                        key: a,
                                        headerStore: this.headerStore,
                                        transitionStore: this.transitionStore,
                                        agegatePassed: s
                                    }))
                                })
                            }), Object(r.jsx)(Te, {store: this.transitionStore}), Object(r.jsx)(we, {})]
                        }) : Object(r.jsx)(T, {}), Object(r.jsx)(Ce, {})]
                    }) : null
                }
            }, {
                key: "componentDidMount", value: function () {
                    S.resizeManager.updateViewportDimensions(), this._setupEventListeners(), this._checkAgeGate(), this._resize(), this.setState({
                        agegatePassed: g.a.get("age-gate-passed"),
                        isIE: this._isIE()
                    })
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    e.agegatePassed !== this.state.agegatePassed && this._checkAgeGate()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this._removeEventListeners(), this._killTimelines()
                }
            }, {
                key: "_pageTitle", value: function () {
                    var e = this.props.router;
                    return "/" === e.asPath ? "Oasis Cannabis".toUpperCase() : "Oasis Cannabis - ".concat(e.asPath.replace(/\//g, "")).toUpperCase()
                }
            }, {
                key: "_setupEventListeners", value: function () {
                    g.a.addEventListener("change:age-gate-passed", this._ageGateChangeHandler), g.a.addEventListener("change:menu-visible", this._menuChangeHandler), window.addEventListener("resize", this._resizeHandler), window.addEventListener("resize:complete", this._resizeHandler)
                }
            }, {
                key: "_removeEventListeners", value: function () {
                    g.a.removeEventListener("change:age-gate-passed", this._ageGateChangeHandler), g.a.removeEventListener("change:menu-visible", this._menuChangeHandler), window.removeEventListener("resize", this._resizeHandler), window.removeEventListener("resize:complete", this._resizeHandler)
                }
            }, {
                key: "_isIE", value: function () {
                    return /MSIE|Trident/.test(window.navigator.userAgent)
                }
            }, {
                key: "_resize", value: function () {
                    var e = document.querySelector(":root");
                    e.style.setProperty("--diagonal", Math.sqrt(Math.pow(S.resizeManager.viewportWidth, 2) + Math.pow(S.resizeManager.viewportHeight, 2)) + "px"), e.style.setProperty("--maxSize", Math.max(S.resizeManager.viewportWidth, S.resizeManager.viewportHeight) + "px"), e.style.setProperty("--vh", S.resizeManager.viewportHeight / 100 + "px")
                }
            }, {
                key: "_checkAgeGate", value: function () {
                    (this.state || {}).agegatePassed && this._showPage()
                }
            }, {
                key: "_hidePage", value: function () {
                    !1 !== this._isVisible && this.ui.content.current && (this._isVisible = !1, this._tlOut = p.b.timeline(), this._tlOut.to(this.ui.content.current, {
                        autoAlpha: 0,
                        ease: "power4.out"
                    }, 0))
                }
            }, {
                key: "_showPage", value: function () {
                    !this._isVisible && this.ui.content.current && (this._isVisible = !0, this._tlIn = p.b.timeline(), this._tlIn.to(this.ui.content.current, {
                        autoAlpha: 1,
                        ease: "power4.out"
                    }, .4))
                }
            }, {
                key: "_killTimelines", value: function () {
                    this._tlIn && this._tlIn.kill(), this._tlIn = null, this._tlOut && this._tlOut.kill(), this._tlOut = null
                }
            }, {
                key: "_resizeHandler", value: function () {
                    this._resize()
                }
            }]), n
        }(i.Component);
        t.default = Pe
    }, Nsbk: function (e, t) {
        function n(t) {
            return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, n(t)
        }

        e.exports = n
    }, PJYZ: function (e, t) {
        e.exports = function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
    }, RIqP: function (e, t, n) {
        var i = n("Ijbi"), r = n("EbDI"), a = n("ZhPi"), o = n("Bnag");
        e.exports = function (e) {
            return i(e) || r(e) || a(e) || o()
        }
    }, ReuC: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return r
        }));
        var i = n("foSv");

        function r(e, t, n) {
            return (r = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var r = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Object(i.a)(e));) ;
                    return e
                }(e, t);
                if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }
    }, VeHU: function (e, t, n) {
        "use strict";
        t.a = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nuniform mat4 uProjection;\nuniform mat4 uModel;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = uProjection * uModel * vec4(position, 1.0);\n}"
    }, Xuae: function (e, t, n) {
        "use strict";
        var i = n("RIqP"), r = n("lwsE"), a = n("W8MJ"), o = (n("PJYZ"), n("7W2i")), s = n("a1gu"), c = n("Nsbk");

        function u(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = c(e);
                if (t) {
                    var r = c(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return s(this, n)
            }
        }

        t.__esModule = !0, t.default = void 0;
        var l = n("q1tI"), h = function (e) {
            o(n, e);
            var t = u(n);

            function n(e) {
                var a;
                return r(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function () {
                    a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances), a.props))
                }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
            }

            return a(n, [{
                key: "componentDidMount", value: function () {
                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    this.emitChange()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                }
            }, {
                key: "render", value: function () {
                    return null
                }
            }]), n
        }(l.Component);
        t.default = h
    }, a1gu: function (e, t, n) {
        var i = n("cDf5"), r = n("PJYZ");
        e.exports = function (e, t) {
            return !t || "object" !== i(t) && "function" !== typeof t ? r(e) : t
        }
    }, g4pe: function (e, t, n) {
        e.exports = n("8Kt/")
    }, lSNA: function (e, t) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, la6v: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return p
        }));
        var i = n("nKUr"), r = n("1OyB"), a = n("vuIU"), o = n("JX7q"), s = n("Ji7U"), c = n("md7G"), u = n("foSv"),
            l = n("q1tI"), h = n("YFqc"), f = n.n(h);

        function d(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(u.a)(e);
                if (t) {
                    var r = Object(u.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(c.a)(this, n)
            }
        }

        var p = function (e) {
            Object(s.a)(n, e);
            var t = d(n);

            function n() {
                var e;
                return Object(r.a)(this, n), (e = t.call(this))._buttonClickHandler = e._buttonClickHandler.bind(Object(o.a)(e)), e
            }

            return Object(a.a)(n, [{
                key: "render", value: function () {
                    var e = this.props.href;
                    if (e) {
                        return /^(http|https)/.test(e) ? this._renderButtonPrimaryAsExternalLink() : this._renderButtonPrimaryAsLink()
                    }
                    return this._renderButtonPrimary()
                }
            }, {
                key: "_renderButtonPrimary", value: function () {
                    return Object(i.jsx)("button", {
                        onClick: this._buttonClickHandler,
                        className: this._getClassNames(),
                        children: this._getButtonPrimary()
                    })
                }
            }, {
                key: "_renderButtonPrimaryAsExternalLink", value: function () {
                    return Object(i.jsx)("a", {
                        href: this.props.href,
                        className: this._getClassNames(),
                        target: "_blank",
                        rel: "noreferrer",
                        children: this._getButtonPrimary()
                    })
                }
            }, {
                key: "_renderButtonPrimaryAsLink", value: function () {
                    var e = this.props.onClick;
                    return Object(i.jsx)(f.a, {
                        href: this.props.href,
                        scroll: !1,
                        children: Object(i.jsx)("a", {
                            className: this._getClassNames(),
                            onClick: e,
                            ref: this.el,
                            children: this._getButtonPrimary()
                        })
                    })
                }
            }, {
                key: "_getButtonPrimary", value: function () {
                    var e = this.props.label;
                    return Object(i.jsxs)(i.Fragment, {
                        children: [Object(i.jsx)("span", {
                            className: "button-primary__label",
                            children: e
                        }), Object(i.jsx)("svg", {
                            className: "button-primary__arrow",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 11 9",
                            children: Object(i.jsx)("path", {
                                d: "M.5 4.5h9m-3-4l4 4m0 0l-4 4",
                                stroke: "#0B1130",
                                fill: "none",
                                strokeLinecap: "square"
                            })
                        })]
                    })
                }
            }, {
                key: "_getClassNames", value: function () {
                    var e = this.props.className, t = "button-primary";
                    return t += e ? " ".concat(e) : ""
                }
            }, {
                key: "_buttonClickHandler", value: function (e) {
                    e.preventDefault();
                    var t = this.props.onClick;
                    t && t()
                }
            }]), n
        }(l.Component)
    }, ll3m: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "resizeManager", {
            enumerable: !0,
            get: function () {
                return i.resizeManager
            }
        }), t.default = void 0;
        var i = function (e) {
            if (e && e.__esModule) return e;
            var t = r();
            if (t && t.has(e)) return t.get(e);
            var n = {};
            if (null != e) {
                var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            }
            n.default = e, t && t.set(e, n);
            return n
        }(n("tQq9"));

        function r() {
            if ("function" !== typeof WeakMap) return null;
            var e = new WeakMap;
            return r = function () {
                return e
            }, e
        }

        var a = i.default;
        t.default = a
    }, lwAK: function (e, t, n) {
        "use strict";
        var i;
        t.__esModule = !0, t.AmpStateContext = void 0;
        var r = ((i = n("q1tI")) && i.__esModule ? i : {default: i}).default.createContext({});
        t.AmpStateContext = r
    }, "s+lh": function (e, t, n) {
        !function (t, n) {
            var i = function (e, t, n) {
                "use strict";
                var i, r;
                if (function () {
                    var t, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        fastLoadedClass: "ls-is-cached",
                        iframeLoadMode: 0,
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    for (t in r = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in r || (r[t] = n[t])
                }(), !t || !t.getElementsByClassName) return {
                    init: function () {
                    }, cfg: r, noSupport: !0
                };
                var a = t.documentElement, o = e.HTMLPictureElement, s = "addEventListener", c = "getAttribute",
                    u = e[s].bind(e), l = e.setTimeout, h = e.requestAnimationFrame || l, f = e.requestIdleCallback,
                    d = /^picture$/i, p = ["load", "error", "lazyincluded", "_lazyloaded"], v = {},
                    m = Array.prototype.forEach, g = function (e, t) {
                        return v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), v[t].test(e[c]("class") || "") && v[t]
                    }, b = function (e, t) {
                        g(e, t) || e.setAttribute("class", (e[c]("class") || "").trim() + " " + t)
                    }, _ = function (e, t) {
                        var n;
                        (n = g(e, t)) && e.setAttribute("class", (e[c]("class") || "").replace(n, " "))
                    }, y = function (e, t, n) {
                        var i = n ? s : "removeEventListener";
                        n && y(e, t), p.forEach((function (n) {
                            e[i](n, t)
                        }))
                    }, j = function (e, n, r, a, o) {
                        var s = t.createEvent("Event");
                        return r || (r = {}), r.instance = i, s.initEvent(n, !a, !o), s.detail = r, e.dispatchEvent(s), s
                    }, O = function (t, n) {
                        var i;
                        !o && (i = e.picturefill || r.pf) ? (n && n.src && !t[c]("srcset") && t.setAttribute("srcset", n.src), i({
                            reevaluate: !0,
                            elements: [t]
                        })) : n && n.src && (t.src = n.src)
                    }, w = function (e, t) {
                        return (getComputedStyle(e, null) || {})[t]
                    }, x = function (e, t, n) {
                        for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                        return n
                    }, k = function () {
                        var e, n, i = [], r = [], a = i, o = function () {
                            var t = a;
                            for (a = i.length ? r : i, e = !0, n = !1; t.length;) t.shift()();
                            e = !1
                        }, s = function (i, r) {
                            e && !r ? i.apply(this, arguments) : (a.push(i), n || (n = !0, (t.hidden ? l : h)(o)))
                        };
                        return s._lsFlush = o, s
                    }(), C = function (e, t) {
                        return t ? function () {
                            k(e)
                        } : function () {
                            var t = this, n = arguments;
                            k((function () {
                                e.apply(t, n)
                            }))
                        }
                    }, R = function (e) {
                        var t, i = 0, a = r.throttleDelay, o = r.ricTimeout, s = function () {
                            t = !1, i = n.now(), e()
                        }, c = f && o > 49 ? function () {
                            f(s, {timeout: o}), o !== r.ricTimeout && (o = r.ricTimeout)
                        } : C((function () {
                            l(s)
                        }), !0);
                        return function (e) {
                            var r;
                            (e = !0 === e) && (o = 33), t || (t = !0, (r = a - (n.now() - i)) < 0 && (r = 0), e || r < 9 ? c() : l(c, r))
                        }
                    }, T = function (e) {
                        var t, i, r = 99, a = function () {
                            t = null, e()
                        }, o = function () {
                            var e = n.now() - i;
                            e < r ? l(o, r - e) : (f || a)(a)
                        };
                        return function () {
                            i = n.now(), t || (t = l(o, r))
                        }
                    }, S = function () {
                        var o, f, p, v, x, S, z, P, D, I, M, N, H = /^img$/i, A = /^iframe$/i,
                            L = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent), F = 0, W = 0, B = 0, U = -1,
                            q = function (e) {
                                B--, (!e || B < 0 || !e.target) && (B = 0)
                            }, V = function (e) {
                                return null == N && (N = "hidden" == w(t.body, "visibility")), N || !("hidden" == w(e.parentNode, "visibility") && "hidden" == w(e, "visibility"))
                            }, G = function (e, n) {
                                var i, r = e, o = V(e);
                                for (P -= n, M += n, D -= n, I += n; o && (r = r.offsetParent) && r != t.body && r != a;) (o = (w(r, "opacity") || 1) > 0) && "visible" != w(r, "overflow") && (i = r.getBoundingClientRect(), o = I > i.left && D < i.right && M > i.top - 1 && P < i.bottom + 1);
                                return o
                            }, X = function () {
                                var e, n, s, u, l, h, d, p, m, g, b, _, y = i.elements;
                                if ((v = r.loadMode) && B < 8 && (e = y.length)) {
                                    for (n = 0, U++; n < e; n++) if (y[n] && !y[n]._lazyRace) if (!L || i.prematureUnveil && i.prematureUnveil(y[n])) te(y[n]); else if ((p = y[n][c]("data-expand")) && (h = 1 * p) || (h = W), g || (g = !r.expand || r.expand < 1 ? a.clientHeight > 500 && a.clientWidth > 500 ? 500 : 370 : r.expand, i._defEx = g, b = g * r.expFactor, _ = r.hFac, N = null, W < b && B < 1 && U > 2 && v > 2 && !t.hidden ? (W = b, U = 0) : W = v > 1 && U > 1 && B < 6 ? g : F), m !== h && (S = innerWidth + h * _, z = innerHeight + h, d = -1 * h, m = h), s = y[n].getBoundingClientRect(), (M = s.bottom) >= d && (P = s.top) <= z && (I = s.right) >= d * _ && (D = s.left) <= S && (M || I || D || P) && (r.loadHidden || V(y[n])) && (f && B < 3 && !p && (v < 3 || U < 4) || G(y[n], h))) {
                                        if (te(y[n]), l = !0, B > 9) break
                                    } else !l && f && !u && B < 4 && U < 4 && v > 2 && (o[0] || r.preloadAfterLoad) && (o[0] || !p && (M || I || D || P || "auto" != y[n][c](r.sizesAttr))) && (u = o[0] || y[n]);
                                    u && !l && te(u)
                                }
                            }, Y = R(X), K = function (e) {
                                var t = e.target;
                                t._lazyCache ? delete t._lazyCache : (q(e), b(t, r.loadedClass), _(t, r.loadingClass), y(t, $), j(t, "lazyloaded"))
                            }, J = C(K), $ = function (e) {
                                J({target: e.target})
                            }, Q = function (e, t) {
                                var n = e.getAttribute("data-load-mode") || r.iframeLoadMode;
                                0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                            }, Z = function (e) {
                                var t, n = e[c](r.srcsetAttr);
                                (t = r.customMedia[e[c]("data-media") || e[c]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                            }, ee = C((function (e, t, n, i, a) {
                                var o, s, u, h, f, v;
                                (f = j(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? b(e, r.autosizesClass) : e.setAttribute("sizes", i)), s = e[c](r.srcsetAttr), o = e[c](r.srcAttr), a && (h = (u = e.parentNode) && d.test(u.nodeName || "")), v = t.firesLoad || "src" in e && (s || o || h), f = {target: e}, b(e, r.loadingClass), v && (clearTimeout(p), p = l(q, 2500), y(e, $, !0)), h && m.call(u.getElementsByTagName("source"), Z), s ? e.setAttribute("srcset", s) : o && !h && (A.test(e.nodeName) ? Q(e, o) : e.src = o), a && (s || h) && O(e, {src: o})), e._lazyRace && delete e._lazyRace, _(e, r.lazyClass), k((function () {
                                    var t = e.complete && e.naturalWidth > 1;
                                    v && !t || (t && b(e, r.fastLoadedClass), K(f), e._lazyCache = !0, l((function () {
                                        "_lazyCache" in e && delete e._lazyCache
                                    }), 9)), "lazy" == e.loading && B--
                                }), !0)
                            })), te = function (e) {
                                if (!e._lazyRace) {
                                    var t, n = H.test(e.nodeName), i = n && (e[c](r.sizesAttr) || e[c]("sizes")),
                                        a = "auto" == i;
                                    (!a && f || !n || !e[c]("src") && !e.srcset || e.complete || g(e, r.errorClass) || !g(e, r.lazyClass)) && (t = j(e, "lazyunveilread").detail, a && E.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, B++, ee(e, t, a, i, n))
                                }
                            }, ne = T((function () {
                                r.loadMode = 3, Y()
                            })), ie = function () {
                                3 == r.loadMode && (r.loadMode = 2), ne()
                            }, re = function () {
                                f || (n.now() - x < 999 ? l(re, 999) : (f = !0, r.loadMode = 3, Y(), u("scroll", ie, !0)))
                            };
                        return {
                            _: function () {
                                x = n.now(), i.elements = t.getElementsByClassName(r.lazyClass), o = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass), u("scroll", Y, !0), u("resize", Y, !0), u("pageshow", (function (e) {
                                    if (e.persisted) {
                                        var n = t.querySelectorAll("." + r.loadingClass);
                                        n.length && n.forEach && h((function () {
                                            n.forEach((function (e) {
                                                e.complete && te(e)
                                            }))
                                        }))
                                    }
                                })), e.MutationObserver ? new MutationObserver(Y).observe(a, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (a[s]("DOMNodeInserted", Y, !0), a[s]("DOMAttrModified", Y, !0), setInterval(Y, 999)), u("hashchange", Y, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function (e) {
                                    t[s](e, Y, !0)
                                })), /d$|^c/.test(t.readyState) ? re() : (u("load", re), t[s]("DOMContentLoaded", Y), l(re, 2e4)), i.elements.length ? (X(), k._lsFlush()) : Y()
                            }, checkElems: Y, unveil: te, _aLSL: ie
                        }
                    }(), E = function () {
                        var e, n = C((function (e, t, n, i) {
                            var r, a, o;
                            if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), d.test(t.nodeName || "")) for (a = 0, o = (r = t.getElementsByTagName("source")).length; a < o; a++) r[a].setAttribute("sizes", i);
                            n.detail.dataAttr || O(e, n.detail)
                        })), i = function (e, t, i) {
                            var r, a = e.parentNode;
                            a && (i = x(e, a, i), (r = j(e, "lazybeforesizes", {
                                width: i,
                                dataAttr: !!t
                            })).defaultPrevented || (i = r.detail.width) && i !== e._lazysizesWidth && n(e, a, r, i))
                        }, a = T((function () {
                            var t, n = e.length;
                            if (n) for (t = 0; t < n; t++) i(e[t])
                        }));
                        return {
                            _: function () {
                                e = t.getElementsByClassName(r.autosizesClass), u("resize", a)
                            }, checkElems: a, updateElem: i
                        }
                    }(), z = function () {
                        !z.i && t.getElementsByClassName && (z.i = !0, E._(), S._())
                    };
                return l((function () {
                    r.init && z()
                })), i = {cfg: r, autoSizer: E, loader: S, init: z, uP: O, aC: b, rC: _, hC: g, fire: j, gW: x, rAF: k}
            }(t, t.document, Date);
            t.lazySizes = i, e.exports && (e.exports = i)
        }("undefined" != typeof window ? window : {})
    }, tQq9: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = t.resizeManager = void 0;
        var i = n("q1tI"), r = n("QnL+");

        function a(e) {
            return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function c(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), e
        }

        function u(e, t) {
            return !t || "object" !== a(t) && "function" !== typeof t ? h(e) : t
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function h(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function f(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && d(e, t)
        }

        function d(e, t) {
            return (d = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var p = 10, v = 16, m = new (function (e) {
            function t(e) {
                var n;
                return o(this, t), (n = u(this, l(t).call(this, e)))._windowResizeHandler = n._windowResizeHandler.bind(h(n)), n._updateValues = n._updateValues.bind(h(n)), n._startThrottleTimer = n._startThrottleTimer.bind(h(n)), n._throttleTimerHandler = n._throttleTimerHandler.bind(h(n)), n._updateValues(), n._setupEventListeners(), setTimeout(n._updateValues, 30), n
            }

            return f(t, e), c(t, [{
                key: "rem", value: function (e, t) {
                    return e * (v / (t = t || p))
                }
            }, {
                key: "updateViewportDimensions", value: function () {
                    this._viewportWidth = Math.min(window.innerWidth || 0), this._viewportHeight = Math.min(window.innerHeight || 0)
                }
            }, {
                key: "updateDocumentDimensions", value: function () {
                    var e = document.body, t = document.documentElement;
                    this._documentWidth = Math.max(e.scrollWidth, e.offsetWidth, t.clientWidth, t.scrollWidth, t.offsetWidth), this._documentHeight = Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
                }
            }, {
                key: "updateDocumentFontSize", value: function () {
                    var e = getComputedStyle(document.documentElement).getPropertyValue("font-size");
                    v = parseFloat(e)
                }
            }, {
                key: "_setupEventListeners", value: function () {
                    var e = "onorientationchange" in window ? "orientationchange" : "resize";
                    window.addEventListener(e, this._windowResizeHandler)
                }
            }, {
                key: "_updateValues", value: function () {
                    this.updateViewportDimensions(), this.updateDocumentDimensions(), this.updateDocumentFontSize()
                }
            }, {
                key: "_startThrottleTimer", value: function () {
                    this._throttleTimer && clearTimeout(this._throttleTimer), this._throttleTimer = setTimeout(this._throttleTimerHandler, 250)
                }
            }, {
                key: "_throttleTimerHandler", value: function () {
                    this._updateValues(), this.dispatchEvent("resize:complete", this._getEventPayload())
                }
            }, {
                key: "_windowResizeHandler", value: function () {
                    this._updateValues(), this._startThrottleTimer(), this.dispatchEvent("resize", this._getEventPayload())
                }
            }, {
                key: "_getEventPayload", value: function () {
                    return {
                        target: this,
                        viewportWidth: this._viewportWidth,
                        viewportHeight: this._viewportHeight,
                        documentWidth: this._documentWidth,
                        documentHeight: this._documentHeight
                    }
                }
            }, {
                key: "viewportWidth", get: function () {
                    return this._viewportWidth
                }
            }, {
                key: "viewportHeight", get: function () {
                    return this._viewportHeight
                }
            }, {
                key: "documentWidth", get: function () {
                    return this._documentWidth
                }
            }, {
                key: "documentHeight", get: function () {
                    return this._documentHeight
                }
            }, {
                key: "remBase", get: function () {
                    return p
                }, set: function (e) {
                    p = e
                }
            }]), t
        }(r.EventDispatcher));
        t.resizeManager = m;
        var g = function (e) {
            function t(e) {
                var n;
                o(this, t), (n = u(this, l(t).call(this, e)))._resizeHandler = n._resizeHandler.bind(h(n));
                var i = n._getValues();
                return n.state = n._mergeObjects({}, {
                    viewportWidth: 1024,
                    viewportHeight: 720,
                    documentWidth: 1024,
                    documentHeight: 720
                }, n.props, i), n
            }

            return f(t, e), c(t, [{
                key: "componentDidMount", value: function () {
                    m.addEventListener("resize", this._resizeHandler), m.addEventListener("resize:complete", this._resizeHandler)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    m.removeEventListener("resize", this._resizeHandler), m.removeEventListener("resize:complete", this._resizeHandler)
                }
            }, {
                key: "shouldComponentUpdate", value: function (e, t) {
                    return !this._areEqualShallow(this.state, t)
                }
            }, {
                key: "render", value: function () {
                    return this.props.render(this.state)
                }
            }, {
                key: "_getValues", value: function () {
                    return {
                        viewportWidth: m.viewportWidth,
                        viewportHeight: m.viewportHeight,
                        documentWidth: m.documentWidth,
                        documentHeight: m.documentHeight
                    }
                }
            }, {
                key: "_areEqualShallow", value: function (e, t) {
                    for (var n in e) if (e[n] !== t[n]) return !1;
                    return !0
                }
            }, {
                key: "_mergeObjects", value: function () {
                    for (var e = {}, t = 0; t < arguments.length; t += 1) for (var n = arguments[t], i = Object.keys(n), r = 0; r < i.length; r += 1) e[i[r]] = n[i[r]];
                    return e
                }
            }, {
                key: "_resizeHandler", value: function () {
                    this.setState(this._getValues())
                }
            }]), t
        }(i.Component);
        t.default = g
    }, wc1E: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return g
        }));
        var i = n("1OyB"), r = n("vuIU"), a = n("Ji7U"), o = n("md7G"), s = n("foSv"), c = n("14S6"), u = n("rAxF"),
            l = n("VeHU"),
            h = "precision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 v_uv;\n\nuniform sampler2D uTexture;\nuniform float uAlpha;\n\nvoid main() {\n    gl_FragColor = texture2D(uTexture, v_uv);\n    gl_FragColor.w *= uAlpha;\n}",
            f = n("z/o8"), d = n("xify"), p = n("Rgdr"), v = n.n(p);

        function m(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, i = Object(s.a)(e);
                if (t) {
                    var r = Object(s.a)(this).constructor;
                    n = Reflect.construct(i, arguments, r)
                } else n = i.apply(this, arguments);
                return Object(o.a)(this, n)
            }
        }

        var g = function (e) {
            Object(a.a)(n, e);
            var t = m(n);

            function n(e, r, a, o, s) {
                var u, f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [0, 0, -1],
                    d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [0, 0, 0];
                return Object(i.a)(this, n), (u = t.call(this, r, o, s, new c.a(l.a, h), {
                    uProjection: v.a.create(),
                    uTexture: e.textureManager.fromImage(a),
                    uAlpha: 1
                })).position = f, u.rotation = d, u
            }

            return Object(r.a)(n, [{
                key: "onMouseEnter", value: function () {
                    f.a.to(this.uniforms, {uAlpha: 0, duration: .25})
                }
            }, {
                key: "onMouseExit", value: function () {
                    f.a.to(this.uniforms, {uAlpha: 1, duration: .25})
                }
            }, {
                key: "setSize", value: function (e, t) {
                    this.projection = new d.a(e, t, .01, 10), this.uniforms.uProjection = this.projection.ortho
                }
            }]), n
        }(u.a)
    }, xify: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        }));
        var i = n("1OyB"), r = n("vuIU"), a = n("Rgdr"), o = n.n(a), s = function () {
            function e(t, n, r, a) {
                Object(i.a)(this, e), this._width = t, this._height = n, this._near = r, this._far = a, this._ortho = null
            }

            return Object(r.a)(e, [{
                key: "_shouldRebuild", value: function () {
                    this._ortho = null
                }
            }, {
                key: "ortho", get: function () {
                    return null != this._ortho || (this._ortho = o.a.create(), o.a.ortho(this._ortho, -this._width, this._width, this._height, -this._height, this._near, this._far)), this._ortho
                }
            }, {
                key: "width", get: function () {
                    return this._shouldRebuild(), this._width
                }, set: function (e) {
                    this._shouldRebuild(), this._width = e
                }
            }, {
                key: "height", get: function () {
                    return this._shouldRebuild(), this._height
                }, set: function (e) {
                    this._shouldRebuild(), this._height = e
                }
            }]), e
        }()
    }
}, [[0, 0, 2, 1, 3, 4, 5]]]);