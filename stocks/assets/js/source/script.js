//RENDERER FOR CELL

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function render_cell_numshort_colored(data, type, full, meta) {

  data_new = data;

  val = data;
  is_convert = false;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      is_convert = true;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      is_convert = true;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      is_convert = true;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    data_new = is_convert ? numberFormat(val) : numberWithCommas(val.toFixed(2));
    if (val > 0)
      data_new = '<span class="font-green">' + data_new + '</span>';
    else if (val < 0)
      data_new = '<span class="font-red">' + data_new + '</span>';
  }

  return data_new;
}
function render_cell_numshort(data, type, full, meta) {

  data_new = data;
  is_convert = false;
  val = data;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      is_convert = true;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      is_convert = true;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      is_convert = true;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    data_new = is_convert ? numberFormat(val) : numberWithCommas(val.toFixed(2));
  }

  return data_new;
}

function render_cell_numshort_colored_int(data, type, full, meta) {

  data_new = data;

  val = data;
  is_convert = false;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      is_convert = true;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      is_convert = true;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      is_convert = true;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    data_new = is_convert ? numberFormat(val, 0) : numberWithCommas(val.toFixed(0));
    if (val > 0)
      data_new = '<span class="font-green">' + data_new + '</span>';
    else if (val < 0)
      data_new = '<span class="font-red">' + data_new + '</span>';
  }

  return data_new;
}
function render_cell_numshort_int(data, type, full, meta) {

  data_new = data;
  is_convert = false;
  val = data;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      is_convert = true;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      is_convert = true;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      is_convert = true;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    data_new = is_convert ? numberFormat(val, 0) : numberWithCommas(val.toFixed(0));
  }

  return data_new;
}

function render_cell_percent_colored(data, type, full, meta) {

  data_new = data;

  val = data;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    if (val > 0)
      data_new = '<span class="font-green">' + numberFormat(val) + '%</span>';
    else if (val < 0)
      data_new = '<span class="font-red">' + numberFormat(val) + '%</span>';
    else
      data_new = numberFormat(val) + '%';
  }

  return data_new;
}
function render_cell_percent(data, type, full, meta) {

  data_new = data;

  val = data;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    data_new = numberFormat(val) + '%';
  }

  return data_new;
}

function render_cell_percent_colored_int(data, type, full, meta) {
  data_new = data;
  val = data;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    if (val > 0)
      data_new = '<span class="font-green">' + numberFormat(val, 0) + '%</span>';
    else if (val < 0)
      data_new = '<span class="font-red">' + numberFormat(val, 0) + '%</span>';
    else
      data_new = numberFormat(val, 0) + '%';
  }

  return data_new;
}
function render_cell_percent_int(data, type, full, meta) {

  data_new = data;

  val = data;
  switch (val[val.length - 1]) {
    case 'K':
      val = val.slice(0, -1) * 1000;
      break;
    case 'M':
      val = val.slice(0, -1) * 1000000;
      break;
    case 'B':
      val = val.slice(0, -1) * 1000000000;
      break;
    case '%':
      val = val.slice(0, -1);
      break;
  }
  if (!isNaN(val)) {
    val = parseFloat(val);
    data_new = numberFormat(val, 0) + '%';
  }

  return data_new;
}

//FORMATTING FOR OUTPUT
function stringFill(x, len, fill_char, fill_dir) {
  if (typeof(len) == 'undefined')len = 2;
  if (typeof(fill_char) == 'undefined')fill_char = '0';
  if (typeof(fill_dir) == 'undefined')fill_dir = -1;
  x = x.toString();
  if (x.length >= len)return x;
  return (
  (fill_dir == 1 ? x : '') +
  ((new Array(x.length + (len - x.length))).join(fill_char)).toString() +
  (fill_dir == -1 ? x : ''));
}

function timeFormat(time) {
  if (isNaN(time))return time;
  h = Math.floor(time / 60);
  m = time % 60;
  t = 'am';
  if (h > 12) {
    t = 'pm';
    h -= 12;
  }
  return h.toFixed().toString() + ':' + stringFill(m.toFixed()) + t;
}

function dateFormat(cur) {
  return (new Date(cur * 1000)).toString('MM/dd/yyyy');
}

function getUnique(array) {
  var u = {}, a = [];
  for (var i = 0, l = array.length; i < l; ++i) {
    if (u.hasOwnProperty(array[i])) {
      continue;
    }
    a.push(array[i]);
    u[array[i]] = 1;
  }
  return a;
}

function numberFormat(num, dec) {
  if (typeof(dec) == 'undefined')dec = 2;
  if (num >= 1000000000 || num <= -1000000000)return numberWithCommas((num / 1000000000).toFixed(dec)) + 'B';
  if (num >= 1000000 || num <= -1000000)return numberWithCommas((num / 1000000).toFixed(dec)) + 'M';
  if (num >= 1000 || num <= -1000)return numberWithCommas((num / 1000).toFixed(dec)) + 'K';
  return parseFloat(num).toFixed(dec);
}

function percentFormat(x) {
  x = parseFloat(x).toFixed(2);
  return ((x > 0 ? '+' : '') + x + '%');
}


//SYS VARS
var table;
var tbl_api;
var server_uri = 'shares.php';

var selectable_list = {};
var selectable_cur_idx = 0;
var cur_tab = 0;
var cur_market = 0;

var tmr_update = 0;

selectable_list['theme_title'] = '<i class="fa fa-paint-brush"></i> <span class="padding-left">Theme</span>';
selectable_list['market_title'] = '<i class="fa fa-line-chart"></i> <span class="padding-left">Market</span>';
selectable_list['theme'] = [
  {id: 0, label: '<i class="fa fa-paint-brush"></i>', title: "Light"},
  {id: 1, label: '<i class="fa fa-paint-brush"></i>', title: "Dark"},
];

selectable_list['time-update_title'] = '<i class="fa fa-refresh"></i> <span class="padding-left">Update method</span>';
selectable_list['time-update'] = [
  {id: 0, label: '<i class="fa fa-angle-down"></i>', title: "Manual refresh"},
  {id: 1, label: '1m', title: "Refresh every minute"},
  {id: 2, label: '5m', title: "Refresh every 5 minutes"},
  {id: 3, label: '10m', title: "Refresh every 10 minutes"},
];


selectable_list['tab'] = [
  {id: 0, label: 'Company Details', title: 'Company Details'},
  {id: 1, label: 'Trading Data', title: 'Trading Data'},
  {id: 2, label: 'Historical Performance', title: 'Historical Performance'},
  {id: 3, label: 'Fundamental Analysis', title: 'Fundamental Analysis'},
  {id: 4, label: 'Technical Analysis', title: 'Technical Analysis'}
];


//DATA KEYS AND SETTINGS
var data_keys = {
  s: 'Symbol',
  n: 'Name',
  regularMarketPrice:                 'Last Price',
  currency:                           'Currency',
  regularMarketChange:                'Change',
  regularMarketChangePercent:         '% Change',
  regularMarketVolume:                'Volume',
  sharesOutstanding:                  'Shares',
  marketCap:                          'Market Cap',//--
  bid:                            'Bid',
  ask:                            'Ask',
  bidSize:                            'Bid Size',
  askSize:                            'Ask Size',
  regularMarketOpen:                            'Open',
  regularMarketDayLow:                            'Day Low',
  regularMarketDayHigh:                           'Day High',
  regularMarketPreviousClose:                           'Prev Close',//--
  fiftyTwoWeekLow:                    '52 Week Low',
  fiftyTwoWeekHigh:                   '52 Week High',
  fiftyTwoWeekLowChange:                    'Change 52 Week Low',
  fiftyTwoWeekHighChange:                   'Change 52 Week High',
  fiftyTwoWeekLowChangePercent:                   '% Change 52 Week Low',
  fiftyTwoWeekHighChangePercent:                    '% Change 52 Week High',
  averageDailyVolume3Month:                   'Avg Daily Vol 3M',//--
  //beta:                           'Beta',
  epsTrailingTwelveMonths:                            'EPS',
  ebitda:                           'EBITDA',
  trailingPE:                           'PE Ratio',
  pegRatio:                           'PEG Ratio',
  bookValue:                            'Book Value',
  priceToBook:                            'Price / Book',
  totalCash:                            'Cash',
  shortRatio:                           'Short Ratio',
  dividendRate:                           'Div Per Share',
  dividendYield:                            'Div Yield',
  exDividendDate:                           'Ex-Dividend Date',//--
  fiftyDayAverage:                        '50 Day MA',
  twoHundredDayAverage:                       '200 Day MA',
  fiftyDayAverageChange:                        'Change 50 Day MA',
  fiftyDayAverageChangePercent:                       '% Change 50 Day MA',
  twoHundredDayAverageChange:                       'Change 200 Day MA',
  twoHundredDayAverageChangePercent:                        '% Change 200 Day MA'
};

var data_key_string_simple = ['n'];
var data_key_string = ['s', 'currency'];
var data_key_date = ['exDividendDate'];
var data_key_time = [];
var data_key_percent = ['regularMarketChangePercent','fiftyTwoWeekLowChangePercent','fiftyTwoWeekHighChangePercent','fiftyDayAverageChangePercent','twoHundredDayAverageChangePercent'];

var data_key_names = ['s','n','regularMarketPrice','currency','regularMarketChange','regularMarketChangePercent','regularMarketVolume','sharesOutstanding','marketCap','bid','ask','bidSize','askSize','regularMarketOpen','regularMarketDayLow','regularMarketDayHigh','regularMarketPreviousClose','fiftyTwoWeekLow','fiftyTwoWeekHigh','fiftyTwoWeekLowChange','fiftyTwoWeekHighChange','fiftyTwoWeekLowChangePercent','fiftyTwoWeekHighChangePercent','averageDailyVolume3Month','epsTrailingTwelveMonths','ebitda','trailingPE','pegRatio','bookValue','priceToBook','totalCash','shortRatio','dividendRate','dividendYield','exDividendDate','fiftyDayAverage','twoHundredDayAverage','fiftyDayAverageChange','fiftyDayAverageChangePercent','twoHundredDayAverageChange','twoHundredDayAverageChangePercent'];
var data_key_filter = ['s','n','regularMarketPrice','currency','regularMarketChange','regularMarketChangePercent','regularMarketVolume','sharesOutstanding','marketCap','bid','ask','bidSize','askSize','regularMarketOpen','regularMarketDayLow','regularMarketDayHigh','regularMarketPreviousClose','fiftyTwoWeekLow','fiftyTwoWeekHigh','fiftyTwoWeekLowChange','fiftyTwoWeekHighChange','fiftyTwoWeekLowChangePercent','fiftyTwoWeekHighChangePercent','averageDailyVolume3Month','epsTrailingTwelveMonths','ebitda','trailingPE','pegRatio','bookValue','priceToBook','totalCash','shortRatio','dividendRate','dividendYield','exDividendDate','fiftyDayAverage','twoHundredDayAverage','fiftyDayAverageChange','fiftyDayAverageChangePercent','twoHundredDayAverageChange','twoHundredDayAverageChangePercent'];

var sorting_data = {};
var filter_data = {}; // filter_data[market][tab][column]

var tab_keys = {
  0: ['s', 'n', 'regularMarketPrice','currency','regularMarketChange','regularMarketChangePercent','regularMarketVolume','sharesOutstanding','marketCap'],
  1: ['s', 'n','bid','ask','bidSize','askSize','regularMarketOpen','regularMarketDayLow','regularMarketDayHigh','regularMarketPreviousClose'],
  2: ['s', 'n','fiftyTwoWeekLow','fiftyTwoWeekHigh','fiftyTwoWeekLowChange','fiftyTwoWeekHighChange','fiftyTwoWeekLowChangePercent','fiftyTwoWeekHighChangePercent','averageDailyVolume3Month'],
  3: ['s', 'n','epsTrailingTwelveMonths','ebitda','trailingPE','pegRatio','bookValue','priceToBook','totalCash','shortRatio','dividendRate','dividendYield','exDividendDate'],
  4: ['s', 'n', 'fiftyDayAverage','twoHundredDayAverage','fiftyDayAverageChange','fiftyDayAverageChangePercent','twoHundredDayAverageChange','twoHundredDayAverageChangePercent']
};
//INIT GET MARKETS AND START
$(document).ready(function () {
  $('.refresh-data').attr('title', 'Last refreshed at ' + (new Date).toString('dd MMM yyyy, hh:mm tt'));
  $.post(server_uri, {cmd: 'get-markets'}, function (data) {
    if (data.success) {
      selectable_list['market'] = [];
      for (i in data.markets)
        selectable_list['market'].push({
          id: i,
          label: '<i class="fa fa-line-chart"></i> <span class="padding-left">' + data.markets[i] + '</span>',
          title: data.markets[i]
        });

      cur_market = selectable_list['market'][0].id;

      $('button[data-list="market"]').data('value', cur_market).html(selectable_list['market'][0].label);

      show_table()
    } else {
      modal_show('Initialize', 'Error getting markets');
    }

  });
});


