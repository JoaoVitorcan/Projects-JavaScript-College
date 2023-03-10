import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { TeamserviceService } from '../teamservice.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {

  @Input() content:Content[];
  @Input() team:Content[];
  @Input('ngModel')title: string;
  name= "João Vitor Santana Ebrenz";

  
  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';


 /* contentItem:Content = {
    id: 1,
      title:"Flamengo",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
      type:"Best",
      tags:["Flamengo", "Rio"]
  };
  contentItem2:Content = {
    id: 2,
    title:"Fluminense",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    type:"Second",
    tags:["Fluminense", "Sp"]
  };
  contentItem3:Content = {
    id: 3,
      title:"Vasco",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://imagepng.org/wp-content/uploads/2018/04/vasco-escudo.png",
      type:"Third",
      tags:["Vasco", "Bh"]
  };

  contentItem4:Content = {
    id: 4,
      title:"Flamengo",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      /*imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
      */ /* type:"Best",
      tags:["Flamengo", "Rio"]
  };
  contentItem5:Content = {
    id: 5,
    title:"Fluminense",
    description:"Soccer Team",
    creator:"João Vitor Santana Ebrenz",
    /*imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    */  /*type:"Second",
    tags:["Fluminense", "Sp"]
  };
  contentItem6:Content = {
    id: 6,
      title:"Vasco",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      /*imgURL:"https://imagepng.org/wp-content/uploads/2018/04/vasco-escudo.png",
      */    /*type:"Third",
      tags:["Vasco", "Bh"]
  };

  contentItem7: Content= {
    id:7,
    title:"Flamengo",
    description:"Best brazilian football club",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
    type:"Best",
    tags:["Flamengo", "Rio"]
  };
  
  contentItem8:Content= {
    id:8,
    title:"Fluminense",
    description:"Second best brazilian soccer team",
    creator:"João Vitor Santana Ebrenz",
    imgURL:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    type:"Second",
    tags:["Fluminense", "Sp"]
  }*/
  

  /*contentArray: Content[];*/

  constructor(private teamservice: TeamserviceService){
    this.title = '';
  this.content = [];
  this.team = [];

    /*this.mySoccerTeams.addContent(this.soccerTeams);
    this.mySoccerTeams.addContent(this.soccerTeams2);
    this.mySoccerTeams.addContent(this.soccerTeams3);  
    this.contentArray = [this.contentItem];
    this.contentArray.push(this.contentItem); 
    this.contentArray.push(this.contentItem2);
    this.contentArray.push(this.contentItem3);
    this.contentArray.push(this.contentItem4);
    this.contentArray.push(this.contentItem5);
    this.contentArray.push(this.contentItem6);
    this.contentArray.push(this.contentItem7);
    this.contentArray.push(this.contentItem8); */
  }

  search() {
    const content = this.content.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
    console.log(this.searchTerm);
    if (content) {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" found.`;
      this.messageColor = 'green';
      
    } else {
      this.message = `Content with title "${this.searchTerm.toLowerCase()}" not found.`;
      this.messageColor = 'red';
    }
  }
  ngOnInit(){

    this.teamservice.getSoccerTeams().subscribe(content=> this.content = content);
    this.teamservice.getSpecificTeam(1).subscribe((team: Content[]) => this.team = team);
  } 
  addNewContent(newContent:any){
    this.content.push(newContent);0
    this.content = [...this.content];
   }

}
