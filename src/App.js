import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navbar';
import ServicesPage from './pages/ServicesPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />}/>
				<Route path='services' element={<ServicesPage />}/>
				<Route path='about' element={<AboutPage />}/>
				<Route path='contact' element={<ContactPage />}/>
				<Route path='gallery' element={<GalleryPage />}/>
			</Routes>
			<Footer />


    </div>
  );
}

export default App;
