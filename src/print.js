function makeCount(func) {
  let count = 0;
  return value => {
    count += 1;
    func(value, count);
  };
}

export default print = makeCount((value, count) => {
  const str = typeof value === 'object' ? JSON.stringify(value) : value;

  const div = document.createElement('div');
  div.innerHTML = `${count} : ${str}`;
  document.body.appendChild(div);
});
