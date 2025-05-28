import React, { useEffect, useState } from 'react';
import JobCard from '../../shared/JobCard';

const Hotjob = () => {

    const [jobs,setJobs] = useState()

    useEffect(()=>{
          fetch('http://localhost:3000/jobs')
          .then(response => response.json())
          .then(data =>{
            setJobs(data)
          })
    },[])
    
    return (
       <>
       <p className='text-4xl font-medium text-center my-4'>Hot Jobs</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4'>
         
          {
            jobs?.map((job,index)=>{
                return(
                    <JobCard key={index} job={job}>
                      
                    </JobCard>
                )
            })
          }
        </div>
       </>
    );
};

export default Hotjob;