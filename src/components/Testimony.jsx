import React from "react";
import jonathan from "../img/jonah.png";

const Testimony = () => {
  return (
    <section className="testimonials">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        ad. Quidem, adipisci harum. Dolorem sint, deleniti exercitationem
        doloremque ipsam aperiam?
      </p>
      <img src={jonathan} alt="jonah" width={100} />
    </section>
  );
};

export default Testimony;
