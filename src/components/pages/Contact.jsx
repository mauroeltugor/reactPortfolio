import React from 'react';
import { Button } from '../Button/Button';

export const Contact = () => {
  return (
    <div id='contact' className='bg-gray-200 p-8 h-screen'>
      <h1 className='text-4xl font-semibold mb-4'>Contact</h1>
      <form className='flex flex-col gap-4'>
        <label htmlFor='name' className='text-gray-600'>Name:</label>
        <input
          type='text'
          id='name'
          className='border rounded p-2 focus:outline-none focus:border-blue-500'
          placeholder='Write your name'
        />

        <label htmlFor='email' className='text-gray-600'>Email:</label>
        <input
          type='email'
          id='email'
          className='border rounded p-2 focus:outline-none focus:border-blue-500'
          placeholder='Write your email'
        />

        <label htmlFor='message' className='text-gray-600'>Message:</label>
        <textarea
          id='message'
          className='border rounded p-2 h-32 focus:outline-none focus:border-blue-500'
          placeholder='Write your message'
        />

        <Button value='Send' />
      </form>
    </div>
  );
};

