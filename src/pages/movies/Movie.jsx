import React from "react";

export default function Movie({
  title,
  imdbId,
  image,
  rating,
  date,
  firstSeen,
  children,
}) {
  return (
    <div
      className="movie-review"
      style={{
        display: "flex",
        gap: "20px",
        margin: "2rem 0",
        flexWrap: "wrap",
        border: "1px solid #eee",
        padding: "15px",
        borderRadius: "8px",
      }}
    >
      <div style={{ flex: "0 0 150px" }}>
        <img
          src={image}
          alt={`${title} poster`}
          style={{
            width: "100%",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            display: "block",
          }}
        />
      </div>

      <div style={{ flex: "1", minWidth: "250px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ margin: "0 0 5px 0", fontSize: "1.5rem" }}>{title}</h2>
          <span className="outtaten">
            {rating}
            <span>/10</span>
          </span>
        </div>

        <div
          style={{
            fontSize: "0.85rem",
            color: "#666",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>Seen: {firstSeen ? "???" : date}</span>
          {imdbId && (
            <>
              <span>•</span>
              <a
                href={`https://www.imdb.com/title/${imdbId}/`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#f3ce13",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                IMDb
              </a>
            </>
          )}
        </div>

        <div
          className="movie-thoughts"
          style={{ fontStyle: "italic", lineHeight: "1.6" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
