function meuEscopo () {
    
    const form = document.querySelector('#form');
    

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const peso = form.querySelector('#input-teste-1');
        const altura = form.querySelector('#input-teste-2');
        const resultado = document.querySelector('#resultado');


        let pesoN = parseFloat(peso.value);
        let alturaN = parseFloat(altura.value);
        
        if (Number.isNaN(pesoN)) {
            resultado.innerHTML = 'Por favor, insira um peso válido.';
            resultado.className = 'resultado-invalido';
        } else if (Number.isNaN(alturaN)) {
            resultado.innerHTML = 'Por favor, insira uma altura válida.';
            resultado.className = 'resultado-invalido';
        } else if (pesoN >= 600 || pesoN <= 25) {
            resultado.innerHTML = 'Utilize um peso válido para um adulto.';
            resultado.className = 'resultado-invalido';
        } else if (alturaN > 2.6) {
            resultado.innerHTML = 'Insira a altura em metros! Ex: (1.75)';
            resultado.className = 'resultado-invalido';
        } else if (alturaN < 1.40) {
            resultado.innerHTML = 'O IMC é calculado diferente para pessoas muito baixas.';
            resultado.className = 'resultado-invalido';
        } else {
            let imc = (pesoN / (alturaN * alturaN));
            if (imc < 18.5) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`;
                resultado.className = 'resultado-valido';
            } else if (imc >= 18.5 && imc < 25) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
                resultado.className = 'resultado-valido';
            } else if (imc >= 25 && imc < 30) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
                resultado.className = 'resultado-valido';
            } else if (imc >= 30 && imc < 35) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
                resultado.className = 'resultado-valido';
            } else if (imc >= 35 && imc < 40) {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
                resultado.className = 'resultado-valido';
            } else {
                resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
                resultado.className = 'resultado-valido';
            }
        }
    }      
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();

/*let imc = pesoN / (alturaN *alturaN);
            console.log(imc);*/