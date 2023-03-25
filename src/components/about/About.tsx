export default function About() {
  return (
    <section className="flex flex-col p-4 m-4 space-y-2" id="about">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        About Me
      </h2>
      <hr className="bg-green-600 w-20 h-1.5 self-center mb-6 mt-0" />
      <p className="p-4 md:text-lg">
        I am a software developer with a background in mathematics and computer
        science. My expertise lies in implementing front-end systems using
        React. I am also experienced in utilizing Node and Django backend
        technologies to integrate full-stack systems with a focus on optimizing
        user experience through interactive and intuitive user interfaces. If
        you're interested in collaborating on a project, please don't hesitate
        to contact me. Feel free to browse through my portfolio below to see
        examples of my work.
      </p>
    </section>
  );
}
