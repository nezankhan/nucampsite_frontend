import React from 'react';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { useDispatch } from 'react-redux';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';


function App() {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchCampsites());
  dispatch(fetchPartners());
  dispatch(fetchPromotions());
}, [dispatch]);
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route
          path='about'
          element={<AboutPage />}
        />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />



      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
