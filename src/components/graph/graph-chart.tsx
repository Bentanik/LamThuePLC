'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


type Prop = {
    mainLabel: string
    mainUnit: string
    xAxisLabel: string
    xAxisUnit: string
    yAxisLabel: string
    yAxisUnit: string
    value1Name: string
    value2Name: string
}

export default function GraphChart({ value1Name, value2Name, xAxisLabel, xAxisUnit, yAxisLabel, yAxisUnit, mainLabel, mainUnit }: Prop) {

    const data = [
        { name: 200, value1: 40, value2: 123 },
        { name: 400, value1: 55, value2: 12 },
        { name: 600, value1: 30, value2: 51 },
        { name: 800, value1: 80, value2: 74 },
        { name: 1000, value1: 65, value2: 93 },
    ];

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="flex flex-col gap-3 bg-white border border-gray-300 rounded-md p-3 shadow-md">
                    <p className="text-sm text-black tracking-wider">{yAxisLabel}: {label}{yAxisUnit}</p>
                    {payload.map((entry: any, index: number) => (
                        <p
                            key={`tooltip-${index}`}
                            className="text-sm tracking-wider"
                            style={{ color: entry.color }}
                        >
                            {entry.name}: {entry.value}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };


    return (
        <div className="flex flex-col gap-5 justify-center  p-5 w-full h-[60vh]">
            <p className="px-2 text-2xl font-bold tracking-wider">{mainLabel} [{mainUnit}]</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ bottom: 40 }}
                >
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        label={{
                            value: `${xAxisLabel} (${xAxisUnit})`,
                            position: 'insideBottom',
                            offset: -10,
                            style: { fill: 'black', fontSize: 20, fontWeight: 'bold' },
                        }}
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" align="center" />
                    <Line type="monotone" dataKey="value1" name={`${value1Name}`} stroke="blue" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="value2" name={`${value2Name}`} stroke="red" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
