import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import MovieDetails from './components/movie-details/movie-details';

ReactDOM.render(
  <BrowserRouter>
   <div>
   <Switch>
      <Route exact path='/' component={App} />
      <Route path="/moviedetails/:id" component={MovieDetails}/>
   </Switch>
   </div>
 </BrowserRouter>,
  document.getElementById('root')
);
