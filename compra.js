const products = [
    { id: 'cadeira', name: 'Cadeira Reutilizada', price: 150 },
    { id: 'mesa', name: 'Mesa Reutilizada', price: 300 }
];

let cart = [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price}.00`;
        cartList.appendChild(li);
        total += item.price;
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}.00`;
}

function checkout() {
    alert('Obrigado pela sua compra!');
    cart = [];
    updateCart();
}

// function toggleCartao() {
//     var conteudoCartao = document.getElementById("conteudoCartao");
//     if (conteudoCartao.style.display === "none") {
//       conteudoCartao.style.display = "block";
//     } else {
//       conteudoCartao.style.display = "none";
//     }
//   }


function abrirBarraLateral() {
    var barraLateral = document.getElementById("minhaBarraLateral");
    var conteudoPrincipal = document.querySelector(".conteudo-principal");
    if (barraLateral.classList.contains("aberto")) {
        barraLateral.classList.remove("aberto");
        barraLateral.classList.add("fechado");
        conteudoPrincipal.style.marginLeft = "0";
    } else {
        barraLateral.classList.remove("fechado");
        barraLateral.classList.add("aberto");
        conteudoPrincipal.style.marginLeft = "250px";
    }
}
