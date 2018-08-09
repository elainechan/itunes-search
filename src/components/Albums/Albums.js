import React from 'react';
import './Albums.css';

const Albums = (props) => {
  //render() {
    //const albums = this.props.albumsProp;
    const albums = props.albumsProp;
    return(
      <div className="albums-container" id="albums-container">
      {
        albums.map((album, i) => {
          return(
            <div className="album" key={i}>
            <a href={album.collectionViewUrl} target="_blank">
              <img alt="album" className="album-image" src={album.artworkUrl100}></img>
            </a>
            <p className="album-name">
              <a href={album.collectionViewUrl} target="_blank">{album.collectionName}</a>
            </p>
            </div>
          )
        })
      }
      </div>
    )
  //}
}

export default Albums;