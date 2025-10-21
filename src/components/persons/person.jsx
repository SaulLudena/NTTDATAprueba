'use client";';
import PersonItem from "./personItem.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Person() {
  // Estado para almacenar los datos de los usuarios
  const [users, setUsers] = useState([]);

  // Función asíncrona para obtener los datos
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      setUsers(response.data.results);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // Llamada al cargar el componente
  //useEffect sirve para ejecutar código cuando el componente se monta
  //el arreglo vacio significa que solo se ejecuta una vez al montar el componente
  useEffect(() => {
    fetchUsers();
  }, []);

  //retornamos la vista con codigo JSX
  return (
    <div className="font-quicksand">
      {users.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <ul className=" grid grid-cols-4 gap-10 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {users.map((user, index) => (
            <PersonItem key={index} user={user} />
          ))}
        </ul>
      )}
    </div>
  );
}
