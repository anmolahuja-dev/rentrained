import './App.css';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import HomePage from './components/layout/HomePage';
import Login from './components/auth/Login'
import Navbar from './components/layout/Navbar';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <HomePage/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Login/> */}
      <Signup/>
    </div>
  );
}

export default App;
