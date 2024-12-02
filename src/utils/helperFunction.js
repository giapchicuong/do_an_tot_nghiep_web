
export const getRoleName = (roleId) => {
    switch (parseInt(roleId)) {
        case 1:
            return 'Admin'
        case 2:
            return 'Khách hàng'
        default:
            return ''
    }
}

export const getUserStatusLevel = (stausId) => {
    switch (parseInt(stausId)) {
        case 1:
            return 'VIP'
        case 2:
            return 'Bình thường'
        default:
            return ''
    }
}

export const getDurationTime = (durationTime) => {
    switch (parseInt(durationTime)) {
        case 1000:
            return 'Vĩnh viễn'
        default:
            return durationTime;
    }
}



export const formatDayMonthYear = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;

}

export const convertDate = (inputDate) => {
    // Tạo đối tượng Date từ chuỗi nhập vào
    const dateObj = new Date(inputDate);

    // Trích xuất các giá trị year, month, day
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // getMonth trả về giá trị từ 0-11, cần +1 để đúng tháng
    const day = dateObj.getDate();

    return `${day}/${month}/${year}`
}


export const convertMonthYear = (inputDate) => {
    // Tạo đối tượng Date từ chuỗi nhập vào
    const dateObj = new Date(inputDate);

    // Trích xuất các giá trị year, month, day
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // getMonth trả về giá trị từ 0-11, cần +1 để đúng tháng
    const day = dateObj.getDate();

    return { month: month, year: year }
}

export const convertMultiDate = (inputDates) => {
    return inputDates.map((inputDate) => {
        const dateObj = new Date(inputDate);

        // Trích xuất các giá trị year, month, day
        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; // getMonth trả về giá trị từ 0-11
        const day = dateObj.getDate();

        return `${year}/${month}/${day}`;
    });
};

export const getDatesInRange = (dateRange) => {
    if (!Array.isArray(dateRange) || dateRange.length !== 2) {
        throw new Error("Input must be an array with two dates");
    }

    const [startDate, endDate] = dateRange; // Lấy giá trị từ mảng
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = [];

    // Lặp qua từng ngày, thêm vào mảng
    while (start <= end) {
        // Định dạng ngày `YYYY/MM/DD`
        const year = start.getFullYear();
        const month = start.getMonth() + 1; // getMonth trả về giá trị từ 0-11
        const day = start.getDate();

        dates.push(`${year}-${month}-${day}`);

        // Tăng ngày lên 1
        start.setDate(start.getDate() + 1);
    }

    return dates;
};




