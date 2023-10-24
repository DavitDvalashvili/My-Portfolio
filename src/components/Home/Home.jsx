import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import styled from "styled-components";

function Home() {
  return (
    <HomeStyle>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name"> Davit Dvalashvili</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 30 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.section`
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.1s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
  #tsParticles {
    position: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    width: 100%;
    height: 100%;
  }

  .home-header {
    padding-top: 80px !important;
  }

  .home-section {
    position: relative;
    z-index: -1;
    background-image: var(--image-gradient), url(./Assets/home-bg.jpg);
    background-position: top center;
    background-repeat: no-repeat;
    padding-bottom: 30px !important;
    padding-top: 30px !important;
  }

  .home-content {
    padding: 9rem 0 2rem !important;
    color: whitesmoke;
    text-align: left;
  }

  .heading {
    font-size: 2.4em !important;
    padding-left: 50px !important;
  }

  .heading-name {
    font-size: 2.5em !important;
    padding-left: 45px !important;
  }

  .main-name {
    color: #cd5ff8;
  }

  .Typewriter__wrapper {
    font-size: 2.2em !important;
    color: #be6adf !important;
    font-weight: 600 !important;
  }
  .Typewriter__cursor {
    font-size: 2.4em !important;
    color: #b562d6 !important;
  }

  @media (max-width: 767px) {
    .Typewriter__wrapper {
      font-size: 1.4em !important;
      font-weight: 500 !important;
      position: absolute !important;
    }
    .Typewriter__cursor {
      display: none !important;
    }
  }
`;
