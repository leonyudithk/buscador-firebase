import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AgregarCita from '../components/AgregarCita';
import Home from '../components/Home';
import NavBars from '../components/NavBars';

const DashboardRouters = () => {
    return (
        <>
        <NavBars />
        <Routes>
        <Route path="/" element={<Home/>}/>
           <Route path="/add" element={<AgregarCita/>}/>
        </Routes>
    </>
    );
};

export default DashboardRouters;