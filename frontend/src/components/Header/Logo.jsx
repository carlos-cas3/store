const Logo = () => {
    return (
        <div id="content-header" className="flex items-center p-4 justify-center">
            <div id="content-logo" className="text-2xl font-bold">
                <a href="/home" className="">
                    <div className="flex items-center gap-2">
                        <span>GUITAR STORE</span>
                        <img
                            alt="Logo"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-10 w-auto"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Logo;
