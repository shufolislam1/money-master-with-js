function commonFunction(){
    // get income
    const incomeInput = document.getElementById('income-input');
    const incomeNumber = parseFloat(incomeInput.value);
 
    // get expenses
    const foodInput = document.getElementById('food-input');
    const foodInputNumber = parseFloat(foodInput.value)
    const rentInput = document.getElementById('rent-input');
    const rentInputNumber = parseFloat(rentInput.value)
    const clothsInput = document.getElementById('cloths-input');
    const clothsInputNumber = parseFloat(clothsInput.value)
 
    if(incomeInput.value == '' || isNaN(incomeInput.value) || incomeInput.value < 0){
        alert('Income input value is wrong.');
        return;
    }
    if(foodInput.value == '' || isNaN(foodInput.value) || foodInput.value < 0){
        alert('Food input value is wrong.');
        return;
    }
    if(rentInput.value == '' || isNaN(rentInput.value) || rentInput.value < 0){
        alert('Rent input value is wrong.');
        return;
    }
    if(clothsInput.value == '' || isNaN(clothsInput.value) || clothsInput.value < 0){
        alert('Cloths input value is wrong.');
        return;
    }
 
    let expenseTotal = foodInputNumber + rentInputNumber + clothsInputNumber;
 
    // calculating total expense and balance
    const expenses = document.getElementById('expenses');
    expenses.innerText = expenseTotal;
 
    // cutting the expense from income and show it in Balance
    const balance = document.getElementById('balance');
    balance.innerHTML = incomeNumber - expenseTotal;
}
 
document.getElementById('calc-btn').addEventListener('click', function(){
    commonFunction()
})
 
document.getElementById('save-btn').addEventListener('click', function(){
    // get income
    const incomeValue = parseFloat(document.getElementById('income-input').value);
    const totalExpenses = parseFloat(document.getElementById('expenses').innerText);
 
    const saveInput = document.getElementById('save-input');
 
    if(saveInput.value == '' || isNaN(saveInput.value) || saveInput.value < 0){
        alert('Save input value is wrong.');
        return;
    }
 
    const saveInputValue = parseFloat(saveInput.value);
    const saveAmount = (incomeValue * saveInputValue) / 100;
    // console.log(saveAmount);
 
    const balanceBox = document.getElementById('balance');
    const balanceAmount = parseFloat(balanceBox.innerText);
    // console.log(balanceAmount);
 
    if(saveAmount > balanceAmount){
        alert(`Can not save more than balance`);
        return;
    }
 
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saveAmount;
 
    const remaining = document.getElementById('remaining');
    remaining.innerText = incomeValue - (totalExpenses + saveAmount);
})

// Done