import { useState } from "react";

function Try() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  return (
    <div>
      <p>
        My favorite car is {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleChange} />
      <input type="text" value={car.make} />
      <input type="text" value={car.model} />
    </div>
  );
}
export default Try;
