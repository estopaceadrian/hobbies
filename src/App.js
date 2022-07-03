import './App.css';

import image1 from './food1.jpg';
import image2 from './game1.png';
import image3 from './image3.webp';

function App() {
  return (
    <div>
      {/* 1ST PAGE */}
      <div class="myMain vh-100 position-relative ">
        <div class="overlay"></div>

        <div class="titleMessage">
          <div class="heading">
            <p class="main">ADRIAN ESTOPACE</p>
          </div>
        </div>

        <div class="foods">
          <div class="card ">
            <img src={image1} alt="image1" />
            <div class="card-body">
              <h5 class="card-title">I love Eating</h5>
              <p class="card-text text-truncate">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card  ">
            <img src={image2} alt="image2" />
            <div class="card-body">
              <h5 class="card-title">Playing Games</h5>
              <p class="card-text text-truncate">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card  ">
            <img src={image3} alt="image3" />
            <div class="card-body">
              <h5 class="card-title">Watching Movies</h5>
              <p class="card-text text-truncate">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
