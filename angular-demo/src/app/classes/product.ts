export class Product {
  id:number =0;
  name:string='';
  description:string='';
  price:number=0;

  constructor(){
  }

  static products = [
              {
                id: 1,
                name:'Phone XL',
                description:'A large phone with one of the best screens',
                price: 800
              },
              {
                id:2,
                name:'Phone Mini',
                description:'A great phone with one of the best cameras',
                price: 500
              },
              {
                id: 3,
                name:'Phone Standard',
                description:'',
                price: 300
              }
            ];

}

export default new Product();
