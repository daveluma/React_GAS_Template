import { Routes, Route, useSearchParams } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from './pages/Footer';
import About from './pages/About';

import { createContext, useState } from 'react';

function App() {
    const [searchParams, setSearchParams] = useSearchParams();

    return <div>
        <Navbar />
        <div className='mx-3 mt-3'>
            <Routes className='mx-3'>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </div>
        <Footer />
    </div>
}

export default App