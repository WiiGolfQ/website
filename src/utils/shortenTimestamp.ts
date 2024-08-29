export default function shortenTimestamp(timestamp: string) {
    const dayjs = require("dayjs");
    return dayjs(timestamp).format("YYYY-MM-DD HH:mm");
}
