const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class CartList{
    constructor(container='.basket-content'){
        this.container = container;
        this.goods = [];
        this.basketWindow = document.querySelector('.basket')
        this.basketBtn = document.querySelector('.btn-cart');
        this.basketCloseBtn = document.querySelector('.basket-close-btn');
        this.basketBtn.addEventListener('click', () => {
            this.basketWindow.style.display = 'block'
        })
        this.basketCloseBtn.addEventListener('click', () => {
            this.basketWindow.style.display = 'none'
        })
        this.#getProducts()
            .then(data => {
                this.goods = data.contents;
                this.render()
            })
    }

    #getProducts(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
    }

    addItem(){}

    deleteItem(){}

    getSummCart(){}

    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new CartItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

}

class CartItem{
    constructor(product){
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
    }
    render(){
        return `<div class="basket-product-item">
                    <p>${this.title}</p>
                    <p>${this.price} руб.</p>
                </div>`
    }

}

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        // this.#fetchProducts();
        this.#getProducts()
            .then(data => {
                this.goods = data;
                this.render()
            })
    }
    #getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
    }
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
    getSumm(){
        let allSumm = 0;
        this.goods.forEach(products => allSumm += products.price);
        return `Сумма стоимости всех товаров в списке равна ${allSumm}`
    }
}

class ProductItem{
    constructor(product, img = 'https://via.placeholder.com/210'){
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                    <img src="${this.img}" alt="image">
                    <h3>${this.title}</h3>
                    <p>${this.price} руб.</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}

let list = new ProductList();
console.log(list.getSumm());
let basket = new CartList();