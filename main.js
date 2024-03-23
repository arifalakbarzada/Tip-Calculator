const inputAmount = document.querySelector("#amount");
const peopleInput = document.querySelector("#people");
const calculateBtn = document.querySelector("#calc");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");
const btnReset = document.querySelector("#reset");
const resetContent = document.querySelector(".reset");
let percents = document.querySelectorAll('.value');
const tipAmount = document.querySelector('.tip_amount .right p');
const totalAmountPerEachPerson = document.querySelector('.total .right p');

percents.forEach(function(input) {
    input.addEventListener('click', function(event) {
        let clickedInput = event.target;
        
        if (!clickedInput.classList.contains('active')) {
            percents.forEach(function(inp) {
                inp.classList.remove('active');
            });
            clickedInput.classList.add('active');
        }
    });
});

function reset() {
    inputAmount.value = "";
    peopleInput.value = "";
    percents.forEach((item) =>{
       
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        
 
    }
    )}
btnReset.addEventListener("click", reset);
function calcTip() {
    let amount = +inputAmount.value;
    let testing = /^[0-9.%]+$/;
let percent;
for (let i=0; i < percents.length; i++) {  
     if (percents[i].classList.contains("active")){
        percent = percents[i].value.slice(0, -1);
     }
    }
    
    percent = +percent / 100;
    let numPeople = +peopleInput.value;
    let totalAmount = (amount+ amount  * percent)/numPeople;
    let personTip = amount  * percent  / numPeople;
    if (isNaN(amount) || isNaN(percent) || isNaN(numPeople) || !testing.test(percent) || amount <= 0 || percent <= 0 || numPeople <= 0) {
        alert("Please enter a valid number!");
    }
  else{
    tipAmount.textContent= `$ ${personTip.toFixed(2)}`;
totalAmountPerEachPerson.textContent=`$ ${totalAmount.toFixed(2)}`;
}
}



document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calcTip();
    }
});