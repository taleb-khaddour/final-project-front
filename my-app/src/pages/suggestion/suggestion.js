import React, { useState } from "react";
import "./suggestion.css";
import Nav from "../../components/Navbar/Navbar.js";
import Footer from "../../components/footer/footer.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSmile } from "react-icons/fa";

const Suggestion = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      description: description,
    };
    console.log(formData);

    fetch("https://idecream-backend.onrender.com/api/suggestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
        toast.success("Your email has been sent. Thank you!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Reset the form fields
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("error", error);
      });
  };

  return (
    <>
      <Nav />
      <section className="suggestion" id="suggestion">
        <div className="suggestion-content">
          <div className="gap-suggestion">
            <br />
          </div>
          <div className="content">
            <div className="text-content">
              <h3>
                Share Your Ice Cream Ideas with Us! <FaSmile width={30} />
              </h3>

              <p>
                Welcome, Visitor! We believe that your idea is crucial for
                creating exciting new ice cream flavors.
                
              </p>
              <p>
                We value your input and creativity when it comes to crafting
                delicious frozen treats. Your idea has the potential to bring a
                unique and refreshing experience to ice cream lovers everywhere.
                
              </p>
            </div>

            <div className="suggestion-row">
              <form onSubmit={handleSubmit}>
                <h3>Send Us Your Suggestion</h3>
                <input
                  type="text"
                  placeholder="Name of your new suggestion"
                  className="suggestion-box"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <textarea
                  placeholder="Your Suggestion"
                  className="suggestion-box"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  cols="30"
                  rows="10"
                />
                <button type="submit" className="contact-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
      <Footer />
    </>
  );
};

export default Suggestion;
