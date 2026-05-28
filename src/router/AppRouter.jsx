import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reformasi from '../pages/Reformasi';
import Comparison from '../pages/Comparison';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reformasi" element={<Reformasi />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
    </BrowserRouter>
  );
}