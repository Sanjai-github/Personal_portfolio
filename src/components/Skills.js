import Java from "../assets/img/skills/java.svg";
import React from "../assets/img/skills/react.svg";
import Html from "../assets/img/skills/html.svg";
import CSS from "../assets/img/skills/css.svg";
import Tailwind from "../assets/img/skills/tailwind.svg";
import JavaScript from "../assets/img/skills/javascript.svg";
import SQL from "../assets/img/skills/sql.svg";
import MongoDB from "../assets/img/skills/mongodb.svg";
import GraphQL from "../assets/img/skills/graphql.svg";
import Spring from "../assets/img/skills/spring.svg";
import Express from "../assets/img/skills/express.svg";
import Node from "../assets/img/skills/node.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I take great pleasure in writing clear, clean, and efficient code using a variety of programming languages. Through dedicated learning and hands-on experience, I have honed my skills in several key technologies, making me a valuable asset to any development team. <br/>  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Html} alt="Skill-html" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={CSS} alt="skill-css" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={JavaScript} alt="skill-javascript" />
                                <h5>JAVA SCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="skill-react" />
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={Tailwind} alt="skill-tailwind" />
                                <h5>TAILWIND CSS</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="skill-Java" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={Spring} alt="skill-spring" />
                                <h5>SPRING</h5>
                            </div>
                            <div className="item">
                                <img src={Express} alt="skill-express" />
                                <h5>EXPRESS JS</h5>
                            </div>
                            <div className="item">
                                <img src={Node} alt="skill-node" />
                                <h5>NODE JS</h5>
                            </div>
                            <div className="item">
                                <img src={SQL} alt="Skill-sql" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={MongoDB} alt="skill-mongoDB" />
                                <h5>MONGO DB</h5>
                            </div>
                            <div className="item">
                                <img src={GraphQL} alt="skill-graphql" />
                                <h5>GRAPHQL </h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="BgImage" />
    </section>
  )
}
