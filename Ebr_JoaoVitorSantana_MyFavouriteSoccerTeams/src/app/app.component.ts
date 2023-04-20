import { Component } from '@angular/core';
import { TeamserviceService } from './teamservice.service';
import { MessageService } from './message.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private teamservice: TeamserviceService,private messageservice: MessageService ,private router: Router){}

    ngOnInit() {
      const id = 8;
    }
    navigateToList() {
      this.router.navigate(['/list']);
    }
  
  
}