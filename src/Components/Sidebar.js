

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import VideoDisplay from './VideoList';
import { GoHome } from "react-icons/go";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { MdOutlineLiveTv } from "react-icons/md";


const Sidebar = ({search}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <section >
        <div className='flex gap-40 justify-center'>
         <div>
         <div className={`bg-white shadow shadow-gray-900 mt-[82px] h-full w-64 fixed abc top-0 left-0 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4">
          <button onClick={onToggleSidebar} className="text-black relative left-52 text-2xl">
            {isOpen ? <MdClose /> : null}
          </button>
          <h2 className="text-white">Sidebar</h2>
          <div className='bg-gray-200 p-2 rounded-md text-center'>
            <h3>Start your team</h3>
          </div>
          <ul className="mt-4">
            <li className='mt-4'>
              <Link className='flex gap-2 text-xl bg-gray-200 w-full p-2' to="/">
              <GoHome className='mt-1'/>
                Home</Link>
            </li>
            <li className='mt-4'>
              <div className='flex justify-between'>
                <div>
                <Link className='flex gap-2 text-xl' to="/library">
                <MdOutlineVideoLibrary className='mt-1'/>
                Library</Link>
                </div>
                <div>
                  <GoPlus className='text-xl mt-1'/>
                </div>
              </div>
             
            </li>
            <li className='mt-4'>
              <Link className='flex gap-2 text-xl' to="/live-events">
                <IoVideocamOutline className='mt-1'/>
                Live Events</Link>
            </li>
          </ul>
       
        <hr className="border border-t border-gray-200" />
        <div className="p-4">
          <h2 className="text-black">More Options</h2>
          <ul className="mt-4">
            <li className='mt-4'>
              <div className='flex justify-between'>
                <div>
                <Link className='flex gap-2 text-xl' to="/showcases">
                <AiTwotoneAppstore className='mt-1'/>
                Showcases</Link>
                </div>
                <div>
                  <GoPlus className='text-xl mt-1'/>
                </div>
              </div>
              
            </li>
            <li className='mt-4'>
              <Link className="flex gap-2 text-xl" to="/analytics">
                <SiSimpleanalytics className='mt-1'/>
                Analytics</Link>
            </li>
            <li className='mt-4'>
              <Link className='flex gap-2 text-xl' to="/monetize">
                <MdOutlineLiveTv className='mt-1'/>
                Monetize</Link>
            </li>
          
          </ul>
        </div>
        
        </div>
        <hr className="border border-t border-gray-200 w-full" />
      </div>

      <div
        className={`fixed top-4 left-4 cursor-pointer ${isOpen ? 'hidden' : ''}`}
        onClick={onToggleSidebar}
      >
         <h1 className='mt-20 text-gray-400 text-4xl'> 
           <GiHamburgerMenu />
           </h1>
        
      </div>
         </div>
         
         
         <div className="">
         <VideoDisplay search={search}/>
         </div>
        </div>
      </section>

    </>
  );
};

export default Sidebar;
