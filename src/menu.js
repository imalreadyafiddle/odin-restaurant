function menuContent() {
  let contentWrapper = document.getElementById("contentWrapper");
  contentWrapper.innerHTML = "";

  // create menu container and append after header
  let menuWrapper = document.createElement("div");
  menuWrapper.setAttribute("id", "menuContainer");
  contentWrapper.appendChild(menuWrapper);

  // create and append h1
  let menuHeader = document.createElement("h1");
  menuHeader.innerText = "Our Menu";
  menuWrapper.appendChild(menuHeader);

  // create and append menu blurb wrapper
  let menuBlurb = document.createElement("div");
  menuBlurb.setAttribute("id", "menuWrapper");
  menuWrapper.appendChild(menuBlurb);

  // but what's on that burger?
  let menuItems = document.createElement("div");
  menuItems.setAttribute("id", "menuItems");
  menuBlurb.appendChild(menuItems);

  const menuObject = {
    item1: {
      name: "Hamburger",
      price: "$9.99",
      description: "A cheeseburger but without the whole 'cheese' thing.",
    },
    item2: {
      name: "Cheeseburger",
      price: "$10.99",
      description: "Our standard, delicious, cheesy burger.",
    },
    item3: {
      name: "Cheeseburger w/ Bacon",
      price: "$11.99",
      description: "The same burger as above, but with crispy bacon!",
    },
    item4: {
      name: "Double Cheeseburger",
      price: "$13.99",
      description: "Our standard cheeseburger with another patty added.",
    },
    item5: {
      name: "Double Cheeseburger w/ Bacon",
      price: "$15.99",
      description:
        "Our double cheeseburger with crispy bacon added to each patty.",
    },
  };

  for (const menuItemEntry in menuObject) {
    let menuItem = document.createElement("div");
    menuItem.setAttribute(`id`, `${menuItemEntry}`);
    menuItem.classList.add("menuItem");
    let nameContainer = document.createElement("div");
    let priceContainer = document.createElement("div");
    let descriptionConatiner = document.createElement("div");
    nameContainer.classList.add("menuName");
    priceContainer.classList.add("menuPrice");
    descriptionConatiner.classList.add("menuDescription");
    nameContainer.innerText = menuObject[menuItemEntry].name;
    priceContainer.innerText = menuObject[menuItemEntry].price;
    descriptionConatiner.innerText = menuObject[menuItemEntry].description;
    menuItems.appendChild(menuItem);
    menuItem.appendChild(nameContainer);
    menuItem.appendChild(priceContainer);
    menuItem.appendChild(descriptionConatiner);
  }
}

export { menuContent };
