import React from 'react';
import { formatDayMonthYear } from '../../utils/helperFunction';

export default function DashboardTable({ data }) {
    return (
        <table className="table-auto w-full h-full text-textColor">
            <thead className='bg-inputPlaceholder'>
                <tr>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>ID</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Email</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Xếp hạng</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Tên phiên bản</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap'>Đánh giá</th>
                    <th className='p-5 text-base font-bold text-start whitespace-nowrap first:rounded-l-xl last:rounded-r-xl'>Ngày đánh giá</th>

                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((item, index) =>
                        <tr key={index}>
                            <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{index + 1}</td>

                            {
                                item.email &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.email}</td>
                            }
                            {
                                item.rating &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.rating}</td>
                            }
                            {
                                item.nameVersion &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{item.nameVersion}</td>
                            }
                            {
                                item.reviewOptions &&
                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>
                                    {item.reviewOptions.split(",").map((word, index) => (
                                        <div key={index}>{word}</div>
                                    ))}
                                </td>
                            }

                            {
                                item.createdAt &&

                                <td className='p-5 text-base font-normal text-start whitespace-nowrap'>{formatDayMonthYear(item.createdAt)}</td>
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
