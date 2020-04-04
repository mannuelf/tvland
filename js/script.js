const API_URL = 'https://api.tvmaze.com/shows';


fetch(API_URL) // call the API
.then((response) => { // get the response or data
    return response.json(); // convert it to json
})
.then((json) => { // give me the json
    const data = json; // save the json to variable data.
})
.catch((error) => {
    console.log(error);
})

