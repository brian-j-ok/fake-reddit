import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Homepage from './components/Homepage';

import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Reset" element={<Reset />} />
      </Routes>
    </Router>
  )
}

export default App;