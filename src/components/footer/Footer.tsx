import { SiLinkedin, SiGithub, SiTwitter, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center p-4 m-4 space-x-4 md:space-x-6">
      <a
        href="https://linkedin.com/in/johnapella"
        className="text-xl md:text-3xl"
      >
        <SiLinkedin />
      </a>
      <a href="https://github.com/apella1" className="text-xl md:text-3xl">
        <SiGithub />
      </a>
      <a href="https://twitter.com/apella_john" className="text-xl md:text-3xl">
        <SiTwitter />
      </a>
      <a href="https://wa.me/254796528249" className="text-xl md:text-3xl">
        <SiWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
