function is_touch_device() {
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function (query) {
		return window.matchMedia(query).matches;
	}

	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		return true;
	}

	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}

(() => {
	let show = is_touch_device() || true;
	if (show) {
		document.getElementById("searchContainer").classList.add("touchscreen");
		document.getElementById("searchButton").addEventListener('click', function () {

			/*--- BASED ON THE SEARCH METHOD ---*/
			let query = document.getElementById("searchBar").value;
			let qList = query.split(" ");
			if (qList[0].charAt(0) === cmdPrefix) {
				var keyword = "";
				for (var i = 0; i < searchSources.length; i++) {
					keyword = cmdPrefix + searchSources[i][0];
					if (keyword === qList[0]) {
						ssi = i;
						break;
					}
				}
				if (qList.length > 1) {
					url = searchSources[ssi][1].replace("{Q}", encodeURIComponent(query.replace(keyword, ""))).trim();
					if (GetCookie('new-tab') === 'true') {
						window.open(url, '_blank');
					} else {
						window.location = url;
					}
				} else {
					event.preventDefault();
					searchInput.placeholder = searchSources[ssi][2];
					searchInput.value = "";

				}
			} else {
				url = searchSources[ssi][1].replace("{Q}", encodeURIComponent(query));
				if (GetCookie('new-tab') === 'true') {
					window.open(url, '_blank');
				} else {
					window.location = url;
				}
			}
		});

		function setFontSize() {
			try {
				var computedFontSize = window.getComputedStyle(document.getElementById("searchBar")).fontSize;
				document.getElementById("searchButton").style.fontSize = computedFontSize;
			} catch (e) {}
		}
		document.getElementById("searchBar")
			.addEventListener("focus", function () {
				if (!document.getElementById("searchButton").classList.contains("searchbar-focused")) {
					document.getElementById("searchButton").classList.add("searchbar-focused");
				}
			});
		document.getElementById("searchBar")
			.addEventListener("blur", function () {
				if (document.getElementById("searchButton").classList.contains("searchbar-focused")) {
					document.getElementById("searchButton").classList.remove("searchbar-focused");
				}
			});
		document.getElementById("searchButton").style.height = document.getElementById("searchBar").offsetHeight + "px";
		setFontSize();
	}
})();