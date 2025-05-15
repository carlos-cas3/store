import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../components/UI/FormInput.jsx";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registro</h1>

        <form className="space-y-4">
          <FormInput
            label="Nombre"
            name="name"
            placeholder="Ingresa tu nombre"
            focusColor="green"
          />
          <FormInput
            label="Correo Electrónico"
            type="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            focusColor="green"
          />
          <FormInput
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            focusColor="green"
          />
          <FormInput
            label="Confirmar Contraseña"
            type="password"
            name="confirmPassword"
            placeholder="Confirma tu contraseña"
            focusColor="green"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
          >
            REGISTRARSE
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
