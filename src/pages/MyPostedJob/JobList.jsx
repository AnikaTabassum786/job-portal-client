import React, { use } from 'react';

const JobList = ({jobsCreatedByPromise}) => {
    const jobs = use(jobsCreatedByPromise)
    return (
         <div>
      <p>Job List: {jobs.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Deadline</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.deadline}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default JobList;