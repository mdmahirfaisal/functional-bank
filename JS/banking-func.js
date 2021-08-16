// input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;
};
// total value
function getTotalValue(totalId, amount) {
    const totalText = document.getElementById(totalId);
    const depositTotalText = totalText.innerText;
    const totalAmount = parseFloat(depositTotalText);
    totalText.innerText = totalAmount + amount;
    return totalAmount;
};
// get current balance 
function getCurrentBalance() {
    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotal = balanceTotalText.innerText;
    const balanceTotalAmount = parseFloat(balanceTotal);
    return balanceTotalAmount;
};

// total Balance value
function getTotalBalance(inputAmount, isAdd) {
    const balanceTotalText = document.getElementById('balance-total');
    // const balanceTotal = balanceTotalText.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotal);
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotalText.innerText = balanceTotalAmount + inputAmount;
    }
    else {
        balanceTotalText.innerText = balanceTotalAmount - inputAmount;
    }
};
// deposit function
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputAmount = getInputValue('deposit-input');
    if (depositInputAmount > 0) {
        getTotalValue('deposit-total', depositInputAmount);
        getTotalBalance(depositInputAmount, true);
    }
    else {
        console.log('plase enter a positive number');
    }

});
// withdraw function
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        getTotalValue('withdraw-total', withdrawInputAmount);
        getTotalBalance(withdrawInputAmount, false);
    };
    if (withdrawInputAmount > currentBalance) {
        console.log('you can not withdraw to current balance');
    }

});