import { tabSwitcher } from "./tabSwitcher";

function createHeader() {
  let mainContent = document.getElementById("content");

  // create header and append to content
  let headerWrapper = document.createElement("header");
  headerWrapper.setAttribute("id", "siteHeader");
  mainContent.appendChild(headerWrapper);

  // create nav wrapper and append to header
  let siteNav = document.createElement("nav");
  siteNav.setAttribute("id", "siteNav");
  headerWrapper.appendChild(siteNav);

  // create nav button elements & assign IDs & classes
  let aboutButton = document.createElement("div");
  aboutButton.setAttribute("id", "aboutButton");
  aboutButton.classList.add("nav-button");
  let menuButton = document.createElement("div");
  menuButton.setAttribute("id", "menuButton");
  menuButton.classList.add("nav-button");
  let locationButton = document.createElement("div");
  locationButton.setAttribute("id", "locationButton");
  locationButton.classList.add("nav-button");

  // give the buttons text
  aboutButton.innerText = "About";
  menuButton.innerText = "Menu";
  locationButton.innerText = "Location";

  // append buttons to the nav
  siteNav.appendChild(aboutButton);
  siteNav.appendChild(menuButton);
  siteNav.appendChild(locationButton);

  // add event listeners to navButtons
  let navButtons = document.querySelectorAll(".nav-button");
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", function () {
      tabSwitcher(`${i}`);
    });
  }

  // show the about button as "selected"
  aboutButton.classList.add("nav-item-selected");
}

// export the function to be called by index.js
export { createHeader };
