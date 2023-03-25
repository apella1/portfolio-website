export default function Contact() {
  return (
    <div className="flex flex-col p-4 m-4 space-y-3" id="contact">
      <h2 className="flex items-center justify-center text-4xl font-medium text-green-600">
        Contact
      </h2>
      <hr className="bg-green-600 w-40 h-1.5 self-center mb-6 mt-0" />
      <p>
        If you have any frontend development opportunities or new projects you'd
        like to collaborate on, feel free to reach out using the contact
        information below. Looking forward to hearing from you!{" "}
      </p>
      <p>
        Email me at{" "}
        <a href="mailto:apellajohn@gmail.com" className="text-green-600">
          apellajohn@gmail.com
        </a>{" "}
        and let's have a chat.
      </p>
    </div>
  );
}
