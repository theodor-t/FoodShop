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

    get cartPrice() {
        return this._cartItems.reduce((accumulator, value) => {
            return accumulator + value.quantity * value.price
        }, 0)
    }

    init() {
        StyleLoader.renderCartCount(this.cartCount);
        StyleLoader.renderCart(this._cartItems);
        StyleLoader.renderTotalPrice(this.cartPrice);
    }
}