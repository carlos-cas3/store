import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sección de Tiendas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nuestras tiendas</h3>
            <ul>
              <li>Av. Arnaldo Márquez 1234, Jesús María</li>
              <li>Av. Nicolás de Pierola 103, Lima</li>
            </ul>
          </div>

          {/* Sección de Información */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Información</h3>
            <ul>
              <li>Política de Cambio/Devolución</li>
              <li>Política de privacidad</li>
              <li>Garantía de tienda</li>
              <li>Políticas de Envío</li>
              <li>Libro de Reclamaciones</li>
            </ul>
          </div>

          {/* Sección de Suscripción */}
          <div>
            <h3 className="font-semibold text-lg mb-4">SUSCRÍBETE</h3>
            <p className="mb-4">
              Entérate de nuestras novedades y ofertas primero que nadie
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 p-2 bg-white rounded-l-lg text-black focus focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700"
                >
                  Suscribir
                </button>
              </div>
            </form>
          </div>

          {/* Sección de Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contáctanos</h3>
            <ul>
              <li>Whatsapp: +51 974 159 030</li>
              <li>Teléfono: 01 6062583</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Tu Tienda. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
