function truncar7(resultado) {
  let texto = resultado.toString();
  
  if (texto.includes(".")) {
    let [inteiro, decimais] = texto.split(".");
    return inteiro + "." + decimais.slice(0, 7);
  }

  return texto;
}
//-------------------------------------------------//

function somar (num1, num2) {
    return num1 + num2;
}
function dividir (num1, num2) {
    return num1 / num2;
}
function subtrair (num1, num2) {
    return num1 - num2;
}
function multiplicar (num1, num2) {
    return num1 * num2;
}
function porcentagem (num1) {
    return num1 / 100;
}
function raizQuadrada (num1) {
    const somatoria = ((num1) ** 0.5);
    return truncar7(somatoria);
}

// Deu branco de como continuar..