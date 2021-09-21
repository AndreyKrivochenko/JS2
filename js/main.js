// const products = [
//     {id: 1, title: 'Notebook', price: 2000, img: 'img/no-img.png'},
//     {id: 2, title: 'Mouse', price: 20, img: 'img/no-img.png'},
//     {id: 3, title: 'Keyboard', price: 200, img: 'img/no-img.png'},
//     {id: 4, title: 'Gamepad', price: 50, img: 'img/no-img.png'},
// ];
// //Функция для формирования верстки каждого товара
// //Добавить в выводе изображение
// const renderProduct = (item) => {
//     return `<div class="product-item">
//                 <img src="${item.img}" alt="image">
//                 <h3>${item.title}</h3>
//                 <p>${item.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item));
//     let innerText = productsList.join('');
//     document.querySelector('.products').innerHTML = innerText;
// };

// renderPage(products);

class CartList{
    constructor(){}

    addItem(){}

    deleteItem(){}

    getSummCart(){}

    render(){}

}

class CartItem{
    constructor(){}

    render(){}

}

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.#fetchProducts();
        this.render();
    }
    #fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, img: 'img/no-img.png'},
            {id: 2, title: 'Mouse', price: 20, img: 'img/no-img.png'},
            {id: 3, title: 'Keyboard', price: 200, img: 'img/no-img.png'},
            {id: 4, title: 'Gamepad', price: 50, img: 'img/no-img.png'},
        ];
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
    constructor(product){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }
    render(){
        return `<div class="product-item">
                    <img src="${this.img}" alt="image">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}

let list = new ProductList();
console.log(list.getSumm());