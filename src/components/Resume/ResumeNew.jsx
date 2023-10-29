import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/DavitDvalashvili.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import styled from "styled-components";
import DefaultTheme from "../DefaultTheme";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <ResumeStyle>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="button"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="button"
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </ResumeStyle>
  );
}

export default ResumeNew;

const ResumeStyle = styled.div`
  .resume-section {
    position: relative !important;
    padding-top: 110px !important;
    padding-bottom: 30px !important;
    color: white !important;
  }
  .resume {
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: center;
  }
  .textLayer {
    display: none;
  }
  .button {
    background-color: ${DefaultTheme.colors.teal};
    border: 1px solid ${DefaultTheme.colors.teal};
  }
  .button:hover {
    background-color: ${DefaultTheme.colors.SchiavaBlue};
    border: 1px solid ${DefaultTheme.colors.teal};
  }
`;
