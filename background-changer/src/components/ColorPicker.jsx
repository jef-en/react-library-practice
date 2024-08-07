import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#454545");
  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="main-container" style={{ backgroundColor: color }}>
      <h1>Color Picker</h1>
      <p>Selected Color: {color}</p>
      <div className="">
        <label>
          Select a color: &nbsp;
          <input type="color" value={color} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
}
export default ColorPicker;
