import Button from "../Button";

export default function Hero() {
  return (
    <div>
      <div>
        <h1 className="md:text-5xl lg:text-6xl 2xl:text-9xl dark:text-white font-extrabold tracking-tight transition transition-colors">
          Hello world, my name is João.
        </h1>
        <h2 className="md:text-2xl lg:text-3xl 2xl:text-5xl mt-3 text-gray-400 tracking-tight transition transition-colors">
          I'm a Usability Engineer.
        </h2>
      </div>
      <div className="mt-6">
        <p className="md:text-lg lg:text-2xl dark:text-gray-100 transition transition-colors">
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
