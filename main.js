
// Variables declared 
const ans = document.querySelectorAll('.faq')



// Javascript


window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

ans.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')
        
        let icons = faq.querySelector('.faq-icon i')
        if(icons.className === 'fa-solid fa-plus'){
            icons.className = 'fa-solid fa-minus'
        }else{
            icons.className = 'fa-solid fa-plus'
        }
    })
})

const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', ()=>{
    menu.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'
})

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none'
    menu.style.display = 'none'
    menuBtn.style.display = 'inline-block'
})




















