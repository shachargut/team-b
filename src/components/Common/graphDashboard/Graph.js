import React from 'react';
import './Style.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph(){
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };
    


    const labels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // get the data as props - props.xAxis
    const data = {
      labels,
      datasets: [
        {
            label: 'Assesments 3',
            data: [10, 5,-5,17,30,2,40],
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Reading 2',
            data: [35,3],
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'blue',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Focus',
            data: [10,20,0,17,30,2,40],
            // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
    };
    
      return <Line options={options} data={data} />;


}

