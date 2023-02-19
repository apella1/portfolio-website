export default function About() {
  return (
    <section className="flex flex-col p-4 m-4 space-y-2" id="about">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        About Me
      </h2>
      <hr className="bg-green-600 w-30 h-1.5 self-center mb-6 mt-0" />
      <div className="flex flex-col space-y-1">
		  <p className="md:text-lg">
          Hi there, I'm John Apella, a React developer with a passion for
          crafting delightful and performant user experiences. With a Bachelor's
          degree in Mathematics and Computer Science, I'm constantly seeking to
          bring my analytical and problem-solving skills to my work.
        </p>
		  <p className="md:text-lg">
          As a skilled React developer with a focus on JavaScript and
          TypeScript, I have experience building a range of web applications,
          including progressive web apps, e-commerce platforms, and complex web
          interfaces. I'm also proficient in backend development using Python,
          though my real passion is in frontend development.
        </p>
		  <p className="md:text-lg">
          In addition to my development work, I'm committed to making a positive
          impact on the tech community. I enjoy participating in community
          outreach programs that promote diversity and inclusion in tech, and I
          believe that good communication and collaboration are key to creating
          impactful software.
        </p>
		  <p className="md:text-lg">
          I take pride in delivering high-quality work on time and within
          budget, and I'm always striving to stay up to date with the latest
          technologies and best practices. Please take a look at my portfolio to
          see some of my recent projects, and don't hesitate to get in touch if
          you'd like to discuss how I can help you bring your ideas to life.
        </p>
      </div>
    </section>
  );
}
