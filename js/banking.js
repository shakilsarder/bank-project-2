function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input
    inputField.value = '';
    return amountValue;
}

function updateAmountField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const PreviousTotal = parseFloat(totalText);
    totalElement.innerText = PreviousTotal + amount;
}
function getCurrentbalance() {
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    return previousBalanceTotal;
}

function updateBalance(balanceAmount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + balanceAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - balanceAmount;
    }
}
//handle deposite button :
document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount >= 0) {
        updateAmountField('deposite-total', depositeAmount);
        updateBalance(depositeAmount, true);
    }
    else {
        alert("Please Input valid deposite amount");
    }
});

//handle Withdraw  button :
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBlance = getCurrentbalance();
    if (newWithdrawAmount > currentBlance) {
        alert("Your Account has not avilable Balance");
    }
    else if (newWithdrawAmount >= 0) {
        updateAmountField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert("Please Input valid withdraw amount");
    }
});