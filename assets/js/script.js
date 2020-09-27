var gamespotKey = "e1c898ffd3a1cccaf5ff6ef297f51a43f05238a3";
var searchForm = document.querySelector("#search-form");
var searchBar = document.querySelector("#search-bar");
var heroEl = document.querySelector("#hero");
var searchDisplay = document.querySelector("#search-display");
var contentEl = document.querySelector("#main-content");
var gameResultsEl = document.querySelector("#game-results");
var animeResultsEl = document.querySelector("#anime-results");
var resultsContainerEL = document.querySelector("#results-container");
var gameColumnsContainerEl = document.querySelector("#game-columns-container");
var xboxEl = document.querySelector("#xbox");
var playstationEl = document.querySelector("#playstation");
var nintendoEl = document.querySelector("#nintendo");
var steamEl = document.querySelector("#steam");

function gameRequest(gameName) {
    var gameApi = "https://api.rawg.io/api/games?page_size=5&search=" + gameName;
    // fetch the response
    fetch(gameApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            gameResultsEl.innerHTML = "Game(s) found for " + gameName + ":";
            //Clear gameColumnsContainerEl
            $(gameColumnsContainerEl).empty();
            for (var i = 0; i < response.results.length; i++) {
                var gameColumnEl = document.createElement("div");
                gameColumnEl.setAttribute("id", "game-column");
                //gameColumnEl.setAttribute('data-description', response.results[i].name);
                gameColumnEl.setAttribute("data-name", response.results[i].name); 
                gameColumnEl.setAttribute("class", "column has-background-grey-light search-results is-two-fifths has-text-black-bis mx-3 my-4");
                gameColumnsContainerEl.appendChild(gameColumnEl);
                //Columns 1 (baseSearchEl) Stores IMAGE and TITLE
                var baseSearchEl = document.createElement("div");
                baseSearchEl.setAttribute("id", "base-search");
                baseSearchEl.setAttribute("class", "columns is-vcentered");
                gameColumnEl.appendChild(baseSearchEl);
                //Create Columns 2 (baseClickEl)
                var baseClickEl = document.createElement("div");
                baseClickEl.setAttribute("id", "base-click");
                baseClickEl.setAttribute("class", "columns is-mobile");
                gameColumnEl.appendChild(baseClickEl);
                //Columns 1 (baseSearchEl) Column 1 (columnImageEl) Stores Image Column 
                var columnImageEl = document.createElement("div");
                columnImageEl.setAttribute("id", "column-image");
                columnImageEl.setAttribute("class", "column is-one-fith is-narrow");
                baseSearchEl.appendChild(columnImageEl);
                //Image
                var gameImg = document.createElement("img");
                gameImg.setAttribute("id", "game-image");
                gameImg.setAttribute("src", response.results[i].background_image);
                $(gameImg).addClass("image");
                gameImg.setAttribute("alt", "Image of " + response.results[i].name);
                columnImageEl.appendChild(gameImg);
                //Columns 1 (baseSearchEl) Column 2 (gameHeaderEl) Stores Title and Rating
                var gameHeaderEl = document.createElement("div");
                gameHeaderEl.setAttribute("id", "game-header");
                gameHeaderEl.setAttribute("class", "column has-text-centered");
                baseSearchEl.appendChild(gameHeaderEl);
                //Title Text
                var gameTitleEl = document.createElement("h1");
                gameTitleEl.setAttribute("class", "title");
                gameHeaderEl.appendChild(gameTitleEl);
                var gameTitleText = document.createTextNode(response.results[i].name);
                gameTitleEl.appendChild(gameTitleText);
                //Create Columns 2 (baseClickEl) Column 1 For Description (columnDescriptionEl)
                var columnDescriptionEl = document.createElement("div");
                columnDescriptionEl.setAttribute("id", "column-description");
                columnDescriptionEl.setAttribute("class", "column");
                baseClickEl.appendChild(columnDescriptionEl);
                //Game Stars Element
                var gameStarsEl = document.createElement("div");
                gameStarsEl.setAttribute("id", "game-stars");
                gameStarsEl.setAttribute("class", "container has-text-centered");
                gameHeaderEl.appendChild(gameStarsEl);
                //Game Stars
                var gameTitleStarSpan = document.createElement("h3");
                gameTitleStarSpan.setAttribute("class", "title has-text-centered is-size-3");
                gameStarsEl.appendChild(gameTitleStarSpan);
                var gameTitleStar1 = document.createElement("i");
                var gameTitleStar2 = document.createElement("i");
                var gameTitleStar3 = document.createElement("i");
                var gameTitleStar4 = document.createElement("i");
                var gameTitleStar5 = document.createElement("i");
                gameTitleStar1.setAttribute("class", "far fa-star");
                gameTitleStar2.setAttribute("class", "far fa-star");
                gameTitleStar3.setAttribute("class", "far fa-star");
                gameTitleStar4.setAttribute("class", "far fa-star");
                gameTitleStar5.setAttribute("class", "far fa-star");
                gameTitleStarSpan.appendChild(gameTitleStar1);
                gameTitleStarSpan.appendChild(gameTitleStar2);
                gameTitleStarSpan.appendChild(gameTitleStar3);
                gameTitleStarSpan.appendChild(gameTitleStar4);
                gameTitleStarSpan.appendChild(gameTitleStar5);
                //Game Rating if/else
                var gameRating = response.results[i].rating_top; 
                console.log(gameRating); 
                if (gameRating <=1) {
                    gameTitleStar1.classList.remove("far");
                    gameTitleStar1.classList.add("fas");
                } else if (gameRating <= 2 ) {
                    gameTitleStar1.classList.remove("far");
                    gameTitleStar1.classList.add("fas");
                    gameTitleStar2.classList.remove("far");
                    gameTitleStar2.classList.add("fas");
                } else if (gameRating <= 3) {
                    gameTitleStar1.classList.remove("far");
                    gameTitleStar1.classList.add("fas");
                    gameTitleStar2.classList.remove("far");
                    gameTitleStar2.classList.add("fas");
                    gameTitleStar3.classList.remove("far");
                    gameTitleStar3.classList.add("fas");
                } else if (gameRating <= 4) {
                    gameTitleStar1.classList.remove("far");
                    gameTitleStar1.classList.add("fas");
                    gameTitleStar2.classList.remove("far");
                    gameTitleStar2.classList.add("fas");
                    gameTitleStar3.classList.remove("far");
                    gameTitleStar3.classList.add("fas");
                    gameTitleStar4.classList.remove("far");
                    gameTitleStar4.classList.add("fas");
                } else if (gameRating <= 5) {
                    gameTitleStar1.classList.remove("far");
                    gameTitleStar1.classList.add("fas");
                    gameTitleStar2.classList.remove("far");
                    gameTitleStar2.classList.add("fas");
                    gameTitleStar3.classList.remove("far");
                    gameTitleStar3.classList.add("fas");
                    gameTitleStar4.classList.remove("far");
                    gameTitleStar4.classList.add("fas");
                    gameTitleStar5.classList.remove("far");
                    gameTitleStar5.classList.add("fas");
                };
                //Summary Text
                var gameSummary = document.createElement("p");
                columnDescriptionEl.appendChild(gameSummary);
                $(gameSummary).hide();
                //Game Description Toggle + Fetch
                $(".search-results").click(function () {
                    var gameSummaryClick = ($(this).find("p"));
                    $(this).removeClass("is-two-fifths");
                    $(this).addClass("is-four-fifths");
                    var titleName = ($(this).attr("data-name"))
                    var shortTitleName = titleName.split(",", 1);
                    var gameDescriptionApi = "https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/games/?api_key=" + gamespotKey + "&filter=name:" + shortTitleName + "&format=json&limit=6";
                    fetch(gameDescriptionApi)
                        .then(function (ratingResponse) {
                            return ratingResponse.json();
                        })
                        .then(function (ratingResponse) {
                            console.log(ratingResponse + shortTitleName);
                            $(gameSummaryClick).text(ratingResponse.results[0].description); 
                            $(gameSummaryClick).toggle();
                        })
                        .catch(function (error) {
                        });
                });
            }
            //Anime Fetch Call
            animeRequest(gameName);
        })
        .catch(function (error) {
            // console.log(error);
        });

};

