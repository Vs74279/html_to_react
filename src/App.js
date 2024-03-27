import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Bloggrid from "./pages/bloggrid";
import Blogsidebar from "./pages/Blogsidebar";
import Blogsingle from "./pages/Blogsingle";
import Pricing from "./pages/Pricing";
import Project from "./pages/Project";
import Service from "./pages/Service";
import {Routes, Route} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={  <About/>} />
        <Route path="/bloggrid" element={<Bloggrid/> } />
        <Route path="/blogsidebar" element={  <Blogsidebar/>} />
        <Route path="/blogsingle" element={  <Blogsingle/>} />
        <Route path="/contact" element={    <Contact/>} />
        <Route path="/service" element={ <Service/>} />
        <Route path="/project" element={ <Project/>} />
        <Route path="/pricing" element={  <Pricing/>} />


      </Routes>

    </div>
  );
}

export default App;
