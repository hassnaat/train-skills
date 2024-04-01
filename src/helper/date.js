export const calculateAge = (birthdateStr) => {
  const birthdate = new Date(birthdateStr);

  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthdate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthdate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
};

export const formatDate = (date) => {
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
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
