import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './viz/Main';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Scatter from "./viz/Scatter";
import Pie from "./viz/Pie";
import Bar from "./viz/Bar";
import { QueryClient, QueryClientProvider} from 'react-query'
import Script from "./Script";
import App from "./Wraper/App";


const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          {/*<Scatter />*/}
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />}/>
                  {/*<Route path="script" element={<Script/>}/>*/}
                  {/*<Route path="/" element={<Main />} />*/}
                  {/*<Route path="scatter" element={<Scatter />} />*/}
                  {/*<Route path="bar" element={<Bar />} />*/}
                  {/*<Route path="pie" element={<Pie />} />*/}
              </Routes>
          </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
