export const displayTime = (time) => {
  let hours = time.getHours();
  const minutes = time.getMinutes();

  hours = hours % 12 || 12;

  return `${hours}:${addZero(minutes)}`;
};

const addZero = (number) => {
  return (number < 10 ? "0" : "") + number;
};

export const meridiem = (time) => {
  const hours = time.getHours();
  return `${hours >= 12 ? "pm" : "am"}`;
};

export const date = (time) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = monthNames[time.getMonth()];
  const day = dayNames[time.getDay()];
  const date = time.getDate();
  const year = time.getFullYear();

  return `${day}, ${month} ${date} ${year}`;
};
