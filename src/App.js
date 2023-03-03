import './index.css';
import LandingPage from './pages/Landing';
import Navigation from './components/Navbar';
import LandingPageNavbar from './components/LandingPageNavbar';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
			{/* <Navigation /> */}
			{/* <LandingPageNavbar /> */}
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				{/* <Route path='services' element={<ServicesPage />}/>
				<Route path='about' element={<AboutPage />}/>
				<Route path='contact' element={<ContactPage />}/>
				<Route path='gallery' element={<GalleryPage />}/> */}
			</Routes>
			<Footer />


    </div>
  );
}

export default App;
