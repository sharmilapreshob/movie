import React from 'react';
import './favourites.scss';

const favList = JSON.parse(localStorage['favourites']);
console.log(favList);
class Favourites extends React.Component{
        state = {
            loading: false
        }
    componentDidMount() {

    }
    removeFav = () => {

    }
    render() {
        return (
        <>
          {
            this.state.loading ?
                (<h1>Loading</h1>):
                (
                  <div className="movie-details">

                    <button className="btn btn-remove" onClick={this.removeFav}>Remove from favourites</button>
                 </div>
                )
          }
        </>
    )
    }
}

export default Favourites;
