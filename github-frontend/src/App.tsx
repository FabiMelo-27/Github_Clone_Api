import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Profile from './pages/Profile';
import Footer from "./components/Footer";

import { ThemeName, themes } from './styles/themes';

function App() {

const [themeName, setThemeName] = useState<ThemeName>('light');
const currentTheme = themes[themeName];

  return (
   <ThemeProvider theme={currentTheme}>
     <BrowserRouter>
     <Header themeName={themeName} setThemeName={setThemeName} /> 

      <Routes> 
        <Route path="/" element={<Profile/>}/> 
        <Route path="/:username" element={<Profile/>}/>        
      </Routes> 

         <Footer/> 

         <GlobalStyles/> 
    </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;