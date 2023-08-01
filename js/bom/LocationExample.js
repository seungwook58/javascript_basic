console.log(location.href);
// let url = 'http://www.naver.com';
// location.href = url;

function go(){
  let url = 'http://www.naver.com';
  location.href=url;
  // location.assign(url);
  // location.replace(url);
  // replace 는 히스토리에 남지 않는다.(뒤로가기 불가).
  // location.reload();
}
// History
history.back();