
function handleRoute(page) {
    window.location = `index.html?page=${page}`
}


function mainPage() {
    let mainArticle = document.getElementsByTagName("article")

    mainArticle[0].innerHTML = htmlContent.main
    setTimeout(() => {
        new Splide('.splide', {
            type: 'loop',
            focus: 'center',
            perPage: 5,
            autoScroll: {
                speed: 1,
            },
        }).mount(window.splide.Extensions);
    }, 100)

    var splideItems = ["splide/Country.jpg", "splide/Hip-Hop.jpg", "splide/Metal.jpg", "splide/Pop.jpg", "splide/Punk.jpg", "splide/R&B.jpg", "splide/Rock.jpg"]
    for (let i = 0; i < splideItems.length; i++) {
        let slideImage = splideItems[i]
        let slideItem = document.getElementById(`slide${i}`)
        let slideItemImg = slideItem.getElementsByTagName('img')
        slideItemImg[0].onclick = function () {
            if (slideItem.classList.contains("is-active")) {
                let genreName = slideImage.replace("splide/", "").replace(".jpg", "")
                console.log(genreName)
                handleRoute("collection")
            }
        }
        slideItemImg[0].src = slideImage
    }
    getTop10().then(data => {
        for (let i = 0; i < data.length; i++) {
            let top10Img = data[i][0]
            let top10Name = data[i][1]
            let top10Artist = data[i][2]
            let top10Item = document.getElementById(`top10Item${i}`)
            let top10ItemImg = top10Item.getElementsByTagName('img')[0]
            let top10ItemH = top10Item.getElementsByTagName('h3')[0]
            let top10ItemP = top10Item.getElementsByTagName('p')[0]
            top10ItemImg.src = top10Img
            top10ItemH.innerHTML = top10Name
            top10ItemP.innerHTML = top10Artist
            top10ItemImg.onclick = function () {
                let songName = top10Name
                let artistName = top10Artist
                handleRoute("collection")
                console.log(top10Name)
                console.log(top10Artist)
            }
        }
    })
}

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    switch (page) {
        case "main":
            mainPage()
        case "track":
            break;
        case "connection":
            break;
        case "collection":
            console.log("here")
            break;
        default:
            mainPage()
    }
}



function menuIcon(x) {
    x.classList.toggle("changex");
}



function menuOverlay(x) {
    if (x.classList.contains("changex")) {
        console.log("true")
        document.getElementById("menu").style.opacity = 1;
        document.getElementById("menu").style.zIndex = 99;
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        document.getElementsByTagName("header")[0].style.zIndex = 'auto';



    } else {
        console.log("false")
        document.getElementById("menu").style.opacity = 0;
        document.getElementById("menu").style.zIndex = -1;
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        document.getElementsByTagName("header")[0].style.zIndex = 2;


    }
}

const htmlContent = {
    main:  `
    <section id="section-1-main">
    <section class="splide" aria-label="Splide Basic HTML Example">
        <div class="splide__track">
              <ul class="splide__list">
                  <li id="slide0" class="splide__slide" ><img src="" alt=""></li>
                  <li id="slide1" class="splide__slide"><img src="" alt=""></li>
                  <li id="slide2" class="splide__slide"><img src="" alt=""></li>
                  <li id="slide3" class="splide__slide"><img src="" alt=""></li>
                  <li id="slide4" class="splide__slide"><img src="" alt=""></li>
                  <li id="slide5" class="splide__slide"><img src="" alt=""></li>
                  <li id="slide6" class="splide__slide"><img src="" alt=""></li>
              </ul>
        </div>
      </section>
</section>
<section id="section-2-main">
    <div>
        <h1 style="margin: 0px 0px 70px 0px; text-align:center">News</h1>
        <div class="news-section d-flex">
            <p>
            <strong> Ed Sheeran get engulfed by waves in music video for new single, "Boat"</strong><br><br>
            Ed Sheeran has released a new single, "Boat", taken off his upcoming album, "-" ("Subtract").
            The new track , out today (April 21) ; comes alongside an accompanying music video that sees the singer submerged in the sea with waves engulfing him. "Boat" serves as the opening track to "-", which is due out on May 5 via Asylum/Atlantic.
            </p>
            <img class="menu-img" src="images/News-1.jpg" alt="Iran's geographical location" />
        </div>
        <div class="news-section d-flex">
            <img class="menu-img" src="images/News-2.jpg" alt="Iran's geographical location" />
            <p style="margin-right: 0px !important; margin-left: 65px">
            <strong>Skeleten announces debut album, "Under Utopia" </strong><br> <br>
            Skeleten , real name Russell Fitzgibbon ; announced the record today (April 21) via multiple social media platforms, writing: “Without getting too serious… 
            I had this vision of waking into the world from eternal nothingness and floating over humanity, seeing everything with universal wonder and love, breathing in all the beauty and sadness of life for the first time.”
            </p>
        </div>
    </div>
</section>
<section id="section-3-main">
    <h1>Today's Top Hits</h1>
    <div id="top10Item0" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item1" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item2" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item3" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item4" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item5" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item6" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item7" class="top10Item">
        <img class="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item8" class="top10Item">
        <img id="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
    <div id="top10Item9" class="top10Item">
        <img id="top10Img" src= "">
        <h3 class="top10H"></h3>
        <p class="top10P"></p>
    </div>
</section>`,
collection : '',
}