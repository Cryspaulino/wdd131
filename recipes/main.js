import recipes from "./recipes.mjs";

// const container = document.querySelector("#recipes-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

function recipeTemplate(recipe) {
  return `<img class="recipeimg" src=${recipe.image} alt="dessert-image"/>
		<div class="template-text">
            <button type="button">${tagsTemplate(recipe.tags)}</button>
            <h2>${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
              ${ratingTemplate(recipe.rating)}
            </span>
            <p>${recipe.description}</p>
        </div>`;
}

function tagsTemplate(tags) {

  return tags.map(tag => `<span>${tag}</span>`).join(", ");

  // const ul = document.createElement("ul");
  // ul.classList.add("recipe_tags");

  // tags.forEach(tag => {
  //   let li = `<li>${tag}</li>`

  //   ul.appendChild(li);
  // });

  // return ul;
}

function ratingTemplate(rating) {
  let html = ``;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    }
  }

  html += `</span>`;

  return html;
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
  const outputElement = document.querySelector(".template");

  const recipesHtml = recipeList.map(recipe => recipeTemplate(recipe)).join("");

  outputElement.innerHTML = recipesHtml

}

function init() {
  const recipeRandom = getRandomListEntry(recipes);

  renderRecipes([recipeRandom]);
}
init()

// console.log(getRandomListEntry(recipes));
