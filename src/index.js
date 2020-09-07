import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { configureStoreAsync } from './store/store';

configureStoreAsync().then(result => {
  ReactDOM.render(
    <Provider store={result}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
});
