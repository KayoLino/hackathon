function gerarSubconjuntos(conjunto) {
  const subConjuntos = [];

  function gerar(subConjuntoAtual, index) {
    if (index === conjunto.length) {
      subConjuntos.push([...subConjuntoAtual]);
      return;
    }

    subConjuntoAtual.push(conjunto[index]);
    gerar(subConjuntoAtual, index + 1);

    subConjuntoAtual.pop();
    gerar(subConjuntoAtual, index + 1);
  }

  gerar([], 0);
  return subConjuntos;
}

console.log(gerarSubconjuntos([1, 2, 3]));
