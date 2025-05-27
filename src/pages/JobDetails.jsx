import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData();
    const {title,company} =job

    return (
        <div>
            <p>{title}</p>
            <p>{company}</p>
        </div>
    );
};

export default JobDetails;