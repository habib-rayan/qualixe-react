import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/about/PageAbout';
import Services from './pages/services/PageServices';
import Portfolio from './pages/portfolio/PagePortfolio';
import Contact from './pages/contact/PageContact';
import Footer from './components/Footer';
import Ribon from './components/Ribon';
import Demo from './pages/demo/PageDemo';
import WhatsAppChat from './components/whatsappChat';

function App() {
  return (
    <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/demo" element={<Demo />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Ribon />
        <Footer />
        <WhatsAppChat />
    </BrowserRouter> 
  );  
}

export default App;
