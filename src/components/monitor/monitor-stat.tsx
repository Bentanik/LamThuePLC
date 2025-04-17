'use client'

import { Check, Pen } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { Input } from "../ui/input"


type Prop = {
    icon: React.ReactNode
    value: string
    unit: string
    label: string
}

export default function MonitorStat({ icon, value, unit, label }: Prop) {

    const [mode, setMode] = useState<'view' | 'edit'>('view')
    const [val, setVal] = useState(value)

    return (
        <div className="flex flex-col w-[20vw] shadow-md duration-200 gap-4 p-5 rounded-lg text-black hover:shadow-xl">
            <div className="flex flex-row w-full justify-between items-center">
                {icon}
                <Button
                    variant={"ghost"}
                    className={`hover:cursor-pointer ${mode == 'view' && 'hidden'}`}
                    onClick={() => setMode('view')}
                >
                    <Check color="green" size={20} />
                </Button>
                <Button
                    variant={"ghost"}
                    className={`hover:cursor-pointer ${mode == 'edit' && 'hidden'}`}
                    onClick={() => setMode('edit')}
                >
                    <Pen size={20} />
                </Button>
            </div>
            <input
                className={`pr-3 pb-1 border-b border-black outline-none text-lg font-bold tracking-wider focus:ring-0 ${mode == 'view' && 'hidden'}`}
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <p className={`pb-1 text-lg font-bold tracking-wider ${mode == 'edit' && 'hidden'}`}>{val} {unit}</p>
            <p className="text-sm font-semibold capitalize tracking-wider">{label}</p>
        </div>
    )
}
