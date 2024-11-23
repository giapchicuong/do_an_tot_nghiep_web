import React from 'react';
import DefaultNavbar from './DefaultNavbar';
import { AiOutlineDashboard } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi2';
import { GrAnalytics } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
import { GoVersions } from "react-icons/go";

export default function SideBar() {
    const location = useLocation();

    const url = location.pathname.split('/')[2] ?? ''

    const menuItems = [
        { title: 'Tổng quan', linkTo: '', icon: <AiOutlineDashboard className='text-xl' /> },
        { title: 'Báo cáo', linkTo: 'analyst', icon: <GrAnalytics className='text-xl' /> },
        { title: 'Người dùng', linkTo: 'users', icon: <HiOutlineUsers className='text-xl' /> },
        { title: 'Thành viên', linkTo: 'user-status-levels', icon: <HiOutlineUsers className='text-xl' /> },
        { title: 'Phiên bản', linkTo: 'versions', icon: <GoVersions className='text-xl' /> },
    ];

    return (
        <aside className='min-w-[240px] p-5 flex flex-col gap-10'>

            <div className='flex justify-center py-1 items-center gap-1'>

                <p className='text-xl font-extrabold text-primary'>Admin</p>

                <p className='text-xl font-extrabold'>Dashboard</p>
            </div>

            <div className="flex flex-col gap-2">

                {menuItems.map((item) => (

                    <DefaultNavbar
                        key={item.linkTo}
                        title={item.title}
                        linkTo={item.linkTo}
                        isActive={url === item.linkTo}
                        icon={item.icon}
                    />
                ))}
            </div>
        </aside>
    );
}
