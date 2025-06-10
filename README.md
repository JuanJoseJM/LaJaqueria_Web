# 🖥️ Panel Web – E-Management

El **Panel Web de E-Management** es una aplicación administrativa diseñada para gestionar las operaciones internas de un espacio de coworking. Esta interfaz está pensada para el uso exclusivo de los administradores del sistema.

---

## 🎯 Propósito general

Desde esta plataforma web, los administradores pueden:

- 👥 Gestionar usuarios (socios y administradores)
- 📅 Crear y editar eventos
- 💳 Consultar cuotas y pagos
- 💡 Controlar dispositivos inteligentes del coworking (domótica)
- 🔐 Gestionar accesos y roles

Toda la información se sincroniza en tiempo real con la API REST central y es compartida con la aplicación móvil de los socios.

---

## 👤 Manual para el usuario administrador

### 1. Iniciar sesión

- Accede al panel desde tu navegador.
- Introduce tus credenciales de administrador.
- Si los datos son correctos, accederás al panel principal.

---

### 2. Panel principal

Desde el dashboard puedes acceder a los distintos módulos:

#### 👥 Gestión de Usuarios

- Ver lista de socios registrados
- Crear, editar o eliminar socios
- Asignar roles (admin/socio)

#### 📅 Eventos

- Crear nuevos eventos
- Ver eventos existentes
- Consultar socios inscritos

#### 💳 Cuotas

- Revisar pagos registrados
- Ver cuotas pendientes o completadas
- Asociar cuotas a usuarios

#### 💡 Domótica

- Encender/apagar dispositivos del espacio
- Controlar funciones como iluminación, puertas, etc.
- Solo visible si tienes rol de **administrador**

---

### 3. Cerrar sesión

Puedes cerrar tu sesión desde el botón disponible en la esquina superior o en el menú de usuario.

---

## 🛠️ Requisitos técnicos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Usuario registrado con rol de administrador
- Conexión a internet

---

## 🔐 Seguridad

- Acceso restringido solo a administradores
- Todas las operaciones requieren autenticación con token JWT
- Acciones críticas (borrar, modificar) están protegidas

---

## 📬 Soporte

En caso de errores o necesidades especiales, contactar al desarrollador del sistema o al administrador principal del coworking.