//INIT TABLE  AND SET FILTERS AND SORTS FUNCTIONS
function show_table() {
  table = '<table class="display"><thead><tr>';
  for (i in data_keys) {
    table += '<th class="column-' + i + (data_key_filter.indexOf(i) >= 0 ? ' filterable' : '') + '">' +
      '<span class="head-label">' +
      data_keys[i] +
      '</span>' +
      '<span class="filter-desc"></span>' +
      (data_key_filter.indexOf(i) >= 0 ? '<div data-field="' + i + '" class="filter-btn" tab-index="0"><i class="fa fa-filter"></i></div>' : '') +
      '</th>';
  }

  table += '</tr></thead><tbody></tbody></table>';
  table = $(table);
  $('main.content').append(table);
  table.on('processing.dt', function (e, settings, processing) {
    if (processing)
      $('.linear-activity').removeClass('hide');
    else
      $('.linear-activity').addClass('hide');
  });


  $.extend(
    //$.fn.dataTable.ext.order
    //$.fn.dataTable.ext.type.order
    $.fn.dataTable.ext.oSort,
    {
      "range-asc": function (x, y) {
        x = x.replace(/<\/?[^>]+(>|$)/g, "");
        x = x.replace(/\s*/g, "");
        y = y.replace(/<\/?[^>]+(>|$)/g, "");
        y = y.replace(/\s*/g, "");

        r = /\d*(\.\d*){0,1}\-\d*(\.\d*){0,1}$/

        if (!r.test(x))return 1;
        if (!r.test(y))return -1;

        x1 = parseFloat(x.split('-')[0]) * 1000000000000;
        x2 = parseFloat(x.split('-')[1]) * 1000000000000;
        y1 = parseFloat(y.split('-')[0]) * 1000000000000;
        y2 = parseFloat(y.split('-')[1]) * 1000000000000;

        x = parseFloat(x1.toFixed(0).toString() + '.' + x2.toFixed(0).toString());
        y = parseFloat(y1.toFixed(0).toString() + '.' + y2.toFixed(0).toString());
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      },
      "range-desc": function (x, y) {
        x = x.replace(/<\/?[^>]+(>|$)/g, "");
        x = x.replace(/\s*/g, "");
        y = y.replace(/<\/?[^>]+(>|$)/g, "");
        y = y.replace(/\s*/g, "");

        r = /\d*(\.\d*){0,1}\-\d*(\.\d*){0,1}$/

        if (!r.test(x))return 1;
        if (!r.test(y))return -1;

        x1 = parseFloat(x.split('-')[0]) * 1000000000000;
        x2 = parseFloat(x.split('-')[1]) * 1000000000000;
        y1 = parseFloat(y.split('-')[0]) * 1000000000000;
        y2 = parseFloat(y.split('-')[1]) * 1000000000000;

        x = parseFloat(x1.toFixed(0).toString() + '.' + x2.toFixed(0).toString());
        y = parseFloat(y1.toFixed(0).toString() + '.' + y2.toFixed(0).toString());
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      },
      "percent-asc": function (x, y) {
        x = x.replace(/<\/?[^>]+(>|$)/g, "");
        x = x.replace(/\s*/g, "").replace(/,/g, '');
        y = y.replace(/<\/?[^>]+(>|$)/g, "");
        y = y.replace(/\s*/g, "").replace(/,/g, '');
        r = /^(\+|\-){0,1}\d*((\.|\,)\d*){0,1}\%$/

        if (x == y)return 0;
        if (!r.test(x))return 1;
        if (!r.test(y))return -1;

        x = parseFloat(x.slice(0, -1));
        y = parseFloat(y.slice(0, -1));
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      },
      "percent-desc": function (x, y) {
        x = x.replace(/<\/?[^>]+(>|$)/g, "");
        x = x.replace(/\s*/g, "").replace(/,/g, '');
        y = y.replace(/<\/?[^>]+(>|$)/g, "");
        y = y.replace(/\s*/g, "").replace(/,/g, '');
        r = /^(\+|\-){0,1}\d*((\.|\,)\d*){0,1}\%$/

        if (x == y)return 0;
        if (!r.test(x))return 1;
        if (!r.test(y))return -1;


        x = parseFloat(x.slice(0, -1));
        y = parseFloat(y.slice(0, -1));
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      },
      "time-asc": function (x, y) {
        x = x.replace(/<\/?[^>]+(>|$)/g, "").toString().replace(" ", "");
        y = y.replace(/<\/?[^>]+(>|$)/g, "").toString().replace(" ", "");
        r = /^\d{1,2}\:\d\d(am|pm){0,1}$/

        if (x == y)return 0;
        if (!r.test(x))return 1;
        if (!r.test(y))return -1;

        h = 0;
        m = 0;
        if (x.slice(-2) == "pm") {
          h = 12;
          x = x.slice(0, -2);
        }
        else if (x.slice(-2) == "am") {
          x = x.slice(0, -2);
        }
        h += parseInt(x.split(":")[0]);
        m += parseInt(x.split(":")[1]);
        x = h * 60 + m;

        h = 0;
        m = 0;
        if (y.slice(-2) == "pm") {
          h = 12;
          y = y.slice(0, -2);
        }
        else if (y.slice(-2) == "am") {
          y = y.slice(0, -2);
        }
        h += parseInt(y.split(":")[0]);
        m += parseInt(y.split(":")[1]);
        y = h * 60 + m;

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      },
      "time-desc": function (x, y) {
        x = x.replace(/<\/?[^>]+(>|$)/g, "").toString().replace(" ", "");
        y = y.replace(/<\/?[^>]+(>|$)/g, "").toString().replace(" ", "");
        r = /^\d{1,2}\:\d\d(am|pm){0,1}$/

        if (x == y)return 0;
        if (!r.test(x))return 1;
        if (!r.test(y))return -1;

        h = 0;
        m = 0;
        if (x.slice(-2) == "pm") {
          h = 12;
          x = x.slice(0, -2);
        }
        else if (x.slice(-2) == "am") {
          x = x.slice(0, -2);
        }
        h += parseInt(x.split(":")[0]);
        m += parseInt(x.split(":")[1]);
        x = h * 60 + m;

        h = 0;
        m = 0;
        if (y.slice(-2) == "pm") {
          h = 12;
          y = y.slice(0, -2);
        }
        else if (y.slice(-2) == "am") {
          y = y.slice(0, -2);
        }
        h += parseInt(y.split(":")[0]);
        m += parseInt(y.split(":")[1]);
        y = h * 60 + m;

        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      },

      "numshort-asc": function (x, y) {
        if (x == '-' || x == '—')x = 'N/A';
        if (y == '-' || y == '—')y = 'N/A';
        if (x == y)return 0;
        if (y == 'N/A')return -1;
        if (x == 'N/A')return 1;
        x = x.replace(/<\/?[^>]+(>|$)/g, "").replace(/,/g, '');
        y = y.replace(/<\/?[^>]+(>|$)/g, "").replace(/,/g, '');
        switch (x[x.length - 1]) {
          case 'K':
            x = x.slice(0, -1) * 1000;
            break;
          case 'M':
            x = x.slice(0, -1) * 1000000;
            break;
          case 'B':
            x = x.slice(0, -1) * 1000000000;
            break;
        }
        switch (y[y.length - 1]) {
          case 'K':
            y = y.slice(0, -1) * 1000;
            break;
          case 'M':
            y = y.slice(0, -1) * 1000000;
            break;
          case 'B':
            y = y.slice(0, -1) * 1000000000;
            break;
        }
        x = parseFloat(x);
        y = parseFloat(y);
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      },
      "numshort-desc": function (x, y) {
        if (x == '-' || x == '—')x = 'N/A';
        if (y == '-' || y == '—')y = 'N/A';
        if (x == y)return 0;
        if (y == 'N/A')return -1;
        if (x == 'N/A')return 1;
        x = x.replace(/<\/?[^>]+(>|$)/g, "").replace(/,/g, '');
        y = y.replace(/<\/?[^>]+(>|$)/g, "").replace(/,/g, '');
        switch (x[x.length - 1]) {
          case 'K':
            x = x.slice(0, -1) * 1000;
            break;
          case 'M':
            x = x.slice(0, -1) * 1000000;
            break;
          case 'B':
            x = x.slice(0, -1) * 1000000000;
            break;
        }
        switch (y[y.length - 1]) {
          case 'K':
            y = y.slice(0, -1) * 1000;
            break;
          case 'M':
            y = y.slice(0, -1) * 1000000;
            break;
          case 'B':
            y = y.slice(0, -1) * 1000000000;
            break;
        }
        x = parseFloat(x);
        y = parseFloat(y);
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      },
      "stringc-asc": function (x, y) {
        if (x == '-' || x == '—')x = 'N/A';
        if (y == '-' || y == '—')y = 'N/A';
        if (x == y)return 0;
        if (y == 'N/A')return -1;
        if (x == 'N/A')return 1;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      },
      "stringc-desc": function (x, y) {
        if (x == '-' || x == '—')x = 'N/A';
        if (y == '-' || y == '—')y = 'N/A';
        if (x == y)return 0;
        if (y == 'N/A')return -1;
        if (x == 'N/A')return 1;
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      },
      "datec-asc": function (x, y) {
        if (x == '-' || x == '—')x = 'N/A';
        if (y == '-' || y == '—')y = 'N/A';

        r = /^\d{1,2}\/\d{1,2}\/\d\d\d\d$/;

        if (x == y)return 0;
        if (!r.test(x))return 1;
        if (!r.test(y))return -1;
        x = parseInt(x.split('/')[2] + stringFill(x.split('/')[0]) + stringFill(x.split('/')[1]));
        y = parseInt(y.split('/')[2] + stringFill(y.split('/')[0]) + stringFill(y.split('/')[1]));

        /*
         if(x==y)return 0;
         if(y=='N/A')return -1;
         if(x=='N/A')return 1;
         x=Date.parse( x ) || 0;
         y=Date.parse( y ) || 0;
         */


        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      },
      "datec-desc": function (x, y) {
        if (x == '-' || x == '—')x = 'N/A';
        if (y == '-' || y == '—')y = 'N/A';

        r = /^\d{1,2}\/\d{1,2}\/\d\d\d\d$/;

        if (x == y)return 0;
        if (!r.test(x))return 1;
        if (!r.test(y))return -1;
        x = parseInt(x.split('/')[2] + stringFill(x.split('/')[0]) + stringFill(x.split('/')[1]));
        y = parseInt(y.split('/')[2] + stringFill(y.split('/')[0]) + stringFill(y.split('/')[1]));

        /*
         if(x==y)return 0;
         if(y=='N/A')return -1;
         if(x=='N/A')return 1;
         x=Date.parse( x ) || 0;
         y=Date.parse( y ) || 0;
         */
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      },

    }
  );

  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    if (filter_data[cur_market] != undefined && filter_data[cur_market][cur_tab] != undefined) {
      filters = filter_data[cur_market][cur_tab];
      for (column in filters) {
        if (filters[column] == undefined)continue;
        min = filters[column].min;
        max = filters[column].max;
        fval = filters[column].val;
        val = data[data_key_names.indexOf(column)];
        if (val == undefined || (typeof(fval) == 'object' && fval.length == 0))
          continue;
        val = val.replace(/<\/?[^>]+(>|$)/g, "");


        if (val == 'N/A' || val == '-' || val == '—')return false;

        if (data_key_percent.indexOf(column) >= 0) {
          val = val.toString().replace(" ", "").replace(/,/g, '');
          val = val.toString().replace("%", "");
          if (isNaN(val))return false;
          val = parseFloat(parseFloat(val).toFixed(2));
        }
        else if (data_key_time.indexOf(column) >= 0) {
          r = /^\d{1,2}\:\d\d(am|pm){0,1}$/
          val = val.toString().replace(" ", "");
          if (!r.test(val))return false;
          h = 0;
          m = 0;
          if (val.slice(-2) == "pm") {
            h = 12;
            val = val.slice(0, -2);
          }
          else if (t.slice(-2) == "am") {
            val = val.slice(0, -2);
          }
          h += parseInt(val.split(":")[0]);
          m += parseInt(val.split(":")[1]);
          val = h * 60 + m;
        }
        else if (data_key_date.indexOf(column) >= 0) {
          val = (new Date(val)).getTime() / 1000;
        }
        else if (data_key_string_simple.indexOf(column) >= 0) {
          if (fval.toString().length == 0)return false;
        }
        else if (data_key_string.indexOf(column) >= 0) {
          //if(fval.indexOf(val)==-1)return false;
        }
        else {
          val = val.replace(/,/g, '');
          switch (val[val.length - 1]) {
            case 'K':
              val = val.slice(0, -1) * 1000;
              break;
            case 'M':
              val = val.slice(0, -1) * 1000000;
              break;
            case 'B':
              val = val.slice(0, -1) * 1000000000;
              break;
          }
          val = parseFloat(parseFloat(val).toFixed(2));
        }

        if (
          (data_key_string_simple.indexOf(column) >= 0 && val.toString().toLowerCase().indexOf(fval.toString().toLowerCase()) < 0) ||
          (data_key_string.indexOf(column) >= 0 && fval.indexOf(val) == -1) ||
          (
            data_key_string.indexOf(column) < 0 && data_key_string_simple.indexOf(column) < 0 && !(
              ( isNaN(min) && isNaN(max) ) ||
              ( isNaN(min) && val <= max ) ||
              ( min <= val && isNaN(max) ) ||
              ( min <= val && val <= max )
            )
          )
        ) {
          return false;
        }
      }
    }

    return true;
  });

  tbl_api = table.DataTable({
    ajax: {
      url: server_uri + '?cmd=get-data&market=' + cur_market,
      dataSrc: 'data'
    },
    //orderRestore:true,
    //orderSequence: [ "asc", "desc", null ],
    bProcessing: false,
    searching: true,
    autoWidth: false,
    dom: '<"top">r<"table-inner"t<"table-wait">><"bottom"flip><"clear">',


    responsive: {
      details: {
        type: 'column',
        target: 'tr'
      }
    },


    language: {
      loadingRecords: '<i class="fa fa-circle-o-notch fa-spin loading-big"></i>',
      paginate: {
        previous: '<i class="fa fa-angle-left"></i>',
        next: '<i class="fa fa-angle-right"></i>'
      }
    },
    lengthMenu: [25, 50, 100, 500],

    columns: [
      
      {name: 's'                                    ,data: 's',                                type: 'stringc'},
      {name: 'n'                                    ,data: 'n',                                type: 'stringc'},
      {name: 'regularMarketPrice'                   ,data: 'regularMarketPrice',               type: 'numshort', className: 'number',  render: render_cell_numshort },
      {name: 'currency'                             ,data: 'currency',                         type: 'stringc'},
      {name: 'regularMarketChange'                  ,data: 'regularMarketChange',              type: 'numshort', className: 'number',  render: render_cell_numshort_colored },
      {name: 'regularMarketChangePercent'           ,data: 'regularMarketChangePercent',       type: 'percent',  className: 'number',  render: render_cell_percent_colored },
      {name: 'regularMarketVolume'                  ,data: 'regularMarketVolume',              type: 'numshort', className: 'number',  render: render_cell_numshort },
      {name: 'sharesOutstanding'                    ,data: 'sharesOutstanding',                type: 'numshort', className: 'number',  render: render_cell_numshort },
      {name: 'marketCap'                            ,data: 'marketCap',                        type: 'numshort', className: 'number',  render: render_cell_numshort },
      
      {name: 'bid'                                  ,data: 'bid',                              type: 'numshort', className: 'number', render: render_cell_numshort},
      {name: 'ask'                                  ,data: 'ask',                              type: 'numshort', className: 'number', render: render_cell_numshort},
      {name: 'bidSize'                              ,data: 'bidSize',                          type: 'numshort', className: 'number', render: render_cell_numshort_int},
      {name: 'askSize'                              ,data: 'askSize',                          type: 'numshort', className: 'number', render: render_cell_numshort_int},
      {name: 'regularMarketOpen'                    ,data: 'regularMarketOpen',                type: 'numshort', className: 'number', render: render_cell_numshort},
      {name: 'regularMarketDayLow'                  ,data: 'regularMarketDayLow',              type: 'numshort', className: 'number', render: render_cell_numshort},
      {name: 'regularMarketDayHigh'                 ,data: 'regularMarketDayHigh',             type: 'numshort', className: 'number', render: render_cell_numshort},
      {name: 'regularMarketPreviousClose'           ,data: 'regularMarketPreviousClose',       type: 'numshort', className: 'number', render: render_cell_numshort},
      
      {name: 'fiftyTwoWeekLow'                      ,data: 'fiftyTwoWeekLow',                  type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'fiftyTwoWeekHigh'                     ,data: 'fiftyTwoWeekHigh',                 type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'fiftyTwoWeekLowChange'                ,data: 'fiftyTwoWeekLowChange',            type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'fiftyTwoWeekHighChange'               ,data: 'fiftyTwoWeekHighChange',           type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'fiftyTwoWeekLowChangePercent'         ,data: 'fiftyTwoWeekLowChangePercent',     type: 'percent', className: 'number',  render: render_cell_percent_colored },
      {name: 'fiftyTwoWeekHighChangePercent'        ,data: 'fiftyTwoWeekHighChangePercent',    type: 'percent', className: 'number',  render: render_cell_percent_colored },
      {name: 'averageDailyVolume3Month'             ,data: 'averageDailyVolume3Month',         type: 'numshort', className: 'number', render: render_cell_numshort_int },
      
      //{name: 'beta'                                 ,data: 'beta',                             type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'epsTrailingTwelveMonths'              ,data: 'epsTrailingTwelveMonths',          type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'ebitda'                               ,data: 'ebitda',                           type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'trailingPE'                           ,data: 'trailingPE',                       type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'pegRatio'                             ,data: 'pegRatio',                         type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'bookValue'                            ,data: 'bookValue',                        type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'priceToBook'                          ,data: 'priceToBook',                      type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'totalCash'                            ,data: 'totalCash',                        type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'shortRatio'                           ,data: 'shortRatio',                       type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'dividendRate'                         ,data: 'dividendRate',                     type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'dividendYield'                        ,data: 'dividendYield',                    type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'exDividendDate'                       ,data: 'exDividendDate',                   type: 'datec' },
      
      {name: 'fiftyDayAverage'                      ,data: 'fiftyDayAverage',                  type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'twoHundredDayAverage'                 ,data: 'twoHundredDayAverage',             type: 'numshort', className: 'number', render: render_cell_numshort },
      {name: 'fiftyDayAverageChange'                ,data: 'fiftyDayAverageChange',            type: 'numshort', className: 'number', render: render_cell_numshort_colored },
      {name: 'fiftyDayAverageChangePercent'         ,data: 'fiftyDayAverageChangePercent',     type: 'numshort', className: 'number', render: render_cell_percent_colored },
      {name: 'twoHundredDayAverageChange'           ,data: 'twoHundredDayAverageChange',       type: 'percent', className: 'number',  render: render_cell_numshort_colored },
      {name: 'twoHundredDayAverageChangePercent'    ,data: 'twoHundredDayAverageChangePercent',type: 'percent', className: 'number',  render: render_cell_percent_colored },
    ]
  });


  updateSelectable();
  switchTab();

}


