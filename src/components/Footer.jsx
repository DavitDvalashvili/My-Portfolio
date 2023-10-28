import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import DefaultTheme from "./DefaultTheme";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <FooterStyle>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copyright">
            <h3>{`Welcome to the Davit Dvalashvili's Portfolio`}</h3>
          </Col>
          <Col md="4" className="footer-copyright">
            <h3>©{year} Davit Dvalashvili</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/DavitDvalashvili"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/davitdvalashvili2864/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/davit-dvalashvili-0421b6253/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/davit_dvalashvili/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </FooterStyle>
  );
}

export default Footer;

const FooterStyle = styled.footer`
  .footer {
    background-color: ${DefaultTheme.colors.Sambucus};
    bottom: 0 !important;
    padding-top: 10px !important;
    padding-bottom: 8px !important ;
  }
  .footer-copyright {
    text-align: center !important;
  }

  .footer-body {
    z-index: 1;
    text-align: center !important;
  }

  @media (max-width: 767px) {
    .footer-copyright {
      text-align: center !important;
    }

    .footer-body {
      text-align: center !important;
    }
  }

  .footer h3 {
    font-size: 1em;
    color: ${DefaultTheme.colors.white} !important;
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
  }
  .footer-icons {
    margin-top: 0.5em !important;
    margin-bottom: 0.5em !important;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    &:hover {
      background-color: ${DefaultTheme.colors.CosmicVoid};
    }
  }
`;
