import React from 'react'

export default function JobData({ job }) {

    return (
        <ul>
            <li>{job.jobId}</li>
            <li>{job.jobRole}</li>
            <li>{job.workType}</li>
            <li>
                <img src={job.companyIcon} alt={job.jobId} />
            </li>
            <li>{job.companyName}</li>
            <li>{job.location}</li>
            <br />
        </ul>
    )
}


// {
//     jobId: crypto.randomUUID(),
//     jobRole: "Software Engineer",
//     workType: "Remote",
//     salary: "₹10,00,000 - ₹15,00,000",
//     companyIcon: "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
//     companyName: "Tech Solutions",
//     location: "Bangalore, India", 
// }