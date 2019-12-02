import React from 'react';
import './favourites.scss';
import { Link } from 'react-router-dom';

class Favourites extends React.Component{
        state = {
            loading: false,
            favs: JSON.parse(localStorage['favourites'])
        }

    removeFav = (e) => {
      var items = JSON.parse(localStorage.getItem('favourites'));
      for (var i =0; i< items.length; i++) {
        if (items[i].favId === e.target.value) {
            items[i].splice(i);
            break;
        }
    }
    items = JSON.stringify(items);
    localStorage.setItem("favourites", items);
    }
    render() {
      const ff =this.state.favs.map(fav => {
        return <li className="fav-list-item" key={fav.favId}>
          <div className="fav-list-title">{fav.favTitle}</div>
          <div className="fav-list-image">
            <img src={'https://image.tmdb.org/t/p/w500' + fav.favImage} alt={fav.favTitle}/>
          </div>
          <div className="btn-group">
          <Link to={`/moviedetails/${fav.favId}`} key={fav.favId} className="btn btn-view">View</Link>
          <button className="btn btn-remove" value={fav.favId} onClick={e => this.removeFav(e)}>Remove</button>
          </div>
        </li>
      })
    return (
        <>
          {
            this.state.loading ?
                (<h1>Loading</h1>):
                (
                  <ul className="fav-list">
                    {ff}
                  </ul>
                )
          }
        </>
    )

}
}

export default Favourites;
