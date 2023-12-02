const url = 'https://api.thecatapi.com/v1';
const api_key = "live_h0Au8FqGzEzEykfPbj62y6hNhFR1yALbCAe5SbHeZsoI4tfKtGhStC0hjsZ3Mihx";

function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};

  export { fetchBreeds, fetchCatByBreed };