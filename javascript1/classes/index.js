// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traiditional constructor functions 
//         ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
    this.name=name;
    this.price=price;
    }
    
    displayProduct(){
        console.log(`Product:${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price+(this.price*salesTax);
    }
}

const salesTax=0.05;

const Product1=new Product("Shirt",19.99);
const Product2=new Product("Pant",20.50);
const Product3=new Product("Underwear",100.00);

Product1.displayProduct();

const totalPrice=Product1.calculateTotal(salesTax);
console.log(`Total Price(with tax): $${totalPrice.toFixed(2)}`);
