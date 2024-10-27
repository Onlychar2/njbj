document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');

    const products = [
        { name: 'Perfil de Netflix', price: '1500 cup', img: 'https://i.imgur.com/MlOubBV.png' },
        { name: 'Perfil de Max', price: '1200 cup', img: 'https://i.imgur.com/L9ChCPj.jpeg' },
        { name: 'Producto 3', price: '$25.00', img: 'https://via.placeholder.com/150' },
        { name: 'Producto 4', price: '$18.00', img: 'https://via.placeholder.com/150' },
        { name: 'Producto 5', price: '$22.00', img: 'https://via.placeholder.com/150' },
        { name: 'Producto 6', price: '$35.00', img: 'https://via.placeholder.com/150' },
    ];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button>Añadir al Carrito</button>
        `;
        productGrid.appendChild(productCard);
    });
});
