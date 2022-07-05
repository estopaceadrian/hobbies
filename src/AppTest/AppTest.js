import './AppTest.css';
import imge from './bg.png';
import React, { Component } from 'react';

export default class AppTest extends Component {
  render() {
    return (
      <div class="container1 border border-primary">
        <div class="imgSize">
          <img src={imge} class="imgSize" alt="imge" />
        </div>
        <div class="d-flex flex-column">
          <div>
            <p class="title">Adrian Estopace</p>
          </div>
          <div>
            <p class="comment">Noooo</p>
          </div>
        </div>
      </div>
    );
  }
}
