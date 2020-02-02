import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabs = [
    {id: 'wanita', title: 'Wanita'},
    {id: 'pria', title: 'Pria'},
    {id: 'anak', title: 'Anak-anak'}
  ];

  banners = [
    'https://static-id.zacdn.com/cms/cw50/giftfrmothersday_women_mob.jpg',
    'https://static-id.zacdn.com/cms/cw50/rpllplextra30_app_women.jpg',
    'https://static-id.zacdn.com/cms/cw50/zalocaextra25_women_app.jpg',
    'https://static-id.zacdn.com/cms/cw50/christmasgiftguide_women_app.jpg'
  ];

  banners2 = [
    'https://static-id.zacdn.com/cms/cw51/380x400_APPFEED_HANAUPTO80_WOMEN.jpg',
    'https://static-id.zacdn.com/cms/cw51/380x400_APPFEED_WACOALFROM50_WOMEN.jpg',
    'https://static-id.zacdn.com/cms/cw51/380x400_APPFEED_COTTONONLOST_WOMEN.jpg',
    'https://static-id.zacdn.com/cms/cw51/380x400_APPFEED_EOSSWEEKLYBRAND_ALDONA_WOMEN.jpg',
    'https://static-id.zacdn.com/cms/cw51/380x400_APPFEED_PHILLIPEJOURDANUPTO80_WOMEN_REV.jpg',
    'https://static-id.zacdn.com/cms/cw51/380x400_APPFEED_ELLIGERMANYEXTRA10VC_WOMEN_rev3.jpg',
    'https://static-id.zacdn.com/cms/dy/par0women0promopartner0all0na_women_380x400.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

  onTab(id) {
    $('#' + id).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');

  }

  goToDetail() {
    console.log('test');
  }

}
