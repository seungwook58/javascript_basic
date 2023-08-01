// 전역 함수 선언
function doTask() {
  // console.log("어떤일을 합니다...");
  console.dir(this);
  console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
}

// 객체 생성
let person = {
  name: "문승욱",
  age: 26,
  doTeach: function () {
    console.log("프로그래밍을 배웁니다..");
  },
};

// 함수 직접 호출
doTask();

// 함수 간접 호출
// doTask.call();
doTask.call(person);

// 특정객체에 동적 속성 추가 기능
function addAttribute(key, value) {
  this[key] = value;
}

addAttribute("name", "문승욱");
addAttribute("age", "26");

console.dir(window);

// 사용자 객체에 속성 추가 (대부분 call을 많이 씀)
let user = {};
// addAttribute.call(user, 'name', '문승욱');
// addAttribute.call(user, 'age', '26');
// addAttribute.apply(user, ['name', '문승욱']);
// addAttribute.apply(user, ['age', '26']);
let addProperty = addAttribute.bind(user);
addProperty("name", "문승욱");
addProperty("age", "26");

console.dir(user);

let array = [6, 2, 9, 1];

for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const value = array[key];
    console.log(value);
  }
}
