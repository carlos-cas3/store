import Breadcrumb from "../components/Catalogo/Breadcrumb.jsx";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { useState } from "react";

const InfoPage = () => {
    const [cantidad, setCantidad] = useState(1);

    const disminuir = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const aumentar = () => {
        setCantidad(cantidad + 1);
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) setCantidad(value);
    };

    const handleAddToCart = () => {
        // Aquí puedes agregar la lógica para agregar el producto al carrito
        console.log(`Agregado ${cantidad} unidades al carrito`);
    };

    const handleAddToCartNow = () => {
        // Aquí puedes agregar la lógica para comprar el producto ahora
        console.log(`Comprando ${cantidad} unidades ahora`);
    }

    return (
        <div className="info-page">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb />

                <div className="grid grid-cols-2 justify-items-center gap-10 mb-10">
                    <div className="bg-amber-200 w-full ">
                        {" "}
                        <p>asdasd 1</p>
                    </div>
                    <div className="bg-gray-200 w-full p-5">
                        <div className="space-y-5 py-3">
                            <div>
                                <p className="text-2xl">NOMBRE DEL PRODUCTO</p>
                                <p className="text-xl ">MARCA DEL PRODUCTO</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-1">
                                    <div>
                                        {[...Array(5)].map((_, index) => (
                                            <span key={index}>★</span>
                                        ))}
                                    </div>
                                    <span>Reseña</span>
                                </div>
                                <div className="flex gap-0.5 text-2xl ">
                                    <FaFacebook className="hover:bg-red-500" />
                                    <FaPinterest className="hover:bg-red-500" />
                                    <FaSquareXTwitter className="hover:bg-red-500" />
                                    <MdOutgoingMail className="hover:bg-red-500" />
                                </div>
                            </div>
                        </div>
                        <div className="border-t-2 border-black-300 gap-5 py-5 space-y-5">
                            <div>
                                Precio:{" "}
                                <span className="text-2xl">$100.00</span>
                            </div>
                            <div className="flex items-center  gap-5">
                                <label>Cantidad:</label>
                                <div className="flex items-center">
                                    <button
                                        onClick={disminuir}
                                        className="px-2 py-1 text-lg bg-white rounded hover:bg-gray-300"
                                    >
                                        −
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={cantidad}
                                        onChange={handleChange}
                                        className="w-15 text-center  border-gray-300 rounded"
                                    />
                                    <button
                                        onClick={aumentar}
                                        className="px-2 py-1 text-lg bg-white rounded hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 row-span-1 gap-5 justify-around w-full py-5">
                            <div>
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="bg-blue-400 hover:bg-blue-500 w-full cursor-pointer h-10"
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                            <div>
                                <button 
                                type="button"
                                onClick={handleAddToCartNow}
                                className="bg-red-400 hover:bg-red-500 w-full  cursor-pointer h-10">
                                    Comprar ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InfoPage;
