const $input = document.querySelector('#input');
const $result = document.querySelector('#resultado')

function calcular() {
    const input = $input.value;

    try {
        const operacion = input.split(/(\+|\-|\x|\*|\÷|\/)/, 3)

        const a = Number(operacion[0])
        const b = Number(operacion[2])
        const operador = operacion[1]

        let resultado = 0;

        switch (operador) {
            case '+':
                resultado = a + b
                break;

            case '-':
                resultado = a - b
                break;

            case 'x':
                resultado = a * b
                break;

            case '*':
                resultado = a * b
                break;

            case '÷':
                resultado = a / b
                break;

            case '/':
                resultado = a / b
                break;
        
            default:
                throw new Error('Operador invalido')
        }

        $input.value = resultado
        $result.innerHTML = resultado
    } catch (error) {
    }
}

function teclar(tecla) {
    $input.value += tecla
}

function borrar(tecla) {
    if (tecla === 'CE') {
        $input.value = ''
        $result.textContent = '0'
    } else {
        $input.value = $input.value.slice(0, -1)
        $result.textContent = '0'
    }
}
