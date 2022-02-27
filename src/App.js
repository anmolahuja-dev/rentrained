import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './components/layout/About';
import Contact from './components/layout/Contact';
import HomePage from './components/layout/HomePage';
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar';
import Signup from './components/auth/Signup';
import Store from './components/store/Store';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
