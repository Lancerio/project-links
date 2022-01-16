// const logo = document.getElementById('logo');
// const icon = document.getElementById('github');
const toggleSwitch = document.querySelector('input[type="checkbox"]');

const switchTheme = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme);