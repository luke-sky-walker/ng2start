
import {Component} from '@angular/core';

@Component ({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle: string = 'Product List !';
  imageWidth: number = 75;
  margin: number = 2;
  showImage: boolean = false;
  filterBy: string = 'cart';
  products: any[] = [
    {   'productId': 1,
        'productName': 'Macbook',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2017',
        'description': 'Latet cool Macbook.',
        'price': 1900.95,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/12927/Anonymous-laptop.png'},
    {
         'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 3.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }



  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


}
