"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      cubicInterpolationMode: string;
      backgroundColor: string;
      fill: boolean;
    }[];
  }
  const options = {
    responsive: true,
    plugins: {
   
      title: {
        display: true,
        text: '통계자료',
      },
      interaction: {
        intersect: false,
      },
    },
    scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
  };
  const data: any = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Facebook ads',
        data: [100, 120, 150, 80, 160, 110, 200, 250],
        borderColor: '#ff7300',
        backgroundColor: 'rgba(255, 115, 0, 0.2)',
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Google ads',
        data: [200, 210, 170, 140, 180, 200, 150, 130],
        borderColor: '#00c49f',
        backgroundColor: 'rgba(0, 196, 159, 0.2)',
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
        fill: false,
      },
    ],
  };

export default function LincChart(){
    return <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <Line data={data} options={options} />
    </div>
}