
// 강아지 객체 즉시 생성 (틀없이)
// 객체 리터럴 표현식
let dog = {
  name : '루니',
  age : 8,
  kind : "비숑",
  // 객체에는 화살표 함수를 사용할 수 없다..
  eat : function(){
    console.log(this.name + "가 무척 잘 먹습니다.");
  },
  toString : function(){
    return "헐";
  }
};

// 객체에 속성에 접근하는 2가지 방법(속성검색)
console.log(dog.name); 
console.log(dog['name']); // 문자열타입으로 '-'를 사용할때나 css에서 사용

console.log(dog.age);
console.log(dog['age']);

console.log(dog.kind);
console.log(dog['kind']);

dog.eat();

// 속성 변경
dog.name = '로니';
console.log(dog.name);

// 속성 제거
delete dog.age;
console.log(dog.age);

// 기능 추가
dog.work = function(){
  console.log("잘 걷습니다...");
}
dog.work();

// in 연산자
if('age' in dog){
  console.log(dog.age);
}else{
console.log('age 속성이 없다...');
}
// for ~ in 문
for (let key in dog) {
  console.log(key, dog[key]);
}
//for ~ of 문
let array = [5,3,9,1];
for (const value of array) {
  console.log(value);
}

console.clear();
console.log(dog);
console.dir(dog)