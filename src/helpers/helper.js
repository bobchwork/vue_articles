const addZeroBefore = (data) => (`0${data}`).slice(-2);

export const formatDate = (date) => {
  const newFormat = new Date(date);
  const days = addZeroBefore(newFormat.getDate());
  const months = addZeroBefore(newFormat.getMonth() + 1);
  const hours = addZeroBefore(newFormat.getHours());
  const minutes = addZeroBefore(newFormat.getMinutes());
  const transformedDate = `
    ${days}-${months}-${newFormat.getFullYear()} : 
    ${hours}:${minutes}`;
  return transformedDate;
};

export const splitContent = (content) => {
  const newContent = content.split('.');
  return newContent;
};
