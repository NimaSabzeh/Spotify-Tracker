//clientId and code are both used to get access to the main API
const clientId = "a366d46957fb4f30a018bb056c9fa22c"; 
const code = 'ff30a0d2e1a0497aaab731444db81b06';


//Using the clientId and code to get the requiered token from the API.
async function getToken() {
    let myPromise = new Promise(function (resolve) {
        fetch('https://accounts.spotify.com/api/token', {
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${code}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        }).then(response => response.json())
            .then(data => {
                //Getting the access token and storing it in local storage.
                let access_token = "Bearer " + data.access_token
                localStorage.setItem("token", access_token)
                resolve(1)
            })
    });
    return myPromise;
}

//Getting the user token after the user has loged into their Spotify account
async function getUserToken(user_code) {
    let myPromise = new Promise(function (resolve) {
        fetch('https://accounts.spotify.com/api/token', {
            body: `code=${user_code}&redirect_uri=http://localhost:8888/index.html?page=connection&grant_type=authorization_code`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Authorization': 'Basic ' + btoa(clientId + ':' + code)
            },
            method: "POST"
        }).then(response => response.json())
            .then(data => {
                //Getting the access token and storing it in local storage.
                let access_token = "Bearer " + data.access_token
                localStorage.setItem("user_token", access_token)
                resolve(1)
            })
    });
    return myPromise;
}

//Getting tracks according to user input (form)
async function getTracks(artist, track, genre){

    let searchParam = ''
    if (artist){
        artist.replace(" ", "+")
        artist.replace("%20", "+")
        searchParam += `artist%3A${artist}+`  
    }
    if (track){
        track.replace(" ", "+")
        artist.replace("%20", "+")
        searchParam += `track%3A${track}+`  
    }
    if (genre){
        genre.replace(" ", "+")
        artist.replace("%20", "+")
        searchParam += `genre%3A${genre}`  
    }
    let myPromise = new Promise(function (resolve) {
        fetch(`https://api.spotify.com/v1/search?q=${searchParam}&type=track&limit=50&offset=0`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => response.json())
            .then(data => {
                resolve(data)
            })
    });
    return myPromise;
}

//Fetching the API for today's top hits playlist from spotify (to get access to today's top 10 songs)
async function top10() {
    let myPromise = new Promise(function (resolve) {
        fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M", {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => response.json())
            .then(data => {
                resolve(data)
            })
    });
    return myPromise;
}

//Using the accessed track objects, the getTop10() function will extract and store the image, track name, and artist name to items array (from Today's Top Hits playlist) (which will be accessed in the script.js)
async function getTop10() {
    await getToken()
    let top10Items = await top10()    
    let item = []
    let items = []
    for (let i = 0; i <10;i++){
        trackImage = top10Items.tracks.items[i].track.album.images[0].url
        trackName = top10Items.tracks.items[i].track.name
        trackArtist = top10Items.tracks.items[i].track.artists[0].name
        item.push(trackImage, trackName, trackArtist)
        items.push(item)
        item =[]
    }
    return items
}

//Gets the top 10 user specific tracks using their token
async function top10User() {
    let myPromise = new Promise(function (resolve) {
        fetch("https://api.spotify.com/v1/me/top/tracks?offset=0&limit=10", {
            headers: {
                Authorization: localStorage.getItem("user_token")
            }
        }).then(response => response.json())
            .then(data => {
                let items = data.items
                
                for(let i = 0 ; i < items.length; i++){
                    addTrackLocal(items[i], true)
                }
                resolve(items)
            })
    });
    return myPromise;
} 