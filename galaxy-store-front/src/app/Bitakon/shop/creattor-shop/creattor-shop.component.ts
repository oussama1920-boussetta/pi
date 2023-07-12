import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../../services/nft-data/nft-data.service';
import { CollectionDataService } from '../../services/collection/collection-data.service';

@Component({
  selector: 'app-creattor-shop',
  templateUrl: './creattor-shop.component.html',
  styleUrls: ['./creattor-shop.component.scss']
})
export class CreattorShopComponent implements OnInit {


  minValue: number = 0;
  maxValue: number = 100;
  shopNft : any;
  collectionData : any;

  creatorsData = [
    {
      bgImg:'assets/img/creator/bg/creator-bg-1.jpg',
      creator:'assets/img/creator/creator-1.jpg',
      name:'Benjamin_025'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-2.jpg',
      creator:'assets/img/creator/creator-2.jpg',
      name:'Jimmy_Wright'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-3.jpg',
      creator:'assets/img/creator/creator-3.jpg',
      name:'CloneX_#11070'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-4.jpg',
      creator:'assets/img/creator/creator-4.jpg',
      name:'Montiya_monk'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-5.jpg',
      creator:'assets/img/creator/creator-5.jpg',
      name:'Ida_Chapman'
    },
    {
      bgImg:'assets/img/creator/bg/creator-bg-6.jpg',
      creator:'assets/img/creator/creator-6.jpg',
      name:'@xander_hall'
    },
  ]

  constructor(private shopItems:NftDataService,private collectionItems:CollectionDataService) {
    this.shopNft = shopItems.shopData();
    this.collectionData = collectionItems.collectionData();
   }

  ngOnInit(): void {
  }

}
