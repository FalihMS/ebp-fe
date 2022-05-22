import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
const Home: NextPage = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
    `}</style>
      </Head>


      {/* Hero Section */}
      <section 
        className='w-full flex flex-col justify-center items-center min-h-screen text-white' 
        style={{backgroundImage: `url(/hero-bg.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize:'cover' }}
      >

        <nav className="px-5 md:px-10 lg:px-20 md:py-10 flex w-full text-white absolute top-0 left-0">
          <div className="grow flex items-center space-x-4"> 
            <img src="/brand-img.jpg" alt="brand image" className='w-10 h-10 rounded-full' />           
            <h3 className="text-sm md:text-xl">{ `PT. Equipindo Berkah Perkasa ` }</h3>
          </div>
          <div
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="grow md:hidden flex items-center space-x-4 py-6 justify-center"> 
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="text-yellow-600 flex flex-col h-screen mt-14 text-xl space-y-4 w-full p-8">            
              <li>
                <a href="#" className="font-medium hover:text-yellow-600">{`Products`}</a>
              </li>
              <li>
                <a href="#" className="font-medium hover:text-yellow-600">{`Article`}</a>
              </li>
              <li>
                <a href="#" className="font-medium hover:text-yellow-600">{`Profile`}</a>
              </li>
            </ul> 
          </div>
          
          <ul className="hidden md:flex grow justify-end px-4 space-x-4 items-center">            
              <li>
                <a href="#" className="font-medium hover:text-yellow-600">{`Products`}</a>
              </li>
              <li>
                <a href="#" className="font-medium hover:text-yellow-600">{`Article`}</a>
              </li>
              <li>
                <a href="#" className="font-medium hover:text-yellow-600">{`Profile`}</a>
              </li>
            </ul>
        </nav>
        
        {/* Hero Content */}
        <div className='px-10 max-w-5xl text-center space-y-6'>
          
          <h1 className='text-3xl md:text-6xl lg:text-7xl font-medium leading-tight text-yellow-600 tracking-tight'>
            Professional Supplier of Industrial Mining
          </h1>
          <p className='text-sm md:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className='pt-4 flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 flex justify-center'>
            <a className='font-semibold text-lg border-2 border-gray-50 text-gray-50 rounded px-8 py-4 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-700' href="#">Contact Us</a>
            <a className='font-semibold text-lg border-2 border-yellow-600 text-yellow-600 rounded px-8 py-4 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-700' href="#">Request Something</a>
          </div>
        </div>

        <img src="/hero-wave.svg" alt="" className='w-full absolute bottom-0 left-0'/>
      </section>
    

    </div>
  )
}

export default Home