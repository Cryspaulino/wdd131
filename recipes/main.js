import { recipes } from "./recipes";

const container = document.querySelector("#recipes-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

console.log(getRandomListEntry(recipes));



function recipeTemplate(recipe) {
  return `<figure class="dessert">
	<img src=${image} />
	<figcaption>
		<section>
            <button type="button">dessert</button>
            <h2>Apple Crisp</h2>

            <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
            </span>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel incidunt nisi a in hic maxime doloribus velit, ab recusandae sunt placeat eveniet aliquam iusto iure quibusdam rem, impedit quisquam asperiores.</p>
        </section>
        
</figcaption>
</figure>`;
}


function tagsTemplate(tags) {

  const ul = document.createElement("ul");
  ul.classList.add("recipe_tags");

  tags.forEach(tag => {
    let li = `<li>${tag}</li>`

    ul.appendChild(li);
  });

  return ul;
}

function ratingTemplate(rating) {
  // begin building an html string using the ratings HTML written earlier as a model.
  let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
  // our ratings are always out of 5, so create a for loop from 1 to 5

  // for

		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star

		// else output an empty star

	// after the loop, add the closing tag to our string
	// html += `</span>`

	// return html
}
