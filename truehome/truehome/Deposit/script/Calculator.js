function showInterest() {
    if ((document.calc.fd.value == null || document.calc.fd.value.length == 0) ||
       (document.calc.rate.value == null || document.calc.rate.value.length == 0) ||
       (document.calc.month.value == null || document.calc.month.value.length == 0))
        {
            document.calc.total.value = "Incomplete";
            document.calc.interest.value = "Incomplete";
    }
    else {
        var principle = document.calc.fd.value;
        var interest = document.calc.rate.value / 100;
        var term = document.calc.month.value / 12;
        document.calc.interest.value = ((parseFloat(principle) * parseFloat(interest) * parseFloat(term)));
        document.calc.total.value = ((parseFloat(principle) + parseFloat(principle) * parseFloat(interest) * parseFloat(term)));
        

    } 

}