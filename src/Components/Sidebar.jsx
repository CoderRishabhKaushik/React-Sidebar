import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faFire } from '@fortawesome/free-solid-svg-icons';
import sidebarItems from "../Data/items.js";

const Sidebar = () => {
  const [activeItems, setActiveItems] = useState(Array(sidebarItems.length).fill(false));

  const toggleSublinks = (index) => {
    const newActiveItems = [...activeItems];
    newActiveItems[index] = !newActiveItems[index];
    setActiveItems(newActiveItems);
  };

  return (
    <div className="bg-[#075985] w-[250px] h-[100vh] flex flex-col overflow-auto ">
      <FontAwesomeIcon icon={faFire} className="text-white text-4xl mt-4" />
      <p className="text-white font-semibold items-center text-center">V R O Z A R T</p>
      <p className="text-white text-[10px] ml-4 mt-6">Menu</p>
      {sidebarItems.map((item, index) => (
        <div key={index}>
          <div
            className="flex items-center justify-between py-2 px-4 mt-4 cursor-pointer"
            onClick={() => toggleSublinks(index)}
          >
            <div className="flex items-center">
              {item.icon && (
                <FontAwesomeIcon icon={item.icon} className="text-white mr-2" />
              )}
              <p className="text-white">{item.title}</p>
            </div>
            {item.sublinks && (
              <FontAwesomeIcon
                icon={activeItems[index] ? faAngleUp : faAngleDown}
                className="text-white"
              />
            )}
          </div>
          {activeItems[index] && item.sublinks && (
            <div className="pl-8">
              {item.sublinks.map((sublink, subIndex) => (
                <div key={subIndex} className="flex items-center mt-5 cursor-pointer">
                  <p className="text-white mr-4">-</p> 
                  {sublink.icon && (
                    <FontAwesomeIcon icon={sublink.icon} className="text-white mr-2" />
                  )}
                  <p className="text-white">{sublink.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
