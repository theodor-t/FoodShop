class StyleLoader extends Templates {
    static renderProducts(products) {
        const productContainer = document.getElementById('product__container');
        productContainer.innerHTML = '';

        products.forEach(product => {
            productContainer.innerHTML += this.productTemplate(product)
        })
    }

    static renderCategories(categories) {
        const categoryContainer = document.getElementById('category_container');

        categories.forEach(category => {
            categoryContainer.innerHTML += this.categoryTemplate(category)
        })
    }

    static renderCartCount(count) {
        document.getElementById('cart__count').innerText = `${count}`;
    }

    static renderCart(products) {
        const cartContainer = document.getElementById("cart__items");

        products.forEach(product => {
            cartContainer.innerHTML += this.cartItemTemplate(product)
        })
    }

    static renderTotalPrice(price) {
        document.querySelector("#temporary__amount").innerHTML = `${price} lei`;
        document.querySelector("#total__amount").innerHTML = `${price} lei`;
    }
}