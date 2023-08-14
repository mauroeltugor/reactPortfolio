import React from 'react'
import userImage from './userimage.png'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <div id='header' className='flex flex-row justify-between items-center px-10 text-gray-800 text-xl h-24'>
            <div className='flex items-center text-center gap-3'>
                <div>
                    <img className='w-14 h-14 rounded-full' src={userImage} alt="developer photo" />
                </div>
                <div>
                    <a href="#"><h1 className='text-purple-600'>Mauro dev</h1></a>
                </div>
            </div>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}