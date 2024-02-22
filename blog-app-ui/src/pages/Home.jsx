import React from "react";
import { Image } from "../assets/svgs";

function Home() {
  return (
    <div>
      {/* Text */}
      <div>
        <h1>Embrace the Digital Revolution</h1>
        <p>
          Our online solutions offer unparalleled convenience, efficiency, and
          security, enabling users to streamline their financial operations and
          eliminate the hassle of traditional payment methods.
        </p>
      </div>
      {/* Image */}
      <div>
        <img src={Image} alt="main-logo" />
      </div>
    </div>
  );
}

export default Home;
