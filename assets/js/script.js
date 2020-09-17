var gamespotKey = "e1c898ffd3a1cccaf5ff6ef297f51a43f05238a3";
var searchForm = document.querySelector("#search-form");
var searchBar = document.querySelector("#search-bar");
var contentEl = document.querySelector("#main-content")
var resultsContainer = document.createElement("section");

function gameRequest(gameName) {
    var gameApi = "https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/games/?api_key=" + gamespotKey + "&filter=name:" + gameName + "&format=json";
    // fetch the response
    fetch(gameApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            // log the fetch response
            console.log(response);

            // append results container to hold fetch results
            resultsContainer.classList = "section";
            resultsContainer.setAttribute("id", "results-container");
            contentEl.appendChild(resultsContainer);

            // add endpoints from the Gamespot API to insert into HTML elements

            // display main image of the game
            var gameImg = document.createElement("img");
            gameImg.setAttribute("id", "game-image");
            gameImg.setAttribute("src", response.results[0].image.square_small);
            gameImg.setAttribute("alt", "Image of " + gameName);
            resultsContainer.appendChild(gameImg);

            // fetch gameName from kitsu api
            return fetch("https://kitsu.io/api/edge/anime?filter[text]=" + gameName);
        })
        .then(function (kitsuResponse) {
            return kitsuResponse.json();
        })
        .then(function (kitsuResponse) {
            console.log(kitsuResponse);
            // add endpoints here from the Kitsu API related to gameName value and insert into HTML elements

            // display main image of the anime
            var animeImg = document.createElement("img");
            animeImg.setAttribute("id", "anime-image");
            animeImg.setAttribute("src", kitsuResponse.data[0].attributes.coverImage.small);
            animeImg.setAttribute("alt", "Image of " + gameName);
            resultsContainer.appendChild(animeImg);
        
        })
        .catch(function(error) {
            console.log(error);
            alert("Looks like there's an error :(");
        });
};

var searchGame = function(event) {
    event.preventDefault();
    var searchValue = searchBar.value.trim();
    // clicking search button submits value and calls gameRequest function
    console.log(searchValue);

    if (searchValue) {
        gameRequest(searchValue);
    } else {
        //if search is empty, throw an alert. CHANGE TO A MODAL LATER
        alert("Enter a video game title to search for!");
    }
    // clear search bar after submitting
    searchBar.value = "";
};

searchForm.addEventListener("submit", searchGame);