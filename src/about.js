function aboutContent() {
  let mainContent = document.getElementById("content");

  // create about container and append after header
  let aboutWrapper = document.createElement("div");
  aboutWrapper.setAttribute("id", "aboutContainer");
  mainContent.appendChild(aboutWrapper);

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
  burgerImg.setAttribute("src", "../src/burger1.png");
  aboutBlurb.appendChild(burgerImg);

  // but what's on that burger?
  let burgerFacts = document.createElement("ul");
  burgerFacts.setAttribute("id", "burgerFacts");
  burgerFacts.innerText = "Our world's most perfect burgers are made with:";
  aboutBlurb.appendChild(burgerFacts);
  let burgerFactArray = [
    "Bread, humans like bread, right?",
    "Beef, probably.",
    "Cheese? Yes, definitely cheese.",
    "Little red roundbois, what're those again?",
    "Lettuce to get stuck between your teeth.",
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
