export enum DateFormatEnum {
    MM_DD_YYYY = "MM/DD/YYYY",
    DD_MM_YYYY = "DD/MM/YYYY",
    YYYY_MM_DD = "YYYY-MM-DD",
    MMM_DD_YYYY = "MMM DD, YYYY",
    MMMM_DD_YYYY = "MMMM DD, YYYY",
    HH_MM_SS = "HH:mm:ss",
    HH_MM_A = "HH:mm A",
    DD_MMM_YYYY_HH_MM = "DD MMM YYYY HH:mm",
}

export const formatDate = (date: Date, format: DateFormatEnum): string => {
    const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const shortMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const hour = padZero(date.getHours());
    const minute = padZero(date.getMinutes());
    const second = padZero(date.getSeconds());
    const shortMonth = shortMonths[date.getMonth()];
    const longMonth = months[date.getMonth()];
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    const hour12 = date.getHours() % 12 || 12;

    switch (format) {
        case DateFormatEnum.MM_DD_YYYY:
            return `${month}/${day}/${year}`;
        case DateFormatEnum.DD_MM_YYYY:
            return `${day}/${month}/${year}`;
        case DateFormatEnum.YYYY_MM_DD:
            return `${year}-${month}-${day}`;
        case DateFormatEnum.MMM_DD_YYYY:
            return `${shortMonth} ${day}, ${year}`;
        case DateFormatEnum.MMMM_DD_YYYY:
            return `${longMonth} ${day}, ${year}`;
        case DateFormatEnum.HH_MM_SS:
            return `${hour}:${minute}:${second}`;
        case DateFormatEnum.HH_MM_A:
            return `${hour12}:${minute} ${ampm}`;
        case DateFormatEnum.DD_MMM_YYYY_HH_MM:
            return `${day} ${shortMonth} ${year} ${hour}:${minute}`;
        default:
            return date.toString(); // Fallback to default string representation
    }
};

// Example usage:
const now = new Date();
