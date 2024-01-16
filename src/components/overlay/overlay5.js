import arrow from "../../components/images/arrow-path.svg";
import { Button } from "ui-waves";
import connect from "../../components/images/connect.png";
import { Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";

const Overlay5 = () => {
  const handleNavigation = (url) => {
    window.location.href = url; // Navigate to the specified URL
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields (same as before)

    // If validation passes
    try {
      const response = await fetch("https://protfolio-server-1rg1.onrender.com/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      toast.success("Thank u for connecting will reach you soon");
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error submitting form:", error);
      toast.error("Try again later");

    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <img src={arrow} alt="arrow" className="connect" />
          <h2 className="letsconnect">Let's Connect</h2>
          <div className="d-flex cstm-box" style={{ padding: "0 50px" }}>
            <Twitter
              style={{ margin: "0 8px", cursor: "pointer" }}
              onClick={() =>
                handleNavigation("https://twitter.com/your_twitter_handle")
              }
            />
            <LinkedIn
              style={{ margin: "0 8px", cursor: "pointer" }}
              onClick={() =>
                handleNavigation(
                  "https://in.linkedin.com/in/ashraf-p-2a5254172"
                )
              }
            />
            <Instagram
              style={{ margin: "0 8px", cursor: "pointer" }}
              onClick={() =>
                handleNavigation("https://www.instagram.com/as_hr_af_pk/")
              }
            />
            <WhatsApp
              style={{ margin: "0 8px", cursor: "pointer" }}
              onClick={() =>
                handleNavigation("whatsapp://send?phone=+918086008433")
              }
            />
          </div>
          <div className="glass-card">
          <form onSubmit={handleSubmit} className="input-boxes">
              <img src={connect} alt="aa" width={260} />
              <input
                type="text"
                name="name"
                className="cstm-input-box"
                placeholder="Name"
                value={formData.name} 
                
                onChange={handleChange} 
              />
              
              <input
                type="text"
                name="email"
                className="cstm-input-box"
                placeholder="Email"
                value={formData.email} 
                onChange={handleChange} 
              />
              <input
                type="text"
                name="contact"
                value={formData.contact} 
                onChange={handleChange} 
                className="cstm-input-box"
                placeholder="Contact Number"
              />
              <textarea className="cstm-input-box" name="message" placeholder="Message"   value={formData.message} 
                onChange={handleChange} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button label="Submit" variant="classic" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay5;
