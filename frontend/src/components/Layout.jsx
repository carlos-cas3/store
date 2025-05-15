// src/components/Layout/Layout.jsx
import { Outlet } from "react-router-dom";  // Añadido para renderizar las rutas hijas
import Header from "./Header/Header.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState } from "react";

const Layout = () => {
    const [searchValue, setSearchValue] = useState("");


    return (
        <div id="layout-wrapper">
            <div className="bg-black text-white text-center text-sm py-1">
                ENVÍO GRATIS POR COMPRAS MAYORES A S/199 CON EL CÓDIGO ENVIO199
                - DE 2 A 4 DÍAS HÁBILES. CONSULTA POR COBERTURA
            </div>
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Navbar />
            <main>
                <Outlet />  {/* Aquí se renderiza el contenido de las rutas hijas */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