function animeRequest(gameName) {

    var animeApi = "https://kitsu.io/api/edge/anime?";
    fetch(animeApi + "filter[text]=" + gameName)
        .then(function (animeResponse) {
            return animeResponse.json();
        })
        .then(function (animeResponse) {
            // console.log(animeResponse);
            $("#results-container").empty();
            animeResultsEl.innerHTML = "Anime(s) found for " + gameName + ":";
            // convert game title and anime title to uppercase to check for correct titles
            var animeName = animeResponse.data[0].attributes.canonicalTitle;
            var animeNameUp = animeName.toUpperCase();
            var gameNameUp = gameName.toUpperCase();

            if (animeNameUp.includes(gameNameUp) === false) {
                animeResultsEl.innerHTML = " ";

                $("#anime-alert-header").html("No Anime Found...");
                $("#anime-alert-icon").removeClass("fa-laugh-beam");
                $("#anime-alert-icon").addClass("fa-sad-cry");
                $("#anime-alert").addClass("is-active");
                $("#anime-alert-text").html("<p>There weren't any Anime found for " + gameName + ".</p>");
                $("#anime-alert-btn").on("click", function () {
                    ($("#anime-alert").removeClass("is-active"));
                });
                return;
            }

            for (var i = 0; i < 5; i++) {
                var animeName = animeResponse.data[i].attributes.canonicalTitle;
                var animeNameUp = animeName.toUpperCase();
                var gameNameUp = gameName.toUpperCase();

                if (animeNameUp.includes(gameNameUp) === false) {
                    return;
                }

                // Kitsu API results related to gameName value
                // create a container for all the kitsu api results
                var animeContainer = document.createElement("div");
                animeContainer.setAttribute("id", "anime-container");
                animeContainer.setAttribute("data-animeCanon", animeResponse.data[i].attributes.canonicalTitle);
                console.log(animeResponse); 
                animeContainer.classList = "column anime-class has-background-grey-light has-text-black-bis search-results-anime is-two-fifths has-text-centered mx-3 my-4";
                resultsContainerEL.appendChild(animeContainer);
                // div to contain title, rating, and description
                var animeInfoEl = document.createElement("div");
                animeInfoEl.setAttribute("id", "anime-info");
                animeInfoEl.classList = "container has-text-centered is-size-5";
                animeContainer.appendChild(animeInfoEl);
                // display/create title 
                var animeTitle = document.createElement("h3");
                animeTitle.setAttribute("id", "anime-title");
                animeTitle.classList = "title has-text-centered is-size-3";
                animeTitle.innerHTML = animeResponse.data[i].attributes.canonicalTitle;
                animeInfoEl.appendChild(animeTitle);
                // create rating span 
                var animeRatingEl = document.createElement("span");
                animeRatingEl.setAttribute("id", "anime-rating");
                animeRatingEl.classList = "container has-text-centered is-size-4";
                var animeRating = animeResponse.data[i].attributes.averageRating; 

                //create star elements
                var animeStar1 = document.createElement("i");
                animeStar1.classList = "far fa-star";
                var animeStar2 = document.createElement("i");
                animeStar2.classList = "far fa-star";
                var animeStar3 = document.createElement("i");
                animeStar3.classList = "far fa-star";
                var animeStar4 = document.createElement("i");
                animeStar4.classList = "far fa-star";
                var animeStar5 = document.createElement("i");
                animeStar5.classList = "far fa-star";
                //append star elements
                $(animeRatingEl).append(animeStar1);
                $(animeRatingEl).append(animeStar2);
                $(animeRatingEl).append(animeStar3);
                $(animeRatingEl).append(animeStar4);
                $(animeRatingEl).append(animeStar5);
                //rating if else statement 
                if (animeRating < 30) {
                    animeStar1.classList.remove("far");
                    animeStar1.classList.add("fas");
                } else if (animeRating > 30 && animeRating < 50) {
                    animeStar1.classList.remove("far");
                    animeStar1.classList.add("fas");
                    animeStar2.classList.remove("far");
                    animeStar2.classList.add("fas");
                } else if (animeRating > 50 && animeRating < 70) {
                    animeStar1.classList.remove("far");
                    animeStar1.classList.add("fas");
                    animeStar2.classList.remove("far");
                    animeStar2.classList.add("fas");
                    animeStar3.classList.remove("far");
                    animeStar3.classList.add("fas");
                } else if (animeRating > 70 && animeRating < 90) {
                    animeStar1.classList.remove("far");
                    animeStar1.classList.add("fas");
                    animeStar2.classList.remove("far");
                    animeStar2.classList.add("fas");
                    animeStar3.classList.remove("far");
                    animeStar3.classList.add("fas");
                    animeStar4.classList.remove("far");
                    animeStar4.classList.add("fas");
                } else if (animeRating > 90 && animeRating <= 100) {
                    animeStar1.classList.remove("far");
                    animeStar1.classList.add("fas");
                    animeStar2.classList.remove("far");
                    animeStar2.classList.add("fas");
                    animeStar3.classList.remove("far");
                    animeStar3.classList.add("fas");
                    animeStar4.classList.remove("far");
                    animeStar4.classList.add("fas");
                    animeStar5.classList.remove("far");
                    animeStar5.classList.add("fas");
                };
                // display video of the anime
                var animeVidContainer = document.createElement("div");
                animeVidContainer.classList = "container is-centered";
                animeContainer.appendChild(animeVidContainer);
                animeContainer.appendChild(animeRatingEl);
                //create anime video
                var animeVid = document.createElement("iframe");
                animeVid.setAttribute("id", "anime-video");
                animeVid.setAttribute("src", "https://www.youtube.com/embed/" + animeResponse.data[i].attributes.youtubeVideoId + "?controls=1");
                animeVid.setAttribute("allowfullscreen", "");
                animeVid.setAttribute("alt", "Trailer for " + gameName);
                animeVidContainer.appendChild(animeVid);
                //display description
                var animeDescriptionEl = document.createElement("p");
                animeDescriptionEl.setAttribute("id", "anime-description");
                animeDescriptionEl.classList = "container has-text-left is-size-6";
                $(animeDescriptionEl).text(animeResponse.data[i].attributes.description);
                animeContainer.appendChild(animeDescriptionEl);

                //hidden elements 
                $(animeRatingEl).hide(); 
                $(animeDescriptionEl).hide(); 
            }

            $(".search-results-anime").click(function () {
                $(this).removeClass("is-two-fifths");
                $(this).addClass("is-four-fifths");
                var animeContainerClick = ($(this).find("p"));
                var animeFindSpan = ($(this).find("span"));
                $(animeContainerClick).toggle();
                $(animeFindSpan).toggle();
                var animeCanon = $(this).attr("data-animeCanon");
                fetch("https://kitsu.io/api/edge/anime?filter[text]=" + animeCanon)
                    .then(function (streamResponse) {
                        return streamResponse.json();
                    })
                    .then(function (streamResponse) {
                        console.log(streamResponse.data[i].relationships.streamingLinks.links.related)
                    })
                    .catch(function (error) {
                    });
            });
            // return fetch("https://kitsu.io/api/edge/streaming-links?filter[id]=" + animeResponse.data[i].id);
            // return fetch("https://kitsu.io/api/edge/streaming-links?url=" + gameName);
        });

};

