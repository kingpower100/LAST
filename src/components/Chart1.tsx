import React, { FC } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

interface Data {
  name: string;
  value: number;
}

const Chart1: FC = () => {
  const data: Data[] = [
    { name: 'DATA', value: 150 },
    { name: 'IT', value: 200 },
    { name: 'MARKETING', value: 20 },
  ];

  // Define colors for each segment
  const colors = ['#00396c', '#005b96', '#6497b1'];

  return (
    <div className="Chart1">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={({ name }) => name} // Show label based on name
          isAnimationActive={true} // Ensure animation is active
          animationBegin={0} // Animation starts immediately
          animationDuration={1500} // Animation duration in milliseconds
          animationEasing="ease-in-out" // Animation easing function
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Chart1;
