import print from '../print';

export default function runPromise() {
  const increment = (value, timer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof value === 'number') {
          return resolve(value + 1);
        }
        reject(new Error('숫자가 아닙니다.'));
      }, timer);
    });
  };

  //프로미스 예제
  increment(5, 1000)
    .then(value => {
      print(value);
    })
    .catch(e => {
      console.error(e);
    });

  //async await 으로 변경
  (async () => {
    const value = await increment(0, 1000);
    print(value);
    const value2 = await increment(value, 1000);
    print(value2);
    const value3 = await increment(value2, 1000);
    print(value3);
  })();
}
