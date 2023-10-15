import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-datepicker/dist/react-datepicker.css";
import PrintContext from './components/Context';
<script src="https://kit.fontawesome.com/71d970e842.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrintContext>
      <App />
    </PrintContext>
  </React.StrictMode>
);
