import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';


@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentArray: Content[], type?: string) {
    if (!contentArray ){
      return contentArray;
    } 
    else {
      return contentArray.filter((team)=> 
      { 
        return team.type?.toLowerCase() === type?.toLowerCase()
      });
    }
  }

}
