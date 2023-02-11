import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import NotFound from './NotFound';
import Home from './Home';

import { store } from '../app/store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
function WrappedApp() {
  return (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
}

export default WrappedApp;
