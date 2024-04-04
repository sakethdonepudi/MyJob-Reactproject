import dayjs from 'dayjs'; // Import dayjs for date manipulation
import React from 'react';

function JobCard(props) {
    // Get the postedOn date from props
    const postedOn = props.postedOn.toDate(); // Convert Firestore Timestamp to JavaScript Date object

    // Calculate the difference in days between the current date and the posted date
    const diffInDays = dayjs().diff(dayjs(postedOn), 'day');

    return (
        <div className='mx-40 mb-4'>
            <div className='flex justify-between items-center px-6 py-4 bg-purple-200 rounded-md border border-white shadow-md hover:border-black hover:translate-y-1 hover:scale-105'>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-lg font-semibold'>{props.title} - {props.company}</h1>
                    <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
                    <div className='flex items-center gap-2'>
                        {props.skills.map((skill) => (
                            <p key={skill} className='text-gray-500 py-1 px-2 rounded-lg border border-gray-500'>{skill}</p>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-gray-500'>Posted {diffInDays === 0 ? 'today' : `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`}</p>
                    <a href={props.job_link}>
                        <button className='text-blue-800 border border-black px-10 py-2 rounded-md'>Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
