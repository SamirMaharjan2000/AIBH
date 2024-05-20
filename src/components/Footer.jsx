import { CompanyLinks, repoLinks, contactLinks, teleLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Oubaitori Group Companies</h3>
          <ul className="space-y-2">
            {CompanyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Repo OFfice</h3>
          <ul className="space-y-2">
            {repoLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                >
               <p>{link.countryFlags}{" "} {link.text}</p> 
              
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
          <img src="https://flagcdn.com/16x12/np.png" width="16" height="12"/>
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Telephone</h3>
          <ul className="space-y-2">
            {teleLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-4">
           <p> Copyright@2024 AIBH Active International Business House</p>
      </div>
    </footer>
  );
};

export default Footer;
