import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import styled from "styled-components";

function Home2() {
  return (
    <Home2Style>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming, have a passion for
                problem-solving and am always open to new challenges
                <br />
                <br />
                You can ask me about
                <i>
                  <b className="purple"> Javascript, React </b>
                </i>
                <br />
                <br />
                My field of Interests are building &nbsp;
                <i>
                  <b className="purple">user-friendly web applications. </b>
                  with <b className="purple">TypeScript, React</b>
                </i>
                <br />
                <br />
                Whenever possible, I also spend my time and energy to enhance my
                skills in
                <b className="purple"> Back-end development</b> and learn
                <i>
                  <b className="purple"> Next.js, Express.js and MongoDB</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvatar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/DavitDvalashvili"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.facebook.com/davitdvalashvili2864/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/davit-dvalashvili-0421b6253/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/davit_dvalashvili/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-color home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </Home2Style>
  );
}
export default Home2;

const Home2Style = styled.div`
  .myAvatar {
    justify-content: center;
    padding-top: 9em;
  }

  @media (max-width: 767px) {
    .myAvatar {
      padding-top: 2em;
      padding-bottom: 2em;
    }
  }

  .home-about-section {
    position: relative;
    padding-bottom: 70px !important;
    padding-top: 70px !important;
  }

  .home-about-description {
    color: white !important;
    padding-bottom: 20px !important;
    text-align: center;
  }

  .home-about-body {
    padding-top: 50px;
    font-size: 1.2em !important;
    text-align: left;
  }

  .home-about-social {
    text-align: center !important;
    padding-top: 25px;
    color: white !important;
  }

  .home-about-social-links {
    justify-content: center !important;
    padding-top: 15px !important;
    display: inline-block !important;
    position: relative !important;
    padding-inline-start: 0 !important;
  }

  .home-social-icons {
    position: relative !important;
    display: inline-block !important;
    width: 40px !important;
    height: 40px !important;
    text-align: center !important;
    font-size: 1.2em !important;
    line-height: 2em !important;
    background: rgba(255, 255, 255, 0.972) !important;
    border-radius: 50% !important;
    transition: 0.5s !important;
  }

  .home-social-icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #68187a;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  .home-social-icons:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #801f95;
  }

  .home-social-icons:hover {
    color: #87209e;
    box-shadow: 0 0 5px #87209e;
    text-shadow: 0 0 2px #87209e;
  }

  .social-icons {
    display: inline-block !important;
    padding-right: 15px;
    padding-left: 15px;
  }

  .icon-color {
    color: #700c86 !important;
  }
`;
