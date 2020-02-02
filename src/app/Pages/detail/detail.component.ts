import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  showImage: boolean;
  title = 'NG7Swiper';
  config: Swiper = {
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
  };

  config2: Swiper;
  image: string;
  images = [
    'http://static.id.zalora.net/p/hana-0955-6778112-4.jpg',
    'http://static.id.zalora.net/p/hana-0956-6778112-5.jpg',
    'http://static.id.zalora.net/p/hana-0953-6778112-1.jpg',
    'http://static.id.zalora.net/p/hana-0954-6778112-2.jpg',
    'http://static.id.zalora.net/p/hana-0955-6778112-3.jpg'
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    this.showImage = false;
    if (!this.showImage) {
      $('.show-images').hide();
    }
  }

  show(id) {

    this.showImage = true;
    if (this.showImage) {
      $('.show-images').show();
      this.image = this.images[id];
    }
  }

  hide() {
    this.showImage = false;
    this.image = '';
    if (!this.showImage) {
      $('.show-images').hide();
    }
  }
}


