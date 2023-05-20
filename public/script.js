

window.onload = function (){
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
}

function handleRoute(page){
    console.log(page)
    window.location = `index.html?page=${page}`

}




function menuIcon(x) {
    x.classList.toggle("changex");
  }
