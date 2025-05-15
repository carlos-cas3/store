/* import { useState } from "react"; */
import FilterSection from "./FilterSection.jsx";
import brands from "../../data/brands.js";
import efectos from "../../data/efectos.js";

const FilterSidebar = () => {
/*     const [filters, setFilters] = useState({
        price: [],
        availability: [],
        brand: [],
    }); */

    return (
        <div className=" bg-red-100 p-10 w-1/4 h-fit">
            <h2 className="text-xl font-bold">Filtros</h2>

            <FilterSection title="Precio">
                <input
                    id="price "
                    type="range"
                    name="price"
                    min="0"
                    max="9999"
                    className="cursor-pointer"
                />
            </FilterSection>

            <FilterSection title="Disponibilidad">
                <label htmlFor="availability">
                    <input
                        id="availability"
                        type="checkbox"
                        name="availability"
                        value="in_stock"
                    />
                    En existencia
                </label>

                <label htmlFor="out_of_stock">
                    <input
                        id="out_of_stock"
                        type="checkbox"
                        name="availability"
                        value="out_of_stock"
                    />
                    Agotado
                </label>
            </FilterSection>

            <FilterSection title="Marca">
                {brands.map((brand, idx) => (
                    <label key={idx} htmlFor={brand.name}>
                        <input
                            id={brand.name}
                            type="checkbox"
                            name="brand"
                            value={brand.name}
                        />
                        {brand.name}
                    </label>
                ))}
            </FilterSection>

            <FilterSection title="Cuerdas">
                <label htmlFor="strings">
                    <input
                        id="strings"
                        type="checkbox"
                        name="strings"
                        value="metal"
                    />
                    Metal
                </label>
            </FilterSection>

            <FilterSection title="Efecto">
                {efectos.map((efecto, idx) => (
                    <label key={idx} htmlFor={efecto.name}>
                        <input
                            id={efecto.name}
                            type="checkbox"
                            name="efecto"
                            value={efecto.name}
                        />
                        {efecto.name}
                    </label>
                ))}
            </FilterSection>

            <FilterSection title="Número de cuerdas">
                <label htmlFor="strings_count">
                    <input
                        id="strings_count"
                        type="checkbox"
                        name="strings_count"
                        value="5_or_more"
                    />
                    5 cuerdas o más
                </label>
            </FilterSection>

            <FilterSection title="Orientación">
                <label htmlFor="orientation">
                    <input
                        id="orientation"
                        type="checkbox"
                        name="orientation"
                        value="right"
                    />
                    Diestro
                </label>
            </FilterSection>

            <FilterSection title="Tamaño">
                <label htmlFor="size_40">
                    <input
                        id="size_40"
                        type="checkbox"
                        name="size"
                        value="40"
                    />
                    40",41" - Jumbo
                </label>
            </FilterSection>
            
            <FilterSection title="Tipo de guitarra">
                <label htmlFor="guitar_type">
                    <input
                        id="guitar_type"
                        type="checkbox"
                        name="guitar_type"
                        value="electric"
                    />
                    Eléctrica
                </label>
                <label htmlFor="guitar_type">
                    <input
                        id="guitar_type"
                        type="checkbox"
                        name="guitar_type"
                        value="acoustic"
                    />
                    Acústica
                </label>
            </FilterSection>
        </div>
    );
};
export default FilterSidebar;
