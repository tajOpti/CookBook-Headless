import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { defaultConfig } from '@episerver/content-delivery';
import authService from './authService';
import { Provider } from 'react-redux';
// import { updateContext } from './store/actions';
// import { updateModelByUrl } from './store/actions';


function App() {

  console.log("effffffrf", window.epi);
  //const dispatch = useDispatch();

  useEffect(() => {
    const setContext = () => {
      const inEditMode = window.epi?.inEditMode || false;
      const isEditable = window.epi?.isEditable || false;;

      console.log(isEditable, inEditMode);
      if (isEditable && (window.epi != undefined)) {
        window.epi.subscribe('contentSaved', (message) => {
          const previewUrl = new URL(message.previewUrl);
          dispatch(updateModelByUrl(previewUrl.pathname + previewUrl.search + previewUrl.hash));
        });
      }
    }
    setContext();
  }, [])





  var count = 0;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
