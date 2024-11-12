(window["webpackJsonpreact-rss-tutorial-app"] =
  window["webpackJsonpreact-rss-tutorial-app"] || []).push([
  [0],
  {
    221: function (e, t, a) {
      e.exports = a(480);
    },
    226: function (e, t, a) {},
    228: function (e, t, a) {},
    375: function (e, t, a) {},
    397: function (e, t, a) {},
    416: function (e, t) {},
    418: function (e, t) {},
    451: function (e, t) {},
    453: function (e, t) {},
    480: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        s = a(40),
        o = a.n(s),
        l = a(488),
        c = a(26),
        i = a(219),
        m = a.n(i),
        d = (a(226), a(33)),
        u = a(34),
        w = a.n(u),
        p = a(57),
        f = a(52),
        h = (a(228), a(32)),
        g = a(21),
        b = a.n(g),
        k = a(220),
        v = a(28),
        E = a.n(v),
        y = a(78),
        S = a.n(y),
        x = a(41),
        N = a.n(x),
        O = a(80),
        j = [
          { name: "BBC News", url: "http://feeds.bbci.co.uk/news/rss.xml" },
          { name: "The Intercept", url: "https://theintercept.com/feed/" },
          { name: "Al Jazeera", url: "http://www.aljazeera.com/xml/rss/all.xml" },
          { name: "UPI News", url: "http://rss.upi.com/news/top_news.rss" },
          { name: "The IB Times", url: "http://www.ibtimes.com/rss" },
          { name: "NY Times US", url: "https://rss.nytimes.com/services/xml/rss/nyt/US.xml" },
          { name: "NY Times World", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml" },
          { name: "Fox News", url: "http://feeds.foxnews.com/foxnews/latest" },
          { name: "Reuters", url: "https://news.google.com/rss/search?q=when:24h+allinurl:reuters.com&ceid=US:en&hl=en-US&gl=US" },
          { name: "Zero Hedge", url: "http://feeds.feedburner.com/zerohedge/feed" },
          { name: "NPR", url: "http://www.npr.org/rss/rss.php?id=1001" },
          { name: "TMZ", url: "http://www.tmz.com/category/politix/rss.xml" },
          { name: "NY POST", url: "http://nypost.com/news/feed/" },
          { name: "The Guardian World", url: "https://www.theguardian.com/world/rss" },
          { name: "The Guardian US", url: "https://www.theguardian.com/us-news/rss" },
          { name: "The Daily Mail US", url: "https://www.dailymail.co.uk/ushome/index.rss" },
          { name: "The Daily Mail World", url: "https://www.dailymail.co.uk/news/worldnews/index.rss" },
          { name: "The Sun", url: "https://www.thesun.co.uk/news/worldnews/feed/" },
          { name: "The Hill", url: "https://thehill.com/rss/syndicator/19109" },
          { name: "PBS", url: "https://www.pbs.org/newshour/feeds/rss/headlines" },
          { name: "Washington Examiner", url: "https://www.washingtonexaminer.com/tag/news.rss" },
          { name: "Politico", url: "https://www.politico.com/rss/politicopicks.xml" },
          { name: "CNBC", url: "https://www.cnbc.com/id/100727362/device/rss/rss.html" },
          { name: "LA Times", url: "https://www.latimes.com/world-nation.rss" },
          { name: "Independent", url: "http://www.independent.co.uk/news/world/rss" },
          { name: "NBC News", url: "http://feeds.nbcnews.com/nbcnews/public/news" },
          { name: "SCMP", url: "https://www.scmp.com/rss/91/feed" },
          { name: "Sky News", url: "http://feeds.skynews.com/feeds/rss/world.xml" },
          { name: "CBC", url: "https://www.cbc.ca/cmlink/rss-world" },
          { name: "Global News", url: "https://globalnews.ca/category/world/feed/" },
          { name: "Chicago Tribune", url: "https://www.chicagotribune.com/arcio/rss/category/nation-world" },
          { name: "Daily Caller", url: "http://dailycaller.com/feed/" },
          { name: "Reason", url: "https://reason.com/feed/" },
          { name: "Heavy", url: "https://heavy.com/news/feed/" },
          { name: "Just The News", url: "https://justthenews.com/rss.xml" },
          { name: "Business Insider", url: "https://feeds.businessinsider.com/custom/all" },
          { name: "All Sides", url: "https://www.allsides.com/news/rss" },
          { name: "RealClearPolitics", url: "http://feeds.feedburner.com/realclearpolitics/qlMj" },
          { name: "WSJ World", url: "https://feeds.a.dj.com/rss/RSSWorldNews.xml" },
          { name: "WSJ Business", url: "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml" },
          { name: "WSJ Market", url: "https://feeds.a.dj.com/rss/RSSMarketsMain.xml" },
          { name: "Newsweek", url: "https://www.newsweek.com/rss" },
          { name: "MarketWatch", url: "http://feeds.marketwatch.com/marketwatch/topstories/" },
          { name: "The Telegraph", url: "https://www.telegraph.co.uk/news/rss.xml" },
        ],
        C = a(169),
        D = O.object({
          name: O.string().required("URL is required"),
          url: O.string()
            .required("URL is required")
            .matches(
              /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
              "Invalid URL"
            ),
        });
      console.log = function () {};

      var T = Object(h.a)(function (e) {
          var t = this,
            a = e.feedsStore,
            s = Object(n.useState)(!1),
            o = Object(f.a)(s, 2),
            l = o[0],
            c = o[1],
            i = Object(n.useState)(!1),
            m = Object(f.a)(i, 2),
            u = m[0],
            h =
              (m[1],
              (function () {
                var e = Object(p.a)(
                  w.a.mark(function e(t, n) {
                    var r, s, o;
                    return w.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = n.setSubmitting),
                                (s = n.setErrors),
                                (o = n.resetForm),
                                (e.prev = 1),
                                (e.next = 4),
                                D.validate(t)
                              );
                            case 4:
                              o({}),
                                a.feeds.push(t),
                                a.setFeeds(a.feeds),
                                localStorage.setItem(
                                  "newsfeeds",
                                  JSON.stringify(a.feeds)
                                ),
                                (e.next = 14);
                              break;
                            case 10:
                              (e.prev = 10),
                                (e.t0 = e.catch(1)),
                                r(!1),
                                s({ submit: e.t0.message });
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 10]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })()),
            g = function (e) {
              a.feeds.splice(e, 1),
                a.setFeeds(a.feeds),
                localStorage.setItem("newsfeeds", JSON.stringify(a.feeds));
            };
          return (
            Object(n.useEffect)(
              function () {
                if (!l) {
                  var e = [],
                    t = "";
                  try {
                    (e = JSON.parse(localStorage.getItem("newsfeeds"))),
                      Array.isArray(e) ? a.setFeeds(e) : a.setFeeds(j);
                  } catch (n) {
                    console.log("error" + n);
                  }
                  try {
                    (t = JSON.parse(localStorage.getItem("darkmode"))),
                      a.setDarkMode(t),
                      console.log(t);
                  } catch (n) {
                    console.log("error" + n);
                  }
                  c(!0), console.log("Useeffect ran");
                }
              },
              [l]
            ),
            u
              ? r.a.createElement(d.a, {
                  to: "/feed?".concat(C.encode({ url: a.feed })),
                })
              : r.a.createElement(
                  "div",
                  { className: "home-page" },
                  r.a.createElement("h1", { className: "center" }, "RSS Feeds"),
                  r.a.createElement(
                    N.a,
                    {
                      variant: 1 != a.darkmode ? "primary" : "info",
                      onClick: function () {
                        return (
                          (e = !a.darkmode),
                          a.setDarkMode(e),
                          localStorage.setItem("darkmode", JSON.stringify(e)),
                          void console.log("darkmode ran  " + e)
                        );
                        var e;
                      },
                    },
                    1 != a.darkmode ? "Turn On Dark Mode" : "Turn Off Dark Mode"
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    k.a,
                    {
                      validationSchema: D,
                      onSubmit: h,
                      initialValues: { name: "", url: "" },
                    },
                    function (e) {
                      var t = e.handleSubmit,
                        n = e.handleChange,
                        s = (e.handleBlur, e.values),
                        o = e.touched,
                        l = (e.isInvalid, e.errors);
                      return r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("h5", null, "Add a RSS feed"),
                        r.a.createElement(
                          E.a,
                          { noValidate: !0, onSubmit: t },
                          r.a.createElement(
                            E.a.Row,
                            null,
                            r.a.createElement(
                              E.a.Group,
                              { as: S.a, md: "12", controlId: "name" },
                              r.a.createElement(E.a.Control, {
                                className:
                                  1 != a.darkmode
                                    ? "bg-light"
                                    : "bg-dark text-light",
                                type: "text",
                                name: "name",
                                placeholder: "Name",
                                value: s.name || "",
                                onChange: n,
                                isInvalid: o.name && l.name,
                              }),
                              r.a.createElement(
                                E.a.Control.Feedback,
                                { type: "invalid" },
                                l.name
                              )
                            ),
                            r.a.createElement(
                              E.a.Group,
                              { as: S.a, md: "12", controlId: "url" },
                              r.a.createElement(E.a.Control, {
                                className:
                                  1 != a.darkmode
                                    ? "bg-light"
                                    : "bg-dark text-light",
                                type: "text",
                                name: "url",
                                placeholder: "URL",
                                value: s.url || "",
                                onChange: n,
                                isInvalid: o.url && l.url,
                              }),
                              r.a.createElement(
                                E.a.Control.Feedback,
                                { type: "invalid" },
                                l.url
                              )
                            )
                          ),
                          r.a.createElement(
                            N.a,
                            {
                              variant: 1 != a.darkmode ? "primary" : "info",
                              type: "submit",
                            },
                            "Add"
                          )
                        )
                      );
                    }
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    N.a,
                    {
                      variant: 1 != a.darkmode ? "primary" : "info",
                      onClick: function () {
                        localStorage.removeItem("newsfeeds"), c(!1);
                      },
                    },
                    "Reset to Default Feeds"
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement("br", null),
                  a.feeds.map(function (e, n) {
                    return r.a.createElement(
                      b.a,
                      { key: n },
                      r.a.createElement(
                        "div",
                        { className: 1 != a.darkmode ? "bg-white" : "bg-dark" },
                        r.a.createElement(
                          b.a.Title,
                          {
                            className:
                              1 != a.darkmode
                                ? "card-title"
                                : "card-title bg-dark text-light ",
                          },
                          e.name
                        ),
                        r.a.createElement(
                          b.a.Subtitle,
                          { style: { paddingLeft: "20px" } },
                          e.url
                        ),
                        r.a.createElement(
                          b.a.Body,
                          null,
                          r.a.createElement(
                            N.a,
                            {
                              variant: 1 != a.darkmode ? "primary" : "info",
                              onClick: g.bind(t, n),
                            },
                            "Delete"
                          )
                        )
                      )
                    );
                  })
                )
          );
        }),
        I = (a(375), a(60)),
        B = a.n(I),
        F = a(127),
        M = a.n(F),
        R = a(4);
      var J = Object(h.a)(function (e) {
          var t = e.feedsStore;
          return r.a.createElement(
            B.a,
            {
              bg: 1 != t.darkmode ? "primary" : "secondary",
              expand: "lg",
              variant: "dark",
            },
            r.a.createElement(
              B.a.Brand,
              null,
              r.a.createElement(
                c.b,
                { style: { color: "white", textDecoration: "none" }, to: "/" },
                "News"
              )
            ),
            r.a.createElement(B.a.Toggle, {
              "aria-controls": "basic-navbar-nav",
            }),
            r.a.createElement(
              B.a.Collapse,
              { id: "basic-navbar-nav" },
              r.a.createElement(
                M.a,
                { className: "mr-auto" },
                r.a.createElement(
                  M.a.Link,
                  {
                    href: "https://weboas.is/",
                    style: { color: "white", textDecoration: "none" },
                  },
                  "Home"
                ),
                r.a.createElement(
                  c.b,
                  {
                    style: { color: "white", textDecoration: "none" },
                    className: "nav-item nav-link active",
                    to: "/settings",
                  },
                  "Settings"
                )
              )
            )
          );
        }),
        A = a(489),
        L = (a(397), a(398)),
        U = a(444),
        W = a(445),
        q = (new (a(446))(), a(469));
      var P = Object(d.f)(
        Object(h.a)(function (e) {
          var t = this,
            a = e.feedsStore,
            s = Object(n.useState)(!1),
            o = Object(f.a)(s, 2),
            l = o[0],
            c = o[1],
            i = Object(n.useState)([]),
            m = Object(f.a)(i, 2),
            d = m[0],
            u = m[1],
            h = [],
            g = (function () {
              var e = Object(p.a)(
                w.a.mark(function e(t) {
                  return w.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            L.load(
                              "https://cors.club/" + t.url,
                              function (e, a) {
                                if (e) console.log("error" + t);
                                else {
                                  a.items.map(function (e) {
                                    return (e.sourceName = a.title);
                                  });
                                  var n = q.uniqBy(a.items, "title");
                                  h.push(q.uniqBy(a.items, "title")),
                                    (n = []),
                                    u(h.flat()),
                                    console.log(n);
                                }
                              }
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function () {
              if (!l) {
                var e = [],
                  t = "";
                try {
                  (e = JSON.parse(localStorage.getItem("newsfeeds"))),
                    Array.isArray(e) ? a.setFeeds(e) : a.setFeeds(j);
                } catch (n) {
                  console.log("error" + n);
                }
                try {
                  (t = JSON.parse(localStorage.getItem("darkmode"))),
                    a.setDarkMode(t),
                    console.log(t);
                } catch (n) {
                  console.log("error" + n);
                }
                a.feeds.map(
                  (function () {
                    var e = Object(p.a)(
                      w.a.mark(function e(t) {
                        return w.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), g(t);
                              case 2:
                                (h = []), console.log("I am updating");
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              }
              c(!0);
            },
            [l]
          );
          var k = function (e) {
            window.open(e);
          };
          return 0 === d.length
            ? r.a.createElement(
                "div",
                { className: "feed-page" },
                r.a.createElement("h2", null, " Loading! "),
                " "
              )
            : r.a.createElement(
                "div",
                { className: "feed-page" },
                " ",
                d
                  .sort(function (e, t) {
                    var a = new Date(e.pubDate).getTime();
                    return new Date(t.pubDate).getTime() - a;
                  })
                  .splice(0, 250)
                  .map(function (e, n) {
                    if (void 0 != e.pubDate)
                      return r.a.createElement(
                        b.a,
                        { key: n },
                        r.a.createElement(
                          b.a.Header,
                          {
                            className:
                              1 != a.darkmode
                                ? "card-title"
                                : "card-title bg-dark text-light ",
                          },
                          " ",
                          e.title,
                          " "
                        ),
                        r.a.createElement(
                          b.a.Body,
                          { className: 1 != a.darkmode ? "" : "bg-dark" },
                          r.a.createElement(
                            b.a.Text,
                            null,
                            " ",
                            W.decode(
                              U(e.description).substring(0, 250) + "..."
                            ),
                            " "
                          ),
                          " ",
                          r.a.createElement(
                            b.a.Text,
                            { className: "time-ago" },
                            r.a.createElement(
                              "span",
                              null,
                              r.a.createElement(A.a, {
                                date: new Date(e.pubDate),
                              }),
                              " ",
                              r.a.createElement(
                                "span",
                                null,
                                " ",
                                "  from ".concat(e.sourceName),
                                " "
                              ),
                              " "
                            ),
                            " "
                          ),
                          " ",
                          " ",
                          r.a.createElement(
                            N.a,
                            {
                              variant: 1 != a.darkmode ? "primary" : "info",
                              onClick: k.bind(t, e.link),
                            },
                            "Open",
                            " "
                          ),
                          " "
                        ),
                        " "
                      );
                  }),
                " "
              );
        })
      );
      var z = Object(h.a)(function (e) {
        var t = e.feedsStore;
        return r.a.createElement(
          "div",
          {
            className:
              1 != t.darkmode ? "app bg-white" : "app bg-dark text-light",
          },
          r.a.createElement(J, { feedsStore: t }),
          r.a.createElement(d.b, {
            path: "/",
            exact: !0,
            component: function (e) {
              return r.a.createElement(
                P,
                Object.assign({}, e, { feedsStore: t })
              );
            },
          }),
          r.a.createElement(d.b, {
            path: "/settings",
            exact: !0,
            component: function (e) {
              return r.a.createElement(
                T,
                Object.assign({}, e, { feedsStore: t })
              );
            },
          })
        );
      });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var G = a(217),
        H = a(218),
        Z = (function () {
          function e() {
            Object(G.a)(this, e),
              (this.feeds = ["Hello"]),
              (this.feed = ""),
              (this.darkmode = !1);
          }
          return (
            Object(H.a)(e, [
              {
                key: "setFeeds",
                value: function (e) {
                  this.feeds = e;
                },
              },
              {
                key: "setSelectedFeed",
                value: function (e) {
                  this.feed = e;
                },
              },
              {
                key: "setDarkMode",
                value: function (e) {
                  this.darkmode = e;
                },
              },
            ]),
            e
          );
        })(),
        V = new (Z = Object(R.h)(Z, {
          feeds: R.m,
          feed: R.m,
          darkmode: R.m,
          setDarkMode: R.d,
          setFeeds: R.d,
          setSelectedFeed: R.d,
        }))();
      l.a.locale(m.a),
        o.a.render(
          r.a.createElement(
            c.a,
            { basename: "/news" },
            r.a.createElement(z, { feedsStore: V })
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[221, 1, 2]],
]);
