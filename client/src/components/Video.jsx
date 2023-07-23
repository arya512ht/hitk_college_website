import React from 'react'
const img = "/images/lib.mp4";
export default function Video() {
  return (
    <div>
      <video
        src={img}
        height="15%"
        width="100%"
        controls
        loop
        autoPlay
        muted
        style={{
          border: "7px solid gold",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "2rem"
        }}
      ></video>
    </div>
  );
}
