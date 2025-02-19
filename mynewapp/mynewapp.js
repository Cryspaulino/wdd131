// descriptions=
// [
//     {forest: }
// ]


const categorySelector = document.querySelector('#category');
/*function logMessage(){
    console.log('This is a test');
}
logMessage();
*/

function changeCategory() {
    const category = categorySelector.value;
    console.log(`The selected category is: ${category}`);

    if (category === 'productivity') {

        prodapps.classList.remove('hide');
        churchapps.classList.add('hide');
    }
    else {
        prodapps.classList.add('hide');
        churchapps.classList.remove('hide');
    }
}

categorySelector.addEventListener('change', changeCategory);


document.addEventListener("click", function (event) {
    if (event.target.classList.contains("clickableImage")) {
        let textId = event.target.getAttribute("data-text")
        let text = document.getElementById(textId);
        text.style.display = text.style.display === "none" ? "block" : "none";
    }
});