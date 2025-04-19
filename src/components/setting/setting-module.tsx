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


export default function SettingModule() {

    const [mode, setMode] = useState<'view' | 'edit'>('view')

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead rowSpan={2} className="w-[7vw] text-left border-r border-gray">
                        <Button
                            onClick={mode == 'view' ? () => setMode("edit") : () => setMode('view')}
                            className={`w-full h-[60%] uppercase`}
                        >
                            {mode == 'view' ? (
                                'Chỉnh sửa'
                            ) : (
                                'Đồng ý'
                            )}
                        </Button>
                    </TableHead>
                    <TableHead colSpan={2} className="text-center text-base text-black font-bold tracking-wider capitalize border-r border-gray">CtrlParamsBackUp</TableHead>
                    <TableHead colSpan={2} className="text-center text-base text-black font-bold tracking-wider capitalize">Retain_CtrlParams</TableHead>
                </TableRow>
                <TableRow>
                    <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">Mức độ</TableHead>
                    <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize border-r border-gray">áp suất</TableHead>
                    <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">Mức độ</TableHead>
                    <TableHead className="text-center text-base text-black font-bold tracking-wider capitalize">áp suất</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="text-left font-bold tracking-wider text-right">Gain</TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center border-r border-gray border-r border-gray tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-left font-bold tracking-wider text-right">Ti</TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center border-r border-gray border-r border-gray tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-left font-bold tracking-wider text-right tracking-wider">Td</TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center border-r border-gray tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-left font-bold tracking-wider text-right tracking-wider">TdFiltRatio</TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center border-r border-gray tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-left font-bold tracking-wider text-right tracking-wider">PWeighting</TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center border-r border-gray tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="text-left font-bold tracking-wider text-right tracking-wider">Cycle</TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center border-r border-gray tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                    <TableCell className="text-center tracking-wider">
                        <p className={`${mode == 'edit' && 'hidden'}`}>1234</p>
                        <Input
                            className={`${mode == 'view' && 'hidden'} border-0 border-b-1 border-gray-300 rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-none text-center`}
                            placeholder="1234"
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
