import { Component, Input, OnChanges } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-twitter-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss']
})
export class TwitterButtonComponent implements OnChanges{
  
  @Input() quote!:Quote;

  twitterURL:string='https://twitter.com/intent/tweet?url=';
  URL:string='';

  ngOnChanges(): void {
    this.sendTWitterURL(this.quote);
  }

  cleanQuote(quote:string):string{
    quote=quote.replaceAll('"', ' ');
    return quote;
  }

  sendTWitterURL(quote:Quote):void{
    let sendQuote=this.cleanQuote(quote.quote);
    this.URL=`${this.twitterURL}${sendQuote}%0ABy ${quote.author}`; //%0A sirve para indicar un salto de línea en la URL
  }

}
