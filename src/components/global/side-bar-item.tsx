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
    icon: IPlayerOptions['icon'];
}

export default function SidebarItem({ tooltip, href, icon }: Prop) {

    const playerRef = useRef<Player>(null);

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href={href}
                            onMouseEnter={() => playerRef.current?.playFromBeginning()}
                            className="
                                py-5 w-full flex items-center justify-center
                                hover:cursor-pointer hover:bg-[var(--hover-bg)] 
                            "
                        >
                            <Player
                                ref={playerRef}
                                icon={icon}
                                colorize='white'
                                size={50}
                            />
                            {/* {icon} */}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-base font-bold tracking-wider capitalize">{tooltip}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    );
}
