import './services.css';

import Html from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Bootstrap from '../../assets/bootstrap.png';
import GitHub from '../../assets/github.png';
import Tailwind from '../../assets/tailwind.png';

const Services = () => { 
    return (
      <div name="services" className="w-full h-screen bg-[#0a192f] text-gray-300 navbar__services">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-3xl font-medium inline border-b-4 border-blue-900 ">
              Tech Stack
            </p>
            <p className="py-4">
              Below are the technologies I use to build my projects.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Html} alt="HTML" />
              <p className="my-4 font-medium">HTML</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="CSS" />
              <p className="my-4 font-medium">CSS</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
              <p className="my-4 font-medium">JavaScript</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={ReactImg} alt="React" />
              <p className="my-4 font-medium">React</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind" />
              <p className="my-4 font-medium">Tailwind</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Bootstrap} alt="Bootstrap" />
              <p className="my-4 font-medium">Bootstrap</p>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={GitHub} alt="GitHub" />
              <p className="my-4 font-medium">GitHub</p>
            </div>

          </div>
        </div>
      </div>
    );
}

export default Services