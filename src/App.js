import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import Gallery from './components/Gallery';
import SearchBar from './components/Search-Bar';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computers from './components/Computers';
import NotFound from './components/NotFound';
import './App.css';
import apiKey from './config.js';

export default class App extends Component{

  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  //axios
componentDidMount() {
  this.performSearch();
}

performSearch = (query = 'trains') => {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
        images: response.data.photos.photo
    });
  })
  .catch(error => {
    console.log('Error Fetching and parsing data...', error);
  })

}

  render(){
    //console.log(this.state.images);
    //this.performSearch();
    return(
      <BrowserRouter>
        <div className="container">
        <SearchBar onSearch={this.performSearch}/>
        <Header  />
        <Switch>
        <Route exact path='/' render={ () => <Gallery data={this.state.images}/> } />
        <Route path='/cats' render={ () => <Cats data={this.state.images} /> } />
        <Route path='/dogs' render={ () => <Dogs  />} />
        <Route path='/computers' component={Computers} />
        <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    );

  }

}//end App
