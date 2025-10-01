import React, { useState, useEffect } from "react"
import style from "./contact.module.css"
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook, FaPaperPlane, FaCheckCircle, FaEnvelope, FaAddressBook } from "react-icons/fa"
import contact from "../../assets/contact-img.jpg"
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    let timer;
    if (popupVisible && countDown > 0) {
      timer = setInterval(() => {
        setCountDown((prev) => prev -1);
      }, 1000);
    } else if (countDown === 0) {
      setPopupVisible(false);
    }
    return () => clearInterval(timer);
  }, [popupVisible, countDown]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_o5nz6wi";
    const templateID = "template_2ys36j9";
    const userID="9UWmoAXcgLI_dbOkv";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setPopupVisible(true);
        setCountDown(3);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setPopupVisible(false);
        }, 3000);
      })      
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again!");
      })    
  };

  return (
    <div>
      <div className="p-5"></div>
      <div className={style.container}>
        <h1>Contact</h1>
        <div className="p-5"></div>
        <div className={style.contactContainer}>
          <div className={style.partOne}>
            <div className={style.socialMedia}>
              <p>If you'd like to connect with me, please feel 
                free to click on any of the social media links 
                provided below. I'm eager to hear from you and am 
                here to assist you with any questions or concerns 
                you may have. Don't hesitate to reach out at any time!
              </p>
              <div className={style.socialBtn}>
                <a href="https://www.linkedin.com/in/thiwanka-dissanayake-tld">
                  <FaLinkedinIn size={25} />
                </a>
                <a href="https://github.com/Thiwanka-dot">
                  <FaGithub size={25} />
                </a>
                <a href="https://www.instagram.com/_ted_zeo/?igshid=YTQwZjQ0NmI0OA%3D%3D">
                  <FaInstagram size={25} />
                </a>
                <a href="https://www.facebook.com/people/Thiwanka-Dissanayake/pfbid027F8PsVhNWg294DEajCbyPWy4N6ufRBc6RbnpWLP4JjYMHWzkDuPcV8xXRNPBiEbMl/">
                  <FaFacebook size={25} />
                </a>
              </div>
              <div className={style.contactInfo}>
                <div className={style.contactInfoItem}>
                  <FaEnvelope />
                  <span>thiwankadissanayake42@gmail.com</span>
                </div>
                <div className={style.contactInfoItem}>
                  <FaAddressBook />
                  <span>+94 70 164 8059</span>
                </div>
              </div>
              <div className={style.separator}></div>
              <div className={style.contactForm}>
                <h2>Get in Touch</h2>
                <p>Feel free to reach out with any inquiries or concerns. 
                  I'm here to help! 😁
                </p>
                <form onSubmit={handleSubmit}>
                  <div className={style.nameCon}>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                  <input type="text" name="subject" placeholder="Subject Title" value={formData.subject} onChange={handleChange} required />
                  <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                  <button type="submit"><FaPaperPlane /><p>Send Message</p></button>
                </form>
              </div>          
            </div>
          </div>
          <div className={style.partTwo}>
            <img src={contact} alt="Contact Image" />
          </div>
        </div>
      </div>
      {popupVisible && (
        <div className={style.popup}>
          <div className={style.popupContent}>
            <FaCheckCircle size={70} color="green" />
            <h1>Email Sent Successfully!</h1>
            <p>I will reach out to you soon...</p>
            <p><em>Closing in {countDown}</em></p>
          </div>
        </div>
      )}
    </div>
  );
}
