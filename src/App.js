import logo from './logo.svg';
import './App.css';
import Header from './compoents/Header';
import Body from './compoents/Body';
import store from './store';
import ModeContext from './ModeContext';
import { Provider } from 'react-redux';
import { useContext, useState } from 'react';
import { Outlet } from 'react-router';
function App() {
  const cnxt = useContext(ModeContext);
  console.log('pkhkgkjgkkg ', cnxt.pageMode)
  return (
    // <Provider store={store}>
    <div className={`App ${cnxt?.pageMode?"darkApp":""}`}>
      <Body />
    </div>
    // </Provider>
    
  );
}

export default App;
