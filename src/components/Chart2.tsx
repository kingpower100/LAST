import React, { useState, useCallback } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// Define the type for the data
interface DataItem {
  stage: string;
  value: number;
}

const Chart2: React.FC = () => {
  const [data] = useState<DataItem[]>([
    { stage: 'CVs Received', value: 150 },
    { stage: 'Interviews', value: 50 },
    { stage: 'Hires', value: 10 },
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = useCallback((data: any, index: number) => {
    setActiveIndex(index);
  }, []);

  const activeItem = data[activeIndex];

  // Define colors for each bar
  const colors = ['#00396c', '#005b96', '#6497b1'];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stage" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell 
                cursor="pointer" 
                fill={colors[index]} // Apply specific color based on index
                key={`cell-${index}`} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p>{`Value of "${activeItem.stage}": ${activeItem.value}`}</p>
    </div>
  );
};

export default Chart2;
