import { Component, EventEmitter, OnInit, Output , Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit  {
 
  @Input() content: Content;
  constructor() {
    this.content = {
      id: 1,
      title:"Flamengo",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
      type:"Best",
      tags:["Flamengo", "Rio"]
    },
    {
      id: 2,
      title:"Fluminense",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
      type:"Second",
      tags:["Fluminense", "Sp"]
    };

}
ngOnInit(): void {
  
}
imageText() {
  console.log("Image Url: " + this.content.imgURL + "Image Title:" + this.content.title);
}
  

   /* filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';

  contentItem: Content= {
    id:1,
    title:"Flamengo",
    description:"Best brazilian football club",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
    type:"Best team"
  
  }
  contentItem2:Content= {
    id:2,
    title:"Fluminense",
    description:"Second best brazilian soccer team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    type:"Second best team"
  }
  contentItem3:Content= {
    id:3,
    title:"Botafogo",
    description:"Third brazilian best team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2016/11/botafogo-logo-0.png",
    type:"Third best team"
  }

  contentItem4:Content = {
    id: 4,
    title:"Gremio",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://www.netflu.com.br/wikiflu/images/d/d6/Gr%C3%AAmio.png",
    type:"Fourth best team",
    tags:["Brazil", "Team"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Internacional",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2015/05/internacional-logo-0.png",
    type:"Fifth best team",
    tags:["Brazil", "Team"]
  };
  contentItem6:Content = {
    id: 6,
    title:"Vasco",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://imagepng.org/wp-content/uploads/2018/04/vasco-escudo.png",
    type:"sixth best team",
    tags:["Brazil", "Team"]
};

contentItem7: Content= {
  id:7,
  title:"Flamengo",
  description:"Best brazilian football club",
  creator:"João Vitor Santana Ebrenz",
  imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
  type:"Best team"

};

contentItem8:Content= {
  id:8,
  title:"Fluminense",
  description:"Second best brazilian soccer team",
  creator:"João Vitor Santana Ebrenz",
  imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
  type:"Second best team"
}


contentArray: Content[];

  /* constructor(){
    /*  this.mySoccerTeams.addContent(this.soccerTeams);
    this.mySoccerTeams.addContent(this.soccerTeams2);
    this.mySoccerTeams.addContent(this.soccerTeams3);  */
    /* this.contentArray = [this.contentItem]; */
    /*this.contentArray.push(this.contentItem2);*/
    /*this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    this.contentArray.push(this.contentItem6);
    this.contentArray.push(this.contentItem7);
    this.contentArray.push(this.contentItem8);
  }*/

  /*search() {
    const content = this.contentArray.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }*/
 /* ngOnInit():void{
   /* const card = document.getElementById('soccerTeams');
    console.log(card);
    if(card){
      card.innerHTML += this.mySoccerTeams.printProperties(0);
      card.innerHTML += this.mySoccerTeams.printProperties(1);
      card.innerHTML += this.mySoccerTeams.printProperties(2);
    } 
  } */
}

