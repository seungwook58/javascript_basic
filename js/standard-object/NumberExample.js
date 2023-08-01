let x= 88.3434343343.toFixed(2);
console.log(Number.MAX_VALUE);
console.log(x);

// x = new Number(x);
// console.log(x.toFixed(2));

// 형변환으로 들어감
let y= '434324';
// new 없이 직접 호출 시 형변환 함수로 동작한다...
let result = Number(y);
console.log(result);
