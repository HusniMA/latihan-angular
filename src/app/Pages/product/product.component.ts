import { Component, OnInit} from '@angular/core';
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  faSearch = faSearch;
  faTimes = faTimes;
  products: Array<IProduct> = [];
  isShowSearch = false;
  isShowLoader: boolean;
  textSearch = '';
  timeOut: any;
  lottieConfig: object;
  anim: any;

  constructor() {
    this.isShowLoader = false;
    this.lottieConfig = {
      path: 'assets/lottie/progress_bar.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }


  onSearch(value: string = ''): void {
    this.textSearch = value;
    this.timeOut = setTimeout(() => {
      this.isShowLoader = true;
    }, 1000);

  }

  onKeyDown(): void {
    clearTimeout(this.timeOut);
    this.isShowLoader = false;
  }

  ngOnInit() {
    this.products.push({id: 1, name: 'Womens Caps', img: 'assets/images/1.jpg'});
    this.products.push({id: 2, name: 'Ciramic Pots', img: 'assets/images/2.jpg'});
    this.products.push({id: 3, name: 'Black Shoes', img: 'assets/images/3.jpg'});
    this.products.push({id: 4, name: 'White Dress', img: 'assets/images/4.jpg'});
    this.products.push({id: 5, name: 'Polo Shirts', img: 'assets/images/5.jpg'});
    this.products.push({id: 6, name: 'Light Cotton Tops', img: 'assets/images/6.jpg'});
    this.products.push({id: 7, name: 'Sun Glasses', img: 'assets/images/7.jpg'});

  }


  toggleShowSearch() {
    this.isShowSearch = !this.isShowSearch;
    this.isShowLoader = false;
    this.textSearch = '';
    if (this.isShowSearch) {
      $('body').css('overflow-y', 'hidden');
    } else {
      $('body').css('overflow-y', 'auto');
    }
  }

}

interface IProduct {
  id: number;
  name: string;
  img: string;
}
