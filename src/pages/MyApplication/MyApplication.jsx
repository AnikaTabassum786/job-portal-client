import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';

const MyApplication = () => {
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'loading applications'}>
                <MyApplication></MyApplication>
            </Suspense>
        </div>
    );
};

export default MyApplication;