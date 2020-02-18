var webstore = new Vue({
    el: '#app', //css селектор для поиска точки входа в DOM
    data: {
        sitename: 'Vue webstore',
       
        // products:[
        //     {
        //     id: 1001,
        //     title: 'Cat Food, 25lb bag',
        //     description: 'A 25 pound bag of <em>irresistible</em>, organic goodness for your cat.',
        //     price: 2000,
        //     image: 'img/product-fullsize.png',
        //     availableInventory: 10,
        //     rating: 3
        //     },

        //     {
        //     id: 1002,
        //     title: "Yarn",
        //     description: "Yarn your cat can play with for a very <strong>long</strong> time!",
        //     price: 299,
        //     image: "img/yarn.jpg",
        //     availableInventory: 7,
        //     rating: 1
        //     },
        // ],
        

        showProduct: true,
        order: {
            firstName: '',
            lastName: '',
            adress: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            gift: 'Do not Send as a Gift',
            sendGift: 'Send as a Gift',
            dontSendGift: 'Do not Send as a Gift',
        },
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
        },
        products: {},
        cart: []
    },
    computed: {
        cartItemCount: function() { //функция отображения количества товаров в корзине
            return this.cart.length || '';
        },
        // canAddToCart: function() { // сравнваем кол-во добавленных в орзину товаров с фактическим наличием
        //     return this.product.availableInventory > this.cartItemCount;
        // },
      },

      created: function () {      //#C
        axios.get('./products.json')
          .then((response) => {
            this.products = response.data.products;
            console.log(this.products);
                });
           },    //#C
      // created: function () {
      // axios.get('./products.json').then(response => (this.products = response.data.products)).catch(error => console.log(error))
      // },

    methods: {
      canAddToCart(aProduct){
           return aProduct.availableInventory > this.cartCount(aProduct.id); 
      },
      addToCart(aProduct) {
          this.cart.push(aProduct.id);
        },
      cartCount(id){
            let count=0;
            for (var i = 0; i < this.cart.length; i++){
                  if (this.cart[i] === id){
                        count++;
                  }
            }
            return count;

      },

      // addToCart(aProduct) { // добавление в корзину (функция addToCart)
      //       this.cart.push(aProduct.id); // при вызове функции добавляем в корзину ID текущего товара
      // },
      
      showCheckout() {
            this.showProduct = this.showProduct ? false : true;
      },
      
      submitForm(){
            alert('ЗАКАЗАНО');
      },
      checkRating(n, myProduct){
            return myProduct.rating - n >= 0;
      },
    }

});