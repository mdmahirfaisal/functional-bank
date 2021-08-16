// input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return inputAmount;
};
// total text
function getTotalValue(totalId, amount) {
    const totalText = document.getElementById(totalId);
    const depositTotalText = totalText.innerText;
    const totalAmount = parseFloat(depositTotalText);
    totalText.innerText = totalAmount + amount;

    return totalAmount;
};
// balance text
function getTotalBalance(inputAmount, isAdd) {
    const balanceTotalText = document.getElementById('balance-total');
    const balanceTotal = balanceTotalText.innerText;
    const balanceTotalAmount = parseFloat(balanceTotal);

    if (isAdd == true) {
        balanceTotalText.innerText = balanceTotalAmount + inputAmount;
    }
    else {
        balanceTotalText.innerText = balanceTotalAmount - inputAmount;
    }

};

// deposit function
document.getElementById('deposit-button').addEventListener('click', function () {
    // add deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const depositText = depositInput.value;
    // const depositAmount = parseFloat(depositText);
    // get current deposit 
    const depositInputAmount = getInputValue('deposit-input');

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const depositTotalAmount = parseFloat(depositTotalText);
    // depositTotal.innerText = depositTotalAmount + depositAmount;
    getTotalValue('deposit-total', depositInputAmount);

    // get balance total
    // const balanceTotalText = document.getElementById('balance-total');
    // const balanceTotal = balanceTotalText.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotal);
    // balanceTotalText.innerText = balanceTotalAmount + depositInputAmount;
    getTotalBalance(depositInputAmount, true);
    // // clear input field
    // depositInput.value = '';
});

// withdraw function
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);
    const withdrawInputAmount = getInputValue('withdraw-input');

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawTotalAmount = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;
    getTotalValue('withdraw-total', withdrawInputAmount);

    // get balanece total 
    // const balanceTotalText = document.getElementById('balance-total');
    // const balanceTotal = balanceTotalText.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotal);
    // balanceTotalText.innerText = balanceTotalAmount - withdrawInputAmount;
    getTotalBalance(withdrawInputAmount, false);
    // clear input field
    // withdrawInput.value = '';
});
