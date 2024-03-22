const inputAmount = document.querySelector("#amount");
const inputPercent = document.querySelector("#percent");
const peopleInput = document.querySelector("#people");
const calculateBtn = document.querySelector("#calc");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");
const btnReset = document.querySelector("#reset");
let personAmount = document.querySelector("#perPerson");
const results = document.querySelector(".results");
results.style.display =  "none";
function reset() {
    inputAmount.value = "";
    inputPercent.value = "";
    peopleInput.value = "";
}
btnReset.addEventListener("click", reset);
function calcTip() {
    let amount = +inputAmount.value;
    let percent = +inputPercent.value;
    let numPeople = +peopleInput.value;
    let totalAmount = amount + amount/100 * percent;
    let personTip = amount/ 100 * percent;
    if (isNaN(amount) || isNaN(percent) || isNaN(numPeople) || amount == 0 || percent == 0 || numPeople == 0) {
        alert("Please enter a valid number!");
    }
    else if (amount > 0 && percent > 0 && numPeople > 0) {
        tip.textContent = personTip;
        total.textContent = totalAmount;
        personAmount.textContent = totalAmount / numPeople;
        results.style.display =  "flex";
    }
    reset()
}
calculateBtn.addEventListener("click", calcTip);

document.addEventListener('keypress', function(e){
   if(e.key === 'Enter'){
    calcTip();
   }
   });