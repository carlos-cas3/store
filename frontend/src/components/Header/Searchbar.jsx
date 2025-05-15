import { useNavigate } from "react-router-dom";

const SearchBar = ({ value, onChange }) => {
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        onChange(e.target.value); // Actualiza el estado de la búsqueda
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/colecciones?query=${value}`); // Redirige a la ruta con el query de búsqueda
        onChange("");
    };

    return (
        <div id="content-nav" className="text-xl">
            <form onSubmit={handleSearch} className="flex w-full">
                <input
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    value={value}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-tl-lg text-gray-900 focus:outline-none"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-tr-lg hover:bg-blue-700 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
