import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link1 ,link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project card" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div> {link1} {link2} </div>
        </div>
      </div>
    </Col>
  )
}
