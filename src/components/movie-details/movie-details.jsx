import React from 'react';
import './movie-details.scss';

class MovieDetails extends React.Component{
        state = {
            isLoading: false,
            data: '',
            id: this.props.match.params.id
        }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch(` https://api.themoviedb.org/3/movie/${this.state.id}?api_key=4cb1eeab94f45affe2536f2c684a5c9e `)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    data: response,
                    isLoading: false
                })
            })
    }

    render() {
      const movieinfo = this.state.data;
        return (
        <>
          {
            this.state.isLoading ?
                (<h1>Loading</h1>):
                (
                  <div className="movie-details">
                    <div className="movie-details-image">
                      <img src={'https://image.tmdb.org/t/p/w500' + movieinfo.poster_path} alt={movieinfo.title}/>
                    </div>
                    <div className="movie-details-info">
                      <div className="movie-details-title">{movieinfo.title}</div>
                      <p>{movieinfo.overview}</p>
                    </div>

                 </div>
                )
          }
        </>
    )
    }
}

export default MovieDetails
