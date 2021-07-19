export const today = () => {
  const year = new Date().getFullYear() +"/";
  const month = new Date().getMonth()*1+1 +"/";
  const date = new Date().getDate();
  return (year+month+date)
}

export const getYYYYMMDD = (deadline) => {
  const year = deadline.getFullYear() +"/";
  const month = deadline.getMonth()*1+1 +"/";
  const date = deadline.getDate();
  return (year+month+date)
}
