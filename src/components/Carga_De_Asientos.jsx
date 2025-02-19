import React, { useState } from 'react';
import Navbar_Aux_Contable from './Navbar_Aux_Contable';
import Footer from './Footer';
import { GoogleGenerativeAI } from "@google/generative-ai";

function Carga_De_Asientos() {
  // Estado para cada campo del formulario
  const [fecha, setFecha] = useState('');
  const [referencia, setReferencia] = useState('');
  const [cuentasDebe, setCuentasDebe] = useState(['']);
  const [montosDebe, setMontosDebe] = useState(['']);
  const [cuentasHaber, setCuentasHaber] = useState(['']);
  const [montosHaber, setMontosHaber] = useState(['']);
  const apiKey = 'AIzaSyCE-3NqsTFZtULkIkWNhVYfNKv8tnM7BC0'; // key gemini
  const genAI = new GoogleGenerativeAI(apiKey);


/*

  const handleDocument = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
    console.log([...formData.entries()]);

    try {
      // Enviar el archivo PDF al backend usando fetch
      const response = await fetch('http://localhost:5000/api/extract-text', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Error al extraer texto del PDF');
      }
  
      const data = await response.json();
      const text = data.text;
      console.log("aca text:", text);
  
      const prompt = `Analiza el siguiente texto y extrae los datos relevantes para el formulario. 
      En caso de que se reciba una factura, escribe:
      - Fecha de hoy
      - Referencia: "Por venta de (nombre del producto encontrado en la factura)"
      - En el select de "operacionesDebe" pon la opción "caja" o "banco" según el dato que se lea en la factura.
      - En el select de "operacionesHaber" pon la opción "Cuentas por cobrar".
      - En los inputs dentro de "operacionesDebe" y "operacionesHaber", escribe el mismo monto total de la factura.
      
      En caso de que se reciba un recibo de sueldo, escribe:
      - Fecha de hoy
      - Referencia: "Por pago de sueldo"
      - En el select de "operacionesDebe" pon la opción "salarios por pagar".
      - En el select de "operacionesHaber" pon la opción "Caja" o "banco".
      - En los inputs dentro de "operacionesDebe" y "operacionesHaber", escribe el mismo monto total del sueldo pagado.
      
      Texto para analizar: ${text}`;
  
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
  
      // Usar la IA de Gemini para analizar el texto extraído
      console.log("Llamando a la API de generación de contenido...");
      const result = await model.generateContent({ prompt });
      console.log("Respuesta de la API de generación de contenido recibida:", result);
      
      if (result && result.candidates) {
        console.log("Contenido de result:", result); // Añadir un log para verificar el contenido de 'result'

        // Analizar el contenido de 'result' para obtener los datos requeridos
        const parsedResult = result.candidates[0].content.parts[0]
          .replace('#', '')
          .replace('**', '')
          .split('\n');

        const [fecha, referencia, debeCuenta, haberCuenta, monto] = parsedResult;

        // Escribir los datos obtenidos en el formulario utilizando los estados
        setFecha(fecha.trim());
        setReferencia(referencia.trim());
        setCuentasDebe([debeCuenta.trim()]);
        setCuentasHaber([haberCuenta.trim()]);
        setMontosDebe([monto.trim()]);
        setMontosHaber([monto.trim()]);
      } else {
        console.error('No se encontraron datos en el resultado:', result);
      }
    } catch (error) {
      console.error('Error al analizar el documento:', error);
    }
  };*/
/*
  const handleDocument = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append('file', file);
    console.log([...formData.entries()]);

    try {
        // Enviar el archivo PDF al backend usando fetch
        const response = await fetch('http://localhost:5000/api/extract-text', {
            method: 'POST',
            body: formData
        });
    
        if (!response.ok) {
            throw new Error('Error al extraer texto del PDF');
        }
    
        const data = await response.json();
        const text = data.text.toLowerCase(); // Convertir texto a minúsculas para facilitar la búsqueda
        console.log("aca text:", text);

        // Analizar el texto para determinar el tipo de documento
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
        let reference = '';
        let debeCuenta = '';
        let haberCuenta = '';
        let monto = '';

        if (text.includes('factura')) {
            reference = 'Por venta de producto';
            debeCuenta = 'caja';
            haberCuenta = 'cuentas por cobrar';
            monto = extractMonto(text); // Función para extraer el monto

            setFecha(formattedDate);
            setReferencia(reference);
            setCuentasDebe([debeCuenta]);
            setCuentasHaber([haberCuenta]);
            setMontosDebe([monto]);
            setMontosHaber([monto]);
        } else if (text.includes('sueldo')) {
            reference = 'Por pago de sueldo';
            debeCuenta = 'salarios por pagar';
            haberCuenta = 'caja';
            monto = extractMonto(text); // Función para extraer el monto

            setFecha(formattedDate);
            setReferencia(reference);
            setCuentasDebe([debeCuenta]);
            setCuentasHaber([haberCuenta]);
            setMontosDebe([monto]);
            setMontosHaber([monto]);
        } else {
            console.error('No se pudo identificar el tipo de documento en el texto:', text);
        }
    } catch (error) {
        console.error('Error al analizar el documento:', error);
    }
};

// Función para extraer el monto del texto
const extractMonto = (text) => {
    const regex = /total\s*[:$]?\s*(\d+[\.,]?\d*)/i;
    const match = text.match(regex);
    return match ? match[1].replace(',', '.') : '0'; // Convertir coma a punto si es necesario
};
*/
const handleDocument = async (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);
  console.log([...formData.entries()]);

  try {
      // Enviar el archivo PDF al backend usando fetch
      const response = await fetch('http://localhost:5000/api/extract-text', {
          method: 'POST',
          body: formData
      });
  
      if (!response.ok) {
          throw new Error('Error al extraer texto del PDF');
      }
  
      const data = await response.json();
      const text = data.text.toLowerCase(); // Convertir texto a minúsculas para facilitar la búsqueda
      console.log("aca text:", text);

      // Analizar el texto para determinar el tipo de documento
      const today = new Date();
      const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
      let reference = '';
      let debeCuenta = '';
      let haberCuenta = '';
      let monto = '';

      if (text.includes('factura')) {
          reference = 'Por venta de producto';
          debeCuenta = 'caja';
          haberCuenta = 'cuentas por cobrar';
          monto = extractMonto(text, 'total'); // Función para extraer el monto
          console.log("\n\n acaaaaa MONTO FUERA DE FUNCION",monto);

          setFecha(formattedDate);
          setReferencia(reference);
          setCuentasDebe([debeCuenta]);
          setCuentasHaber([haberCuenta]);
          setMontosDebe([monto]);
          setMontosHaber([monto]);
      } else if (text.includes('sueldo')) {
          reference = 'Por pago de sueldo';
          debeCuenta = 'salarios por pagar';
          haberCuenta = 'caja';
          monto = extractMonto(text, 'líquido a cobrar'); // Función para extraer el monto
          console.log("\n\n acaaaaa MONTO FUERA DE FUNCION",monto);

          setFecha(formattedDate);
          setReferencia(reference);
          setCuentasDebe([debeCuenta]);
          setCuentasHaber([haberCuenta]);
          setMontosDebe([monto]);
          setMontosHaber([monto]);
      } else {
          console.error('No se pudo identificar el tipo de documento en el texto:', text);
      }
  } catch (error) {
      console.error('Error al analizar el documento:', error);
  }
};

