import React from 'react';

export const Card = ({ value }) => {
    return (
        <div style={{ backgroundColor: 'rgba(153, 153, 153, 0.5)' }} className='w-full h-full flex justify-center items-center rounded-sm'>
            <h3 className='text-gray-600 text-2xl'>{value}</h3>
        </div>
    );
};
