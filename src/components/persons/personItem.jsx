import React from "react";

export default function PersonItem({ user, index }) {
  //extraemos las propiedades del usuario
  return (
    <li
      key={index}
      className="flex flex-col items-center justify-center text-center  rounded-2xl p-5 shadow-xl bg-white"
    >
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="w-60 h-60 object-cover rounded-full shadow-lg border-gray-200 mb-4"
      />

      <div className="flex flex-col items-center justify-center gap-2 font-light">
        <h2 className="font-bold text-2xl text-zinc-800">
          {user.name.first} {user.name.last}
        </h2>

        <p className="text-zinc-700 ">
          <strong>Genero:</strong>{" "}
          <span
            className={`${
              user.gender === "male" ? "bg-[#48cefa]" : "bg-[#ff40c6]"
            } text-white p-1 px-4 rounded-full`}
          >
            {user.gender}
          </span>
        </p>

        <p className="text-zinc-700">
          <strong>Ubicación:</strong> {user.location.city},{" "}
          {user.location.country}
        </p>

        <p className="text-zinc-700 break-all max-w-xs">
          <strong>Correo:</strong> {user.email}
        </p>

        <p className=" text-zinc-600">
          <strong>Nacimiento:</strong>{" "}
          {new Date(user.dob.date).toLocaleDateString()}
        </p>
      </div>
    </li>
  );
}
