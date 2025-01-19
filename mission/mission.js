const themeSelector = document.querySelector('#theme-select');

function changeTheme() {
    const theme = themeSelector.theme;
    console.log(`The selected theme is: ${theme}`);

    if (theme === 'Dark') {
        body.classList.add('Dark');
        logo.src = 'byui-logo_white.png';
    }
    else {
        body.classList.remove('Dark');
        logo.src = 'byui-logo_blue.png';
    }
}

themeSelector.addEventListener('change', changeTheme);

