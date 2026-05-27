import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './navbar';
import Home from './home';
import Login from './login';
import Signup from './signup';

function App() {
  return (
    <BrowserRouter>

      <div className="bg-white border rounded-md min-h-screen">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Home/>} />
          <Route path="/skills" element={<Home />}/>
          <Route path="/contact" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
         <Route path="/signup" element={<Signup />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;