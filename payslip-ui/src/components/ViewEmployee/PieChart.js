import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';

const PieChart = ({ desiStats }) => {
  const state = {
    labels: desiStats.map((desi) => desi.designation),
    datasets: [
      {
        label: 'Designation',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
        ],
        hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F',
        ],
        data: desiStats.map((desi) => desi.designationCount),
      },
    ],
  };
  return (
    <div className="info-pie">
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: 'Team Stats',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
};
export default PieChart;
