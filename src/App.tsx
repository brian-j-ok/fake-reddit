import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App;