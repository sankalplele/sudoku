import { useState } from "react";

function Box({
  value,
  row,
  col,
  isEditing,
  isBoardEditing,
  setIsBoardEditing,
  count,
  setCount,
  onSelect,
  isPreFilled,
}) {
  const handleBoxClick = () => {
    if ((!isBoardEditing && !isPreFilled) || isEditing) {
      setCount((prevCount) => prevCount + 1);
      onSelect(row, col);
      setIsBoardEditing(true);
    }
  };

  return (
    <>
      <div
        style={{
          border: "1px solid blue",
          textAlign: "center",
          alignContent: "center",
          cursor: `${(!isBoardEditing && !isPreFilled) || isEditing ? "pointer" : "auto"}`,
          fontWeight: `${isPreFilled ? "bold" : "auto"}`,
          backgroundColor: isEditing
            ? "rgb(0, 240, 255)"
            : isPreFilled
              ? "rgb(220, 240, 255)"
              : "transparent",
        }}
        onClick={handleBoxClick}
      >
        {!isEditing && value != 0 ? value : ""}
        {isEditing ? (count % 10 != 0 ? count % 10 : "") : ""}
      </div>
    </>
  );
}

export default Box;
