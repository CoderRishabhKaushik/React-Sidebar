import {  faGauge, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const sidebarItems = [
  {
    title: "Dashboard",
    icon: faGauge, 
    sublinks: [
      { title: "Analytics", icon: "-", path: "/" },
      { title: "CRM", icon: "-", path: "/" },
      { title: "Ecommerce", icon: "-", path: "/" },
      { title: "Crypto", icon: "-", path: "/" },
      { title: "Projects", icon: "-", path: "/" },
      { title: "NFT", icon: "-", path: "/" },
      { title: "JOB", icon: "-", path: "/" }
    ]
  },
  {
    title: "Apps",
    icon: faMobileAlt, 
    sublinks: [
      { title: "Calendar", icon: "-", path: "/" },
      { title: "Chat", icon: "-", path: "/" },
      { title: "Email", icon: "-", path: "/" },
     
      
    ]
  }
];

export default sidebarItems;
