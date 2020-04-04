const API_URL = 'https://api.tvmaze.com/shows';


const movieCard = document.querySelector(".movie-card");
const movieTitle = document.querySelector(".movie-card-title");
const movieImg = document.querySelector(".movie-card-img");
const movieText = document.querySelector(".movie-card-text");
const movieButton = document.querySelector(".movie-card-button");

fetch(API_URL)
.then((response) => {
    return response.json();
})
.then((json) => {
    const data = json;
    console.log(data);


for (let i = 0; i < data.length; i++) {

  const html = `<img class="movie-card-img"
  src="${data[i].image.original}"
  alt="${data[i].name}"
  width="240"
  >
  <h2 class="movie-card-title">${data[i].name}</h2>
  <p class="movie-card-text">${data[i].summary}</p>
  <button class="movie-card-button" type="button">watch now</button>
`;

movieCard.innerHTML += html;
    }
  })

  .catch(error => {
    console.log(error); // if any errors console log it.
  });
