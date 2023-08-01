let nums = [6, 1, 4, 3, 5];
nums.sort((e1, e2) =>{
// 오름 차순. (내림차순으로 하고 싶으면 반대로 바꿔 주면 됨.)
  return e1 - e2;
});

nums.forEach((num, index) =>{ // 개꿀 포이츠(편하다.)
  // index 넣으면 몇번째 자리인지도 나옴.
  console.log(num, index);
});