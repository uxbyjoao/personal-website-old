import Button from "../Button";

export default function Hero() {
  return (
    <div>
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight">
          Hello world, my name is João.
        </h1>
        <h2 className="text-3xl mt-3 text-gray-400 tracking-tight">
          I'm a Usability Engineer.
        </h2>
      </div>
      <div className="mt-6">
        <p className="text-lg">
          You can check out some samples of my work on <a href="#">Behance</a>,{" "}
          <a href="#">Dribble</a>, and <a href="#">GitHub</a> profiles.
        </p>
      </div>
      <div className="mt-6">
        <Button>Send message</Button>
      </div>
    </div>
  );
}
