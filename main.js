

const toggleSwitch = document.getElementById('toggle-switch');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(event) {
    if (event.target.checked) {
        body.classList.add('dark-mode');
        document.documentElement.style.setProperty('--secondary-color', '#333333');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--card-color', 'black');
        document.documentElement.style.setProperty('--border-color', '#14d5ef');
        document.documentElement.style.setProperty('--button-color', 'black');
        document.documentElement.style.setProperty('--button-border', '#f88741');
        document.documentElement.style.setProperty('--back-image', 'url("/Resume/resources/_graycheck-small.png")');
        document.documentElement.style.setProperty('--primary-color', '#393636');
    } else {
        body.classList.remove('dark-mode');
        document.documentElement.style.setProperty('--secondary-color', '#fff6ea');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--card-color', '#fff6ea');
        document.documentElement.style.setProperty('--border-color', 'black');
        document.documentElement.style.setProperty('--button-color', '#f88741');
        document.documentElement.style.setProperty('--button-border', 'black');
        document.documentElement.style.setProperty('--back-image', 'url("resources/bluecheck.png")');
        document.documentElement.style.setProperty('--primary-color', '#14d5ef');
    }
}
