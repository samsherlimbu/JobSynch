import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import Image from 'next/image'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import JobsCard from './JobsCard';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdLocationPin } from "react-icons/md";

export default function Intro() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState("");

  // useEffect(()=>{
    
  // })
  const jobData = useSelector(state => state.Job.JobData);

  const [filterJobs, setFilteredJobs] = useState([])
  const [doneSearch, setDoneSearch] = useState(false)




  const handleSearch = (e) => {
    e.preventDefault();

    // Convert search and location to uppercase and trim whitespace
    const searchQuery = search.toUpperCase().trim();
    const locationQuery = location.toUpperCase().trim();

    const filteredJobs=jobData?.filter((job) => {

      const titleMatches = job?.title?.toUpperCase() === searchQuery ;
      const categoryMatches =  job?.job_category.toUpperCase()=== searchQuery;
      const locationMatches = job?.location?.toUpperCase() === locationQuery;
      const companyMatches = job?.company?.toUpperCase() === searchQuery ;

      // Check if both search and location are provided
      if (searchQuery && locationQuery ) {
        return categoryMatches || titleMatches || companyMatches && locationMatches;
      }

      // Check if only search or location is provided
      if (searchQuery || locationQuery) {
        return categoryMatches || titleMatches || locationMatches || companyMatches ;
      }

      // If neither search nor location provided, return all jobs
      return true;
    })

 

    setFilteredJobs(filteredJobs);
    setDoneSearch(true);
    setSearch("");
    setLocation(""); // Reset location field after search
  }

  return (
    <div className="">

      <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 bg-gray-100'>
        <h1 className='text-5xl font-bold text-primary md-3'> Find Your <span className='text-purple-700 '> Dream job</span><span> today</span></h1>
        <p className='text-lg text-black/70 md-8'>Thousands of jobs in the computer, engineering and technology sector are waiting for you </p>

        <form >
          <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
            <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-60 md:w-1/2 w-full ">
              <input type="text" name="title" id="title" placeholder='what po sition are you looking for?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0  text-base sm:leading-6'
                onChange={(e) => setSearch(e.target.value)}
                value={search} />
              <AiOutlineFileSearch className="absolute mt-2.5 ml-2 text-gray-400" />
            </div>
            <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-60 md:w-1/3 w-full ">
              <input type="text" name="title" id="title" placeholder='location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-base sm:leading-6'
                onChange={(e) => setLocation(e.target.value)}
                value={location} />
              <MdLocationPin className="absolute mt-2.5 ml-2 text-gray-400"
              />
            </div>
            <button type="submit" onClick={handleSearch} className='bg-blue-500 py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
          </div>
        </form>
        {/* <div className='flex gap-10 flex-row flex-wrap mt-8'>
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >software engineering </div>
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >data science</div>
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >UI/Ux Design</div>
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >Web Development</div>
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >graphic design </div>
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >DevOps</div>
         
          <div className = "bg-gray-300 rounded-lg p-3 font-semibold text-lg cursor-pointer hover:text-purple-500" >Digital Marketing </div>

        </div> */}
      </div>

      {
        doneSearch  ? (
          <div className='w-full flex flex-wrap items-center justify-center py-2 px-2'>
            {
              Array.isArray(filterJobs) && filterJobs.length > 0 ? filterJobs?.map((job) => {
                return (
                   <JobsCard job={job} key={job?._id} />
                )
              }) : <p className='text-sm text-center font-semibold  text-red-500'>Sorry No such Categories Job Available Right Now</p>
            }
          </div>
        ) : 
          (
            <div className='w-full flex flex-wrap items-center justify-center py-2 px-2'>
              {
                Array.isArray(jobData) && jobData.length > 0 ? jobData?.map((job) => {
                  return (
                     <JobsCard job={job} key={job?._id} />
                  )
                }) : <p className='text-sm text-center font-semibold  text-red-500'>Sorry No such Categories Job Available Right Now</p>
              }
            </div>
          )
      }
    </div>
  )
}


