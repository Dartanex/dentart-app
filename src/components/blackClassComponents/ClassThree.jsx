import { useDropdownContext } from "../../context/dropdownContext"
import thirdClassOne from '../../assets/black/clase_3/one.png'
import thirdClassTwo from '../../assets/black/clase_3/two.png'
import thirdClassThree from '../../assets/black/clase_3/three.png'
import thirdClassFour from '../../assets/black/clase_3/four.png'

export const ClassThree = () => {
  
    const {isDropdownOpen, toggleDropdown} = useDropdownContext()

    return (
        <>
            <section className="mt-5 p-2 w-full border-b border-slate-400">
              <button className="inline-flex  rounded-md font-semibold px-2 py-2 text-left text-white text-md" 
              onClick={() => { toggleDropdown('classThree') }}
              aria-expanded={isDropdownOpen['classThree'] ? 'true':'false'}
              aria-haspopup="true">
                <span className=" me-2 px-4 py-1 font-bold border-4 border-pink-500 rounded-md shadow-inner shadow-indigo-500/50">
                  3°
                </span>
                <span className=" ms-1 flex mt-1 md:w-fit text-xl">
                  Clase
                </span>                        
                <svg className="h-6 w-6 md:w-6 md:h-6 text-white mt-2" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" 
                aria-hidden="true">
                    <path fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" />
                </svg>      
              </button>
              {isDropdownOpen['classThree'] && (
                <div className="md:grid md:grid-flow-row md:grid-cols-2 md:auto-rows-fr md:gap-2 md:p-2">
                  <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                  src={thirdClassOne} alt="Clase 3" />
                  <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                  src={thirdClassTwo} alt="Clase 3" />
                  <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                  src={thirdClassThree} alt="Clase 3" />
                  <img className="w-52 mx-auto rounded-md md:border-none md:w-10/12 my-4 md:mx-auto" 
                  src={thirdClassFour} alt="Clase 3" />
                </div>
              )}
            </section>
        </>
    )
}
