import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import styled from "styled-components";
import logo from "../assets/Dd.svg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import DefaultTheme from "./DefaultTheme";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <NavStyle>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://davitdvalashvili1996.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/DavitDvalashvili/My-Portfolio"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyle>
  );
}

export default NavBar;

const NavStyle = styled.div`
  .sticky {
    background-color: ${DefaultTheme.colors.Copperfield};
    transition: all 0.3s ease-out 0s;
    box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171);
    backdrop-filter: blur(15px);
  }

  .navbar {
    position: fixed !important;
    transition: all 0.3s ease-out 0s !important;
    padding: 0.3rem 2rem !important;
    font-size: 1.2rem !important;
  }

  .navbar-toggler {
    position: relative !important;
    background-color: transparent !important;
    border-color: transparent !important;
  }

  .navbar-toggler span {
    display: block !important;
    background-color: ${DefaultTheme.colors.teal} !important;
    height: 4px !important;
    width: 27px !important;
    margin-top: 5px !important;
    margin-bottom: 5px !important;
    transform: rotate(0deg) !important;
    left: 0 !important;
    opacity: 1 !important;
  }

  .navbar-toggler:focus,
  .navbar-toggler:active {
    outline: 0 !important;
  }

  .navbar-toggler span:nth-child(1),
  .navbar-toggler span:nth-child(3) {
    transition: transform 0.35s ease-in-out !important;
    transition: transform 0.35s ease-in-out !important;
  }

  .navbar-toggler:not(.collapsed) span:nth-child(1) {
    position: absolute !important;
    left: 12px !important;
    top: 10px !important;
    transform: rotate(135deg) !important;
    opacity: 0.9 !important;
  }

  .navbar-toggler:not(.collapsed) span:nth-child(2) {
    height: 12px !important;
    visibility: hidden !important;
    background-color: transparent !important;
  }

  .navbar-toggler:not(.collapsed) span:nth-child(3) {
    position: absolute !important;
    left: 12px !important;
    top: 10px !important;
    transform: rotate(-135deg) !important;
    opacity: 0.9 !important;
  }

  @media (max-width: 767px) {
    .navbar {
      padding: 1rem 2rem !important;
      font-size: 1.4rem !important;
      background-color: #181a27 !important;
    }
    .navbar-nav .nav-item a::after {
      display: none !important;
    }
  }
  .navbar-brand {
    color: rgb(250, 250, 250) !important;
  }

  .logo {
    height: 2em !important;
  }

  .navbar-nav .nav-link {
    color: white !important;
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

  .nav-link {
    padding: 0.8rem 1rem !important;
  }

  @media (max-width: 767px) {
    .nav-link {
      padding: 0.7rem 1rem !important;
    }
  }

  .navbar-nav .nav-item {
    position: relative;
    margin-left: 20px;
  }

  .navbar-nav .nav-item a {
    font-weight: 400;
    transition: all 0.3s ease-out 0s;
    position: relative;
    z-index: 1;
  }

  .navbar-nav .nav-item a::after {
    content: "";
    position: relative;
    display: block;
    height: 5px;
    width: 0;
    border-radius: 16px;
    background: ${DefaultTheme.colors.teal};
    bottom: 1px;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease-out 0s;
  }

  .navbar-nav .nav-item a:hover::after {
    width: 100%;
  }

  .fork-btn {
    font-size: 1.1em !important;
    padding-top: 10px !important;
  }

  .fork-btn-inner {
    line-height: 1.4em !important;
    background-color: ${DefaultTheme.colors.teal};
    padding: 0.25rem 1.1rem !important;
    vertical-align: middle !important;
    text-align: center !important;
    border-color: ${DefaultTheme.colors.teal};
  }

  .fork-btn-inner:hover {
    transform: translateY(-4px) !important;
    background-color: ${DefaultTheme.colors.SchiavaBlue} !important;
  }
  .fork-btn-inner::after {
    display: none !important;
  }
`;
