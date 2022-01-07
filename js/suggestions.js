//To build Suggestions List from duckduckgo autocomplete API

const corsUrl = 'https://cors.weboasis.workers.dev/corsproxy/?apiurl=';
const selectedUrl = 'https://duckduckgo.com/ac/?q=';
const searchTerm = searchInput.placeholder;
let AutoComp = [];
async function fetchAutoComp(searchTerm) {
    AutoComp = [];

    let res = await fetch(corsUrl + selectedUrl + searchTerm);
    data = await res.json();
    await data.map((item) => {
        AutoComp.push(item.phrase);
    });
    selectedIndex = -1; //Resetting index for every fetching of new suggestions list
    buildHelp();
}

function handleSearchReset2(e) {
    //On clicking X to clear the search bar this resets to set engine view

    buildHelp();
}


//Refer to handleQuery() and buildHelp() for further details on building and searching the autocomplete list  
