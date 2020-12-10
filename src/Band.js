import React from 'react';
import Like from './Like';
import './Band.css';

class Band extends React.Component {
  render() {
    const data = Object.values(this.props);
    return (
      <div className='Band'>
        <ul>
          {
            data.map((item, index) => {
              if (index > 0) {
                return <li key={index}>{item}</li>
              }
              return <div key={index}></div>
            })
          }
        </ul>
        {this.props.split === '-'
        ? <Like />
        : <p>{this.props.split}</p>
        }

      </div>
    );
  }
}

export default Band;
