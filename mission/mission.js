const themeSelector = document.querySelector('#theme');
const logo = document.querySelector('#logo');
const darkLogo = document.querySelector('#darkLogo');

/*function logMessage(){
    console.log('This is a test');
}
logMessage();
*/

function changeTheme() {
    const theme = themeSelector.value;
    console.log(`The selected theme is: ${theme}`);

    if (theme === 'dark') {
        document.body.classList.add('dark');
        logo.style.display = 'none';
        darkLogo.style.display = 'block';
    }
    else {
        document.body.classList.remove('dark');
        logo.style.display = 'block'
        darkLogo.style.display = 'none';
    }
}

themeSelector.addEventListener('change', changeTheme);

