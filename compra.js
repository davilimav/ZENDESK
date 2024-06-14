const products = [
    { id: 'cadeira1', name: 'Cadeira rústica', price: 99 },
    { id: 'cadeira2', name: 'Cadeira jantar', price: 139 },
    { id: 'cadeira3', name: 'Cadeira alicia', price: 110 },
    { id: 'cadeira4', name: 'cadeira lalá', price: 100 },
    { id: 'mesa1', name: 'Mesa tampo redondo', price: 150 },
    { id: 'mesa2', name: 'Mesa barca', price: 185 },
    { id: 'mesa3', name: 'Mesa de jantar com cadeiras', price: 500 },
    { id: 'mesa4', name: 'Mesa cone', price: 80 },
    { id: 'mesa5', name: 'Mesa clássica', price: 100 },
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


function updateCart() {
    const cartList = document.getElementById('cartList');
    const totalElement = document.getElementById('total');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`; // Adicionando o preço formatado com duas casas decimais
        cartList.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`; // Exibindo o total formatado com duas casas decimais na barra lateral
}