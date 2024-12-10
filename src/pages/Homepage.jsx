import React, { useState } from 'react'
import { useData } from '../assets/Data'
import JobData from '../Components/JobData';

export default function Homepage() {
    const { jobsData } = useData();
    const data = 10;
    const [index, setIndex] = useState(0)

    const dataLength = jobsData.length / data;

    return (
        <div>
            {jobsData.map((job, idx) =>
                idx >= (data * index)  && idx <= data * (index + 1) ?
                    <JobData key={job.jobid} job={job} /> :
                    <></>
            )}
            <>
            {index === 0 ? <></> : <button onClick={(e) => setIndex(index - 1)} >Previous</button>}
            <h1>{index}</h1>
            {index === dataLength-1 ? <></> : <button onClick={(e) => setIndex(index + 1)}>Next</button>}
            </>
        </div>
    )
}
