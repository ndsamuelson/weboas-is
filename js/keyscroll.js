// Adds Scrolling function with keyboard to search links list and autocomplete suggestions list

document.onkeydown = selectKey;
document.onkeyup = selectKey2;

function selectKey2(e) {
  if (defaultSearch.style.display == "none") {
    let allSearchedLinks = document.querySelectorAll(
      "#mainContainer2 .searchSources"
    );
    if (!(selectedIndex < 0 || selectedIndex > allSearchedLinks.length - 1)) {
      var selected = allSearchedLinks[selectedIndex];
    }
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
  }
  if (defaultSearch.style.display !== "none") {
    let allSearchedLinks = document.querySelectorAll(
      "#generatedList .searchSources"
    );

    var selected = allSearchedLinks[selectedIndex];
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
  }
}

function selectKey(e) {
  if (e.keyCode == 38 && defaultSearch.style.display == "none") {
    // up Search Links
    selectedIndex -= 1;
    var selectedBeforeIndex = selectedIndex + 1;

    let allSearchedLinks = document.querySelectorAll(
      "#mainContainer2 .searchSources"
    );
    if (selectedIndex == -1) {
      selectedIndex = allSearchedLinks.length - 1;
    }
    var selected = allSearchedLinks[selectedIndex];
    var selectedBefore = allSearchedLinks[selectedBeforeIndex];
    if (selectedBefore) {
      selectedBefore.classList.remove("selectedResult");
    }
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
  } else if (
    e.keyCode == 38 &&
    defaultSearch.style.display !== "none" &&
    localStorage.getItem("search-suggestions") === "yes" &&
    searchInput.value.length !== 0
  ) {
    // up AutoComplete
    selectedIndex -= 1;
    var selectedBeforeIndex = selectedIndex + 1;

    let allSearchedLinks = document.querySelectorAll(
      "#generatedList .searchSources"
    );

    if (selectedIndex == -1) {
      selectedIndex = allSearchedLinks.length - 1;
    }
    var selected = allSearchedLinks[selectedIndex];
    var selectedBefore = allSearchedLinks[selectedBeforeIndex];
    if (selectedBefore) {
      selectedBefore.classList.remove("selectedResult");
    }
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
  } else if (e.keyCode == 40 && defaultSearch.style.display == "none") {
    // down SearchLinks
    selectedIndex += 1;
    var selectedBeforeIndex = selectedIndex - 1;

    let allSearchedLinks = document.querySelectorAll(
      "#mainContainer2 .searchSources"
    );
    if (selectedIndex == allSearchedLinks.length) {
      selectedIndex = 0;
    }
    var selected = allSearchedLinks[selectedIndex];
    var selectedBefore = allSearchedLinks[selectedBeforeIndex];
    if (selectedBefore) {
      selectedBefore.classList.remove("selectedResult");
    }
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
  } else if (
    e.keyCode == 40 &&
    defaultSearch.style.display !== "none" &&
    localStorage.getItem("search-suggestions") === "yes" &&
    searchInput.value.length !== 0
  ) {
    // down AutoComplete
    selectedIndex += 1;
    var selectedBeforeIndex = selectedIndex - 1;

    let allSearchedLinks = document.querySelectorAll(
      "#generatedList .searchSources"
    );
    if (selectedIndex == allSearchedLinks.length) {
      selectedIndex = 0;
    }
    var selected = allSearchedLinks[selectedIndex];
    var selectedBefore = allSearchedLinks[selectedBeforeIndex];
    if (selectedBefore) {
      selectedBefore.classList.remove("selectedResult");
    }
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
  } else if (e.keyCode == 13 && defaultSearch.style.display == "none") {
    // Enter SearchLinks

    let allSearchedLinks = document.querySelectorAll(
      "#mainContainer2 .searchSources"
    );

    var selected = allSearchedLinks[selectedIndex];
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }

    var url = selected.querySelector("a").href;
    window.open(url, "_blank");
  } else if (
    e.keyCode == 39 &&
    defaultSearch.style.display !== "none" &&
    localStorage.getItem("search-suggestions") === "yes" &&
    searchInput.value.length !== 0
  ) {
    // Enter AutoComplete, Right Side

    let allSearchedLinks = document.querySelectorAll(
      "#generatedList .searchSources"
    );

    var selected = allSearchedLinks[selectedIndex];
    if (selectedIndex >= 0) {
      selected.classList.add("selectedResult");
    }
    searchInput.value = selected.innerText;
  } else if (
    e.keyCode == 38 ||
    (e.keyCode == 40 && localStorage.getItem("search-suggestions") === "no")
  ) {
    selectedIndex = -1;
  }
}
