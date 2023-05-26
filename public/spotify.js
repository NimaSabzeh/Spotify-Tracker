const clientId = "a366d46957fb4f30a018bb056c9fa22c"; // Replace with your client ID
const code = 'ff30a0d2e1a0497aaab731444db81b06';


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
                let access_token = "Bearer " + data.access_token
                localStorage.setItem("token", access_token)
                resolve(1)
            })
    });
    
    return myPromise;
}

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


// if (!code) {
//     redirectToAuthCodeFlow(clientId);
// } else {
//     const accessToken = await getAccessToken(clientId, code);
//     const profile = await fetchProfile(accessToken);
//     populateUI(profile);
// }

// async function redirectToAuthCodeFlow(clientId) {
//     // TODO: Redirect to Spotify authorization page
// }

// async function getAccessToken(clientId, code) {
//   // TODO: Get access token for code
// }

// async function fetchProfile(token) {
//     // TODO: Call Web API
// }

// function populateUI(profile) {
//     // TODO: Update UI with profile data
// }

