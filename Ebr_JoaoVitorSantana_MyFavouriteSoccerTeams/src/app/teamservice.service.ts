import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap, timer } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ContentListComponent } from './content-list/content-list.component';
import { switchMap} from 'rxjs/operators';


  @Injectable({
    providedIn: 'root'
  })
  export class TeamserviceService {
    private contentUrl = 'api/content';
  
    private httpOptions = {
      headers: new HttpHeaders({ 'Content-type':'application/json' })
      };
    
    constructor(private messageservice: MessageService,private  http: HttpClient) {
     }
  
 
    getContent() : Observable<Content[]>{
      return this.http.get<Content[]>(this.contentUrl);
      
    }
  
    addContent(newContentItem: Content): Observable<Content> {
  
      return this.http.post<Content>(this.contentUrl, newContentItem, this.httpOptions)
      .pipe(
        tap(() => {
          this.messageservice.add('Content added successfully');
        })
      );
    }
    
    updateContent(contentItem: Content): Observable<any>{
      return this.http.put("api/content", contentItem,
      this.httpOptions);
    } 
 
  }
