function diferenca(array, allow_duplicates = true, sorted_pairs = false, unique_pairs = false) {
  array.sort((a, b) => a - b);

  let menorDiferenca = Infinity;
  const resultado = [];

  for (let i = 0; i < array.length - 1; i++) {
    const diferenca = array[i + 1] - array[i];

    if (diferenca < menorDiferenca) {
      menorDiferenca = diferenca;
      resultado.length = 0;
    }

    if (diferenca === menorDiferenca) {
      let par = [array[i], array[i + 1]];

      if (!allow_duplicates && par[0] === par[1]) {
        continue;
      }

      if (sorted_pairs) {
        par.sort((a, b) => a - b);
      }

      if (unique_pairs) {
        const inverso = [par[1], par[0]];
        if (resultado.some(p => p[0] === inverso[0] && p[1] === inverso[1])) {
          continue;
        }
      }

      resultado.push(par);
    }
  }

  return resultado;
}

console.log(diferenca([1, 3, 6, 2, 9, 12], true, false, true)); // [[1, 2]]
console.log(diferenca([4, 5, 3, 5, 8], false, true, true)); // [[4, 5]]
console.log(diferenca([1, 3, 2, 1, 6], true, true, false)); // [[1, 1], [2, 3]]
