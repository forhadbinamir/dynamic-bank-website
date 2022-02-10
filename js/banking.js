// handle event listener to handle button
document.getElementById('diposit-button').addEventListener('click', function () {
    const inputField = document.getElementById('diposit-input-field');
    const inputValue = parseFloat(inputField.value);

    const dipositMoney = document.getElementById('diposit-money');
    const previusAmount = dipositMoney.innerText;
    const newDiposit = parseFloat(previusAmount) + inputValue;

    dipositMoney.innerText = newDiposit;
    // set add total balance 
    const totalBalance = document.getElementById('total-balance');
    const balanceTotalText = totalBalance.innerText;
    const previusTotalBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previusTotalBalance + inputValue;
    totalBalance.innerText = newBalanceTotal;


    // clear input value
    inputField.value = '';

});

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-input-field');
    const withdrawText = parseFloat(withdrawField.value);
    // set withdraw total here 
    const withdrawMoney = document.getElementById('withdraw-money');
    const previusWithdraw = withdrawMoney.innerText;
    const newWithdraw = parseFloat(previusWithdraw) + withdrawText;
    withdrawMoney.innerText = newWithdraw;

    // less blance from total balance
    const totalWithdrawBalance = document.getElementById('total-balance');
    const totalWithdrawBalanceText = totalWithdrawBalance.innerText;
    const previusWithdrawTotal = parseFloat(totalWithdrawBalanceText);
    const newWithdrawBlance = previusWithdrawTotal - withdrawText;
    totalWithdrawBalance.innerText = newWithdrawBlance;
    // clear input after diposite ammount 
    withdrawField.value = '';
})

