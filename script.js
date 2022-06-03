fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f8cabebbbd642f0c1f10b30f0b353e2a')
.then(res => res.json())
.then(data=> setMovies(data.results))

const setMovies = movies => {
    const spinner = document.getElementById('spinner')
    spinner.style.display = 'none';
    const movieContainer = document.getElementById('movie-container')
    movies.map(movie=>{
        const movieBox = document.createElement('div');
        const imageUrl = 'https://image.tmdb.org/t/p/original' + movie.backdrop_path;
        movieBox.classList.add('col-md-3');
        movieBox.innerHTML=`
        <div class="shadow rounded p-3 m3">
                    <img class="img-fluid" src=${imageUrl} alt="Responsive image">
                    <h3>${movie.original_title}</h3>
                    <p>${movie.overview.slice(0, 200)}</p>
                    <button onclick="loadMovie(${movie.id})" class="btn btn-primary">See details</button>
        </div>
        `
        movieContainer.appendChild(movieBox)
    })
}

const loadMovie= id=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f8cabebbbd642f0c1f10b30f0b353e2a`)
    .then(res => res.json())
    .then(data => loadDetail(data))
}

const loadDetail= detail =>{
    
    const movieDetailsContainer = document.getElementById('movie-details');
    movieDetailsContainer.innerHTML = '';
    const movieDetails = document.createElement('div');
    movieDetails.innerHTML = `
        <h3>${detail.original_title}</h3>
        <p>${detail.overview}</p>
        <p>Lenguage: ${detail.original_language}</p>
    `
    movieDetailsContainer.appendChild(movieDetails);
}