
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


