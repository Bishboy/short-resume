import React from 'react'
import Content from './Content'


const Home = () => {
    return (
        <>
            <div className='py-[5rem]'>
                <div className='max-w-[80%] mx-auto '>
                    <h1 className='text-center text-3xl uppercase font-bold sm:text-4xl md:text-6xl text-gray-700 '>Experience</h1>
                    <div className='w-[20%] h-1 bg-slate-950 mx-auto mt-3 jf'></div>
                </div>
                <div>
                    <Content />              
                </div>
            </div>

        </>
    )
}

export default Home
