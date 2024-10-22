import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { formatDayMonthYear, getDurationTime, getUserStatusLevel } from '../../utils/helperFunction';

export default function UserStatusLevelsTable({ data }) {
    return (
        <table class="table-auto w-full h-full text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>ID</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Tên</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Email</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Trạng thái</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Thời gian</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Đơn vị</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Ngày bắt đầu</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>Ngày kết thúc</th>

                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item, index) =>
                        <tr key={index}>

                            {
                                item.userStatusLevelId &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.userStatusLevelId}</td>
                            }
                            {
                                item.fullName &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.fullName}</td>
                            }
                            {
                                item.email &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.email}</td>
                            }
                            {
                                item.statusId &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{getUserStatusLevel(item.statusId)}</td>
                            }
                            {
                                item.durationTime &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{getDurationTime(item.durationTime)}</td>
                            }
                            {
                                item.durationName &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.durationName}</td>
                            }

                            {
                                item.timeStart &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{formatDayMonthYear(item.timeStart)}</td>
                            }
                            {

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'> {item.timeEnd ? formatDayMonthYear(item.timeEnd) : 'Không giới hạn'}</td>
                            }
                            {/* <td className='p-5 text-base font-normal text-start whitespace-nowrap'>

                        <div className="flex items-center gap-5 border border-stroke w-fit px-2.5 py-2 rounded-lg bg-inputPlaceholder">

                            <button className='text-lg'>
                                <FaRegEdit />
                            </button>

                            <button className='text-lg text-textReject'>
                                <RiDeleteBinLine />
                            </button>

                        </div>
                    </td> */}
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
