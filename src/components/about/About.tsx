export default function About() {
  return (
    <section className="flex flex-col p-4 m-4 space-y-2" id="about">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        About Me
      </h2>
      <hr className="bg-green-600 w-20 h-1.5 self-center mb-6 mt-0" />
      <p className="p-4 text-center md:text-lg">
        Looking for a skilled and experienced React developer who can help you
        build high-quality and scalable web applications? Look no further! With
        a deep knowledge of React and its ecosystem, I can create complex web
        applications, design intuitive user interfaces, and integrate
        third-party APIs. Proficient in HTML, CSS, JavaScript and TypeScript, I
        create visually stunning and highly functional websites. Committed to
        delivering exceptional results and providing a seamless user experience,
        I always keep my clients' goals and vision in mind throughout the
        development process. Highly collaborative and dedicated to delivering
        outstanding results, I am the perfect React developer to help take your
        project to the next level. Let's work together to create something
        amazing!
      </p>
      <div className="flex flex-col p-4">
        <h2 className="self-center p-4 text-xl font-medium text-green-600">
          Deliverables
        </h2>
        <div className="flex flex-col md:mx-28 md:grid md:grid-cols-3 md:gap-4 space-y-4">
          <div className="flex flex-col p-4 bg-gray-300 rounded-md">
            <h2 className="self-center font-medium">Frontend Development</h2>
            <p></p>
          </div>
          <div className="flex flex-col p-4 bg-gray-300 rounded-md">
            <h2 className="self-center font-medium">Backend Development</h2>
            <p></p>
          </div>
          <div className="flex flex-col p-4 bg-gray-300 rounded-md">
            <h2 className="self-center font-medium">Database Management</h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
