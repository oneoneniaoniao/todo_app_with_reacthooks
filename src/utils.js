export const today = () => {
  const year = new Date().getFullYear() +"/";
  const month = new Date().getMonth()*1+1 +"/";
  const date = new Date().getDate();
  return (year+month+date)
}

export const getYYYYMMDD = (deadline) => {
  const stringDate = deadline.substr(0, 10)
  const replaceDate = stringDate.replace(/-/g, '/')
  return replaceDate
}

export const completeTodoExamples = [{
body:"",
completedAt:"2021/7/21",
createdAt:"2021/7/21",
deadline:"2021-07-28T02:02:00.000Z",
id:"b0053c8a-56da-489f-9fe9-47b7609a48bb",
status:"未着手",
title:"(例)買い物に行く"
}];

export const todoExamples  = [
  {
    body:"",
completedAt:"2021/7/21",
createdAt:"2021/7/21",
deadline:"2021-07-27T02:00:48.000Z",
id:"ec0dccd3-c773-4e5a-b187-44196417b705",
status:"未着手",
title:"(例)髪を切る"
  },
  {
    body:"",
completedAt:"2021/7/21",
createdAt:"2021/7/21",
deadline:"2021-07-27T02:00:48.000Z",
id:"0e6c3690-4097-4478-94d8-d8ad320811eb",
status:"進行中",
title:"(例)udemy受講"
  },
{
  body:"",
  completedAt:"2021/7/21",
  createdAt:"2021/7/21",
  deadline:"2021-08-27T02:00:48.000Z",
  id:"21fc745f-4af3-46a4-b01a-6af575c961ce",
  status:"未着手",
  title:"(例)旅に出る"
}
];
