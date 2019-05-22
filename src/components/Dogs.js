import React , {Component } from 'react';
import axios from 'axios';

import apiKey from '../config.js';
import Gallery from './Gallery';

class Dogs extends Component {

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

performSearch = (query = "dogs") => {
  axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
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
    return(
      <div>
      <Gallery data={this.state.images}/>
      </div>
    );
  }
}

export default Dogs;
