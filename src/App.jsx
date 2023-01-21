import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar} from './Components/Navbar'
import Catalogo from './Pages/Catalogo';
import Historia from './Pages/Historia';
import FormCake from './Components/FormCake';
import Contacto from './Pages/Contacto';
import Index from './Pages/Home/Index';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar estado={false} />

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/catalogo' element={<Catalogo title='Catalogo' />} />
        <Route path='/historia' element={<Historia title='Historia' />} />
        <Route path='/contacto' element={<Contacto title='Contacto' />} />
        <Route path='/cake/:id' element={<FormCake />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
