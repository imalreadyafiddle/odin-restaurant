import { aboutContent } from "./about";
import { menuContent } from "./menu";
import { locationContent } from "./location";

function tabSwitcher(tab) {
  // select the nav buttons
  let navButtons = document.querySelectorAll(".nav-button");
  // don't do anything if the clicked button is already selected
  if (navButtons[tab].classList.contains("nav-item-selected")) {
    return;
  } else {
    // strip off the selected class
    navButtons.forEach((button) => {
      button.classList.remove("nav-item-selected");
    });
    // add the selected class to the clicked item
    navButtons[tab].classList.add("nav-item-selected");
    // call the function that populates content corresponding to clicked tab
    if (tab == 0) {
      aboutContent();
    } else if (tab == 1) {
      menuContent();
    } else if (tab == 2) {
      locationContent();
    } else {
      console.log("How did you do this?");
    }
  }
}

export { tabSwitcher };
