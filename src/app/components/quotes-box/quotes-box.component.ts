import { Component, Input } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';

@Component({
  selector: 'app-quotes-box',
  templateUrl: './quotes-box.component.html',
  styleUrls: ['./quotes-box.component.scss']
})
export class QuotesBoxComponent {

  @Input() quote!:Quote;

}
