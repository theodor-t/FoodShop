class StyleLoader {
    static renderProducts(products) {
        const productContainer = document.getElementById('product__container');
        productContainer.innerHTML = '';

        products.forEach(product => {
            productContainer.innerHTML +=
                `<div class="col-lg-3 col-md-6 mb-4   ">
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
}