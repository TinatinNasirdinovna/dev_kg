import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Vacancies from './components/Vacancies/Vacancies';
import Eventes from './components/Eventes/Events';
import Videoss from './components/Videoss/Videoss';
import Organizations from './components/Organizations/Organizations';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='vacancies' element={<Vacancies/>}/>
      <Route path='eventes' element={<Eventes/>}/>
      <Route path='videoss' element={<Videoss/>}/>
      <Route path='organizations' element={<Organizations/>}/>
      <Route path='community' element={<Community/>}/>
      <Route path='hero' element={<Hero />}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
