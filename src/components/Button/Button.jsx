import React from 'react'

export const Button = ({value, onClick}) => {
    return (
        <button onClick={onClick} className='bg-purple-600 w-28 rounded h-16 text-white' >
            {value}
        </button>
    )
}
