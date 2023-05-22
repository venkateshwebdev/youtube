import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './compoents/Body';
import VideoPage from './VideoPage';
import { Provider } from 'react-redux';
import store from './store';
import Header from './compoents/Header';
import SearchResults from './SearchResults';
import VideoContaier from './compoents/VideoContainer';
import ModeContext from './ModeContext';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<VideoContaier />
    },{
      path:"search/:id",
      element:<SearchResults />
    },{
      path:"watch/:id",
      element:<VideoPage />
    }
  ]
  }
])

const Norm = () => {
  const [page, setPage] = useState(false);

  return    <ModeContext.Provider value={{pageMode: page,setPageMode: setPage}}>
  <Provider store={store} >
  <RouterProvider router={router} />
  </Provider>
  </ModeContext.Provider>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Norm />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
