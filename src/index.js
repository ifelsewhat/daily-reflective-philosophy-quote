function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "The world will ask you who you are",
    autoStart: true,
  });
  quoteElement.innerHTML = "The world will ask you who you are";
}

let philosophyElement = document.querySelector("#philosophy-quote-generator");

philosophyElement.addEventListener("submit", generateQuote);
