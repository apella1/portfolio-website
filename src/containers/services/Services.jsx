import './services.css';
import './imports.js';
import { Html, CSS, JavaScript, GitHub, Bootstrap, Tailwind, ReactImg, Node} from './imports.js';

const Services = () => { 
    return (
      <div name="services" className="flex justify-center align-center services">

            <div className="flex flex-col mx-3">
              <img className="w-20" src={Html} alt="HTML" />
              <p className="text-center font-medium">HTML</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20" src={CSS} alt="CSS" />
              <p className="text-center font-medium">CSS</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20" src={JavaScript} alt="JavaScript" />
              <p className="text-center font-medium">JavaScript</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20" src={ReactImg} alt="React" />
              <p className="text-center font-medium">React</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20" src={Tailwind} alt="Tailwind" />
              <p className="text-center font-medium">Tailwind CSS</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20" src={Bootstrap} alt="Bootstrap" />
              <p className="text-center font-medium">Bootstrap</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20 bg-black-300" src={GitHub} alt="GitHub" />
              <p className="text-center font-medium">GitHub</p>
            </div>

            <div className="flex flex-col mx-3">
              <img className="w-20 bg-black-300" src={Node} alt="Node" />
              <p className="text-center font-medium">Node</p>
            </div>
      </div>
    );
}

export default Services