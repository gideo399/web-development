import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        // API returns an array — take the first item
        setActivity(response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching cat image:', error);
      });
  }, []);

  return (
    <div className="flex   ">

           <p className='text-2xl text-shadow-black flex justify-center items-center '>This is an image generation api </p>

      {/* Guard against null before accessing properties */}
      {activity ? (
        <>
         
          <img src={activity.url} alt="Random cat" width="300" className='flex justify-center items-center pt-12' />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Body;