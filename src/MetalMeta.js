import data from './metal.json';
import React from 'react';
import Band from './Band';
import './Meta.css';

class MetalMeta extends React.Component {
  render() {
    return (
      <div className='Meta'>
        <h3>Metal bands:</h3>
        <p> There are {data.length} bands </p>
        {
          <div className='grid-container'>
            {
              data.map((band, index) => {
                return <div className='grid-item' key={index}><Band split={band.split} bandName={band.band_name} formed={band.formed} origin={band.origin} fans={band.fans} /></div>
              })
            }
          </div>
        }
      </div>
    );
  }
}

export default MetalMeta
