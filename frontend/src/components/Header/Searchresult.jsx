const SearchResult = ({ productos, searchValue }) => {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 border-gray-300">Resultados para "{searchValue}"</h2>
            {productos.length > 0 ? (
                <ul className="space-y-2">
                    {productos.map((producto) => (
                        <li key={producto.id} className="flex items-center gap-4">
                            <img src={producto.image} alt={producto.name} className="w-12 h-12 object-cover" />
                            <div>
                                <p className="font-medium">{producto.name}</p>
                                <p className="text-sm text-gray-600">{producto.brand}</p>
                                <p className="text-sm text-blue-700">${producto.price.toFixed(2)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No se encontraron productos.</p>
            )}
        </div>
    );
};

export default SearchResult;
