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
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useDatabase } from "@/hooks/use-database"


export default function SettingModule() {
    const [modeSetting, setModeSetting] = useState<'view' | 'edit'>('view')
    const [modePID, setModePID] = useState<'view' | 'edit'>('view')

    const { data: dataM, loading: loadingM, error: errorM } = useDatabase<DataM>("/M");
    const { data: dataC, loading: loadingC, error: errorC } = useDatabase<DataC>("/C");


    return (
        <div>
            {dataM !== null && dataC !== null && <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead rowSpan={2} className="w-[7vw] text-left border-r border-gray">
                                <Button
                                    onClick={modeSetting == 'view' ? () => setModeSetting("edit") : () => setModeSetting('view')}
                                    className={`w-full h-[60%] uppercase`}
                                >
                                    {modeSetting == 'view' ? (
                                        'Chỉnh sửa'
                                    ) : (
                                        'Đồng ý'
                                    )}
                                </Button>
                            </TableHead>
                            <TableHead colSpan={2} className="text-center text-base text-black font-bold tracking-wider capitalize">Bảng cài đặt</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right">Tốc độ</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.INV}</p>
                                <Input
                                    className={`${modeSetting == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right">Ngưỡng nhiệt độ cảnh báo </TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modeSetting == 'edit' && 'hidden'}`}>{dataC.ND}</p>
                                <Input
                                    className={`${modeSetting == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right">Cài mực nước</TableCell>
                            <TableCell className="text-center tracking-wider">
                            <p className={`${modeSetting == 'edit' && 'hidden'}`}>{dataC.SP}</p>
                                <Input
                                    className={`${modeSetting == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead rowSpan={2} className="w-[7vw] text-left border-r border-gray">
                                <Button
                                    onClick={modePID == 'view' ? () => setModePID("edit") : () => setModePID('view')}
                                    className={`w-full h-[60%] uppercase`}
                                >
                                    {modePID == 'view' ? (
                                        'Chỉnh sửa'
                                    ) : (
                                        'Đồng ý'
                                    )}
                                </Button>
                            </TableHead>
                            <TableHead colSpan={2} className="text-center text-base text-black font-bold tracking-wider capitalize">Bảng cài đặt thông số PID</TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">Mức độ</TableHead>
                            <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize border-r border-gray">Áp suất</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right">KP</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.P}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                            <TableCell className="text-center border-gray border-r border-gray tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.KP}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right">KI</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.I}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                            <TableCell className="text-center border-gray border-r border-gray tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.KI}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right">KD</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.D}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                            <TableCell className="text-center border-gray border-r border-gray tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.KD}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right ">Chu kỳ lấy mẫu</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.ST} ms</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                            <TableCell className="text-center border-r border-gray tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.ST} ms</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right ">Giới hạn trên</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.MAX}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                            <TableCell className="text-center border-r border-gray tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.MAX}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-bold tracking-wider text-right ">Giới hạn dưới</TableCell>
                            <TableCell className="text-center tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.MIN}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                            <TableCell className="text-center border-r border-gray tracking-wider">
                                <p className={`${modePID == 'edit' && 'hidden'}`}>{dataC.MIN}</p>
                                <Input
                                    className={`${modePID == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                                    placeholder="1234"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>}
        </div>

    )
}
