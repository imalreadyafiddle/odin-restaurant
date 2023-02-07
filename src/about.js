import burger1 from "./burger1.png";

function aboutContent() {
  let contentWrapper = document.getElementById("contentWrapper");
  contentWrapper.innerHTML = "";

  // create about container and append after header
  let aboutWrapper = document.createElement("div");
  aboutWrapper.setAttribute("id", "aboutContainer");
  contentWrapper.appendChild(aboutWrapper);

  // create and append h1
  let aboutHeader = document.createElement("h1");
  aboutHeader.innerText = "About Our Burgers";
  aboutWrapper.appendChild(aboutHeader);

  // create and append about blurb wrapper
  let aboutBlurb = document.createElement("div");
  aboutBlurb.setAttribute("id", "burgerBlurbWrapper");
  aboutWrapper.appendChild(aboutBlurb);

  // add that tasty burger image
  let burgerImg = document.createElement("img");
  burgerImg.setAttribute("id", "aboutBurger");
  burgerImg.src = burger1;
  aboutBlurb.appendChild(burgerImg);

  // but what's on that burger?
  let burgerFacts = document.createElement("ul");
  burgerFacts.setAttribute("id", "burgerFacts");
  burgerFacts.innerText = "Our world's most perfect burgers are made with:";
  aboutBlurb.appendChild(burgerFacts);
  let burgerFactArray = [
    "Brioche Bun",
    "100% Angus Beef",
    "Real Cheddar Cheese",
    "Tomatoes, Lettuce, and Pickles",
    "Our Signature Burger Sauce",
  ];
  for (let i = 1; i <= 5; i++) {
    let burgerFact = document.createElement("li");
    burgerFact.setAttribute(`id`, `burgerFact${i}`);
    burgerFact.innerText = burgerFactArray[i - 1];
    burgerFacts.appendChild(burgerFact);
  }
}

// export the function to be called by index.js
export { aboutContent };
