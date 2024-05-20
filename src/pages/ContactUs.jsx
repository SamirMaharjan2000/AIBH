
import IndustryImg from '../assets/insustry.jpg'
import BgContact from '../assets/bg-contact.svg'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
  return (
    <>
    <div className='flex flex-col'>
      <div className="bg-yellow-800 rounded-lg p-8 shadow-md" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${IndustryImg})`
        }}>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
                <div className="grid md:grid-cols-3 gap-5">
                    {/* Phone Section */}
                    <div className="bg-black shadow-lg rounded-lg p-6 flex flex-col gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p>+977 981 0037 625</p>
                        <p>+977 01 5900 281</p>
                    </div>
                    {/* Email Section */}
                    <div className="bg-black shadow-lg rounded-lg p-6 flex flex-col gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p>hello@aibh.com.np</p>
                        <p>hello@pregasus.com.np</p>
                    </div>
                    {/* Location Section */}
                    <div className="bg-black shadow-lg rounded-lg p-6 flex flex-col gap-3 flex-wrap">
                        <h3 className="text-xl font-semibold mb-2">Repo Office  </h3>
                        <p>🇳🇵 Gonagau Chowk, Samkushi-29, Kathmandu</p>
                        
                    </div>
                </div>
            </div>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide opacity-100 lg:mt-40 lg:mb-[-10rem] z-20">
        INQUIRY FORM
      </h1>
      <div className="bg-yellow-800 rounded-xl p-8 opacity-100 shadow-md" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BgContact})`
        }}>
        <ContactForm/>
      </div>
    </div>

    
    </>
  )
}

export default ContactUs
