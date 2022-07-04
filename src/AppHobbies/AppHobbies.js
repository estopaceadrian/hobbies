// import image1 from './image3.webp';
import './AppHobbies.css';

function AppMovie() {
  return (
    <div>
      {/* Movies */}

      <div class="container wrapper m-5">
        <div class="container">
          <h1 id="movie" class="bg-success p-2 text-white bg-opacity-75">
            I love to Watch
          </h1>

          <div class="container ">
            <div class="row justify-content-center mt-5">
              <div class="col-3">
                <div class="card movie1">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body movieb">
                    <h5 class="card-title">Anime</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card movie1">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body movieb">
                    <h5 class="card-title">Series</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card movie1 ">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body movieb">
                    <h5 class="card-title">Movies</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eating */}

      <div class="container wrapper m-5">
        <div class="container">
          <h1 id="food" class="bg-danger p-2 text-white bg-opacity-75">
            I love to Eat
          </h1>

          <div class="container ">
            <div class="row justify-content-center mt-5">
              <div class="col-3">
                <div class="card food1">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body foodb">
                    <h5 class="card-title">Samgyupsalamat</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card food2">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body foodb">
                    <h5 class="card-title">Pares</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card food3">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body foodb">
                    <h5 class="card-title">Street Foods</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Games */}

      <div class="container wrapper m-5 ">
        <div class="container">
          <h1 id="game" class="bg-warning p-2 text-white bg-opacity-75">
            I love to Play Games
          </h1>

          <div class="container ">
            <div class="row justify-content-center mt-5">
              <div class="col-3">
                <div class="card game1">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body gameb">
                    <h5 class="card-title">Ragnarok Mobile</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card game1">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body gameb">
                    <h5 class="card-title">Dota 2</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card game1">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body gameb">
                    <h5 class="card-title">Chess</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppMovie;
