import location1 from "./location1.png";

function locationContent() {
  let contentWrapper = document.getElementById("contentWrapper");
  contentWrapper.innerHTML = "";

  // create about container and append after header
  let aboutWrapper = document.createElement("div");
  aboutWrapper.setAttribute("id", "aboutContainer");
  contentWrapper.appendChild(aboutWrapper);

  // create and append h1
  let aboutHeader = document.createElement("h1");
  aboutHeader.innerText = "Where We're Located";
  aboutWrapper.appendChild(aboutHeader);

  // create and append about blurb wrapper
  let aboutBlurb = document.createElement("div");
  aboutBlurb.setAttribute("id", "burgerBlurbWrapper");
  aboutWrapper.appendChild(aboutBlurb);

  // add that tasty burger image
  let burgerImg = document.createElement("img");
  burgerImg.setAttribute("id", "aboutBurger");
  burgerImg.src = location1;
  aboutBlurb.appendChild(burgerImg);

  // but what's on that burger?
  let burgerFacts = document.createElement("ul");
  burgerFacts.setAttribute("id", "burgerFacts");
  burgerFacts.innerHTML = `We're located in the city of Nowhere, <br> you can get to us by:`;
  aboutBlurb.appendChild(burgerFacts);
  let burgerFactArray = [
    "Take Exit -1 from Route √66",
    "Turn right off the exit",
    "Continue about 1.5 miles",
    "We're located on the right-hand side of the road",
    "Ample parking behind the building",
  ];

  for (let i = 1; i <= 5; i++) {
    let burgerFact = document.createElement("li");
    burgerFact.setAttribute(`id`, `burgerFact${i}`);
    burgerFact.innerText = burgerFactArray[i - 1];
    burgerFacts.appendChild(burgerFact);
  }
}

// export the function to be called by index.js
export { locationContent };
