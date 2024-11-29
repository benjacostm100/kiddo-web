import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import QuienesSomos from './Pages/QuienesSomos';
import Home from './Pages/Home';
import Ubicaciones from './Pages/Ubicaciones';
import Contacto from './Pages/Contacto';
import Menus from './Pages/Menus';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/quienes-somos" element={<QuienesSomos></QuienesSomos>} />
        <Route path="/ubicaciones" element={<Ubicaciones></Ubicaciones>} />
        <Route path="/contacto" element={<Contacto></Contacto>} />
        <Route path="/menu" element={<Menus></Menus>} />

        
        
      </Routes>
    </Router>
  );
};

export default App;
