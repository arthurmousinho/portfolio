const html = document.documentElement
let darkTheme = true
let logo = document.querySelector('header img')


function changeTheme() {
    html.classList.toggle('light')
    if (darkTheme === false) {
        darkTheme = true
        logo.setAttribute('src', './assets/logo.svg')
    } else {
        darkTheme = false
        logo.setAttribute('src', './assets/logo-light.svg')
    }
}