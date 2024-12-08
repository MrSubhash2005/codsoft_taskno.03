let resultField = document.getElementById("result");

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += operator;
}

function clearDisplay() {
    resultField.value = "";
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}
