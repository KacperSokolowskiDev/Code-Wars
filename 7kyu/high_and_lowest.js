function highAndLow(numbers) {
  const arrayNum = numbers.split(" ").map((num) => parseInt(num));
  const maxNum = Math.max(...arrayNum);
  const minNum = Math.min(...arrayNum);
  return `${maxNum} ${minNum}`;
}
