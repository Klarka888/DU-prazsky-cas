
import { useEffect, useState } from 'react';

import './style.css';

export const HomePage = () => {
  const [dateTime, setDateTime] = useState('')  

  
  useEffect(() => {
    const fetchTime = async () => {
     
      const response = await fetch(
        `https://worldtimeapi.org/api/timezone/Europe/Prague`
      );
      const data = await response.json();
      setDateTime(data.datetime);
    };

    fetchTime();
  }, []);


return(
<> 
V Praze je:  
{dateTime}
</>

)}
