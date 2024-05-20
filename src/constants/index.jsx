
import { Boxes,  Lightbulb , FilePenLine , ReceiptText , HandCoins , Crosshair , SquareUser , Luggage , Handshake} from "lucide-react";
import Consult_Logo from "../assets/consultant.svg"
import Strat_Logo from "../assets/strategy.png"
// import {DevicePhoneMobileIcon , EnvelopeOpenIcon ,MapPinIcon} from '@heroicons/react/24/solid'

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Model", href: "/models" },
  { label: "Industries", href: "/industires" },
  { label: "Contact Us", href: "/contactus" },
];

export const testimonials = [
  {
    user: "Improvement",
    // company: "Stellar Solutions",
    image: <Boxes />,
    text: "Our online security solutions provide comprehensive protection, ensuring your website remains safeguarded against cyber threats. We are improving rapidly to satisfy our clients with our performance.",
  },
  {
    user: "Idea Generate",
    // company: "Blue Horizon Technologies",
    image: <Lightbulb />,
    text: "By fostering a culture of creativity and collaboration, we consistently generate new ideas to enrich and expand our solutions portfolio, driving innovation and staying ahead of the curve in meeting our clients' evolving needs.",
  },
  {
    user: "Consultancy",
    // company: "Quantum Innovations",
    image: <Luggage />,
    text: "Our consulting services offer tailored guidance and strategic insights to businesses, empowering them to overcome challenges, seize opportunities, and achieve sustainable growth.",
  },
  {
    user: "Business Success",
    // company: "Fusion Dynamics",
    image: <Handshake />,
    text: "Business success is the culmination of strategic planning, innovative thinking, and relentless dedication to excellence.",
  },
  
];

export const partners = [
  {
    user: "Consulting and standardization",
    // company: "Stellar Solutions",
    image: <img src={Consult_Logo} alt="CL"  className=" bg-white"/>,
    text: "Our online security solutions provide comprehensive protection, ensuring your website remains safeguarded against cyber threats. We are improving rapidly to satisfy our clients with our performance.",
  },
  {
    user: "Strategic Partners",
    // company: "Blue Horizon Technologies",
    image: <img src={Strat_Logo} alt="CL"  className=" bg-white"/>,
    text: "By fostering a culture of creativity and collaboration, we consistently generate new ideas to enrich and expand our solutions portfolio, driving innovation and staying ahead of the curve in meeting our clients' evolving needs.",
  },
  {
    user: "Technology Partners",
    // company: "Quantum Innovations",
    image: <img src={Consult_Logo} alt="CL"  className=" bg-white"/>,
    text: "Our consulting services offer tailored guidance and strategic insights to businesses, empowering them to overcome challenges, seize opportunities, and achieve sustainable growth.",
  },
];

export const features = [
  {
    icon: <SquareUser />,
    text: "Clients Focused",
    description:
      "Our company's success stems from our client-focused approach, prioritizing their needs and satisfaction in every business interaction.",
  },
  {
    icon: <HandCoins />,
    text: "Cost Saving",
    description:
      "Through diligent analysis and efficient resource management, our cost-saving initiatives have bolstered our bottom line, ensuring financial sustainability and growth.",
  },
  {
    icon: <Lightbulb />,
    text: "Unique Ideas & Solution",
    description:
      "By fostering a culture of creativity and innovation, our company continually generates unique ideas and solutions, setting us apart in the market.",
  },
  {
    icon: <Crosshair />,
    text: "Targeting & Positioning",
    description:
      "With meticulous market research and strategic planning, our company excels in target and positioning strategies, ensuring optimal market penetration and brand visibility.",
  },
  {
    icon: <ReceiptText />,
    text: "Tax Advantages",
    description:
      "Maximizing tax advantages is crucial for optimizing financial efficiency and minimizing overall tax liability.",
  },
  {
    icon: <FilePenLine />,
    text: "Customizability",
    description:
      "Product cusomizability allows for tailored solutions, meeting individual needs and preferences with flexibility and precision.",
  },
];

