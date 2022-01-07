$(document).ready(function() {
  // get current location function
  getLocation();
  var iconn;
  var dday;
  var ddday;
  var iconId;
  var inumber;
  var summary;
  var lati;
  var longt;
  var temper;
  var mintemper;
  var humidty;
  var windspid;
  var currTemp;
  var summaryDay;
  var PlaceName;
  var cityName;
  var teka;

  $(window).on("load", function() {
    // when window load icons play function
    getIconsPlay();

    // loading animation function
    setTimeout(function() {
      $("#preloader").velocity(
        {
          opacity: 0.1,
          translateY: "-80px"
        },
        {
          duration: 400,
          complete: function() {
            $("#hola").velocity(
              {
                translateY: "-100%"
              },
              {
                duration: 1000,
                easing: [0.7, 0, 0.3, 1],
                complete: function() {}
              }
            );
          }
        }
      );
    }, 1000);
  });
});

function getFormattedAddress(address) {
  var order = [
    ["house_number", "street_number"],
    ["house", "building", "public_building"],
    [
      "road",
      "footway",
      "street",
      "street_name",
      "residential",
      "path",
      "pedestrian",
      "road_reference",
      "road_reference_intl"
    ],
    ["village", "hamlet", "locality"],
    ["neighbourhood", "suburb", "city_district"],
    ["city", "town"],
    ["county", "local_administrative_area", "county_code"],
    ["state", "province", "state_code"],
    ["country", "country_name"]
  ];

  var formatted = {};
  order = order.reverse();
  var currentCount = 1;

  order.forEach(function(component, index) {
    index++;

    for (var i = 0; i < component.length; i++) {
      var alias = component[i];
      if (address[alias] !== undefined) {
        if (index == 1) formatted[currentCount] = address[alias];
        else
          formatted[currentCount] =
            address[alias] + ", " + formatted[currentCount - 1];

        currentCount++;
        break;
      }
    }
  });

  return formatted;
}

$(".getCurrentCity").on("click", function() {
  //get current city click function
  $(".daysList").html("");
  getIconsPlay(); //get icons play function
  getLocation(); //get current location function
});

// google map api
// document.write('<script src="https://maps.google.com/maps/api/js?v=3&key=AIzaSyAMODrdEnbRHQEMT6KsZ44NjevVN656AuE" type="text/javascript"></script>');

$(".getCity").on("click", function() {
  $(".daysList").html("");

  var keyword = $(".cityVal").val();

  $.ajax(
    "https://nominatim.openstreetmap.org/search?q=" + keyword + "&format=json"
  ).done(function(data) {
    console.log(data);
    var coords = data[0];

    $.when(
      $.ajax(
        "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
          coords.lat +
          "&lon=" +
          coords.lon +
          ""
      ),
      $.ajax({
        type: "Post",
        url:
          "https://api.darksky.net/forecast/7872f3201f558ed1217c55b409c43f75/" +
          coords.lat +
          "," +
          coords.lon +
          "?units=us&lang=en",
        beforeSend: function(x) {
          if (x && x.overrideMimeType) {
            x.overrideMimeType("application/j-son;charset=UTF-8");
          }
        },
        dataType: "jsonp",
        beforeSend: function() {
          console.log(coords.lat);
        }
      })
    ).done(function(addressCallResult, weatherCallResult) {
      var addressData = addressCallResult[0];
      var weatherData = weatherCallResult[0];

      var address = setAddress(addressData);

      lati = coords.lat;
      longt = coords.lon;

      showWeather(weatherData);
    });
  });
}); //get input val city weather click function

function showPosition(position) {
  //get current city weather show document ready

  $.when(
    $.ajax(
      "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        ""
    ),
    $.ajax({
      type: "Post",
      url:
        "https://api.darksky.net/forecast/7872f3201f558ed1217c55b409c43f75/" +
        position.coords.latitude +
        "," +
        position.coords.longitude +
        "?units=us&lang=en",
      beforeSend: function(x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/j-son;charset=UTF-8");
        }
      },
      dataType: "jsonp",
      beforeSend: function() {
        console.log(position.coords.latitude);
      },
      complete: function() {
        console.log(position.coords.longitude);
      }
    })
  ).done(function(addressCallResult, weatherCallResult) {
    var addressData = addressCallResult[0];
    var weatherData = weatherCallResult[0];

    console.log("showPosition", addressData);

    var address = setAddress(addressData);

    $(".cityVal").val(address[4]);
    $(".cityVal")
      .next("span")
      .toggle(Boolean($(".cityVal").val()));

    lati = position.coords.latitude;
    longt = position.coords.longitude;

    showWeather(weatherData);
  });
}

function setAddress(addressData) {
  var address = getFormattedAddress(addressData.address);
  console.log("Formatted:", address);
  $(".checkout__final-text").html(address[3]);
  PlaceName = address[4];
  return address;
}

