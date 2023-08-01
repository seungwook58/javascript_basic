let ssn = prompt('주민번호를 입력해라');
// 980508-1234567
if(ssn){
  const c = ssn.charAt(ssn.indexOf('-') + 1);
  switch (c) {
    case '1':
    case '3': alert('남자'); break;
    case '2':
    case '4': alert('여자'); break;
    default: alert('외국인'); break;
  }
}else{
  alert('똑바로 입력해라~~');
}


