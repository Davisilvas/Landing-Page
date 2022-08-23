let git = document.querySelector("#git-link");
let link = document.querySelector("#project-link");
let desc = document.querySelector("#project-desc")
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");


const Data = [
    [
        "https://github.com/Davisilvas/pokedex",
        "Link do projeto Pokedex no Github",
        "https://davisilvas.github.io/pokedex/",
        "Link do projeto Pokedex na web",
        "Projeto Javascript consumindo uma API"
    ],
    [
        "https://github.com/Davisilvas/blog-php",
        "Link do Projeto Blog em PHP no Github",
        "./pages/redirectOne.html",
        "Link do Projeto Blog em PHP na web",
        "Projeto em php com páginas dinâmicas usando dados mockados"
    ],
    [
        "https://github.com/Davisilvas/projetoAgenda",
        "Link do projeto Agenda no Github",
        "./pages/redirectTwo.html",
        "Link do projeto Agenda na web",
        "Projeto Agenda usando MySql e PHP"
    ],
    [
        "https://github.com/Davisilvas/financial_control",
        "Link do projeto Financial control no Github",
        "./pages/redirectThree.html",
        "Link do projeto Financial Control na web",
        "Projeto Financial Control desenvolvido em React.Js"
    ]
]

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
    }
}

function setValues3(event){

    if(event){
        link.href = Data[2][2];
        link.innerHTML = Data[2][3];
        git.href = Data[2][0];
        git.innerHTML = Data[2][1];
        desc.innerHTML = Data[2][4];
    }
}

function setValues4(event){

    if(event){
        link.href = Data[3][2];
        link.innerHTML = Data[3][3];
        git.href = Data[3][0];
        git.innerHTML = Data[3][1];
        desc.innerHTML = Data[3][4];
    }
}
