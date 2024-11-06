import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import FormSesion from './components/FormSesion';
import Carga_De_Asientos from './components/Carga_De_Asientos';
import Revision_De_Asientos from './components/Revision_De_Asientos';
import Informacion from './components/Informacion';
import Resumen_Financiero from './components/Resumen_Financiero';

function App() {

  const [formDataSesion, setFormDataSesion] = useState({
    usuario: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataSesion({
      ...formDataSesion,
      [name]: value
    });
  };


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FormSesion
                formDataSesion={formDataSesion}
                handleInputChange={handleInputChange}
              />
            }
          />

          <Route
            path="/Carga-De-Asientos"
            element={<Carga_De_Asientos />} />

          <Route
            path="/Revision-De-Asientos"
            element={<Revision_De_Asientos />} />

          <Route
            path="/Informacion"
            element={<Informacion />} />

          <Route
            path="/Resumen-Financiero"
            element={<Resumen_Financiero />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
