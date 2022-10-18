class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    init() {
        if (this.mobileMenu) {
          this.addClickEvent();
        }
        return this;
    }
}

const menuItems = document.querySelectorAll(".nav-list a")

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

// smooth scroll
function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target)
    scrollToPosition(to)
}

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior:'smooth'
    })
    removing()
}

// Removendo classe

function removing(){
    let mobileMenu = document.querySelector('.mobile-menu');
    let navList = document.querySelector('.nav-list');

    if(mobileMenu.classList.contains('active')){
        navList.classList.remove('active')
        mobileMenu.classList.remove('active')
    }
}