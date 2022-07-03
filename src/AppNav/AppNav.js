import './AppNav.css';

const handleClick = () => {
  let myNavigator = document.querySelector('.myList');
  let menuBar = document.querySelector('.toggle');
  menuBar.onclick = function () {
    myNavigator.classList.toggle('active');
  };
};

function AppNav() {
  return (
    <div class="myList">
      <ul>
        <li>
          <a href="google.com">
            <span class="icon1">
              <ion-icon name="shapes-outline"></ion-icon>
            </span>
            <span class="title">
              <strong>Hobbies</strong>
            </span>
          </a>
        </li>
        <li>
          <a href="google.com">
            <span class="icon1">
              <ion-icon name="restaurant-outline"></ion-icon>
            </span>
            <span class="title">Eating</span>
          </a>
        </li>
        <li>
          <a href="google.com">
            <span class="icon1">
              <ion-icon name="game-controller-outline"></ion-icon>
            </span>
            <span class="title">Playing</span>
          </a>
        </li>
        <li>
          <a href="google.com">
            <span class="icon1">
              <ion-icon name="videocam-outline"></ion-icon>
            </span>
            <span class="title">Movies</span>
          </a>
        </li>
      </ul>
      <div onClick={handleClick} class="toggle"></div>
    </div>
  );
}
export default AppNav;
