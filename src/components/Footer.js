import React from "react";
import "../css/main.css";
import logos from "../images/attribution-logos.png";

function Footer() {
  return (
    <div className="row footer-container justify-content-center mt-5">
      <div className="col-12 text-center">
        <p>designed by Niklas Böcking</p>
        <a href="https://github.com/Nikolasote/movie-recommender">view code</a>
      </div>
      <div className="col-4 mt-3 text-center">
        <p>powered by</p>
        <img
          className="logos"
          src={logos}
          alt="powered by tastedive and TMDB"
        />
      </div>
    </div>
  );
}

export default Footer;
