import React from "../assets/img/skills/react.svg";
import wipro from "../assets/img/certificate/wipro.svg";
import autodesk from "../assets/img/certificate/autodesk.svg"
import coursera from "../assets/img/certificate/coursera.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Certification = () => {
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
    <section className="skill" id="certification">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Certifications</h2>
                        <p>I have done some certification on various technologies, through online and offline.<br></br> Some of my certifications are <br/>  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={coursera} alt="certi-coursera" />
                                <h5>DIGITAL MARKETING <a className="certi-link" href="https://www.coursera.org/account/accomplishments/professional-cert/F7P9AVW2H9QC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"> : [LINK]</a></h5>
                            </div>
                            <div className="item">
                                <img src={wipro} alt="certi-wipro" />
                                <h5>Java J2EE <a className="certi-link" href="https://cert.diceid.com/csr/cid/3egE59"> : [LINK]</a></h5>
                            </div>                           
                            <div className="item">
                                <img src={coursera} alt="certi-coursera" />
                                <h5>FULL STACK DEV. <a className="certi-link" href="https://www.coursera.org/account/accomplishments/verify/H768M56HL3TH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"> : [LINK]</a></h5>
                            </div>
                            <div className="item">
                                <img src={autodesk} alt="certi-certiport" />
                                <h5>ELECTRICAL CAD <a className="certi-link" href="https://certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=150&cvid=jGutxw/FuAqgDQi6irKPdQ=="> : [LINK]</a></h5>
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
