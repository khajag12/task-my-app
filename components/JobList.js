"use client"

import JobItem from '@/components/JobItem';
import { useEffect, useState} from 'react';

export const dummyData = [
    {
      id: "1",
      title: "Job Headline Demo",
      timestamp:434000000,
      category: "Lorem ipsum",
      employerName: "Lorem ipsum",
      description:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum.",
    },
    {
      id: "2",
      title: "Job Headline Demo",
      timestamp:43400000,
      category: "Lorem ipsum",
      employerName: "Lorem ipsum",
      description:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum.",
    },
    {
      id: "3",
      title: "Job Headline Demo",
      timestamp:435000000,
      category: "Lorem ipsum",
      employerName: "Lorem ipsum",
      description:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum.",
    },
  ];

const JobList = ({dataFromParent, sendNumberToParent}) => {

  const [numberToSend, setNumberToSend] = useState(null);
  const filteredData = dummyData.filter((item) =>
    String(item.description).toLowerCase().includes(String(dataFromParent).toLowerCase())
    );

  useEffect(() => {
    
    const sendNumber = () => {
      sendNumberToParent(numberToSend);
    };
  
    setNumberToSend(filteredData.length);
    sendNumber();
    
  }, [filteredData]);
  

    
  
  return (
  <div>
    {dataFromParent.length===0 && dummyData.map((data) => (
        <JobItem
          className="border"
          key={data.id}
          id={data.id}
          category={data.category}
          title={data.title}
          description={data.description}
          employerName={data.employerName}
          timestamp={data.timestamp}
        />
      ))}
      {dataFromParent.length>0 && filteredData.map((data) => (
        <JobItem
          className="border"
          key={data.id}
          id={data.id}
          category={data.category}
          title={data.title}
          description={data.description}
          employerName={data.employerName}
          timestamp={data.timestamp}
        />
      ))}
  </div>);
};



export default JobList;