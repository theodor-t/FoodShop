class Service {
    getProducts() {
        return fetch('products.json').then(response => {
            return response.json().then(resolved => {
                return resolved
            })
        });
    }
}