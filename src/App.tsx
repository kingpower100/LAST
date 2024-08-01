import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/acceuil';
import Entretien from './pages/entretien';
import Offre from './pages/Offre';
import Profile from './pages/Profile';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import Reccomendations from './pages/reccomendations';
import { ChakraProvider } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {


  return (
    <>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage/>}/>
          <Route path='/Signuppage' element={<Signuppage/>}/>
          <Route path='/Acceuil' element={<Acceuil/>}/>
          <Route path='/Entretien' element={<Entretien/>}/>
          <Route path='/Offre' element={<Offre/>} />
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Reccomendation' element={<Reccomendations/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>

    </>
      
    );
};

export default App
