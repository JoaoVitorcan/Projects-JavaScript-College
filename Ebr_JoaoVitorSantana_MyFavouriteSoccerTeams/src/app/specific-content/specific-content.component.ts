import { Component,OnInit } from '@angular/core';
import { TeamserviceService } from '../teamservice.service';
import { Content } from "../helper-files/content-interface";
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-specific-content',
  templateUrl: './specific-content.component.html',
  styleUrls: ['./specific-content.component.scss']
})
export class SpecificContentComponent implements OnInit {


  contentId: number;
  contentItem: Content | undefined;

  constructor(private route: ActivatedRoute, private teamservice : TeamserviceService, private messageservice:MessageService) {
    this.contentId = this.route.snapshot.params['id'];
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamservice.getContentById(id).subscribe((item: Content | undefined) => {
      this.contentItem = item;
      this.messageservice.add("Showing Content of Id " +id +" and Title ")
    });
  }
}