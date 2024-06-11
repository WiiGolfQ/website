"use client";

import { useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";

interface YtVidProps {
    videoId: string;
    timestamp?: number;
}

const YtVid = ({ videoId, timestamp }: YtVidProps) => {
    const onStateChange: YouTubeProps["onStateChange"] = (event) => {
        if (event.data === YouTube.PlayerState.PLAYING) {
            console.log(timestamp);
        }
    };

    const opts: YouTubeProps["opts"] = {
        playerVars: { start: timestamp },
    };

    return (
        <YouTube videoId={videoId} opts={opts} onStateChange={onStateChange} />
    );
};

export default YtVid;
