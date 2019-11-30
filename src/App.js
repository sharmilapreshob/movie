import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import Movie from './components/movie/movie';
import MovieDetails from './components/movie-details/movie-details';

const apikey = '4cb1eeab94f45affe2536f2c684a5c9e';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=';
class App extends React.Component {
  state = {
    search: '',
    movieList: [],
    isLoading: true,
    status: '',
  }

  searchMovie = () => {
    if (this.state.search === '') {
      this.setState({status: 'Please type something'})
    }
    else {
      fetch(url + `${apikey}&query=${this.state.search}`)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        isLoading: false,
                        movieList: json
                    });

                })
      .catch(error => console.log("Oops some problem!", error));
      if (this.state.movieList.length == 0) {
        this.setState({status: 'Enter a valid movie name'})
      }
      else {
        this.setState({status: ''})
      }
    }
  }

   searchValue = (e) => {
      this.setState({search: e.target.value});
   }

  render () {
    const yoyo = this.state;
    console.log(yoyo.movieList);
    let content;
    if (yoyo.movieList.length != 0) {
      content = yoyo.movieList.results.map(m =>
          <Link to={`/moviedetails/${m.id}`}>
            <Movie key={m.id} movie={m} />
          </Link>
      )
    }
    return (
      <div className="container">
        <div className="search-bar">
          <input type="text" className="input-search" onChange={e=>this.searchValue(e)}/>
          <button className="btn btn-search" onClick={this.searchMovie}>Search</button>
        </div>
        <ul className="movie">
          {content}
        </ul>
        <div className="error-msg">{this.state.status}</div>
    </div>
    );
  }
}

export default App;
