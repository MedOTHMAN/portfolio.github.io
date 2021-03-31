import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

export const About = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <ButtonsBottom left={"/"} right={"/project-1"} />
      </div>
      <div className="about-content">
        <div className="text-content">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            quae perspiciatis provident accusantium dolorem amet commodi culpa
            quam iusto odio doloremque! Iste quod quos qui. Velit sint veniam
            debitis quibusdam.
          </h1>
        </div>
        <div className="img-content">
            <img src="" alt="img" style={{width:"300px",height:"300px"}}></img>
        </div>
      </div>
    </main>
  );
};

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBottom left={"/about"} right={"/project-2"} />
      </div>
    </main>
  );
};
export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};
export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBottom left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};
export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBottom left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};
