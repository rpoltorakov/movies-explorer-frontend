import { SHORT_MOVIES_LENGTH } from "./constants"

function filterMovies(query, movies, checkbox) {
  if (!checkbox) {
    return movies.filter((movie) => (
      movie.nameRU.toLowerCase().trim().includes(query.toLowerCase()) || 
      movie.nameEN.toLowerCase().trim().includes(query.toLowerCase())
    ))
  } else {
    return movies.filter((movie) => (
      (movie.nameRU.toLowerCase().trim().includes(query.toLowerCase()) && movie.duration <= SHORT_MOVIES_LENGTH) ||
      (movie.nameEN.toLowerCase().trim().includes(query.toLowerCase()) && movie.duration <= SHORT_MOVIES_LENGTH)
    ))
  }
}

export {
  filterMovies,
}