// var searchGame = function (event) {
function searchGame(event) {
    event.preventDefault();

    var searchValue = searchBar.value.trim().toUpperCase();
    // clicking search button submits value and calls gameRequest function
    // console.log("searchValue: " + searchValue);

    if (searchValue) {
        gameRequest(searchValue);
        gameButtons(searchValue);
        storeSearchedGames();
    } else {
        //if search is empty, alert with a modal
        $("#empty-search").addClass("is-active");
        $("#empty-search-btn").on("click", function () {
            ($("#empty-search").removeClass("is-active"));
        });
        return;
    }

    // clear search bar after submitting
    searchBar.value = "";
};

$(xboxEl).click(function () {
    // console.log("Xbox Theme Choosen");
    var element = document.body;
    $(heroEl).removeClass();
    $(heroEl).addClass("hero is-success is-bold is-small project-title");
    element.classList.toggle("xbox-theme");
});

$(playstationEl).click(function () {
    // console.log("Playstation Theme Choosen");
    var element = document.body;
    $(heroEl).removeClass();
    $(heroEl).addClass("hero is-info is-bold is-small project-title");
    element.classList.toggle("playstation-theme");
});

$(nintendoEl).click(function () {
    // console.log("Nintendo Theme Choosen");
    var element = document.body;
    $(heroEl).removeClass();
    $(heroEl).addClass("hero is-danger is-bold is-small project-title");
    element.classList.toggle("nintendo-theme");
});

