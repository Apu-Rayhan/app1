import React, { useState } from "react";

// Parent
export default function Color(){
  const [UIcolor, setUIColor] = useState(null);

  //our callback function
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <section>
      <div className="card">
        <div className="cg" style={{ backgroundColor: `${UIcolor}` }}>
        </div>
        <CallBack getColor={getColor} />
      </div>
    </section>
  );
};

// Child
const CallBack = ({ getColor }) => {
  const [activecolor, setActiveColor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <>
      <div className="buttom">
      <input
        type="text"
        placeholder="Enter Your Color Name"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activecolor}
      />
      </div>
    </>
  );
};
