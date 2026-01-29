import React from "react";

const SpotifyEmbed = ({ trackId, wide = false, height = 352 }) => {
  // Construct the embed URL
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        maxWidth: wide ? "100%" : "352px",
      }}
    >
      <iframe
        title="Spotify Track Player"
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
