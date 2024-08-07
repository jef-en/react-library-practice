import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#454545");
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="main-container" style={{ backgroundColor: color }}>
      <div className="title-container">
        <h1>Color Picker</h1>
        <p>
          Selected Color: <b>{color}</b>
        </p>
        <input type="color" value={color} onChange={handleChange} />
      </div>
    </div>
  );
}
export default ColorPicker;
