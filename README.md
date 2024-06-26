# Calorie Tracker

Este es un proyecto web que permite realizar un cálculo de las calorías consumidas y quemadas, según los elementos que se vayan ingresando. El proyecto permite editar, cortar, eliminar datos y todo se almacena en el `localStorage`. Además, cuenta con un modo oscuro y se adapta a dispositivos móviles.

## Funcionalidades

- **Cálculo de Calorías:** Permite registrar y calcular calorías consumidas y quemadas.
- **Gestión de Datos:** Posibilidad de editar, cortar y eliminar registros de calorías.
- **Almacenamiento Local:** Los datos se almacenan en `localStorage` para persistencia entre sesiones.
- **Modo Oscuro:** Incluye un modo oscuro para una mejor visualización en entornos con poca luz.
- **Responsive:** La interfaz se adapta a dispositivos móviles para una experiencia de usuario óptima en cualquier dispositivo.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS:** Framework de CSS para diseño estilizado y responsivo.
- **TypeScript:** Lenguaje de programación que añade tipos estáticos a JavaScript.
- **uuidv4:** Biblioteca para generar identificadores únicos universales (UUID).
- **Vite:** Herramienta de desarrollo frontend rápida y moderna.
- **useReducer:** Hook de React para manejar el estado y la lógica del reducer.
- **react-icons:** Biblioteca de iconos para React.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue los siguientes pasos:

### Prerrequisitos

Asegúrate de tener instalado Node.js y npm en tu máquina.

### Pasos de Instalación

1. **Clonar el repositorio:**

   ``
   git clone https://github.com/tu-usuario/calorie-tracker.git
   cd calorie-tracker``
   
2. **Instalar las dependencias:**

   ``
   npm install
   ``
   
3. **Ejecutar la aplicación:**

   ``
   npm run dev
 ``
Esto iniciará el servidor de desarrollo y podrás ver la aplicación en http://localhost:3000.

## Uso
1. **Agregar Calorías:** Utiliza el formulario para agregar nuevas calorías consumidas o quemadas.
2. **Editar Registros:** Haz clic en el botón de editar para modificar un registro existente.
3. **Eliminar Registros:** Haz clic en el botón de eliminar para quitar un registro de la lista.
4. **Modo Oscuro:** Usa el botón de cambio de tema para alternar entre el modo claro y oscuro.
5. **Persistencia de Datos:** Los datos se guardan automáticamente en el localStorage y se cargan al recargar la página.

## Contribuir
Las contribuciones son bienvenidas. Si tienes alguna sugerencia o encuentras un error, por favor abre un issue o envía un pull request.
