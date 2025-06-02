import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';

import ApplicationList from './ApplicationList.jsx';
import { myApplicationPromise } from '../../api/applicationAPI.js';
import useAuth from '../../hooks/useAuth.jsx';

const MyApplication = () => {

     const {user} = useAuth()

     console.log('Token firebase token', user.accessToken)

    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'loading applications'}>
               <ApplicationList myApplicationPromise={myApplicationPromise(user.email,user.accessToken)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;