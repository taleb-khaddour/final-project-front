import React from 'react';
import "./suggestion.css";
import Detail from "../product-detail/detail.js";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";

const Suggestion = ({ suggestion, onAdd, onDelete }) => {
  
  return (
  <>
  <Nav />
  <Detail />
  <Footer />
  </>
  );
};

export default Suggestion;