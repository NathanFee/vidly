import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndPoint);
}

export function getMovie(movieId) {
  return http.get(apiEndPoint + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    http.put(apiEndPoint + "/" + movie._id, movie);
  }
}

export function deleteMovie(movieId) {
  return http.delete(apiUrl + "/" + movieId);
}
