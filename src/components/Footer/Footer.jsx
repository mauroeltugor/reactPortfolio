import React from 'react'
import { SocialImages } from '../SocialImages/SocialImages'
import git from './github.png'
import linkedin from './logolink.png'
import instagram from './instagram.png'

export const Footer = () => {

    const social = {
        instagram: 'https://www.instagram.com/maurocelis3/?hl=es-la',
        linkedin: 'https://www.linkedin.com/in/mauro-celis-reyes-859225267/',
        git: 'https://github.com/mauroeltugor'
    }

    return (
        <div id='footer' className='float flex-col text-center items-center bg-zinc-950 text-white p-20'>
            <div id='top' className='flex flex-row justify-around'>
                <div>
                    <h4 className='text-start'>Mauricio Celis</h4> <br />
                    <p>A Frontend focused Web Developer building the Frontend of Websites <br /> and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h4 className='text-start'>SOCIAL</h4> <br />
                    </div>
                    <div className='flex flex-row gap-5'>
                        <SocialImages href={social.git} alt='git icon' src={git}/>
                        <SocialImages href={social.linkedin} alt='linkedin icon' src={linkedin}/>
                        <SocialImages href={social.instagram} alt='instagram icon' src={instagram}/>
                    </div>
                </div>
            </div>
            <hr className='my-7'/>
            <div id='bottom'>
                <h1>© Copyright 2023. Made by <a className='text-purple-600' href={social.instagram} target="_blank">Mauro dev</a></h1>
            </div>
        </div>
    )
}