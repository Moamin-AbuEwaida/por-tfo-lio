import React from "react";
import me from "../img/me.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="brief">
        <div>
          <h1>
            <span className="im">I'm</span>
          </h1>
          <h1>Moamin Abuewaida</h1>
          <p>A javascript Fullstack developer aiming to develope projects</p>
        </div>
        <button className="cta">See My Projects</button>
      </div>
      <figure>
        <img src={me} alt="Moamin" />
      </figure>
    </section>
  );
};

export default Hero;
