class Shop {
    _products;
    _cartProducts = [];
    _id;

    constructor(service) {
        this.service = service;
        this.init().then(_ => _);
    }

    async init() {
        this._products = await this.service.getProducts();
        StyleLoader.renderCategories([...new Set(
            this._products.map(product => product.category)
        )]);
        StyleLoader.renderProducts(this._products);

        this.categoryHandler();
        this.productHandler();
    }

    categoryHandler() {
        const categoryItems = document.querySelectorAll("#category_container li");

        categoryItems.forEach(categoryItem => {
            categoryItem.addEventListener('click', (e) => {
                StyleLoader.renderProducts(this.getCategoryItems(e.target.innerHTML));
                this.productHandler();
            })
        })
    }

    getCategoryItems(categoryName) {
        if (categoryName === "all") return this._products;
        return this._products.filter(({category}) => category === categoryName);
    }

    productHandler() {
        const productsBtns = document.querySelectorAll('#product__container button');

        productsBtns.forEach(productBtn => {
            productBtn.addEventListener('click', () => {
                this._id = Number(productBtn.getAttribute("data-id"));
                this.addToCart(Number(productBtn.getAttribute("data-id")));
            })

        })
    }

    addToCart(id) {
        if (this.isInCart(id)) {
            this.modifyQuantity(id);
        } else {
            this._cartProducts.push({
                "id": id,
                "quantity": 1
            })
        }

        console.log(this._cartProducts);
    }

    modifyQuantity(id) {
        this._cartProducts.forEach(element => {
            if (element.id === id) element.quantity += 1;
        })
    }

    isInCart() {
        if (this._cartProducts.length === 0) return false;
        return this._cartProducts.find(this.searchPredicate, this);
    }

    searchPredicate(product) {
        return product.id === this._id;
    }


}