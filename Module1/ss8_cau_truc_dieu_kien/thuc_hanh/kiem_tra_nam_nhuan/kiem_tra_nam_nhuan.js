function year() {

    var year = document.getElementById('num').value
    var isLeapYear = false;

    var isDivisibleBy4 = year % 4 == 0;

    if (isDivisibleBy4) {
        var isDivisibleBy100 = year % 100 == 0;
        if (isDivisibleBy100) {
            var isDivisibleBy400 = year % 400 == 0;
            if (isDivisibleBy400) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    if (isLeapYear) {
        document.getElementById('result').innerHTML = year + " là năm nhuận";
    } else {
        document.getElementById('result').innerHTML = year + " không phải là năm nhuận";
    }
}