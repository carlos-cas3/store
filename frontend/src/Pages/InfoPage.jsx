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

    return (
        <div className="info-page">
            <div className="max-w-7xl mx-auto">
                <Breadcrumb />

                <div className="grid grid-cols-2 justify-items-center gap-10 mb-10 ">
                    <div className="bg-amber-200 w-full ">
                        {" "}
                        <p>asdasd 1</p>
                    </div>
                    <div className="bg-gray-200 w-full px-4">
                        <div className="m-5">
                            <p className="text-2xl">NOMBRE DEL PRODUCTO</p>
                            <p className="text-xl ">MARCA DEL PRODUCTO</p>

                            <div className="flex justify-between">
                                <div className="flex gap-1">
                                    <div>
                                        {[...Array(5)].map((_, index) => (
                                            <span key={index}>★</span>
                                        ))}
                                    </div>
                                    <span>Reseña</span>
                                </div>
                                <div className="flex gap-0.5">
                                    <FaFacebook />
                                    <FaPinterest />
                                    <FaSquareXTwitter />
                                    <MdOutgoingMail />
                                </div>
                            </div>
                        </div>
                        <div className="border-t-2 border-black-300 gap-5">
                            <div  className="m-5">
                                Precio:{" "}
                                <span className="text-2xl">$100.00</span>
                            </div>
                            <div className="flex items-center m-5 gap-5">
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
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InfoPage;
