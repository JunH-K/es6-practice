import print from '../print';

function fetchData(
  url = 'http://www.mocky.io/v2/5e3d08f32d00004e00d95a49',
  options = {}
) {
  return fetch(url, options);
}

/*fetch*/
const body = { data: { a: 10 } };
fetchData('http://www.mocky.io/v2/5e3d0b012d00000f00d95a64', {
  method: 'PUT',
  body,
  headers: new Headers(), // 이 부분은 따로 설정하고싶은 header 가 있다면 넣으세요
})
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      res.json().then(json => console.log(json));
    } else {
      console.error(res.statusText);
    }
  })
  .catch(err => console.error(err));

/*fetch*/
fetchData('http://www.mocky.io/v2/5e3d0b012d00000f00d95a64').then(res => {
  if (res.status === 200 || res.status === 201) {
    // 성공을 알리는 HTTP 상태 코드면
    res.json().then(json => print(json)); // 텍스트 출력
    print(res.headers.entries().next().value);
  } else {
    // 실패를 알리는 HTTP 상태 코드면
    console.error(res.statusText);
  }
});
