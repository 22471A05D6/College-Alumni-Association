import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import LoginRegister from './Login-Register/Login-Register';
import Contact from './Contact/Contact';
import ContactLogo from './ContactLogo/ContactLogo';
import Footer from './Footer/Footer';
import Member from './Member/Member';
import Direct from './Direct/Direct';
import Events from './Events/Events';
import Gallery from './Gallery/Gallery';
import Cards from './Card/Card';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <ContactLogo />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/Home" replace />
            ) : (
              <LoginRegister setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Direct" element={<Direct />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
