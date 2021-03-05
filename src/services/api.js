/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const getMovies = () =>
  axios.get("http://www.omdbapi.com/?apikey=6eeb45b4&s=batman&plot=full");

export const getMovieById = (IMDbId) =>
  axios.get(`http://www.omdbapi.com/?apikey=6eeb45b4&i=${IMDbId}&plot=full`);
