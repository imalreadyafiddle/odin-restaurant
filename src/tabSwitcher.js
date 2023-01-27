function tabSwitcher(tab) {
  let navButtons = document.querySelectorAll(".nav-button");
  if (navButtons[tab].classList.contains("nav-item-selected")) {
    return;
  } else {
    navButtons.forEach((button) => {
      button.classList.remove("nav-item-selected");
    });
    navButtons[tab].classList.add("nav-item-selected");
    // also execute content switch function
  }
}

export { tabSwitcher };
