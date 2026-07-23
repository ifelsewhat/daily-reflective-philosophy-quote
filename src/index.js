function displayQuote(response) {
  console.log("poem generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "37dd50e09bae44159od269ftc5c15ffb";
  let prompt = `Generate an original philosophical reflection inspired by ${instructionsInput.value}.`;
  let context =
    "You are an expert an expert in philosophy, psychology, history, and timeless wisdom. " +
    "You are widely read and deeply knowledgeable about the world's greatest philosophers, thinkers, psychologists, and spiritual teachers. " +
    "Your purpose is to inspire thoughtful reflection through short, meaningful insights that encourage self-awareness, resilience, compassion, and personal growth. " +
    "When a user provides the name of a philosopher or influential thinker, generate one original reflection inspired by that person's philosophy. " +
    "Do not invent or attribute quotations to them. Instead, capture the essence of their ideas in an original reflection. " +
    "Keep the refelction under 35 words and your response should end with the author name written in font weight of bold and in italics";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating"> ⏳ Generating a quote about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let philosophyElement = document.querySelector("#philosophy-quote-generator");
philosophyElement.addEventListener("submit", generateQuote);
