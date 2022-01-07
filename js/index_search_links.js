let selectedIndex = -1
let searchInputText = ""
const linkSearch = document.getElementById("searchLinks");
const defaultSearch = document.getElementById("searchBar");

//Handles searching weboasis links and generates new search result based on entered search value
function handleSearchQuery(e) {

  let defaultLinkSources = [];
  for (const property in defaultLinkMenu) {
    for (j = 0; j < defaultLinkMenu[property].length; j++) {
      if (defaultLinkMenu[property][j][2] != "-HEAD-") {
        defaultLinkSources.push(defaultLinkMenu[property][j]);
      }
    }
  }
  for (j = 0; j < hiddenLinksOne.length; j++) {
    hiddenLinksOne[j][2] = "";
    defaultLinkSources.push(hiddenLinksOne[j]);
  }
  for (j = 0; j < hiddenLinksTwo.length; j++) {
    hiddenLinksTwo[j][2] = "";
    defaultLinkSources.push(hiddenLinksTwo[j]);
  }

  let newLinks = defaultLinkSources.filter((x) => {
    return (
      x[0]
      .toLowerCase()
      .trim()
      .includes(searchLinksInput.value.toLowerCase().trim()) ||
      x[1]
      .toLowerCase()
      .trim()
      .includes(searchLinksInput.value.toLowerCase().trim()) ||
      x[2]
      .toLowerCase()
      .trim()
      .includes(searchLinksInput.value.toLowerCase().trim())
    );
  });

  initSearchLinks(newLinks);
  buildHelp2();

  if (searchLinksInput.value.toLowerCase().trim() != searchInputText) {
    selectedIndex = -1
    searchInputText = searchLinksInput.value.toLowerCase().trim()
  }


}



function handleSearchReset(e) {
  let event = new Event("keyup");
  searchLinksInput.dispatchEvent(event)
}