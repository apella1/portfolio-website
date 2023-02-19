export default function Contact() {
  return (
    <div className="flex flex-col p-4 m-4 space-y-3" id="contact">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        Contact
      </h2>
      <hr className="bg-green-600 w-40 h-1.5 self-center mb-6 mt-0" />
      <p>
        I'm currently open to frontend development roles and working on new
        projects so get in touch if you'd like us to work together
      </p>
      <p>
        Email me at <a href="mailto:apellajohn@gmail.com" className="text-green-600">apellajohn@gmail.com</a> and let's discuss about your project.
      </p>
    </div>
  );
}
