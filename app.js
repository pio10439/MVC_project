const express = require('express');
const bodyParser = require('body-parser');
const movieController = require('./controllers/movieController');
const errorController = require('./controllers/error');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', movieController.getMovies);
app.get('/add', movieController.getAddMovie);
app.post('/add', movieController.postAddMovie);
app.get('/edit/:id', movieController.getEditMovie);
app.post('/edit/:id', movieController.postEditMovie);
app.get('/watched/:id', movieController.markAsWatched);
app.get('/delete/:id', movieController.deleteMovie);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
