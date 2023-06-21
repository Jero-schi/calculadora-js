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

        if (resultado === Infinity) {
            resultado = 0
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
    } else {
        $input.value = $input.value.slice(0, -1)
    }
}

document.addEventListener('keydown', (event) => {
    // console.log(event);
    switch (event.key) {
        case '0':
            teclar('0')
            break;
        case '1':
            teclar('1')
            break;
        case '2':
            teclar('2')
            break;
        case '3':
            teclar('3')
            break;
        case '4':
            teclar('4')
            break;
        case '5':
            teclar('5')
            break;
        case '6':
            teclar('6')
            break;
        case '7':
            teclar('7')
            break;
        case '8':
            teclar('8')
            break;
        case '9':
            teclar('9')
            break;
        case 'Enter':
            event.preventDefault()
            calcular()
            break;
        case '+':
            teclar('+')
            break;
        case '-':
            teclar('-')
            break;
        case 'x':
            teclar('x')
            break;
        case '/':
            teclar('÷')
            break;
        case 'Delete':
            borrar('CE')
            break;
        case 'Backspace':
            borrar('C')
            break;
    
        default:
            break;
    }
})