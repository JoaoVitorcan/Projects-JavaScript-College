import { Component , Input , OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  @Input() content: Content;
  constructor() {
    this.content = {
      id: 1,
      title:"Flamengo",
      description:"Soccer Team",
      creator:"João Vitor Santana Ebrenz",
      imgURL:"https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-0.png",
      type:"Best Team",
      tags:["Brazil", "Team"]
    };
}
ngOnInit(): void {


}
imageText() {
  console.log("Image Url: " + this.content.imgURL + "Image Title:" + this.content.title);
}
}