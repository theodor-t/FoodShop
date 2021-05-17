class Shop {
    _products;
    _cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    _id;

    constructor(service) {
        if (typeof service === "undefined") return;
        this.service = service;
        this.init();
    }

    async setProducts() {
        this._products = await this.service.getProducts();
    }

    init() {
        this.setProducts().then(_ => {
            StyleLoader.renderCategories([...new Set(
                this._products.map(product => product.category)
            )]);

            StyleLoader.renderProducts(this._products);
            this.categoryHandler();
            this.productHandler();
            StyleLoader.renderCartCount(this.cartCount)
        });
    }

    get cartCount() {
        return this._cartProducts.reduce((accumulator, value) => {
            return accumulator + value.quantity
        }, 0)
    }

    categoryHandler() {
        const categoryItems = document.querySelectorAll("#category_container li");

        categoryItems.forEach(categoryItem => {
            categoryItem.addEventListener('click', (e) => {
                StyleLoader.renderProducts(this.getCategoryItems(e.target.innerText));
                this.productHandler();
            })
        })
    }

    getCategoryItems(categoryName) {
        if (categoryName.toLowerCase() === "all") return this._products;
        return this._products.filter(({category}) => category === categoryName.toLowerCase());
    }

    productHandler() {
        const productsButtons = document.querySelectorAll('#product__container button');

        productsButtons.forEach(productBtn => {
            productBtn.addEventListener('click', () => {
                this._id = Number(productBtn.getAttribute("data-id"));
                this.addToCart(Number(productBtn.getAttribute("data-id")));
            })
        })
    }

    addToCart(itemID) {
        (this.isInCart()) ? this.modifyQuantity(itemID) :
            this._cartProducts.push(Object.assign(
                {}, this._products.find(({id}) => id === itemID), {"quantity": 1}
                ));

        StyleLoader.renderCartCount(this.cartCount);
        localStorage.setItem("cart", JSON.stringify(this._cartProducts))
    }

    modifyQuantity(id) {
        this._cartProducts.forEach(element => {
            if (element.id === id) element.quantity += 1;
        })
    }

    isInCart() {
        if (this._cartProducts.length === 0) return false;
        return this._cartProducts.find(({id}) => this._id === id)
    }
}