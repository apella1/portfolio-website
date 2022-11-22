import React from 'react'
import './familiarTech.css'
import { DiDocker, DiGo, DiJava, DiPhp, DiPostgresql, DiPython } from 'react-icons/di'

const FamiliarTech = () => {
  return (
    <section className='familiar-technologies p-6 flex flex-col'>
       <h3>The following are the languages and technologies I'm familiar with but do not use on a daily basis.</h3>
       <div className="familiar-languages flex flex-wrap p-4">
            <p><DiJava /> Java</p>
            <p><DiGo /> Go</p>
            <p><DiPython /> Python</p>
            <p><DiPhp/> PHP</p>
            <p><DiPostgresql />Postgres</p>
            <p><DiDocker /> Docker</p>
            <p>C</p>
       </div>
    </section>
  )
}

export default FamiliarTech;
