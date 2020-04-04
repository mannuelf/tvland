// 1. first thing, create a variable to hold the API ur
const API_URL = "https://api.tvmaze.com/shows?page=1";

// 2. we must now edit the DOM tag with JS I will do it first and explain then you will do it in the script.js
const movieCard = document.querySelector(".movie-card"); // get access to the card holder
const movieTitle = document.querySelector(".movie-card-title"); // get me element with this classname
const movieImg = document.querySelector(".movie-card-img");
const movieText = document.querySelector(".movie-card-text");
const movieButton = document.querySelector(".movie-card-button");

// 3. create a fetch statement to CALL the API END POINT
fetch(API_URL) // pass the API URL into the fetch function
  .then(response => {
    // capture the response inside a call back function
    return response.json(); // convert the respsone to JSON data
  })
  .then(json => {
    // pass the converted json object into another callback function
    const data = json; // store the json object in a variable called data so we can use it later
    console.log(data); // log the data to look at it, so you know what to put in the for loop
    // create a loop to render one movie card per movie
    for (let i = 0; i < data.length; i++) {
      // create the card
      const html = `<img class="movie-card-img"
                            src="${data[i].image.original}"
                            alt="${data[i].name}"
                            width="240"
                            >
                            <h2 class="movie-card-title">${data[i].name}</h2>
                            <p class="movie-card-text">${data[i].summary}</p>
                            <button class="movie-card-button" type="button">watch now</button>
                            `;

      // call the movieCard variable and add the HTML to movieCard
      movieCard.innerHTML += html;
    }
  })
  .catch(error => {
    console.log(error); // if any errors console log it.
  });
// notice the indentation of the functions.
