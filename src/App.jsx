import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home'; 
import Login from './Login';
import Navbar from './Navbar'; // Asegúrate de tener este archivo y ruta correctos

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
