// 이벤트 소스에 이벤트 리스너 등록
// function eventListener(event){
//   console.log('왜 눌럿냐?????');
// }

document.querySelector("button").addEventListener("click", (event) => {
  console.dir(event);
  event.target.style.backgroundColor = "blue";
  console.log("왜 눌럿냐 b1?????");
});

document.querySelector(".b2").addEventListener("click", (event) => {
  console.dir(event);
  if (event.ctrlKey) {
    event.target.style.backgroundColor = "red";
    console.log("왜 눌럿냐 b2?????");
  }
});

// event에서는 this가 타겟( 화살표 함수에는 디스가 안써짐. 타켓으로 함)
document.querySelector("button").addEventListener("mouseenter", (event) => {
  console.dir(this);
  event.target.style.backgroundColor = "yellow";
});

document.querySelector("button").addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "";
});

function serverSend(message){
  console.log(message +'를 서버에 전송합니다..');
}

let input = document.querySelector('[type=text]');
input.addEventListener('keypress', event => {
  // console.log(input.value);
  if(event.keyCode === 13){
    const message = event.target.value;
    serverSend(message);
    event.target.value = '';
  }
});

// 개발자 편의상 돔이 아닌 폼태그를 위한 접근
// console.dir(document.frm.search);
// document.frm.search.addEventListener('change', event => {
//   console.dir(event.target.options);
//   let options = event.target.options;
//   let selectValue = options[options.selectedIndex].value;
//   console.log(selectValue);
// });

document.frm.search.addEventListener('change', event => {
  let options = document.querySelectorAll('option');
  options.forEach(function (element) {
    if(element.selected){
      console.log(element.value);
    }    
  });
});
