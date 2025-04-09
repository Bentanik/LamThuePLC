'use client'

import HomeIcon from '../../../public/animated/system-solid-41-home-hover-home-2.json'
import MonitorIcon from '../../../public/animated/system-solid-42-search-hover-search.json'
import SettingIcon from '../../../public/animated/system-solid-63-settings-cog-hover-cog-3.json'
import WarningIcon from '../../../public/animated/system-solid-56-warning-hover-warning.json'
import GraphIcon from '../../../public/animated/system-solid-10-analytics-hover-analytics.json'
import SidebarItem from "./side-bar-item";
import { LogOut, User } from 'lucide-react'
import SidebarExtra from './side-bar-extra'



export default function Sidebar() {

    return (
        <nav className="flex flex-col justify-between items-center w-[10vw] bg-black text-white">
            <div className='flex flex-col items-center w-full'>
                <SidebarItem
                    tooltip='Trang Chủ'
                    href={'#'}
                    icon={HomeIcon}
                />
                <SidebarItem
                    tooltip='Giám Sát'
                    href={'#'}
                    icon={MonitorIcon}
                />
                <SidebarItem
                    tooltip='Cài Đặt'
                    href={'#'}
                    icon={SettingIcon}
                />
                <SidebarItem
                    tooltip='Vấn Đề'
                    href={'#'}
                    icon={WarningIcon}
                />
                <SidebarItem
                    tooltip='Thống kê'
                    href={'#'}
                    icon={GraphIcon}
                />
            </div>
            <div className='flex flex-row justify-evenly w-full items-center pb-10'>
                <SidebarExtra
                    icon={<User />}
                    tooltip='tài khoản'
                />
                <SidebarExtra
                    icon={<LogOut />}
                    tooltip='đăng xuất'
                />
            </div>
        </nav>
    );
}
