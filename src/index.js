import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';

import DrinkList from './components/DrinkList/DrinkList';
import Drink from './components/Drink/Drink';
import Random from './components/Random/Random';
import Search from './components/Search/Search';
import About from './components/About/About';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router basename='/'>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<DrinkList />} />
        <Route path="/drink/:drinkId" element={<Drink />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </Router>
)