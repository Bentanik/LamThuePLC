'use client'

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"
import { CalendarIcon, ExternalLink, Search, TriangleAlert } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { vi } from 'date-fns/locale';



export default function WarningModule() {

  const [from, setFrom] = useState<Date>()
  const [to, setTo] = useState<Date>()

  const onConfirmDate = () => {
    if (to && from && to < from) {
      console.log('`to` is earlier than `from`');
    }
  }

  return (

    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-5 items-center w-full pt-4">
        <div className="flex flex-row gap-3 items-center">
          <TriangleAlert color="red" size={25} />
          <p className="text-xl text-center font-bold w-full tracking wider capitalize">bảng cảnh báo lỗi hệ thống</p>
          <TriangleAlert color="red" size={25} />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">Ngày tháng</TableHead>
              <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">ID</TableHead>
              <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">trạng thái</TableHead>
              <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">cảnh báo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center font-semibold tracking-widest">
                11/5/2025
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                3
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                1
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider capitalize">
                quá áp suất
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-semibold tracking-widest">
                11/5/2025
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                3
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                1
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider capitalize">
                quá áp suất
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-semibold tracking-widest">
                11/5/2025
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                3
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                1
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider capitalize">
                quá áp suất
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-semibold tracking-widest">
                11/5/2025
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                3
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                1
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider capitalize">
                quá áp suất
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center font-semibold tracking-widest">
                11/5/2025
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                3
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider">
                1
              </TableCell>
              <TableCell className="text-center font-semibold tracking-wider capitalize">
                quá áp suất
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col p-5 gap-5 items-center">
        <p className="text-xl text-center font-bold w-full tracking wider capitalize">tìm kiếm</p>

        <div className="flex flex-col gap-3">
          <p className="text-base font-semibold tracking-wider capitalize">từ</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[20vw] justify-start text-left font-normal",
                  !from && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {from ? format(from, "dd/MM/yyyy") : <span className="font-semibold tracking-wider">Chọn ngày</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={from}
                onSelect={setFrom}
                initialFocus
                locale={vi}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-base font-semibold tracking-wider capitalize">đến</p>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[20vw] justify-start text-left font-normal",
                  !to && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {to ? format(to, "dd/MM/yyyy") : <span className="font-semibold tracking-wider">Chọn ngày</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={to}
                onSelect={setTo}
                initialFocus
                locale={vi}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <Button
            className="flex flex-row gap-3 items-center bg-blue-600 hover:bg-blue-500 hover:cursor-pointer"
            variant={'ghost'}
          >
            <p className="text-sm text-white text-semibold tracking-wider capitalize">
              xuất
            </p>
            <ExternalLink color="white" />
          </Button>
          <Button
            className="flex flex-row gap-3 items-center bg-black hover:bg-[#333] hover:cursor-pointer"
            variant={'outline'}
          >
            <p className="text-sm text-white text-semibold tracking-wider capitalize">
              tìm kiếm
            </p>
            <Search color="white" />
          </Button>
        </div>

        <div className="flex flex-col gap-2 px-5 py-3 w-full bg-yellow-100/80 rounded-md transition duration-300 hover:shadow-xl">
          <div className="flex flex-row gap-2 items-center">
            <TriangleAlert color="orange" size={18} />
            <p className="text-base font-bold tracking-wider capitalize">các cảnh báo trong bảng</p>
          </div>
          <p className="text-base tracking-wider capitalize">1. quá điện áp</p>
          <p className="text-base tracking-wider capitalize">2. quá áp suất</p>
          <p className="text-base tracking-wider capitalize">3. thiếu áp suất</p>
          <p className="text-base tracking-wider capitalize">4. quá mức nước</p>
          <p className="text-base tracking-wider capitalize">5. thiết mức nước</p>
        </div>
      </div>
    </div>
  )
}
