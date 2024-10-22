import React from 'react'
import DefaultSearch from './DefaultSearch'
import { IoIosLogOut } from 'react-icons/io'
import DropdownAvatar from './DropdownAvatar'
import { RiUserSettingsLine } from 'react-icons/ri'
import { PiKeyBold } from 'react-icons/pi'
import { useSelector } from 'react-redux'
import { getRoleName } from '../utils/helperFunction'
export default function Header() {
    const { email, roleId } = useSelector(state => state.auth)
    return (
        <header className='w-full px-8 py-4 flex items-center justify-between'>

            <DefaultSearch
                placeholder='Tìm kiếm'
                styles='w-[388px]'
            />


            <DropdownAvatar
                email={email}
                roleName={getRoleName(roleId)}
                data={[
                    {
                        id: 1,
                        name: 'Quản lý tài khoản',
                        icon: <RiUserSettingsLine className='text-xl text-primary' />
                    },
                    {
                        id: 2,
                        name: 'Quên mật khẩu',
                        icon: <PiKeyBold className='text-xl text-uptrend' />
                    },
                    {
                        id: 3,
                        name: 'Đăng xuất',
                        icon: <IoIosLogOut className='text-xl text-downtrend' />
                    },
                ]}
            />
        </header>
    )
}
