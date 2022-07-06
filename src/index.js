import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHobbies from './AppHobbies/AppHobbies';
import AppFooter from './AppFooter/AppFooter';
import AppTest from './AppTest/AppTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTest name="adrian" comment="can i get a hoooya!" />
    <AppTest name="estopace" comment="hooooooyaa!!" />
    <AppTest name="test1" comment="oooh yea" />
    <App />
    <AppHobbies />
    <AppFooter />
    {/* <AppNav /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
