import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Lesson = () => {
    const singleData =useLoaderData()
    console.log(singleData)
    return (
        <div>
            
        </div>
    );
};

export default Lesson;
