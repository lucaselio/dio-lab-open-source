const display = document.getElementById("display"); //referencia o display no HTML
const buttons = document.querySelectorAll('button'); // Referencia os botões no HTML

let allowCalculation = true; // Variável para permitir calcular

buttons.forEach(button => { 
    button.addEventListener('click',() => { //Adiciona evento de clicar aos botões
        const value = button.textContent; //Atribui a variável 'value' o conteúdo de texto presente nos botões
        
        if (display.textContent === "Erro" && !isNaN(value)) { //Se o conteúdo do display for "erro" então ao clicar num número, o display é limpo. Por isso !isNaN, ou seja, negando que value seja um número, portanto, caso value seja um número.
            display.textContent = "";
        }
        if (value === "=") { //Caso o conteúdo atribuido a value por botões seja '='
            if (allowCalculation) {
                try{
                    display.textContent = eval(display.textContent);
                    allowCalculation = false; // Bloqueia novo cálculo até novo número
                }catch{
                    display.textContent = "Erro";
                }
            }
         } else if (value === "C") { 
            display.textContent = ""; // Limpa o display
            allowCalculation = false;
         } else {
            if (!allowCalculation) {
                display.textContent = ""; // Se o usuário clicar um número após '=', limpa o display
                }  
         allowCalculation = true; // Permite novo cálculo
         if (display.textContent === "0" && value === "0") return;
         if (display.textContent === "0" && value !== "0") {
             display.textContent = value;
            } else {
                display.textContent += value; //ESSE AQUI QUE VAI FINALMENTE JOGAR O VALOR NO DISPLAY, TÁ MALUCO. 
            }  
         }
    });
});
