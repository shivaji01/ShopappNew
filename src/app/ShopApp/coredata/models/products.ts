//to impliments interface here to call api data

export interface Productdata {
    "id": number;
    "title": string;
    "price": string;
    "description": string;
    "category": string;
    "image": string;
    "rating": Ratings;
}

export interface Ratings {
           "rate"  : number;
           "count": number; 
}




    // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "clothings",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //       "rate": 3.9,
    //       "count": 120
    //     }