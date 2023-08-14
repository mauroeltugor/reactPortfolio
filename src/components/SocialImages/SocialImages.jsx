import React from 'react'

export const SocialImages = ({href, src, alt}) => {
    return (
        <a href={href} target='_blank'><img className='w-10 h-10' src={src} alt={alt} /></a>
    )
}
