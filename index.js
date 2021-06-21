document.addEventListener('DOMContentLoaded',init)

function init(){
    addListeners()
    createBlogCard()
}

function addListeners(){
    document.querySelectorAll('nav a').forEach(item => {
        item.addEventListener('click',onNavigation)
    })
    document.getElementById('home-content-submit').addEventListener('click',onSubmit)
    // document.getElementById('home-content-email').addEventListener('keypress',(event) => {
    //     console.log(event)
    //     if(event.key == "Enter"){
    //         onSubmit()
    //     }
    // })
}

function onNavigation(event){
    document.querySelectorAll('nav a').forEach(item => {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}

function createBlogCard(){
    let contentDiv=document.querySelector('.home-blog-content')
    contentDiv.innerHTML=""
    for(let i = 0 ; i < 3 ; i++){
        let cardContent = blog[i]

        let card = document.createElement('div')
        card.className ="home-blog-card"

        card.addEventListener('click',() =>  window.open(cardContent.href))

        let img = document.createElement('img')
        img.className = "home-blog-image"
        img.src = cardContent.image

        let cardTitle = document.createElement('div')
        cardTitle.className = "home-blog-card-title"

        let line = document.createElement('div')
        let title = document.createElement('p')
        title.textContent = cardContent.title

        cardTitle.appendChild(line)
        cardTitle.appendChild(title)

        card.appendChild(img)
        card.appendChild(cardTitle)

        contentDiv.appendChild(card)
    }
}
function onSubmit(event){
    event.preventDefault()//form表单中的button默认点击会刷新网页，此处阻止刷新


    let input = document.getElementById('home-content-email')
    let value = input.value

    console.log('email:',value)
    if(!value){
        alert("请输入联系方式")
        input.focus()
    }
    else{
        //处理数据

    }

}