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

require_once "config.php";
require_once "curl.php";
require_once "output.php";
require_once "get_shares.php";

define('MAX_SHARES_STRING_LENGTH', 8000);
//$test=true;
ini_set('display_errors', 0);
error_reporting(0);

if (!isset($_POST['cmd']) && !isset($_GET['cmd'])) {
  echo output_json_error('No command set');
  exit;
}
$cmd = isset($_POST['cmd']) ? $_POST['cmd'] : $_GET['cmd'];
#RESPONSE TO CMD REQUEST
switch ($cmd) {
  case 'get-markets': #GET AWAILABLE MARKETS
    $ret = ['markets' => []];
    foreach ($markets as $k => $market) {
      $ret['markets'][$k] = $market['name'];
    }
    echo output_json_success($ret);
    break;
  case 'get-data':# GET DATA FROM SELECTED MARKET
    if (!isset($_POST['market']) && !isset($_GET['market'])) {
      echo output_json_error('Market not set');
      exit;
    }
    
    if(isset($_GET['market']))
      $mkt=(int)$_GET['market'];
    else
    $mkt=(int)$_POST['market'];
    
    
    if(filemtime($markets[$mkt]['file_shares_cache'])<time()-$mkt_cache_life)load_shares($mkt);
    $data=json_decode(file_get_contents($markets[$mkt]['file_shares_cache']),true);
    
    echo output_json_success(['data' => $data]);

    break;
  case 'get-share-info':#GET SHARE INFO
    $curl = new curl();
    $share = $_POST['share'];
    $ret = $curl->Read(str_replace('$share', $share, $share_info_request_uri), FALSE, FALSE);
    $ret2 = $curl->Read(str_replace('$share', $share, $share_historical_data_uri), FALSE, FALSE);
    if ($ret['status'] == 200) {
      $data = json_decode($ret['result'], TRUE);

      if ($data) {
        $historical_data = [];
        if ($ret2['status'] == 200) {
          $result = json_decode($ret2['result'], TRUE);
          if (isset($result['spark']['result'][0]['response'][0]['timestamp']) && isset($result['spark']['result'][0]['response'][0]['indicators']['quote'][0]['close'])) {
            $timestamps = $result['spark']['result'][0]['response'][0]['timestamp'];
            $quotes = $result['spark']['result'][0]['response'][0]['indicators']['quote'][0]['close'];
            for ($i = 0; $i < count($timestamps); $i++) {
              $quote = floatval($quotes[$i]);
              if ($quote > 0) {
                $historical_data['dates'][] = date('d M Y', $timestamps[$i]);
                $historical_data['quotes'][] = $quote;
              }
            }
          }
        }
        echo output_json_success([
          'data' => $data,
          'historical_data' => $historical_data
        ]);
      }
      else {
        echo output_json_error('There was an error while fetching the data');
      }
    }
    else {
      echo output_json_success(['data' => [], 'historical_data' => []]);
    }
    break;
  default:
    echo output_json_error('Unknown command');
}