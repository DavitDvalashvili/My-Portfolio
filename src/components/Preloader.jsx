/* eslint-disable react/prop-types */
import styled from "styled-components";
import preImage from "../assets/pre.svg";
import Typewriter from "typewriter-effect";
import DefaultTheme from "./DefaultTheme";

const Preloader = (props) => {
  return (
    <PreStyle>
      <div id={props.load ? "preloader" : "preloader-none"}>
        <Typewriter
          options={{
            strings: ["Loading..."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </PreStyle>
  );
};

export default Preloader;

const PreStyle = styled.div`
  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2100;
    background-image: url(${preImage}),
      linear-gradient(to top left, #1e2761, #153247, #1e2761, #153247);
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: top;
    padding-top: 200px;
    color: ${DefaultTheme.colors.white};
    font-size: 25px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #preloader-none {
    display: none;
  }
`;
