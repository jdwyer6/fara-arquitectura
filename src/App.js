import './index.css';
import LandingPage from './pages/Landing';
import InterioresHomePage from './pages/InterioresHomePage';
import InterioresAboutPage from './pages/InterioresAboutPage';
import ConstruccionHomePage from './pages/ConstruccionHomePage';
import ConstruccionAboutPage from './pages/ConstruccionAboutPage';
import ContactPage from './pages/ContactPage';
import GraciasPage from './pages/GraciasPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {

	const location = useLocation();

  return (
    <div className="App">
		{location.pathname !== '/' ? (<Navbar />) : (null)}
			<Routes>
				<Route path='/' element={<LandingPage />}/>
				<Route path='/about' element={<AboutPage />}/>
				<Route path='/interiores-home' element={<InterioresHomePage />}/>
				<Route path='/interiores-about' element={<InterioresAboutPage />}/>
				<Route path='/construccion-home' element={<ConstruccionHomePage />}/>
				<Route path='/construccion-about' element={<ConstruccionAboutPage />}/>
				<Route path='/contact' element={<ContactPage />}/>
				<Route path='/gracias' element={<GraciasPage />}/>

			</Routes>
			<Footer />


    </div>
  );
}

export default App;
