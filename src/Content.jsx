import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import axios from 'axios';
import { FaAngleDoubleRight } from 'react-icons/fa'


const URL = 'https://course-api.com/react-tabs-project'

const Content = () => {
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0)
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        setLoading(true)
        try {
            const response = await axios.get(URL);
            setJob(response.data);
            console.log(response.data);
            setLoading(false);
            setError(null);
            //or
            // const response = await fetch(URL);
            // const jobs = await response.json();
            // setJob(jobs);
            // setLoading(false);
            // setError(null);
            // console.log(jobs);

        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }
    useEffect(() => {
        fetchJobs()
    }, []);

    if (loading) {
        return <Loading />
    }

    const {company, dates, duties, title} = job[value]
    return (
        <>
            <div className='md:max-w-[60%] w-[80%] mx-auto py-24 md:flex md:gap-24'>
                <div className='whitespace-nowrap '>
                    {job.map((items, index)=>{
                        return(
                            <button onClick={() => setValue(index)} key={items.id} className={`md:block job-btn px-4 text-sm sm:text-lg  md:text-2xl mb-4 uppercase  transition-all duration-200 text-gray-700 ${ index === value && 'active-btn transition-all duration-700'}`}>
                                {items.company}
                            </button>
                        )

                    })}
                </div>
                <div className='flex flex-col gap-4  px-2' >
                    <h1 className='text-xl md:text-3xl  text-gray-700'>{title}</h1>
                    <h2 className='text-base md:text-lg bg-slate-950  text-white px-6 py-1 w-fit' >{company}</h2>
                    <h3 className='text-slate-600'>{dates}</h3>
                    {duties.map((items, index)=>{
                        return(
                            <div key={index} className=' flex gap-4  justify-center'>
                                <FaAngleDoubleRight className=' md:text-2xl '  />
                                <span className='mb-4 text-base w-full '>{items}</span> 
                            </div>
                        )
                    })}

                </div>

                
            </div>
        </>
    )
}

export default Content
