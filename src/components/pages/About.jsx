import React from 'react'
import { Button } from '../Button/Button'
import { Card } from '../Card/Card'
import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <div id='about' className='h-screen bg-gray-200 flex flex-col'>
      <div className='flex flex-col text-center pt-10'>
        <h1 className='text-5xl font-black'>ABOUT ME</h1> <br />
        <h4 className='text-xl'>
          Here you will find more information about me, what I do, and my current skills mostly in terms <br />
          of programming and technology
        </h4>
      </div>
      <div className='flex flex-row justify-around mt-10'>
        <div>
          <h1 className='font-black text-xl'>Get to know me!</h1> <br />
          <p>
            I'm a <span className='font-bold'>Frontend Web Developer</span> building the Front-end of Websites and <br /> Web Applications that leads to the success of the overall product. Check <br /> out some
            of my work
            in the <span className='font-bold'>Projects</span> section. <br /> <br />
            I also like sharing content related to the stuff that I have learned over the <br /> years in <span className='font-bold'>Web Development</span> so it can help other people of the Dev <br /> Community.
            Feel free to Connect or Follow
            me on my <a href='https://www.linkedin.com/in/mauro-celis-reyes-859225267/' target='_blank' className='text-purple-600 hover:underline'>Linkedin</a> where I <br /> post useful content related to Web Development and Programming <br /> <br />
            I'm open to <span className='font-bold'>Job</span> opportunities where I can contribute, learn and grow. If <br /> you have a good opportunity
            that matches my skills and experience then <br /> don't hesitate to <span className='font-bold'>contact</span> me.
          </p> <br />
          <Link to="/contact">
            <Button value="Contact" />
          </Link>
        </div>
        <div>
          <h1 className='font-black text-xl'>My Skills</h1> <br />
          <div className='grid grid-cols-3 gap-4'>
            <Card value="Java" />
            <Card value="React" />
            <Card value="Javascript" />
            <Card value="TypeScript" />
            <Card value="Html" />
            <Card value="Css" />
            <Card value="MongoDB" />
            <Card value="MySql" />
            <Card value="SQLServer" />
          </div>
        </div>
      </div>
    </div>
  )
}
