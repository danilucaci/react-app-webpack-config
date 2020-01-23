import React from "react";

import "../styles/About.scss";

import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import Image from "../components/Image/Image";
import image2 from "../images/image-2.jpg";
import { getDatePlus1, getParagraphs } from "../utils/helpers";

function About() {
  return (
    <>
      <Nav />
      <Main>
        <section className="About">
          <div className="Row">
            <div className="Col">
              <h1>About Page</h1>
              <hr className="HR" />
              <p>{getDatePlus1()}</p>
              <Image src={image2} />
            </div>
          </div>
          {getParagraphs().map((entry) => (
            <div key={entry.id} className="Row">
              <div className="Col">
                <p>{entry.text}</p>
              </div>
            </div>
          ))}
        </section>
      </Main>
    </>
  );
}

export default About;
