import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

import {
  SiReact, SiTypescript, SiJavascript, SiRedux, SiTailwindcss,
  SiReactquery, SiNodedotjs, SiVite, SiSass, SiFirebase, SiGit
} from "react-icons/si";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
  };

  const skills = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiRedux />, name: "Redux / RTK Query" },
    { icon: <SiReactquery />, name: "React Query" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiSass />, name: "Sass" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGit />, name: "Git" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I work primarily with React and TypeScript, building interfaces backed by solid state management (Redux, RTK Query, React Query) and clean, scalable styling with Tailwind CSS. Beyond writing components, I care about the full picture — form validation, performance optimization, SEO, and testing — so what I ship holds up in production, not just in a demo.</p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-icon">{skill.icon}</div>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Ima" />
    </section>
  );
};