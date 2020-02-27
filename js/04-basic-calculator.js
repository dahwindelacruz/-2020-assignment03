let number1;
let number2;
let operation;

function calculate (number1, number2, operation) {
    number1 = parseInt(window.prompt("Enter a number."));
    number2 = parseInt(window.prompt("Enter a second number."));
    operation = window.prompt("add, subtract, multiply, or divide?");

    switch (true) {
        case (operation === "add"):
            window.alert(number1 + number2);
            break;
        case (operation === "subtract"):
            window.alert(number1 - number2);
            break;
        case (operation === "multiply"):
            window.alert(number1 * number2);
            break;
        case (operation === "divide"):
            window.alert(number1 / number2);
            break;
        default:
            window.alert("Please type add, subtract, multiply, or divide")
            calculate();
            return;
    }
}
calculate();


