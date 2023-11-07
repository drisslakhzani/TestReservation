import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Login from './backend/Login_auth';
import Main_dash from './backend/dashboard/Main_dash';
import PrivateRoute from './backend/dashboard/PrivateRoute'; 


function App(){

    
    return (
        <main >
        <BrowserRouter >
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/About' element={<About/>}/>  
                <Route path='/login' element={<Login/>}/>
                <Route path="/dashboard" element={<Main_dash />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </main>
        
        
    )
}
export default App