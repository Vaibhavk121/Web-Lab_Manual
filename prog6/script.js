function calculate() {
    // Get the input values and the selected operation
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const output = document.getElementById('output');

    let result;

    // Perform the selected operation
    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'product':
            result = num1 * num2;
            break;
        case 'difference':
            result = num1 - num2;
            break;
        case 'remainder':
            result = num1 % num2;
            break;
        case 'quotient':
            result = num1 / num2;
            break;
        case 'power':
            result = Math.pow(num1, num2);
            break;
        case 'square-root':
            result = Math.sqrt(num1);
            break;
        case 'square':
            result = Math.pow(num1, 2);
            break;
        default:
            result = 'Invalid operation';
    }

    // Display the result
    if (isNaN(result)) {
        output.innerText = 'Please enter valid numbers.';
    } else {
        output.innerText = `The result is: ${result}`;
    }
}