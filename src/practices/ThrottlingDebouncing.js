/*스로틀링
특정 함수가 호출된 이후 지정된 시간내에 다시 호출되지 않게 하는 기법
즉, 함수재호출 최소시간을 지정  호출- 재호출 최소시간 -호출
*
* */

/*디바운싱
연속된 함수 호출시  마지막 한번만 호출
* */

export default function runTD() {
  function throttling(minTime = 200) {
    let timer = null;

    return () => {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          console.log(`재호출 최소시간 : ${minTime}`);
        }, minTime);
      }
    };
  }

  function debouncing(minTime = 200) {
    let timer = null;

    return () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        console.log('연속된 호출시 마지막 한번 호출');
      }, minTime);
    };
  }

  setInterval(throttling(1000), 1);
}
