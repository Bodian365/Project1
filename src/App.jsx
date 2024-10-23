import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Games from './components/Games';

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
