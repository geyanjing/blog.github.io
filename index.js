document.addEventListener('DOMContentLoaded',init)

function init(){
    addListeners()
}

function addListeners(){
    document.querySelectorAll('nav a').forEach(item => {
        item.addEventListener('click',onNavigation)
    })
}

function onNavigation(event){
    document.querySelectorAll('nav a').forEach(item => {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}