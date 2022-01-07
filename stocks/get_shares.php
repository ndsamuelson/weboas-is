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

?><?

/*
	use the following command to update market data for all markets:
	php {DIR_TO_FILE}/get_shares.php update
*/

require_once __DIR__ . "/config.php";
require_once __DIR__ . "/curl.php";
require_once __DIR__ . "/output.php";

function load_shares($id_market=-1){
	global $markets;
	  
	$lckfile=fopen(__DIR__.'/get_shares.php.lck',"w+");
	flock($lckfile, LOCK_EX);
//	$columns=["regularMarketPrice","currency","regularMarketChange","regularMarketChangePercent","regularMarketVolume","sharesOutstanding","marketCap","bid","ask","bidSize","askSize","regularMarketOpen","regularMarketDayLow","regularMarketDayHigh","regularMarketPreviousClose","fiftyTwoWeekLow","fiftyTwoWeekHigh","fiftyTwoWeekLowChange","fiftyTwoWeekHighChange","fiftyTwoWeekLowChangePercent","fiftyTwoWeekHighChangePercent","averageDailyVolume3Month","beta","epsTrailingTwelveMonths","ebitda","trailingPE","pegRatio","bookValue","priceToBook","totalCash","shortRatio","dividendRate","dividendYield","exDividendDate","fiftyDayAverage","twoHundredDayAverage","fiftyDayAverageChange","fiftyDayAverageChangePercent","twoHundredDayAverageChange","twoHundredDayAverageChangePercent","shortName","symbol"];
	$columns=["regularMarketPrice","currency","regularMarketChange","regularMarketChangePercent","regularMarketVolume","sharesOutstanding","marketCap","bid","ask","bidSize","askSize","regularMarketOpen","regularMarketDayLow","regularMarketDayHigh","regularMarketPreviousClose","fiftyTwoWeekLow","fiftyTwoWeekHigh","fiftyTwoWeekLowChange","fiftyTwoWeekHighChange","fiftyTwoWeekLowChangePercent","fiftyTwoWeekHighChangePercent","averageDailyVolume3Month","epsTrailingTwelveMonths","ebitda","trailingPE","pegRatio","bookValue","priceToBook","totalCash","shortRatio","dividendRate","dividendYield","exDividendDate","fiftyDayAverage","twoHundredDayAverage","fiftyDayAverageChange","fiftyDayAverageChangePercent","twoHundredDayAverageChange","twoHundredDayAverageChangePercent","shortName","symbol"];
	$curl = new curl();
	
	foreach($markets as $idk=>$market)if($id_market==-1||$idk==$id_market){
		$output=[];
		$shares=explode("\n",str_replace("\r","",file_get_contents(__DIR__ . '/' . $market['file_list'])));
		foreach($shares as &$share)$share=trim($share);unset($share);
		foreach(array_chunk($shares,400) as $shares_s){
			$ret = $curl->Read('https://query'.rand(1,2).'.finance.yahoo.com/v7/finance/quote?formatted=false&symbols='.implode(',',$shares_s).'&fields='.implode(',',$columns), FALSE, FALSE);
			$keys=[];
			if($ret['status']==200){
				$ret=json_decode($ret['result'],true);	
				if(is_array($ret)&&isset($ret['quoteResponse'])&&isset($ret['quoteResponse']['result']))
					foreach($ret['quoteResponse']['result'] as $item){
						foreach($columns as $column){
							if(!isset($item[$column]))$item[$column]='—';
							elseif(empty($item[$column]))$item[$column]='—';
							elseif(preg_match('/^(n\/a|\-|\-inf\%|\+inf\%)$/ui', $item[$column]))$item[$column]='—';
						}
						
						$item=array_intersect_key($item,array_flip($columns));
						
						$item['s']=$item['symbol'];
						$item['n']=$item['shortName'];
						
						if($item['marketCap']>1000)				$item['marketCap']=round($item['marketCap']/1000,2).'K';
						elseif($item['marketCap']>1000000)		$item['marketCap']=round($item['marketCap']/1000000,2).'M';
						elseif($item['marketCap']>1000000000)	$item['marketCap']=round($item['marketCap']/1000000000,2).'B';
						
						if($item['sharesOutstanding']>1000)$item['sharesOutstanding']=round($item['sharesOutstanding']/1000,2).'K';
						elseif($item['sharesOutstanding']>1000000)$item['sharesOutstanding']=round($item['sharesOutstanding']/1000000,2).'M';
						elseif($item['sharesOutstanding']>1000000000)$item['sharesOutstanding']=round($item['sharesOutstanding']/1000000000,2).'B';
						
						if($item['regularMarketVolume']>1000)$item['regularMarketVolume']=round($item['regularMarketVolume']/1000,2).'K';
						elseif($item['regularMarketVolume']>1000000)$item['regularMarketVolume']=round($item['regularMarketVolume']/1000000,2).'M';
						elseif($item['regularMarketVolume']>1000000000)$item['regularMarketVolume']=round($item['regularMarketVolume']/1000000000,2).'B';
						
						if($item['exDividendDate']>100)$item['exDividendDate']=date('m/d/Y',$item['exDividendDate']);
						
						
						if(is_numeric($item['fiftyTwoWeekLowChangePercent']))			$item['fiftyTwoWeekLowChangePercent']*=100;
						if(is_numeric($item['fiftyTwoWeekHighChangePercent']))			$item['fiftyTwoWeekHighChangePercent']*=100;
						if(is_numeric($item['fiftyDayAverageChangePercent']))			$item['fiftyDayAverageChangePercent']*=100;
						if(is_numeric($item['twoHundredDayAverageChangePercent']))		$item['twoHundredDayAverageChangePercent']*=100;
						
						$output[]=$item;
						$keys[]=$item['s'];
					}
			}
			
			foreach($shares_s as $item)
				if(!in_array($item,$keys))
					$output[]=[
						"regularMarketPrice"					=>'—',
						"currency"								=>'—',
						"regularMarketChange"					=>'—',
						"regularMarketChangePercent"			=>'—',
						"regularMarketVolume"					=>'—',
						"sharesOutstanding"						=>'—',
						"marketCap"								=>'—',
						"bid"									=>'—',
						"ask"									=>'—',
						"bidSize"								=>'—',
						"askSize"								=>'—',
						"regularMarketOpen"						=>'—',
						"regularMarketDayLow"					=>'—',
						"regularMarketDayHigh"					=>'—',
						"regularMarketPreviousClose"			=>'—',
						"fiftyTwoWeekLow"						=>'—',
						"fiftyTwoWeekHigh"						=>'—',
						"fiftyTwoWeekLowChange"					=>'—',
						"fiftyTwoWeekHighChange"				=>'—',
						"fiftyTwoWeekLowChangePercent"			=>'—',
						"fiftyTwoWeekHighChangePercent"			=>'—',
						"averageDailyVolume3Month"				=>'—',
//						"beta"									=>'—',
						"epsTrailingTwelveMonths"				=>'—',
						"ebitda"								=>'—',
						"trailingPE"							=>'—',
						"pegRatio"								=>'—',
						"bookValue"								=>'—',
						"priceToBook"							=>'—',
						"totalCash"								=>'—',
						"shortRatio"							=>'—',
						"dividendRate"							=>'—',
						"dividendYield"							=>'—',
						"exDividendDate"						=>'—',
						"fiftyDayAverage"						=>'—',
						"twoHundredDayAverage"					=>'—',
						"fiftyDayAverageChange"					=>'—',
						"fiftyDayAverageChangePercent"			=>'—',
						"twoHundredDayAverageChange"			=>'—',
						"twoHundredDayAverageChangePercent"		=>'—',
						
						"symbol"								=> $item,
						"n"										=>'—',
						"s"										=> $item,
					];
		}
		file_put_contents(__DIR__ ."/".$market['file_shares_cache'],json_encode($output));
	}
	flock($lckfile, LOCK_UN);
	fclose($lckfile);
}

if(isset($_SERVER['argv'])&&$_SERVER['argv'][1]=='update')load_shares();
