import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUpModal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Use the element prop */}
        <Route path="/signup" element={<SignUp />} /> {/* Use the element prop */}
        <Route path="/" element={<h1>Welcome to My App</h1>} /> {/* Use the element prop */}
      </Routes>
    </Router>
  );
};

export default App;