const $input1 = document.querySelector('#num1');
const $input2 = document.querySelector('#num2');
const $result = document.querySelector('#h2')

function sumar() {
    const valor1 = Number($input1.value);
    const valor2 = Number($input2.value);
    const resultado = valor1 + valor2;
    $result.innerHTML = `Resultado: ${resultado}`
}

