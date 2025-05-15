import Logo from "./Logo.jsx";
import SearchBar from "./Searchbar.jsx";
import SearchResult from "./Searchresult.jsx";
import UserActions from "./Useractions.jsx";
import productos from "../../data/productos"

const Header = ({ searchValue, setSearchValue }) => {
    const productosFiltrados = productos.filter((producto) =>
        producto.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        producto.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
        producto.category.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <header className="block pl-60 pr-60">
            <div className="flex justify-around p-4 items-center">
                <Logo />
                <div className="w-1/2 relative">
                    <SearchBar value={searchValue} onChange={setSearchValue} />
                    {searchValue.length > 0 && (
                        <div className="absolute w-full bg-white shadow-lg rounded-b-lg border border-gray-300 z-25">
                            <SearchResult productos={productosFiltrados} searchValue={searchValue} />
                        </div>
                    )}
                </div>
                <UserActions />
            </div>
        </header>
    );
};

export default Header;
