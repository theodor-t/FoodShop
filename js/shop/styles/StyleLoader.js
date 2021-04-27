class StyleLoader {
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

        //products.forEach(product)

    }

    static productTemplate(product) {
        return `<div class="col-lg-3 col-md-6 mb-4   ">
                    <div class="card  ">
                        <div class="view owerlay ">
                            <img class="card-img-top" src="img/products/${product.image}" alt="">
                            <a>
                                <span class="mask rgba-white-slight "></span>
                            </a>
                        </div>
                    </div>
                    <div class="card-body text-center  ">
                        <a href="#" class="grey-text  ">
                            <h5 class="badge red ">${product.category}</h5>
                        </a>
                        <h5><strong><p class="dark-grey-text">${product.name}</p></strong></h5>
                        <h5><span class="badge badge-pill badge-secondary">Weight: ${product.weight}</span></h5>
                        <h4 class="font-weight-bold blue-text  ">
                            <strong>${product.price} lei</strong>
                        </h4>
                        <button class="btn btn-danger btn-md my-0 p" data-id="${product.id}"> Add to cart <i
                                class="fa fa-shopping-cart ml-1"></i></button>
                </div>`
    }

    static categoryTemplate(category) {
        return `<li class="nav-item active">
                    <a class="nav-link">${category}</a>
                 </li>`
    }
}