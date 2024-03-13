import React from 'react';
import videosData from '../data/videos.json';
import { useState } from 'react';
import { MdOutlineCloudUpload } from "react-icons/md";
import { LuArrowDownToLine } from "react-icons/lu";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoCreateOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";

const VideoDisplay = ({search}) => {
  const [currentPoster, setCurrentPoster] = useState(null);

  return (
    <section>
    <div className='grid grid-cols-5 mt-28'>
      <div className='bg-white  w-52 p-4 border border-2 border-gray-200 rounded-md shadow shadow-md shadow-gray-200'>
        <div className='flex gap-4'>
          <div className='bg-cyan-200  w-16 h-8 rounded-md mt-1 '>
             <MdOutlineCloudUpload className='text-blue-600 mx-auto mt-[7px] text-[18px]'/>
          </div>
          <div>
            <h3 className='text-[15px]'><span className='font-bold'>Upload</span> from Computer</h3>
          </div>
        </div>
      </div>
      <div className='bg-white  w-52 p-4 border border-2 border-gray-200 rounded-md shadow shadow-md shadow-gray-200'>
        <div className='flex gap-4'>
        <div className='bg-orange-200  w-16 h-8 rounded-md mt-1 '>
             <LuArrowDownToLine className='text-orange-600 mx-auto mt-[7px] text-[18px]'/>
          </div>
          <div>
            <h3 className='text-[15px]'><span className='font-bold'>Import</span> from Drive and more</h3>
          </div>
        </div>
      </div>
      <div className='bg-white  w-52 p-4 border border-2 border-gray-200 rounded-md shadow shadow-md shadow-gray-200'>
        <div className='flex gap-4'>
        <div className='bg-orange-200  w-16 h-8 rounded-md mt-1 '>
             <FaRegCircleDot className='text-orange-600 mx-auto mt-[7px] text-[18px]'/>
          </div>
          <div>
            <h3 className='text-[15px]'><span className='font-bold'>Record</span> screen and webcam</h3>
          </div>
        </div>
      </div>
      <div className='bg-white  w-52 p-4 border border-2 border-gray-200 rounded-md shadow shadow-md shadow-gray-200'>
        <div className='flex gap-4'>
        <div className='bg-blue-200  w-16 h-8 rounded-md mt-1 '>
             <IoCreateOutline className='text-purple-600 mx-auto mt-[7px] text-[18px]'/>
          </div>
          <div>
            <h3 className='text-[15px]'><span className='font-bold'>Create</span> new or from template</h3>
          </div>
        </div>
      </div>
      <div className='bg-white  w-52 p-4 border border-2 border-gray-200 rounded-md shadow shadow-md shadow-gray-200'>
        <div className='flex gap-4'>
        <div className='bg-green-200  w-16 h-8 rounded-md mt-1 '>
             <IoVideocamOutline className='text-green-600 mx-auto mt-[7px] text-[18px]'/>
          </div>
          <div>
            <h3 className='text-[15px]'><span className='font-bold'>Host</span> event or webinar</h3>
          </div>
        </div>
      </div>
    </div>  

     <div className='flex'>
      <div className='bg-white border border-1 border-gray-200 shadow showdow-md shadow-gray-200 h-60 rounded-lg w-[700px] mt-6'>
       <h2 className='font-bold px-6 mt-12'>Upload an existing video</h2> 
       <h3 className='text-[12px] px-6'>Choose a video from your device to enhance, customize, and<br></br> share like a pro.</h3>
       <button className='flex gap-2 px-2 p-2 bg-blue-400 mx-6 mt-2 rounded-md text-white font-bold text-[14px]'>
          <MdOutlineCloudUpload className='text-[20px] '/>
          Upload
       </button>
      </div>
      <div>
      <iframe className='relative right-12 w-[500px] h-[238px] mt-[25px] rounded-2xl' src="https://www.youtube.com/embed/tN_t2HIq5k0?si=LYivtTzdOzSyAxtC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
     </div>

     
    <div className="mt-24 grid grid-cols-4 gap-8 ">
      {videosData.videos.filter(val=>{
        if(search === ""){
          return true;
        }else if(
          val.title.toLowerCase().includes(search.toLowerCase())
        ){
          return true;
        }
        return false;
      }).map(video => (
        <div key={video.id} className="mb-8  bg-white shadow shadow-gray-900 w-auto h-[350px]  rounded-lg overflow-hidden transition-transform transform hover:scale-110">
          
          <div style={{width:"100%"}}>
          <video
            width="100%"
            height="100%"
            
            onMouseOver={(e) => {
              e.target.play();
              setCurrentPoster("");
            }}
            onMouseOut={(e) => {
              const videoElement = e.target;
              videoElement.pause();
              videoElement.currentTime = 0;
              setCurrentPoster('');
              videoElement.load();
            }}
            poster={currentPoster || video.poster}
          >
            <source src={video.path} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>

             <div className="text-center mt-3">
            <h2 className="text-xl font-bold mr-4">{video.title}</h2>
            <h3 className="text-lg">{video.singer}</h3>
          </div>
        </div>
        
      ))}
    </div>
    </section>
  );
};

export default VideoDisplay;













