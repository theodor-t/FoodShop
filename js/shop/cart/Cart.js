class Cart {
    constructor() {
        this._cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        this.init();
    }

    init() {
        StyleLoader.renderCart(this._cartItems);
        this.updateCountPrice();
        this.productRemoveHandler();
        this.quantityHandler();
    }

    updateCountPrice() {
        StyleLoader.renderCartCount(this.cartCount);
        StyleLoader.renderTotalPrice(this.cartPrice);
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
        const parent = this.getTargetElement(event.target, "row mb-4");
        this._cartItems.splice(
            this._cartItems.findIndex(({id}) => Number(parent.getAttribute("data-id")) === id)
            , 1
        );
        localStorage.setItem("cart", JSON.stringify(this._cartItems));
        this.updateCountPrice();
        parent?.remove();
    }

    getTargetElement(elem, selector) {
        for (; elem && elem !== document; elem = elem.parentElement) {
            if (elem.classList.value === selector) return elem
        }
        return null;
    }

    quantityHandler() {
        const increaseQuantityBtns = document.querySelectorAll(".increase__item");
        const decreaseQuantityBtns = document.querySelectorAll(".decrease__item");

        increaseQuantityBtns.forEach(btn => {
            btn.addEventListener("click", (evt) => {
                this.modifyQuantity(evt, 1)
            })
        });

        decreaseQuantityBtns.forEach(btn => {
            btn.addEventListener("click", (evt) => {
                this.modifyQuantity(evt, -1)
            })
        })
    }

    modifyQuantity(evt, value) {
        const quantityHolder = this.getTargetElement(
            evt.target, "def-number-input number-input safari_only mb-0 w-100")
            .querySelector(".quantity");
        quantityHolder.value += value;
    }


}