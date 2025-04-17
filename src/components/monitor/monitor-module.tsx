import { Droplet, Gauge, Weight, Zap } from "lucide-react";
import MonitorStat from "./monitor-stat";

export default function MonitorModule() {

    return (
        <div className="flex flex-row jusity-between">
            <div className="flex flex-row w-full justify-evenly items-center p-3">
                <MonitorStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--droplet-bg)] p-2 rounded-full">
                            <Droplet className="text-[var(--droplet-col)]" size={20} />
                        </div>
                    }
                    value="50.00"
                    unit="%"
                    label="Đặt mức nước"
                />
                <MonitorStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--weight-bg)] p-2 rounded-full">
                            <Weight className="text-[var(--weight-col)]" size={20} />
                        </div>
                    }
                    value="500"
                    unit="Bar"
                    label="Áp suất"
                />
                <MonitorStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--gauge-bg)] p-2 rounded-full">
                            <Gauge className="text-[var(--gauge-col)]" size={20} />
                        </div>
                    }
                    value="50.00"
                    unit="%"
                    label="mức nước"
                />
                <MonitorStat
                    icon={
                        <div className="inline-flex items-center justify-center bg-[var(--electric-bg)] p-2 rounded-full">
                            <Zap className="text-[var(--electric-col)]" size={20} />
                        </div>
                    }
                    value="50.00"
                    unit="V"
                    label="điện áp"
                />
            </div>
        </div>
    )
}
