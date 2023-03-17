import './index.css';
import LandingPage from './pages/Landing';
import InterioresHomePage from './pages/InterioresHomePage';
import InterioresAboutPage from './pages/InterioresAboutPage';
import ConstruccionHomePage from './pages/ConstruccionHomePage';
import ConstruccionAboutPage from './pages/ConstruccionAboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import GraciasPage from './pages/GraciasPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';


function App() {

	const [section, setSection] = useState(0);
	const location = useLocation();

  return (
    <div className="App">
		{location.pathname !== '/' ? (<Navbar section={section} />) : (null)}
			<Routes>
				<Route path='/' element={<LandingPage setSection={setSection}/>}/>
				<Route path='/about' element={<AboutPage />}/>
				<Route path='/interiores-home' element={<InterioresHomePage />}/>
				<Route path='/interiores-about' element={<InterioresAboutPage />}/>
				<Route path='/construccion-home' element={<ConstruccionHomePage />}/>
				<Route path='/construccion-about' element={<ConstruccionAboutPage />}/>
				<Route path='/gallery' element={<GalleryPage />}/>
				<Route path='/contact' element={<ContactPage />}/>
				<Route path='/gracias' element={<GraciasPage />}/>

			</Routes>
			<Footer />


    </div>
  );
}

export default App;
