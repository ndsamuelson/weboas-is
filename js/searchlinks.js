//Generates all weboasis links to be searched in an array for the first Time
let allLinkSources = [];

for (const property in defaultLinkMenu) {
  for (j = 0; j < defaultLinkMenu[property].length; j++) {
    if (defaultLinkMenu[property][j][2] != "-HEAD-")
      allLinkSources.push(defaultLinkMenu[property][j]);
  }
}
for (j = 0; j < hiddenLinksOne.length; j++) {
  hiddenLinksOne[j][2] = "";
  allLinkSources.push(hiddenLinksOne[j]);
}
for (j = 0; j < hiddenLinksTwo.length; j++) {
  hiddenLinksTwo[j][2] = "";
  allLinkSources.push(hiddenLinksTwo[j]);
}