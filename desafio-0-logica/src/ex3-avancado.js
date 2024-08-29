function gerarSubconjuntos(conjunto, { max_size = null, min_size = null, distinct_only = false, sort_subsets = false } = {}) {
  const subConjuntos = new Set();

  function backtrack(subConjuntoAtual, index) {
    if (index === conjunto.length) {
      if ((max_size === null || subConjuntoAtual.length <= max_size) &&
        (min_size === null || subConjuntoAtual.length >= min_size)) {
        const subConjuntoCopia = [...subConjuntoAtual];

        if (sort_subsets) {
          subConjuntoCopia.sort((a, b) => a - b);
        }

        const key = JSON.stringify(subConjuntoCopia);
        if (!distinct_only || !subConjuntos.has(key)) {
          subConjuntos.add(key);
        }
      }
      return;
    }

    subConjuntoAtual.push(conjunto[index]);
    backtrack(subConjuntoAtual, index + 1);

    subConjuntoAtual.pop();
    backtrack(subConjuntoAtual, index + 1);
  }

  backtrack([], 0);

  return Array.from(subConjuntos).map(JSON.parse);
}

console.log(gerarSubconjuntos([1, 2, 3], { max_size: 2 }));
console.log(gerarSubconjuntos([1, 2, 3], { min_size: 2 }));
console.log(gerarSubconjuntos([1, 2, 2], { distinct_only: true }));
console.log(gerarSubconjuntos([3, 1, 2], { sort_subsets: true })); 
