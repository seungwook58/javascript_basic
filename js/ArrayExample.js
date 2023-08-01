// let array = new Array();
let array = [10,30];
array.push(10);
array.push('김기정바보');
array.push(new Student(10,'김기정',50, 40, 30));
array.push(new Student(11,'잠온다',90, 100, 95));
array.push(new Student(12,'자버려',90, 100, 95));

//맨 앞에 추가
array.unshift(new Student(13, '잠깬다', 85, 100 ,95));

for(const value of array) {
  console.log(value);
}

//첫번째 항목 가져오고 싶을 때  
console.log(array[0]);
// console.dir(array);
console.log(array['0']);
console.log(array.length);

//0번째 인덱스 있는 값 삭제하고 싶음
delete array[0];
//맨앞 삭제
array.shift();
// array.pop();
console.dir(array);