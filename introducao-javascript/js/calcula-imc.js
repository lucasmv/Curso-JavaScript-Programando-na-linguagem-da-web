var titulo = document.querySelector(".titulo");
titulo.textContent = 'Lucas Nutrição';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000)
        pesoEhValido = false;

    if (altura <= 0 || altura >= 3.00)
        alturaEhValida = false;

    if (pesoEhValido && alturaEhValida) {
        paciente.querySelector('.info-imc').textContent = calcularImc(peso,altura);
    } else {
        paciente.querySelector('.info-imc').textContent = 'Peso ou Altura inválido!';
        paciente.classList.add('paciente-invalido');
    }
};

function calcularImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);;
}