<?php
/**
 * Stock Screener
 * --------------------
 * Version 1.7.0, built on Tuesday, November 21, 2017
 * Copyright (c) Financial Apps and Plugins <info@financialplugins.com>. All rights reserved.
 * Demo: http://financialplugins.com/products/stock-screener/
 * Purchase: https://codecanyon.net/item/stock-screener/18297488?ref=financialtechnology
 * Like: https://www.facebook.com/financialplugins/
 */

?><?php

define('USE_YQL', FALSE);
define('CURL_TIMEOUT', 60);
define('BASE_PATH', __DIR__ . '/');

$share_info_request_uri = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/$share?formatted=true&modules=summaryProfile';
$share_historical_data_uri = 'https://query1.finance.yahoo.com/v7/finance/spark?range=3mo&interval=1d&indicators=close&symbols=$share';

$mkt_cache_life = 1800; // 3600 = 1 hour

$markets = [
  [
    'name' => 'NASDAQ',
    'file_list' => 'markets/nasdaq.csv',
    'file_shares_cache' => 'markets/nasdaq.json',
  ],
  [
    'name' => 'NYSE',
    'file_list' => 'markets/nyse.csv',
    'file_shares_cache' => 'markets/nyse.json',
  ],
  [
    'name' => 'AMEX',
    'file_list' => 'markets/amex.csv',
    'file_shares_cache' => 'markets/amex.json',
  ],
  [
    'name' => 'LSE',
    'file_list' => 'markets/lse.csv',
    'file_shares_cache' => 'markets/lse.json',
  ],
  [
    'name' => 'ASX',
    'file_list' => 'markets/asx.csv',
    'file_shares_cache' => 'markets/asx.json',
  ],
  [
    'name' => 'TORONTO',
    'file_list' => 'markets/toronto.csv',
    'file_shares_cache' => 'markets/toronto.json',
  ],
  [
    'name' => 'XETRA',
    'file_list' => 'markets/xetra.csv',
    'file_shares_cache' => 'markets/xetra.json',
  ],
  [
    'name' => 'FRANKFURT',
    'file_list' => 'markets/frankfurt.csv',
    'file_shares_cache' => 'markets/frankfurt.json',
  ],
  [
    'name' => 'AEX',
    'file_list' => 'markets/aex.csv',
    'file_shares_cache' => 'markets/aex.json',
  ],
  [
    'name' => 'OMX STOCKHOLM',
    'file_list' => 'markets/stockholm.csv',
    'file_shares_cache' => 'markets/stockholm.json',
  ],
  [
    'name' => 'OMX HELSINKI',
    'file_list' => 'markets/helsinki.csv',
    'file_shares_cache' => 'markets/helsinki.json',
  ],
  [
    'name' => 'OSLO',
    'file_list' => 'markets/oslo.csv',
    'file_shares_cache' => 'markets/oslo.json',
  ],
  [
    'name' => 'SIX',
    'file_list' => 'markets/six.csv',
    'file_shares_cache' => 'markets/six.json',
  ],
  [
    'name' => 'BOVESPA',
    'file_list' => 'markets/bovespa.csv',
    'file_shares_cache' => 'markets/bovespa.json',
  ],
  [
    'name' => 'SINGAPORE',
    'file_list' => 'markets/sgx.csv',
    'file_shares_cache' => 'markets/sgx.json',
  ],
  [
    'name' => 'HONG KONG',
    'file_list' => 'markets/hkex.csv',
    'file_shares_cache' => 'markets/hkex.json',
  ],
  [
    'name' => 'MALAYSIA',
    'file_list' => 'markets/klse.csv',
    'file_shares_cache' => 'markets/klse.json',
  ]
];