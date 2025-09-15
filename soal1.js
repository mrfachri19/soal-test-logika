// 1. Hitung jumlah pasang kaos kaki
function countPairs(socks) {
  const map = {};
  let pairs = 0;

  for (let sock of socks) {
    map[sock] = (map[sock] || 0) + 1;
    if (map[sock] % 2 === 0) {
      pairs++;
    }
  }

  return pairs;
}

console.log(countPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log(countPairs([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]))
console.log(countPairs([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))
