import { navigation } from "../../data/navigation";

const Navbar = () => {
    return (
        <nav id="nav-instrumentos" className="p-4 pl-60 pr-60 bg-blue-100 relative z-20">
            <div className="flex justify-around text-2xl">
                {navigation.map((item) => (
                    <div key={item.name} className="group relative">
                        <a
                            href={item.href}
                            className="flex items-center gap-1 text-xl font-semibold text-gray-500 hover:text-gray-900"
                        >
                            {item.name}
                            {item.subItems && (
                                <span>
                                    {" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            )}
                        </a>

                        {item.subItems && (
                            <div className="absolute left-0 mt-3 hidden group-hover:block bg-white border p-4 w-90 ">
                                {item.subItems.map((subItem) => (
                                    <a
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="block text-gray-500 hover:text-gray-900 py-0.5 text-2xl"
                                    >
                                        {subItem.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};
export default Navbar;
