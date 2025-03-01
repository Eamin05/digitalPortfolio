"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { dancingScript, playfairDisplay, poppins } from "./Fonts";
import "../styles/Contact.scss";
import { Button } from "antd";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Success & Error Notifications
  const notifySuccess = () => toast.success("Message sent successfully!");
  const notifyError = (msg) => toast.error(`Failed to send message: ${msg}`);

  // Handle Form Input Change
  const handleChange = (name, value) => {
    // const { name, value } = event.target;
    console.log({ name, value });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Load environment variables
    const serviceId = "service_8eyv5z8";
    const templateId = "template_ntu90ag";
    const userId = "41LseswCEaTaksK_z";

    // Check if env variables are loaded correctly
    if (!serviceId || !templateId || !userId) {
      console.error("Missing EmailJS environment variables.");
      notifyError("EmailJS configuration error. Check .env file.");
      setLoading(false);
      return;
    }

    const emailJsUrl = "https://api.emailjs.com/api/v1.0/email/send";
    const emailData = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        to_name: "Aman",
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
    };

    console.log("Sending request to EmailJS with data:", emailData);

    try {
      const response = await axios.post(emailJsUrl, emailData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response);

      if (response.status === 200) {
        notifySuccess();
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        notifyError(`Unexpected response: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      notifyError(error.response?.data || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-part">
        <Image src={"/contact.png"} width={300} height={300} alt="code" />
      </div>
      <div className={`contact-part contact-form ${poppins.className}`}>
        <h1>Contact Me</h1>
        <div className="">
          <form onSubmit={handleSubmit} className="">
            <div className="fields-container">
              <div className={`contact-fields`}>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e?.target?.value)}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className={`contact-fields`}>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e?.target?.value)}
                  required
                  className=""
                  placeholder="Your Email"
                />
              </div>
              <div className={`contact-fields`}>
                <input
                  type="number"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e?.target?.value)}
                  required
                  className=""
                  placeholder="Phone Number"
                />
              </div>
              <div className={`contact-fields`}>
                <textarea
                  rows="6"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e?.target?.value)}
                  required
                  className=""
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <Button htmlType="submit" type="primary" className="submit-btn">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
