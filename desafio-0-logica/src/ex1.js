
//Com repeat
function listaRepeat(n) {
  const liAsteriscos = [];
  for (let i = 1; i <= n; i++) {
    liAsteriscos.push('*'.repeat(i));
  }
  return liAsteriscos;
}

//Sem repeat
function lista(n) {
  const liAsteriscos = [];
  for (let i = 1; i <= n; i++) {
    let asteriscos = '';
    for (let j = 0; j < i; j++) {
      asteriscos += '*';
    }
    liAsteriscos.push(asteriscos);
  }
  return liAsteriscos;
}

console.log(listaRepeat(5));
console.log(lista(5));
