const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

var vm = new Vue({
    el: "#app",
    data: {
        catalogUrl: '/catalogData.json',
        basketUrl:'/getBasket.json',
        products: [],
        basketGoods: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/210',
        userSearch: ''
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            console.log(product.id_product);
        },
        filter(){
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            this.products.forEach(el => {
                const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
                if(!this.filtered.includes(el)){
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        },
        show(){
            const block = document.querySelector('.basket');
            if(block.classList.contains('invisible')){
                block.classList.remove('invisible')
            } else {
                block.classList.add('invisible')
            }
        }
    },
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
               };
           });
        this.getJson(`${API + this.basketUrl}`)
           .then(data => {
               for(let el of data.contents){
                   this.basketGoods.push(el);
               };
           });
        // this.getJson(`getProducts.json`)
        //     .then(data => {
        //         for(let el of data){
        //             this.products.push(el);
        //         }
        //     })
    }
})