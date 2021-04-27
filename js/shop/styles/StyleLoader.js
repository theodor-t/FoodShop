class StyleLoader {
    static renderProducts(products) {
        const productContainer = document.getElementById('product__container');
        productContainer.innerHTML = '';

        products.forEach(product => {
            productContainer.innerHTML += Templates.productTemplate(product)
        })
    }

    static renderCategories(categories) {
        const categoryContainer = document.getElementById('category_container');

        categories.forEach(category => {
            categoryContainer.innerHTML +=
                `<li class="nav-item active">
                    <a class="nav-link">${category}</a>
                 </li>`
        })
    }

    static renderCartCount(count) {
        document.getElementById('cart__count').innerText = `${count}`;
    }

    static renderCart(products) {
        const cartContainer = document.getElementById("cart__items");

        //products.forEach(product)

    }
}