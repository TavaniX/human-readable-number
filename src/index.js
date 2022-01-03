module.exports = function toReadable(number) {
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let dozens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let value = number.toString();

    function dozensToText(textedNumber) {
        if (units[parseInt(textedNumber[1])] == "zero") {
            return dozens[parseInt(textedNumber[0] - 2)];
        } else {
            return (
                dozens[parseInt(textedNumber[0] - 2)] +
                " " +
                units[parseInt(textedNumber[1])]
            );
        }
    }

    if (number < 20) {
        return units[number];
    }

    if (value.length < 3) {
        return dozensToText(value);
    }

    if (value.length >= 3) {
        let dozensDigits = "";
        if (value.slice(1, 3) == "00") {
            return units[parseInt(value[0])] + " hundred";
        } else if (value.slice(1, 2) == "0") {
            dozensDigits = units[parseInt(value.slice(2, 3))];
        } else if (parseInt(value.slice(1, 3)) < 20) {
            dozensDigits = units[parseInt(value.slice(1, 3))];
        } else {
            dozensDigits = dozensToText(value.slice(1, 3));
        }
        return units[parseInt(value[0])] + " hundred " + dozensDigits;
    }
};
