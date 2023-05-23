import React, { useEffect, useState } from 'react'
export default function JobList() {
    const [recdata, setrecdata] = useState([]);
    const fetchApiData = () => {
        fetch("https://job-portal-zapc.onrender.com/api/get-job")
            .then(json => json.json())
            .then(data => {
                console.log(data)
                setrecdata(data.jobs)
            })
    }
    useEffect(() => {
        fetchApiData()
    }, [])
    console.log(recdata)
    return (
        <div>
            {
                recdata.map((rec) => (
                    <div className='jobdata'>
                        <h3 key={rec.company}>Company: {rec.company}</h3>
                        <p>Job Type: {rec.jobType}</p>
                        <p>Position: {rec.position}</p>
                        <p>Location: {rec.workLocation}</p>
                    </div>
                ))}
        </div>
    )
}