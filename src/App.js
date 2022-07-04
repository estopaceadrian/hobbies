import './App.css';

function App() {
  return (
    <div>
      {/* 1ST PAGE */}
      <div class="myMain vh-100 ">
        <div class="overlay"></div>

        <div class="titleMessage">
          <div class="heading">
            <p class="main">ADRIAN ESTOPACE</p>
            <p class="main1">HOBBIES</p>
          </div>
          <div class="myHobbies row gap-2 ">
            <div className="col1"></div>
            <div className="col-3 aa1">
              <a href="#movie"> Movies</a>
            </div>
            <div className="col-3 aa1">
              <a href="#food"> Eating</a>
            </div>
            <div className="col-3 aa1">
              <a href="#game"> Games</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
