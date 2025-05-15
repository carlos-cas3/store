import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterSidebar from "../components/Filters/FilterSidebar.jsx";
import Catalogo from "../components/Catalogo/Catalogo.jsx";
import Breadcrumb from "../components/Catalogo/Breadcrumb.jsx";

const Colecciones = () => {
    const [query, setQuery] = useState(""); // Mantén el estado de la búsqueda
    const location = useLocation();

    useEffect(() => {
        // Obtener el query de la URL
        const urlParams = new URLSearchParams(location.search);
        const searchQuery = urlParams.get("query") || "";
        setQuery(searchQuery);
    }, [location]);

    return (
        <div>
            <Breadcrumb />
            <div className="flex w-full px-60 gap-10 pb-20 min-h-screen">
                <FilterSidebar />
                <div className="flex-1">
                    <Catalogo query={query} /> {/* Pasamos el query a Catalogo como prop */}
                </div>
            </div>
        </div>
    );
};

export default Colecciones;
