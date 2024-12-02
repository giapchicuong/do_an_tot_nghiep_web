import React from 'react';

export default function LoadingPage() {
    return (
        <div className="flex justify-center items-center min-h-[100vh]">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
            <div className="relative flex justify-center items-center">
                <div className="absolute animate-spin rounded-full h-80 w-80 border-t-4 border-b-4 border-purple-500"></div>
                <img
                    alt=''
                    src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                    className="rounded-full h-52 w-52"
                />
            </div>
        </div>
    );
}
