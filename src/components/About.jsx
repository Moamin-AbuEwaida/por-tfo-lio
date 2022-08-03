import React from "react";
import me from "../img/About-me-img.png";

const About = () => {
  return (
    <section className="aboutMe" id="about">
      <main>
        <figure>
          <img src={me} alt="Moamin" width={350} />
        </figure>
        <div>
          <h2>ABOUT ME</h2>
          <h1 id="who-am-i">WHO AM I</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            provident animi! Aliquam, dolorum omnis! Adipisci est aperiam, odio,
            veniam placeat pariatur natus neque minus, amet rerum ab et magnam
            exercitationem laboriosam ea. Tempore accusantium voluptatum eos
            incidunt, eum laboriosam pariatur quae molestias expedita,
            necessitatibus sapiente molestiae ex! Iusto, quod corrupti.
          </p>
          <div>
            <button className="cta black-filled">HIRE ME</button>
            <button className="cta-outline black">See My Resume</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
