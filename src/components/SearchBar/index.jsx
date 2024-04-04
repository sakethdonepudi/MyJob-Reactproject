import React, { useState } from 'react';


function Searchbar({ onSearch }) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: "",
    });  

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };
    
    const handleSearch = () => {
        // Pass jobCriteria to the parent component for filtering
        onSearch(jobCriteria);
    };

    return (
        <div className='flex gap-4 my-10 justify-center px-11'>
            <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-64 py-3 pl-5 bg-purple-300 font-bold rounded-lg'>
                <option value="" disabled hidden selected>Job Role</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="backend Developer">Backend Developer</option>
                <option value="Flutter Developer">Fullstack Developer</option>
                <option value="Solidity Developer">Solidity Developer</option>
                <option value="HR Manager">HR Manager</option>
            </select>
            <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-5 bg-purple-300 font-bold rounded-lg'>
                <option value="" disabled hidden selected>Job Location</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="In Office">In Office</option>
            </select>
            <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-64 py-3 pl-5 bg-purple-300 font-bold rounded-lg'>
                <option value="" disabled hidden selected>Experience</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Senior Level">Senior Level</option>
            </select>
            <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-5 bg-purple-300 font-bold rounded-lg'>
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Internship">Internship</option>
                <option value="Freelance">Freelance</option>
            </select>
            <button onClick={handleSearch} className='w-64 bg-purple-600 text-black font-semibold py-3 rounded-md shadow-md border-black hover:border-black hover:translate-y-1 hover:scale-85'>Search</button>
        </div>
    );
}

export default Searchbar;
