


// document.getElementById('email').value.addEventListener("click", function(){
//     document.getElementById('email').select();
//     document.execCommand('copy');
// }

// );



var icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = './assets/images/sun.png';
    }else{
        icon.src = './assets/images/moon.png';
    }
}

