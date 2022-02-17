let API = "bd974846a1c3f5bd07394ea416e3ecc1";
let searchAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${API}&query=`;
let imgPATH = "http://image.tmdb.org/t/p/w500";

let searchPage = document.querySelector("#search-page");
let searchResult = document.querySelector("#search-result");
let btn = document.querySelector("#btn");
let form = document.querySelector("#form");
let search = document.querySelector("#search");
let results = document.querySelector("#results");
let results2 = document.querySelector("#trend");
//let offlinePage = document.querySelector("#offline-page")
let searchTitle = document.querySelector("#search-title");
//let message = document.querySelector("#message")
let detailsPage = document.querySelector("#details-page");
let cardName = document.querySelector("#card-name");
let title = document.querySelector("#title");
let language = document.querySelector("#language");
let rating = document.querySelector("#rating");
let date = document.querySelector("#date");
let img = document.querySelector("#card-img");
let description = document.querySelector("#description");
let body = document.querySelector("body");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleEvents();
});

function handleEvents() {
    if (window.navigator.onLine) {
        searchResult.style.display = "block";
        searchPage.style.display = "none";
        const title = `${search.value}`;
        if (title) {
            searchTitle.innerHTML = `Search Results of  - ${title}`;
            showMovies(searchAPI + title);
            search.value = "";
        }
        else {
            searchTitle.innerHTML = "No Title";
            searchPage.style.display = "none";
            massage.innerHTML = "Type something to search"
        }
    }
    else {
        searchPage.style.display = "none";
    }
}

function showMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            if (data.results.length) {
                data.results.forEach(element => {
                    console.log(element)
                    if (element.poster_path) {
                        const el = document.createElement("div");
                        const image = document.createElement("img")
                        const text = document.createElement("p");

                        text.innerHTML = `${element.title}`;
                        image.src = imgPATH + element.poster_path;
                        el.appendChild(image);
                        el.appendChild(text);
                        el.onclick = () => showDetails(element);
                        results.appendChild(el);
                    }
                });
            }
            else {
                searchTitle.innerHTML = "No results found"

            }
        })

}

function showDetails(element) {
    body.style.overflow = "hidden";
    detailsPage.style.display = "flex";
    img.src = imgPATH + element.backdrop_path;
    title.innerHTML = `<strong>Title : </strong> ${element.title}`;
    cardName.innerHTML = `${element.title}`;
    date.innerHTML = `<strong>Released Date : </strong> ${element.release_date}`;
    rating.innerHTML = `<i class="fa fa-star-o"></i> <strong> Rating : </strong> ${element.vote_average}`;
    description.innerHTML = `<strong>Description : </strong> ${element.overview}`;
    language.innerHTML = `<strong>Language : </strong> ${element.original_language}`;


}


function handleClose() {
    detailsPage.style.display = "none";
    body.style.overflow = "auto";
}

function handleBack() {
    location.reload();
}

//trending - https://api.themoviedb.org/3/trending/movie/day?api_key=bd974846a1c3f5bd07394ea416e3ecc1
let url2 = "https://api.themoviedb.org/3/trending/movie/day?api_key=bd974846a1c3f5bd07394ea416e3ecc1";
function showMovies2(url2) {
    fetch(url2).then(res => res.json())
        .then(function (data) {
            if (data.results.length) {
                data.results.forEach(element => {
                    console.log(element)
                    if (element.poster_path) {
                        const el = document.createElement("div");
                        const image = document.createElement("img")
                        const text = document.createElement("p");

                        text.innerHTML = `${element.title}`;
                        image.src = imgPATH + element.poster_path;
                        el.appendChild(image);
                        el.appendChild(text);
                        el.onclick = () => showDetails(element);
                        results2.appendChild(el);
                    }
                });
            }
            else {
                searchTitle.innerHTML = "No results found"

            }
        })

}

showMovies2(url2);

