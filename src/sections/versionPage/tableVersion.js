import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { formatDayMonthYear } from '../../utils/helperFunction';

export default function VersionTable({ data }) {
    return (
        <table class="table-auto w-full h-full text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>ID</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Tên phiên bản</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Phiên bản đang được chọn</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>Ngày tạo</th>

                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item, index) =>
                        <tr key={index}>

                            {
                                item.versionId &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.versionId}</td>
                            }
                            {
                                item.nameVersion &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.nameVersion}</td>
                            }
                            {

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.isSelectedVersion === 0 ? 'Đang chọn' : ''}</td>
                            }
                            {
                                item.createdAt &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{formatDayMonthYear(item.createdAt)}</td>
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
