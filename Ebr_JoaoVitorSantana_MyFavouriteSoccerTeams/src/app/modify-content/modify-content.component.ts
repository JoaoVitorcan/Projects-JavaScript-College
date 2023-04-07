import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { TeamserviceService } from '../teamservice.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentDialogComponent } from '../content-dialog/content-dialog.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  @Output() contentAdded = new EventEmitter<Content>();

  newContentItem: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
    id: null
  }

  constructor(private teamservice: TeamserviceService, private dialog: MatDialog,private messagesService: MessageService) {}
  
   addContent(): void {
    this.teamservice
      .addContent(this.newContentItem)
      .subscribe(newContent  => { 
        this.contentAdded.emit(newContent);
        this.newContentItem = {
          id: null,
          title: '',
          description: '',
          creator: '',
          imgURL: '',
          type: '',
          tags: [],
        };
      }); 
    }
    openDialog(): void {
      const dialogRef: MatDialogRef<ContentDialogComponent> = this.dialog.open(ContentDialogComponent, {
        width: '400px',
        data: { title: 'Add Book' } 
      });

    dialogRef.afterClosed().subscribe((result: Content | undefined) => {
      if (result) {
        this.messagesService.add(`Content added: ${result.title}`);
        this.contentAdded.emit(result);
        this.teamservice.addContent(result).subscribe();
      }
      dialogRef.componentInstance.contentAdded.subscribe((content: Content) => {
        console.log(`Content added: ${content.title}`);
        this.contentAdded.emit(content);
      });
    });
  }
}