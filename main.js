const $input = document.querySelector('#input');
const $result = document.querySelector('#h2')

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

        $result.innerHTML = `Resultado: ${resultado}`
    } catch (error) {
        $result.innerHTML = 'Error: Operacion incorrecta'
    }
}

function teclar(tecla) {
    $input.value += tecla
}

function borrar(tecla) {
    if (tecla === 'CE') {
        $input.value = ''
    } else {
        $input.value = $input.value.slice(0, -1)
    }
}
