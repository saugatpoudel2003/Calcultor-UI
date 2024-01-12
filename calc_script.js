// Get reference to the input element
let input = document.getElementById('inputBox');

// Get all buttons in the document
let buttons = document.querySelectorAll('button');

// Initialize expression string and define operators
let expression = "";
let operators = ['+', '-', '*', '/'];

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the text content of the clicked button
        const buttonText = e.target.innerHTML;

        // Check the button clicked
        if (buttonText === '=') {
            try {
                // Evaluate the expression and update the input value
                expression = eval(expression);
                input.value = expression;
            } catch (error) {
                // Handle errors during evaluation
                input.value = 'Error';
            }
        } else if (buttonText === 'AC') {
            // Clear the expression on AC button click
            expression = "";
            input.value = expression;
        } else if (buttonText === 'DEL') {
            // Remove the last character on DEL button click
            expression = expression.slice(0, -1);
            input.value = expression;
        } else if (buttonText === '%') {
            // Calculate percentage and update the input value
            expression = eval(expression) / 100;
            input.value = expression;
        } else {
            // Handle operators and prevent consecutive operators
            if (operators.includes(buttonText) && operators.includes(expression.slice(-1))) {
                // Replace the last operator if the new one is clicked
                expression = expression.slice(0, -1) + buttonText;
            } else {
                // Concatenate the clicked button text to the expression
                expression += buttonText;
            }

            // Update the input value with the current expression
            input.value = expression;
        }
    });
});