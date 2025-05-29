function generateRecipe (event) {
    event.preventDefault ();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "";

}


let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);


let context = "You are a master chef that has travelled the world and has a deep knowledge of recipes. Give a simple recipe using USA measurements.";
let prompt = "Create a recipe from the entered topic";

let apiKey = "34d34bfd03ebff0892b49ada97eo706t";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;