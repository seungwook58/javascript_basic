let i = 1, result =0;
while (i<100) {
  result +=i;
  i++;
}

// 동적 구구단 출력
document.write('<h2>for문을 이용한 구구단 출력</h2>');
document.write("<table border='1'>");
for (let i = 2; i <= 9; i++) {
  document.write("<tr>")
  for (let j = 1; j <= 9; j++) {
    document.write(`<td>${i} *${j} = ${i*j}</td>`)
  }
  document.write("</tr>");
}
document.write("</table>");
