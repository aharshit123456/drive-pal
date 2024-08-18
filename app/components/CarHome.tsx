"use client";

import React, { useState } from "react";

  const HomePage = () => {
    const containerStyle: React.CSSProperties = {
        padding: '20px',
    };

    const [isOpen, setIsOpen]= useState(false);

const toggleDropdown = () => {
  setIsOpen(!isOpen);
};

const closeDropdown= () => {
  setIsOpen(false);
};



    const bookButtonStyle: React.CSSProperties = {
      backgroundColor: "transparent",
      border: "none",
      borderRadius: '5px 0 0 5px',
      color: "#fff",
      fontSize:"35px",
      marginRight:"25px",
      cursor: "pointer",
      borderRight: '1px solid white',
    };

    const arrowbuttonStyle: React.CSSProperties = {
      backgroundColor: 'transparent',
      color:'white',
      padding:'1px 1px',
      fontSize: '20px',
      border: 'none',
      borderRadius: '0 5px 5px 0',
      cursor: 'pointer',
    };

    const dropdownStyle: React.CSSProperties = {
      display: isOpen ? 'block' : 'none',
      position: "inherit",
      backgroundColor: 'grey',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      padding: '12px 16px',
      zIndex: 1,
      marginTop: '10px',
      borderRadius: '5px',
      width: '100%',
  };

  const dropdownItemStyle: React.CSSProperties = {
      padding: '8px 0',
      cursor: 'pointer',
  };

  const arrowStyle: React.CSSProperties={
    marginRight: '10px',
    cursor: 'pointer',
    fontSize:'20px',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease',
  };

    const headerStyle: React.CSSProperties = {
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      marginLeft:"25px",
    };

 return(

  <div style={containerStyle}>
        <img src="dp-logo.svg" alt="dp logo" style={{ height: "75px" }} />
        <header style={headerStyle}>
        <div style={containerStyle} 
          onMouseLeave={closeDropdown}>
<button onClick={toggleDropdown} style={bookButtonStyle}>
          book
          </button>
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
  </div>
  
 );
};
export default HomePage;