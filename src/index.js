import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import Header from './components/header/header';
import MovieDetails from './components/movie-details/movie-details';
import Favourites from './components/favourites/favourites';

ReactDOM.render(
  <BrowserRouter>
   <div>
   <Header />
   <Switch>
      <Route exact path='/' component={App} />
      <Route path='/favourites' component={Favourites} />
      <Route path="/moviedetails/:id" component={MovieDetails}/>
   </Switch>
   </div>
 </BrowserRouter>,
  document.getElementById('root')
);
