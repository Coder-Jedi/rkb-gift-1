export default function getDateString(dString) {
  const d = new Date(dString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = d.getFullYear();
  const date = d.getDate();

  const monthIndex = d.getMonth();
  const monthName = months[monthIndex];

  return `${date}-${monthName}-${year}`;
}
