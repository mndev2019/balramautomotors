import React from "react";
// import loaderGif from '../assets/Image/loadergif.gif'
import logo from "../assets/Image/newlogo.png";

const Loader = () => {
  return (
    // <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    //   <img src={loaderGif} alt="Loading..." className="w-100 h-100" />
    // </div>
    <div className="overlay">
      <div class="car-container">
        <img src={logo} className="h-[40px] z-20 absolute bottom-[48%] left-[18%]"/>
        <div class="car">
          <div class="window"></div>
          <div class="cargo-details"></div>
          <div class="door"></div>
          <div class="lights"></div>
        </div>
        <div class="wheels wheels1"></div>
        <div class="wheels wheels2"></div>
        <div class="street"></div>
        <div class="post"></div>
      </div>
    </div>


  );
};

export default Loader;
