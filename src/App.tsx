import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;