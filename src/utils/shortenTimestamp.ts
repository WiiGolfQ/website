export default function shortenTimestamp(timestamp: string) {
    const colonIndex = timestamp.lastIndexOf(":");
    return timestamp.replace("T", " ").substring(0, colonIndex);
}
