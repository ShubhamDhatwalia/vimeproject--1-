import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {
  const[search,setSearch]=useState("")
   console.log(search)
  return (
    <>
    <BrowserRouter>
     <Navbar setSearch={setSearch}/>
     <Sidebar search={search}/>

     </BrowserRouter>
    </>
  );
}

export default App;





