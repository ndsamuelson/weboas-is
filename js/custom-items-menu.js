function openCustomLinksNav() {
  document.getElementById("custom_links_nav").style.width = "250px";
  document["CustomLinksNavOpened"] = true;
}

/* Set the width of the side navigation to 0 */
function closeCustomLinksNav() {
  document.getElementById("custom_links_nav").style.width = "0";
  document["CustomLinksNavOpened"] = false;
}

function getCustomLinkItems() {
  return localStorage.getItem("menu-items")
    ? JSON.parse(localStorage.getItem("menu-items"))
    : {};
}

function storeCustomLinkItems(menuItems) {
  localStorage.setItem("menu-items", JSON.stringify(menuItems));
}

function getDefaultSystemLinks() {
  return window.linkMenu;
}

function buildCustomUserLinksMenu() {
  let linkMenu = getCustomLinkItems();
  let categories = Object.keys(linkMenu);
  let elements = [];
  for (let a = 0; a < categories.length; a++) {
    if (linkMenu[categories[a]].length < 2) {
      continue;
    }
    let svg = "";

    elements.push(`<li class="cat-separator">
		${a == 0 ? `` : `<hr/>`}
		<a >${svg} <span>${categories[a]}</span></a>
		${`<hr/>`}
		</li>`);
    for (let e = 1; e < linkMenu[categories[a]].length; e++) {
      elements.push(`<li>
			<span class="remove-custom-link"
			data-category="${categories[a]}"
			data-index="${e}"
			onclick="customLinkRemoveConfirmation(event)" >x</span>
			<a target='_blank' class='cat-item' href="${linkMenu[categories[a]][e][1]}">${
        linkMenu[categories[a]][e][0]
      }</a></li>`);
    }
  }

  document.getElementById("userCustomLinks").innerHTML = elements.join(`\n`);
}

function getCustomLinkItemsCatImage(category) {
  let links = getDefaultSystemLinks();
  return links[category] ? links[category][0] : [];
}

function addCustomLinkToLinkItems(url, title, category, color) {
  let linkItems = getCustomLinkItems();
  if (!linkItems[category]) {
    linkItems[category] = [];
    linkItems[category].push([color]);
  }
  linkItems[category].push([title, url, ""]);
  return linkItems;
}

function addCustomLinkToMenu(url, title, category, color) {
  storeCustomLinkItems(addCustomLinkToLinkItems(url, title, category, color));
  buildCustomUserLinksMenu();
  perfectSrollBars.customLinks.update();
}

function removeCustomLink(category, index) {
  let links = getCustomLinkItems();

  let newList = [];
  for (let i = 0; i < links[category].length; i++) {
    if (i != index) {
      newList.push(links[category][i]);
    }
  }
  if (newList.length < 2) {
    delete links[category];
  } else {
    links[category] = newList;
  }
  storeCustomLinkItems(links);
  buildCustomUserLinksMenu();
}

function customLinkRemoveConfirmation(ev) {
  let category = ev.srcElement.attributes["data-category"].nodeValue;
  let index = ev.srcElement.attributes["data-index"].nodeValue;

  var label = getCustomLinkItems()[category][index][0];
  confirmModal.style.display = "block";
  overlay.style.display = "block";

  document.getElementById("modal-label").innerHTML = label;
  document.getElementById("deleteLink").addEventListener(
    "click",
    function() {
      removeCustomLink(category, index);
      confirmModal.style.display = "none";
      overlay.style.display = "none";
    },
    { once: true }
  );
}

const perfectSrollBars = {
  customLinks: null
};

function setPerfectScrollbar() {
  perfectSrollBars.customLinks = new PerfectScrollbar("#userCustomLinks");
  perfectSrollBars.customLinks.update();
  document.getElementById("userCustomLinks").scrollTop = 0;
  document.querySelector("#userCustomLinks>div.ps__rail-y").style.opacity = 1;
}

(() => {
  let checkInterval = setInterval(() => {
    if (linkMenu) {
      try {
        buildCustomUserLinksMenu();
        window.addLinkToMenu = (url, name, category) => {
          category = document.getElementById("custom-category-name").value;
          let color = document.getElementById("custom-category-color").value;
          addCustomLinkToMenu(url, name, category, color);
        };
        setPerfectScrollbar();
      } catch (e) {
        console.log(e);
      }
      clearInterval(checkInterval);
    }
  }, 30);
})();