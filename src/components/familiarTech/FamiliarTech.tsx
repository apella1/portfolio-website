import React from 'react'
import './familiarTech.css'
import {  DiGo, DiPhp,  DiWordpress } from 'react-icons/di'

const FamiliarTech = () => {
  return (
    <section className='familiar-technologies p-6 flex flex-col'>
       <h3 className='text-center text-lg'>Familiarities</h3>
       <div className="familiar-languages flex justify-center flex-wrap p-4">
            <p><DiGo /> Go</p>
            <p><DiPhp/> PHP</p>
            <p>NextJs</p>
            <p><DiWordpress /> WordPress</p>
       </div>
    </section>
  )
}

export default FamiliarTech;

