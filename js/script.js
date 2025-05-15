
let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoDiv = document.getElementById("carrinho");
  const totalSpan = document.getElementById("total");
  if (!carrinhoDiv || !totalSpan) return;

  carrinhoDiv.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
    carrinhoDiv.innerHTML += `<p>${item.produto} - R$${item.preco.toFixed(2)}</p>`;
    total += item.preco;
  });
  totalSpan.textContent = `R$${total.toFixed(2)}`;
}

// Filtro de produtos
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const termo = this.value.toLowerCase();
      document.querySelectorAll(".produto").forEach(el => {
        const nome = el.getAttribute("data-nome").toLowerCase();
        el.style.display = nome.includes(termo) ? "" : "none";
      });
    });
  }
});
