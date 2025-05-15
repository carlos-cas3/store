import { useState, useEffect, useMemo } from "react";
import Producto from "./Producto.jsx";
import productos from "../../data/productos.js";

const Catalogo = ({ query }) => {
    const productosPorPagina = 24;
    const [paginaActual, setPaginaActual] = useState(1);
    const [animando, setAnimando] = useState(false);

    // Filtrar los productos solo cuando query o productos cambian
    const productosFiltrados = useMemo(() => {
        return productos.filter(
            (prod) =>
                prod.name.toLowerCase().includes(query.toLowerCase()) ||
                prod.brand.toLowerCase().includes(query.toLowerCase()) ||
                prod.category.toLowerCase().includes(query.toLowerCase())
        );
    }, [query]); // Solo se recalcula si cambia el query

    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosFiltrados.slice(inicio, fin);

    const cambiarPagina = (nuevaPagina) => {
        setAnimando(true);
        setTimeout(() => {
            setPaginaActual(nuevaPagina);
            setAnimando(false);
        }, 300);
    };

    useEffect(() => {
        setPaginaActual(1); // Resetear la página cuando cambie el query
    }, [query]);

    const placeholders = productosPorPagina - (productosPagina.length % productosPorPagina || productosPorPagina);

    return (
        <div>
            <h2>{query ? `Resultados de: "${query}"` : "Catálogo de Productos"}</h2>

            <div className={`grid grid-cols-4 border-l border-t transition-opacity duration-300 ${animando ? "opacity-0" : "opacity-100"}`}>
                {productosPagina.map((prod) => (
                    <div key={prod.id} className="flex border-r border-b">
                        <Producto {...prod} />
                    </div>
                ))}
                {Array.from({ length: placeholders }).map((_, idx) => (
                    <div key={`placeholder-${idx}`} className="border-r border-b" />
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={() => cambiarPagina(paginaActual - 1)}
                    disabled={paginaActual === 1}
                    className={`px-3 py-1 rounded ${paginaActual === 1 ? 'bg-gray-300 cursor-default' : 'bg-blue-500 cursor-pointer'}`}
                >
                    Anterior
                </button>

                <span>
                    Página {paginaActual} de {totalPaginas}
                </span>

                <button
                    onClick={() => cambiarPagina(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                    className={`px-3 py-1 rounded ${paginaActual === totalPaginas ? 'bg-gray-300 cursor-default' : 'bg-blue-500 cursor-pointer'}`}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Catalogo;
