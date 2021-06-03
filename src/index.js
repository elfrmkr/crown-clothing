import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';

/*Provider is the parent of everything in the app, gets access to all of the things get related to the store*/
ReactDOM.render(
<Provider store = {store}>
  <BrowserRouter>
    <PersistGate persistor = {persistor}>  
      <App />
    </PersistGate>  
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);

