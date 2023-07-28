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
