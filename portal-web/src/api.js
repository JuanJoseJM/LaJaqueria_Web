import axios from 'axios';

// Crear una instancia de axios con configuración base
const api = axios.create({
  baseURL: 'http://localhost:8080/', // Aquí va la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  }
});

// Función para obtener todos los socios
export const getSocios = async () => {
  try {
    const response = await api.get('socios');
    return response.data; // Retorna los datos de la respuesta (lista de socios)
  } catch (error) {
    console.error('Error al obtener los socios:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para realizar el login
export const login = async (usuario, password) => {
  try {
    const response = await api.post('login', { usuario, password });
    return response.data; // Retorna el objeto con el accesscode y email
  } catch (error) {
    console.error('Error de autenticación:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para crear un nuevo socio (solo accesible para administradores)
export const createSocio = async (nombre, apellidos, edad) => {
  try {
    const response = await api.post('socios', {
      nombre,
      apellidos,
      edad,
    });
    return response.data; // Retorna el nuevo socio creado
  } catch (error) {
    console.error('Error al crear el socio:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para eliminar un socio (solo accesible para administradores)
export const deleteSocio = async (idSocio) => {
  try {
    const response = await api.delete(`socios/${idSocio}`);
    return response.data; // Retorna una respuesta de éxito o mensaje de error
  } catch (error) {
    console.error('Error al eliminar el socio:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para actualizar un socio (solo accesible para administradores)
export const updateSocio = async (idSocio, nombre, apellidos, edad) => {
  try {
    const response = await api.put(`socios/${idSocio}`, {
      nombre,
      apellidos,
      edad,
    });
    return response.data; // Retorna el socio actualizado
  } catch (error) {
    console.error('Error al actualizar el socio:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para generar el informe en PDF (solo accesible para administradores)
export const generarInformeSociosPDF = async () => {
  try {
    const response = await api.get('socios/informe-pdf', {
      responseType: 'blob', // Necesitamos obtener el archivo como un blob
    });
    return response.data; // Retorna el archivo PDF generado
  } catch (error) {
    console.error('Error al generar el informe en PDF:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para obtener todos los eventos
export const getEventos = async () => {
  try {
    const response = await api.get('eventos');
    return response.data; // Retorna los eventos
  } catch (error) {
    console.error('Error al obtener los eventos:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para crear un nuevo evento (solo accesible para administradores)
export const createEvento = async (nombre, fecha, descripcion) => {
  try {
    const response = await api.post('eventos', {
      nombre,
      fecha,
      descripcion,
    });
    return response.data; // Retorna el evento creado
  } catch (error) {
    console.error('Error al crear el evento:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para eliminar un evento (solo accesible para administradores)
export const deleteEvento = async (idEvento) => {
  try {
    const response = await api.delete(`eventos/${idEvento}`);
    return response.data; // Retorna una respuesta de éxito o mensaje de error
  } catch (error) {
    console.error('Error al eliminar el evento:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para actualizar un evento (solo accesible para administradores)
export const updateEvento = async (idEvento, nombre, fecha, descripcion) => {
  try {
    const response = await api.put(`eventos/${idEvento}`, {
      nombre,
      fecha,
      descripcion,
    });
    return response.data; // Retorna el evento actualizado
  } catch (error) {
    console.error('Error al actualizar el evento:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para registrar la asistencia de un socio a un evento
export const asistirEvento = async (idEvento, idSocio) => {
  try {
    const response = await api.post(`eventos/${idEvento}/asistencia`, { idSocio });
    return response.data; // Retorna la confirmación de la asistencia
  } catch (error) {
    console.error('Error al registrar la asistencia al evento:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};

// Función para generar el informe en PDF con los asistentes de un evento (solo accesible para administradores)
export const generarInformeAsistentesEventoPDF = async (idEvento) => {
  try {
    const response = await api.get(`eventos/${idEvento}/asistentes-pdf`, {
      responseType: 'blob', // Necesitamos obtener el archivo como un blob
    });
    return response.data; // Retorna el archivo PDF generado
  } catch (error) {
    console.error('Error al generar el informe de asistentes en PDF:', error);
    throw error; // Lanzamos el error para ser manejado por el componente
  }
};
