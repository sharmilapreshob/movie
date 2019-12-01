import React from 'react';
import './movie.scss';
import { Link } from 'react-router-dom';

var favorites =  [];
class Movie extends React.Component {
  favorites = () => {
    const favId= this.props.movie.id;
    if (favorites.indexOf(favId) === -1) {
        favorites.push(favId);
        console.log(favorites);
        localStorage.setItem('favourites', JSON.stringify(favorites));
    } else {
        console.log('already added to favorites')
    }
  }
  render () {
    const {id, title, poster_path, overview} = this.props.movie;

    return (
        <li className="movie-list-item" key={id}>
          <div className="movie-list-title">{title}</div>
          <div className="movie-list-image">
            <img src={'https://image.tmdb.org/t/p/w500' + poster_path} alt={title}/>
          </div>
          <div className="movie-list-desc">{overview}</div>
          <div className="btn-group">
          <Link to={`/moviedetails/${id}`} key={id} className="btn btn-view">View</Link>
          <button className="btn btn-favourite" onClick={this.favorites}>Add</button>
          </div>
        </li>
    )
  }
}

export default Movie
