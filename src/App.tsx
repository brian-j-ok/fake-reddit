import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

import Nav from './components/Nav';
import Popup from './components/Popup';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';

const App = () => {
  return (
    <div id="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Popup />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset" element={<Reset />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App;