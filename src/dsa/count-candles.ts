/**
 *
 * Ban đầu có 5 cây nến, khi 1 cây nến cháy hết thì sẽ có 1 tàn dư bên dưới,
 * thì quy ước là 2 tàn dư thì có thể tạo thành 1 cây nến mới.
 * Viết 1 hàm nhận input là số cây nến ban đầu, và tham số thứ 2 là quy ước bao nhiêu tàn sẽ thành 1 cây nến mới.
 * Output là ra tổng số cây nến có thể có được
 *
 */

function countCandles(startCandles: number, needResidues: number): number {
  let totalCandles = startCandles;
  let candleResidue = startCandles;

  while (candleResidue >= needResidues) {
    const newCandles = Math.floor(candleResidue / needResidues);

    totalCandles += newCandles;
    candleResidue = (candleResidue % needResidues) + newCandles;
  }

  return totalCandles;
}

console.log(countCandles(5, 2));
