import {
  About,
  Contact,
  Footer,
  Header,
  Projects,
  Skills,
} from "../../components";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
