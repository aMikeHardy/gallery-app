import React from 'react'
import NotFound from './NotFound';
import GalleryItem from './Gallery-item';

const Gallery = props =>{

  const results = props.data;
  //console.log(props.data);
  let images;
  if (results.length > 0){
  images = results.map( image => <GalleryItem farm={image.farm} server={image.server} id={image.id} secret={image.secret} key={image.id}/>);
  }else{
    images = <NotFound />
  }

  return(
  <div className="photo-container">
    <h2>Results</h2>
    <ul>
      {images}
    </ul>
</div>
  );
}

export default Gallery;
