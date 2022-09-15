import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// el css:
import '../src/normalize.css'
import '../src/App.css'
// el layout:
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
// los sitios web:
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import GaleriaPage from './pages/GaleriaPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='galeria' element={<GaleriaPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>


      <Footer />
    </div>
  );
}

export default App;