//price interface
export interface Price {
    main: number;
    fractional: number;
}

//product interface
export interface Product {
    id: number;
    name: string;
    price: Price;
}

export const formatPrice = (price: {main: number; fractional: number}): number => (price.main * 100 + price.fractional)/100;


//export all the products for the usage of the whole app
export const products: Product[] = [
        {
            "id": 1,
            "name": "Banany BIO",
            "price": {
                "main": 3,
                "fractional": 49
            }
        },
        {
            "id": 2,
            "name": "Mleko 3.2%",
            "price": {
                "main": 2,
                "fractional": 89
            }
        },
        {
            "id": 3,
            "name": "Chleb Żytni",
            "price": {
                "main": 4,
                "fractional": 15
            }
        },
        {
            "id": 4,
            "name": "Jaja 6 sztuk",
            "price": {
                "main": 6,
                "fractional": 99
            }
        },
        {
            "id": 5,
            "name": "Łosoś wędzony",
            "price": {
                "main": 5,
                "fractional": 20
            }
        }
]


//another possibility to write:

// const products: Product[] = [
//   { "id": 1,  "name": "Banany BIO", "price": { "main": 3, "fractional": 49 } },
//   { "id": 2, "name": "Mleko 3.2%", "price": { "main": 2, "fractional": 89 } },
//   { "id": 3, "name": "Chleb Żytni",  "price": { "main": 4, "fractional": 15 } },
//   { "id": 4, "name": "Jaja 6 sztuk", "price": { "main": 6, "fractional": 99 } },
//   { "id": 5, "name": "Łosoś wędzony", "price": { "main": 5, "fractional": 20 } }
// ]
       