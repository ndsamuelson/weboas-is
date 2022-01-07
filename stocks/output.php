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
function output_json_error($error_text = '') {
  return output_json(array('success' => FALSE, 'error_message' => $error_text));
}

function output_json_success($success_params = '') {
  if (gettype($success_params) === 'array') {
    $success_params['success'] = TRUE;
    return output_json($success_params);
  }
  else {
    return output_json(['success' => TRUE, 'error_message' => $success_text]);
  }
}

function output_json($data = array()) {
  header('Content-Type: application/json');
  ob_start();
  echo json_encode($data);
  return ob_get_clean();
}