
import commshell1 from '../../../public/Images/commshell/commshell1.png'
import commshell2 from '../../../public/Images/commshell/commshell2.png'
import commshell3 from '../../../public/Images/commshell/commshell3.png'
import kios1 from '../../../public/Images/kiosk/kiosk.png'
import kios2 from '../../../public/Images/kiosk/kiosk1.png'
import kios3 from '../../../public/Images/kiosk/kiosk2.png'
import events1 from '../../../public/Images/events/events.png'
import events2 from '../../../public/Images/events/events1.png'
import events3 from '../../../public/Images/events/events2.png'
import Corporate1 from '../../../public/Images/perfectCorporate/PerfectCorporate.png'
import Corporate2 from '../../../public/Images/perfectCorporate/PerfectCorporate2.png'
import Corporate3 from '../../../public/Images/perfectCorporate/PerfectCorporate3.png'






const data: {
    id: number;
    websitename: string;
    companyname: string;
    briefdescription: string;
    description: string;
    image: any[];
    startdate:string
    enddate:string
    role:string
    overview:string
    technologies:string
    projectlinks:any[]
    responsibilities:string[]
}[]= [
    {
      "id": 1,
      "websitename": "CommShell-E-commerce",
      "companyname": "Himpact Techonologies PVT LTD",
      "briefdescription": "The Commshell project is a comprehensive e-commerce platform available on both web and mobile applications, with a primary focus on user-friendly shopping experiences. It encompasses various modules such as Stores, Products, Banner Advertisements, Geomaps, Login, Profile, Cart, Favorite Pages, and more..",
      "description": "A more detailed description of the first website goes here.",
      "image": [commshell1,commshell2,commshell3],
      "startdate": "07-10-2022",
      "enddate": "25-02-2023",
      "role":"Quality Analyst",
      "overview":`The "Commshell" project is a comprehensive e-commerce platform available on both web and mobile applications, with a primary focus on user-friendly shopping experiences. It encompasses various modules such as Stores, Products, Banner Advertisements, Geomaps, Login, Profile, Cart, Favorite Pages, and more.And My role In this Project is to test the quality of product and make sure that it is acceptable from user perspective ..`,
      "technologies":"ZOHO Bug Tracking tool,Selenium,Java,PostMan..etc ",
      "projectlinks":["https://www.commshell.com/","https://store.commshell.com/"],
      "responsibilities": [
        "Identified scenarios based on requirements",
        "Created and executed test cases",
        "Logged defects using tools like ZOHO (Jira)",
        "Proficient in STLC and SDLC",
        "Conducted various types of testing (Functional, Integration, System, Usability)",
        "Transformed scenarios into test cases",
        "Executed end-to-end test cases",
        "Daily status reporting",
        "Worked within an Agile methodology"
      ]
    },
    {
      "id": 2,
      "websitename": "Perfect Kiosk Website",
      "companyname": "YOUx Design Tech PVT LTD",
      "briefdescription": "The Perfect Kiosk Website project aims to deliver a comprehensive online platform for Perfect Kiosk, a leading provider of innovative kiosk solutions for food vending, stores, restaurants, and cafes.",
      "description": "A more detailed description of the second website goes here.",
      "image": [kios1,kios2,kios3],
      "startdate": "01-05-2023",
        "enddate": "Present",
        "role":"F E Developer (Intern)",
        "overview":`The "Perfect Kiosk Website" project is dedicated to crafting an immersive online platform for Perfect Kiosk, a premier provider of cutting-edge kiosk solutions. With a strong emphasis on user experience, this project harnesses the power of Next.js for robust front-end development and AWS EC2 for secure hosting. The primary objective is to effectively showcase Perfect Kiosk's diverse range of kiosks designed for food vending, stores, restaurants, and cafes.`,
        "technologies":"Next.js , AWS EC2 , HTML/CSS , Typescript/JavaScript, Responsive Design ",
        "responsibilities":["Web Developers: Responsible for the overall development of the website using Next.js and AWS EC2.",
                          "Web Designers: Design and create an engaging user interface with a strong focus on user experience.",
                          "Project Managers: Oversee the project's progress, timelines, and quality assurance.",
                            "Quality Assurance Testers: Ensure the website functions correctly and troubleshoot any issues."
                        
                           ],
        "projectlinks":["https://www.perfectkiosk.co/"]
    },
    {
      "id": 3,
      "websitename": "Perfect Kiosk Events",
      "companyname": "YOUx Design Tech PVT LTD",
      "briefdescription": `The "Perfect Kiosk Events" project aims to deliver a comprehensive online platform for Perfect Kiosk, a leading provider of innovative kiosk solutions for food vending, stores, restaurants, and cafes.`,
      "description": "A more detailed description of the third website goes here.",
      "image": [events1,events2,events3],
      "startdate": "01-05-2023",
        "enddate": "Present",
        "role":"F E Developer",
        "overview":`Perfect Events proudly partners with a renowned technology platform, known for its cutting-edge features and creative user experiences. Together, we are on a mission to redefine the virtual event landscape. Leveraging Next.js for powerful front-end development and hosting on AWS EC2 for reliability, we are dedicated to crafting an SEO-friendly website that perfectly mirrors the innovation and creativity behind Perfect Events.`,
        "technologies":"Next.js , AWS EC2 , HTML/CSS , Typescript/JavaScript, Responsive Design ",
        "projectlinks":["https://stage.perfectpays.events/"],
        "responsibilities":["Perfect Events Team: Dedicated to the overall project management, creative input, and ensuring a perfect blend of technology and creativity.",
        "Technology Partner: The powerhouse behind cutting-edge features and robust technology to make virtual events unforgettable."],
    },
    {
      "id": 4,
      "websitename": "Perfect Kiosk Corporate",
      "companyname": "YOUx Design Tech PVT LTD",
      "briefdescription": `Imagine being able to travel back in time or to the future. Simple turn the knob to the desired date and press "Go". No more worrying about lost keys or forgotten headphones with this simple yet affordable solution.`,
      "description": "A more detailed description of the fourth website goes here.",
      "image": [Corporate1,Corporate2,Corporate3],
      "startdate": "01-05-2023",
        "enddate": "Present",
        "role":"F E Developer",
        "overview":`The "Perfect Corporate Website" project aims to create an engaging and informative online platform for Perfect Corporate, a leading provider of corporate solutions. With a strong focus on user experience, this project leverages Next.js for robust front-end development and AWS EC2 for secure hosting. The goal is to effectively promote Perfect Corporate's offerings, including POS Systems, Corporate Analytics, and Customer Relationship Management (CRM).`,
        "technologies":"Next.js , AWS EC2 , HTML/CSS , Typescript/JavaScript, Responsive Design ",
        "projectlinks":["https://www.perfectcorporate.co/"],
        "responsibilities":["Web Developers: Responsible for the overall development of the website using Next.js and AWS EC2.",
                             "Web Designers: Design and create an engaging user interface with a focus on user experience.",
                             "Project Managers: Oversee the project's progress, timelines, and quality assurance.",
                             "Quality Assurance Testers: Ensure the website functions correctly and troubleshoot any issues."     
      
                            ]
    }
  ]
  
  
  export default data;
  