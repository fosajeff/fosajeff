import React from "react";

import { FaArrowUp } from "react-icons/fa";

const Top = (props) => {
  return (
    <button
      style={btnStyle}
      id="myBtn"
      onClick={props.topFunction}
      title="Go to top"
    >
      <FaArrowUp />
    </button>
  );
};

const btnStyle = {
  position: "fixed",
  bottom: "20px",
  right: "30px",
  zIndex: "99",
  border: "none",
  outline: "none",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.54)",
  color: "white",
  cursor: "pointer",
  padding: "9px 14px 13px 14px",
};

export default Top;
