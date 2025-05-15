const Breadcrumb = () => {
    return (
            <ul className="flex flex-row w-fit pl-60 py-6 gap-5 text-gray-700">
                <li>
                    <a href="/home">Inicio</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
    );
};
export default Breadcrumb;
