let navLinks = document.querySelectorAll('.nav-links a');

//Loop throw nav links and toggle active class
navLinks.forEach((e)=>{
    navLinksLoop(e);
});

// toggle active class
function navLinksLoop(e){
    let navLinks = document.querySelectorAll('.nav-links a');
    e.addEventListener('click',()=>{
        navLinks.forEach((e)=>{
            e.classList.remove('active');
        });
        e.classList.add('active');
    });
}

//add shadow to header
window.addEventListener('scroll',()=>{
    checkScrolling();
    ChechSection();
})

function checkScrolling(){
    let header = document.querySelector('header');
    let hero = document.querySelector('.hero');
    let heroSize  = hero.getBoundingClientRect().top;
    if(heroSize < 0){
            header.style.boxShadow = '0px 5px 5px rgba(25,45,51,0.05)';
    }else{
        header.style.boxShadow = 'unset'; 
    }
}


function ChechSection(){
        const triggerBottom = window.innerHeight / 5 * 4;
        let section = document.querySelectorAll('section');
        section.forEach(ele=>{
            const sectionTop = ele.getBoundingClientRect().top;
            if(sectionTop < triggerBottom){
                ele.classList.add('show');
            }else{
                ele.classList.remove('show');
            }
})};