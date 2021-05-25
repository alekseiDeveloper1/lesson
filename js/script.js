'use strict';

const numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const setMoveFirst = prompt('Какой фильм вы смотрели?', ""),
      thinkFirst = prompt('Ваша оценка?', "");

personalMovieDB.movies[setMoveFirst] = thinkFirst;
console.log(personalMovieDB);