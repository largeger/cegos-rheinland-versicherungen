// Tag 2: JavaScript & DOM-Manipulation

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultSpan = document.querySelector('#result span');

const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');

function calculate(operation) {
    const v1 = parseFloat(num1Input.value);
    const v2 = parseFloat(num2Input.value);

    if (isNaN(v1) || isNaN(v2)) {
        resultSpan.textContent = "Bitte Zahlen eingeben";
        return;
    }

    let res;
    if (operation === 'add') {
        res = v1 + v2;
    } else {
        res = v1 - v2;
    }

    resultSpan.textContent = res;
}

addBtn.addEventListener('click', () => calculate('add'));
subBtn.addEventListener('click', () => calculate('sub'));

