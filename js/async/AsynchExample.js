console.log("1 실행");
dotask();
console.log("2 실행");

function dotask() {
  setTimeout(() => {
    console.log("doTask  실행");
  }, 2000);
}

console.log("3 실행");


