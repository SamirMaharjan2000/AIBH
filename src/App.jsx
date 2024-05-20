import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Models from "./pages/Models";
import Industries from "./pages/Industries";
import ContactUs from "./pages/ContactUs";
import { Route , Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import  CityImg from './assets/night-light.jpg'
import PFI from "./pages/models/PFI";
import PPP from "./pages/models/PPP";
import BOT from "./pages/models/BOT";
import BOOT from "./pages/models/BOOT";
import DBOT from "./pages/models/DBOT";


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    {/* style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${CityImg})`
        }} */}
    <ScrollToTop/>
      <Navbar />
      <div className="bg-black rounded-lg p-8 shadow-md" >
      <div className="max-w-7xl mx-auto pt-20 ">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/models' element={<Models/>}/>
          <Route path='/industires' element={<Industries/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/models/pfi' element={<PFI/>}/>
          <Route path='/models/ppp' element={<PPP/>}/>
          <Route path='/models/bot' element={<BOT/>}/>
          <Route path='/models/boot' element={<BOOT/>}/>
          <Route path='/models/dbot' element={<DBOT/>}/>
        </Routes>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
    
      
    </>
  );
};

export default App;
