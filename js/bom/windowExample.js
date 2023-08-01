// 전역함수인데 오늘부터 아님
// BOM의 구조
console.log(window);

let myWindow = open('../../hello.html','내창');
if(!myWindow){
  alert('팝업 해제해줘...');
}// myWindow.close();