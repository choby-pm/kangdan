"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
