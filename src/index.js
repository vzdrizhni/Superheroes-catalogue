import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';
import { Provider } from 'react-redux';
import { configureStoreAsync } from "../src/store/store";


configureStoreAsync().then(result => {
  ReactDOM.render(
    <Provider store={result}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})

