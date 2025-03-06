document.addEventListener("DOMContentLoaded", function () {
    const numberInputs = document.querySelectorAll(".calc__input");
    const operatorDropdown = document.querySelector(".calc__operator");
    const calcButton = document.querySelector(".calc__submit");
    const previousResultDisplay = document.querySelector(".calc__result-old");
    const currentResultDisplay = document.querySelector(".calc__result-new");

    function calculate() {
        const firstInput = numberInputs[0].value;
        const secondInput = numberInputs[1].value;
        
        if (firstInput === "" || secondInput === "") {
            currentResultDisplay.textContent = "Ошибка: введите оба числа!";
            return;
        }

        const firstNumber = parseFloat(firstInput);
        const secondNumber = parseFloat(secondInput);
        const selectedOperator = operatorDropdown.value;

        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            currentResultDisplay.textContent = "Ошибка: введите корректные числа!";
            return;
        }

        let calculationResult;
        switch (selectedOperator) {
            case "+":
                calculationResult = firstNumber + secondNumber;
                break;
            case "-":
                calculationResult = firstNumber - secondNumber;
                break;
            case "*":
                calculationResult = firstNumber * secondNumber;
                break;
            case "/":
                if (Math.abs(secondNumber) < Number.EPSILON) {
                    currentResultDisplay.textContent = "Ошибка: деление на ноль!";
                    return;
                }
                calculationResult = firstNumber / secondNumber;
                break;
            case "%":
                if (Math.abs(secondNumber) < Number.EPSILON) {
                    currentResultDisplay.textContent = "Ошибка: деление на ноль!";
                    return;
                }
                calculationResult = firstNumber % secondNumber;
                break;
            case "^":
                calculationResult = Math.pow(firstNumber, secondNumber);
                break;
        }

        if (!currentResultDisplay.textContent.startsWith("Ошибка")) {
            previousResultDisplay.textContent = currentResultDisplay.textContent;
        }

        currentResultDisplay.textContent = `${firstNumber} ${selectedOperator} ${secondNumber} = ${calculationResult}`;
    }

    calcButton.addEventListener("click", calculate);
});
