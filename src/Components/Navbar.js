import { Link } from 'react-router-dom';
import { FaRegBell } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { MdOutlineCloudUpload } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";

const Navbar = () => {
  const [showNewVideoDropdown, setShowNewVideoDropdown] = useState(false); 
  const [showBellDropdown, setShowBellDropdown] = useState(false); 
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); 

  const toggleNewVideoDropdown = () => {
    setShowNewVideoDropdown(!showNewVideoDropdown);
  };

  const toggleBellDropdown = () => {
    setShowBellDropdown(!showBellDropdown);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  return (
    <nav className="bg-white shadow shadow-gray-900 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black  mr-4 font-bold text-2xl">
            Vimeo
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded  p-2 px-16 rounded-full border border-2 border-gray-400 text-black"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <button className="text-black border border-1 border-black font-bold px-4 p-2 rounded-md">
              Upgrade
            </button>
          </div>
          <div className="mr-4" onMouseEnter={toggleNewVideoDropdown} onMouseLeave={toggleNewVideoDropdown}>
            <button className="text-white font-bold bg-blue-400 p-2 px-4  rounded-md flex gap-2 ">
              <h4>New Video</h4>
              <MdKeyboardArrowDown className=' text-2xl'/>
            </button>
            {showNewVideoDropdown && (
              <div className="absolute bg-white mt-2 py-2 w-40 rounded-sm shadow-md" onMouseEnter={toggleNewVideoDropdown} onMouseLeave={toggleNewVideoDropdown}>
                <a href="#" className="flex gap-2 block px-4 py-2 text-gray-800 hover:bg-gray-200 text-[15px]">
                  <MdOutlineCloudUpload className='text-[22px] '/>
                  Upload 
                </a>
                <hr className='border border-1 border-gray-200'/>
                <a href="#" className="flex gap-2 block px-4 py-2 text-gray-800 hover:bg-gray-200 text-[15px]">
                  <MdOutlineCreate className='text-[22px] '/>
                  Create video
                </a>
                <hr className='border border-1 border-gray-200'/>
                <a href="#" className="flex gap-2 block px-4 py-2 text-gray-800 hover:bg-gray-200 text-[15px]">
                  <FaRegCircleDot className='text-[22px] '/>
                  Record screen 
                </a>
                <hr className='border border-1 border-gray-200'/>
                <a href="#" className=" flex gap-2 block px-4 py-2 text-gray-800 hover:bg-gray-200 text-[15px]">
                  <IoVideocamOutline className='text-[22px]'/>
                  Create event 
                </a>
              </div>
            )}
          </div>
          <div className='mr-4' onMouseEnter={toggleBellDropdown} onMouseLeave={toggleBellDropdown}>
            <div className="relative">
              <FaRegBell className='text-2xl text-gray-400 cursor-pointer' />
              {showBellDropdown && (
                <div className="absolute bg-black mt-2  w-20 rounded-sm shadow-md" style={{ left: '50%', transform: 'translateX(-50%)', top: 'calc(100% + 10px)'}} onMouseEnter={toggleBellDropdown} onMouseLeave={toggleBellDropdown}>
                  <a href="#" className="flex justify-center gap-2 block px-4 py-1 text-white  hover:bg-gray-200 text-[15px]">Activity</a>
                
                </div>
              )}
            </div>
          </div>
          <div onMouseEnter={toggleProfileDropdown} onMouseLeave={toggleProfileDropdown}>
            <img
              src="data:image/png;base64,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"
              alt="User Profile"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
         
            <div className="relative">
          
              {showProfileDropdown && (
                <div className="absolute bg-white mt-2  w-96 rounded-sm shadow-md" style={{ left: '50%', transform: 'translateX(-50%)', top: 'calc(100% + 10px)'}} onMouseEnter={toggleProfileDropdown} onMouseLeave={toggleProfileDropdown}>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[15px]">Rohit Sharma</a>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-blue-400  cursor-pointer text-[12px]">View Profile | Edit Profile</a>
                  <hr className='border border-1 border-gray-200'/>
                  <a href="#" className="flex mt-4 gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Library</a>
                  <a href="#" className="flex   gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Collections</a>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Analytics</a>
                  <hr className='border border-1 border-gray-200'/>
                  <a href="#" className="flex mt-4 gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Likes</a>
                  <a href="#" className="flex   gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Watch Later</a>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Purchases</a>
                  <hr className='border border-1 border-gray-200'/>
                  <a href="#" className="flex mt-4 gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Settings</a>
                  <a href="#" className="flex   gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Messages</a>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Vimeo Experts</a>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Send a referral</a>
                  <a href="#" className="flex   gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Help</a>
                  <a href="#" className="flex  gap-2 block px-4 py-1 text-gray-800  hover:bg-gray-200 text-[14px]">Log out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;