// Función para extraer el monto del texto
const extractMonto = (text, keyword) => {
  // Aseguramos que la palabra clave sea independiente (no parte de otra palabra)
  const regex = new RegExp(`\\b${keyword}\\b\\s*[:\\-]?\\s*[$]?\\s*([0-9]+(?:[.,][0-9]{3})*(?:[.,][0-9]{2})?)`, 'i');
  const match = text.match(regex);

  if (match) {
      console.log(`✅ Coincidencia encontrada para "${keyword}":`, match[1]);

      // Normalizar el formato numérico
      let monto = match[1].replace(/\./g, '').replace(',', '.'); // Quita separadores de miles y ajusta el decimal
      return monto;
  }

  console.log(`❌ No se encontró "${keyword}" en el texto.`);
  return '0';
};





  


  // Handlers para manejar cada input
  const handleFechaChange = (e) => setFecha(e.target.value);
  const handleReferenciaChange = (e) => setReferencia(e.target.value);

  // Función para agregar y eliminar inputs dinámicos
  const addInput = (array, setArray) => {
    setArray([...array, '']);
  };

  const removeInput = (array, setArray) => {
    if (array.length > 1) {
      setArray(array.slice(0, -1));
    }
  };

  // Función para manejar el cambio en inputs dinámicos
  const handleDynamicInputChange = (index, value, array, setArray) => {
    const newArray = [...array];
    newArray[index] = value;
    setArray(newArray);
  };

  const handleLimpiar = () => {
    setFecha('');
    setReferencia('');
    setCuentasDebe(['']);
    setMontosDebe(['']);
    setCuentasHaber(['']);
    setMontosHaber(['']);
  };

  const handleGuardar = () => {

  const todosLosCamposCompletos = fecha && referencia &&
  cuentasDebe.every(cuenta => cuenta.trim() !== '') &&
  montosDebe.every(monto => monto.trim() !== '') &&
  cuentasHaber.every(cuenta => cuenta.trim() !== '') &&
  montosHaber.every(monto => monto.trim() !== '');

if (!todosLosCamposCompletos) {
  alert("Por favor, completa todos los campos antes de guardar.");
  return;
}
    if (window.confirm("¿Deseas guardar este asiento contable?")) {
      const detalles = [
        ...cuentasDebe.map((cuenta, index) => ({
          cuenta_id: cuenta,
          tipo_movimiento: 'debe',
          monto: montosDebe[index],
        })),
        ...cuentasHaber.map((cuenta, index) => ({
          cuenta_id: cuenta,
          tipo_movimiento: 'haber',
          monto: montosHaber[index],
        })),
      ];

      const asientoData = {
        fecha,
        descripcion: referencia,
        detalles,
      };
      // Enviar datos al backend
      fetch('http://localhost:5000/asientos/guardarAsiento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(asientoData),
      }).then(response => {
        if (response.ok) {
          alert("Asiento guardado con éxito");
          handleLimpiar();
        } else {
          alert("Hubo un error al guardar el asiento");
        }
      });
    }
  };

  return (
    <>
      <Navbar_Aux_Contable />
      <main className="Main-Aux-Contable">
        <section className="Contenedor-Formulario-Carga-Asientos">
          <h2 className="H2-Form-Carga-Asientos">Carga de Asientos</h2>
          <div className='contenedor-carga-documento'>
            <input type="file" onChange={handleDocument} className="buttonGuardar" />
            </div>
          <form className="form-carga-asiento">
            <div className="form-seccion1">
              <div className="contenedor-fecha">
                <input
                  type="date"
                  value={fecha}
                  onChange={handleFechaChange}
                  className="input-form-fecha"
                  required
                />
                <input
                  type="text"
                  placeholder="REFERENCIA"
                  value={referencia}
                  onChange={handleReferenciaChange}
                  className="input-form-referencia"
                  required
                />
              </div>

              <div className="contenedor-operaciones">
                <div className="operacionesDebe">
                  {cuentasDebe.map((cuenta, index) => (
                    <select
                      key={index}
                      value={cuenta}
                      onChange={(e) =>
                        handleDynamicInputChange(index, e.target.value, cuentasDebe, setCuentasDebe)
                      }
                      className="input-form-debe"
                      required
                    >
                      <option value="">Cuenta</option>
                      <option value="caja">Caja</option>
                      <option value="banco CC">Banco</option>
                      <option value="inventario">Inventario</option>
                      <option value="salarios por pagar">Salarios por pagar</option>
                      <option value="proveedores">Proveedores</option>
                      <option value="prestamo bancario">Préstamo bancario</option>

                      {/*
                      <option value="cuentas por cobrar">Cuentas por cobrar</option>
                      <option value="CPC servicios">CPC servicios</option>
                      <option value="inversiones CP">Inversiones CP</option>
                      <option value="prov gastos">Prov. gastos</option>*/}
                      
                      
                    </select>
                  ))}
                  
                </div>
                <div className='botones-debe'>
                  <button type="button" className='buttonDebe' onClick={() => addInput(cuentasDebe, setCuentasDebe)}>
                    Añadir
                  </button>
                  <button type="button" className='buttonDebe' onClick={() => removeInput(cuentasDebe, setCuentasDebe)}>
                    Borrar
                  </button>
                  </div>

                <div className="operacionesHaber">
                  {cuentasHaber.map((cuenta, index) => (
                    <select
                      key={index}
                      value={cuenta}
                      onChange={(e) =>
                        handleDynamicInputChange(index, e.target.value, cuentasHaber, setCuentasHaber)
                      }
                      className="input-form-haber"
                      required
                    >
                      <option value="">Cuenta</option>
                      <option value="cuentas por cobrar">Cuentas por cobrar</option>
                      <option value="CPC servicios">CPC servicios</option>
                      <option value="inversiones CP">Inversiones CP</option>
                      <option value="caja">Caja</option>
                      <option value="banco CC">Banco</option>


                      {/*
                      <option value="inventario">Inventario</option>
                      <option value="proveedores">Proveedores</option>
                      <option value="salarios por pagar">Salarios por pagar</option>
                      <option value="prestamo bancario">Préstamo bancario</option>
                      <option value="prov gastos">Prov. gastos</option>*/}
                    </select>
                  ))}
                </div>

                <div className='botones-haber'>
                  <button type="button" className='buttonHaber' onClick={() => addInput(cuentasHaber, setCuentasHaber)}>
                    Añadir
                  </button>
                  <button type="button" className='buttonHaber' onClick={() => removeInput(cuentasHaber, setCuentasHaber)}>
                    Borrar
                  </button>
                  </div>

              </div>

              <div className="contenedor-valores">
                <div className="operacionesDebe">
                  {montosDebe.map((monto, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="MONTO"
                      value={monto}
                      onChange={(e) =>
                        handleDynamicInputChange(index, e.target.value, montosDebe, setMontosDebe)
                      }
                      className="input-form-debe"
                      required
                    />
                  ))}
                  <div className='botones-debe'>
                  <button type="button" className='buttonDebe' onClick={() => addInput(montosDebe, setMontosDebe)}>
                    Añadir
                  </button>
                  <button type="button" className='buttonDebe' onClick={() => removeInput(montosDebe, setMontosDebe)}>
                    Borrar
                  </button>
                  </div>
                </div>

                <div className="operacionesHaber">
                  {montosHaber.map((monto, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder="MONTO"
                      value={monto}
                      onChange={(e) =>
                        handleDynamicInputChange(index, e.target.value, montosHaber, setMontosHaber)
                      }
                      className="input-form-haber"
                      required
                    />
                  ))}
                </div>

                <div className='botones-haber'>
                  <button type="button" className='buttonHaber' onClick={() => addInput(montosHaber, setMontosHaber)}>
                    Añadir
                  </button>
                  <button type="button" className='buttonHaber' onClick={() => removeInput(montosHaber, setMontosHaber)}>
                    Borrar
                  </button>
                  </div>

              </div>
            </div>

            <div className="form-seccion2">
              <button type="button" onClick={handleGuardar} className="buttonGuardar">
                Guardar
              </button>
              <button type="button" onClick={handleLimpiar} className="buttonLimpiar">
                Limpiar
              </button>
            </div>
          </form>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default Carga_De_Asientos;
