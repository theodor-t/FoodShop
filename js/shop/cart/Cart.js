class Cart {
    constructor() {
        this._cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        this.init();
    }

    init() {
        StyleLoader.renderCartCount(this.cartCount);
        StyleLoader.renderCart(this._cartItems);
        StyleLoader.renderTotalPrice(this.cartPrice);
        this.productRemoveHandler();
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

    productRemoveHandler() {
        const products = document.querySelectorAll(".remove__cart__item");

        products.forEach(product => {
            product.addEventListener('click', evt => {
                this.productRemove(evt);
            })
        })
    }

    productRemove(event) {
        const parent = this.getParentElement(event.target, "row mb-4");
        parent?.remove();
    }

    getParentElement(elem, selector) {
        for (; elem && elem !== document; elem = elem.parentElement) {
            if (elem.classList.value === selector) return elem
        }
        return null;
    }

}