"use client";

import Link from "next/link";
import React, { useState } from "react";

const HomePage = () => {
  const containerStyle: React.CSSProperties = {
    padding: "20px",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

    const bookButtonStyle: React.CSSProperties = {
      backgroundColor: "transparent",
      border: "none",
      borderRadius: '5px 0 0 5px',
      color: "#fff",
      fontSize:"25px",
      marginRight:"25px",
      cursor: "pointer",
      // borderRight: '1px solid white',
    };

    const arrowbuttonStyle: React.CSSProperties = {
      backgroundColor: 'transparent',
      color:'white',
      padding:'1px 1px',
      // marginRight: '1px',
      fontSize: '1px',
      border: 'none',
      borderRadius: '0 5px 5px 0',
      cursor: 'pointer',
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
      width: '20%',
  };

  const dropdownItemStyle: React.CSSProperties = {
    borderRight:'1px',
      padding: '8px 1px',
      cursor: 'pointer',
      position:'relative',
  };

  const dash: React.CSSProperties={
    fontSize: "35px",
    marginLeft: "0px",
    marginRight: "15px",

  };

  const arrowStyle: React.CSSProperties = {
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "15px",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  };

    const headerStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft:"25px",
    };


 return(

  <div style={containerStyle}>
    <header style={headerStyle}>
        <img src="dp-big-logo.svg" alt="dp logo" style={{ height: "50px" }} />
        <div style={containerStyle} 
          onMouseLeave={closeDropdown}>
<button onClick={toggleDropdown} style={bookButtonStyle}>
          book
          </button>
          <span style={dash}>|</span>
          <button onClick={toggleDropdown} style={arrowbuttonStyle}>
            <span style={arrowStyle}>&#9660;</span>
          </button>
          <div style={dropdownStyle}>
                    <div style={dropdownItemStyle}>Check Pricing</div>
                    <div style={dropdownItemStyle}>Our Locations</div>
                    <div style={dropdownItemStyle}>Customer Reviews</div>
                </div>  
          
      </div> 
      </header> 
      
      <main>
      <Link href="/vehicles">
        <button
          style={{
            textAlign:'center',
            backgroundColor: "#f8c20e",
            padding: "10px 20px",
            fontSize: "20px",
            border: "none",
            color: "#000",
            position:'absolute',
            left:'43%',
          }}
        >
          Go to Car Booking
        </button>
      </Link>
      </main>
  </div>
  
 );
};
export default HomePage;
