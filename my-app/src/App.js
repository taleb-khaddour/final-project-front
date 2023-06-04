import React from "react";
import "./index.css";
// import Navbar from './components/nav/index.js';
import Home from "./pages/home/home.js";
import About from "../src/pages/about/about.js";
import Contact from "../src/pages/contact/contact.js";
import Product from "../src/pages/product/product.js";
// import Suggestion from "../src/pages/suggestion/suggestion.js";
import { Route, Routes } from "react-router-dom";
import WhatsAppLink from "./components/watsapp/watsapp.js";
import Product_detail from "./pages/product-detail/detail.js";
import Loading from "./components/loading/loading.js";
import NOTFOUND from "./404/404notFound/notfound.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<Product_detail />} />
        <Route path="/loading" element={<Loading />} />
       

        <Route path="/*" element={<NOTFOUND />} />
      </Routes>
      <WhatsAppLink
        phoneNumber="+96179143503"
        message="Hello, please check my orders:
        
        ."
      />
    </div>
  );
}

export default App;
