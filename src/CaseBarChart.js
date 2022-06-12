import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';


const CaseBarChart = () => {
    const [data,setData] = useState([]); //using useState to hook to store the data and render it on the DOM
   
    const getData=()=>{
        fetch('./Datasets/case_record.json'
      
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])

  const config = {
    data,
    xField: 'value',
    yField: 'level_2',
    seriesField: 'year',
    legend: {
      position: 'bottom',
      
    },
    minBarWidth: 30,
    maxBarWidth: 30,
   
  };
  return ( <Bar {...config} />)
 
};

// ReactDOM.render(<DemoBar />, document.getElementById('container'));
export default CaseBarChart;