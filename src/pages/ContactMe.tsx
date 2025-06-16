import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import profilePic from "../images/sumanth.jpeg";
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from "react-icons/fa";
import { ContactMe as IContactMe } from "../types";
import { getContactMe } from "../queries/getContactMe";

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }

    fetchUserData();
  }, []);

  console.log("🚀 ~ ContactMe ~ userData:", userData);
  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img
          src={userData.profilepicture.url}
          alt="Yusuf Orhan Okkabas"
          className="badge-avatar"
        />
        <div className="badge-content">
          <h3 className="badge-name">{userData?.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyuniversity}</p>
          <a
            href={userData.linkedinlink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phonenumber}`} className="contact-link">
            {userData.phonenumber}
          </a>
        </div>
        {/* <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div> */}
      </div>
    </div>
  );
};

export default ContactMe;
