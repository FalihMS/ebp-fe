const Navbar = () => {

    return(
        <nav className="px-20 py-10 flex w-full text-white absolute top-0 left-0">
            <div className="grow">            
                <h3 className="text-xl">{ `PT. Equipindo Berkah Perkasa ` }</h3>
            </div>
            <div className="grow flex justify-end px-4 space-x-4">            
                <a href="#" className="font-medium hover:text-yellow-700">{`Products`}</a>
                <a href="#" className="font-medium hover:text-yellow-700">{`Article`}</a>
                <a href="#" className="font-medium hover:text-yellow-700">{`Profile`}</a>
            </div>
        </nav>
    )
}

export default Navbar