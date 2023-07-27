// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  // UilChart,
 
} from "@iconscout/react-unicons";



import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png'

// Sidebar Data
export const SidebarData = [
  {
    id:1,
    icon: UilEstate,
    heading: "Home",
  },
  {
    id:2,
    icon: UilUsersAlt,
    heading: "Profile",
  },
  
  {
    id:3,
    icon: UilClipboardAlt,
    heading: "Examination",
  },
  {
    id:4,
    icon: UilPackage,
    heading: 'Change-Password'
  },
 
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Operating system",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "21/30",
    png: UilClipboardAlt,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Computer Networking",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "24/30",
    png: UilClipboardAlt,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "OOPS",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "18/30",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
   
    time: "Full Day",
  },
  {
    img: img2,
    name: "James Bond",
   
    time: "Full Day",
  },
  {
    img: img3,
    name: "A.Kundu",
   
    time: "Half day",
  },
];

export const Announcements = [
  {
    
    titel: "Academic",
   
    info:"Summer training intership with Live Projects"
  },
  {
    titel: "Co-curricular",
   
    info:"Global intership Oportunity by Student organization"
  },
  {
    titel: "Examination",
   
    info:"instructions for Mid Term Examination"
  },
];
