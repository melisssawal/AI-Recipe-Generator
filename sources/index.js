function displayRecipe (response) {

  console.log("recipe generated");

  new Typewriter('#recipe', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

function generateRecipe (event) {
    event.preventDefault ();

let userInstructionInput = document.querySelector("#text-box");
let context = "You are a master baker that has travelled the world and has a deep knowledge of baking. Give a simple recipe in basic HTML. Make sure you do not include an introduction and use USA measurements. Do not include a title. Please seperate the ingredients from the directions and start each one on it's own line. ";
let prompt = `User instructions: Generate a recipe about ${userInstructionInput.value}`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=34d34bfd03ebff0892b49ada97eo706t`;
console.log(apiUrl);
console.log("Generating recipe");
console.log(`prompt: ${prompt}`);
console.log(`context: ${context}`);

let recipeSection = document.querySelector("#recipe");
recipeSection.classList.remove("hidden");

new Typewriter('#recipe', {
  strings: ["Generating a recipe...are you feeling hungry??"],
  autoStart: true,  
  loop: true,
  delay: 1,

});

axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);


