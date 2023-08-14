import React from 'react';
import { Button } from '../Button/Button';

export const Body = () => {
    const handleDownload = () => {
        const pdfUrl = './mauricioCelis.pdf'; 
        const downloadLink = document.createElement('a');
        downloadLink.href = pdfUrl;
        downloadLink.download = 'cv.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div id='body' className='bg-gray-200 h-screen flex flex-col text-center items-center pt-60 gap-10'>
            <h1 className='text-6xl font-black'>HEY, I'M MAURO CELIS</h1>
            <p className='text-2xl'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
            <Button onClick={handleDownload} value="Download CV"/>
        </div>
    );
};
