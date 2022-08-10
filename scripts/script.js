let git = document.querySelector("#git-link");
let link = document.querySelector("#project-link");
let desc = document.querySelector("#project-desc")
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

const Data = [
    [
        "https://github.com/Davisilvas/pokedex",
        "Link do projeto Pokedex no Github",
        "#",
        "Link do projeto Pokedex na web",
        "Projeto Javascript consumindo uma API"
    ],
    [
        "https://github.com/Davisilvas/blog-php",
        "Link do Projeto Blog em PHP no Github",
        "#",
        "Link do Projeto Blog em PHP na web",
        "Projeto em php com páginas dinâmicas usando dados mockados"
    ],
    [
        "https://github.com/Davisilvas/projetoAgenda",
        "Link do projeto Agenda no Github",
        "#",
        "Link do projeto Agenda na web",
        "Projeto Agenda usando MySql e PHP"
    ]
]

function turnDisplayOff(event){
    if(event){
        img2.display = "none";
        img3.display = "none";
    }
}

function setValues(event){

    if(event){
        link.href = Data[0][2];
        link.innerHTML = Data[0][3];
        git.href = Data[0][0];
        git.innerHTML = Data[0][1];
        desc.innerHTML = Data[0][4];
    }
}

function setValues2(event){

    if(event){
        link.href = Data[1][2];
        link.innerHTML = Data[1][3];
        git.href = Data[1][0];
        git.innerHTML = Data[1][1];
        desc.innerHTML = Data[1][4];
        img3.display = "none";
        img1.display = "none"
    }
}

function setValues3(event){

    if(event){
        link.href = Data[2][2];
        link.innerHTML = Data[2][3];
        git.href = Data[2][0];
        git.innerHTML = Data[2][1];
        desc.innerHTML = Data[2][4];
        img1.display = "none";
        img2.display = "none";
    }
}

class MobileBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animatedLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation ="")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.navList.mobileMenu.toggle(this.activeClass);
        this.animatedLinks();
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

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();