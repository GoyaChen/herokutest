import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Scatter from "./Scatter";
import Pie from "./Pie";
import Bar from "./Bar";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="scatter" element={<Scatter />} />
              <Route path="bar" element={<Bar />} />
              <Route path="pie" element={<Pie />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
