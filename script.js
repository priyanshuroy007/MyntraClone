
let cartItems = [];  
let cartCount = 0;  


function loadCartCount() {
    const storedCount = localStorage.getItem('cartCount');
    const storedItems = localStorage.getItem('cartItems');
    cartCount = storedCount ? parseInt(storedCount, 10) : 0;
    cartItems = storedItems ? JSON.parse(storedItems) : []; 
    updateCartCount();
    showCartItems(); l
}


function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartCount;
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
}


document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('bag-icon');  
    const cartModal = document.getElementById('cart-modal'); 
    const closeCartButton = document.getElementById('close-cart'); 


    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';  
        showCartItems();  
    });

 
    closeCartButton.addEventListener('click', () => {
        cartModal.style.display = 'none';  
    });

    loadCartCount();  
});


function showCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');

    cartItemsContainer.innerHTML = '';  
    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.description}</span>
            <span>${item.currentPrice}</span>
            <button class="remove-item" data-name="${item.name}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);

        
        total += parseInt(item.currentPrice.replace('Rs ', '').replace(',', ''), 10);
    });

    totalAmountElement.textContent = `Rs ${total}`;
}


function handleAddToCart(item) {
    cartItems.push(item);  
    cartCount += 1;  
    updateCartCount(); 
}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const itemName = event.target.getAttribute('data-name');


        cartItems = cartItems.filter(item => item.name !== itemName);

       
        cartCount -= 1;
        updateCartCount();  

        showCartItems();  
    }
});



function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product_card');

    card.innerHTML = `
        <img class="product_image" src="${product.image}" alt="${product.name}">
        <div class="product_details">
            <div class="product_rating">
                <span>${product.rating}</span>
            </div>
            <div class="product_name">${product.name}</div>
            <div class="product_description">${product.description}</div>
            <div class="product_price">
                <span class="current_price">${product.currentPrice}</span>
                <span class="original_price">${product.originalPrice}</span>
                <span class="discount">${product.discount}</span>
            </div>
            <button class="add_to_cart_button">Add to Cart</button>
        </div>
    `;

    const addToCartButton = card.querySelector('.add_to_cart_button');
    addToCartButton.addEventListener('click', () => handleAddToCart(product));

    return card;
}


function renderProductCards() {
    const container = document.getElementById('product-container');
    container.innerHTML = '';  
  const products = [
    {
        image: 'Images/img4.webp',
        rating: '4.5 ★ | 10k',
        name: 'H&M',
        description: 'Loose Fit Hoodie',
        currentPrice: 'Rs 1124',
        originalPrice: 'Rs 1499',
        discount: '(25% OFF)'
    },
    {
        image: 'Images/img1.webp',
        rating: '4.2 ★ | 11k',
        name: 'Roadster',
        description: 'Cotton Casual Shirt',
        currentPrice: 'Rs 699',
        originalPrice: 'Rs 1999',
        discount: '(65% OFF)'
    },
    {
        image: 'Images/img3.webp',
        rating: '4.0 ★ | 8k',
        name: 'U.S. Polo Assn.',
        description: 'Casual Hoodie',
        currentPrice: 'Rs 1359',
        originalPrice: 'Rs 1999',
        discount: '(32% OFF)'
    },
    {
        image: 'Images/img5.webp',
        rating: '4.3 ★ | 8k',
        name: 'Puma',
        description: 'Men Walking Shoes',
        currentPrice: 'Rs 1299',
        originalPrice: 'Rs 2499',
        discount: '(48% OFF)'
    },
    {
        image: 'Images/img8.webp',
        rating: '4.6 ★ | 15k',
        name: 'Levi’s',
        description: 'Men Slim Fit Cargos',
        currentPrice: 'Rs 1599',
        originalPrice: 'Rs 3199',
        discount: '(50% OFF)'
    },
    {
        image: 'Images/img2.webp',
        rating: '4.5 ★ | 10k',
        name: 'RARE RABBIT',
        description: 'Checked Cotton Shacket',
        currentPrice: 'Rs 2645',
        originalPrice: 'Rs 5399',
        discount: '(51% OFF)'
    },
    
    
    
    {
        image: 'Images/img6.webp',
        rating: '4.0 ★ | 5k',
        name: 'Converse',
        description: 'High-Top Lace-Ups Sneakers',
        currentPrice: 'Rs 4999',
        originalPrice: 'Rs 9999',
        discount: '(50% OFF)'
    },

    {
        image: 'Images/img9.webp',
        rating: '4.2 ★ | 4k',
        name: 'Calvin Klein',
        description: 'Men Colourblocked Jacket',
        currentPrice: 'Rs 3999',
        originalPrice: 'Rs 7999',
        discount: '(50% OFF)'
    },
    {
        image: 'Images/img14.webp',
        rating: '4.8 ★ | 12k',
        name: 'Teakwood Leathers',
        description: 'Men Leather Belt',
        currentPrice: 'Rs 899',
        originalPrice: 'Rs 2999',
        discount: '(70% OFF)'
    },
    {
        image: 'Images/img13.webp',
        rating: '4.6 ★ | 9k',
        name: 'Pepe Jeans',
        description: 'Straight Fit Denim',
        currentPrice: 'Rs 1899',
        originalPrice: 'Rs 3799',
        discount: '(50% OFF)'
    },
   
    {
        image: 'Images/img7.webp',
        rating: '4.4 ★ | 6k',
        name: 'boohooMAN',
        description: 'Oversized Cotton T-shirt',
        currentPrice: 'Rs 1174',
        originalPrice: 'Rs 2349',
        discount: '(50% OFF)'
    },
    
    {
        image: 'Images/img11.webp',
        rating: '4.7 ★ | 11k',
        name: 'Jack & Jones',
        description: 'Men Solid Polo Cotton T-shirt',
        currentPrice: 'Rs 999',
        originalPrice: 'Rs 1999',
        discount: '(50% OFF)'
    },
    {
        image: 'Images/img12.webp',
        rating: '4.5 ★ | 7k',
        name: 'Bella Vita Organic',
        description: 'CEO MAN Eau de Parfum',
        currentPrice: 'Rs 494',
        originalPrice: 'Rs 899',
        discount: '(45% OFF)'
    },
   
    {
        image: 'Images/img15.webp',
        rating: '4.8 ★ | 14k',
        name: 'H&M',
        description: 'Men Regular Fit Joggers',
        currentPrice: 'Rs 1499',
        originalPrice: 'Rs 2999',
        discount: '(50% OFF)'
    },
    {
        image: 'Images/img10.webp',
        rating: '4.3 ★ | 3k',
        name: 'Titan',
        description: 'Men Analogue Watch',
        currentPrice: 'Rs 1999',
        originalPrice: 'Rs 3999',
        discount: '(50% OFF)'
    }
];

    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}


renderProductCards();




