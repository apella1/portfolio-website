import { SiLinkedin, SiGithub, SiTwitter, SiWhatsapp } from "react-icons/si";

const thisYear: string = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className="flex flex-col text-white bg-[#23272F] p-4 pt-8 m-4">
      <div className="flex items-center justify-center space-x-4 md:space-x-6">
        <a
          href="https://linkedin.com/in/johnapella"
          className="text-xl md:text-3xl"
        >
          <SiLinkedin />
        </a>
        <a href="https://github.com/apella1" className="text-xl md:text-3xl">
          <SiGithub />
        </a>
        <a
          href="https://twitter.com/apella_john"
          className="text-xl md:text-3xl"
        >
          <SiTwitter />
        </a>
        <a href="https://wa.me/254796528249" className="text-xl md:text-3xl">
          <SiWhatsapp />
        </a>
      </div>

      <p className="self-center p-2">&copy; {thisYear} - John Apella</p>
    </footer>
  );
};

export default Footer;
