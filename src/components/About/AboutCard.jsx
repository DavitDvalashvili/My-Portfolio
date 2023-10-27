import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Davit Dvalashvili </span>
            from <span className="purple"> Tbilisi, Georgia</span>
            <br /> I am a junior front-end developer seeking new challenges to
            cope with. If you're interested in collaborating with me, don't
            hesitate to get in touch
            <br />
            Furthermore, I'm presently expanding my skills in full-stack
            development, with a focus on Node.js, Express.js, and MongoDB
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Empower Tech Minds with Bytes of Brilliance: Learn, Share, Grow!
          </p>
          <footer className="blockquote-footer">{"<D.D />"}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
