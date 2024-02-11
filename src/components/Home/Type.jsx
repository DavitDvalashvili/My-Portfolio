import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Full-stack Developer", "Tech Blogger"],
        autoStart: true,
        loop: true,
        speed: 50,
      }}
    />
  );
}

export default Type;
