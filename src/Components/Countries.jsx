import countriesData from "../mocks/data.json";
import { useState } from "react";

export function Countries() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const filterCountriesByRegion = (region) => {
        setSelectedRegion(region);
        setIsOpen(false); // Cerrar el dropdown cuando se seleccione un continente
    };

    // Filtrar países según el continente seleccionado
    let filteredCountries = countriesData;
    if (selectedRegion) {
        filteredCountries = filteredCountries.filter(
            (country) => country.region === selectedRegion,
        );
    }
    // Filtrar países según el término de búsqueda
    if (searchTerm) {
        filteredCountries = filteredCountries.filter((country) =>
            country.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
    }

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <section className="py-10 px-5 bg-gray-100 dark:text-white  dark:hover-bg-slate-900 dark:bg-veryDarkBlue">
                <header className="flex justify-between">
                    <form className="w-96 h-20 px-12 ">
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium bg-white text-gray-900 sr-only  dark:text-white  dark:hover-bg-slate-900 dark:bg-darkBlue"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm dark:text-white  dark:hover-bg-slate-900 dark:bg-darkBlue"
                                placeholder="Search for a country..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                required
                            />
                        </div>
                    </form>

                    <div className="relative px-12">
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="text-black bg-white focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-darkBlue dark:text-white "
                            type="button"
                            onClick={toggleDropdown}
                        >
                            Filter by Region
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        {/* Dropdown menu */}
                        {isOpen && (
                            <div
                                id="dropdown"
                                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 text-black  dark:text-white"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700  dark:bg-darkBlue  dark:text-white"
                                    aria-labelledby="dropdownDefaultButton"
                                >
                                    <li>
                                        <button
                                            onClick={() => filterCountriesByRegion("Africa")}
                                            className="block px-4 py-2 text-black  dark:text-white "
                                        >
                                            Africa
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => filterCountriesByRegion("Americas")}
                                            className="block px-4 py-2 text-black  dark:text-white"
                                        >
                                            America
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => filterCountriesByRegion("Europe")}
                                            className="block px-4 py-2 text-black  dark:text-white"
                                        >
                                            Europe
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => filterCountriesByRegion("Asia")}
                                            className="block px-4 py-2 text-black  dark:text-white"
                                        >
                                            Asia
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => filterCountriesByRegion("Oceania")}
                                            className="block px-4 py-2 text-black  dark:text-white"
                                        >
                                            Oceania
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </header>

                <ul>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-10 px-6 mx-6 gap-10 dark:bg-veryDarkBlue">
                        {filteredCountries.map((country) => (
                            <li
                                className=" rounded-lg shadow bg-white dark:border-gray-700 dark:text-white  dark:hover-bg-slate-900 dark:bg-darkBlue"
                                key={country.numericCode}
                            >
                                
                                <img
                                    src={country.flags.png}
                                    alt={country.name}
                                    className=" w-72 h-40  rounded-md"
                                />
                                <div className="p-5 mb-3 font-normal text-black dark:text-white dark:hover-bg-slate-900  dark:bg-darkBlue">
                                    <strong>{country.name}</strong>
                                    {/* <p>Native Name: {country.nativeName}</p> */}
                                    <div className="py-6">
                                        <p>
                                            <strong>Population:</strong> {country.population}
                                        </p>
                                        <p>
                                            <strong>Region: </strong>
                                            {country.region}
                                        </p>
                                        {/* <p>Subregion: {country.subregion}</p>  */}
                                        <p>
                                            <strong>Capital: </strong>
                                            {country.capital}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>
                </ul>
            </section>
        </>
    );
}
