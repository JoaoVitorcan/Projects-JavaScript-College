import { Component } from '@angular/core';
import { TeamserviceService } from './teamservice.service';
import { MessageService } from './message.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private teamservice: TeamserviceService,private messageservice: MessageService){}

}