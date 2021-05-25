"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const setMoveFirst = prompt('Какой предпоследний фильм вы смотрели?', ""),
      thinkFirst = prompt('Ваша оценка?', ""),
      setMovelast = prompt('какой последний фильм вы смотрели?', ""),
      thinklast = prompt('Ваша оценка?', "");

personalMovieDB.movies[setMoveFirst] = thinkFirst;
personalMovieDB.movies[setMovelast] = thinklast;
console.log(personalMovieDB);