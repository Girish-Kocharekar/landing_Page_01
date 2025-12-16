import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col mb-10 m-30 text-gray-600'>
            <div className='mt-5 mb-10'>
                <span className='pb-10 text-xl font-semibold'>HackathonPortal</span>
                <div className='flex gap-10 mt-5'>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Info</span>
                        <a href="#">About</a>
                        <a href="#">Rules</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold'>Tech</span>
                        <a href="#">Firebase</a>
                        <a href="#">Tailwind CSS</a>
                        <a href="#">Role Access</a>
                    </div>
                </div>
            </div>
            <div>
                <span>© 2025 HackathonPortal. All rights reserved.</span>
            </div>
        </div>
    )
}
