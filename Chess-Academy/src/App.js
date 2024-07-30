import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Plans from './components/Plans';
import Courses from './components/Courses';
import Tournaments from './components/Tournaments';
import Login from './components/Login';
import Signup from './components/Signup'; 
import theme from './theme';
import Admin from './components/Admin';
import { AuthProvider } from './components/AuthContext';
function App() {
  return (
    <AuthProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/courses" element={<Courses />} />

        </Routes>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
