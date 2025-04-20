'use client'

import { Player } from "@lordicon/react";
import { IPlayerOptions } from "@lordicon/react/dist/interfaces";
import Link from "next/link";
import { useRef } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Prop = {
    tooltip: string
    href: string
    // icon: React.ReactNode
    icon: React.ReactNode
    // icon: IPlayerOptions['icon'];
}

export default function SidebarItem({ tooltip, href, icon }: Prop) {

    const playerRef = useRef<Player>(null);

    return (
        <>
            <TooltipProvider>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                        <Link
                            href={href}
                            onMouseEnter={() => playerRef.current?.playFromBeginning()}
                            className={`
                                py-6 w-full flex items-center justify-center
                                hover:cursor-pointer hover:bg-[var(--b-hover-bg)] 
                            `}
                        >
                            {icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-sm font-bold tracking-widest capitalize">{tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
}
