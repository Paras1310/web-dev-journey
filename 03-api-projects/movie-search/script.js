const movieName = document.getElementById("movie");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");


async function getMovie(){
    const movie = movieName.value.trim();
    if(movie === ""){
        resultDiv.innerHTML = "<p>Please enter a movie name.</p>";
        return;
    }

    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`);
    const MovieData = await response.json();

    if (!MovieData || MovieData.Response === "False") {
        resultDiv.innerHTML = `<p>Movie not found. Please try again.</p>`;
        return;
    }

    console.log(MovieData);

    const title = MovieData.Title;
    const year = MovieData.Year;
    const genre = MovieData.Genre;
    const plot = MovieData.Plot;

    resultDiv.innerHTML = `<h2>${title} (${year})</h2>
    <p><strong>Genre:</strong> ${genre}</p>
    <p><strong>Plot:</strong> ${plot}</p>`;
}

let timer;

movieName.addEventListener("input", function() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    getMovie();
  }, 500);
});