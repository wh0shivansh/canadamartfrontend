import React from "react";
import requireImage from "../../assets/require.png";

const RequirementComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "242px",
        flexShrink: 0,
        filter: "hue-rotate(170deg)",
        background: `url(${requireImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // filter: "hue-rotate(160deg)"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "480px",
          height: "45px",
          flexDirection: "column",
          marginLeft: "20px",
          marginBottom: "100px"
        }}
      >
        <p
          style={{
            color: "#FFF",
            fontSize: "1.6rem",
            fontFamily: "DM Sans",
            fontWeight: 700,
            fontStyle:"normal",
            lineHeight: "60px",
            // letterSpacing: "-1.5px",
            marginBottom: "35px",
          }}
          className=" font-bold "
        >
          Tell us about your requirement
        </p>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Enter the product you are looking for"
            style={{
              flex: 1,
              height: "56px",
              marginRight: "10px",
              padding: "5px 10px",
              fontSize: "16px",
              borderRadius: "5px",
              background: "#FFFFFF",
              width: "342px",
              flexShrink: 0,
              color: "#757575",
              // fontFamily: "DM Sans",
              // fontWeight: 700,
              lineHeight: "1.125rem",
              outline: "none",
              paddingLeft: "2px", 
              marginLeft: "-30px", 
            }}

            className="text-sm"
          />
          <button
            style={{
              width: "10.1875rem",
              height: "3.5rem",
              borderRadius: "5px",
              backgroundColor: "#F19B6C",
              border: "none",
              color: "#FFF",
              fontSize: "16px",
              filter: "hue-rotate(187deg)",
              fontWeight: 700,
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              // fontFamily: "Poppins",
              lineHeight: "1.25rem",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequirementComponent;