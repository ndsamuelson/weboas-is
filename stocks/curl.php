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

class curl {
  private $cookie_path;
  private $proxy;
  private $proxy_auth;
  private $last_error;

  function __construct() {
    $this->last_error = "success";
    $this->cookie_path = BASE_PATH . 'cookie/all';
  }

  function init($i, $proxy = NULL, $proxy_user = NULL, $proxy_pass = NULL) {
    $this->cookie_path = BASE_PATH . "cookie/curl-cookie-" . $i;
    if (isset($proxy)) {
      $this->proxy = $proxy;
      if (isset($proxy_user)) {
        $this->proxy_auth = $proxy_user . ":" . $proxy_pass;
      }
    }
    else {
      $this->proxy = NULL;
    }
  }

  function SendFile($url, $post, $filesize, $use_cookie = TRUE, $out_header = TRUE, $follow_location = 1) {
    $ch = curl_init();


    if (preg_match('/^https/', $url)) {
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    }
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, $follow_location ? 1 : 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($ch, CURLOPT_TIMEOUT, CURL_TIMEOUT);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36");
    curl_setopt($ch, CURLOPT_HEADER, $out_header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLINFO_HEADER_OUT, FALSE);
    curl_setopt($ch, CURLOPT_INFILESIZE, $filesize);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);

    if (isset($this->proxy)) {
      curl_setopt($ch, CURLOPT_PROXY, $this->proxy);
    }
    if (isset($this->proxy) && isset($this->proxy_auth)) {
      curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->proxy_auth);
    }

    if ($use_cookie) {
      curl_setopt($ch, CURLOPT_COOKIEJAR, $this->cookie_path);
      curl_setopt($ch, CURLOPT_COOKIEFILE, $this->cookie_path);
    }
    $result = curl_exec($ch);
    //echo "Headers:\n".curl_getinfo($ch, CURLINFO_HEADER_OUT )."\n";
    //var_dump(curl_getinfo($ch));
    if ($result === FALSE) {
      $this->last_error = curl_error($ch);
    }
    else {
      $this->last_error = "success";
    }
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE) + 0;

    curl_close($ch);
    return array('result' => $result, 'status' => $http_status);

  }

  function ReadPost($url, $post = '', $use_cookie = TRUE, $out_header = TRUE, $follow_location = 1) {
    $ch = curl_init();
    //$out_header=false;
    if (preg_match('/^https/', $url)) {
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    }
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, $follow_location ? 1 : 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($ch, CURLOPT_TIMEOUT, CURL_TIMEOUT);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36");
    curl_setopt($ch, CURLOPT_HEADER, $out_header ? 1 : 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLINFO_HEADER_OUT, FALSE);

    if (isset($this->proxy)) {
      curl_setopt($ch, CURLOPT_PROXY, $this->proxy);
    }
    if (isset($this->proxy) && isset($this->proxy_auth)) {
      curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->proxy_auth);
    }

    if ($use_cookie) {
      curl_setopt($ch, CURLOPT_COOKIEJAR, $this->cookie_path);
      curl_setopt($ch, CURLOPT_COOKIEFILE, $this->cookie_path);
    }
    $result = curl_exec($ch);
    /*echo "Headers:\n".curl_getinfo($ch, CURLINFO_HEADER_OUT )."\n";
    var_dump(curl_getinfo($ch));
    */
    if ($result === FALSE) {
      $this->last_error = curl_error($ch);
    }
    else {
      $this->last_error = "success";
    }
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    curl_close($ch);
    return array('result' => $result, 'status' => $http_status);
  }

  function Read($url, $use_cookie = TRUE, $out_header = TRUE) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    if (preg_match('/^https/', $url)) {
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    }
    curl_setopt($ch, CURLOPT_POST, 0);
    curl_setopt($ch, CURLOPT_AUTOREFERER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 60);
    curl_setopt($ch, CURLOPT_TIMEOUT, CURL_TIMEOUT);
    curl_setopt($ch, CURLOPT_HEADER, $out_header ? 1 : 0);
    curl_setopt($ch, CURLINFO_HEADER_OUT, FALSE);

    if (isset($this->proxy)) {
      curl_setopt($ch, CURLOPT_PROXY, $this->proxy);
    }
    if (isset($this->proxy) && isset($this->proxy_auth)) {
      curl_setopt($ch, CURLOPT_PROXYUSERPWD, $this->proxy_auth);
    }

    if ($use_cookie) {
      curl_setopt($ch, CURLOPT_COOKIEJAR, $this->cookie_path);
      curl_setopt($ch, CURLOPT_COOKIEFILE, $this->cookie_path);
    }
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36");
    $result = curl_exec($ch);
    if ($result === FALSE) {
      $this->last_error = curl_error($ch);
    }
    else {
      $this->last_error = "success";
    }
    //echo "Headers:\n".curl_getinfo($ch, CURLINFO_HEADER_OUT )."\n";
    //var_dump(curl_getinfo($ch));
    $http_status = curl_getinfo($ch, CURLINFO_HTTP_CODE) + 0;

    curl_close($ch);
    return array('result' => $result, 'status' => $http_status);
  }

  function lastError($ch) {
    /*
    if(curl_exec($ch) === false)
    {
      $this->last_error = curl_error($ch);
    }
    else
    {
      $this->last_error="success";
    }
    */
  }

  function getLastError() {
    return $this->last_error;
  }

  function ClearCookie() {
    unlink($this->cookie_path);
  }
}

