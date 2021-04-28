class Cart {
    constructor() {
        this._cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        this.init();
    }

    get cartCount() {
        return this._cartItems.reduce((accumulator, value) => {
            return accumulator + value.quantity
        }, 0)
    }

    init() {
        StyleLoader.renderCartCount();
        this.createCartItems().then(_ => _);
    }

    async createCartItems() {

    }
}