export const checklistItems = [
  {
    title: "Online Security",
    description:
    "Our online security solutions provide comprehensive protection, ensuring your website remains safeguarded against cyber threats.",
  },
  {
    title: "website Audit",
    description:
      "With our website audit services, you'll gain valuable insights into your online presence, empowering strategic decision-making for optimal performance.",
  },
  {
    title: "Strategic Planning",
    description:
    "Our strategic planning expertise helps businesses navigate the digital landscape, delivering tailored roadmaps for success in today's competitive market.",
  },
  {
    title: "eCommerce Solution",
    description:
    "Explore our ecommerce solutions designed to streamline your online business operations, from inventory management to seamless customer transactions.",
  },
];

export const servicesOptions = [
  {
    title: "Gov-Tech Solutions",
    price: "",
    features: [
      "Digital Service Delivery",
      "Citizen Engagement and Communication",
      "Security and Compliance",
      "Workflow Automation",
      "Financial Management",
    ],
  },
  {
    title: "POSTAL AUTOMATION SYSTEM",
    price: "$10",
    features: [
      "Mail Sorting and Processing,",
      "Package Handling",
      "Tracking and Monitoring",
      "Logistic Management",
      "Inventory Management",
    ],
  },
  {
    title: "ERP - Enterprise RESOURCE PLANNING",
    price: "$200",
    features: [
      "Integration and Customization",
      "Business Intelligence and Reporting",
      "User Experience and Accessibility",
      "Security and Compliance",
      "Collaboration Tools"
    ],
  },
  {
    title: "CBS - CORE BANKING SYSTEM",
    price: "$200",
    features: [
      "Account Management",
      "Deposits and Withdrawals",
      "Payments and Transfers",
      "Customer Relationship Management (CRM)",
      "Risk Management and Compliance"
    ],
  },
];

export const industries = [
  { name: 'Government and Public Sector', description: 'Our business specializes in providing innovative solutions and strategic consulting for the Government and Public Sector, ensuring efficient and effective service delivery. We partner with public institutions to enhance operational efficiency, foster transparency, and drive community-focused initiatives.' },
  { name: 'Banking, Insurance & Financial Institution',  description: 'Our firm delivers cutting-edge services and strategic advice to the Banking, Insurance, and Financial sectors, helping institutions navigate regulatory challenges and achieve sustainable growth. We specialize in enhancing operational efficiency, managing risk, and leveraging technology to drive financial innovation.' },
  { name: 'Digital Ecommerce', description: 'Our company empowers businesses in the Digital Ecommerce sector with innovative solutions to optimize their online presence and drive sales growth. We provide comprehensive services, from website development and digital marketing to data analytics and customer experience enhancement.' },
  { name: 'Education', description: 'We offer tailored solutions for the Education sector, focusing on enhancing learning experiences and administrative efficiency. Our services include advanced educational technologies, curriculum development, and strategic consulting to help institutions achieve academic excellence.' },
  { name: 'Food and Beverage Industry', description: 'Our business provides comprehensive solutions for the Food and Beverage Industry, from supply chain optimization to innovative marketing strategies. We help companies enhance product quality, ensure regulatory compliance, and drive market growth through sustainable practices.' },
  { name: 'Professional Services', description: 'We deliver expert solutions for the Professional Services sector, focusing on enhancing client engagement and operational efficiency. Our offerings include strategic consulting, digital transformation, and talent management to help firms achieve their business objectives.' },
  { name: 'Telco and Telecommunications', description: 'Our company specializes in delivering advanced solutions for the Telco and Telecommunications sector, driving innovation and connectivity. We provide services ranging from network optimization and digital transformation to customer experience enhancement, ensuring seamless communication and operational excellence.' },
  { name: 'Tours and Travels',  description: 'ur business offers bespoke services for the Tours and Travels sector, enhancing customer experiences and operational efficiency. We provide solutions in travel planning, digital marketing, and logistics management, ensuring seamless and memorable journeys for clients.' },
  // Add more industries as needed
];

