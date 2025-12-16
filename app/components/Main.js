import React from 'react'

export const Main = () => {
    return (
        <div>
            <div className='flex flex-col items-center mt-40 mb-30'>
                <span className='text-6xl font-bold'>The Portal Designed</span>
                <span className='text-6xl font-bold text-amber-500 mt-3'> for Real-Time Hackathon Management</span>
                <span className='text-gray-700 text-lg mt-5'>Submit projects, track scoring, and view the live leaderboard instantly. Simple access for every role.</span>
                <div className='text-xl  mt-10'><span className='bg-amber-400 rounded-4xl cursor-pointer p-2 pl-6 pr-6'>Access Portal</span></div>
            </div>

            <div className='flex flex-col items-center m-30 bg-amber-200'>
                <h1 className='mt-10 text-2xl font-bold'>Portal Capabilities</h1>
                <div className='flex gap-5 p-10'>
                    <div className='border border-gray-300 p-5 rounded-2xl w-80 bg-amber-100'>
                        <h3 className='text-lg font-bold'>Team Submissions</h3>
                        <span className=''>Easy form-based submission and link sharing. Track your team's project status.</span>
                    </div>

                    <div className='border border-gray-300 p-5 rounded-2xl w-80 bg-amber-100'>
                        <h3 className='text-lg font-bold'>Judge Evaluation</h3>
                        <span className=''>Dedicated scoring panel for judges to rate projects based on innovation and technical skill.</span>
                    </div>

                    <div className='border border-gray-300 p-5 rounded-2xl w-80 bg-amber-100'>
                        <h3 className='text-lg font-bold'>Live Leaderboard</h3>
                        <span className=''>Real-time updates of project scores and rankings, synced via Firebase Firestore.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
