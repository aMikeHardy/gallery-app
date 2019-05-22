import React from 'react';

const GalleryItem = props => {
  let url=`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  return(
    <li>
      <img src={url} alt="" />
    </li>
  );
}

export default GalleryItem;
