class StyleLoader {
    static renderProducts(products) {

    }

    static renderCategories(categories) {
        const categoryContainer = document.getElementById('category_container');

        categories.forEach(category => {
            categoryContainer.innerHTML +=
                `<li class="nav-item active">
                    <a href="" class="nav-link">${category}</a>
                 </li>`
        })
    }
}