import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {`Hi Everyone, I'm `}
            <strong className="textColor">Davit Dvalashvili </strong>
            from <span className="textColor"> Tbilisi, Georgia</span>
            <br />
            {`I am a junior`}
            <span className="textColor"> {`Full-stack developer`}</span>
            {`            seeking new challenges to cope with. If you're interested in
            collaborating with me, don't hesitate to get in touch.`}
            <br />
            {` Furthermore, I'm presently expanding my skills in full-stack
            development, with a focus on`}
            <span className="textColor"> React, Next.js, Node.js, MongoDB</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies & Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Walking in the nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            In the world of code, every bug is the hidden opportunity of growth.
          </p>
          <footer className="blockquote-footer">
            {"<Davit.Dvalashvili />"}
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
