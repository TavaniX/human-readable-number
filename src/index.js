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
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let hundreds = "hundred";
    let thouthands = "thousand";

    let value = number.toString();

    if (number < 20) {
        return units[number];
    }

    if (value.length < 3) {
        let tenDigits =
            units[parseInt(value[1])] == "zero"
                ? ""
                : units[parseInt(value[1])];
        if (tenDigits == "") {
            return dozens[parseInt(value[0] - 2)];
        } else {
            return dozens[parseInt(value[0] - 2)] + " " + tenDigits;
        }
    }
};
