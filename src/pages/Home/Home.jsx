import React from 'react';
import Banner from './Banner';
import Hotjob from './Hotjob';

const Home = () => {

// const jobsPromise = fetch('http://localhost:3000/jobs').then(res=>res.json())

    return (
        <div>
            This is Home page
            <div>
                <Banner></Banner>
               
                    <Hotjob></Hotjob>
               
            </div>
        </div>
    );
};

export default Home;