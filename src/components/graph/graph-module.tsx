'use client'

import { Droplet, Gauge, Waves, Weight, Zap } from "lucide-react";
import GraphStat from "./graph-stat";
import GraphChart from "./graph-chart";
import { useDatabase } from "@/hooks/use-database";


export default function GraphModule() {
    const data = useDatabase("M");
    
    console.log(data);
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row w-full justify-evenly items-center p-3">
                <GraphStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--droplet-bg)] p-2 rounded-full">
                            <Droplet className="text-[var(--droplet-col)]" size={20} />
                        </div>
                    }
                    value="50.00"
                    unit="%"
                    label="mức nước tham chiếu"
                />
                <GraphStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--wave-bg)] p-2 rounded-full">
                            <Waves className="text-[var(--wave-col)]" size={20} />
                        </div>
                    }
                    value="500"
                    unit="Bar"
                    label="mức nước phản hồi"
                />
                <GraphStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--weight-bg)] p-2 rounded-full">
                            <Weight className="text-[var(--weight-col)]" size={20} />
                        </div>
                    }
                    value="50.00"
                    unit="%"
                    label="áp suất phản hồi"
                />
                <GraphStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--electric-bg)] p-2 rounded-full">
                            <Zap className="text-[var(--electric-col)]" size={20} />
                        </div>
                    }
                    value="50.00"
                    unit="V"
                    label="điện áp bơm"
                />
            </div>
            <div className="w-full p-3 flex flex-col items-center">
                <GraphChart
                    mainLabel="Mức Nước"
                    mainUnit="%"
                    xAxisLabel={"Thời Gian"}
                    xAxisUnit={"s"}
                    yAxisLabel={"Mức Nước"}
                    yAxisUnit={"%"}
                    value1Name={"Mực Nước"}
                    value2Name={"Áp Suất"}
                />
                <GraphChart
                    mainLabel="Mức Nước"
                    mainUnit="%"
                    xAxisLabel={"Thời Gian"}
                    xAxisUnit={"s"}
                    yAxisLabel={"Mức Nước"}
                    yAxisUnit={"%"}
                    value1Name={"Mực Nước"}
                    value2Name={"Áp Suất"}
                />
            </div>

        </div>
    )
}
