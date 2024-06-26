import { Link } from 'react-router-dom'
import cavities from '../assets/cavities.png'

export const ClasificationCard = () => {
  
    return (
        <>
            <div className="rounded-xl shadow-lg backdrop-blur-md bg-black/40 container mt-6 md:my-2 mx-auto w-8/12 md:w-9/2">
                <div className="p-4 flex flex-col content-between gap-2">
                    <div className="rounded-xl overflow-hidden">
                        <img loading='lazy' src={cavities} alt="Caries dental" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-semibold text-white">
                        Clasificación de las Caries
                    </h3>
                    <div>
                        <p className='font-base text-white'>Las Caries se clasifican según: </p>
                    </div>
                    <div className='mt-4 w-full flex flex-col gap-4'>
                        <Link to='/icdascavities' className='rounded-md p-2 w-32 bg-violet-500 font-semibold text-slate-100'>
                            ICDAS
                        </Link>
                        <Link to='/blackcavities' className='rounded-md p-2 w-32 bg-violet-500 font-semibold text-slate-100'>
                            BLACK
                        </Link>
                        <Link to='/mounthumecavities' className='rounded-md p-2 w-32 bg-violet-500 font-semibold text-slate-100'>
                            MOUNT-HUME
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