$(steamEl).click(function () {
    // console.log("Steam Theme Choosen");
    var element = document.body;
    $(heroEl).removeClass();
    $(heroEl).addClass("hero is-light is-bold is-small project-title");
    element.classList.toggle("steam-theme");
});


function storeSearchedGames() {
    var userSearch = searchBar.value.trim().toUpperCase();

    // get history if any exists, if not is an array
    var gameHistory = JSON.parse(localStorage.getItem("game-search")) || [];
    // push searched game into the gameHistory array
    gameHistory.push(userSearch);

    // save search into localstorage
    localStorage.setItem("game-search", JSON.stringify(gameHistory));
};

function loadSearchedGames() {
    if (localStorage.getItem("game-search")) {
        var previousGames = JSON.parse(localStorage.getItem("game-search"));
        for (var i = 0; i < previousGames.length; i++) {
            gameButtons(previousGames[i]);
        }
    };

    for (i = 0; i < document.getElementsByClassName("game-button").length; i++) {
        document.getElementsByClassName("game-button")[i].addEventListener('click', function () {
            var buttonClicked = this.getAttribute("data-game");

            gameRequest(buttonClicked);
        }, {passive: true});
    }
};

function gameButtons(game) {
    // create buttons for searched games
    var searchedGame = document.createElement("button");
    searchedGame.textContent = game;
    searchedGame.classList = "button game-button is-rounded is-light";
    searchedGame.setAttribute("data-game", game);
    searchedGame.setAttribute("type", "submit");
    searchedGame.setAttribute("id", "game-" + game);

    // append button to gametitle-buttons div
    $("#gametitle-buttons").append(searchedGame);
};

$("#delete-btn").click(function () {
    localStorage.removeItem("game-search");
    $(".game-button").remove();
});

searchForm.addEventListener("submit", searchGame, {passive:true});

loadSearchedGames();