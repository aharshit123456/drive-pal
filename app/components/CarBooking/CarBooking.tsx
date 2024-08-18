"use client";

import React, { useState, useEffect } from "react";
// import "@google/model-viewer";
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
        <img src="dp-logo.svg" alt="dp logo" style={{ height: "50px" }} /> </Link>
        <button style={bookButtonStyle}>Book</button>
      </header>

      <main style={mainStyle}>
        {isClient && (
          <ModelViewer
            src={"scooter_simple.glb"}
            camera-controls
            auto-rotate
            style={{ width: "100%", height: "500px" }}
          ></ModelViewer>
        )}

        <div style={{ marginTop: "20px" }}>
          <h1>2025 Mercedes-Benz CLA</h1>
          <p>Rs. 6000 / 24 Hrs</p>
          <p>Premium Range</p>
          <button style={bookNowButtonStyle}>Book Now</button>
        </div>

        <div style={navigationStyle}>
          <button
            onClick={() => alert("Previous Vehicle")}
            style={navButtonStyle}
          >
            &lt;
          </button>

          <button onClick={() => setShowMapModal(true)} style={iconButtonStyle}>
            <img src="/map-icon.png" alt="Map Icon" style={{ width: "50px" }} />
          </button>

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

          <button onClick={() => alert("Next Vehicle")} style={navButtonStyle}>
            &gt;
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


export default MapModal; 


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
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
};

const bookNowButtonStyle: React.CSSProperties = {
  backgroundColor: "#f8c20e",
  padding: "10px 20px",
  fontSize: "20px",
  border: "none",
  color: "#000",
};

const navigationStyle: React.CSSProperties = {
  marginTop: "50px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const navButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "30px",
};

const iconButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
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
  maxWidth: "500px",
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
