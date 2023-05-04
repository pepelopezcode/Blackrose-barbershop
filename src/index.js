import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'

import StorefrontImage from './images/old_storefront.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { StorefrontImage }; 

