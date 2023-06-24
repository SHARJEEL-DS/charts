import React, { useState, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import {
  useQuery
} from 'react-query'
import axios from 'axios'
import { ReactQueryDevtools } from 'react-query/devtools';
import Chart from 'chart.js/auto';


import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = () => {
  const [chart, setChart] = useState({})
  // var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  // var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";



  const {
    isLoading,
    isFetching,
    error,
    data
} = useQuery("repoData", () =>
    axios.get('https://dummyjson.com/products/search?q=Laptop').then((res) => res.data));
    
    //checking status
    if(isLoading){
        return<h1>Loading...</h1>
    }
    if(error){
        return "An error has occured: " + error.message;
    }

  console.log("chart", data);
  var dataa = {
    labels: data?.products?.map(x => x.title),
    datasets: [{
      label: `${data?.products?.length} products Available`,
      data: data?.products?.map(x => x.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
   
      <Doughnut
        data={dataa}
        height={400}
        options={options}

      />
    </div>
  )
}

export default DoughnutChart
