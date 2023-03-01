import './App.css';
import { BrowserRouter as Router , Route, Routes , Link } from 'react-router-dom'
import BasicExample from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import CarsPage from './Pages/Cars';

function App() {
  return (
    <>
      <Router>
      <BasicExample/>
        <Routes>
        <Route path='/home' element = {<Home/>} />
        <Route path='/cars' element = {<CarsPage/>} />

        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
