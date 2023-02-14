
document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputFieldValuebyId('deposit-amount');
    // 
    const previousTotal = getElementValueById('deposit-total');
    // calculate new deposit total 
    const newDepositTotal = previousTotal + newDepositAmount;
    // set deposit total 
    setTextElementValueById('deposit-total',newDepositTotal);

    // get prevoius balance by using the function
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})