import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const ChartPage = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT');
      const apiData = response.data;
  
      let chartData = {};
  
      if (Array.isArray(apiData)) {
        chartData = {
          labels: apiData.map((item) => item.label),
          datasets: [
            {
              label: 'Chart Data',
              data: apiData.map((item) => item.value),
            },
          ],
        };
      } else if (typeof apiData === 'object') {
        // Assuming the API response is an object with labels and values
        chartData = {
          labels: Object.keys(apiData),
          datasets: [
            {
              label: 'Chart Data',
              data: Object.values(apiData),
            },
          ],
        };
      }
  
      setChartData(chartData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  

  return (
    <div>
      <h1>Chart</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartPage;
