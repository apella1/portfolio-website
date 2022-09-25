import './projects.css';
import './imports.js';
import { Expense, Shop, Gym } from './imports.js';
import { Project } from '../../components';

const Projects = () => {
    return (
      <div name="projects" className="projects">
          <h2 className='projects__title'>
            My Projects
          </h2>

          <div className="project__items">
            <Project 
              title='Mental Health Awareness Website'
              imageUrl={Expense}
              description='A website that makes resources related to mental health accessible at your fingertips. The chat functionality allows talking to peers to share anything that troubles one. In case of any professional guidance needed, there is access to professional therapists.'
              tech='React, CSS'
              website='zima-three.vercel.app'
              repo='https://github.com/apella/zima'
            />

            <Project 
              title='Ecommerce Website'
              imageUrl={Shop}
              description='This is an fully integrated e-shop with all the payment methods integrated. The shop accepts deliveries and has a feature to track your order up to the point of delivery'
              tech='React, CSS'
              website='/'
              repo='https://github.com/apella/e-commerce'
            />

            <Project 
              title='Gym Website'
              imageUrl={Gym}
              description='This is a gym business website with option to select the desired instructors and select your exercise regime. There is also an integrated shop where you can purchase gym equipment and gym wear.'
              tech='React, CSS'
              website='/'
              repo='https://github.com/apella/react-gym'
            />

            <Project 
              title='Expense Tracker'
              imageUrl={Expense}
              description='This expense tracker tracks your spending to the last cent'
              tech='React, CSS'
              website='/'
              repo='https://github.com/apella/react-expense-tracker'
            />

          </div>
      </div>   
    )
}

export default Projects
