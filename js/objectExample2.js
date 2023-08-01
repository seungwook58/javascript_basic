// 생성자 함수를 이용한 객체들
function Dog(name, age, kind){
// this = {
  // 속성추가
  this.name = name;
  this.age = age;
  this.kind = kind;

  //기능(메소드) 추가
  this.cry = function(){
    console.log(`${this.name} 강아지가 웁니다..`);
  }
}

let dog = new Dog('루니', 8, '비숑');
console.log(dog);
dog.cry();

let dog2 = new Dog('꼬미', 8,'스트릿');
console.log(dog2);
dog2.cry();

//자바스크립트 표쥰 갹채(생성자 함수)를 사용
let string = new String("점심먹으니 졸려");
const count = String.length;
console.log(count);

let ssn = "680313-1234567";
let char = ssn.charAt(7);
switch (char) {
  case '1': console.log('남자입니다...'); break;
  case '2': console.log('여자입니다...'); break;
}
//넘버객체
let number = new Number(10);
console.log(number);
//불린객체
let boolean = new Boolean(true);
console.log(boolean);
//날짜객체 toLocaleString()은 날짜를 지역에 맞춰 표시시키는메서드
let today = new Date();
console.log(today.toLocaleString());
//배열객체(자바스크립트는 순수배열이 없고 배열객체만 있음.)
//자바의 List, Set, Queue, Stack 기능이 들어있는 배열.
let array = new Array();











