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
  typeObj,
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

  const type = typeObj?.type;
  const hasType = type ? true : false;

  return (
    <>
      <div
        style={{
          borderTop: `${hasType && (type === "tl" || type === "t" || type === "tr") ? "2px solid blue" : "1px solid black"}`,
          borderRight: `${hasType && (type === "tr" || type === "r" || type === "br") ? "2px solid blue" : "1px solid black"}`,
          borderBottom: `${hasType && (type === "br" || type === "b" || type === "bl") ? "2px solid blue" : "1px solid black"}`,
          borderLeft: `${hasType && (type === "bl" || type === "l" || type === "tl") ? "2px solid blue" : "1px solid black"}`,
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
