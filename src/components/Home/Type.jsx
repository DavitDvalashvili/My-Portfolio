import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Front-End Developer", "Tech Blogger"],
        autoStart: true,
        loop: true,
        speed: 50,
      }}
    />
  );
}

export default Type;
