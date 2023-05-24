import React from 'react';
import "./index.css";
// import Navbar from './components/nav/index.js';
import Home from './pages/home/home.js';
import About from "../src/pages/about/about.js";
import Contact from "../src/pages/contact/contact.js";
import Product from "../src/pages/product/product.js";
// import Suggestion from "../src/pages/suggestion/suggestion.js";
import { Route, Routes } from 'react-router-dom';
import WhatsAppLink from"./components/watsapp/watsapp.js";
function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        {/* <Route path="/suggestion" element={<Suggestion />}/> */}

       
      </Routes>
      <WhatsAppLink phoneNumber="+96103138537" message="Hello, I'm interested in your product." />
       
    </div>
  );
}

export default App;
