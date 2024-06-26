import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/x.svg';
import navIcon3 from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <h1 className="style-script-regular">Sanjai</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/sanjai02"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://x.com/sanjaistwt"><img src={navIcon2} alt="Twitter" /></a>
                <a href="https://github.com/Sanjai-github"><img src={navIcon3} alt="Github" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
