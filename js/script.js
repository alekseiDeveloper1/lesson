'use strict';

let numberOfFilms

function start() {
  numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

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

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (numberOfFilms.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (numberOfFilms.count > 10 && numberOfFilms.count < 30) {
    alert('Вы классический зритель');
  } else if (numberOfFilms > 30) {
    alert('Вы классический зритель');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const likeGen = prompt(`любимый жанр?${i}`, "");
    personalMovieDB.genres[i-1] = likeGen;
  }
}

writeYourGenres();