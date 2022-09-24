import { Routes, Route } from "react-router-dom";

import './styles/App.css';

import Nav from './components/nav/Nav';
import Popup from './components/popup/Popup';
import Login from './components/popup/Login';
import Register from './components/popup/Register';
import Reset from './components/popup/Reset';

const App = () => {
  return (
    <div id="app">
      <Nav />

      <Routes>
        <Route path="/popup" element={<Popup />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset" element={<Reset />} />
        </Route>
      </Routes>
    </div>

  )
}

export default App;