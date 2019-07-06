import React, { Component } from 'react';
import AddTodo from '../../containers/addtodo';
import {addTodo} from '../../containers/action';

class Work extends Component {
  state = {  }
  render() { 
    return (
      <div className="container">
        <input type="text" ref="addText" />
        <button onClick={this.addNumbers}>+</button>
      </div>
    );
  }
}
 
export default Work;