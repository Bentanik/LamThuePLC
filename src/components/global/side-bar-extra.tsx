import { Button } from '../ui/button'
import { LogOut, User } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Prop = {
    icon: React.ReactNode
    tooltip: string
}

export default function SidebarExtra({ icon, tooltip }: Prop) {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        className='hover:cursor-pointer'
                        variant={'ghost'}
                    >
                        {icon}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p className="text-sm font-bold tracking-wider capitalize">{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
