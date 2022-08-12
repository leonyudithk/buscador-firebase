import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { PublicRouter } from './PublicRouter';
import Login from '../components/Login';
import { PrivateRouter } from './PrivateRouter';
import DashboardRouters from './DashboardRouters';
import Register from '../components/Register'


const AppRouters = () => {
    const [cheking, setCheking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] =useState(false)

    useEffect(()=>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
                console.log(user)
                setIsLoggedIn(true)

                user.getIdToken()
                .then((token)=>{console.log('el token es: ', token)})
            }
            else{
                setIsLoggedIn(false)  
            }
            setCheking(false)
        })
    }, [setIsLoggedIn, setCheking])

    if(cheking) {
        return (
            <div  style={{margin: '20%', marginLeft: '30%', marginRight: '30%'}}>
                           <Spinner  animation="border" variant="primary" role="status">
                                 <span className="visually-hidden">Loading...</span>
                            </Spinner>
            </div>
 
         
        )
    }
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={
                    <PublicRouter isAutentication={isLoggedIn}>
                        <Login />
                    </PublicRouter>

                } />

                <Route path="/register" element={
                    <PublicRouter isAutentication={isLoggedIn}>
                        <Register/>
                    </PublicRouter>

                } />


                <Route path="/*" element={
                    <PrivateRouter isAutentication={isLoggedIn}>
                        <DashboardRouters />
                    </PrivateRouter>
                } />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouters;