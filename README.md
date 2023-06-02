# IMPORTANT
Nima Sabzeh (nsab7998).
### PLEASE RUN "npm install" TO INSTALL EXPRESS
* Run the server by typing "npm run start" in the terminal.
### SIGNING IN WITH YOUR SPOTIFY ACCOUNT
* YOU DON"T HAVE TO SIGN IN TO YOUR SPOTIFY ACCOUNT (the web app also functions without the need for the user to sign in, it just can't access users specific data anymore).
* At fist I thought anyone can sign in with their Spotify account (but that's not the case), if you want to use that feature, your Spotify's email address needs to be added to a list of users located in the Spotify Api website; (so if you want try this amazing feature, please send me an email at "sabzenima@gmail.com" containing your Spotify's email address, so that I can add it to the list)(I'll try to respond as fast as I can).
* The Spotify Api redirects the user back to the connection page (so it assumes you have opened the server in http://localhost:8888/index.html?page=connection) (which is only possible using express and port 8888).
* If you couldn't sign in but still want to see how that feature works, here is a video I made using the same feature: "https://drive.google.com/file/d/1N4unwfaWlIoG83Ez4S8dTP3YLRFtMZzN/view?usp=sharing".
### PREFERRED SCREEN RESOLUTION
* Desktop = 1920 x 1080px.
* Mobile (iPhone 12 Pro) = 390 x 844.
### NOTES
* Because the fonts, Spotify data, and the carousel are imported from online resources, they might take some while to load (needs internet access).
* As a recommendation (for understanding the code more easily), read the README file first, then the index.html file (comments), then the Spotify.js file, then the script.js file, and finally the style.css file.

# General Information
* All data represented in the web app change in real time according to Spotify.
* The users can either use the form (included in the Collection page), to serach for tracks using 3 different inputs, including: genre, artist and/or track name; Or sign in with their Spotify account.(Which by doing so, their top tracks will be added to the web app collection automatically).
* After adding songs to the collection, the users can track their information (Track page), including: the total time (calculated by summing up the duration of all tracks), their main artists and genres. There also exists a graph representation of the time spent listening to music during the past week (but all days are filled with dummy data, except Sunday which changes according to the collection).
* In the main page, if the users like one of the genres displayed in the carousel, or one of Today's top hits songs, they can click on the corresponding item which will autofill the form (Collection page) and find related data (which can be added to their collection).

# Checklist
* Let users add new items to be tracked : YES.
* See a list of items that have been previously added : YES.
* Click (hover on) an item to see all the associated data : YES.
* Let users edit existing items : NO.
* Let users delete existing items (from the visual list and the browser storage) : YES.
* Deployed online with a live domain : NO (coming soon....).
* Have a single page architecture for the frontend : YES.
* Responsive for both mobile and desktop devices : YES.
* Save the data to the user's browser for persistent access between sessions : YES.
* Use GitHub for version control and code repository hosting : YES.
* Be easy to setup, configure and run on a local computer : YES (only need to run "npm install").
* Includes user login, sign up or other authentication functionality : YES (conditionally).

# General Improvments
* Being able to use the web app without signing in (tutor feedback).
* The use of a darker color palette for a higher text/background contrast (user feedback).
* Added drop shadow to elements (images and some divs) to make them look a bit more fresh and not out of date (tutor feedback).
* Removed unnecessary high border radius for some elements including the main div, header, and footer (user feedback).
* Added more animations and transitions for a better users experience (user feedback).
* Increased the size of the navbsr in movile view (tutor feedback).

# Main Page (Improvments)

## Carousel
![main page carousel changes](/public/docimages/Carousel.jpg)
>Top Image : Web App
>Bottom Image : Mockup
### Changes
* Added hover effects (scale).
* Added a more fresh looking blur filter (user feedback).
* Added bigger arrows (user feedback).
* Added drag and slide interactivity, for easier use in mobile devices. 
* Added auto scroll (going through the slides automatically) (user feedback).
* Scaled up images for a higher acceessibility rate (tutor feedback).

## News
![main page news changes](/public/docimages/News.jpg)
>Top Image : Web App  
>Bottom Image : Mockup
### Changes
* Scaled up images for a higher acceessibility rate (tutor feedback).

## Today's Top Hits
![main page today's top hits changes](/public/docimages/TodaysTopHits.jpg)
>Top Image : Web App  
>Bottom Image : Mockup
### Changes
* Bigger elements (img/text) for a higher acceessibility rate (tutor feedback).
* Added hover effect (to show that the images are clickable) (user feedback).

# Menu Overlay (Improvments)
![menu overlay changes](/public/docimages/Menu.jpg)
>Top Image : Web App  
>Bottom Image : Mockup  
### Changes
* Removed sub section texts (tutor feedback).
* Used a different menu layout for mobile view (tutor feedback).
* Added hover effect (to show that the images are clickable) (user feedback).
* Added website logo and name (to be able to directly go back to the main page) (user feedback).

# Connections Page (Improvments)
### Changes
* No changes made

# Track Page (Improvments)
## Chart
![track page chart changes](/public/docimages/Chart.jpg)
>Top Image : Web App  
>Bottom Image : Mockup
### Changes
* A more interactive chart (with more data labels) (user feedback).
* A more fresh look (by adding background colors and animations) (tutor feedback).

## User Data
![track page user data changes](/public/docimages/UserData.jpg)
>Top Image : Web App  
>Bottom Image : Mockup
### Changes
* Added today's total variable (user feedback).
* A more simple looking data representation of the user's collection (no images)
* Removed top Tracks (because the collection doesn't allow duplicates)
* Removed top Genres (because some songs in the api don't have a genre associated to them)
* Added top Albums (user feedback).

# Collection Page (Improvments)
## Form
![track page chart changes](/public/docimages/Form.jpg)
>Top Image : Web App  
>Bottom Image : Mockup
### Changes
* Changed the form's width to 100% (so that the user has more space).
* Changed the design so that it fully represents my web app, and is more similar to other items in other pages.
* Changed the design of the drop down (not visible in the above picture, but it can be viewd when accessing the web app).

## Search Results And Collection
![track page search results and collection changes](/public/docimages/Results.jpg)
>Top Image : Web App  
>Bottom Image : Mockup
### Changes
* Changed the layout of the page (so that the serach results and collection are both visioble at the same time) (tutor feedback).
* The collection section only showcases 2 item in each row (tutor feedback).

# Future Development info
## Setup And Configuration For Future Developers
### If you plan to modify the code, please follow these steps:
* Read through the whole README file.
* Read all the comments in the index.html, script.js, style.css, and most importantly spotify.js; To get a better understanding of how everything is working together.
* Read through the Spotify's Api documentation page; to understand how to call their API functions.
* Please follow our design guidelines (Email me at "sabzenima@gmail.com" to get access)
* Please don't publish the web app (It's already in progress)
## Future Improvments
### If you plan to improve upon the code, please follow these steps:
* Submit a quota extension request (so that anyone can sign in with their Spotify account, and not just people who have their email linked to the Spotify API website) (more info at "").
* Add more data categories to be tracked.
* Simplify the code if possible (or add comments).
* Simplify the code if possible (or add comments).

# Utilised Resources
* Spotify API "https://developer.spotify.com/documentation/web-api"
* Splide "https://splidejs.com/"
* Apex Charts "https://apexcharts.com/"