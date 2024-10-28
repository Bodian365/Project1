import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Games from './components/Games';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import Profile from './components/Profile';

const App = () => {    
    return (
        <div className='wrapper'>
            <BrowserRouter>
                 <Header/>
                 <MainMenu/>
                    <Routes>
                         <Route path='profile' element={<Profile />} />
                         <Route path='mainMenu' element={<MainMenu />} />
                         <Route path='games' element={<Games />} />
                     </Routes>
                <Footer/>

             </BrowserRouter>
        </div>
    );
    
};



export default App;
