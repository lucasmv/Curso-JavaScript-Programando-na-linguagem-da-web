var titulo = document.querySelector(".titulo");
titulo.textContent = 'Lucas Nutrição';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (pesoEhValido && alturaEhValida) {
        paciente.querySelector('.info-imc').textContent = calcularImc(peso, altura);
    } else {
        paciente.querySelector('.info-imc').textContent = 'Peso ou Altura inválido!';
        paciente.classList.add('paciente-invalido');
    }
};

function validaPeso(peso) {
    if (peso > 0 && peso < 1000)
        return true;
    else
        return false;
}

function validaAltura(altura) {
    if (altura > 0 && altura < 3.0)
        return true;
    else
        return false;
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);;
}