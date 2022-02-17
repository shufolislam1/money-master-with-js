function commonFunction(){
    // get income
const incomeInput = document.getElementById('income-input').value;
const incomeNumber = parseFloat(incomeInput);

    // get expenses
    const foodInput = document.getElementById('food-input').value;
    const foodInputNumber = parseFloat(foodInput)
    const rentInput = document.getElementById('rent-input').value;
    const rentInputNumber = parseFloat(rentInput)
    const clothsInput = document.getElementById('cloths-input').value;
    const clothsInputNumber = parseFloat(clothsInput)

    let expenseTotal = foodInputNumber + rentInputNumber + clothsInputNumber;

        // calculating total expense and balance
        const expenses = document.getElementById('expenses');
        const expensesText = expenses.innerText;
        expenses.innerText = expenseTotal;
    
        // cutting the expense from income and show it in Balance
        const balance = document.getElementById('balance');
        const balanceText = balance.innerHTML;
        balance.innerHTML = incomeNumber - expenseTotal;
}

document.getElementById('calc-btn').addEventListener('click', function(){
    commonFunction()
})

document.getElementById('save-btn').addEventListener('click', function(){
        // get income
        const incomeInput = document.getElementById('income-input').value;
        const incomeNumber = parseFloat(incomeInput);

    const saveInput = document.getElementById('save-input');
    const saveInputValue = saveInput.value;

    const savingAmount = document.getElementById('saving-amount');
    const savingAmountValue = savingAmount.innerText;
    savingAmount.innerText = (incomeNumber * saveInputValue) / 100;

    const remaining = document.getElementById('remaining');
    const remainingValue = remaining.innerText;

    commonFunction()
    remaining.innerText = balance.innerHTML - savingAmount.innerHTML;
})