//SWITCHING TAB REACTION
function switchTab() {
  tbl_api.columns().visible(false);
  cols = [];
  for (i in tab_keys[cur_tab])
    cols.push('.column-' + tab_keys[cur_tab][i]);
  tbl_api.columns(cols).visible(true);
  $('div.dataTables_wrapper').removeClass('inactive');
  $('.linear-activity').addClass('hide');
  if (filter_data[cur_market] != undefined && filter_data[cur_market][cur_tab] != undefined && filter_data[cur_market][cur_tab]['s'] != undefined && filter_data[cur_market][cur_tab]['s']['text'] != undefined) {
    //filter_data[market][tab][column]
    $('.column-s').addClass('filter-set');
    $('.column-s .filter-desc').html(filter_data[cur_market][cur_tab]['s']['text']);
  }
  else {
    $('.column-s').removeClass('filter-set');
    $('.column-s .filter-desc').html('');
  }
  if (filter_data[cur_market] != undefined && filter_data[cur_market][cur_tab] != undefined && filter_data[cur_market][cur_tab]['n'] != undefined && filter_data[cur_market][cur_tab]['n']['text'] != undefined) {
    //filter_data[market][tab][column]
    $('.column-n').addClass('filter-set');
    $('.column-n .filter-desc').html(filter_data[cur_market][cur_tab]['n']['text']);
  }
  else {
    $('.column-n').removeClass('filter-set');
    $('.column-n .filter-desc').html('');
  }
}
$(document).on('click', '.data-view button', function () {
  $('.data-view button.active').removeClass('active');
  $(this).addClass('active');

  if (sorting_data[cur_market] == undefined)sorting_data[cur_market] = {};
  sorting_data[cur_market][cur_tab] = tbl_api.order();

  cur_tab = $(this).data('tab');
  $('div.dataTables_wrapper').addClass('inactive');

  $('.linear-activity').removeClass('hide');


  setTimeout(function () {
    switchTab();
    if (sorting_data[cur_market] != undefined && sorting_data[cur_market][cur_tab] != undefined)
      tbl_api.order(sorting_data[cur_market][cur_tab]);
    tbl_api.draw();
  }, 300);

});

