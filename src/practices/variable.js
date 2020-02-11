import print from '../print';

export default function runVariable() {
  let a = 1;

  if (1) {
    console.log(a); //? 무엇?
    let a = 100;
  }

  const b = 1;
  b = 10; //재할당금지
}
