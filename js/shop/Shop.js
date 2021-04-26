class Shop {
    _products;
    constructor(service) {
        this.service = service;
        this.init().then(_ => _); //  to implement
    }

    async init() {
       this._products = await this.service.getProducts();
       StyleLoader.renderCategories([... new Set(
           this._products.map(product => product.category)
       )]);

    }
}