import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar "
      data-aos="fade-down"
      data-aos-duration="1000">
        <div className="left nav_item">Portfolio</div>
        <div className="right">
          <a href="#home" className="nav_item">Home</a>
          {/* <a href="" className="nav_item">Experience</a> */}
          <a href="#Skills" className="nav_item">Skills</a>
          <a href="#project" className="nav_item">Project</a>
          <a href="#education" className="nav_item">Education</a>
          <a href="#contact" className="nav_item">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
