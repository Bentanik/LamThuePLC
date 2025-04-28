'use client';

import HomeIcon from '../../../public/animated/system-solid-41-home-hover-home-2.json'
import MonitorIcon from '../../../public/animated/system-solid-42-search-hover-search.json'
import SettingIcon from '../../../public/animated/system-solid-63-settings-cog-hover-cog-3.json'
import WarningIcon from '../../../public/animated/system-solid-56-warning-hover-warning.json'
import GraphIcon from '../../../public/animated/system-solid-10-analytics-hover-analytics.json'
import { ChartNoAxesColumn, Cog, House, LogOut, Monitor, TriangleAlert, User } from 'lucide-react'
import SidebarExtra from './side-bar-extra'
import SidebarItem from './side-bar-item'
import { useAuth } from '@/context/auth-context';
import { useBackdrop } from '@/context/backdrop_context';


export default function Sidebar() {
    const { signOut } = useAuth();
    const { showBackdrop, hideBackdrop } = useBackdrop();

    const handleLogout = async () => {
        try {
            showBackdrop();
            signOut();
            window.location.href = "/login";
        } catch (err) {
        } finally {
            hideBackdrop();
        }
    }
    return (
        <nav className="flex flex-col justify-between items-center w-[9vw] bg-black text-white">
            <div className='flex flex-col items-center w-full'>
                <SidebarItem
                    tooltip='Trang Chủ'
                    href={'#'}
                    icon={<House size={35} />}
                />
                <SidebarItem
                    tooltip='Giám Sát'
                    href={'monitor'}
                    icon={<Monitor size={35} />}
                />
                <SidebarItem
                    tooltip='Cài Đặt'
                    href={'setting'}
                    icon={<Cog size={35} />}
                />
                <SidebarItem
                    tooltip='Cảnh báo'
                    href={'warning'}
                    icon={<TriangleAlert size={35} />}
                />
                <SidebarItem
                    tooltip='Thống kê'
                    href={'graph'}
                    icon={<ChartNoAxesColumn size={35} />}
                />
            </div>
            <div className='flex flex-row justify-evenly w-full items-center pb-10'>
                <SidebarExtra
                    icon={<User size={22} />}
                    tooltip='tài khoản'
                />
                <div onClick={handleLogout}>
                    <SidebarExtra
                        icon={<LogOut size={22} />}
                        tooltip='đăng xuất'
                    />
                </div>
            </div>
        </nav>
    );
}
