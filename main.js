const inputAmount = document.querySelector("#amount");
const peopleInput = document.querySelector("#people");
const calculateBtn = document.querySelector("#calc");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");
const btnReset = document.querySelector("#reset");

let percents = document.querySelectorAll('.value');
let inputPercent = document.querySelectorAll(".value");

percents.forEach(function(input) {
    input.addEventListener('click', function(event) {
        console.log("Hello");
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
    inputPercent.value = "";
    peopleInput.value = "";
}
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
    let totalAmount = amount + amount  * percent;
    let personTip = amount  * percent  / numPeople;
    if (isNaN(amount) || isNaN(percent) || isNaN(numPeople) || !testing.test(percent) || amount <= 0 || percent <= 0 || numPeople <= 0) {
        alert("Please enter a valid number!");
    }
    reset()
    console.log(percent);
    console.log(totalAmount);
    console.log(personTip);
}

calculateBtn.addEventListener("click", calcTip);



document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calcTip();
    }
});