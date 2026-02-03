import React, { createContext, useContext, useState } from "react";
import "./spoilers.css";

const SpoilerContext = createContext();

export const SpoilerPageWrapper = ({ children }) => {
  const [showSpoilers, setShowSpoilers] = useState(false);

  return (
    <SpoilerContext.Provider value={{ showSpoilers }}>
      <div className="spoiler-page-container">
        {children}
        <button
          className="spoiler-fab"
          onClick={() => setShowSpoilers(!showSpoilers)}
        >
          {showSpoilers ? "🕶️ Hide Spoilers" : "👀 Show Spoilers"}
        </button>
      </div>
    </SpoilerContext.Provider>
  );
};

export const Spoiler = ({ children }) => {
  const context = useSpoilers();

  const isHidden = context ? !context.showSpoilers : false;

  const style = {
    backgroundColor: isHidden ? "black" : "rgba(0,0,0,0.1)",
    color: isHidden ? "transparent" : "inherit",
    borderRadius: "4px",
    padding: "0 4px",
    transition: "all 0.2s ease-in-out",
    display: "inline",
    cursor: isHidden ? "not-allowed" : "text",
  };

  return <span style={style}>{children}</span>;
};

export const useSpoilers = () => useContext(SpoilerContext);
