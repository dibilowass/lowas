let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function efetuar() {

    let calculoregistrado = []

    let calculo = {
        valor1: document.getElementById('valor1').value,
        valor2: document.getElementById('valor2').value,
        operacao: document.getElementById('operacao').value,
        produto: calcular(document.getElementById('valor1').value, document.getElementById('valor2').value, document.getElementById('operacao').value,),

    }

    calculoregistrado.push(calculo);
    console.log(calculoregistrado);

    imprimirCalculo()



    function imprimirCalculo() {
        div.innerHTML = '';
        for (let i = 0; i < calculoregistrado.length; i++) {
            div.innerHTML += `
                <tr>
                    <td>${calculoregistrado[i].valor1}</td>
                    <td>${calculoregistrado[i].valor2}</td>
                    <td>${calculoregistrado[i].operacao}</td>
                    <td>${calculoregistrado[i].produto}</td>
                </tr>
            `;
        }
    }
}


function calcular(valor1, valor2, operacao) {

    if (operacao == 'Divisao') {
        return produto = valor1 / valor2
    } else if (operacao == 'Multiplicacao') {
        return produto = valor1 * valor2
    } else if (operacao == 'Elevar') {
        return produto = Math.pow(valor1, valor2)
    } else {
        produto = 0
    }
}





btn.addEventListener('click', efetuar)




