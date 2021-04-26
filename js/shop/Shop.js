class Shop {
    _products;
    constructor(service) {
        this.service = service;
        this.init().then(_ => _); //  to implement
    }

    async init() {
        this._products = await this.service.getProducts();
        StyleLoader.renderCategories([...new Set(
            this._products.map(product => product.category)
        )]);
        StyleLoader.renderProducts(this._products);

        this.categoryHandler();
    }

    categoryHandler() {
        const categoryItems = document.querySelectorAll("#category_container li");

        categoryItems.forEach(categoryItem => {
            categoryItem.addEventListener('click', (e) => {
                StyleLoader.renderProducts(this.getCategoryItems(e.target.innerHTML));
            })
        })
    }

    getCategoryItems(categoryName) {
        if (categoryName === "all") return this._products;
       return this._products.filter( ({ category }) => category === categoryName);
    }


}