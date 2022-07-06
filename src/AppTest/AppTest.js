import './AppTest.css';
import imge from './bg.png';
import React, { Component } from 'react';

export default class AppTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }

  render() {
    return (
      <div className="container1 border border-primary mb-3">
        <div className="imgSize">
          <img src={imge} className="imgSize" alt="imge" />
        </div>
        <div className="d-flex flex-column">
          <div>
            <p className="title">{this.props.name}</p>
          </div>
          <div>
            <p className="comment">{this.props.comment}</p>
          </div>
          <div className="d-flex ">
            <span
              className="btn btn-primary "
              onClick={() => {
                this.setState({ status: !this.state.status });
              }}
            >
              {this.state.status ? <span>Like</span> : <span>Unlike</span>}
            </span>
            <span
              onClick={() => {
                this.setState({ status: !this.state.status });
              }}
            >
              <div className="img"></div>
              yea
            </span>
          </div>
        </div>
      </div>
    );
  }
}
