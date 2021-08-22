
var total = 0; 
/* event listener */
document.getElementsByName("job")[0].addEventListener('change', calculate);
document.getElementsByName("loans")[0].addEventListener('change', calculate);
document.getElementsByName("other")[0].addEventListener('change', calculate);
document.getElementsByName("housing")[0].addEventListener('change', calculate2);
document.getElementsByName("utilities")[0].addEventListener('change', calculate2);
document.getElementsByName("electronics")[0].addEventListener('change', calculate2);
document.getElementsByName("food")[0].addEventListener('change', calculate2);
document.getElementsByName("giving")[0].addEventListener('change', calculate2);
document.getElementsByName("childcare")[0].addEventListener('change', calculate2);
document.getElementsByName("petcare")[0].addEventListener('change', calculate2);
document.getElementsByName("car")[0].addEventListener('change', calculate2);
document.getElementsByName("medical")[0].addEventListener('change', calculate2);
document.getElementsByName("toiletries")[0].addEventListener('change', calculate2);
document.getElementsByName("clothes")[0].addEventListener('change', calculate2);
document.getElementsByName("debt")[0].addEventListener('change', calculate2);
document.getElementsByName("loanpayments")[0].addEventListener('change', calculate2);
document.getElementsByName("other2")[0].addEventListener('change', calculate2);
/* function */
function calculate()
{
    total += this.value;
}
function calculate2()
{
    total -= this.value(); 
}
