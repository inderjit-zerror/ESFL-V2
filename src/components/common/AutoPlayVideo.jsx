"use client";

import React, { useEffect, useRef } from 'react';

const AutoPlayVideo = React.forwardRef(({ src, className, ...props }, forwardedRef) => {
  const localRef = useRef(null);
  const videoRef = forwardedRef || localRef;

  useEffect(() => {
    if (videoRef && videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(e => console.log("Video autoplay failed:", e));
    }
  }, [videoRef]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      className={className}
      {...props}
    >
      {src && <source src={src} type="video/mp4" />}
      {props.children}
    </video>
  );
});

AutoPlayVideo.displayName = 'AutoPlayVideo';

export default AutoPlayVideo;
