const Movie = require('../models/movie');

let movies = [];
let nextId = 1;

exports.getMovies = (req, res) => {
    res.render('index', { movies });
};

exports.getAddMovie = (req, res) => {
    res.render('addMovie');
};

exports.postAddMovie = (req, res) => {
    const { title, director, rating } = req.body;
    const newMovie = new Movie(nextId++, title, director, rating, false, '');
    movies.push(newMovie);
    res.redirect('/');
};

exports.getEditMovie = (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).send('Movie not found');
    }
    res.render('editMovie', { movie });
};

exports.postEditMovie = (req, res) => {
    const { id, title, director, rating, watched, review } = req.body;
    const movieIndex = movies.findIndex(m => m.id === parseInt(id));
    if (movieIndex !== -1) {
        movies[movieIndex].title = title;
        movies[movieIndex].director = director;
        movies[movieIndex].rating = rating;
        movies[movieIndex].watched = watched === 'on';
        movies[movieIndex].review = review;
    }
    res.redirect('/');
};

exports.markAsWatched = (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (movie) {
        movie.watched = true;
    }
    res.redirect('/');
};

exports.deleteMovie = (req, res) => {
    const movieIndex = movies.findIndex(m => m.id === parseInt(req.params.id));
    if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);
    }
    res.redirect('/');
};
