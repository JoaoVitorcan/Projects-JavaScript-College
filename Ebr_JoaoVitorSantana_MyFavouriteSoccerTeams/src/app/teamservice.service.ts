import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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

  getContentById(id: string | null): Observable<Content> {
    const url = `api/content/${id}`;
    return this.http.get<Content>(url);
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