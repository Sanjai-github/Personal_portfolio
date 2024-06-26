import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import weatherApp from "../assets/img/project/weather_app.jpg";
import projImg2 from "../assets/img/project-img2.png";
import Portfolio from "../assets/img/project/portfolio.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather Forecast App",
      description: "React | Tailwind CSS | Rapid API | Netlify",
      imgUrl: weatherApp,
      link1: <a className="certi-link" href="https://sanjai-weather.netlify.app/">[LIVE]</a>,
      link2: <a className="certi-link" href="https://github.com/Sanjai-github/My_React_Weather_App">[CODE]</a>,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link1: <a className="certi-link" href="https://sanjai-weather.netlify.app/">[LIVE]</a>,
      link2: <a className="certi-link" href="https://github.com/Sanjai-github/My_React_Weather_App">[CODE]</a>,
    },
    {
      title: "Personal Portfolio",
      description: "React | Bootstrap | NodeMailer | Netlify",
      imgUrl: Portfolio,
      link1: <a className="certi-link" href="https://portfolio-sanjai.netlify.app/">[LIVE]</a>,
      link2: <a className="certi-link" href="https://github.com/Sanjai-github/Personal_portfolio">[CODE]</a>,
    },    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                I have undertaken a diverse range of projects to thoroughly test and refine my expertise in my technology stack, with a strong emphasis on enhancing my collaborative abilities and consistently delivering clean, efficient code. My work reflects a commitment to excellence and a passion for continuous learning, making me a valuable asset to any team.  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="second">My Works</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="project"></img>
    </section>
  )
}
