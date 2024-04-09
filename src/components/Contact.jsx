import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
function Contact() {
  return (
    <>
    <div className="container contact"
    id="contact"
    data-aos="flip-up"
    data-aos-duration="2000">
      <h1>CONTACT ME</h1>
      <div className="contact-icon" >
        <a href="https://www.linkedin.com/in/pratham-sehgal/" target="_blank" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/Pratham-Sehgal" target="_blank" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:prthmsehgal1@gmail.com" target="_blank" className="items">
          <SiGmail className="icons" />
        </a>
        <a href="https://leetcode.com/prathamsehgal/" target="_blank" className="items">
          <SiLeetcode className="icons" />
        </a>
      </div>
      </div>
    </>
  );
}

export default Contact;
