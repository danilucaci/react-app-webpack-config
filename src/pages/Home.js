import React, { useEffect } from "react";

import "../styles/Home.scss";

import Main from "../components/Main/Main";
import Nav from "../components/Nav/Nav";
import Image from "../components/Image/Image";
import image1 from "../images/image-1.jpg";
import { getDatePlus2, logger2 } from "../utils/helpers";

function Home() {
  useEffect(() => {
    logger2();
  }, []);

  return (
    <>
      <Nav />
      <Main>
        <section className="Home">
          <div className="Row">
            <div className="Col">
              <h1>Home</h1>
              <hr className="HR" />
              <p>{getDatePlus2()}</p>
              <p>
                Voluptate lipsum magna ad cupidatat minim elit dolor. Officia
                magna ad cillum pariatur aliquip ullamco culpa. Ea velit quis
                fugiat non aute sit dolore voluptate irure aliqua. Aliqua dolor
                nulla eu eu ad cupidatat. Est qui aliqua et eiusmod culpa nulla.
                Lorem ut adipisicing sint sunt deserunt labore pariatur est.
                Tempor quis ipsum et reprehenderit. Exercitation anim ea nulla
                velit labore nisi sit consequat incididunt cupidatat.
              </p>
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <Image src={image1} />
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <p>
                Misi occaecat ut ullamco anim est deserunt dolor elit proident
                nisi ullamco sit. Enim culpa ullamco in ipsum deserunt enim
                eiusmod adipisicing culpa. Aliquip duis duis id adipisicing
                occaecat sunt nostrud exercitation labore reprehenderit esse
                reprehenderit incididunt. Nostrud laboris cupidatat mollit
                adipisicing adipisicing occaecat adipisicing ex tempor excepteur
                commodo labore laboris occaecat. Non incididunt sit
                reprehenderit reprehenderit ex aliquip ad fugiat pariatur tempor
                velit mollit esse adipisicing. Ex ullamco laboris velit
                deserunt.
              </p>
            </div>
          </div>
          <div className="Row">
            <div className="Col">
              <p>
                Nisi occaecat ut ullamco anim est deserunt dolor elit proident
                nisi ullamco sit. Enim culpa ullamco in ipsum deserunt enim
                eiusmod adipisicing culpa. Aliquip duis duis id adipisicing
                occaecat sunt nostrud exercitation labore reprehenderit esse
                reprehenderit incididunt. Nostrud laboris cupidatat mollit
                adipisicing adipisicing occaecat adipisicing ex tempor excepteur
                commodo labore laboris occaecat. Non incididunt sit
                reprehenderit reprehenderit ex aliquip ad fugiat pariatur tempor
                velit mollit esse adipisicing. Ex ullamco laboris velit
                deserunt.
              </p>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
}

export default Home;
