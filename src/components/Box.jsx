import React from "react";

function Box({ value, isPreFilled }) {
  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          textAlign: "center",
          alignContent: "center",
          cursor: `${isPreFilled ? "auto" : "pointer"}`,
          fontWeight: `${isPreFilled ? "bold" : "auto"}`,
          backgroundColor: `${isPreFilled ? "rgb(220, 240, 255)" : "auto"}`,
        }}
      >
        {value != 0 ? value : ""}
      </div>
    </>
  );
}

export default Box;