function showWeather(weatherData) {
  iconn = weatherData.currently.icon;
  currTemp =
    weatherData.currently.temperature
      .toString()
      .replace(",", ".")
      .split(".")[0] +
    "&deg;F" +
    " / " +
    Math.round(
      toCelsius(
        weatherData.currently.temperature
          .toString()
          .replace(",", ".")
          .split(".")[0]
      )
    ) +
    "&deg;C";
  summaryDay = weatherData.daily.summary;
  getIconsKind();

  var d = new Date(parseInt(weatherData.currently.time, 10) * 1000);

  htmlCurrentWeather();

  for (var i = 0; i < weatherData.daily.data.length; i++) {
    iconn = weatherData.daily.data[i].icon;
    inumber = i;
    summary = weatherData.daily.data[i].summary;
    temper =
      "High: " +
      weatherData.daily.data[i].temperatureMax
        .toString()
        .replace(",", ".")
        .split(".")[0] +
      "&deg;F" +
      " / " +
      Math.round(
        toCelsius(
          weatherData.daily.data[i].temperatureMax
            .toString()
            .replace(",", ".")
            .split(".")[0]
        )
      ) +
      "&deg;C";
    mintemper =
      "Low: " +
      Math.round(weatherData.daily.data[i].temperatureMin) +
      "&deg;F" +
      " / " +
      Math.round(toCelsius(weatherData.daily.data[i].temperatureMin)) +
      "&deg;C";
    humidty = "Humidty: " + toPercent(weatherData.daily.data[i].humidity);
    windspid =
      "Wind Speed: " +
      weatherData.daily.data[i].windSpeed +
      " MPH" +
      " / " +
      toKPH(weatherData.daily.data[i].windSpeed) +
      " KPH";
    getIconsKind();
    dday = new Date(parseInt(weatherData.daily.data[i].time, 10) * 1000);
    ddday = dday.toString().substring(0, 15);
    appendDaysList();
  }
  getIconsPlay();

  // getMapPlace();
}

function getIconsPlay() {
  $(".skycons-element").each(function() {
    var canvasId, skycons, weatherSetting;
    skycons = new Skycons({
      color: "#FFE066"
    });
    canvasId = $(this).attr("id");

    weatherSetting = $(this).data("skycons");

    skycons.add(canvasId, Skycons[weatherSetting]);
    return skycons.play();
  });

  var icons = new Skycons();

  icons.set("clear-day", Skycons.CLEAR_DAY);
  icons.set("clear-night", Skycons.CLEAR_NIGHT);
  icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
  icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
  icons.set("cloudy", Skycons.CLOUDY);
  icons.set("rain", Skycons.RAIN);
  icons.set("sleet", Skycons.SLEET);
  icons.set("snow", Skycons.SNOW);
  icons.set("wind", Skycons.WIND);
  icons.set("fog", Skycons.FOG);

  icons.play();
} //get icons play function

function getIconsKind() {
  if (iconn == "clear-day") {
    iconn = "CLEAR_DAY";
  } else if (iconn == "clear-night") {
    iconn = "CLEAR_NIGHT";
  } else if (iconn == "partly-cloudy-day") {
    iconn = "PARTLY_CLOUDY_DAY";
  } else if (iconn == "partly-cloudy-night") {
    iconn = "PARTLY_CLOUDY_NIGHT";
  } else if (iconn == "cloudy") {
    iconn = "CLOUDY";
  } else if (iconn == "rain") {
    iconn = "RAIN";
  } else if (iconn == "sleet") {
    iconn = "SLEET";
  } else if (iconn == "snow") {
    iconn = "SNOW";
  } else if (iconn == "wind") {
    iconn = "WIND";
  } else if (iconn == "fog") {
    iconn = "FOG";
  }
} //get icons kind function(skycons icons are playin uppercase)

function appendDaysList() {
  $(".daysList")
    .append(
      '<div class="col-md-3 col-sm-12">\
   <div class="card-container manual-flip">\
   <div class="card">\
   <div class="front  paint-area">\
   <div class="cover">\
   <img src="bgimg/rotating_card_thumb.png"/>\
   </div>\
   <div class="user">\
   <canvas class="skycons-element" height="100%" width="100%" data-skycons="' +
        iconn +
        '" id="weatherIcon' +
        inumber +
        '"></canvas>\
   </div>\
   <div class="content">\
   <div class="main">\
   <h3 class="name">' +
        ddday +
        '</h3>\
   <p class="profession">' +
        summary +
        '</p>\
   <h4><i class="fa fa-sun-o fa-fw text-muted"></i>' +
        temper +
        '</h4>\
   </div>\
   <div class="footer">\
   <button type="button" class="btn btn-simple" onclick="rotateCard(this)">\
   <i class="fa fa-mail-forward"></i> More Information\
   </button>\
   </div>\
   </div>\
   </div> <!-- end front panel -->\
   <div class="back  paint-area">\
   <div class="header">\
   <h5 class="motto">' +
        ddday +
        '</h5>\
   </div>\
   <div class="content">\
   <div class="main">\
   <h4 class="text-center">' +
        summary +
        "</h4>\
   <p>" +
        mintemper +
        "</p>\
   <p>" +
        humidty +
        "</p>\
   <p>" +
        windspid +
        '</p>\
   </div>\
   </div>\
   <div class="footer">\
   <button type="button" class="btn btn-simple" rel="tooltip" title="Flip Card" onclick="rotateCard(this)">\
   <i class="fa fa-reply"></i> Back\
   </button>\
   </div>\
   </div> <!-- end back panel -->\
   </div> <!-- end card -->\
   </div> <!-- end card-container -->\
   </div>'
    )
    .addClass("animated pulse");
} //get days append function

function htmlCurrentWeather() {
  $(".currentWeather")
    .html(
      '<div class="col-md-12">\
   <div class="card-container manual-flip">\
   <div class="card">\
   <div class="front paint-area">\
   <div class="cover">\
   <img src="bgimg/rotating_card_thumb.jpg"/>\
   </div>\
   <div class="user">\
   <canvas class="skycons-element" height="100%" width="100%" data-skycons="' +
        iconn +
        '" id="weatherIcon999"></canvas>\
   </div>\
   <div class="content">\
   <div class="main">\
   <h3>Current Weather</h3>\
   <h2><i class="fa fa-map-marker fa-fw text-muted"></i> ' +
        PlaceName +
        '</h2>\
   <h3 class="name">' +
        currTemp +
        '</h3>\
   <p class="profession">' +
        summaryDay +
        "</p>\
   </div>\
   </div>\
   </div> <!-- end front panel -->\
   </div> <!-- end card -->\
   </div> <!-- end card-container -->\
   </div>"
    )
    .addClass("animated pulse");
}

$(".cityVal").keyup(function(event) {
  if (event.keyCode == 13) {
    $(".getCity").click();
  }

  var t = $(this);
  t.next("span").toggle(Boolean(t.val()));
}); //get city keyboard enter button and clear button

$("#searchclear").hide(
  $(this)
    .prev(".cityVal")
    .val()
);
$("#searchclear").on("click", function() {
  $(this)
    .prev(".cityVal")
    .val("")
    .focus();
  $(this).hide();
}); //clear button function

function getMapPlace() {
  var mapOptions = {
    center: new google.maps.LatLng(lati, longt),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var infoWindow = new google.maps.InfoWindow();
  var latlngbounds = new google.maps.LatLngBounds();
  var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);

  var showMapPosition = function(position) {
    var userLatLng = new google.maps.LatLng(lati, longt);

    var marker = new google.maps.Marker({
      position: userLatLng,
      title: "Your Location",
      draggable: true,
      map: map
    });

    var infowindow = new google.maps.InfoWindow({
      content:
        '<div id="infodiv" style="width: 300px">300px wide infowindow!  if the mouse is not here, will close after 3 seconds</div>'
    });

    google.maps.event.addListener(marker, "dragend", function() {
      infowindow.open(map, marker);
      map.setCenter(marker.getPosition());
    });

    google.maps.event.addListener(marker, "mouseover", function() {
      infowindow.open(map, marker);
    });

    google.maps.event.addListener(marker, "mouseout", function() {
      t = setTimeout(function() {
        infowindow.close();
      }, 3000);
    });

    google.maps.event.addListener(infowindow, "domready", function() {
      $("#infodiv")
        .on("mouseenter", function() {
          clearTimeout(t);
        })
        .on("mouseleave", function() {
          t = setTimeout(function() {
            infowindow.close();
          }, 1000);
        });
    });

    map.setCenter(marker.getPosition());
  };

  navigator.geolocation.getCurrentPosition(showMapPosition);

  $(window).on("resize", function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(currCenter);
  });
} //get map function

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
} //get location function

(function() {
  //open map modal function
  [].slice.call(document.querySelectorAll(".checkout")).forEach(function(el) {
    var openCtrl = el.querySelector(".checkout__button"),
      closeCtrl = el.querySelector(".checkout__cancel");

    openCtrl.addEventListener("click", function(ev) {
      ev.preventDefault();
      classie.add(el, "checkout--active");
    });

    closeCtrl.addEventListener("click", function() {
      classie.remove(el, "checkout--active");
    });
  });
})();

$().ready(function() {
  $('[rel="tooltip"]').tooltip();
});

function rotateCard(btn) {
  var $card = $(btn).closest(".card-container");
  console.log($card);
  if ($card.hasClass("hover")) {
    $card.removeClass("hover");
  } else {
    $card.addClass("hover");
  }
}

(function(window) {
  "use strict";

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ("classList" in document.documentElement) {
    hasClass = function(elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function(elem, c) {
      elem.classList.add(c);
    };
    removeClass = function(elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function(elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + " " + c;
      }
    };
    removeClass = function(elem, c) {
      elem.className = elem.className.replace(classReg(c), " ");
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (typeof define === "function" && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }
})(window); //classie.js (Easy add remove class e.t.c.)

//background color change function
$(".color-tool li a").on("click", function() {
  var colr = $(this).data("color");
  $("body").css("background", colr);
});

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}

function toPercent(humidty) {
  return (humidty * 100).toFixed(0) + "&#37;";
}

function toKPH(wind) {
  return (wind * 1.609344).toFixed(2);
}