import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import FormSesion from './components/FormSesion';
import PaginaPrincipal from './components/PaginaPrincipal';

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
            path="/pagina-principal"
            element={<PaginaPrincipal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
