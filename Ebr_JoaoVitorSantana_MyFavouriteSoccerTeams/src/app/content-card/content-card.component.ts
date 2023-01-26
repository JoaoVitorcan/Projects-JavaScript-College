import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit  {

  soccerTeams: Content= {
    id:1,
    title:"Flamengo",
    description:"Best brazilian football club",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
    type:"Best one"
  
  }
  soccerTeams2:Content= {
    id:2,
    title:"Fluminense",
    description:"Second best brazilian soccer team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    type:"Second best one"
  }
  soccerTeams3:Content= {
    id:3,
    title:"Botafogo",
    description:"Third brazilian football player",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2016/11/botafogo-logo-0.png",
    type:"Third best one"
  }

  mySoccerTeams = new ContentList(this.soccerTeams);
  contentList = this.mySoccerTeams.getitems();

  constructor(){
    this.mySoccerTeams.addContent(this.soccerTeams);
    this.mySoccerTeams.addContent(this.soccerTeams2);
    this.mySoccerTeams.addContent(this.soccerTeams3);
  }
  ngOnInit():void{
    const card = document.getElementById('soccerTeams');
    console.log(card);
    if(card){
      card.innerHTML += this.mySoccerTeams.printProperties(0);
      card.innerHTML += this.mySoccerTeams.printProperties(1);
      card.innerHTML += this.mySoccerTeams.printProperties(2);
    }
  }
}
