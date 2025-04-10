'use client'

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils"


export default function MonitorHeader() {

  const frameworks = [
    {
      value: "auto",
      label: "Tự Động",
    },
    {
      value: "manual",
      label: "Thủ Công",
    },
  ]

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("auto")

  return (
    <>
      <nav className="px-5 py-3 w-full text-white bg-black">
        <div className="flex flex-row justify-between w-full items-center">
          <p className="text-lg font-bold tracking-wider capitalize">Màn hình giám sát</p>
          <div className="flex flex-row gap-5 items-center">
            <p className="text-lg font-bold tracking-wider capitalize">Trạng Thái</p>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="default"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[150px] justify-between hover:cursor-pointer"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Trạng thái..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[150px] p-0">
                <Command>
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue)
                            setOpen(false)
                          }}
                        >
                          {framework.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === framework.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </nav>
    </>
  )
}
