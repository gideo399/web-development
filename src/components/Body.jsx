import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Body = () => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    axios
      .get('https://bored-api.appbrewery.com/random')
      .then(response => {
        setActivity(response.data);
      });
  }, []);

  return (
    <div className="bg-red-500">
      <h1>The header</h1>

      <p>{activity?.activity}</p>
      <p>Type: {activity?.type}</p>
      <p>Participants: {activity?.participants}</p>
    </div>
  );
};

export default Body;