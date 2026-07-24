// api fetch using fake products api
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('card-container');    
        const cards = data.map(product => {
            return `
                <div class="card">  
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button>Add to Cart</button>
                </div>
            `;
        });
        container.innerHTML = cards.join('');
    })
    .catch(error => console.error('Error fetching products:', error));
    