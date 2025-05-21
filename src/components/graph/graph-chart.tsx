'use client'

import { useDatabase } from '@/hooks/use-database';
import { useEffect, useState } from 'react';
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

type SchemeData = {
    name: number;
    value1: number;
    value2: number;
}

export default function GraphChart({ value1Name, value2Name, xAxisLabel, xAxisUnit, yAxisLabel, yAxisUnit, mainLabel, mainUnit }: Prop) {
    const { data: dataM, loading: loadingM, error: errorM } = useDatabase<DataM>("/M");
    const { data: dataC, loading: loadingC, error: errorC } = useDatabase<DataC>("/C");
  
    const [dataSchema, setDataSchema] = useState<SchemeData[]>([]);
  
    useEffect(() => {
      let isCancelled = false;
  
      const fetchData = () => {
        if (isCancelled) return;
        if (dataM && dataC) {
          const data: SchemeData = {
            name: dataM.W,
            value1: dataM.W,
            value2: dataC.SP ?? 0,
          };
          setDataSchema(prev => [...prev, data]);
        }
  
        setTimeout(fetchData, 2000);
      };
  
      // Gọi lần đầu tiên
      fetchData();
  
      return () => {
        isCancelled = true;
      };
    }, [dataM, dataC]);
  
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="flex flex-col gap-3 bg-white border border-gray-300 rounded-md p-3 shadow-md">
                    <p className="text-sm text-black tracking-wider">{yAxisLabel}: {label}{yAxisUnit}</p>
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
                    data={dataSchema}
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
