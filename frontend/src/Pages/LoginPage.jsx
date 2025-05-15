import React from "react";
import { Form, Link, useNavigate } from "react-router-dom"; // Added useNavigate
import FormInput from "../components/UI/FormInput.jsx";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    event.preventDefault(); // Prevent default form submission
    navigate("/home");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Iniciar Sesion</h1>

        <form className="space-y-4">
          <FormInput
            label="Correo Electrónico"
            type="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            focusColor="blue"
          />
          <FormInput
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            focusColor="blue"
          />
          <button
            type="button"
            onClick={handleClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            INGRESAR
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
