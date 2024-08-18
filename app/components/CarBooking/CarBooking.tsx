"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ModelViewer = dynamic(() => import("./ModelViewerWrapper"), {
  ssr: false,
});

// Extend JSX.IntrinsicElements to include 'model-viewer'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLModelViewerElement>,
        HTMLModelViewerElement
      > & { src?: string };
    }
  }
}

interface HTMLModelViewerElement extends HTMLElement {
  src?: string;
}

const CarBooking = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [showMapModal, setShowMapModal] = useState(false);
  const [showVehicleListModal, setShowVehicleListModal] = useState(false);

  if (!isClient) {
    return null;
  }

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <Link href="/">
          <img src="dp-logo.svg" alt="dp logo" style={{ height: "50px" }} />{" "}
        </Link>
        <button style={bookButtonStyle}>Book</button>
      </header>

      <main style={mainStyle}>
        <div style={modelViewerRowStyle}>
          <button
            onClick={() => alert("Previous Vehicle")}
            style={navButtonStyle}
          >
            &lt;
          </button>

          {isClient && (
            <ModelViewer
              src={"scooter_simple.glb"}
              camera-controls
              auto-rotate
              style={modelViewerStyle}
            ></ModelViewer>
          )}

          <button onClick={() => alert("Next Vehicle")} style={navButtonStyle}>
            &gt;
          </button>
        </div>

        <div style={informationRowStyle}>
          <button onClick={() => setShowMapModal(true)} style={iconButtonStyle}>
            <img src="/map-icon.png" alt="Map Icon" style={{ width: "50px" }} />
          </button>

          <div style={{ textAlign: "center" }}>
            <h1>2025 Mercedes-Benz CLA</h1>
            <p>Rs. 6000 / 24 Hrs</p>
            <p>Premium Range</p>
            <button style={bookNowButtonStyle}>Book Now</button>
          </div>

          <button
            onClick={() => setShowVehicleListModal(true)}
            style={iconButtonStyle}
          >
            <img
              src="/more-icon.png"
              alt="More Icon"
              style={{ width: "50px" }}
            />
          </button>
        </div>
      </main>

      {/* Map Modal */}
      {showMapModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <button
              onClick={() => setShowMapModal(false)}
              style={closeButtonStyle}
            >
              X
            </button>
            <h2>Vehicle Location</h2>
            {/* Embedding the Google Maps component */}
          </div>
        </div>
      )}

      {/* Vehicle List Modal */}
      {showVehicleListModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <button
              onClick={() => setShowVehicleListModal(false)}
              style={closeButtonStyle}
            >
              X
            </button>
            <h2>Other Vehicles</h2>
            {/* Embed your vehicle list component here */}
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
  boxSizing: "border-box",
  overflow: "hidden",
};

const modelViewerStyle: React.CSSProperties = {
  width: "100%",
  height: "calc(50vh - 60px)", // Reduce height to fit the Information Row
  maxHeight: "400px", // Optional: Set a maximum height for the ModelViewer
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const bookButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  color: "#fff",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around", // Distribute space evenly
  textAlign: "center",
  transformOrigin: "top", // Scale from the top
};

const modelViewerRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  flex: 1, // Allow the row to take available space
};

const navButtonStyle: React.CSSProperties = {
  fontSize: "min(5vw, 30px)",
  color: "#fff",
  border: "none",
  backgroundColor: "transparent",
};

const informationRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "20px", // Margin at the top for spacing
  flex: 0.5, // Occupy less space than the model viewer row
};

const iconButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
};

const bookNowButtonStyle: React.CSSProperties = {
  backgroundColor: "#f8c20e",
  padding: "10px 20px",
  fontSize: "20px",
  border: "none",
  color: "#000",
};

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "80%",
  maxHeight: "500px",
  textAlign: "center",
};

const closeButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  fontSize: "20px",
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
};

export default CarBooking;
