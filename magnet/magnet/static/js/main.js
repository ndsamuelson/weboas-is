(this["webpackJsonptorrent-engine"] =
  this["webpackJsonptorrent-engine"] || []).push([
  [0],
  {
    201: function (e, t, n) {
      "use strict";
      (function (e) {
        var a = n(130),
          r = n.n(a),
          c = n(202),
          s = n(66),
          o = n(0),
          u = n(203),
          i = n.n(u),
          l = n(20),
          f = n(340),
          d = n(128),
          h = n(93),
          p = Object(s.a)(function (t) {
            var n = t.appStore;
            0 === n.database.length &&
              i()()
                .then(
                  (function () {
                    var t = Object(c.a)(
                      r.a.mark(function t(a) {
                        return r.a.wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                d.get(h.parse("https://magnet.b-cdn.net/database.zip"), function (t) {
                                  if (200 === t.statusCode) {
                                    var r = [];
                                    t.on("data", function (e) {
                                      r.push(e);
                                    }),
                                      t.on("end", function () {
                                        var t = e.concat(r);
                                        f.loadAsync(t)
                                          .then(function (e) {
                                            return e
                                              .file("database.db")
                                              .async("Uint8Array");
                                          })
                                          .then(function (e) {
                                            n.setDatabase(
                                              new a.Database(
                                                new Uint8Array(e)
                                              ).run(
                                                'ALTER TABLE test\n          ADD stripped_name TEXT;SELECT * FROM test;\n          UPDATE test SET stripped_name = replace(replace(replace(replace(name," ",""),".",""),"_",""),"-","");'
                                              )
                                            );
                                          });
                                      });
                                  } else console.log(t.statusCode);
                                }).on("error", function (e) {});
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                )
                .catch(function (e) {
                  return console.log(e);
                }),
              Object(o.useEffect)(
                function () {
                  var e = [];
                  !(function () {
                    if (n.value.length >= 3) {
                      var t = n.value
                        .replace(/\s/g, "")
                        .replace(".", "")
                        .replace("-", "")
                        .replace("_", "");
                      try {
                        var a = "SELECT * FROM test  WHERE stripped_name LIKE '%".concat(
                          t,
                          "%'"
                        );
                        n.database.exec(a).map(function (t) {
                          var n = t.columns;
                          return (
                            t.values.map(function (t) {
                              var a = {};
                              return (
                                t.map(function (e, r) {
                                  return (a[n[r]] = t[r]), null;
                                }),
                                e.push(a),
                                null
                              );
                            }),
                            null
                          );
                        }),
                          n.setSearchResults(e);
                      } catch (r) {}
                      n.setSearchResults(e);
                    }
                  })();
                },
                [n.value, n]
              );
            return Object(l.jsx)("p", {
              style: { display: "none" },
              children: n.value,
            });
          });
        t.a = p;
      }.call(this, n(15).Buffer));
    },
    241: function (e, t, n) {},
    242: function (e, t, n) {},
    249: function (e, t) {},
    251: function (e, t) {},
    261: function (e, t) {},
    263: function (e, t) {},
    289: function (e, t) {},
    290: function (e, t) {},
    295: function (e, t) {},
    297: function (e, t) {},
    304: function (e, t) {},
    323: function (e, t) {},
    359: function (e, t) {},
    362: function (e, t) {},
    378: function (e, t, n) {},
    379: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n(13),
        c = n.n(r),
        s = (n(241), n(242), n(201)),
        o = n(204),
        u = n(66),
        i = n(434),
        l = n(211),
        f = n(210),
        d = n.n(f),
        h = (n(378), []);
      fetch("https://weboas.is/magnet/trackers.txt")
        .then(function (e) {
          return e.text();
        })
        .then(function (e) {
          for (var t = e.split(","), n = 0; n <= 10; n++) h.push(t[n]);
        })
        .catch(function () {
          console.log("Error Fetching Trackers.");
        });
      var p = h,
        b = n(20),
        v = function (e) {
          if (0 === e.value) return "0 Bytes";
          var t = Math.floor(Math.log(e.value) / Math.log(1024));
          return (
            parseFloat((e.value / Math.pow(1024, t)).toFixed(1)) +
            " " +
            ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][t]
          );
        };
      i.a.addLocale(l);
      var m = function (e) {
          return new i.a("en-US").format(new Date(1e3 * parseInt(e.value)));
        },
        j = function (e) {
          var t = d.a.toMagnetURI({ tr: p, infoHash: e.value });
          return Object(b.jsx)("div", {
            children: Object(b.jsx)("a", {
              href: t,
              children: Object(b.jsx)("svg", {
                className: "icon icon-magnet",
                children: Object(b.jsx)("svg", {
                  viewBox: "0 0 24 28",
                  children: Object(b.jsx)("path", {
                    d:
                      "M24 13v2c0 6.375-5.047 11-12 11S0 21.375 0 15v-2c0-.547.453-1 1-1h6c.547 0 1 .453 1 1v2c0 2.859 3.328 3 4 3s4-.141 4-3v-2c0-.547.453-1 1-1h6c.547 0 1 .453 1 1zM8 3v6c0 .547-.453 1-1 1H1c-.547 0-1-.453-1-1V3c0-.547.453-1 1-1h6c.547 0 1 .453 1 1zm16 0v6c0 .547-.453 1-1 1h-6c-.547 0-1-.453-1-1V3c0-.547.453-1 1-1h6c.547 0 1 .453 1 1z",
                  }),
                }),
              }),
            }),
          });
        },
        x = Object(u.a)(function (e) {
          var t = e.appStore,
            n = [
              { headerName: "Name", field: "name", flex: 4, sortable: !1 },
              {
                headerName: "Size",
                field: "size_bytes",
                flex: 1,
                valueFormatter: v,
                sortable: !0,
              },
              {
                headerName: "Seeds",
                field: "seeders",
                flex: 1,
                sortComparator: function (e, t) {
                  return e - t;
                },
              },
              {
                headerName: "Leeches",
                field: "leechers",
                flex: 1,
                sortable: !1,
              },
              {
                headerName: "Scraped",
                field: "scraped_date",
                flex: 1,
                valueFormatter: m,
                sortable: !1,
              },
              {
                headerName: "Download",
                field: "id",
                flex: 1,
                renderCell: j,
                sortable: !1,
              },
            ];
          return 0 === t.database.length
            ? Object(b.jsx)("h5", {
                children:
                  "Downloading Database. Please Wait. Don't Refresh.",
              })
            : Object(b.jsx)(o.a, {
                rows: t.searchResults,
                columns: n,
                sortModel: [{ field: "seeders", sort: "desc" }],
                disableColumnMenu: !0,
                autoHeight: !0,
              });
        }),
        O = Object(u.a)(function (e) {
          var t = e.appStore,
            n = Object(a.useRef)(null);
          return Object(b.jsx)("div", {
            className: "container",
            children: Object(b.jsxs)("div", {
              className: "input-group mb-3 row m-3",
              children: [
                Object(b.jsx)("input", {
                  type: "text",
                  className: "form-control col-9 m-3",
                  placeholder:
                    "Search Here - 3 Character Minimum",
                  "aria-label": "Enter search term",
                  "aria-describedby": "button-addon2",
                  ref: n,
                  onKeyDown: function (e) {
                    "Enter" === e.key && t.setValue(n.current.value);
                  },
                }),
                Object(b.jsx)("button", {
                  className: "btn btn-outline-primary col-2 m-3",
                  type: "button",
                  id: "button-addon2",
                  onClick: function () {
                    t.setValue(n.current.value);
                  },
                  children: "Search",
                }),
                Object(b.jsx)("div", {
                  className: "containers",
                  children: Object(b.jsx)(x, { appStore: t }),
                }),
                Object(b.jsx)(s.a, { appStore: t }),
              ],
            }),
          });
        }),
        g = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 436))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  r = t.getFCP,
                  c = t.getLCP,
                  s = t.getTTFB;
                n(e), a(e), r(e), c(e), s(e);
              });
        },
        y = n(78),
        w = n(79),
        E = n(23),
        S = new ((function () {
          function e() {
            Object(y.a)(this, e),
              (this.database = []),
              (this.searchResults = []),
              (this.value = ""),
              Object(E.d)(this);
          }
          return (
            Object(w.a)(e, [
              {
                key: "setSearchResults",
                value: function (e) {
                  this.searchResults = e;
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  this.value = e;
                },
              },
              {
                key: "setDatabase",
                value: function (e) {
                  this.database = e;
                },
              },
            ]),
            e
          );
        })())();
      c.a.render(
        Object(b.jsx)(O, { appStore: S }),
        document.getElementById("root")
      ),
        g();
    },
  },
  [[379, 1, 2]],
]);