//REACTION ON CHANGE MODERN SELECT BOX
function applySelectable(param, value) {
  switch (param) {
    case 'time-update':
      clearInterval(tmr_update);
      switch (value) {
        case 1:
          tmr_update = setInterval(function () {
            tbl_api.ajax.reload(null, false);
            $('.refresh-data').attr('title', 'Last refreshed at ' + (new Date).toString('dd MMM yyyy, hh:mm tt'));
          }, 60000);
          break;
        case 2:
          tmr_update = setInterval(function () {
            tbl_api.ajax.reload(null, false);
            $('.refresh-data').attr('title', 'Last refreshed at ' + (new Date).toString('dd MMM yyyy, hh:mm tt'));
          }, 5 * 60000);
          break;
        case 3:
          tmr_update = setInterval(function () {
            tbl_api.ajax.reload(null, false);
            $('.refresh-data').attr('title', 'Last refreshed at ' + (new Date).toString('dd MMM yyyy, hh:mm tt'));
          }, 10 * 60000);
          break;
      }
      break;
    case 'stock':
      cur_market = value;
      tbl_api.columns().iterator('column', function (settings, column) {
        $(tbl_api.column(column).header()).removeClass('filter-set').find('.filter-desc').html('');
      });
      filter_data = {};
      tbl_api.ajax.url(server_uri + "?cmd=get-data&market=" + value);
      tbl_api.ajax.reload(null, true);

      break;
    case 'tab':
      $('.linear-activity').removeClass('hide');
      $('.data-view button.active').removeClass('active');
      $('button[data-tab="' + value + '"]').addClass('active');
      if (sorting_data[cur_market] == undefined)sorting_data[cur_market] = {};
      sorting_data[cur_market][cur_tab] = tbl_api.order();
      cur_tab = value;
      setTimeout(function () {
        switchTab();
        if (sorting_data[cur_market] != undefined && sorting_data[cur_market][cur_tab] != undefined)
          tbl_api.order(sorting_data[cur_market][cur_tab]);
        tbl_api.draw();

      }, 500);

      break;
    case 'theme':
      switch (value) {
        case 0:
          $('body').removeClass('dark-theme');
          break;
        case 1:
          $('body').addClass('dark-theme');
          break;
      }
      break;
  }
}

