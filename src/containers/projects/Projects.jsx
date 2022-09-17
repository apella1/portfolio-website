import './projects.css';

import Expense from '../../assets/expense.jpg';
import Gym from '../../assets/gym.png';
import Calculator from '../../assets/calculator.jpg';
import Shop from '../../assets/shop.png';

const Projects = () => {
    return (
      <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]  portfolio__projects">

          <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-900">
                My Projects.
              </p>
              <p className="py-6">This is a list of some of my chosen work</p>
            </div>

            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* First Grid Item */}

              <div style={{ backgroundImage: `url(${Expense})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-[800] text-black tracking-wider">
                    Expense Tracker
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                        Website
                      </button>
                    </a>
                    <a href="https://www.github.com/apella1/expense-tracker" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-medium text-lg">
                        GitHub Repo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Second Grid Item */}

              <div style={{ backgroundImage: `url(${Shop})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-[800] text-black tracking-wider">
                    E-Commerce Website
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                        Website
                      </button>
                    </a>
                    <a href="https://www.github.com/apella1/react-ecommerce" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-medium text-lg">
                        GitHub Repo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Third Grid Item */}

              <div style={{ backgroundImage: `url(${Gym})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-[800] text-black tracking-wider">
                    Gym Website
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                        Website
                      </button>
                    </a>
                    <a href="https://www.github.com/apella1/react-gym-website" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-medium text-lg">
                        GitHub Repo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Fourth Grid Item */}

              <div style={{ backgroundImage: `url(${Calculator})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-[800] text-black tracking-wider">
                    Calculator
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                        Website
                      </button>
                    </a>
                    <a href="https://www.github.com/apella1/react-calculator" target='_blank' rel='noreferrer'>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#0a192f] text-white font-medium text-lg">
                        GitHub Repo
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div> 
      </div>   
    )
}

export default Projects
