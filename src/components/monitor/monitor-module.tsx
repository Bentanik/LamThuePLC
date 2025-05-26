'use client';

import { Gauge, Weight, Zap } from "lucide-react";
import MonitorStat from "./monitor-stat";
import { useDatabase } from "@/hooks/use-database";

export default function MonitorModule() {
    const { data: dataM, loading: loadingM, error: errorM } = useDatabase<DataM>("/M");
    const { data: dataC, loading: loadingC, error: errorC } = useDatabase<DataC>("/C");

    return (
        // <div className="flex flex-col jusity-between">
        //     {dataM !== null && dataC !== null && <div className="flex flex-row w-full justify-evenly items-center p-3">
        //         <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--gauge-bg)] p-2 rounded-full">
        //                     <Gauge className="text-[var(--gauge-col)]" size={20} />
        //                 </div>
        //             }
        //             value={dataC?.SP?.toFixed(2).toString() || "0.00"}
        //             unit="%"
        //             label="Đặt mực nước"
        //         />
        //         <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--weight-bg)] p-2 rounded-full">
        //                     <Weight className="text-[var(--weight-col)]" size={20} />
        //                 </div>
        //             }
        //             value={dataM?.P?.toFixed(2).toString() || "0.00"}
        //             unit="Bar"
        //             label="Áp suất"
        //         />
        //         <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--electric-bg)] p-2 rounded-full">
        //                     <Zap className="text-[var(--electric-col)]" size={20} />
        //                 </div>
        //             }
        //             value={dataM?.O?.toFixed(2).toString() || "0.00"}
        //             unit="V"
        //             label="Điện áp"
        //         />
        //         <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--gauge-bg)] p-2 rounded-full">
        //                     <Gauge className="text-[var(--gauge-col)]" size={20} />
        //                 </div>
        //             }
        //             value={dataM?.W.toFixed(2).toString() || "0.00"}
        //             unit="%"
        //             label="Mức nước"
        //         />
        //     </div>}
        //  {dataM !== null && dataC !== null &&  <div className="flex flex-row w-full justify-evenly items-center p-3">
        //         <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--gauge-bg)] p-2 rounded-full">
        //                     <Gauge className="text-[var(--gauge-col)]" size={20} />
        //                 </div>
        //             }
        //             value={dataM?.ND.toFixed(2).toString() || "0.00"}
        //             unit="%"
        //             label="Nhiệt độ"
        //         />
        //         {/* <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--weight-bg)] p-2 rounded-full">
        //                     <Weight className="text-[var(--weight-col)]" size={20} />
        //                 </div>
        //             }
        //             value={dataM?.INV.toFixed(2).toString() || "0.00"}
        //             unit="Hz"
        //             label="Tốc độ quạt hút"
        //         /> */}
        //         <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--electric-bg)] p-2 rounded-full">
        //                     <Zap className="text-[var(--electric-col)]" size={20} />
        //                 </div>
        //             }
        //             value={(dataM?.B == '1' || dataM.B == '4') ? "True" : "False"}
        //             unit=""
        //             label="Trạng thái van điện từ"
        //         />
        //            <MonitorStat
        //             icon={
        //                 <div className="inline-flex items-center justify-center bg-[var(--electric-bg)] p-2 rounded-full">
        //                     <Zap className="text-[var(--electric-col)]" size={20} />
        //                 </div>
        //             }
        //             value={(dataM?.B == '3' || dataM.B == '4') ? "True" : "False"}
        //             unit=""
        //             label="Trạng thái lõi biến tần"
        //         />
        //     </div>}
        // </div>
        <div>1234</div>
    )
}
