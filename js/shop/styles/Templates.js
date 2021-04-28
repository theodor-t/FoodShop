class Templates {
    static productTemplate(product) {
        return `<div class="col-lg-3 col-md-6 mb-4   ">
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
    }

    static categoryTemplate(category) {
        return `<li class="nav-item active">
                    <a class="nav-link">${category}</a>
                 </li>`
    }

    static cartItemTemplate(item) {
        return `<div class="row mb-4" data-id="${item.id}">
                            <div class="col-md-5 col-lg-3 col-xl-3">
                                <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                    <img class="img-fluid w-100"
                                         alt="Sample" src="img/products/${item.image}">
                                </div>
                            </div>
                            <div class="col-md-7 col-lg-9 col-xl-9">
                                <div>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <h5>${item.name}</h5>
                                            <p class="mb-3 text-muted text-uppercase small">Weight - ${item.weight}</p>
                                            <p class="mb-2 text-muted text-uppercase small">Category - ${item.category}</p>
                                        </div>
                                        <div>
                                            <div class="def-number-input number-input safari_only mb-0 w-100">
                                                <button class="btn btn-dark btn-md my-0 p">
                                                    <em class="fas fa-minus-square fa-lg decrease__item"></em>
                                                </button>
                                                <label>
                                                    <input class="quantity" min="0" name="quantity" type="number"
                                                           value="${item.quantity}">
                                                </label>
                                                <button class="btn btn-dark btn-md my-0 p">
                                                    <em class="fas fa-plus-square fa-lg increase__item"></em>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <a class="card-link-secondary small text-uppercase mr-3 remove__cart__item"
                                               type="button"><em
                                                    class="fas fa-trash-alt mr-1"></em>Remove item </a>
                                        </div>
                                        <p class="mb-0"><span><strong>${item.price} lei</strong></span></p>
                                    </div>
                                </div>
                            </div>
                            <hr class="mb-4">
                        </div>`
    }
}