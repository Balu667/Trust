import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import "./Contact.scss";
import Breadscrumb from "../../components/Breadscrumb";

const Contact = () => {
  return (
    <>
      <Breadscrumb pageName={"Contact Us"} />
      <section className="contact-section">
        <div className="heading-container">
          <h1 className="heading">Contact Us</h1>
        </div>
        <div className="contact-container">
          <div className="contact-box">
            <div className="contact-icon-container">
              <IoCall className="contact-icon" />
            </div>
            <div className="title">Phone</div>
            <div>
              <p>+91 7780368926</p>
              <p>+91 7780308926</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon-container">
              <FaLocationDot className="contact-icon" />
            </div>
            <div className="title">Location</div>
            <div>
              <p>Taluka Police Station Backside</p>
              <p>Near Rayalaseema University</p>
              <p>B.Thandrapadu, KURNOOL</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-icon-container">
              <IoMdMail className="contact-icon" />
            </div>
            <div className="title">Email</div>
            <div>
              <p>sreenath@nopa.com</p>
              <p>mahendra@nopa.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
