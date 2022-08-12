import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AgregarCita from '../components/AgregarCita';
import Home from '../components/Home';
import NavBars from '../components/NavBars';
import Search from '../components/Search'

const DashboardRouters = () => {
    return (
        <>
        <NavBars />
        <Routes>
        <Route path="/" element={<Home/>}/>
           <Route path="/add" element={<AgregarCita/>}/>
           <Route path="/buscar" element={<Search/>}/>
        </Routes>
    </>
    );
};

export default DashboardRouters;