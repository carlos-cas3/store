/* cambiar  */

const Producto = ({ id, image, brand, name, price, rating }) => {
    return (
        <div className="bg-gray-200 flex flex-col p-5 h-full w-full">
            {/* Imagen del producto */}
            <img
                src={image}
                alt={name}
                className="bg-red-200 w-32 h-32 object-cover mx-auto"
            />

            {/* Información del producto */}
            <div className="flex flex-col mt-2">
                <p className="text-sm text-gray-500 font-medium">{brand}</p>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-xl font-bold text-amber-600">${price}</p>

                {/* Reseñas */}
                <div className="flex items-center gap-1 mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill={index < rating ? "#facc15" : "#e5e7eb"}
                            className="w-5 h-5"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.384-2.455a1 1 0 00-1.176 0l-3.384 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.951-.69l1.283-3.966z" />
                        </svg>
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({rating})</span>
                    <p>ID: {id}</p>
                </div>
                
            </div>
        </div>
    );
};
export default Producto;
