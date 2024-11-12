var one = "";
var two = "";
var three = "";
function search() {
	var url2 = proxyserver();
    document.getElementById("buttlol").innerHTML = "Searching";
    fetch(url2 + "/https://lookmovie.io/api/v1/movies/do-search/?q=" + document.getElementById('movie').value)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            makeVisible();
            clear();
            document.getElementById("buttlol").innerHTML = "Searched";
            var count = data["total"];
			if (count == 1) {
                document.getElementById("2title").style.visibility = "hidden";
                document.getElementById("2img").style.visibility = "hidden";
                document.getElementById("3title").style.visibility = "hidden";
                document.getElementById("3img").style.visibility = "hidden";
				document.getElementById("1title").innerHTML = data["result"][0]["title"] + " " + data["result"][0]["year"];
            	document.getElementById("1img").src = data["result"][0]["poster"];
            	one = data["result"][0]["slug"];
			}
			if (count == 2) {
                document.getElementById("3title").style.visibility = "hidden";
                document.getElementById("3img").style.visibility = "hidden";
				document.getElementById("1title").innerHTML = data["result"][0]["title"] + " " + data["result"][0]["year"];
            	document.getElementById("1img").src = data["result"][0]["poster"];
				one = data["result"][0]["slug"];
            	document.getElementById("2title").innerHTML = data["result"][1]["title"] + " " + data["result"][1]["year"];
            	document.getElementById("2img").src = data["result"][1]["poster"];
            	two = data["result"][1]["slug"];
			}
			if (count !== 1 && count !== 2) {
				document.getElementById("1title").innerHTML = data["result"][0]["title"] + " " + data["result"][0]["year"];
            	document.getElementById("1img").src = data["result"][0]["poster"];
				one = data["result"][0]["slug"];
            	document.getElementById("2title").innerHTML = data["result"][1]["title"] + " " + data["result"][1]["year"];
            	document.getElementById("2img").src = data["result"][1]["poster"];
            	two = data["result"][1]["slug"];
            	document.getElementById("3title").innerHTML = data["result"][2]["title"] + " " + data["result"][2]["year"];
            	document.getElementById("3img").src = data["result"][2]["poster"];
            	three = data["result"][2]["slug"];
			}
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}
let input = document.getElementById('movie');
let timeout = null;
function makeVisible() {
    document.getElementById("1title").style.visibility = 'visible';
    document.getElementById("2title").style.visibility = 'visible';
    document.getElementById("3title").style.visibility = 'visible';
    document.getElementById("1img").style.visibility = 'visible';
    document.getElementById("2img").style.visibility = 'visible';
    document.getElementById("3img").style.visibility = 'visible';
}
function makeHidden() {
    document.getElementById("1title").style.visibility = 'hidden';
    document.getElementById("2title").style.visibility = 'hidden';
    document.getElementById("3title").style.visibility = 'hidden';
    document.getElementById("1img").style.visibility = 'hidden';
    document.getElementById("2img").style.visibility = 'hidden';
    document.getElementById("3img").style.visibility = 'hidden';
}
function clear() {
    document.getElementById("1title").innerHTML = 'No movie found';
    document.getElementById("2title").innerHTML = 'No movie found';
    document.getElementById("3title").innerHTML = 'No movie found';
    document.getElementById("1img").src = '';
    document.getElementById("2img").src = '';
    document.getElementById("3img").src = '';
    one = "";
    two = "";
    three = "";
}
function clickPress(event) {
    if (event.keyCode == 13) {
        search();
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        search();
    }, 300);
}
function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", yourUrl, false);
    Httpreq.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0");
    Httpreq.send(null);
    return Httpreq.responseText;
}
function Test_get(url){
        try{
            var Httpreq = new XMLHttpRequest();
            Httpreq.open("GET",url,false);
            Httpreq.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0");
            Httpreq.overrideMimeType("text/html");
            Httpreq.send(null);
            Httpreq.setTimeout(2000);
            return Httpreq.responseText.length>10000;
        }
    catch{
        return false;
    }
}
function ooh() {
	var winwidth = Math.max(window.screen.width, window.innerWidth);
    document.getElementById('video').style.visibility = "visible";
	if (winwidth < 500) {
		document.getElementById('video').width = 336;
		document.getElementById('video').height = 189;
	} else if (winwidth < 750) {
		document.getElementById('video').width = 640;
		document.getElementById('video').height = 360;
	} else {
		document.getElementById('video').width = 720;
		document.getElementById('video').height = 405;
	}
    document.getElementById('video').style.margin = "0 auto";
    document.getElementById('video').style.display = "block";
    document.getElementById('movie').style.backgroundColor = "#202020";
    document.getElementById('movie').style.color = "white";
    document.body.style.backgroundColor = "#202020";
}
function getm3u8(slug) {
    ooh();
    var url = proxyserver();
	var text = Get(url + "/https://lookmovie.io/movies/view/" + slug);
    var text2 = Get(url + "/https://lookmovie.io/movies/view/" + slug).split("\n");
    var response = text.split("id_movie: ")[1].split(",")[0];
    fetch(url + "/https://lookmovie.io/api/v1/security/movie-access?id_movie=" + response + "&token=1&sk=&step=1")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            if (data["success"] == true) {
                var exp = data["data"]["expires"];
                var act = data["data"]["accessToken"];
                var video = document.getElementById('video');
                var js = JSON.parse(Get(url + "/https://lookmovie.io/manifests/movies/json/" + response + "/" + exp + "/" + act + "/master.m3u8"));
                if (Hls.isSupported()) {
                    var hls = new Hls();
                    hls.loadSource(url + "/" + js["720p"].replace("/720p/", "/1080p/"));
                    hls.attachMedia(video);
					clear();
					makeHidden();
					document.getElementById("buttlol").innerHTML = "Search";
					var ClickArray = [
					  document.getElementById("1title"),
					  document.getElementById("2title"),
					  document.getElementById("3title"),
					  document.getElementById("1img"),
					  document.getElementById("2img"),
					  document.getElementById("3img"),
					  document.getElementById("buttlol"),
					];
					for (var i = 0; i < ClickArray.length; i++){
					  ClickArray[i].addEventListener('click', function(){
						hls.stopLoad();
						hls.detachMedia();
						hls.destroy();
					  })
					}
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
					var iphone = js["720p"].replace("/720p/", "/1080p/");
					window.location.assign(iphone);
                }
                video.style.visibility = "visible";
                video.load();
                video.play();
                window.scroll({
                    top: 150,
                    behavior: 'smooth'
                });
            }
        })
        .catch((error) => console.error("FETCH ERROR:", error));
}
function proxyserver() {
	var proxylist = ["https://www.cors.llw.name", "https://cors-anywhere-k8s.innocode.no", "https://proxy.nil.cx", "https://corss.twiketo.com", "https://cors.filavents.com", "https://control.fairway321.com", "https://proxy.sevaexchange.com", "https://cors-proxy.husl.pro", "https://cors.darpan.online", "https://cors-anywhere.usylibra.eu", "https://cors.was.exposed", "https://cors-proxy.crawler.link", "https://k.oe-jpy.com", "https://cors.ebapay.ir", "https://cors.spiralyze.com", "https://proxy.urjc.info", "https://cors.dprimero.com", "https://cors.netlob.dev", "https://cors.r2h.us", "https://cors.zimjs.org", "https://cors.v001.dev", "https://mmcors.autonio.foundation", "https://cors.bystrov.agency", "https://ip.here.fm", "https://cors-proxy.openhouse.study", "https://cors.diystock.ai", "https://cors-proxy.svi.solutions"];
	var randomproxy = proxylist[~~(Math.random() * proxylist.length)];
	return randomproxy;
}
function newsearch() {
	window.location.reload(true);
}
