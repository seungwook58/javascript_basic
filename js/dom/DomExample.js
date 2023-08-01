console.dir(window.document.firstChild); // <!DOCTYPE html>로 접근
console.dir(document.firstElementChild); // <html>로 접근
console.dir(document.firstElementChild.constructor);

// #1. 돔트리 계층 구조로 검색
// Node의 공통 속성 3개
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);

// body 요소 접근
console.log(document.firstElementChild.lastElementChild.nodeName);

// #2. get 메소드로 특정 요소 접근
let pArray = document.getElementsByTagName("p");
// 리턴타입은 배열이 아니고 유사배열입니다...!!!!
console.log(pArray.constructor);
// pArray.array.forEach(element => {
//   console.log(element.nodeName);
// });
for (const element of pArray) {
  console.log(element.nodeName);
}

let pElement = document.getElementById("myP");
console.dir(pElement);

let htmlCollection = document.getElementsByClassName("container");
console.dir(htmlCollection);

console.clear();

// #3. css 선택자를 이용한 검색 ( 얘는 노드 리스트)
// console.dir(document.querySelector('p')); // 한 개
// console.dir(document.querySelectorAll('p')); // 여러개
let nodeList = document.querySelectorAll('p');
for (const pe of nodeList) {
  console.log(pe.nodeName);
} // 이것만 기억해도 괜츈
// let nodeList = document.querySelectorAll('p');
// nodeList.array.forEach(element => {
//   console.log(element.nodeList);
// });


let pEl = document.querySelector('#myP');
console.log(pEl.nodeName);

let textNode = pEl.firstChild;
console.log(textNode.nodeName);
console.log(textNode.nodeValue);
// alert(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);
console.log(document.querySelector('li:first-child').firstChild.nodeValue);
// node value나 data로 씀
console.log(document.querySelector('li:last-child').firstChild.nodeValue);
let list = document.querySelectorAll('li:nth-child(2n+1)');
list.forEach(element => {
  console.log(element.firstChild.nodeValue);
});
