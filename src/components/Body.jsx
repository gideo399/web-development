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
    <div className="bg-red-500">
      <h1>The header</h1>

      {/* Guard against null before accessing properties */}
      {activity ? (
        <>
          <p>ID: {activity.id}</p>
          <img src={activity.url} alt="Random cat" width="300" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Body;