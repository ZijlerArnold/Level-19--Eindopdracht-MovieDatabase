// ===== Import from database.js =====
import {
    movies
} from './database.js';
// ===== End import from database.js =====

console.log(`${movies.length}: Movies in totaal`);




// ===================================================================
console.log(``);
console.log(`     ===== Eindopdracht: Filmzoeker  =====`);
console.log(``);
console.log(``);



const moviesContainer = document.querySelector('#movies-container');

function addMoviesToDom(movies) {
    const makeMovieList = movies.map(movie => {
        let newLi = document.createElement('li');
        newLi.classList.add("movieslist");
        let newA = document.createElement('a');
        newA.href = `https://www.imdb.com/title/${movie.imdbID}/`;
        let newPoster = document.createElement('img');
        newPoster.src = movie.Poster;
        newA.appendChild(newPoster);
        newLi.appendChild(newA);
        return moviesContainer.appendChild(newLi);
    });
};
addMoviesToDom(movies);


function deleteMovies() {
    const ul = document.querySelector('#movies-container');
    let li = document.querySelectorAll('li');
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}
//deleteMovies()


// ===== Filter the movies Op een woord via includes() =====
console.log(`===Filter Movies to Princess, Batman, ...===`);

const filterMovies = function (wordInMovieTitle) {
    return movies.filter(movie => {
        const movieFilterd = movie.Title.includes(wordInMovieTitle);
        return movieFilterd;
    });
};
//console.log(filterMovies('Batman'));


// ===== filterLatestMovies 2014 of nieuwer =====
console.log(`=== latest movies after 2004.`);
const filterLatestMovies = movies.filter(movie => movie.Year >= 2004);
//console.log(filterLatestMovies);


// ===== Radio Buttons =====
const moviesSearchForm = document.querySelector('#movies-search-form');
const handleOnChangeEvent = moviesSearchForm.addEventListener('change', (e) => {
    let keuze = e.target.value;
    console.log(`je hebt ${keuze} geselecteerd!`)
    switch (keuze) {
        case 'newestmovies':
            console.log(`HALLO  ${keuze}`);
            deleteMovies();
            addMoviesToDom(filterLatestMovies);
            break;
        case 'avengers':
            console.log(`HALLO  ${keuze}`);
            deleteMovies();
            addMoviesToDom(filterMovies('Avengers'));
            break;
        case 'xmen':
            console.log(`HALLO  ${keuze}`);
            deleteMovies();
            addMoviesToDom(filterMovies('X-Men'));
            break;
        case 'princess':
            console.log(`HALLO  ${keuze}`);
            deleteMovies();
            addMoviesToDom(filterMovies('Princess'));
            break;
        case 'batman':
            console.log(`HALLO  ${keuze}`);
            deleteMovies();
            addMoviesToDom(filterMovies('Batman'));
            break;
        default:
            console.log(`verdorriandosie`);
    }
});
// //===== end Radio Buttons =====