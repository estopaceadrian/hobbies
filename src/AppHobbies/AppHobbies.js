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
                      Anime. Action-packed adventures, offbeat comedies,
                      inspirational stories
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      A set of related television or radio programs, especially
                      of a specified kind.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="card movie1 ">
                  {/* <img src={image1} alt="image1" /> */}
                  <div class="card-body movieb">
                    <h5 class="card-title">Movies</h5>
                    <p class="card-text ">
                      Movies move us like nothing else can, whether they're
                      scary, funny, dramatic or anywhere in-between.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      Samgyeopsal, samgyeopsal-gui, or grilled pork belly is a
                      type of gui in Korean cuisine.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      Is a term for a serving of Filipino braised beef stew with
                      garlic fried rice, and a bowl of clear soup.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      Ready-to-eat food or drink sold by a vendor, in a street
                      or at other public places, such as markets or fairs.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      Is an open world MMORPG based on the ever famous Ragnarok
                      Online. Become a Guild leader.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      Dota 2 is a 2013 multiplayer online battle arena video
                      game developed and published by Valve.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
                      Chess is a board game played between two players. Become a
                      varsity in our school.
                    </p>
                    <a href="google.com" class="btn btn-primary">
                      Read More
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
