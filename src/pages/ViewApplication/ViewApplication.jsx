import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ViewApplication = () => {
    const {job_id} = useParams();
    const applications = useLoaderData();
    return (
        <div>
             <h2>{applications.length} Application for: {job_id}</h2>
             <div>
                {
                    applications.map(( application,index)=>{
                        return(
                            <>
                            {application.name}
                            </>
                        )
                    })
                }
             </div>
        </div>
    );
};

export default ViewApplication;