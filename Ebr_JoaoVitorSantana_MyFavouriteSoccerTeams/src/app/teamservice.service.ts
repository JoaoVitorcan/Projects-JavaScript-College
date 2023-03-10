import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDb';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TeamserviceService {
  getcontentCardArrayLength: any;
  constructor(private messageservice: MessageService) { }
  
  getSoccerTeams(): Observable<Content[]> {
    const teams = of(CONTENT)
    this.messageservice.add('content array loaded!');
    return teams;
  }
  getSpecificTeam(id : number): Observable<Content[]>{
    const team = CONTENT.filter(obj=>obj.id == id);
    this.messageservice.add('Content item at :' + id )
    return of(team)
  }


  getClickedTeamCard(idNum:number){
    const team = CONTENT.filter(obj => obj.id == idNum);
    this.messageservice.add("Team Card Retrieved at id" + idNum)
    return of(team)
  }

 
}