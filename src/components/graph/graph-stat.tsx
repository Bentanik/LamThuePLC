
type Prop = {
    icon: React.ReactNode
    value: string
    unit: string
    label: string
}

export default function GraphStat({ icon, value, unit, label }: Prop) {


    return (
        <div className="flex flex-col w-[20vw] shadow-md duration-200 gap-4 p-5 rounded-lg text-black hover:shadow-xl">
            <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-row w-full justify-between items-center">
                    {icon}
                </div>
                <p className="text-base font-semibold capitalize tracking-wider whitespace-nowrap">{label}</p>
            </div>
            <p
                className="
                    relative w-fit text-xl font-bold tracking-widest 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 
                    after:h-[1.5px] after:w-full after:bg-black 
                    after:scale-x-0 hover:after:scale-x-100 
                    after:origin-left after:transition-transform after:duration-300
                "
            > 
                {value} {unit}
            </p>

        </div>
    )
}
