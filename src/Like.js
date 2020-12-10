import React from 'react';
import './Like.css';

class Like extends React.Component {
  constructor() {
    super();
    this.state = { likes: 0 };
  }

  render() {
    return (
      <div className='Like'>
        <button onClick={() => {
            this.setState({likes: this.state.likes - 1});
          }
        }>-1</button>
        <p>{this.state.likes}</p>
        <button onClick={() => {
            this.setState({likes: this.state.likes + 1});
          }
        }>+1</button>
      </div>
    )
  }
}

export default Like;