//FILTER BUTTON REACTION
$(document).on('click', 'table thead th .filter-btn,table tbody tr .filter-btn', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  self = $(this);
  (function (self, e) {
    var filter_input;
    var fl_tm;
    var val = self.data('value');
    var field = self.data('field');

    var is_date = data_key_date.indexOf(field) >= 0;
    var is_time = data_key_time.indexOf(field) >= 0;
    var is_percent = data_key_percent.indexOf(field) >= 0;
    var is_string = data_key_string.indexOf(field) >= 0;
    var is_string_simple = data_key_string_simple.indexOf(field) >= 0;

    var formatFunction = numberFormat;
    if (is_percent)
      formatFunction = percentFormat;
    else if (is_time)
      formatFunction = timeFormat;
    else if (is_date)
      formatFunction = dateFormat;
    else if (is_string || is_string_simple)
      formatFunction = undefined;
    /*
     date:
     time:
     range:
     */
    var has_centered = $(self.parent()).is('span') || ($(window).width() < 450);

    ar = getUnique(tbl_api.column('.column-' + self.data('field')).data().toArray());

    var min = 100000000000000;
    var max = 0;

    for (i in ar) {
      if (ar[i] == 'N/A' || ar[i] == '-' || ar[i] == '—' || is_string)continue;
      if (is_percent) {
        ar[i] = parseFloat(ar[i].toString().replace("%", ""));
      }
      else if (is_time) {
        r = /^\d{1,2}\:\d\d(am|pm){0,1}$/
        t = ar[i].toString().replace(" ", "");
        if (!r.test(t))continue;
        h = 0;
        m = 0;
        if (t.slice(-2) == "pm") {
          h = 12;
          t = t.slice(0, -2);
        }
        else if (t.slice(-2) == "am") {
          t = t.slice(0, -2);
        }
        h += parseInt(t.split(":")[0]);
        m += parseInt(t.split(":")[1]);
        t = h * 60 + m;
        ar[i] = t;
      }
      else if (is_date) {
        ar[i] = (new Date(ar[i])).getTime() / 1000;
      }
      else {
        switch (ar[i][ar[i].length - 1]) {
          case 'K':
            ar[i] = ar[i].slice(0, -1) * 1000;
            break;
          case 'M':
            ar[i] = ar[i].slice(0, -1) * 1000000;
            break;
          case 'B':
            ar[i] = ar[i].slice(0, -1) * 1000000000;
            break;
        }
      }
      if (min > parseFloat(ar[i]))min = parseFloat(ar[i]);
      if (max < parseFloat(ar[i]))max = parseFloat(ar[i]);
    }

    filter_input = $(document.createElement('div'));
    filter_input_title = $(document.createElement('div')).addClass('filter-title').html(data_keys[field]);
    filter_input.addClass('popup-filter-input');
    filter_input.attr('tabindex', '1');
    filter_input.append(filter_input_title);

    reset_btn = $(document.createElement('div'));
    reset_btn.addClass('reset-btn').html('<i class="fa fa-times"></i>');
    filter_input.append(reset_btn);

    if (min > max && !is_string && !is_string_simple) {
      no_data = $('<div class="no-data">No data</div>');
      filter_input.append(no_data);
    } else if (is_string) {
      select = $('<select class="ui dropdown" multiple="" data-placeholder="Select filter(ctrl+click - multiple)..."></select>');
      if (filter_data[cur_market] == undefined)filter_data[cur_market] = {};
      if (filter_data[cur_market][cur_tab] == undefined)filter_data[cur_market][cur_tab] = {};
      if (filter_data[cur_market][cur_tab][field] == undefined)filter_data[cur_market][cur_tab][field] = {};
      if (filter_data[cur_market][cur_tab][field]['val'] == undefined)
        filter_data[cur_market][cur_tab][field]['val'] = [];
      for (i in ar)
        if (ar[i] != '—')
          select.append('<option value="' + ar[i] + '"' + (filter_data[cur_market][cur_tab][field]['val'].indexOf(ar[i]) >= 0 ? ' selected' : '') + '>' + ar[i] + '</option>');
      filter_input.append(select);
      select.chosen();
      select.change(function () {
        clearTimeout(fl_tm);
        fl_tm = setTimeout(function () {
          if (filter_data[cur_market] == undefined)filter_data[cur_market] = {};
          if (filter_data[cur_market][cur_tab] == undefined)filter_data[cur_market][cur_tab] = {};
          if (filter_data[cur_market][cur_tab][field] == undefined)filter_data[cur_market][cur_tab][field] = {};

          if (select.val().length > 0) {
            filter_data[cur_market][cur_tab][field]['val'] = select.val();
            filter_data[cur_market][cur_tab][field]['text'] = select.val().join(', ');
            $('.column-' + field).addClass('filter-set');
            $('.column-' + field + ' .filter-desc').html(select.val().join(', '));
          }
          else {
            filter_data[cur_market][cur_tab][field] = undefined;
            $('.column-' + field).removeClass('filter-set');
            $('.column-' + field + ' .filter-desc').html('');
          }
          tbl_api.draw();
        }, 300);
      });
    }
    else if (is_string_simple) {
      vv = '';
      if (filter_data[cur_market] != undefined && filter_data[cur_market][cur_tab] != undefined && filter_data[cur_market][cur_tab][field] != undefined && filter_data[cur_market][cur_tab][field]['val'] != undefined)
        vv = filter_data[cur_market][cur_tab][field]['val'];
      input = $('<input class="ui input filter-string-simple" value="' + vv + '"/>');
      if (filter_data[cur_market] == undefined)filter_data[cur_market] = {};
      if (filter_data[cur_market][cur_tab] == undefined)filter_data[cur_market][cur_tab] = {};
      if (filter_data[cur_market][cur_tab][field] == undefined)filter_data[cur_market][cur_tab][field] = {};
      if (filter_data[cur_market][cur_tab][field]['val'] == undefined)
        filter_data[cur_market][cur_tab][field]['val'] = [];
      filter_input.append(input);
      input.focus();
      input.keyup(function () {
        clearTimeout(fl_tm);
        fl_tm = setTimeout(function () {
          if (filter_data[cur_market] == undefined)filter_data[cur_market] = {};
          if (filter_data[cur_market][cur_tab] == undefined)filter_data[cur_market][cur_tab] = {};
          if (filter_data[cur_market][cur_tab][field] == undefined)filter_data[cur_market][cur_tab][field] = {};
          if (input.val().length > 0) {
            filter_data[cur_market][cur_tab][field]['val'] = input.val();
            filter_data[cur_market][cur_tab][field]['text'] = input.val();
            $('.column-' + field).addClass('filter-set');
            $('.column-' + field + ' .filter-desc').html(input.val());
          }
          else {
            filter_data[cur_market][cur_tab][field] = undefined;
            $('.column-' + field).removeClass('filter-set');
            $('.column-' + field + ' .filter-desc').html('');
          }
          tbl_api.draw();
        }, 300);
      });
    }
    else {
      slider = $(document.createElement('div'))
      if (
        filter_data[cur_market] != undefined &&
        filter_data[cur_market][cur_tab] != undefined &&
        filter_data[cur_market][cur_tab][field] != undefined
      ) {
        cur_min = filter_data[cur_market][cur_tab][field]['min'];
        if (cur_min == undefined)cur_min = min;
        cur_max = filter_data[cur_market][cur_tab][field]['max'];
        if (cur_max == undefined)cur_max = max;
      }
      else {
        cur_min = min;
        cur_max = max;
      }

      slider_lbl_min = $(document.createElement('div'));
      slider_lbl_max = $(document.createElement('div'));

      slider_lbl_min.addClass('lbl-from').html(formatFunction(min));
      slider_lbl_max.addClass('lbl-to').html(formatFunction(max));

      filter_input.append(slider_lbl_min);
      filter_input.append(slider_lbl_max);

      filter_input.append(slider);

      slider_lbl_range_from = $(document.createElement('input'));
      slider_lbl_range_to = $(document.createElement('input'));
      slider_lbl_range = $(document.createElement('div'));

      slider_lbl_range_from.addClass('lbl-range-from').val(formatFunction(cur_min));
      slider_lbl_range_to.addClass('lbl-range-to').val(formatFunction(cur_max));
      slider_lbl_range.addClass('lbl-range').html('-');
      filter_input.append(slider_lbl_range_from);
      filter_input.append(slider_lbl_range_to);
      filter_input.append(slider_lbl_range);

      if (is_date) {

        slider_lbl_range_from.datepicker({
          dateFormat: "mm/dd/yy",
          autoclose: true,
          beforeShow: function (textbox, instance) {
            setTimeout(function () {
              $('#ui-datepicker-div').css({
                position: 'absolute',
                top: slider_lbl_range_from.position().top + slider_lbl_range_from.outerHeight() + 10,
                left: slider_lbl_range_from.position().left
              });
            }, 0);
            filter_input.append($('#ui-datepicker-div'));
            $('#ui-datepicker-div').hide();
          }
        });
        slider_lbl_range_to.datepicker({
          dateFormat: "mm/dd/yy",
          autoclose: true,
          beforeShow: function (textbox, instance) {
            setTimeout(function () {
              $('#ui-datepicker-div').css({
                position: 'absolute',
                top: slider_lbl_range_to.position().top + slider_lbl_range_to.outerHeight() + 10,
                left: slider_lbl_range_to.position().left
              });
            }, 0);
            filter_input.append($('#ui-datepicker-div'));
            $('#ui-datepicker-div').hide();
          }
        });
      }
      slider.slider({
        step: 0.001,
        range: true,
        orientation: "horizontal",
        min: parseFloat(min),
        max: parseFloat(max),
        values: [parseFloat(cur_min), parseFloat(cur_max)],
        slide: function (event, ui) {
          if (document.activeElement != slider_lbl_range_from[0])slider_lbl_range_from.val(formatFunction(ui.values[0]));
          if (document.activeElement != slider_lbl_range_to[0])slider_lbl_range_to.val(formatFunction(ui.values[1]));

          clearTimeout(fl_tm);
          fl_tm = setTimeout(function () {
            if (filter_data[cur_market] == undefined)filter_data[cur_market] = {};
            if (filter_data[cur_market][cur_tab] == undefined)filter_data[cur_market][cur_tab] = {};
            if (filter_data[cur_market][cur_tab][field] == undefined)filter_data[cur_market][cur_tab][field] = {};

            filter_data[cur_market][cur_tab][field]['min'] = (((ui.values[0] > 1000 || ui.values[0] < -1000) && Math.round(ui.values[0]) == Math.round(min) || parseFloat(min).toFixed(2) == parseFloat(ui.values[0]).toFixed(2)) ? undefined : parseFloat(parseFloat(ui.values[0]).toFixed(2)));
            filter_data[cur_market][cur_tab][field]['max'] = (((ui.values[1] > 1000 || ui.values[1] < -1000) && Math.round(ui.values[1]) == Math.round(max) || parseFloat(max).toFixed(2) == parseFloat(ui.values[1]).toFixed(2)) ? undefined : parseFloat(parseFloat(ui.values[1]).toFixed(2)));

            if (filter_data[cur_market][cur_tab][field]['min'] != undefined || filter_data[cur_market][cur_tab][field]['max'] != undefined) {
              tbl_api.draw();
              $('.column-' + field).addClass('filter-set');
              if (
                filter_data[cur_market][cur_tab][field]['min'] == filter_data[cur_market][cur_tab][field]['max'] ||
                (filter_data[cur_market][cur_tab][field]['min'] == undefined && filter_data[cur_market][cur_tab][field]['max'] == min) ||
                (filter_data[cur_market][cur_tab][field]['max'] == undefined && filter_data[cur_market][cur_tab][field]['min'] == max)
              )
                $('.column-' + field + ' .filter-desc').html(" = " + formatFunction(ui.values[1]));
              else if (filter_data[cur_market][cur_tab][field]['min'] == undefined)
                $('.column-' + field + ' .filter-desc').html(" < " + formatFunction(ui.values[1]));
              else if (filter_data[cur_market][cur_tab][field]['max'] == undefined)
                $('.column-' + field + ' .filter-desc').html(" > " + formatFunction(ui.values[0]));
              else
                $('.column-' + field + ' .filter-desc').html(formatFunction(ui.values[0]) + " - " + formatFunction(ui.values[1]));
            }
            else {
              $('.column-' + field).removeClass('filter-set');
              $('.column-' + field + ' .filter-desc').html('');
              filter_data[cur_market][cur_tab][field] = undefined;
              tbl_api.draw();
            }
          }, 300);
        }
      });
      slider_lbl_range_from.on('keyup change', function () {
        v = $(this).val();
        if (is_date) {
          v = new Date(v);
          if (v != 'Invalid Date') {
            v = v.getTime() / 1000;
            slider.slider('values', 0, v);
          }
          slider_lbl_range_from.focus();
        }
        else if (is_time) {
          r = /^\d{1,2}\:\d\d(am|pm){0,1}$/
          v = v.toString().replace(" ", "");
          if (r.test(v)) {
            h = 0;
            m = 0;
            if (v.slice(-2) == "am") {
              h = 12;
              v = v.slice(0, -2);
            }
            else if (v.slice(-2) == "pm") {
              v = v.slice(0, -2);
            }
            h += parseInt(v.split(":")[0]);
            m += parseInt(v.split(":")[1]);
            v = h * 60 + m;
            slider.slider('values', 0, v);
          }
        }
        else if (is_percent) {
          v = parseFloat(v);
          if (!isNaN(v))slider.slider('values', 0, v);
        }
        else {
          switch (v[v.length - 1]) {
            case 'K':
              v = v.slice(0, -1) * 1000;
              break;
            case 'M':
              v = v.slice(0, -1) * 1000000;
              break;
            case 'B':
              v = v.slice(0, -1) * 1000000000;
              break;
          }
          v = parseFloat(v);
          if (!isNaN(v))slider.slider('values', 0, v);
        }
        slider.slider('option', 'slide')(null, {values: slider.slider('values')})
      });
      slider_lbl_range_to.on('keyup change', function () {
        v = $(this).val();
        if (is_date) {
          v = new Date(v);
          if (v != 'Invalid Date') {
            v = v.getTime() / 1000;
            slider.slider('values', 1, v);
          }
          slider_lbl_range_to.focus();
        }
        else if (is_time) {
          r = /^\d{1,2}\:\d\d(am|pm){0,1}$/
          v = v.toString().replace(" ", "");
          if (r.test(v)) {
            h = 0;
            m = 0;
            if (v.slice(-2) == "am") {
              h = 12;
              v = v.slice(0, -2);
            }
            else if (v.slice(-2) == "pm") {
              v = v.slice(0, -2);
            }
            h += parseInt(v.split(":")[0]);
            m += parseInt(v.split(":")[1]);
            v = h * 60 + m;
            slider.slider('values', 1, v);
          }
        }
        else if (is_percent) {
          v = parseFloat(v);
          if (!isNaN(v))slider.slider('values', 1, v);
        }
        else {
          switch (v[v.length - 1]) {
            case 'K':
              v = v.slice(0, -1) * 1000;
              break;
            case 'M':
              v = v.slice(0, -1) * 1000000;
              break;
            case 'B':
              v = v.slice(0, -1) * 1000000000;
              break;
          }
          v = parseFloat(v);
          if (!isNaN(v))slider.slider('values', 1, v);
        }
        slider.slider('option', 'slide')(null, {values: slider.slider('values')})
      });
    }
    reset_btn.click(function () {
      if (filter_data[cur_market] == undefined)filter_data[cur_market] = {};
      if (filter_data[cur_market][cur_tab] == undefined)filter_data[cur_market][cur_tab] = {};
      filter_data[cur_market][cur_tab][field] = undefined;
      tbl_api.draw();
      $('.column-' + field).removeClass('filter-set');
      $('.column-' + field + ' .filter-desc').html('');
      f_close();
    });

    tab_idx = 2;
    filter_input.find('*', function () {
      $(this).attr('tabindex', tab_idx);
      tab_idx++;
    });

    $('body').append(filter_input);


    if (has_centered) {
      filter_input.css('left', '0');
      filter_input.css('right', '0');
      filter_input.css('margin', 'auto');
      filter_input.addClass('pull-center');
    }
    else if (self.offset().left > 400) {
      filter_input.css('right', 'calc( 100vw - ' + (self.offset().left + self.outerWidth()) + 'px )');
      filter_input.addClass('pull-right');
    }
    else if (self.offset().left <= 400) {
      filter_input.css('left', (self.offset().left) + 'px');
      filter_input.addClass('pull-left');
    }


    filter_input.css('top', self.offset().top);

    filter_input.addClass('show');
    filter_input.focus();

    f_close = function () {
      filter_input.addClass('hide');
      filter_input.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
        filter_input.remove();
      });
    };


    filter_input.focusout(function (e) {//return;
      var $elem = $(this);

      setTimeout(function () {
        if (!$elem.find(':focus').length && $elem[0] != document.activeElement) {
          f_close();
        }
      }, 0);
    });
  })(self, e);

  return false;
});


