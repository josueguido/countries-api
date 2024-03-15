import Moon from '../assets/moon.svg'

function Header() {
    return (
        <>
            <header className="flex py-4 px-20">
                <nav className="flex justify-between items-center w-full">
                    <p className="text-pretty text-lg font-bold">Where is the World?</p>
                    <button className='flex flex-row gap-2 hover:bg-gray-400 rounded-lg py-2 px-3'>
                        <img className='w-6 h-6' src={Moon} />
                        <p className=' font-bold'>Dark Mode</p>
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Header;
