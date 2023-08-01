
let user = {
  name : '김기정'
}

// 동적 객체 변환
let str = 'xxxx'.charAt(0);

console.log(user.toString());
console.log(Object.prototype.isPrototypeOf(user));

//Object. static 메소드 활용
// 깊은 복사
let user2 = {};
Object.assign(user2, user);
console.log(user2);

let prototypee = Object.getPrototypeOf(user);
console.dir(prototypee)