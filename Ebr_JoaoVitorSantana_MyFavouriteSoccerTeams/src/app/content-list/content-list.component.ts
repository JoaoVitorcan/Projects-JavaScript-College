import { Component , Input , OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Content } from '../helper-files/content-interface';
import { TeamserviceService } from '../teamservice.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {


  contentList : Content[];

  filteredString:any = '';
  searchTerm: string = '';
  message: string = '';
  messageColor: string = '';
  static highestId: 0;

  constructor(private teamservice: TeamserviceService, private route: ActivatedRoute ){

  
    this.contentList= [];
    this.route.params.subscribe((params: { [x: string]: any; }) => {
      const id = params['id'];
    })
    } 
    
  search() {
    const content = this.contentList.find(c => c.title.toLowerCase().substring(0,  this.searchTerm.length) === this.searchTerm.toLowerCase());
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

    this.teamservice.getContent().subscribe((content: Content[]) => this.contentList = content);
  } 

  addNewContent(newContent:any){
    this.contentList.push(newContent);
    this.contentList = [...this.contentList];
   }

   addContentToList(newContentItem: Content) : void {
    
    this.teamservice.getContent().subscribe((content: Content[]) =>this.contentList = content)
    console.log(`Content added succesfully : ${newContentItem.title}`);
    console.log(newContentItem);
    }

  updateContentInList(contentItem: Content): void {
      this.teamservice.updateContent(contentItem)
      .subscribe(() =>
      console.log("Content updated successfully")
    );
    } 
}