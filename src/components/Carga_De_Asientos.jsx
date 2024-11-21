import React, { useState } from 'react';
import Navbar_Aux_Contable from './Navbar_Aux_Contable';
import Footer from './Footer';

function Carga_De_Asientos() {
  // Estado para cada campo del formulario
  const [fecha, setFecha] = useState('');
  const [referencia, setReferencia] = useState('');
  const [cuentasDebe, setCuentasDebe] = useState(['']);
  const [montosDebe, setMontosDebe] = useState(['']);
  const [cuentasHaber, setCuentasHaber] = useState(['']);
  const [montosHaber, setMontosHaber] = useState(['']);

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
                      <option value="cuentas por cobrar">Cuentas por cobrar</option>
                      <option value="CPC servicios">CPC servicios</option>
                      <option value="inversiones CP">Inversiones CP</option>
                      <option value="proveedores">Proveedores</option>
                      <option value="salarios por pagar">Salarios por pagar</option>
                      <option value="prestamo bancario">Préstamo bancario</option>{/*
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
                      <option value="caja">Caja</option>
                      <option value="banco CC">Banco</option>
                      <option value="inventario">Inventario</option>
                      <option value="cuentas por cobrar">Cuentas por cobrar</option>
                      <option value="CPC servicios">CPC servicios</option>
                      <option value="inversiones CP">Inversiones CP</option>
                      <option value="proveedores">Proveedores</option>
                      <option value="salarios por pagar">Salarios por pagar</option>
                      <option value="prestamo bancario">Préstamo bancario</option>{/*
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
