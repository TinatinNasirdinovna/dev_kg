import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vacancy from '../../pages/Vacancy';
import Event from '../../pages/Event';
import Video from '../../pages/Video';
import Organizations from '../../pages/Organizations';
import Community from '../../pages/Community';
import Vacancies from '../../pages/Vacancy';
import DetailPage from '../../pages/DetailPage';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Vacancies/>}/>
                <Route path='/events' element={<Event/>}/>
                <Route path='/video' element={<Video/>}/>
                <Route path='/organization' element={<Organizations/>}/>
                <Route path='/community' element={<Community/>}/>
                <Route path='/detail' element={<DetailPage/>}/>
            </Routes>
        </div>
    );
};

export default Main;