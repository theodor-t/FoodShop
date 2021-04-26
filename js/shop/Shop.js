class Shop {
    _products;
    _cartProducts;

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

        })
    }

    searchPredicate(product) {
        return this._cartProducts.find(({id}) => id === product.id)
    }


}