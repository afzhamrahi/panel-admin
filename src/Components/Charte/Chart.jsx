import React from 'react';
import "./Chart.css"
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    Tooltip
} from 'recharts'

const Chart = ({ title, data, dataKey, x, grid }) => {
    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line dataKey={dataKey} stroke="#5550bd" type='monotone' />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;