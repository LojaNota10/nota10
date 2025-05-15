let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  alert(produto + " adicionado ao carrinho!");
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const divCarrinho = document.getElementById('carrinho');
  const totalSpan = document.getElementById('total');
  if (!divCarrinho || !totalSpan) return;

  divCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    divCarrinho.innerHTML += `<p>${item.produto} - R$ ${item.preco.toFixed(2)}</p>`;
    total += item.preco;
  });

  totalSpan.innerText = 'R$ ' + total.toFixed(2);
}
