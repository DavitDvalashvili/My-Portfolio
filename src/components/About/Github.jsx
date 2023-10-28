import { Row } from "react-bootstrap";
import ActivityCalendar from "react-github-calendar";
import styled from "styled-components";
import { useEffect } from "react";

function Github() {
  useEffect(() => {
    const dayElements = document.querySelectorAll(".day");
    dayElements.forEach((element) => {
      element.style.Color = "red";
    });
  }, []);
  return (
    <CalendarStyle>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="textColor">Code</strong>
        </h1>
        <ActivityCalendar
          username="DavitDvalashvili"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          blockRadius={7}
          theme={{
            dark: ["#ffffff", "#00cccc", "#008080", "#004d4d", "#001a1a"],
          }}
        />
      </Row>
    </CalendarStyle>
  );
}

export default Github;

const CalendarStyle = styled.div`
  //color: red !important;
  body .day {
    background-color: red !important;
  }
`;
