const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.95
    item.forEach(element => {
        if(windowTop > element.offsetTop){ 
            element.classList.add('ativo')
        } else { 
            element.classList.remove('ativo')
     
        }         


    })
} 

animeScroll()

window.addEventListener('scroll', () => {
    animeScroll();
}) 
