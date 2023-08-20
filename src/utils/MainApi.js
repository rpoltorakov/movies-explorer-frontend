class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _returnData() {
    return (res) => {
      if (res.ok) {return res.json()} 
      else {return Promise.reject(res.status)}
    }
  }

  signup({ name, email, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ name, email, password })
    })
      .then(this._returnData())
  }

  signin({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
      .then(this._returnData())
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._returnData())
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._returnData())
  }

  patchCurrentUser({ email, name }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email, name })
    })
      .then(this._returnData())
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._returnData())
  }

  createMovie(selectedMovie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: selectedMovie.country,
        director: selectedMovie.director,
        duration: selectedMovie.duration,
        year: selectedMovie.year,
        description: selectedMovie.description,
        image: `https://api.nomoreparties.co${selectedMovie.image.url}`,
        trailerLink: selectedMovie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${selectedMovie.image.formats.thumbnail.url}`,
        movieId: selectedMovie.id,
        nameRU: selectedMovie.nameRU,
        nameEN: selectedMovie.nameEN,
      })
    })
      .then(this._returnData())
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._returnData())
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.moviexp.rpoltorakov.nomoredomains.xyz',
  // baseUrl: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;
