function showpay() {
    if ((document.calc.loan.value == null || document.calc.loan.value.length == 0) ||
       (document.calc.rate.value == null || document.calc.rate.value.length == 0) ||
       (document.calc.month.value == null || document.calc.month.value.length == 0)) {
        document.calc.pay.value = "Incomplete";
    }
    else {
        var principle = document.calc.loan.value;
        var interest = document.calc.rate.value / 100;
        var months = document.calc.month.value;
        document.calc.pay.value = ((parseFloat(principle) * parseFloat(interest)) + parseFloat(principle)) / parseInt(months);
    }

    // payment = ((principle * interest rate) + principle) / months

}