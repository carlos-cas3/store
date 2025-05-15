import { useState } from "react";

const FilterSection = ({ title, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <fieldset className="w-full">
            <legend
                className="flex items-center cursor-pointer w-full justify-between"
                onClick={() => setOpen(!open)}
            >
                <span className="text-xl font-semibold">{title}</span>
                {open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                )}
            </legend>

            <div
                className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-[9999px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col [&>label]:cursor-pointer [&>label>input]:cursor-pointer w-fit py-1.5 gap-1">
                    {children}
                </div>
            </div>
        </fieldset>
    );
};

export default FilterSection;
