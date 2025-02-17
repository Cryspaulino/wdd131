const categorySelector = document.querySelector('#category');
/*function logMessage(){
    console.log('This is a test');
}
logMessage();
*/

function changeCategory() {
    const category = categorySelector.value;
    console.log(`The selected category is: ${category}`);

    if (category === 'gospel') {
        document.body.classList.add('gospel');
        prodapps.style.display = 'none';
        churchapps.style.display = 'block';
    }
    else {
        document.body.classList.remove('gospel');
        prodapps.style.display = 'block'
        churchapps.style.display = 'none';
    }
}

categorySelector.addEventListener('change', changeCategory);

