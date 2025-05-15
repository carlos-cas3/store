import React from "react";
import brands from "../../data/brands.js";

const Brandsgrid = () => {
    return (
        <div
            id="brands-grid"
            className="flex flex-col justify-center items-center my-20"
        >
            <h2 className="text-2xl mb-4 text-center font-extrabold">
                LAS MEJORES MARCAS
            </h2>
            <div className="grid grid-cols-6 gap-6">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center p-4 "
                    >
                        <a href={brand.link || "#"}>
                            <img src={brand.logo} alt={brand.name} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Brandsgrid;
