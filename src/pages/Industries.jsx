import IndustryList from '../components/IndustryList'
import IndustryImg from '../assets/insustry.jpg'

const Industries = () => {
  return (
       <div className='flex flex-col gap-10'>
        <div className="relative w-full h-[500px] bg-black bg-no-repeat bg-cover bg-center"
        style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${IndustryImg})`
        }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-8 bg-black bg-opacity-50 border border-red-600">
          <h1 className="text-white text-4xl mb-3">Shared vision and mutual growth.</h1>
          <p className="text-white text-lg mb-5">Forging synergistic alliances to drive business success</p>
        </div>
        </div>

        <IndustryList/>
        </div>
      );
    }        
      
         
export default Industries
