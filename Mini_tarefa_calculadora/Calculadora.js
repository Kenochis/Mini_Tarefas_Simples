function truncar7(resultado) {
  let texto = resultado.toString();
  
  if (texto.includes(".")) {
    let [inteiro, decimais] = texto.split(".");
    return inteiro + "." + decimais.slice(0, 7);
  }

  return texto;
}

function calculadora (num1, operador, num2){
    switch (true) {
        case (operador === "+"):
            return num1 + num2;
        
        case (operador === "/"):
            return num1 / num2;

        case (operador === "-"):
            return num1 - num2;
        
        case (operador === "*"):
            return num1 * num2;

        case (operador === "%"):
            return (num1 / 100) * num2;

        case (operador === "✓"):
            const somatoria = ((num1) ** 0.5);
            return truncar7(somatoria);
            
        default: 
            return "Operação inválida!";
    }
}
console.log(calculadora(10, "+", 2));   // num1 + num2.
