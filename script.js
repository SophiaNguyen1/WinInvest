
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
document.getElementsByName("loanpayment")[0].addEventListener('change', calculate2);
document.getElementsByName("other2")[0].addEventListener('change', calculate2);
/* function */
function calculate()
{
	income = 0;
	plus = ["job", "loans", "other"];
	for (key in plus){
		console.log(plus[key]);
		input = document.getElementsByName(plus[key])[0].value;
		matches = input.match(/^\d+(\.\d{1,2})?/);
		if (matches && matches[0]){
			income += parseFloat(matches[0]);
		}
	}
	incomeElement = document.getElementById("income");
	prevIncome = parseFloat(incomeElement.innerHTML.substring(1));
	incomeElement.innerHTML = "$" + income.toFixed(2);
	savingsElement = document.getElementById("savings");
	prevSavings = parseFloat(savingsElement.innerHTML.substring(1));
	savingsElement.innerHTML = "$" + (prevSavings - prevIncome + income).toFixed(2);
}
function calculate2()
{
	expenses = 0;
	minus = ["housing", "utilities", "electronics", "food", "giving", "childcare", "petcare", "car", "medical", "toiletries", "clothes", "debt", "loanpayment", "other2"];
	for (key in minus){
		console.log(minus[key]);
		input = document.getElementsByName(minus[key])[0].value;
		matches = input.match(/^\d+(\.\d{1,2})?/);
		if (matches && matches[0]){
			expenses += parseFloat(matches[0]);
		}
	}
	console.log(expenses);
	expensesElement = document.getElementById("expenses");
	prevExpenses = parseFloat(expensesElement.innerHTML.substring(1));
	expensesElement.innerHTML = "$" + expenses.toFixed(2);
	savingsElement = document.getElementById("savings");
	prevSavings = parseFloat(savingsElement.innerHTML.substring(1));
	savingsElement.innerHTML = "$" + (prevSavings + prevExpenses - expenses).toFixed(2);
}
