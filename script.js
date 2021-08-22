
/* event listener */
window.onload = function() {
	//console.log("test1");
	document.getElementById("job").addEventListener('change', calculate, false);
	document.getElementById("loans").addEventListener('change', calculate, false);
	document.getElementById("other").addEventListener('change', calculate, false);
	document.getElementById("housing").addEventListener('change', calculate2, false);
	document.getElementById("utilities").addEventListener('change', calculate2, false);
	document.getElementById("electronics").addEventListener('change', calculate2, false);
	document.getElementById("food").addEventListener('change', calculate2, false);
	document.getElementById("giving").addEventListener('change', calculate2, false);
	document.getElementById("childcare").addEventListener('change', calculate2, false);
	document.getElementById("petcare").addEventListener('change', calculate2, false);
	document.getElementById("car").addEventListener('change', calculate2, false);
	document.getElementById("medical").addEventListener('change', calculate2, false);
	document.getElementById("toiletries").addEventListener('change', calculate2, false);
	document.getElementById("clothes").addEventListener('change', calculate2, false);
	document.getElementById("debt").addEventListener('change', calculate2, false);
	document.getElementById("loanpayment").addEventListener('change', calculate2, false);
	document.getElementById("other2").addEventListener('change', calculate2, false);
	//console.log("test2");
}
/* function */
function calculate()
{
	income = 0;
	plus = ["job", "loans", "other"];
	for (key in plus){
		//console.log(plus[key]);
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
		//console.log(minus[key]);
		input = document.getElementsByName(minus[key])[0].value;
		matches = input.match(/^\d+(\.\d{1,2})?/);
		if (matches && matches[0]){
			expenses += parseFloat(matches[0]);
		}
	}
	//console.log(expenses);
	expensesElement = document.getElementById("expenses");
	prevExpenses = parseFloat(expensesElement.innerHTML.substring(1));
	expensesElement.innerHTML = "$" + expenses.toFixed(2);
	savingsElement = document.getElementById("savings");
	prevSavings = parseFloat(savingsElement.innerHTML.substring(1));
	savingsElement.innerHTML = "$" + (prevSavings + prevExpenses - expenses).toFixed(2);
}
