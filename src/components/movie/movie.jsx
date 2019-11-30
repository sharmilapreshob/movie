import React from 'react'

function Movie(props) {
    const {id, title, poster_path, overview} = props.movie;
    return (
        <li className="movie-list-item" key={id}>
          <div className="movie-list-title">{title}</div>
          <div className="movie-list-image">
            <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title}/>
          </div>
          <div className="movie-list-desc">{overview}</div>
        </li>
    )
}

export default Movie
