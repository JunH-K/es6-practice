import print from '../print';

const createInfiniteFibByGen = function*(max) {
  let [prev, curr] = [0, 1];

  while (true) {
    [prev, curr] = [curr, prev + curr];
    if (curr >= max) return; // 제너레이터 함수 종료
    yield curr;
  }
};

function runGenerator() {
  for (const num of createInfiniteFibByGen(10000)) {
    console.log(num);
  }
}

export default runGenerator;
