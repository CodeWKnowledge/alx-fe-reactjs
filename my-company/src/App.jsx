import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

function App() {
return( 
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  </>
  )
}

export default App;
