function filterMovies(query, movies, checkbox) {
  if (!checkbox) {
    return movies.filter((movie) => (
      movie.nameRU.toLowerCase().trim().includes(query.toLowerCase()) || 
      movie.nameEN.toLowerCase().trim().includes(query.toLowerCase())
    ))
  } else {
    return movies.filter((movie) => (
      (movie.nameRU.toLowerCase().trim().includes(query.toLowerCase()) && movie.duration <= 40) ||
      (movie.nameEN.toLowerCase().trim().includes(query.toLowerCase()) && movie.duration <= 40)
    ))
  }
}

export {
  filterMovies,
}