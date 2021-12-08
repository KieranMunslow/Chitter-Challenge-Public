const FindTime = milliseconds => {
    const minutes = Math.floor(milliseconds / 60000);
    if (minutes < 60) {
        return `${minutes}m`;
    } else {
        const hours = Math.floor(milliseconds / 3600000);
        if (hours < 24) {
            return `${hours}h`;
        } else {
            const days = Math.floor(milliseconds / 86400000);
            return `${days}d`;
        }
    }
}

export default FindTime;