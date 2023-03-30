import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from '../helper-files/content-interface';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const content : Content[] = this.CONTENT;
    return {content};
  }

  CONTENT:Content[]=[
  {

    id: 0,
      title:"Flamengo",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
      type:"Best",
      tags:["Flamengo", "Rio"]
  },
 {
    id: 1,
    title:"Fluminense",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    type:"Second",
    tags:["Fluminense", "Sp"]
  },
 {
    id: 2,
      title:"Vasco",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://imagepng.org/wp-content/uploads/2018/04/vasco-escudo.png",
      type:"Third",
      tags:["Vasco", "Bh"]
  },
  {
    id: 3,
      title:"Flamengo",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
    /*  imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
     */  type:"Best",
      tags:["Flamengo", "Rio"]
  },
  {
    id: 4,
    title:"Fluminense",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    /*imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
   */ type:"Second",
    tags:["Fluminense", "Sp"]
  },
 {
    id: 5,
      title:"Vasco",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
     /* imgURL:"https://imagepng.org/wp-content/uploads/2018/04/vasco-escudo.png",
     */ type:"Third",
      tags:["Vasco", "Bh"]
  },

   {
    id:6,
    title:"Flamengo",
    description:"Best brazilian football club",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
    type:"Best",
    tags:["Flamengo", "Rio"]
  },
  
  {
    id:7,
    title:"Fluminense",
    description:"Second best brazilian soccer team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    type:"Second",
    tags:["Fluminense", "Sp"]
  }
];
}