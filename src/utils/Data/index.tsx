
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
}[]= [
    {
      "id": 1,
      "websitename": "CommShell",
      "companyname": "Himpact Techonologies PVT LTD",
      "briefdescription": "The Commshell project is a comprehensive e-commerce platform available on both web and mobile applications, with a primary focus on user-friendly shopping experiences. It encompasses various modules such as Stores, Products, Banner Advertisements, Geomaps, Login, Profile, Cart, Favorite Pages, and more..",
      "description": "A more detailed description of the first website goes here.",
      "image": [commshell1,commshell2,commshell3]
    },
    {
      "id": 2,
      "websitename": "Perfect Kiosk Website",
      "companyname": "YOUx Design Tech PVT LTD",
      "briefdescription": "The Perfect Kiosk Website project aims to deliver a comprehensive online platform for Perfect Kiosk, a leading provider of innovative kiosk solutions for food vending, stores, restaurants, and cafes.",
      "description": "A more detailed description of the second website goes here.",
      "image": [kios1,kios2,kios3]
    },
    {
      "id": 3,
      "websitename": "Perfect Kiosk Events",
      "companyname": "YOUx Design Tech PVT LTD",
      "briefdescription": `The "Perfect Kiosk Events" project aims to deliver a comprehensive online platform for Perfect Kiosk, a leading provider of innovative kiosk solutions for food vending, stores, restaurants, and cafes.`,
      "description": "A more detailed description of the third website goes here.",
      "image": [events1,events2,events3]
    },
    {
      "id": 4,
      "websitename": "Perfect Kiosk Corporate",
      "companyname": "YOUx Design Tech PVT LTD",
      "briefdescription": `Imagine being able to travel back in time or to the future. Simple turn the knob to the desired date and press "Go". No more worrying about lost keys or forgotten headphones with this simple yet affordable solution.`,
      "description": "A more detailed description of the fourth website goes here.",
      "image": [Corporate1,Corporate2,Corporate3]
    }
  ]
  
  
  export default data;
  