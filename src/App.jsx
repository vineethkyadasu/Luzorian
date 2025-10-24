import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import MedicalScribing from './pages/MedicalScribing';
import MedicalCoding from './pages/MedicalCoding';
import MedicalBilling from './pages/MedicalBilling';
import HealthcareDataAnalytics from './pages/HealthcareDataAnalytics';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './pages/ScrollToTop';
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/medical-scribing" element={<MedicalScribing />} />
          <Route path="/services/medical-coding" element={<MedicalCoding />} />
          <Route path="/services/medical-billing" element={<MedicalBilling />} />
          <Route path="/services/healthcare-data-analytics" element={<HealthcareDataAnalytics />} />
          <Route path="/EMR/EHR" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;