export const models = [
  {
    link:'/models/pfi',
    title: "PFI - Private Finance Initiative",
    features: [
      "Public-Private Partnership (PPP) ,",
      "Long-term Contracts ,",
      "Payment Mechanism ,",
      "Global Adoption ,",
      "Evolution and Alternatives",
    ],
  },
  {
    link:'/models/ppp',
    title: " PPPs - Public - Private Partnerships",
    features: [
      "Collaborative Approach  ,",
      "Shared Risks and Responsibilities  ,",
      "Long-term Contracts  ,",
      "Performance-based Payments ,",
      "Flexibility in Project Delivery ,",
      "Global Adoption and Variation",
    ],
  },
  {
    link:'/models/bot',
    title: "BOT - Build, Operate, Transfer",
    features: [
      "Phased Approach ,",
      "Construction by Private Sector ,",
      "Operational Phase ,",
      "Revenue Generation ,",
      "Regulatory Framework",
    ],
  },
  {
    link:'/models/boot',
    title: "BOOT - Build , Own, Operate, Transfer",
    features: [
      "Ownership by Private Sector ,",
      "Construction Responsibility ,",
      "Operational Phase ,",
      "Revenue Generation and Ownership ,",
      "Transfer to Public Sector",
    ],
  },
  {
    link:'/models/dbot',
    title: "DBOT - Design, Build, Operate, Transfer",
    features: [
      "Design Responsibility ,",
      "Construction Responsibility ,",
      "Regulatory Framework ,",
      "Public Sector Benefits ,",
      "Revenue Generation",
    ],
  },
];

export const CompanyLinks = [
  { href: "#", text: "Active International Business House" },
  { href: "#", text: "Pregasus Enterprise" },
  { href: "#", text: "sastofare.com" },
  { href: "#", text: "UA Nepal (Universal Alliance)" },
  { href: "#", text: "Active Abroad Education Consultancy" },
  { href: "#", text: "Pravin Consulting" },
  { href: "#", text: "Active Business" },
  { href: "#", text: "OU Kaizen" },
  { href: "#", text: "Talent Bank Reecruitment & Placemnet" },
];
<img src="https://flagcdn.com/16x12/uk.png" width="16" height="12"/>
export const repoLinks = [
  { href: "#", text: "Tokha 07, Kathmandu, Nepal",countryFlags: <img src="https://flagcdn.com/16x12/np.png" width="16" height="12"/>,},
  { href: "#", text: "2-chōme-13-17 Hyakuninchō, Shinjuku City, Tokyo 169-0073, Japan",  countryFlags: <img src="https://flagcdn.com/16x12/jp.png" width="16" height="12"/>,},
  { href: "#", text: "C. de Villar, 82, 08041 Barcelona, Spain",  countryFlags: <img src="https://flagcdn.com/16x12/es.png" width="16" height="12"/>, },
  { href: "#", text: "51 N Broad St, Middletown, DE 19709, USA",   countryFlags: <img src="https://flagcdn.com/16x12/us.png" width="16" height="12"/>,},
  { href: "#", text: "Building 3 Chiswick Park, 566 Chiswick High Street, London, Greater London, W4 5YA, UK",  countryFlags: <img src="https://flagcdn.com/16x12/gb.png" width="16" height="12"/>, },
];

export const contactLinks = [
  { href: "#", text: "Gongabu Chowk, Samakhusi-29, Kathmandu" },
  { href: "#", text: "hello@aibh.com.np" },
  { href: "#", text: "hello@pregasus.com.np" },
];

export const teleLinks = [
  { href: "#", text: "📱(+977) 981 0037 625" },
  { href: "#", text: "☎️(+977) 01 5900 281" },
];
