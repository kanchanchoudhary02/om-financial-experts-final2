import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Approach from './pages/Approach.jsx';
import Commitment from './pages/Commitment.jsx';
import JoinUs from './pages/JoinUs.jsx';
import CareerApplication from './pages/CareerApplication.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';
import { LangProvider, LanguageGate } from './i18n.jsx';
import './styles.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/our-approach" element={<Approach />} />
        <Route path="/our-commitment" element={<Commitment />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/career-opportunities" element={<CareerApplication />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <LanguageGate />
    </LangProvider>
  </React.StrictMode>
);
