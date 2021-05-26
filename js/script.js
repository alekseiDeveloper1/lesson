'use strict';

let numberOfFilms;

const personalMovieDB = {
  
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');
  
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const setMoveFirst = prompt('Какой фильм вы смотрели?', ""),
            thinkFirst = prompt('Ваша оценка?', "");
      if (setMoveFirst != null && thinkFirst != null &&
         setMoveFirst != "" && thinkFirst != '' && setMoveFirst < 50) {
        personalMovieDB.movies[setMoveFirst] = thinkFirst;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (numberOfFilms.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms.count > 10 && numberOfFilms.count < 30) {
      alert('Вы классический зритель');
    } else if (numberOfFilms > 30) {
      alert('Вы классический зритель');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      const likeGen = prompt(`любимый жанр?${i}`, "");
      if (likeGen != "" && likeGen != null) {
        personalMovieDB.genres[i-1] = likeGen;
      } else {
        i--;
      }
    }
  },
  toggleVisibleMyDB: function() {
    if(personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  }
};