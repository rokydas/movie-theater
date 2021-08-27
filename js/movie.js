const loadMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef")
        .then(res => res.json())
        .then(data => setMovies(data.results))
}

loadMovies()

const setMovies = (movies) => {
    const first10Movie = movies.slice(0, 10)

    const movieSpinner = document.getElementById("movie-spinner")
    movieSpinner.style.display = "none"

    const movieContainer = document.getElementById("movie-container")
    for (const movie of first10Movie) {

        const movieBox = document.createElement("div")
        movieBox.classList.add("col-md-3")

        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path

        movieBox.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src='${imageUrl}'>
                <h3>${movie.title}</h3>
                <p>${movie.overview.slice(0, 200)}</p>
                <button onclick="loadMovieDetails('${movie.id}')" class="btn btn-primary">See Details</button>
            </div>
        `

        movieContainer.appendChild(movieBox)
    }
}

const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
}

const setMovieDetails = (movie) => {
    const movieDetails = document.getElementById("movie-details")
    movieDetails.innerHTML = ""
    const movieBox = document.createElement("div")

    movieBox.innerHTML = `
        <h3>${movie.original_title}</h3>
    `

    movieDetails.appendChild(movieBox)

}