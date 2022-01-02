module.exports = function toReadable(number) {
    let one = [
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
        "nineteen",
    ];
    let ten = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "ninety",
    ];
    let hundred = "hundred";
    let thouthand = "thousand";

    let valueLength = number.length;

    if (number < 20) {
        return one[number];
    }
};
