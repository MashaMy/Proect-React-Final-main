import React from 'react';
import { } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nadet from './Nadet';
import Delat from './Delat';
import Posmotret from './Posmotret';
import Glavnaya from './Glavnaya';
import Chodit from './Chodit';
import Company from './Company';
import './App.css';

function App() {
  return (
    <Router>
      <h1 className='zagolovok'>Судьбоносный день: выбор или случайность?</h1>
      <nav>
        <Link to="/" className='link'>Главная</Link>
        <Link to="/delat" className='link'>Что мне делать?</Link>
        <Link to="/nadet" className='link'>Что надеть?</Link>
        <Link to="/posmotret" className='link'>Какой фильм посмотреть?</Link>
        <Link to="/chodit" className='link'>Куда сходить?</Link>
        <Link to="/company" className='link'>С кем пойти?</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Glavnaya />} />
        <Route path="/delat" element={<Delat />} />
        <Route path="/nadet" element={<Nadet />} />
        <Route path="/posmotret" element={<Posmotret />} />
        <Route path="/chodit" element={<Chodit />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;



