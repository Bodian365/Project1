import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Delivery from './components/Delivery/Delivery';
import Footer from './components/Footer/Footer';
import Games from './components/Games/Games';
import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';
import Payment from './components/Payment/Payment';
import Profile from './components/Profile/Profile';
import Refund from './components/Refund/Refund';
import Register from './components/Register/Register';
import Rules from './components/Rules/Rules';

const App = () => {    
    return (
        <div >
            <BrowserRouter>
                <Header/>
                {/* <Games/> */}
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/mainMenu' element={<MainMenu />} />
                        <Route path='/games' element={<Games />} />
                        <Route path='/contacts' element={<Contacts/>} />
                        <Route path='/aboutus' element={<AboutUs />} />
                        <Route path='/rules' element={<Rules />} />
                        <Route path='/delivery' element={<Delivery />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/refund' element={<Refund />} />
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                <Footer/>

            </BrowserRouter>
        </div>
    );
    
};



export default App;
