export const iniciarSesion = (req, res) => {
    const { usuario, password } = req.body;
  
    // Aquí va la llamada a la base de datos o lo que viene de ahi?
    if (usuario === 'admin' && password === '1234') {
      res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ mensaje: 'Datos incorrectos' });
    }
  };
  