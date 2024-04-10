import React, {useState} from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true);

    if(loading){
        return(
            <div className='max-w-[80%] mx-auto'>
                <h1 className='text-center mt-5 text-3xl text-gray-700 font-bold '>Loading...</h1>
            </div>
        )
    }
}

export default Loading
