import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    const {_id,title,company} =job

    return (
        <div>
            <p>{title}</p>
            <p>{company}</p>
            <Link to={`/jopApply/${_id}`}><button className='btn'>Apply</button></Link>
        </div>
    );
};

export default JobDetails;