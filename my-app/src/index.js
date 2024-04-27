import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { defaultConfig } from '@episerver/content-delivery';
import authService from './authService';

// Function to set Episerver configuration
const setConfig = () => {
  defaultConfig.apiUrl = `${process.env.REACT_APP_CONTENT_DELIVERY_API}/api/episerver/v3.0`;
  defaultConfig.getAccessToken = () => authService.getAccessToken();
  defaultConfig.selectAllProperties = true;
  defaultConfig.expandAllProperties = true;

  // Check if we're in edit or preview mode
  if (window.location.href.includes('epieditmode') || document.location.search.includes('epieditmode')) {
    // Create a script element for communicationinjector.js
    const scriptElement = document.createElement('script');
    scriptElement.src = `${process.env.REACT_APP_CONTENT_DELIVERY_API}/episerver/cms/latest/clientresources/communicationinjector.js`;

    // Append the script element to the document body
    document.body.appendChild(scriptElement);
    console.log(defaultConfig);
  }
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {setConfig()}
    <App windowEpi={window.epi} />
  </React.StrictMode>
);
