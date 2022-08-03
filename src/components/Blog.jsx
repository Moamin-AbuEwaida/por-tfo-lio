import React from "react";
import post1 from "../img/post1.png";
import post2 from "../img/post2.png";
import post3 from "../img/post3.png";

const Blog = () => {
  return (
    <section className="blog">
      <h1 className="headings">My Blog</h1>
      <main>
        <article>
          <figure>
            <img src={post1} alt="semantic versioning" width={300} />
          </figure>
          <div>
            <h2>SEMANTIC VERSIONING</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              distinctio reprehenderit provident quis ab eligendi!
            </p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
        <article>
          <figure>
            <img src={post2} alt="CONTRIBUTTING TO OS" width={300} />
          </figure>
          <div>
            <h2>CONTRIBUTTING T0 OS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              distinctio reprehenderit provident quis ab eligendi!
            </p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
        <article>
          <figure>
            <img src={post3} alt="REACT COMPONENTS" width={300} />
          </figure>
          <div>
            <h2>REACT COMPONENTS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              distinctio reprehenderit provident quis ab eligendi!
            </p>
            <button className="cta-outline black">Read More</button>
          </div>
        </article>
      </main>
    </section>
  );
};

export default Blog;
