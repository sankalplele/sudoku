import React from "react";

function Box({ value }) {
  return (
    <>
      <div
        style={{
          border: "1px solid red",
          textAlign: "center",
        }}
      >
        {value != 0 ? value : ""}
      </div>
    </>
  );
}

export default Box;