//REFRESH BUTTON CLICK
$(document).on('click', '.refresh-data', function () {
  tbl_api.ajax.reload(null, false);
  $('.refresh-data').attr('title', 'Last refreshed at ' + (new Date).toString('dd MMM yyyy, hh:mm tt'));
});


//TABLE CELL CLICK AND SHOW POPUP INFO
$(document).on('click', '.dataTable tbody tr td:first-child,.dataTable tbody tr td:nth-child(2)', function () {
  tr = $(this).closest('tr');
  row_data = tbl_api.row(tr[0]).data();
  //console.log(row_data.s);
  swal({
    showConfirmButton: false,
    showCancelButton: false,
    buttonsStyling: false,
    title: 'Fetching data on ' + row_data.s,
    html: '<div class="share-info-modal-loading"><span><i class="fa fa-gear fa-spin"></i></span></div>',
    background: ''
  });
  $.post(server_uri, {cmd: 'get-share-info', share: row_data.s}, function (ret) {
    //console.log(ret);
    if (ret.success) {
      data = {};
      if (ret.data != undefined && ret.data.quoteSummary != undefined && ret.data.quoteSummary.result != undefined && ret.data.quoteSummary.result[0] != undefined && ret.data.quoteSummary.result[0].summaryProfile != undefined)
        data = ret.data.quoteSummary.result[0].summaryProfile;
      html = '';
      addr = [];
      if (data.address1 != undefined)addr.push(data.address1);
      if (data.address2 != undefined)addr.push(data.address2);
      if (data.city != undefined)addr.push(data.city);
      if (data.state != undefined)addr.push(data.state);
      if (data.zip != undefined)addr.push(data.zip);
      if (data.country != undefined)addr.push(data.country);

      html = '<div class="modal-share-info">' +
        '<h2>' + row_data.n + '</h2>' +
        '<div class="modal-share-left">' +
        '<div class="modal-share-line description"><label>Description: 	</label><div class="text-folding"><div>' + (data.longBusinessSummary != undefined ? data.longBusinessSummary : '-') + '</div></div></div>' +
        '<div class="modal-share-line"><label>Address: 			</label><span>' + (addr.length != 0 ? '<a target="_blank" href="https://maps.google.com/?q=' + addr.join(',') + '">' + addr.join(', ') + '</a>' : '-') + '</span></div>' +
        '<div class="modal-share-line"><label>Phone: 				</label><span>' + (data.phone != undefined && data.phone.length > 0 ? data.phone : '-') + '</span></div>' +
        '<div class="modal-share-line"><label>Website: 			</label><span>' + (data.website != undefined && data.website.length > 0 ? '<a target="_blank" href="' + data.website + '">' + data.website + '</a>' : '-') + '</span></div>' +
        '<div class="modal-share-line"><label>Industry: 		</label><span>' + (data.industry != undefined && data.industry.length > 0 ? data.industry : '-') + '</span></div>' +
        '<div class="modal-share-line"><label>Sector: 			</label><span>' + (data.sector != undefined && data.sector.length > 0 ? data.sector : '-') + '</span></div>' +
        '<div class="modal-share-line"><label>Employees: 		</label><span>' + (data.fullTimeEmployees != undefined && data.fullTimeEmployees.toString().length > 0 ? data.fullTimeEmployees : '-') + '</span></div>' +
        '</div>' +
        '<div class="modal-share-right">' +
        '<canvas id="chart"></canvas>' +
        '</div>' +
        '</div>' +
        '<div class="modal-share-info-summary">' +
        '<table>' +
        '<tr>' +
        '<td>Last Trade Price</td>' +
        '<td>Currency</td>' +
        '<td>Change</td>' +
        '<td>Change (%)</td>' +
        '<td>Market Cap</td>' +
        '<td>Volume</td>' +
        '<td>52 Week Low</td>' +
        '<td>52 Week High</td>' +
        '</tr>' +
        '<tr>' +
        '<td><span class="mobile-label">Last Trade Price</span>' + render_cell_numshort(row_data.regularMarketPrice) + '</td>' +
        '<td><span class="mobile-label">Currency</span>' + row_data.currency + '</td>' +
        '<td><span class="mobile-label">Change</span>' + render_cell_numshort_colored(row_data.regularMarketChange) + '</td>' +
        '<td><span class="mobile-label">Change (%)</span>' + render_cell_percent_colored(row_data.regularMarketChangePercent) + '</td>' +
        '<td><span class="mobile-label">Market Cap</span>' + render_cell_numshort(row_data.marketCap) + '</td>' +
        '<td><span class="mobile-label">Volume</span>' + render_cell_numshort_int(row_data.regularMarketVolume) + '</td>' +
        '<td><span class="mobile-label">52 Week Low</span>' + render_cell_numshort(row_data.fiftyTwoWeekLow) + '</td>' +
        '<td><span class="mobile-label">52 Week High</span>' + render_cell_numshort(row_data.fiftyTwoWeekHigh) + '</td>' +
        '</tr>' +
        '</table>' +
        '</div>';

      swal({
        allowOutsideClick: true,
        width: '',
        customClass: 'modal-share',
        showConfirmButton: true,
        showCancelButton: false,
        buttonsStyling: false,
        title: '',
        html: html,
        background: ''
      }).catch(swal.noop);

      if (typeof ret.historical_data['quotes'] != 'undefined') {
        Chart.defaults.global.defaultFontColor = $('body').hasClass('dark-theme') ? '#ffffff' : '#3e2723';
        var $chart = $(document).find('#chart');
        var chart = new Chart($chart.get(0), {
          type: 'line',
          data: {
            labels: ret.historical_data['dates'],
            datasets: [{
              label: row_data.n,
              data: ret.historical_data['quotes'],
              borderColor: 'rgb(11, 137, 195)',
              backgroundColor: 'rgba(11, 137, 195, 0.3)',
              fill: true,
              borderWidth: 1,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false,
                  min: Math.min.apply(null, ret.historical_data['quotes']) * 0.95,
                  max: Math.max.apply(null, ret.historical_data['quotes']) * 1.05
                }
              }]
            }
          }
        });
      }

    } else {
      swal({buttonsStyling: false, title: 'Oops...', text: ret.message, type: 'error', background: ''});
    }
  }).fail(function () {
    swal({buttonsStyling: false, title: 'Oops...', text: 'Something went wrong!', type: 'error', background: ''});
  });
  return false;
});

//SOME PLUGINS REACTION INLINE FUNCTIONS
function updateSelectable() {
  $('select').each(function () {

    self = $(this);
    if (self.data('selectable') == 1)return;
    idx = selectable_cur_idx;
    selectable_cur_idx++;

    self.data('selectable', '1');
    self.hide();


    (function (self, idx) {

      select = $('<div class="ui-select" data-width="inherit" data-vpull="bottom" data-selectable="1" data-list="autolist-' + idx + '" data-value="' + self.val() + '">' + self.find('option:selected').html() + '</div>');
      selectable_list['autolist-' + idx] = {};
      self.find('option').each(function () {
        selectable_list['autolist-' + idx][$(this).attr('value')] = {
          id: $(this).attr('value'),
          label: $(this).html(),
          title: $(this).html()
        };
      });
      self.after(select);
      select.on('change', function () {
        self.val(select.data('value')).change();
      });
    })(self, idx);


  });

}
$(document).on('click', '*[data-selectable="1"]', function (e) {
  e.preventDefault();
  e.stopPropagation();
  self = $(this);
  (function (self, e) {
    var list_input;
    val = self.data('value');
    self.css('position', 'relative');
    list = self.data('list');
    if (selectable_list[list] == undefined)return;
    list_input = $(document.createElement('div'));
    list_input.addClass('table-select-input');
    list_input.data('value', val);
    list_input.attr('tabindex', '1');
    if (selectable_list[list + '_title'] != undefined) {
      title = $('<div class="table-select-title ripplelink">' + selectable_list[list + '_title'] + '</div>');
      list_input.append(title);

      var ink, d, x, y;

      ink = $(document.createElement('div'))
      title.prepend(ink);
      ink.addClass("ink");

      if (!ink.height() && !ink.width()) {
        d = Math.max(self.outerWidth(), self.outerHeight());
        ink.css({height: d, width: d});
      }

      x = e.pageX - self.offset().left - ink.width() / 2;
      y = e.pageY - self.offset().top - ink.height() / 2;

      ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
    }
    for (i in selectable_list[list]) {
      list_input.append('<div class="table-select-input-item ripplelink ' + (val == selectable_list[list][i].id ? ' selected' : '') + '" data-value="' + selectable_list[list][i].id + '">' + selectable_list[list][i].title + '</div>');
    }

    $('body').append(list_input);

    if (self.data('width') == 'inherit') {
      list_input.css('width', self.outerWidth());
    }

    if (self.data('pull') == 'right') {
      list_input.css('right', 'calc( 100vw - ' + (self.offset().left + self.outerWidth()) + 'px )');
      list_input.addClass('pull-right');
    }
    else
      list_input.css('left', self.offset().left);

    if (self.data('vpull') == 'bottom') {
      list_input.css('bottom', 'calc( 100vh - ' + (self.offset().top + self.outerHeight()) + 'px )');
      list_input.addClass('pull-bottom');
    }
    else
      list_input.css('top', self.offset().top);
    list_input.addClass('show');
    list_input.focus();
    apply = function () {
      val = list_input.data('value');
      //console.log(val);

      setTimeout(function () {
        list_input.addClass('hide');
        list_input.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
          list_input.remove();
        });
      }, 500);


      self.html(selectable_list[list][val].label);
      self.data('value', val);
      self.trigger('change');
      applySelectable(self.data('field'), self.data('value'));
    };
    cancel = function () {
      list_input.addClass('hide');
      list_input.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
        list_input.remove();
      });
    };
    list_input.focusout(function (e) {
      cancel();
    });
    list_input.find('.table-select-input-item').on('click', function () {
      if ($(this).hasClass('selected'))return cancel();
      list_input.find('.selected').removeClass('selected');
      $(this).addClass('selected');
      list_input.data('value', $(this).data('value'));

      apply()

    });
  })(self, e);
});
$(document).on('click', '.ripplelink', function (e) {

  self = $(this);

  (function (self, e) {
    var ink, d, x, y;

    ink = $(document.createElement('div'));
    self.prepend(ink);
    ink.addClass("ink");

    if (!ink.height() && !ink.width()) {
      d = Math.max(self.outerWidth(), self.outerHeight());
      ink.css({height: d, width: d});
    }

    x = e.pageX - self.offset().left - ink.width() / 2;
    y = e.pageY - self.offset().top - ink.height() / 2;

    ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");

    ink.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
      ink.remove();
      self.trigger('rippleend');
    });

  })(self, e);
});