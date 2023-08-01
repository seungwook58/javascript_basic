//for in 문
//배열 리터럴(선어느 초디화 공시에)
let array =[3,2,1,5,6,3]
for (let i = 0; i < array.length; i++) {
  const num = array[i];
  console.log(num);
}

for (let i in array){
  for (let i in array){
  console.log(i, array[i]);
}
}
for(let num of array){
  console.log(num);
}