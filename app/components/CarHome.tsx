"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../globals.css";
import Modal from "./Modal";


const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    backgroundColor: "#1e1e1e",
  };

  const bookButtonStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    border: "none",
    borderRadius: '5px 0 0 5px',
    color: "#fff",
    fontSize: "25px",
    marginRight: "25px",
    cursor: "pointer",
    fontWeight: 10,
    fontFamily: "Inter, sans-serif",  // Font set to Inter
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
    // width: '10%',
    
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

  const headerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "25px",
  };

  const mainStyle: React.CSSProperties = {
    position: "relative",
    textAlign: "center",
  };

  const carImageStyle: React.CSSProperties = {
    height: '70vh',
    width: '70vw',
    // objectFit: 'cover',
    margin: '0 auto',
    display: 'block',
  };

  const buttonStyle: React.CSSProperties = {
    textAlign: 'center',
    backgroundColor: "#f8c20e",
    padding: "10px 20px",
    fontSize: "20px",
    border: "none",
    color: "#000",
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const logoStyle: React.CSSProperties = {
    height: "50px",
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
      <img className="main_logo" src="dp-big-logo.svg" alt="dp logo" style={logoStyle} />
        <div style={containerStyle} onMouseLeave={closeDropdown}>
          <button onClick={toggleDropdown} style={bookButtonStyle}>
            book
          </button>
          <span style={dash}>|</span>
          <button onClick={toggleDropdown} style={arrowbuttonStyle}>
            <span style={arrowStyle}>&#709;</span>
          </button>
          <div className={`dropdown ${isOpen ? 'open' : ''}`} style={dropdownStyle}>
            <div style={dropdownItemStyle}>Check Pricing</div>
            <div style={dropdownItemStyle}>Our Locations</div>
            <div style={dropdownItemStyle}>Customer Reviews</div>
          </div>
        </div>
      </header>

      <main style={mainStyle}>
        <img src="cars.svg" alt="cars" style={carImageStyle} />
        <Link href="/vehicles">
          <button style={buttonStyle}>
            Go to Car Booking
          </button>
        </Link>
      </main>

      <style jsx>{`
        .dropdown {
          display: ${isOpen ? 'block' : 'none'};
          position: absolute;
          background-color: grey;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          padding: 12px 16px;
          z-index: 1;
          margin-top: 10px;
          border-radius: 5px;
          width: 10%;
          transition: all 0.2s ease;
        }

        @media (max-width: 720px) {
          header {
            flex-direction: column;
            align-items: center;
          }

          .main_logo {
            order: 1;
            height: 80px;
            width: auto; 
          }

          div[style*="containerStyle"] {
            margin: 0 auto;
            overflow: hidden;
          }

          div.dropdown{
            width: 20%;
          }

          img[src="cars.svg"] {
            height: auto;
            width: 100%;
            object-fit: cover;
          }

          button[style*="buttonStyle"] {
            position: static;
            transform: none;
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
