const initial = document.querySelector("#initial");
const quantity = document.querySelector("#quantity");
const current = document.querySelector("#current");
const check = document.querySelector("#check");
const output = document.querySelector(".output");

check.addEventListener("click", () => {
  const initialPrice = Number(initial.value);
  const totalQuantity = Number(quantity.value);
  const currentPrice = Number(current.value);
  const priceDifference = Math.abs(initialPrice - currentPrice).toFixed(2);

  profitOrLoss(initialPrice, totalQuantity, currentPrice, priceDifference);
});

function profitOrLoss(init, quant, curr, diff) {
  if (init <= 0 || quant <= 0 || curr <= 0) {
    output.innerHTML = "<h4>Please enter values greater than 0.</h4>";
  } else if (init > curr) {
    const loss = Math.abs(diff * quant).toFixed(2);
    const lossPercentage = Math.abs((diff / init) * 100).toFixed(2);
    output.innerHTML = `<h4>Loss Percentage: ${lossPercentage}%</h4> <h4>Loss: ₹${loss}</h4>`;
  } else if (curr > init) {
    const profit = Math.abs(diff * quant).toFixed(2);
    const profitPercentage = Math.abs((diff / init) * 100).toFixed(2);
    output.innerHTML = `<h4>Profit Percentage: ${profitPercentage}%</h4> <h4>Profit: ₹${profit}</h4>`;
  } else if (curr === initial) {
    output.innerHTML = "<h4>No Profit No Loss</h4>";
  }
}
