
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // get the withdraw element from withdraw input field
    const withdrawAmount = getInputFieldValuebyId('withdraw-amount');
    // get the total withdraw amount from total withdraw
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    // total withdraw calculation
    const totalWithdraw = previousWithdrawTotal + withdrawAmount;

    // get total balance 
    const previoustotalBalance = getElementValueById('balance-total');
    // calculation total withdraw from balance
    const newTotalBalance = previoustotalBalance - withdrawAmount;

    // set total withdraw amount
    setTextElementValueById('withdraw-total', totalWithdraw);

    // set after withdraw total balance
    setTextElementValueById('balance-total',newTotalBalance);

})