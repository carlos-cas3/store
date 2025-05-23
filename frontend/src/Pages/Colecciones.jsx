import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterSidebar from "../components/Filters/FilterSidebar.jsx";
import Catalogo from "../components/Catalogo/Catalogo.jsx";
import Breadcrumb from "../components/Catalogo/Breadcrumb.jsx";

const Colecciones = () => {
    const [query, setQuery] = useState("");
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchQuery = urlParams.get("query") || "";
        setQuery(searchQuery);
    }, [location]);

    return (
        <div className="pb-20 min-h-screen">
            <div className="max-w-7xl mx-auto px-5">
                <Breadcrumb />
                <div className="flex gap-10">
                    <FilterSidebar />
                    <div className="flex-1">
                        <Catalogo query={query} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colecciones;
