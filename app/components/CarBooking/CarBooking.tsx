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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
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
        <span style={dash}>|</span>
          <button onClick={toggleDropdown} style={arrowbuttonStyle} onMouseLeave={closeDropdown}>
            <span style={arrowStyle}>&#709;</span>
          </button>
          <div className={`dropdown ${isOpen ? 'open' : ''}`} style={dropdownStyle}>
            <div style={dropdownItemStyle}>Check Pricing</div>
            <div style={dropdownItemStyle}>Our Locations</div>
            <div style={dropdownItemStyle}>Customer Reviews</div>
          </div>
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
              style={{ width: "100%", height: "500px" }}
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
const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
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
  justifyContent: "space-between",
  textAlign: "center",
  overflow: "hidden",
};

const modelViewerRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "20px",
};

const navButtonStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  color: "#fff",
  fontSize: "30px",
};

const informationRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
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
const arrowbuttonStyle: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: 'white',
  padding: '1px 1px',
  fontSize: '1px',
  fontWeight: "20sp",
  borderRadius: '0 5px 5px 0',
  cursor: 'pointer',
  fontFamily: 'Jomhuria, sans-serif',
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease",
};
const dropdownStyle: React.CSSProperties = {
  display: isOpen ? 'block' : 'none',
  position: "absolute",
  backgroundColor: 'grey',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  padding: '12px 16px',
  zIndex: 1,
  marginTop: '10px',
  borderRadius: '5px',
};
const dropdownItemStyle: React.CSSProperties = {
  padding: '8px 1px',
  cursor: 'pointer',
};
const dash: React.CSSProperties = {
  fontSize: "35px",
  marginLeft: "0px",
  marginRight: "15px",
};

const arrowStyle: React.CSSProperties = {
  marginRight: "10px",
  cursor: "pointer",
  fontSize: "20px",
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  transition: "transform 0.2s ease",
 };

export default CarBooking;
