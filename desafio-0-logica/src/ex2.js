function diferenca(array) {
  array.sort((a, b) => a - b);

  let menorDiferenca = Infinity;
  const paresComMenorDiferenca = [];

  for (let i = 0; i < array.length; i++) {
    const diferenca = array[i + 1] - array[i];
    if (diferenca < menorDiferenca) {
      menorDiferenca = diferenca;
    }

    if (diferenca === menorDiferenca) {
      paresComMenorDiferenca.push([array[i], array[i + 1]]);
    }
  }

  return paresComMenorDiferenca;

}

const listaNumeros = [1, 2, 4, 7, 8, 12, 15, 16];
console.log(diferenca(listaNumeros))



