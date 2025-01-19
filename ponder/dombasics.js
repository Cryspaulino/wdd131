const newP = document.createElement('p');
newP.textContent = 'Hellooo, World!';
document.body.append(newP);

console.log('is it working?') //this is to know if things are not appearing on the website if the document is connected, if it shows but still not work, recheck if js is linked to html, lastly if not go to sources and check both docs are there.//

const newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200/300';
newImg.alt = 'Some placeholder';
document.body.append(newImg); //prepend adds to the top or before. there's beforebegin and afterbegin, beforeend and afterend//

//const newList = document.createElement('')//

const title = 'DOM Basics';
const subtitle = 'Creating elements and appending them to the DOM';
const content = 'New Content';
const newSection = document.createElement('section');

newSection.innerHTML = 
`<h2>${title}</h2>
<h3>${subtitle}</h3>
<p>${content}</p>`;
document.body.append(newSection);

const ingredientData = ['Pinto Beans', 'Corn', 'Spices', 'Tortillas'];
const portionData = ['1 15oz can', '1 15oz can', '1 Tbsp', '8'];

function ingredientTemplate(index) {
    return `<li>${ingredientData[index]}, ${portionData[index]}</li>`
}

/*OPTION 3, A FOREACH LOOP*/
const myList = document.createElement('ul');
//ADD A CLASS FROM JAVASCRIPT. TOGGLE IS TO ADD OR REMOVE SOMETHING
myList.classList.add('dark')
ingredientData.forEach(function(item, index) {
    myList.innerHTML += ingredientTemplate(index);
})

/* OPTION 2, LIST USING THE FUNCTION: 
const myList = document.createElement('ul');
myList.innerHTML = ingredientTemplate(0) + ingredientTemplate(1) */

/* OPTION 1, WRITE DOWN EACH ELEMENT IN THE LIST :
const myList = document.createElement('ul');
myList.innerHTML =
`<li>${ingredientData[0]}, ${portionData[0]}</li>
<li>${ingredientData[1], ${portionData[1]}</li>
<li>${ingredientData[2], ${portionData[2]}</li>`
*/
/*CREATE A FOR LOOP */

document.body.append(myList)



