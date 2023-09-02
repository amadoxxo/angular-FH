export interface Product {
    description: string;
    price:number;
}

// const phone:Product = {
//     description: "Nokia A1",
//     price: 150.0
// }

// const tablet:Product = {
//     description: "iPad Air",
//     price: 250.0
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}


// function taxCalculation(options:TaxCalculationOptions): [number, number] {
// function taxCalculation({ products, tax }:TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { products, tax } = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

// const shoppingCart:Product[] = [phone, tablet];
// const tax:number = 0.15;

// const [products, totalTax]: [number, number] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// });

// console.log('Total', products);
// console.log('Tax', totalTax);