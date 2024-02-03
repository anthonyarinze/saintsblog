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

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

export const formattedDate = `${day} ${monthNames[month]}, ${year}`;
