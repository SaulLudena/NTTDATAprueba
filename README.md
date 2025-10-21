Hola, esta es mi experiencia con Next.js, Tailwind CSS y Axios

Este proyecto es una demostración simple de mi experiencia utilizando **Next.js**, **Tailwind CSS** y **Axios** para consumir la api de random persons

---

## 1 Tecnologías Utilizadas

* **Next.js** → Framework de react muy intuitivo y facil de utilizar y que utilizaré como frontend exclusivamente
* **Tailwind CSS** → La libreria de estilizado que he estado utilziando desde hace muchos años
* **Axios** → Libreria que utilizo para hacer peticiones HTTP de distintos tipos en mi aplicación
---

## 💡 Características del Proyecto

* Consumo de una API pública (`randomuser.me`).
* Uso de **fetch con Axios** y manejo de promesas con `async/await`.
* Diseño responsivo con **Tailwind CSS**.
* Código organizado y fácil de mantener.

---

## 🧩 Estructura del Proyecto

```
📁 src
 ┣ 📁 pages
 ┃ ┣ 📄 app.jsx       # Página principal
 ┃ ┗ 📄 document.css  # Extras
 ┃ ┗ 📄 index.js      # Aqui se importan los componentes que he desarollado
 ┗ 📁 components
    ┗ 📁 persons.jsx    # Componente que muestra los usuarios
       ┗ 📄 person.jsx      # Aqui se implmentamos la logica del llamado de la API
       ┗ 📄 personItem.js   # Aqui defino la arquitectura HTML y css de cada item 
```


## 3 Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)


