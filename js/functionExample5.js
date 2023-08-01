// 표준 내장 함수
// const yn = confirm("너 잠오냐?");
// if (yn){
//   console.log('응 피곤하군...');
// }else{
//   console.log('멀쩡하군');
// }

// setTimeout(() => console.log('1초후 실행되었습니다..'), 2000);

// let second = 1;
// let timer = setInterval(() => {
//   document.write(`<h3>${second}초</h3>`);
//   second++;
// }, 1000);

// // 실행한 함수를 중지
// //10초 후 타이머 제거(정지)
// setTimeout(() => {
//   clearTimeout(timer);
// }, 10000);

let money = '100원';
money = parseInt(money);
console.log(money+1000);

let result = 1000/'김기정';
if(isNaN(result)){
  console.log('헐~~~~~~~~~');
}