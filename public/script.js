

window.onload = function (){
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
}

function handleRoute(page){
    window.location = `index.html?page=${page}`
}

function menuOverlay (x){
    if (x.classList.contains("changex")){
        console.log("true")
        document.getElementById("menu").style.opacity = 1;
        document.getElementById("menu").style.zIndex = 99;
    } else {
        console.log("false")
        document.getElementById("menu").style.opacity = 0;
        document.getElementById("menu").style.zIndex = -1;
    }

}


function menuIcon(x) {
    x.classList.toggle("changex");
  }
