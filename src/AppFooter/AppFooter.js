import './AppFooter.css';
import React, { Component } from 'react';
// export default function AppFooter() {
//   return (
//     <div class="footer1">
//       <div class="col-md-12 text-center">&copy; AEstopace2022</div>
//     </div>
//   );
// }

class AppFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  render() {
    return (
      <div class="footer1">
        <div
          onClick={() => {
            this.setState({ status: !this.state.status });
            console.log(this.state.status, 'new one');
          }}
          class="col-md-12 text-center"
        >
          {this.state.status ? (
            <p> &copy; AEstopace2022</p>
          ) : (
            <p> 🎁 AEstopace2022</p>
          )}
        </div>
      </div>
    );
  }
}
export default AppFooter;
