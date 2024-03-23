import countriesData from '../mocks/data.json';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function CountryDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { countryName } = useParams();
    const country = countriesData.find((country) => country.name === countryName);

    if (!country) {
        return <div>Country not found</div>;
    } else {

        return (
            <>
                <Header />

                <article className='bg-gray-100 px-20  py-10 dark:bg-veryDarkBlue '>
                    <Link to="/" className=' bg-veryDarkBlue'>
                        <button className='py-2 px-14 rounded-md bg-gray-200 dark:bg-darkBlue '>
                            <img src='' />
                            Back
                        </button>
                    </Link>

                    <section className='grid grid-cols-1 md:grid-cols-3 gap-x-12 py-10 px-10  bg-gray-100 dark:text-white  dark:hover-bg-slate-900 dark:bg-veryDarkBlue justify-center items-center text-center' >

                        <div className="w-full">
                            <img
                                src={country.flags.png}
                                className="w-full h-auto md:h-72 "
                                alt="Country Flag"
                            />
                        </div>

                        <section className="py-10 px-10 my-6 font-normal text-black dark:text-white ">
                            <div>
                                <p className='font-bold text-xl'>
                                    {country.name}
                                </p>
                            </div>

                            <div className="flex flex-col py-6">
                                <p className=' font-semibold'>
                                    <strong>Native Name: </strong>
                                    <span className=' font-light'> {country.nativeName}</span>
                                </p>
                                <p className="font-semibold">
                                    <strong>Population: </strong>
                                    <span className="font-light"> {country.population}</span>
                                </p>
                                <p className="font-semibold">
                                    <strong>Region: </strong>
                                    <span className=' font-extralight'> {country.region}</span>
                                </p>
                                <p className="font-semibold">
                                    <strong>Subregion: </strong>
                                    <span className=' font-extralight'> {country.subregion}</span>
                                </p>
                                <p className="font-semibold">
                                    <strong>Capital: </strong>
                                    <span className=' font-extralight'> {country.capital}</span>
                                </p>
                            </div>
                        </section>
                        <section className='py-12 my-16'>
                            <p className=" font-semibold">
                                <strong>Top Level Domain :</strong>
                                <span className='font-extralight'>{country.topLevelDomain}</span>
                            </p>
                            <p className="font-semibold">
                                <strong>Currencies :</strong> {country.currencies && country.currencies.map(currency => (
                                    <span className='font-light' key={currency.code}>{currency.name} ({currency.code})</span>
                                ))}
                            </p>
                            <p className="font-semibold">
                                <strong>Languages:</strong> {country.languages && country.languages.map(language => (
                                    <span className='font-light' key={language.iso639_1}>{language.name} </span>
                                ))}
                            </p>

                        </section>
                        <div className='flex items-center justify-center text-center text-black dark:text-white py-8'>
                            {country.borders && country.borders.length > 0 && (
                                <div className='flex flex-col '>
                                    <p className="font-semibold"><strong>Border Countries:  </strong></p>
                                    <div className="border-countries-list flex flex-row gap-6">
                                        {country.borders.map(border => (
                                            <div key={border} className="border border-gray-400 rounded-md px-3 py-1 bg-gray-100 font-semibold text-black dark:bg-darkGray">
                                                {border}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {!country.borders && (
                                <p>This country has no border countries.</p>
                            )}
                        </div>

                    </section>

                </article>
                <Footer />
            </>
        );
    }
}

export default CountryDetail;

