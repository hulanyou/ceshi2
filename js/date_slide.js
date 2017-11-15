(function(__context) {
    var module = {
        id: "08d294b8a3ada3d14a4c7445549d9a77",
        filename: "calendar.js",
        exports: {}
    };
    if (!__context.____MODULES) {
        __context.____MODULES = {}
    }
    var r = function(exports, module, global) {
        var render = function(obj, _) {
            var __t, __p = "", __j = Array.prototype.join, print = function() {
                __p += __j.call(arguments, "")
            }
            ;
            with (obj || {}) {

                __p += '    </p></header><div class="cal-header">    <ul class="flexbox dates">    <li class="dates-item">日</li>    <li class="dates-item">一</li>    <li class="dates-item">二</li>    <li class="dates-item">三</li>    <li class="dates-item">四</li>    <li class="dates-item">五</li>    <li class="dates-item">六</li>    </ul>    <div class="month-container">    <ul class="month animate">    ';
                _.each(data, function(e) {
//滑动时顶部自动显示月份
//             __p += '    <li class="month-item">' + ((__t = e.monthShow) == null  ? "" : _.escape(__t)) + "</li>    "
                });
                __p += '    </ul>    </div></div><div class="cal-container">    ';
                _.each(data, function(e, t) {
                    __p += '    <ul class="cal-month">    <li class="month-header">' + ((__t = e.monthShow) == null  ? "" : __t) + "</li>    ";
                    var n = Math.ceil((e.days - (7 - e.weekstart)) / 7) * 7 + 7;
                    __p += "    ";
                    for (var r = 1; r <= n; r++) {
                        __p += "    ";
                        if (r % 7 === 1) {
                            __p += '    <ul class="cal-row flexbox">    '
                        }
                        __p += "    ";
                        if (r > e.weekstart && r <= e.days + e.weekstart) {
                            var i = r - e.weekstart
                              , s = e.month + "-" + $.date.padLeft(i, 2, "0")
                              , o = i
                              , u = "";
                            var a = ["row-item"];
                            if (s === todayString) {
                                o = "今天";
                                a.push("today")
                            }
                            u = holidayUtil.getHolidayName(s) || "";
                            if (holidayUtil.isVacation(s)) {
                                u = u || "放假";
                                a.push("rest")
                            }
                            if (holidayUtil.isWork(s)) {
                                a.push("tiaoxiu");
                                u = "上班"
                            }
                            if (r % 7 === 1 || r % 7 === 0) {
                                a.push("weekend")
                            }
                            if (t === 0 && r < start.getDate() + e.weekstart || t === data.length - 1 && r > endDay.getDate() + e.weekstart) {
                                a.push("disabled")
                            }
                            __p += '    <li class="' + ((__t = a.join(" ")) == null  ? "" : __t) + '" data-date="' + ((__t = s) == null  ? "" : __t) + '">';
                            if (u) {
                                __p += '<span class="top-string">' + ((__t = u) == null  ? "" : __t) + "</span>"
                            }
                            __p += '<span class="day">' + ((__t = o) == null  ? "" : __t) + "</span></li>    "
                        } else {
                            __p += '    <li class="row-item"></li>    '
                        }
                        __p += "    ";
                        if (r % 7 === 0) {
                            __p += "    </ul>    "
                        }
                        __p += "    "
                    }
                    __p += "    </ul>    "
                });
                __p += "    ";
                if (isRoundWay) {
                    __p += "    <div class='roundway-tip' id='depTip'>    <div>请选择去程日期</div>    ";
                    if (inter) {
                        __p += "    <div class='inter'>＊注：所选日期为当地日期</div>    "
                    }
                    __p += "    </div>    <div class='roundway-tip' id='arrTip'>    <div>请选择返程日期</div>    ";
                    if (inter) {
                        __p += "    <div class='inter'>＊注：所选日期为当地日期</div>    "
                    }
                    __p += "    </div>    "
                }
                __p += "</div>"
            }
            return __p;
        }
        ;
        module.exports = function(e) {
            return render.call(this, e, window._)
        }
    }(module.exports, module, __context);
    __context.____MODULES["08d294b8a3ada3d14a4c7445549d9a77"] = module.exports
})(this);
(function(e) {
    var t = {
        id: "5734df1feec3aec46fd81d81dc39fa24",
        filename: "holidayUtil.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        function o(e) {
            if (typeof e == "number") {
                e = new Date(e)
            }
            return e.getFullYear() + "-" + u(e.getMonth() + 1) + "-" + u(e.getDate())
        }
        function u(e) {
            return e < 10 ? "0" + e : e
        }
        function a(e) {
            var t = e.split("-");
            return new Date(t[0],t[1] - 1,t[2])
        }
        var r = {
            "2015-12-25": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "圣诞",
                holidayClass: "shengdan"
            },
            "2016-01-01": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "元旦",
                holidayClass: "yuandan"
            },
            "2016-02-07": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "除夕",
                holidayClass: "chuxi"
            },
            "2016-02-08": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "春节",
                holidayClass: "chunjie"
            },
            "2016-02-22": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "元宵",
                holidayClass: "yuanxiao"
            },
            "2016-04-04": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "清明",
                holidayClass: "qingming"
            },
            "2016-05-01": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "五一",
                holidayClass: "laodong"
            },
            "2016-06-09": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "端午",
                holidayClass: "duanwu"
            },
            "2016-09-15": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "中秋",
                holidayClass: "zhongqiu"
            },
            "2016-10-01": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "国庆",
                holidayClass: "guoqing"
            },
            "2016-12-25": {
                afterTime: 3,
                beforeTime: 3,
                dayindex: 0,
                holidayName: "圣诞",
                holidayClass: "shengdan"
            }
        };
        var i = {
            work: ["2016-02-06", "2016-02-14", "2016-06-12", "2016-09-18", "2016-10-08", "2016-10-09"],
            vacation: ["2016-01-01", "2016-01-02", "2016-01-03", "2016-02-07", "2016-02-08", "2016-02-09", "2016-02-10", "2016-02-11", "2016-02-12", "2016-02-13", "2016-04-02", "2016-04-03", "2016-04-04", "2016-04-30", "2016-05-01", "2016-05-02", "2016-06-09", "2016-06-10", "2016-06-11", "2016-09-15", "2016-09-16", "2016-09-17", "2016-10-01", "2016-10-02", "2016-10-03", "2016-10-04", "2016-10-05", "2016-10-06", "2016-10-07"]
        };
        var s = {
            week: "周",
            day: "天",
            before: "前",
            after: "后"
        };
        var f = function(e) {
            var t = {};
            for (var n in e) {
                var r = n;
                var i = e[n];
                t[n] = i;
                var u = "";
                var f = "";
                if (i.beforeTime > 0) {
                    for (var l = 1; l <= i.beforeTime; l++) {
                        var c = {};
                        var h = new Date(a(r).getTime() - l * 24 * 3600 * 1e3);
                        var p = o(h);
                        c.holidayName = i.holidayName + s.before + l + s.day;
                        c.dayindex = i.dayindex;
                        if (!t[p]) {
                            t[p] = c
                        } else {
                            if (i.dayindex > t[p].dayindex && t[p].beforeTime == null ) {
                                t[p] = c
                            }
                        }
                    }
                }
                if (i.afterTime > 0) {
                    for (var l = 1; l <= i.afterTime; l++) {
                        var c = {};
                        var d = new Date(a(r).getTime() + l * 24 * 3600 * 1e3);
                        var v = o(d);
                        c.holidayName = i.holidayName + s.after + l + s.day;
                        c.dayindex = i.dayindex;
                        if (!t[v]) {
                            t[v] = c
                        } else {
                            if (i.dayindex > t[v].dayindex && t[o(new Date(h))].afterTime == null ) {
                                t[v] = c
                            }
                        }
                    }
                }
            }
            return t
        }(r);
        var l = {
            getHolidayName: function(e) {
                if (e in r) {
                    return r[e].holidayName
                }
                return void 0
            },
            getDateTip: function(e) {
                if (e in f) {
                    return f[e].holidayName
                }
                return ""
            },
            isHoliday: function(e) {
                return r[e]
            },
            isWork: function(e) {
                return $.inArray(e, i.work) > -1
            },
            isVacation: function(e) {
                return $.inArray(e, i.vacation) > -1
            },
            getHolidayInfo: function(e) {
                var t = r[e];
                return t
            }
        };
        window.holidayUtil = l
    }(t.exports, t, e);
    e.____MODULES["5734df1feec3aec46fd81d81dc39fa24"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "aea55597796544b0bf76c410bb61a75f",
        filename: "index.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(t, n, r) {
        e.____MODULES["5734df1feec3aec46fd81d81dc39fa24"]
    }(t.exports, t, e);
    e.____MODULES["aea55597796544b0bf76c410bb61a75f"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "7bd293d45bd89746f4a7d281d824b28f",
        filename: "calendar.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(t, n, r) {
        var i = e.____MODULES["08d294b8a3ada3d14a4c7445549d9a77"];
        e.____MODULES["aea55597796544b0bf76c410bb61a75f"];
        (function(e) {
            function n(t, n) {
                var r = e.date.toDateObj(t)
                  , i = e.date.toDateObj(n)
                  , s = [];
                while (r - i >= 0) {
                    s.push(e.date.format(i));
                    i.setDate(i.getDate() + 1)
                }
                return s
            }
            function r(t) {
                if (!(t && t.length)) {
                    return
                }
                if (t.data("toggle")) {
                    _.each(t.data("toggle").split(" "), function(e) {
                        t.toggleClass(e)
                    })
                }
                var n = e.trim(t[0].firstChild.data);
                if (t.data("day") == n) {
                    t[0].firstChild.data = t.data("string")
                } else if (t.data("string") == n) {
                    t[0].firstChild.data = t.data("day")
                }
                t.removeClass("noPrice");
                var r = t.children(".price").eq(0);
                if (r) {
                    r.toggle()
                }
            }
            function s(e, t) {
                var n = e.getDate()
                  , r = e.getMonth();
                e.setMonth(r + t);
                if (e.getDate() != n) {
                    e.setDate(0)
                }
            }
            var t = function(t) {
                this.opt = e.extend({
                    container: "",
                    validate: 0,
                    validType: "day",
                    start: "",
                    go: "",
                    back: "",
                    callback: e.noop,
                    isRoundWay: true,
                    inter: false
                }, t);
                this.DATA = {};
                this.DOM = [];
                this.between = [];
                this.init()
            }
            ;
            t.prototype = {
                init: function() {
                    var t = {}
                      , n = this.opt;
                    t.start = n.start ? e.date.toDateObj(n.start) : new Date;
                    var r = new Date;
                    if (n.validType === "day") {
                        r = e.date.add(t.start, n.validate)
                    } else {
                        s(r, n.validate)
                    }
                    t.endDay = r;
                    t.go = n.go ? e.date.toDateObj(n.go) : new Date;
                    if (n.back) {
                        t.back = e.date.toDateObj(n.back)
                    } else {
                        t.back = new Date;
                        t.back.setDate(t.start.getDate() + 1)
                    }
                    this.DATA = t;
                    this.renderData()
                },
                setStart: function(t) {
                    this.DATA.start = e.date.toDateObj(t);
                    this.renderData()
                },
                renderData: function() {
                    function l(t, i) {
                        var o = i.getMonth() - t.getMonth();
                        for (var a = 0; a < o + 1; a++) {
                            var f = {
                                month: e.date.format(t, "yyyy-MM"),
                                monthShow: e.date.format(t, "yyyy年M月"),
                                weekstart: (new Date(t.getFullYear(),t.getMonth(),1)).getDay(),
                                days: (new Date(t.getFullYear(),t.getMonth() + 1,0)).getDate()
                            };
                            u.push(f);
                            if (n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()) {
                                return
                            }
                            s(n, 1)
                        }
                    }
                    var t = this.DATA
                      , n = e.date.clone(t.start)
                      , r = t.endDay
                      , o = this.opt
                      , u = [];
                    var a = r.getFullYear() - n.getFullYear();
                    if (a > 0) {
                        for (var f = 0; f < a + 1; f++) {
                            l(n, new Date(n.getFullYear(),11,31))
                        }
                    } else {
                        l(n, r)
                    }
                    e(o.container).html(i({
                        data: u,
                        start: t.start,
                        endDay: t.endDay,
                        todayString: e.date.format(new Date),
                        isRoundWay: o.isRoundWay,
                        inter: o.inter,
                        title: o.title,
                        holidayUtil: holidayUtil
                    }));
                    this.calData = u
                },
                render: function(t, i, s, o) {
                    function h(t, n, r, i) {
                        var s = e(t).find('[data-date="' + l + '"]');
                        s.toggleClass(n).toggleClass(i);
                        e(t).on("click.choose", ".row-item", function(s) {
                            var o = e(this);
                            var a = o.data("date");
                            if (a && !o.hasClass("disabled")) {
                                var f = e("." + n);
                                f.removeClass(n).removeClass(i);
                                o.toggleClass(r).toggleClass(i);
                                u.opt.callback(o.data("date"));
                                e(t).off("click.choose")
                            }
                        })
                    }
                    function p(t, i, s, o, a, f) {
                        e("#depTip").addClass("in");
                        u.DOM = [];
                        var h = _.map(n(c, l), function(n) {
                            return e(t).find('[data-date="' + n + '"]')
                        });
                        _.each(h, function(e, t) {
                            e.addClass("noPrice");
                            r(e);
                            if (t === 0) {
                                e.addClass(i).addClass(a)
                            }
                            if (t === h.length - 1) {
                                e.addClass(i).addClass(f)
                            }
                            if (t > 0 && t < h.length - 1) {
                                e.addClass(o)
                            }
                        });
                        var p;
                        e(t).on("click.choose", ".row-item", function(l) {
                            if (u.DOM.length === 2) {
                                return
                            }
                            var c = e(this);
                            var d = c.data("date");
                            if (d && !c.hasClass("disabled")) {
                                if (u.DOM.length === 0) {
                                    if (!h.length) {
                                        h = u.between
                                    }
                                    u.DOM.push(c);
                                    _.each(h, function(e, t) {
                                        if (t === 0) {
                                            e.removeClass(i).removeClass(a)
                                        }
                                        if (t === h.length - 1) {
                                            e.removeClass(i).removeClass(f)
                                        }
                                        if (t > 0 && t < h.length - 1) {
                                            e.removeClass(o)
                                        }
                                        r(e)
                                    });
                                    c.addClass(s);
                                    r(c);
                                    c.addClass(a);
                                    p = c;
                                    h = [];
                                    e("#depTip").toggleClass("in").toggleClass("out");
                                    e("#arrTip").toggleClass("in")
                                } else if (u.DOM.length === 1) {
                                    var v = e.date.toDateObj(p.data("date"))
                                      , m = e.date.toDateObj(c.data("date"));
                                    if (m - v >= 0) {
                                        u.DOM.push(c);
                                        var g = p.data("date")
                                          , y = c.data("date");
                                        h = _.map(n(y, g), function(n) {
                                            return e(t).find('[data-date="' + n + '"]')
                                        });
                                        _.each(h, function(e, t) {
                                            if (t > 0 && t < h.length - 1) {
                                                e.toggleClass(o);
                                                r(e)
                                            }
                                            if (t === h.length - 1) {
                                                e.toggleClass(s).addClass(f);
                                                r(e)
                                            }
                                        });
                                        u.opt.go = p.data("date");
                                        u.opt.back = c.data("date");
                                        u.opt.callback(u.opt.go, u.opt.back)
                                    } else {
                                        p.removeClass(s).removeClass(a);
                                        c.addClass(s).addClass(a);
                                        p = c
                                    }
                                }
                            }
                        })
                    }
                    function v() {
                        var t = e(a).find(".cal-month")
                          , n = e(a).find(".month")
                          , r = [];
                        _.each(t, function(e, n) {
                            r.push(t.eq(n).offset().top - 70)
                        });
                        e(a).listen("scroll", function(e) {
                            for (var t = 0; t < r.length - 1; t++) {
                                var i = e;
                                if (i > r[t] && i < r[t + 1]) {
                                    n.css("top", -40 * t)
                                }
                                if (i > r[r.length - 2]) {
                                    n.css("top", -40 * (r.length - 2))
                                }
                            }
                        })
                    }
                    var u = this
                      , a = u.opt.container
                      , f = u.opt.isRoundWay
                      , l = t || u.opt.go
                      , c = i || u.opt.back;
                    if (!f) {
                        if (!s) {
                            h(a, "cal-go", "cal-active", "")
                        } else {
                            h(a, "cal-go", "cal-active", "")
                        }
                    } else {
                        p(a, "cal-go", "cal-active", "cal-among", "cal-dep", "cal-arr")
                    }
                    if (o) {
                        e(a).find(".page-header>.title").html(o)
                    }
                    var d = false;
                    e(a).listen("scroll", function() {
                        if (!d) {
                            v();
                            d = true
                        } else {
                            e(a).off("scroll")
                        }
                    })
                },
                showPrice: function(t) {
                    if (!t) {
                        return
                    }
                    var r = this.opt.container;
                    var i = this.DATA.start
                      , s = this.DATA.endDay;
                    var o = _.map(n(s, i), function(e) {
                        return e
                    });
                    _.each(o, function(n) {
                        var i = e(r).find('[data-date="' + n + '"]');
                        i.removeClass("low-price");
                        var s = i.find(".price");
                        if (s.length) {
                            s.remove()
                        }
                        if (t[n]) {
                            var o = e('<span class="price"></span>');
                            o.html(t[n].price);
                            if (t[n].isLowPrice) {
                                i.addClass("low-price")
                            }
                            i.append(o);
                            if (i.hasClass("noPrice")) {
                                o.toggle()
                            }
                        }
                    })
                },
                hide: function(t) {
                    var i = this.opt.isRoundWay
                      , s = this.DOM
                      , o = "cal-active"
                      , u = this.opt.price
                      , a = this.opt.container
                      , f = this;
                    if (t === 1) {
                        var l = "cal-go", c;
                        if (e(a).find("." + l).length > 0) {
                            c = e(a).find("." + l)
                        } else {
                            c = e(a).find("." + o)
                        }
                        c.removeClass(l).removeClass(o).removeClass("cal-dep").removeClass("cal-arr");
                        r(c)
                    }
                    e(a).find(".month").css("top", 0);
                    if (i && s.length == 1) {
                        e("#depTip").toggleClass("out").toggleClass("in");
                        e("#arrTip").toggleClass("in");
                        var h = f.opt.back
                          , l = f.opt.go;
                        s[0].toggleClass(o).toggleClass("cal-dep");
                        r(s[0]);
                        var p = _.map(n(h, l), function(t) {
                            return e(a).find('[data-date="' + t + '"]')
                        });
                        _.each(p, function(e, t) {
                            if (u) {
                                e.addClass("noPrice")
                            }
                            if (t >= 0) {
                                r(e);
                                if (t === 0) {
                                    e.toggleClass("cal-dep").toggleClass("cal-go")
                                } else if (t === p.length - 1) {
                                    e.toggleClass("cal-arr").toggleClass("cal-go")
                                } else {
                                    e.toggleClass("cal-among")
                                }
                            }
                        });
                        f.between = p
                    }
                    this.DOM = [];
                    e(a).off("click.choose")
                }
            };
            e.calendar = t
        })($)
    }(t.exports, t, e);
    e.____MODULES["7bd293d45bd89746f4a7d281d824b28f"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "3bdc67b088acd86c9e6f5a9ddc23bf29",
        filename: "topTip.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        $(function() {
            var e = function(t) {
                function r(e) {
                    var t = window.pageYOffset + n.calcuDOM.fixH;
                    if (t >= n.val[n.currentIndex]) {
                        if (n.currentIndex == n.val.length - 1) {
                            n.animateChar(1);
                            return
                        }
                        if (t < n.val[n.currentIndex + 1]) {
                            if (n.currentIndex === 0) {
                                n.currentIndex++;
                                n.config.rightEl.css("display", "block");
                                return
                            }
                            n.animateChar(1)
                        } else {
                            n.currentIndex++
                        }
                    } else if (t <= n.val[n.currentIndex - 1]) {
                        if (t > n.val[n.currentIndex - 2] && n.currentIndex >= 1) {
                            n.animateChar(0)
                        } else {
                            if (n.currentIndex == 1) {
                                n.reset();
                                n.currentIndex = 0
                            } else {
                                n.currentIndex--
                            }
                        }
                    }
                }
                if (!t || !t.cityEl || !t.charEl) {
                    return
                }
                this.config = t;
                var n = this;
                this.currentIndex = 0;
                this.calcuDOM = function() {
                    var e = n.config.cityEl.offset().top;
                    var t = n.config.charEl.children()[0].offsetHeight;
                    return {
                        fixH: e,
                        dtH: t
                    }
                }();
                this.val = function() {
                    var e = [];
                    t.charTitleEl.each(function(t, n) {
                        if (t == 0) {
                            $(this).css("borderTop", "0px")
                        }
                        e.push($(n).offset().top)
                    });
                    return e
                }();
                this.reset = function() {
                    $(n.config.rightEl.children()[0]).animate({
                        translateY: "0px"
                    }, 0);
                    n.config.rightEl.css("display", "none")
                }
                ;
                this.bindEvent = function() {
                    $(window).listen("scroll", r)
                }
                ;
                this.bindEvent();
                this.animateChar = function(e) {
                    n.config.rightEl.css("display", "block");
                    var t, r = n.calcuDOM.dtH;
                    if (e) {
                        t = -34 * n.currentIndex + "px";
                        n.currentIndex++
                    } else {
                        t = -34 * (n.currentIndex - 2) + "px";
                        n.currentIndex--
                    }
                    $(n.config.rightEl.children()[0]).animate({
                        translateY: t
                    }, 200, "ease-out")
                }
            }
            ;
            e.prototype.unBind = function() {
                $(window).deaf("scroll")
            }
            ;
            $.CharTip = e
        })
    }(t.exports, t, e);
    e.____MODULES["3bdc67b088acd86c9e6f5a9ddc23bf29"] = t.exports
})(this);
(function(__context) {
    var module = {
        id: "0021db4149a95c03946cdd751bceca9c",
        filename: "dijia_Yuyue.js",
        exports: {}
    };
    if (!__context.____MODULES) {
        __context.____MODULES = {}
    }
    var r = function(exports, module, global) {
        var render = function(obj, _) {
            var __t, __p = "", __j = Array.prototype.join, print = function() {
                __p += __j.call(arguments, "")
            }
            ;
            with (obj || {}) {
                __p += '<div class="dijia" data-start-city="' + ((__t = startCity) == null  ? "" : _.escape(__t)) + '" data-start-code="' + ((__t = startCode) == null  ? "" : _.escape(__t)) + '" data-dest-city="' + ((__t = destCity) == null  ? "" : _.escape(__t)) + '" data-dest-code="' + ((__t = destCode) == null  ? "" : _.escape(__t)) + '" data-start-date="' + ((__t = startDate) == null  ? "" : _.escape(__t)) + '">	<div class="type">		<div class="tip">预约全网最低价</div>		<div class="rate">' + ((__t = startCity) == null  ? "" : _.escape(__t)) + " - " + ((__t = destCity) == null  ? "" : _.escape(__t)) + " 预约成功率 " + ((__t = defaultPriceInfo.ticketProb) == null  ? "" : _.escape(__t)) + '</div>	</div>	<div class="value">		<div class="new-price pr">' + ((__t = defaultPriceInfo.price) == null  ? "" : _.escape(__t)) + "</div>		";
                if (typeof commonPrice != "undefined") {
                    __p += '		<div class="old-price">市场价<s>&yen;' + ((__t = commonPrice) == null  ? "" : _.escape(__t)) + "</s></div>		"
                }
                __p += "	</div></div>"
            }
            return __p;
        }
        ;
        module.exports = function(e) {
            return render.call(this, e, window._)
        }
    }(module.exports, module, __context);
    __context.____MODULES["0021db4149a95c03946cdd751bceca9c"] = module.exports
})(this);
(function(e) {
    var t = {
        id: "230856ba4b9ab4ac7ab77cb8dfb1d7ea",
        filename: "download.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        var r = navigator.userAgent.toLowerCase();
        var i = /MicroMessenger/i.test(r)
          , s = /android/i.test(r);

        var u = "";
        if (i) {
            u = "wx"
        } else if (s) {
            u = "adr"
        } else {
            u = "ios"
        }
        $(".js-track").click(function(e) {
            var t = $(this).data("track");
            $beacon_track(t);
            window.location.href = o[u][t];
            return false
        })
    }(t.exports, t, e);
    e.____MODULES["230856ba4b9ab4ac7ab77cb8dfb1d7ea"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "dcaa6d4a9b0bb912c08edcd4e4b27f3a",
        filename: "flightIndex.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(t, n, r) {
        $(function() {
            function t() {
                var e = "browser"
                  , t = navigator.userAgent
                  , n = /(QunariPhonePro|QunariPhone|qunaraphone|QunariPad|qunarinterflight|qunarhyaphone)/i
                  , r = (t || "").match(n);
                return {
                    isBrowser: !r
                }
            }
            function s() {
                v();
                o();
                f();
            }
            function o() {
                u();
                a();
                c()
            }
            function u() {
                $(".oneway").on("tap", function() {
                    $(this).addClass("on");
                    n = false;
                    $("#i-two").hide();
                    $("#i-one").show();
                    $(".roundway").removeClass("on");
                    $.monitor({
                        name: 3052
                    });
                    $(".oEndCity").text($(".rEndCity").text());
                    $(".oStartCity").text($(".rStartCity").text());
                    m(h())
                });
                $(".roundway").on("tap", function() {
                    $(this).addClass("on");
                    n = true;
                    $("#i-two").show();
                    $("#i-one").hide();
                    $(".oneway").removeClass("on");
                    $.monitor({
                        name: 3053
                    });
                    var e = h();
                    $(".rEndCity").text($(".oEndCity").text());
                    $(".rStartCity").text($(".oStartCity").text());
                    i.hide()
                });
                return false
            }
            function a() {
                $(".oneSwap").on("tap", function() {
                    var e = $(".oStartCity")
                      , t = $(".oEndCity")
                      , n = e.text()
                      , r = e.attr("data-code");
                    e.text(t.text());
                    e.attr("data-code", t.attr("data-code"));
                    t.text(n);
                    t.attr("data-code", r);
                    $.monitor({
                        name: 3054
                    });
                    d(n, e);
                    m(h())
                });
                $(".roundSwap").on("tap", function() {
                    var e = $(".rStartCity")
                      , t = $(".rEndCity")
                      , n = e.text();
                    e.text(t.text());
                    t.text(n);
                    $.monitor({
                        name: 3054
                    });
                    d(n, e)
                })
            }
            function f() {
                var e = "", t = "", n, r = /([^\(\)]*)\(?([^\(\)]*)\)?/;
                var i, s;
                var o, u;
                var a = $(".oneWayHist")
                  , f = $(".roundWayHist");
                if ($.storage.get("f_one_search")) {
                    var l = $.storage.get("f_one_search").split(",");
                    for (var c = 0; c < l.length; c++) {
                        n = l[c].split("|")[0].split("-");
                        e += "<li><span class='sHCity' data-code='" + r.exec(n[0])[2] + "'>" + r.exec(n[0])[1] + "</span><span class='oneWayThin'></span><span class='eHCity' data-code='" + r.exec(n[1])[2] + "'>" + r.exec(n[1])[1] + "</span></li>"
                    }
                    a.empty().html(e).on("tap", "li", function() {
                        var e = $(this);
                        e.addClass("act");
                        setTimeout(function() {
                            e.removeClass("act");
                            i = e.find(".sHCity").text();
                            o = e.find(".sHCity").data("code");
                            s = e.find(".eHCity").text();
                            u = e.find(".eHCity").data("code");
                            $(".oStartCity").text(i);
                            $(".oStartCity").attr("data-code", o);
                            $(".oEndCity").text(s);
                            $(".oEndCity").attr("data-code", u);
                            m(h())
                        }, 200);
                        $.monitor({
                            name: 3055
                        })
                    })
                }
                if ($.storage.get("f_round_search")) {
                    l = $.storage.get("f_round_search").split(",");
                    for (c = 0; c < l.length; c++) {
                        n = l[c].split("|")[0].split("=");
                        t += "<li><span class='sHCity' data-code='" + r.exec(n[0])[2] + "'>" + r.exec(n[0])[1] + "</span><span class='roundWayThin'></span><span class='eHCity' data-code='" + r.exec(n[1])[2] + "'>" + r.exec(n[1])[1] + "</span></li>"
                    }
                    f.empty().html(t).on("tap", "li", function() {
                        var e = $(this);
                        e.addClass("act");
                        setTimeout(function() {
                            e.removeClass("act");
                            i = e.find(".sHCity").text();
                            o = e.find(".sHCity").data("code");
                            s = e.find(".eHCity").text();
                            u = e.find(".eHCity").data("code");
                            $(".rStartCity").text(i);
                            $(".rStartCity").attr("data-code", o);
                            $(".rEndCity").text(s);
                            $(".rEndCity").attr("data-code", u)
                        }, 200);
                        $.monitor({
                            name: 3055
                        })
                    })
                }
            }
            function l(e) {
                if (!$.storage.hasS) {
                    return
                }
                var t;
                if (e.indexOf("=") > 0) {
                    t = "f_round_search"
                } else {
                    t = "f_one_search"
                }
                if (!$.storage.get(t)) {
                    var n = [];
                    n[0] = e;
                    $.storage.set(t, n)
                } else {
                    var r = $.storage.get(t).split(",");
                    for (var i = 0; i < r.length; i++) {
                        if (r[i].split("|")[0].replace(/\([^\(\)]*\)/g, "") == e.split("|")[0].replace(/\([^\(\)]*\)/g, "")) {
                            r.splice(i, 1)
                        }
                    }
                    r.unshift(e);
                    r.length = r.length <= 5 ? r.length : 5;
                    $.storage.set(t, r)
                }
            }
            function c() {
                $("#i-one").on("tap", "button", function() {
                    var e = h();
                    if (e.startCity == e.destCity) {
                        $.alert("出发城市和到达城市相同，请您重新选择");
                        return
                    }
                    var t = e.startCity + "(" + e.startCode + ")" + "-" + e.destCity + "(" + e.destCode + ")" + "|" + e.startDate;
                    l(t);
                    f();
                    $.monitor({
                        name: 3061
                    });
                    var r = $(this);
                    $(this).addClass("on-btn");
                    setTimeout(function() {
                        $(r).removeClass("on-btn")
                    }, 500);
                    window.location.href = "/h5/flight/flightlist?startCity=" + e.startCity + "&startCode=" + e.startCode + "&destCity=" + e.destCity + "&destCode=" + e.destCode + "&startDate=" + e.startDate + "&backDate=&flightType=" + (n ? "roundWay" : "oneWay");
                    return false
                });
                $("#i-two").on("tap", "button", function() {
                    var e = h();
                    var t = e.startCity + "(" + e.startCode + ")" + "=" + e.destCity + "(" + e.destCode + ")" + "|" + e.startDate + "=" + e.backDate;
                    if (e.startCity == e.destCity) {
                        $.alert("出发城市和到达城市相同，请您重新选择");
                        return false
                    }
                    l(t);
                    f();
                    $.monitor({
                        name: 3061
                    });
                    $(this).addClass("on-btn");
                    var r = this;
                    setTimeout(function() {
                        $(r).removeClass("on-btn")
                    }, 500);
                    window.location.href = "/h5/flight/flightlist?startCity=" + e.startCity + "&startCode=" + e.startCode + "&destCity=" + e.destCity + "&destCode=" + e.destCode + "&startDate=" + e.startDate + "&backDate=" + e.backDate + "&flightType=" + (n ? "roundWay" : "oneWay");
                    return false
                })
            }


            function d(e, t) {
                $.ajax({
                    url: "/h5/flight/FlightCityDate?startCity=" + e + "&destCity=" + t,
                    type: "get",
                    dataType: "json",
                    success: function(e) {
                        if (e.status !== 0)
                            return;
                        window.initialDate = e.initialDate;
                        if (!window.location.href.indexOf("startDate") > 0) {
                            var t = parseInt(window.initialDate) + 1;
                            day = $.date.getWeekStr(t);
                            if ($.status == "local_city") {
                                $(".oneWayTime").html('<span class="f18 oneWayTime">' + t + '<span class="week">' + day + "</span></span>")
                            } else {
                                $(".roundGoTime").html("<span>" + t + '<span class="week">' + day + "</span></span>")
                            }
                        }
                    }
                })
            }
            function v() {
                function a(e) {
                    var t, n, o;
                    var u = $("#arrCal")
                      , a = u.data("date").trim()
                      , f = $("#depCal");
                    $.router.back();
                    c($(s[i]), e);
                    if (i === 0) {
                        m(h())
                    }
                    if (i === 1 && l(e, a)) {
                        t = $.date.toDateObj(e);
                        n = t.getDate();
                        t.setDate(n + 2);
                        if (l($.date.format(t), $.date.format(r))) {
                            c(u, $.date.format(r));
                            c(f, $.date.format(new Date(r.getFullYear(),r.getMonth(),r.getDate() - 2)))
                        } else {
                            c(u, $.date.format(t))
                        }
                    }
                    o = p($.date.toDateObj(u.data("date").trim()), $.date.toDateObj(f.data("date").trim()));
                    $("#days").html(o + "天")
                }
                function f(e, t) {
                    $.router.back();
                    c($(s[1]), e);
                    c($(s[2]), t);
                    var n = p($.date.toDateObj(t.trim()), $.date.toDateObj(e.trim()));
                    $("#days").html(n + "天")
                }
                function l(e, t) {
                    return $.date.toDateObj(e) - $.date.toDateObj(t) >= 0
                }
                function c(e, t) {
                    if (e && t) {
                        e.attr("data-date", t);
                        e.find("span").html($.date.getWeekStr(t));
                        var n = t.split("-");
                        e[0].firstChild.data = n[1] + "月" + n[2] + "日"
                    }
                }
                function p(e, t) {
                    return parseInt(Math.abs(e - t) / 1e3 / 60 / 60 / 24) + 1
                }
                var e = $("#indexCal")
                  , t = $("#indexRoundWayCal")
                  , n = new Date
                  , r = new Date;
                r.setYear(r.getFullYear() + 1);
                var i, s = ["#oneWayCal", "#depCal", "#arrCal"];
                var o = new $.calendar({
                    container: "#indexCal",
                    validate: 12,
                    validType: "month",
                    callback: a,
                    isRoundWay: false
                });
                var u = new $.calendar({
                    container: "#indexRoundWayCal",
                    validate: 12,
                    validType: "month",
                    callback: f,
                    isRoundWay: true
                });

                $("body").on("tap", "#oneWayCal", function() {
                    i = 0;
                    o.setStart(new Date);
                    $.monitor({
                        name: 3182
                    });
                    $.router.slideIn("calendar")
                }).on("tap", "#depCal", function() {
                    i = 1;
                    u.setStart(new Date);
                    $.monitor({
                        name: 3183
                    });
                    $.router.slideIn("roundwayCalendar")
                }).on("tap", "#arrCal", function(e) {
                    i = 2;
                    u.setStart(new Date);
                    $.monitor({
                        name: 3183
                    });
                    $.router.slideIn("roundwayCalendar")
                });
                e.on("click", ".back", function() {
                    $.router.back();
                    return false
                });
                t.on("click", ".back", function() {
                    $.router.back();
                    return false
                })
            }
            function m(e) {
                if (n || !window.hasC2BPrice) {
                    return
                }
                var t = true;
                if (!e.startCity) {
                    t = false
                } else if (!e.destCity) {
                    t = false
                } else if (!e.startDate) {
                    t = false
                }
                if (!t) {
                    i.hide();
                    return
                }
                if (!e.timeRange) {
                    e.timeRange = "00:00-24:00"
                }

            }

            var n = $(".tab .on").text() == "单程" ? false : true;
            var r = e.____MODULES["0021db4149a95c03946cdd751bceca9c"]
              , i = $(".dijia_wrap");
            s();
            $(".dijia_wrap").on("tap", ".dijia", function() {
                $.monitor({
                    name: 3204
                });
                var e = $(this).data();
                location.href = "/h5/flightns/c2b/prebooking?startCity=" + e.startCity + "&startCode=" + e.startCode + "&destCity=" + e.destCity + "&destCode=" + e.destCode + "&startDate=" + e.startDate
            });
            $("#index").on("tap", ".selCity", function() {
                var e = $(this);
                $.router.slideIn("cityList", {
                    highlightCity: e.text().trim(),
                    refillCity: function(t, r) {
                        e.text(t);
                        e.attr("data-code", r);
                        $.router.back();
                        if (!n) {
                            m(h());
                            d($(".oStartCity").text().trim(), $(".oEndCity").text().trim())
                        } else {
                            d($(".rStartCity").text().trim(), $(".rEndCity").text().trim())
                        }
                        return false
                    }
                })
            });
            $(".backIndex").on("mouseover", function(e) {
                $.monitor({
                    name: 3051
                });
                return false
            });
            $(".ad").on("tap", function() {
                $.monitor({
                    name: 3062
                })
            });
            e.____MODULES["230856ba4b9ab4ac7ab77cb8dfb1d7ea"]
        })
    }(t.exports, t, e);
    e.____MODULES["dcaa6d4a9b0bb912c08edcd4e4b27f3a"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "03d1aef391c836c9df190719961af1a4",
        filename: "cityList.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        $(function() {
            function o() {
                k();
            }
            function u(e) {
                if (window.localStorage.getItem(e)) {
                    window.localStorage.removeItem(e)
                }
            }
            function c(n) {
                if ($.storage.get("local_city")) {
                    u("local_city")
                }
                if ($.storage.get("local_inter_city")) {
                    u("local_inter_city")
                }
                if (!$.storage.get(n)) {
                    $(".quickHist").hide();
                    return
                }
                $(".quickHist").css("display", "block");
                var r = $.storage.get(n).split(",");
                var i = "<dt>历史</dt>";
                for (var s = 0; s < r.length; s++) {
                    i += "<dd data-val='" + r[s] + "' data-hcode='" + h(r[s]) + "'>" + (r[s].length > 5 ? r[s].substring(0, 5) : r[s]) + "</dd>"
                }
                n == "local_city2" ? $(".histCity").empty().html(i) : $(".interHistCity").empty().html(i);
                if (n == "local_city2" && e && !f) {
                    e.unBind();
                    e.reset();
                    L();
                    delete e;
                    e = new $.CharTip({
                        charEl: $(".innerChar"),
                        cityEl: $(".i-inner"),
                        rightEl: $(".innerTopTip"),
                        charTitleEl: $(".innerChar .charTitle")
                    });
                    e.bindEvent();
                    A(e.val, e.calcuDOM, e.config.rightEl);
                    f = true
                } else if (n == "local_inter_city22" && t && !l) {
                    t.unBind();
                    t.reset();
                    L();
                    delete t;
                    t = new $.CharTip({
                        charEl: $(".interChar"),
                        cityEl: $(".i-inter"),
                        rightEl: $(".interTopTip"),
                        charTitleEl: $(".interChar .charTitle")
                    });
                    t.bindEvent();
                    A(t.val, t.calcuDOM, t.config.rightEl);
                    l = true
                }
            }
            function h(e) {
                var t;
                if ($.status == "local_inter_city22") {
                    t = r
                } else {
                    t = n
                }
                for (var i = 0; i < t.length; i++) {
                    for (var s = 0; s < t[i].n.length; s++) {
                        var o = t[i].n[s].n;
                        if (o == e) {
                            return t[i].n[s].c
                        }
                    }
                }
                return ""
            }
            function p(e) {
                var t;
                t = n || [];
                for (var i = 0; i < t.length; i++) {
                    for (var s = 0; s < t[i].n.length; s++) {
                        var o = t[i].n[s].n;
                        if (o == e) {
                            return t[i].n[s].c
                        }
                    }
                }
                t = r || [];
                for (var i = 0; i < t.length; i++) {
                    for (var s = 0; s < t[i].n.length; s++) {
                        var o = t[i].n[s].n;
                        if (o == e) {
                            return t[i].n[s].c
                        }
                    }
                }
                return ""
            }
            function d(e) {
                var t = h(e);
                var n = $(".currenlocaCity");
                if (t) {
                    $("#iCity .on").removeClass("on");
                    $("[data-hcode=" + t + "]").addClass("on");
                    $(".char-c .check-c").removeClass("check-c");
                    $("[data-code=" + t + "]").find(".cc").addClass("check-c");
                    n.text() == e ? n.addClass("on") : {};
                    $(".history dd").each(function(t, n) {
                        if ($(this).text().trim() === e) {
                            $(this).addClass("on")
                        }
                    })
                } else {
                    $("#iCity .on").removeClass("on");
                    $(".char-c .check-c").removeClass("check-c")
                }
            }
            function v(e) {
                var t = "";
                if (e.length == 0) {
                    e = [{
                        display: "无结果",
                        key: "无结果"
                    }]
                }
                var n = 0;
                for (var r = 0; r < e.length; r++) {
                    if (e[r].type == 8) {
                        if (e[r].key == "中国") {
                            n = 3;
                            break
                        }
                        var i = e.splice(r, 1);
                        t = '<div class="country-result"> * 以下为' + i[0].key + '对应城市</div><div class="country-result">热门城市</div>';
                        n = 1;
                        break
                    } else if (e[r].type == 7) {
                        e.splice(r, 1);
                        n = 2;
                        t = '<div class="country-result">您要找的是不是：</div>';
                        break
                    } else if (e[r].type == 1 || e[r].type == 6) {
                        e.splice(r, 1);
                        n = 4;
                        t = '<div class="country-result">邻近机场</div>';
                        break
                    }
                }
                for (var r = 0; r < e.length; r++) {
                    if (n == 2) {
                        e[r].display = "相关城市：" + e[r].display;
                        var s = e[r].display.split(" ");
                        var o = s.shift();
                        if (s.length) {
                            var u = (s + "").replace(/,/g, " ");
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + '<span class="cc-code"> ' + u + "</span></li>"
                        } else {
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + "</li>"
                        }
                    } else if (n == 1) {
                        var s = e[r].display.split(" ");
                        var o = s.shift();
                        if (s.length) {
                            var u = (s + "").replace(/,/g, " ");
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + '<span class="cc-code"> ' + u + "</span></li>"
                        } else {
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + "</li>"
                        }
                    } else if (n == 3) {
                        if (e[r].type !== 6) {
                            e.splice(r, 1)
                        }
                        var s = e[r].display.split(" ");
                        var o = s.shift();
                        if (s.length) {
                            var u = (s + "").replace(/,/g, " ");
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + '<span class="cc-code"> ' + u + "</span></li>"
                        } else {
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + "</li>"
                        }
                    } else if (n == 4) {
                        if (e[r].length) {
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + e[r].key + "--" + e[r].length + "公里</li>"
                        } else {
                            var s = e[r].display.split(" ");
                            var o = s.shift();
                            if (s.length) {
                                var u = (s + "").replace(/,/g, " ");
                                t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + '<span class="cc-code"> ' + u + "</span></li>"
                            } else {
                                t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + "</li>"
                            }
                        }
                    } else {
                        var s = e[r].display.split(" ");
                        var o = s.shift();
                        if (s.length) {
                            var u = (s + "").replace(/,/g, " ");
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + '<span class="cc-code"> ' + u + "</span></li>"
                        } else {
                            t += '<li data-key="' + e[r].key + '" data-code="' + e[r].code + '">' + o + "</li>"
                        }
                    }
                }
                $("#closeSearch").css("display", "block");
                $(".sTip").addClass("on-sear-t").empty().html(t)
            }
            function m() {
                $(".sTip").css("display", "none");
                $(".inputControl").css("textAlign", "center").val("").trigger("blur");
                $("#search").animate({
                    translateX: 0 + "px"
                }, 200, "ease-out");
                $("#closeSearch").hide()
            }
            function y() {
                var e = _.template($("#cityListTemp").html())({
                    citydata: n
                })
                  , t = _.template($("#hotCityTemp").html())({
                    citydata: n
                });
                $(".innerChar").html(e);
                $(".hCL").html(t)
            }
            function b() {
                var e = _.template($("#cityListTemp").html())({
                    citydata: r
                })
                  , t = _.template($("#hotCityTemp").html())({
                    citydata: r
                });
                $(".interChar").html(e);
                $(".interhCL").html(t)
            }
            function w() {
                var e = ""
                  , t = "<li class='quickLocation' data-id='-2'>定位</li><li class=\"quickHist\" data-id=\"-1\">历史</li><li class='quickHotCity' data-id=\"0\">热门</li>";
                for (var r = 1; r < n.length; r++) {
                    var o = n[r].k;
                    e += "<li>" + o + "</li>";
                    t += '<li class="letter" data-id=' + r + ">" + o + "</li>"
                }
                $(".innerRT").html(e);
                $(".interRT").html(e);
                $(".innerRig").html(t);
                var u = $("#iCity");
                $.router.regist("cityList", {
                    dom: u,
                    show: function(e) {
                        P();
                        i = e.highlightCity;
                        s = e.refillCity;
                        u.one("click.citylist", "dd", function() {
                            var t = $(this).addClass("act");
                            setTimeout(function() {
                                $(t).removeClass("act");
                                e.refillCity($(t).data("val"), $(t).data("hcode") || $(t).data("code"));
                                a(D($(t).data("val").trim()), $(t).data("val"));
                                c("local_inter_city22")
                            }, 200)
                        });
                        u.removeClass("onAble");
                        d(i)
                    },
                    hide: function() {
                        u.off(".citylist")
                    }
                });
                var f = [".", "..", "..."];
                var l = 0;
                setInterval(function() {
                    var e = $(".locLoding");
                    if (l == 3) {
                        l = 0
                    }
                    $(e).text(f[l]);
                    l++
                }, 500)
            }

            function S() {
                var e = $(this).data("key")
                  , t = $(this).data("code");
                if (e == "无结果") {
                    return false
                }
                $(window).deaf("scroll");
                s(e, t);
                m();
                a(D(e), e);
                return false
            }
            function x() {
                $(".sTip").on("tap", "li", S)
            }
            function T() {
                b();
                C(r);
                c("local_inter_city22");
                e.unBind();
                e.reset();
                t = new $.CharTip({
                    charEl: $(".interChar"),
                    cityEl: $(".i-inter"),
                    rightEl: $(".interTopTip"),
                    charTitleEl: $(".interChar .charTitle")
                });
                L();
                A(t.val, t.calcuDOM, t.config.rightEl)
            }
            function N() {
                $.storage.remove("inter_city_data");
                if (r) {
                    return
                }
                $.storageAjax({
                    type: "GET",
                    url: "citylist?type=12",
                    dataType: "json",
                    effectiveTime: 3,
                    success: function(e) {
                        r = e;
                        T()
                    }
                })
            }
            function C(e) {
                var t = ""
                  , n = "<li class='quickLocation' data-id='-2'>定位</li><li class=\"quickHist\" data-id='-1'>历史</li><li class='quickHotCity' data-id='0'>热门</li>";
                for (var r = 1; r < e.length; r++) {
                    var i = e[r].k;
                    t += "<li>" + i + "</li>";
                    n += '<li class="letter" data-id=' + r + ">" + i + "</li>"
                }
                $(".interRT").html(t);
                $(".interRig").html(n)
            }
            function k() {
                $("#domestic").on("touchend", function() {
                    $.status = "local_city2";
                    $(window).scrollTop(0);
                    $(this).addClass("on-t");
                    $(".i-inter").hide();
                    $(".i-inner").show();
                    $("#inter").removeClass("on-t");
                    if (t) {
                        t.unBind();
                        t.reset()
                    }
                    e.bindEvent();
                    L();
                    A(e.val, e.calcuDOM, e.config.rightEl);
                    $.monitor({
                        name: 3063
                    });
                    d(i);
                    c("local_city2");
                    $(".innerRig").show();
                    $(".interRig").hide();
                    return false
                });
                $("#inter").on("touchend", function() {
                    $.status = "local_inter_city22";
                    $(window).scrollTop(0);
                    $(this).addClass("on-t");
                    $("#domestic").removeClass("on-t");
                    $(".i-inner").hide();
                    $(".i-inter").show();
                    $(".interRig").show();
                    $(".innerRig").hide();
                    N();
                    if (r) {
                        e.unBind();
                        e.reset();
                        t.bindEvent();
                        d(i);
                        L();
                        A(t.val, t.calcuDOM, t.config.rightEl)
                    }
                    $.monitor({
                        name: 3064
                    });
                    return false
                })
            }
            function M(e) {
                $.monitor({
                    name: 3065
                });
                if (O)
                    return;
                var t = $(".selCityTap");
                if (t.find("span").length) {
                    t.html('<dt>定位</dt> <span class="locCity">正在定位<span class="locLoding">...</span></span>')
                }
                $.location(function(e) {
                    O = true;
                    var n = e.addressComponents.city.slice(0, -1)
                      , r = p(n) || "";
                    t.html('<dt>定位</dt><dd class="currenlocaCity" data-val="' + n + '" data-code="' + r + '">' + n + "</dd>")
                }, function(e) {
                    t.find("span").html('定位失败，<span class="repateLocation" style="color:#1ba1ba">请重试</span>');
                    $(".repateLocation").on("tap", M)
                });
                return false
            }
            function D(e) {
                for (var t = 0; t < n.length; t++) {
                    for (var r = 0; r < n[t].n.length; r++) {
                        if (n[t].n[r].n != undefined && e == n[t].n[r].n) {
                            return "local_city2"
                        }
                    }
                }
                return "local_inter_city22"
            }
            function P() {
                if (!e) {
                    c("local_city2");
                    y();
                    e = new $.CharTip({
                        charEl: $(".innerChar"),
                        cityEl: $(".i-inner"),
                        rightEl: $(".innerTopTip"),
                        charTitleEl: $(".innerChar .charTitle")
                    });
                    A(e.val, e.calcuDOM, e.config.rightEl);
                    x()
                }
                if ($.status == "local_inter_city22") {
                    $("#inter").trigger("tap");
                    t.reset()
                } else {
                    $("#domestic").trigger("tap");
                    e.reset()
                }
                d(i)
            }
            var e, t;
            var n, r;
            var i, s;
            var a = function(e, t) {
                if ($.storage.get("local_city")) {
                    u("local_city")
                }
                if ($.storage.get("local_inter_city")) {
                    u("local_inter_city")
                }
                if (!$.storage.get(e)) {
                    var n = [];
                    n[0] = t;
                    $.storage.set(e, n + "")
                } else {
                    var r = $.storage.get(e).split(",")
                      , i = r.indexOf(t);
                    if (i !== -1) {
                        r.splice(i, 1)
                    }
                    r.unshift(t);
                    r.length = r.length <= 3 ? r.length : 3;
                    $.storage.set(e, r + "")
                }
            }
            ;
            var f = false
              , l = false;
            var L = function() {
                $(".innerRig").off("touchstart.rightTap", ".letter").off("tap", ".quickHist").off("tap", ".quickHotCity");
                $(".interRig").off("touchstart.rightTap", ".letter").off("tap", ".quickHist").off("tap", ".quickHotCity")
            }
            ;
            var A = function(n, r, i) {
                var s;
                var o;
                var u;
                var a, f = 0;
                var l;
                if ($.status == "local_inter_city22") {
                    s = ".interRig";
                    o = 22
                } else {
                    s = ".innerRig";
                    o = 21
                }
                var c = $(window).height();
                var h = 159;
                $("" + s).on("touchstart.rightTap", ".letter", function(e) {
                    var t = 0;
                    var s = e.timeStamp;
                    var o = this;
                    $(o).one("touchmove.rightTap", function(e) {
                        t++;
                        if (t > 5) {
                            return false
                        }
                    });
                    $(o).on("touchend.rightTap", function(e) {
                        var t = e.timeStamp;
                        if (t - s < 500) {
                            var u = $(this).data("id");
                            $(window).scrollTop(n[u - 1] - r.fixH + 4);
                            $(i.children()[0]).animate({
                                translateY: (u - 1) * (-r.dtH + 1) + "px"
                            }, 0);
                            $(".charT").text($(this).text()).css("display", "block");
                            setTimeout(function() {
                                $(".charT").hide()
                            }, 300);
                            $.monitor({
                                name: 3068
                            });
                            $(o).off("rightTap");
                            return false
                        }
                    });
                    return false
                }).on("touchmove", function(e) {
                    return false;
                    var t = this;
                    var s = parseInt(e.touches[0].clientY);
                    if (s > c || s < h) {
                        return false
                    }
                    if (a === undefined) {
                        a = s
                    }
                    var u = s;
                    var l = parseInt($(this).find("[data-id='1']").css("height"));
                    var p = u - a;
                    var d;
                    if (p >= 0) {
                        d = Math.ceil(p / l) - 1
                    } else {
                        d = Math.ceil(-p / l) - 1
                    }
                    if (d >= 0 && d <= o && d != f) {
                        f = d;
                        $(window).scrollTop(n[f] - r.fixH + 4);
                        $(i.children()[0]).animate({
                            translateY: (f - 1) * (-r.dtH + 1) + "px"
                        }, 0);
                        $(".charT").text($(t).find(".letter")[f].innerHTML).css("display", "block");
                        setTimeout(function() {
                            $(".charT").hide()
                        }, 200);
                        $.monitor({
                            name: 3069
                        });
                        return false
                    }
                    return false
                }).on("tap", ".quickLocation", function(n) {
                    if (e) {
                        e.reset()
                    }
                    if (t) {
                        t.reset()
                    }
                    document.body.scrollTop = 0;
                    $.monitor({
                        name: 3068
                    });
                    n.stopPropagation()
                }).on("tap", ".quickHotCity", function(n) {
                    if ($.status == "local_inter_city22") {
                        if (t) {
                            t.reset()
                        }
                        var r = $("#iCity .interhCL").offset().top - $(".i-inter").offset().top
                    } else {
                        if (e) {
                            e.reset()
                        }
                        var r = $("#iCity .hCL").offset().top - $(".i-inner").offset().top
                    }
                    document.body.scrollTop = r;
                    $.monitor({
                        name: 3067
                    });
                    n.stopPropagation()
                }).on("tap", ".quickHist", function(n) {
                    if ($.status == "local_inter_city22") {
                        if (t) {
                            t.reset()
                        }
                        var r = $(".interHistCity").offset().top - $(".i-inter").offset().top
                    } else {
                        if (e) {
                            e.reset()
                        }
                        var r = $(".histCity").offset().top - $(".i-inner").offset().top
                    }
                    document.body.scrollTop = r;
                    $.monitor({
                        name: 3066
                    });
                    n.stopPropagation()
                })
            }
            ;

            var O = false;
            $(".getLoc").on("tap", M);
            $(".goBack").click(function() {
                $.monitor({
                    name: 3051
                });
                $(window).deaf("scroll");
                $.router.back();
                return false
            });
            o();
            $(".back").on("tap", function() {
                return false
            })
        })
    }(t.exports, t, e);
    e.____MODULES["03d1aef391c836c9df190719961af1a4"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "c1f73761b2448cdbfc9ab6ead0a9eb6d",
        filename: "pagePerformance.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        window.addEventListener("load", function() {
            try {
                var e = window.performance;
                var t = window._performanceData || {
                    server_start_time: 0,
                    server_end_time: 0
                };
                if (!e || !e.timing) {
                    return
                }
                var n = {
                    "/h5/flight/flightAV": "booking",
                    "/h5/flight/": "home",
                    "/h5/flight/flightDetail": "detial",
                    "/h5/flight/flightlist": "list",
                    "/inter/flight_list": "touchlist"
                };
                var r = e.timing;
                var i = r.navigationStart || r.fetchStart;
                var s = parseInt(r.responseStart - r.requestStart);
                var o = parseInt(r.responseEnd - r.responseStart);
                var u = parseInt(t.server_end_time - t.server_start_time);
                var a = parseInt(r.domainLookupEnd - i);
                var f = parseInt(r.requestStart - i);
                var l = parseInt(r.responseStart - i);
                var c = parseInt(r.responseEnd - i);
                var h = window.page_show_time ? parseInt(window.page_show_time - i) : 0;
                var p = parseInt(r.domContentLoadedEventStart - i);
                var d = parseInt(r.loadEventStart - i);
                var v = new Image;
                v.onerror = v.onload = function() {
                    v = null
                }
                ;
                var m = n[location.pathname];
                m == "list" && window.getData && getData("inter") && (m = "interlist");
            } catch (y) {}
        })
    }(t.exports, t, e);
    e.____MODULES["c1f73761b2448cdbfc9ab6ead0a9eb6d"] = t.exports
})(this);
(function(e) {
    var t = {
        id: "cb4fa73512676301f38e9a376d1110d3",
        filename: "index.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(t, n, r) {
        e.____MODULES["7bd293d45bd89746f4a7d281d824b28f"];
        e.____MODULES["3bdc67b088acd86c9e6f5a9ddc23bf29"];
        e.____MODULES["dcaa6d4a9b0bb912c08edcd4e4b27f3a"];
        e.____MODULES["03d1aef391c836c9df190719961af1a4"];
        e.____MODULES["c1f73761b2448cdbfc9ab6ead0a9eb6d"]
    }(t.exports, t, e);
    e.____MODULES["cb4fa73512676301f38e9a376d1110d3"] = t.exports
})(this)



var timeout;
function setJump(e){
	if(!$("#indexCal li").hasClass("date_bg")){
		clearTimeout(timeout);
		$(".error_message").addClass("show");
		timeout = setTimeout(function() {
			$(".error_message").addClass("hide");
		}, 2000);
	}else{
		$(".SetTime").removeClass("hide");
		$(".y_btnfixed").addClass("active")
		$(window).scrollTop(500);
		$(e).html("保存");
	}
	if($(".y_btnfixed").hasClass("active")){
		$(e).attr("onclick","javascript:history.back(-1)");
	}
}
