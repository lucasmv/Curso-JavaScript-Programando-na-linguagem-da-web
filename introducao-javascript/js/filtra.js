var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {

    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        pacientes.forEach(function (paciente) {
            var expressao = new RegExp(campoFiltro.value, 'i');

            if (!expressao.test(paciente.querySelector('.info-nome').textContent))
                paciente.classList.add('invisivel');
            else
                paciente.classList.remove('invisivel');
        });
    }
    else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove('invisivel');
        });
    }
});