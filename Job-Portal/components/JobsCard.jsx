import React, { useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineArrowRight, AiOutlineDelete } from 'react-icons/ai';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


export default function JobsCard({ job, posted }) {
    const router = useRouter();


   const handleDeleteJob= async(id)=>{    
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/deleteJob`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(id),
        })
       
       
    } catch (error) {
        console.log('error in post job (service) => ', error);
    }
   
   }
    return (
        <div key={job._id} className='w-full transition-all duration-1000 md:w-[30%] m-4 border hover:shadow-lg rounded px-4 md:flex md:flex-wrap'>
            <div className='mb-2 flex items-center justify-center py-2 '>
                 <Image width={70} height={70} className="flex rounded-lg" src={job.company_logo} alt={job.company_logo} /> 
                <div className='flex flex-col mx-2 px-2'>
                    <h1 className='text-xl md:text-2xl font-semibold'>{job?.title}</h1>
                    <p className='text-xs sm:text-sm md:text-base text-gray-800 '>{job?.company}</p>
                </div>
            </div>

            <div className='mb-4 flex flex-col md:flex-wrap md:flex-row w-full justify-between items-center '>
                <div className='flex items-start justify-center py-2 flex-col'>
                    <div className='flex px-2 rounded-2xl py-1 items-center justify-center bg-indigo-200 text-indigo-900'>
                        <p>{job?.location}</p>
                    </div>
                </div>

                <div className='flex items-center'>
                    {/* Render the delete button only if the job is posted */}
                    {posted && (
                        <button onClick={() => handleDeleteJob(job._id)} className='my-2 py-2 px-4 border border-red-600 rounded flex items-center justify-center transition-all duration-700 hover:bg-red-600 hover:text-white text-red-600 font-semibold'>
                            Delete <AiOutlineDelete className='mx-2 text-xl' />
                        </button>
                    )}

                    {posted ? (
                        <button onClick={() => router.push(`/frontend/detailPostedJob/${job?._id}`)} className='my-2 py-2 px-4 border border-indigo-600 rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-purple-800 font-semibold'>Applications<AiOutlineArrowRight className='mx-2 text-xl' /></button>
                    ) : (
                        <button onClick={() => router.push(`/frontend/jobDetails/${job?._id}`)} className='my-2 py-2 px-4 border border-indigo-600 rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>View Detail <AiOutlineArrowRight className='mx-2 text-xl' /></button>
                    )}
                </div>
            </div>
        </div>
    );
}
